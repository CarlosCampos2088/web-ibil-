# Apartados de la web y qué se actualiza solo

Propuesta v1 · 10/10/2026. Parte del brief (§5-§8) y añade lo que pidió Carlos: un mensaje diario, los reels y los sermones recientes, alimentados por lo que ya publica en redes.

---

## 1. Mapa de la web

Ordenado por la pregunta que responde el visitante, no por la estructura interna de la iglesia.

| # | Apartado | Dirección | Responde a | Se actualiza |
|---|---|---|---|---|
| 1 | **Inicio** | `/` | «¿Quiénes son, dónde, cuándo, qué pasará si voy?» | Sola (bebe de 4, 5, 6 y 8c) |
| 2 | **¿Eres nuevo?** | `/eres-nuevo/` | «¿Me atrevo a entrar?» Así es un domingo, preguntas frecuentes, cómo llegar, «te acompañamos» | Fija (revisión trimestral) |
| 3 | **Conoce a Jesús** | `/conoce-a-jesus/` | «¿Quién es Jesús y qué tiene que ver conmigo?» El evangelio en 6 pasos + hablar con alguien | Fija (la revisa el pastor) |
| 4 | **Predicaciones** | `/predicaciones/` | «¿Qué se enseña aquí?» Última predicación arriba; archivo por libro, serie y predicador; cada una con vídeo y síntesis | **Sola**, cada semana, desde YouTube y el archivo de síntesis |
| 4b | **En un minuto** (reels) | `/predicaciones/en-un-minuto/` | «Dame una idea para hoy» Los últimos shorts, en rejilla vertical | **Sola**, cada día, desde la cola de YouTube |
| 5 | **Un cafecito con Jesús** | `/cafecito/` | «Un mensaje breve para hoy» Un versículo o pensamiento al día, con la pieza visual del día; archivo por fecha | **Sola**, cada día, desde la cola de piezas diarias |
| 6 | **Agenda** | `/agenda/` | «¿Qué hay esta semana?» Próximos actos (nunca pasados) | **Sola** desde Google Calendar (y a mano si el calendario no está público) |
| 7 | **Nosotros** ▾ | | | |
| 7a | Quiénes somos | `/nosotros/` | Historia, iglesia madre, UEBE, «internacional» | Fija |
| 7b | Qué creemos | `/nosotros/que-creemos/` | 10 distintivos en tarjetas + confesión completa en acordeones | Fija (pastor) |
| 7c | Liderazgo | `/nosotros/liderazgo/` | Pastor, diáconos, responsables | Fija |
| 8 | **Vida de iglesia** ▾ | | | |
| 8a | Reuniones y grupos | `/vida-de-iglesia/` | Horarios en texto (nunca en imagen), qué es cada cosa | Desde `datos/iglesia.json` |
| 8b | Niños y jóvenes | `/vida-de-iglesia/ninos-y-jovenes/` | Para familias | Fija |
| 8c | Reflexión del mes | `/reflexiones/` | Un texto al mes | A mano, un archivo al mes |
| 8d | Galería | `/vida-de-iglesia/fotos/` | «¿Cómo es la gente?» Fotos reales por evento | A mano, cuando haya fotos |
| 9 | **Contacto** | `/contacto/` | Dirección, mapa, WhatsApp, correo, formulario, «¿podemos orar por ti?» | Desde `datos/iglesia.json` |
| — | Legal | `/aviso-legal/`, `/privacidad/`, `/cookies/`, `/accesibilidad/` | | Revisión anual |
| — | 404 | | Página de error propia con enlaces útiles | |

Cambios respecto al brief: se añaden **4b En un minuto**, **5 Un cafecito con Jesús** y **8d Galería**; la Agenda sube a primer nivel (es lo que más consulta la congregación).

### Menú (6 entradas + botón)

**Escritorio:** logo · ¿Eres nuevo? · Conoce a Jesús · Predicaciones ▾ (Sermones · En un minuto) · Cafecito · Nosotros ▾ · Vida de iglesia ▾ (Reuniones · Niños y jóvenes · Agenda · Reflexión · Galería · Contacto) · **[Visítanos este domingo]**

**Móvil:** menú desplegable con lo mismo; barra fija abajo con «Cómo llegar» y «WhatsApp». Contacto también en el pie de todas las páginas.

Decisión abierta: si Carlos prefiere «Contacto» visible en el menú principal, se saca de «Vida de iglesia» y quedan 7 entradas (cabe, pero en escritorio va más apretado).

---

## 2. Cómo se actualiza sola (sin tocar código ni la web)

### La idea
El PC de la iglesia ya publica en redes cada tarde a las 17:00 con `publicar_meta.py` y `publicar_youtube.py`. Se le añade **un paso más**: después de publicar, escribe un archivo pequeño (`datos/feed.json`) con lo publicado y lo sube a GitHub. Cloudflare detecta el cambio y reconstruye la web en un minuto. Nadie hace nada.

