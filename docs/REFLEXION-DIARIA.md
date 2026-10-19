# Reflexión diaria: cómo se publica

Decidido con Carlos el 19/10/2026.

## Dos chats, una sola instrucción
Hay dos chats con la misma función: **«IBIL · Reflexión diaria (casa)»** en el ordenador y **«IBIL · Reflexión diaria (nube)»** en claude.ai/code, para el móvil. Los dos trabajan sobre el mismo repositorio de GitHub (`CarlosCampos2088/web-ibil-`, rama `main`), así que da igual cuál se use.

Para que no se pisen:
- **Antes de empezar**, siempre `git pull` para traer lo que haya subido el otro.
- **Al terminar**, `git commit` y `git push` en el momento; nada se queda sin subir.
- Si ya existe el archivo de un día, se avisa a Carlos y no se sobrescribe.

## Qué hace Carlos
Una vez a la semana pega en el chat **«IBIL · Reflexión diaria»** los mensajes de los predicadores, así:

```
Lunes 20/10 · Pastor Felipe Albacete
(texto tal cual)

Martes 21/10 · Hno. Carlos Campos
(texto tal cual)
```

Si falta el día, Claude los reparte por orden a partir del día siguiente. Si falta el autor, pregunta.

## Qué hace Claude
1. **Solo corrige**: erratas, tildes, espacios dobles, signos de apertura (¿ ¡), comillas «», mayúsculas y la puntuación que estorbe la lectura.
2. **No reescribe**: se queda la voz del predicador, sus palabras y su orden. Nada de añadir frases, títulos inventados ni doctrina. Si una frase no se entiende, pregunta en vez de adivinar.
3. **Versículos**: cita con referencia (Juan 3:16). Si el texto copia un versículo, se comprueba que sea RV60 literal; si no lo es, se avisa a Carlos y no se toca.
4. Crea un archivo por día en `contenido/reflexion-diaria/AAAA-MM-DD.md`:

```
---
fecha: 2026-10-20
autor: "Pastor Felipe Albacete"
titulo: "(primera frase corta del mensaje o la que dé el autor)"
pasaje: "Juan 3:16"   # si lo hay
---
(texto corregido)
```

5. Hace commit y push a `main`; Cloudflare publica en un minuto. La web enseña la de hoy y nunca una futura.
6. Responde a Carlos con la lista de días publicados y **cada cambio hecho** (antes → después), para que lo revise.

## Reglas
- Nada de Gabriel Pérez.
- Sin datos personales de terceros (nombres de enfermos, direcciones).
- Si un mensaje toca un tema delicado o polémico, se aparta y se pregunta a Carlos.
