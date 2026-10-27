# Pendientes e ideas para llegar a más gente (27/10/2026)

Leyenda: **[Claude]** lo hago yo solo · **[Carlos]** necesita tu cuenta o tu sí · **[Pastor]** su visto bueno.

## 0. Hecho el 27/10 mientras dormías
- **Una sola dirección para Google:** la dirección sin www ya redirige a la de www.
- **Predicaciones al día:** la web tiene ahora 6 sermones. El del 26/07 saldrá solo cuando sea público en YouTube, mañana 28/10.
- **La web se actualiza sola cada hora** con la tarea del PC «IEBIL actualizar web»:
  - corre a los :50 de cada hora y sin ventanas;
  - solo publica cuando hay algo nuevo;
  - deja registro en `_tmp/publicar_web.log`.
- **Exportador corregido:** ya no publica vídeos programados que aún son privados.
- **Agenda con formato de evento** para Google, y **resumen para buscadores con IA** en `/llms.txt`.
- **YouTube:** las descripciones de los vídeos nuevos llevan la web y el enlace a «¿Eres nuevo?». Hay copia del publicador original. Los vídeos ya subidos no se han tocado.
- **Impresos** en Drive, en `Marketing IBIL/Impresos web`:
  - tarjetas de invitación con QR, 10 por hoja A4 a doble cara;
  - cartel A4 para la puerta y el escaparate.

## 1. Pendientes (por orden)

### Ya preparado, solo falta tu «sí»
1. ~~**Una sola dirección para Google.**~~ Hecho el 27/10. Ahora la web abre igual con www y sin www, y Google puede verlas como dos webs repetidas. Está hecha la redirección de la versión sin www a la de www (rama `redireccion-www`). Di «fusiona la redirección» y la publico.
2. **[Pastor]** **Preguntas frecuentes en «Qué creemos»** (rama `preguntas-que-creemos`): ¿es una secta?, testigos de Jehová, la Virgen María, la Iglesia católica, qué significa «bautista», cómo es el culto, Navidad. Son justo las preguntas que la gente escribe en Google. Cuando el pastor las apruebe, se publican con el formato que Google usa para mostrar respuestas.
3. **[Carlos]** **Las 3 noticias en borrador del 15/10.** Di cuáles publicar y cuáles borrar.

### La web no se está actualizando sola
4. ~~**Faltan 5 predicaciones.**~~ Hecho el 27/10, y la tarea del PC ya está montada. YouTube tiene 7 sermones publicados y la web solo 2. El exportador no se está ejecutando porque la tarea del PC sigue sin montar. Lo ejecuto a mano para ponerlas al día. Después **[Carlos + Claude]** montamos la tarea en el PC, unos 10 minutos contigo delante.
5. **[Carlos]** **Reflexión diaria:** todavía no hay ninguna publicada. Faltan por abrir los dos chats (casa y nube) con la instrucción que está en Drive.

### Google, de la lista del 19/10
6. **[Carlos]** **Search Console**, el mapa de la web y la petición de indexación. Es lo más urgente si no está hecho. Ojo: en Cloudflare hay una verificación antigua de Google, de cuando la web estaba en Google Sites. Puede que la propiedad ya exista en otra cuenta. Mira si al entrar con tu Gmail personal ya aparece el dominio.
7. **[Carlos]** **Ficha de Google Maps:** la web nueva, categorías, descripción, fotos y la primera publicación.
8. **[Carlos]** **Bing Webmaster**, importando desde Google.
9. **[Carlos + Claude]** **Dominio con ñ:** añadirlo en Cloudflare y redirigirlo al principal.
10. **[Carlos]** **Google Cloud (IEBIL Publicador):** el enlace de privacidad a `/privacidad/`.
11. **[Carlos]** La web en la biografía de **Instagram, Facebook y YouTube**.
12. ~~La web en cada descripción de YouTube~~ Hecho para los vídeos nuevos., en la plantilla del sistema de publicación.
13. **[Carlos]** **Calendario «IBIL»** público para la agenda.

## 2. Ideas para mejor posicionamiento en Google (de más a menos impacto)

1. **[Claude]** **El texto de cada sermón en su página.** Ya tenemos los subtítulos de cada vídeo, los `.srt`. Con ellos hago una versión leída, corregida y ordenada por apartados, debajo del vídeo. Cada sermón pasa a ser una página larga con contenido propio, que es lo que más premia Google. Además, quien no puede ver un vídeo lo lee. **[Pastor]** revisa el primero y luego van solos.
2. **[Carlos]** **Reseñas en Google Maps.** Pedirlas por el grupo de la iglesia, con el mensaje que está en `SEO-PASOS.md`. Sin reseñas no se sale en el mapa.
3. **[Claude]** **Los actos de la agenda con formato de «evento».** Así Google los puede mostrar en sus resultados, por ejemplo «Concierto de Navidad en Logroño, 20 de diciembre».
4. **[Claude + Pastor]** **Página «Si vienes de Latinoamérica».** Tres cuartas partes de la congregación viene de allí y mucha gente busca «iglesia cristiana para latinos en Logroño». Sería una página corta: qué te vas a encontrar, que se habla español de todas partes, que no hace falta conocer a nadie, y fotos.
5. **[Claude]** **Una página por pregunta frecuente con mucha búsqueda**, por ejemplo «¿Qué es una iglesia evangélica?» o «¿Qué pasa en un culto evangélico?». Saldrían de las preguntas frecuentes una vez aprobadas.
6. **[Claude]** **Títulos de YouTube con «Logroño»** en la descripción, y la web enlazada en la primera línea. YouTube es el segundo buscador del mundo, y Google muestra sus vídeos.
7. **[Claude]** **Preparar la web para las búsquedas con IA**, como ChatGPT, Gemini o Copilot. Se hace con un archivo de resumen para inteligencias artificiales y datos estructurados completos. Es poco trabajo, todo mío.