```
Cola de redes (PC)  ──17:00──▶  Instagram / Facebook / YouTube
         │
         └──17:05──▶  datos/feed.json  ──▶  GitHub  ──▶  Cloudflare reconstruye la web
```

Si el PC está apagado un día, la web **no se queda vacía**: muestra el último mensaje y los últimos vídeos. Nunca aparece «hoy no hay nada».

### Apartado por apartado

| Apartado | De dónde sale | Qué se necesita | Cookies |
|---|---|---|---|
| **Predicaciones** (última y archivo) | `cola_youtube.json` (tipo sermón, con `video_id` y fecha) + la síntesis del `PUBLICACION.md` de cada sermón | El paso de exportación lee la cola y la síntesis y crea el archivo Markdown de la predicación solo | El vídeo se carga tras aceptar cookies; antes, una miniatura propia con botón «Ver en YouTube» |
| **En un minuto** (reels) | `cola_youtube.json` (tipo short, `video_id`) | Nada más: los reels ya están en YouTube como shorts, así que no hace falta Instagram (que no tiene forma gratuita y limpia de insertarse) | Igual que arriba |
| **Un cafecito con Jesús** | `cola_extra.json`: la pieza diaria (versículo, día especial) con su imagen y su texto `alt`, que ya está escrito con cuidado | Decidir la **fuente del texto** (ver §3) | Ninguna: es imagen y texto propios |
| **Agenda** | Google Calendar «IBIL» público (solo eventos «IBIL:», sin el prefijo) | Que Carlos haga público el calendario y pase el enlace. Mientras tanto, `agenda_iglesia.json` | Versión 1: inserción tras consentimiento. Versión 2 (mejor): el paso de exportación lee el calendario y la web muestra una lista propia, sin cookies |
| **Reflexión del mes** | Un archivo Markdown al mes | Lo escribe Carlos o Claude | Ninguna |
| **Horarios, dirección, WhatsApp** | `datos/iglesia.json` | Cambiar un dato ahí lo cambia en toda la web | Ninguna |

### Reglas que se aplican solas
- **Veto:** nada de Gabriel Pérez pasa a la web (el paso de exportación lo filtra por nombre).
- Solo pasa lo que ya está publicado en redes (estado «hecho»): si Carlos no lo aprobó para redes, no sale en la web.
- Sin caras de menores: las piezas diarias ya cumplen la norma de redes.

---

## 3. «Un cafecito con Jesús»: decisiones

Carlos propone un mensaje diario que los predicadores suben al grupo de WhatsApp de la iglesia. Tres formas de alimentarlo, de más simple a más ambiciosa:

| Opción | Cómo | Trabajo de Carlos | Riesgo |
|---|---|---|---|
| **A. Lo que ya existe** (recomendada para empezar) | La pieza diaria de la cola de redes (versículo con su cita, día especial) es el cafecito del día | Ninguno: ya está programado hasta mayo de 2027 | Ninguno |
| **B. Mensajes de los predicadores** | Carlos (o quien lleve el grupo) copia el mensaje del WhatsApp a un archivo de texto, o se lo reenvía a Claude una vez a la semana y Claude crea los archivos | 5 minutos a la semana | Los mensajes de WhatsApp no se pueden leer automáticamente sin la API de empresa de Meta (de pago). Hay que revisarlos antes (ortografía, nada discutible en doctrina) |
| **C. Las dos** | A como base diaria; B cuando hay mensaje del predicador, que tiene prioridad ese día | Igual que B | Igual que B |

Recomendación: **empezar con A** (la web nace con contenido diario desde el primer día) y pasar a **C** cuando el grupo de predicadores tenga ritmo. El nombre «Un cafecito con Jesús» es cálido y cercano; lo mantengo salvo que Carlos prefiera otro.

Nota legal: los mensajes firmados por un predicador llevan su nombre solo con su consentimiento; la fe de los miembros no es dato público por defecto.

---

## 4. Orden de construcción propuesto

1. **Cimientos** (1 sesión): plantilla base (cabecera, menú, pie, barra móvil), sistema de diseño (`tokens.css`), aviso de cookies, página 404. Es lo que comparten todas las páginas.
2. **Apartados que se actualizan solos** (1-2 sesiones): Predicaciones, En un minuto, Cafecito, Agenda; y el paso de exportación en el PC. Primero porque son lo nuevo y lo que más se va a usar; si algo del flujo no funciona, mejor saberlo pronto.
3. **Apartados fijos** (1 sesión): ¿Eres nuevo?, Conoce a Jesús, Nosotros (3), Vida de iglesia (4), Contacto, legales.
4. **Portada** (1 sesión): se monta con las piezas anteriores; es donde se decide el diseño con más cuidado, y Carlos elige entre 2-3 versiones.
5. Contenido definitivo, auditorías y publicación (fases 3-5 del plan).

Antes de 1, una decisión de diseño general (media sesión): tipografía en acción, bloques de color, estilo de las tarjetas y de las fotos. Se enseña en una página de muestra, no en la portada.
