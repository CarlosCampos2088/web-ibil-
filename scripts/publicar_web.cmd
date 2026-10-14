@echo off
rem Actualiza la web con lo publicado en redes y lo sube a GitHub (Cloudflare reconstruye sola).
rem Lo lanza la tarea programada del PC despues de publicar en YouTube/Meta. Tambien se puede ejecutar a mano.
cd /d "%~dp0.."
py scripts\exportar_feed.py || exit /b 1
git add -A
git diff --cached --quiet && (echo Sin cambios & exit /b 0)
git commit -q -m "Actualizacion automatica: predicaciones, shorts y agenda"
git remote get-url origin >nul 2>&1 && git push -q origin HEAD
echo Hecho