## 3. Ideas para llegar a más gente (fuera de Google)

1. **[Carlos]** **Campaña de Meta en noviembre**, que ya estaba en el plan. Va dirigida a 15 km de Logroño y lleva a «¿Eres nuevo?», no a la portada.
2. **[Claude → Carlos]** **Tarjetas de invitación con código QR** para que cada hermano tenga 5 en la cartera. Por delante, «Te esperamos este domingo a las 11:30». Por detrás, la dirección, el WhatsApp y el QR a «¿Eres nuevo?». Yo hago el diseño con la marca y tú las imprimes.
3. **[Claude → Carlos]** **Un cartel con QR en la puerta y el escaparate** del local, con los horarios. La gente que pasa por Ronda de los Cuarteles es tu vecindario.
4. **[Claude → Carlos]** **Nota de prensa para el concierto o acto de Navidad** del 20/12, para Nuevecuatrouno, La Rioja y Rioja2. Si la publican, trae visitas y un enlace muy valioso para Google.
5. **[Carlos]** **Agenda cultural del Ayuntamiento de Logroño:** dar de alta los actos abiertos, como Navidad.
6. **[Carlos]** **Asociaciones latinoamericanas de La Rioja** y tiendas latinas: dejar tarjetas o un cartel y pedir que enlacen la web. **[Claude]** busco la lista con nombres y contactos.
7. **[Carlos]** **Canal de WhatsApp de la iglesia.** Es gratis, la gente lo sigue sin dar su número y se publican avisos y la reflexión del día. Lo enlazamos desde la web.
8. **[Claude → Carlos]** **Google Ad Grants**, que da anuncios gratis en Google para entidades sin ánimo de lucro, hasta 10 000 $ al mes. **Hay que comprobar si una iglesia es elegible en España.** Lo investigo y te digo sí o no con fuentes antes de que muevas nada.

## 4. Propuesta de orden
- **Esta semana:** pendientes 1, 4, 6, 7 y 11, más la idea 2 de Google, las reseñas.
- **Noviembre:**
  - el texto de los sermones;
  - los eventos;
  - las tarjetas y el cartel;
  - la campaña de Meta;
  - la nota de prensa de Navidad.
- **Diciembre:**
  - la página «Si vienes de Latinoamérica»;
  - las preguntas frecuentes en páginas propias;
  - las asociaciones;
  - Ad Grants, si es elegible.

## 5. Lo que he encontrado investigando (27/10)
- **Directorio de iglesias evangélicas de Logroño** en https://linktr.ee/iglesiasevangelicaslogrono:
  - salen 6 iglesias y IBIL no está;
  - no dice quién lo lleva. Pregunta en las otras iglesias o busca la cuenta en Instagram para pedir que nos añadan.
- **Logroño Comunitario**, el directorio municipal de recursos del barrio: https://www.logronocomunitario.com
  - incluye al menos una parroquia;
  - se pide el alta en comunitario@logrono.es.
- **Gobierno de La Rioja**, listado de entidades de inmigración: https://www.larioja.org/servicios-sociales/es/entidades-centros-servicios/minorias-etnicas/entidades-minorias-etnicas-inmigracion
- **Asociaciones latinoamericanas** donde dejar tarjetas y presentarse. Confirma los datos antes de ir, porque algunas fichas son antiguas:
  - Asociación Colombiana de La Rioja (COLOR): http://asocolor.org/ · 618 274 593 · Av. Gonzalo de Berceo 40.
  - Alma Venezuela, asociación sociocultural de venezolanos en La Rioja: https://almavenezuela.org/
  - AVELAR (venezolanos en La Rioja), Rioja Acoge y AMIN (Asociación Mundo Inmigrante, C/ Torremuña 3).
- **Directorio oficial de lugares de culto** del Observatorio del Pluralismo Religioso: https://www.observatorioreligion.es/directorio-lugares-culto/
  - comprueba que IBIL aparece en Logroño con la dirección correcta;
  - si no aparece, se pide a través del Registro de Entidades Religiosas o del propio Observatorio.
- **Google Ad Grants**, anuncios gratis en Google:
  - Google admite **«organización religiosa»** entre las entidades válidas en España, así que IBIL, como parte de la IEBT inscrita en el Registro de Entidades Religiosas, probablemente puede pedirlo;
  - la verificación la hace Goodstack;
  - fuente: https://support.google.com/nonprofits/answer/3215869?hl=es
  - **La pega:** Ad Grants obliga a medir conversiones con una etiqueta de Google en la web. Eso supone poner cookies y un banner de consentimiento, y hoy la web no tiene ninguno a propósito. **Decisión tuya.** Mi recomendación es dejarlo para cuando estén hechas la ficha de Maps y las reseñas, y valorarlo entonces.
- **Google Workspace para entidades sin ánimo de lucro:** pasa por la misma verificación. Si se pide Ad Grants, se pide a la vez.
- **Ficha de Maps, la hora de cierre del domingo:** en la web dice que el culto «dura unas dos horas». Para la ficha sirve domingo de 10:00 a 13:30.
