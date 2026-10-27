@echo off
rem Actualiza la web con lo publicado en redes y lo sube a GitHub (Cloudflare reconstruye sola).
rem Lo lanza cada hora la tarea programada «IEBIL actualizar web» (a los :50, despues de la de YouTube).
rem Tambien se puede ejecutar a mano. Registro en _tmp\publicar_web.log.
cd /d "%~dp0.."
if not exist _tmp mkdir _tmp
echo ==== %date% %time% >> _tmp\publicar_web.log

rem Solo trabaja en la rama main; si alguien esta en otra rama, no toca nada.
for /f %%b in ('git rev-parse --abbrev-ref HEAD') do set RAMA=%%b
if not "%RAMA%"=="main" (echo Rama %RAMA%: no se publica >> _tmp\publicar_web.log & exit /b 0)

rem Trae lo que hayan subido otros chats (reflexion diaria, nube) antes de exportar.
git pull -q --rebase --autostash origin main >> _tmp\publicar_web.log 2>&1

py scripts\exportar_feed.py >> _tmp\publicar_web.log 2>&1 || exit /b 1

rem Solo lo que genera el exportador; nada mas del arbol de trabajo.
git add contenido/predicaciones datos/feed.json src/img/diario
git diff --cached --quiet && (echo Sin cambios >> _tmp\publicar_web.log & exit /b 0)
git commit -q -m "Actualizacion automatica: predicaciones, shorts y agenda"
git push -q origin main >> _tmp\publicar_web.log 2>&1
echo Hecho >> _tmp\publicar_web.log
