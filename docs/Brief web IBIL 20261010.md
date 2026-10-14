# Brief web IBIL 20261010

Instrucciones completas para construir la nueva web de la Iglesia Bautista Internacional de Logroño (IBIL).

- Destinatario: Claude Code (sesiones en la nube, sobre el repositorio de GitHub de la web).
- Responsable del proyecto: Carlos Campos, diácono de IBIL. Toda decisión final es suya o del pastor.
- Fecha: 10/10/2026. Versión 1.
- Este documento reúne todo lo decidido hasta hoy: datos de la iglesia, marca, estructura, contenidos, investigación de otras iglesias, parte legal, posicionamiento, técnica, flujo de trabajo y pendientes.

---

## 0. Cómo usar este documento (léelo antes de tocar nada)

1. Léelo entero antes de empezar. Es la fuente de verdad del proyecto.
2. Orden de prioridad si algo se contradice: 1) lo que diga Carlos en la sesión; 2) este documento; 3) el manual de marca de la carpeta «marca»; 4) la investigación del apartado 16.
3. Tu primera tarea es crear en la raíz del repositorio un archivo CLAUDE.md con las reglas esenciales de este brief (marca, tono, reglas legales, flujo de trabajo, qué no hacer), para que cada sesión nueva las cargue sin releer todo. Deja este brief en /docs y enlázalo desde CLAUDE.md.
4. No inventes datos. Todo lo marcado [PENDIENTE] se deja en la web como hueco entre corchetes y se añade a la lista de pendientes que entregas al terminar cada fase.
5. No añadas doctrina propia. Los textos sobre fe y doctrina salen solo de las fuentes de la iglesia (Anexo A). Todo texto doctrinal es BORRADOR hasta que lo revise el pastor.
6. Trabaja siempre en una rama y abre una solicitud de cambios (pull request). No fusiones nada en la rama principal sin el visto bueno de Carlos.
7. No toques el dominio ni los DNS. Eso se hace al final (apartado 15), cuando Carlos lo diga.
8. Al terminar cada fase entrega: enlace de vista previa (o capturas en móvil y escritorio si Cloudflare aún no está conectado), lista de cambios y lista de huecos [ ] pendientes.

---

## 1. Resumen del proyecto

### 1.1. Objetivo
Sustituir la web actual (Google Sites, https://www.iglesiabautistalogrono.com/) por una web propia, bonita, intuitiva y rápida, con dos fines:
- Punto de encuentro e información para la congregación.
- Herramienta evangelística: que una persona de Logroño que no conoce la iglesia, o que no es creyente, entienda en segundos quiénes somos, qué creemos, dónde y cuándo nos reunimos, qué pasará si viene, y pueda conocer el evangelio.

### 1.2. Público
1. Visitantes sin trasfondo evangélico que buscan una iglesia o tienen preguntas sobre Jesús.
2. Familias (hay Escuela Dominical para niños).
3. Personas de otros países: la iglesia es «Internacional» y Logroño tiene mucha población nacida fuera de España.
4. Miembros de la iglesia (horarios, agenda, predicaciones).

### 1.3. Principios que mandan sobre todo lo demás
- La web debe responder en 5 segundos: quiénes somos, dónde, cuándo, qué pasará si voy.
- Fotos reales de la iglesia. Nada de bancos de imágenes ni imágenes hechas con IA.
- Menú corto (6 elementos como máximo) y un solo botón principal: «Visítanos este domingo».
- Que se actualice sola en lo posible: predicaciones desde YouTube y agenda desde Google Calendar. El contenido caducado es el peor error de las webs de iglesias.
- Primero el móvil. Accesible. Rápida.
- Cálida y comunitaria, sobria, sin lenguaje comercial ni aspecto de megaiglesia. Que el visitante piense «sé quiénes son, veo una comunidad real, entiendo lo que creen y sé cómo conocerlos», no «qué buen marketing».
- Coste de funcionamiento: cero (alojamiento gratuito; el dominio ya está pagado).

---

## 2. Datos de la iglesia

### 2.1. Ficha

| Dato | Valor | Fuente |
|---|---|---|
| Nombre oficial | Iglesia Bautista Internacional de Logroño | Guía de doctrinas 2025, folleto, web actual |
| Nombre de uso | IBIL (siempre así, sin puntos) | Decisión de Carlos y manual de marca |
| Dirección | C/ Ronda de los Cuarteles 32, bajo, 26005 Logroño (La Rioja) | Folleto, guía, web actual |
| Coordenadas aproximadas | 42.468558, -2.458016 | Mapa de la web actual |
| Pastor | Felipe Albacete (pastor presidente), con su esposa, la misionera Patricia Fernández | Guía, folleto, web actual |
| Trayectoria del pastor | Desde 2011 dedicados a la revitalización y plantación de iglesias en Navarra, La Rioja y Soria; Felipe es presidente de la AIBNE (Asociación de Iglesias Bautistas del Norte de España) | Web actual |
| Diáconos | Carlos Campos y su esposa Evelyn Torres (en la web actual aparece «Carmpos»: es una errata) | Web actual |
| Origen | Fruto de la obra misionera de la Iglesia Evangélica Bautista de Tudela (IEBT), a través de su punto de misión de Calahorra. Fundación oficial: **marzo de 2024** (firma del contrato del local de Ronda de los Cuarteles, 32). Antes: reuniones en la IB Internacional de Calahorra y, desde 2023, en hogares de la congregación en Logroño (actualización 12/10/2026) | Folleto, web actual |
| Afiliación | Unión Evangélica Bautista de España (UEBE); apoya el Pacto Bautista. Relación con la AIBNE a través del pastor | Folleto, web actual |
| Misión | Llevar la luz de Cristo a cada persona, ciudad y nación (Col 1:28; Jn 8:12; Mt 5:14-16) | Web actual y folleto |
| Lema | Firmes en la Verdad · Creciendo en Cristo · Haciendo discípulos | Web actual y folleto |
| Versículo de la web actual | Colosenses 1:28 | Web actual |
| Versículo del manual de marca | Salmo 119:105 | Manual de marca |
| Identidad (web actual) | Iglesia de tradición bautista: autoridad de las Escrituras, fe personal en Jesús y bautismo de creyentes por inmersión; evangelística, fiel a la Palabra y cristocéntrica | Web actual |
| Versión bíblica | Reina-Valera 1960 (las citas, literales) | Guía de doctrinas; uso de Carlos |
| Correo | [PENDIENTE, ver 2.2] | — |
| Teléfono | No se publica salvo consentimiento expreso del titular | Decisión de este brief |
| YouTube | https://www.youtube.com/@IglesiaBautistaLogroño | Web actual |
| Instagram | https://www.instagram.com/ibilogro/ | Web actual |
| Facebook | https://www.facebook.com/IBILogro/ | Web actual |
| Ministerio de mujeres | Mujeres de Fe: mujeresdefe.es | Folleto |
| Dominio principal | iglesiabautistalogrono.com (también existe iglesiabautistalogroño.com, que redirigirá al principal) | GoDaddy |

### 2.2. Contradicciones entre fuentes (no las resuelvas tú)

| Dato | Folleto (oct. 2024) | Web actual (2026) | Guía (ago. 2025) | Qué usar mientras tanto |
|---|---|---|---|---|
| Año de fundación | 2019 | 2024 | — | **Marzo de 2024** (resuelto el 12/10/2026: firma del contrato del local) |
| Nombre | IBIL (con errata «IBIC») | IBIL; en la página de privacidad, «IEBIL» | IBIL | IBIL |
| Correo | iglesiatudela@gmail.com | redesiebal@gmail.com | iglesiatudela@gmail.com | redesiebal@gmail.com [PENDIENTE confirmar] |
| Domingo | Tarde: bienvenida 17:00, oración 17:30, culto 18:00 | Mañana: oración 10:00 a culto 13:30 | — | El de la web actual [PENDIENTE confirmar] |
| Asociación regional | — | AIBNE | — | AIBNE. En notas antiguas de Carlos aparece «AIME»; probablemente es la misma (AIBNE) [PENDIENTE confirmar] |

### 2.3. Iglesias hermanas (para «Nosotros»)

| Iglesia | Dirección |
|---|---|
| Iglesia Evangélica Bautista de Tudela (iglesia madre) | C/ Mediavilla 21, 31500 Tudela (Navarra) |
| Iglesia Evangélica Bautista de Pamplona | C/ Iturrama 25, 31007 Pamplona (Navarra) |
| Iglesia Bautista Internacional de Calahorra | C/ Cavas 44, 26500 Calahorra (La Rioja) |
| Cintruénigo | [PENDIENTE: dirección] (el folleto la cita sin dirección) |

### 2.4. Entidad titular para los textos legales
La guía de doctrinas se presenta «para uso en la Iglesia Evangélica Bautista de Tudela (IEBT) y sus puntos de misión en Navarra y La Rioja». Es probable (confianza 70%) que IBIL dependa jurídicamente de la IEBT. Titular para el aviso legal y la privacidad: [PENDIENTE: nombre de la entidad, NIF, domicilio social y número de inscripción en el Registro de Entidades Religiosas].

---

## 3. Horarios y actividades

Fuente: web actual (2026). [PENDIENTE: confirmar con Carlos que siguen vigentes.]

### 3.1. Domingos

| Hora | Actividad |
|---|---|
| 10:00 | Oración |
| 10:15 - 11:15 | Escuela Bíblica para jóvenes y adultos |
| 11:15 - 11:30 | Café |
| 11:30 - 13:30 | Culto de adoración (Santa Cena una vez al mes) |

- Los niños de hasta 12 años tienen Escuela Dominical durante la predicación.
- Al menos una vez al trimestre hay comida fraternal después del culto.

### 3.2. Entre semana y mensuales

| Cuándo | Actividad | Detalle |
|---|---|---|
| Miércoles, 19:00 - 21:00 | Estudio bíblico | Reunión dinámica para niños, jóvenes y adultos: Biblia, temas de actualidad y oración unos por otros. «Trae a tus amigos y familiares.» |
| Tercer viernes de cada mes, 20:00 - 22:00 | Vigilia de oración | Adoración, gratitud e intercesión por la iglesia, Logroño, España, las naciones y quienes pasan dificultades |
| Primer sábado de cada mes, 17:30 - 20:00 | Años Dorados | Para mayores de 50 años; además, paseos, encuentros y actividades durante el año |
| Durante el año | Otras actividades | Jóvenes, Hombres de Valor, Mujeres de Fe, Matrimonios, caminatas de oración, salidas evangelísticas, talleres de capacitación y discipulado |
| Semanal (folleto 2024) | Grupos Crecer | Grupos de 3 a 15 personas, presenciales y en línea, en la iglesia y en casas, para orar, estudiar la Biblia y ponerla en práctica [PENDIENTE: ¿siguen activos?] |

### 3.3. Ministerios vigentes (actualización 12/10/2026; sustituye la lista de la web actual)
- Evangelización y Misiones · Alabanza · Servicio · Escuela Dominical para niños (hasta 12 años, durante la predicación) · Años Dorados (mayores de 50; primer sábado de cada mes, 18:00; corregido por Carlos el 14/10/2026).
- Ministerio juvenil: arrancó en octubre de 2026 (confirmado el 14/10/2026); se muestra, con día y hora pendientes.
- Descripciones oficiales: llegarán en un documento de Patricia Fernández. Mientras tanto, una frase breve y neutra por ministerio, marcada [PENDIENTE: descripción oficial], sin inventar actividades.
- La oración del domingo, el estudio del miércoles y la vigilia mensual son actividades del horario, no ministerios.

#### 3.3 (antiguo). Ministerios según la web actual (solo referencia)
- Adoración: adorar a Dios, rendirle culto y alabarle.
- Oración: acercarnos a Jesús con confianza; en Él hay descanso y esperanza.
- Enseñanza: edificar y formar mediante el estudio de la Biblia.
- Evangelismo: ser luz y proclamar que Jesús ha resucitado y ofrece salvación y vida eterna a quien pone su fe en Él.
- Servicio: servir a la iglesia y a la comunidad (Mt 25:31-46; Mc 10:45; Ef 4:12).
- Departamentos de Administración y Comunicación (anuncios, promoción y redes sociales).

[PENDIENTE: qué ministerios siguen activos y quién los lleva.]

---

## 4. Identidad de marca

### 4.1. Decisión de marca (v2.1)
- El color principal es #0c5373, el original de IBIL. Es el que ya se usa en Canva (kit «Ibil»), en los reels y en las carátulas.
- El kit nuevo (carpeta «marca») propone #163A52 como principal. Se descarta como principal: queda solo como tono oscuro para fondos.
- El azul #1F5F80 del kit se elimina.
- El resto del kit (granate, arena, tipografías, reglas del manual) se adopta como complementario.

### 4.2. Paleta

| Rol | Color | Uso | Contraste |
|---|---|---|---|
| Principal | #0c5373 | Logo (símbolo y primera línea), titulares, botones, cabecera, enlaces | Blanco encima 8,4:1 · sobre arena 6,8:1 · sobre arena clara 7,5:1 ✓ |
| Oscuro | #163A52 | Solo fondos: pie y secciones oscuras | Arena encima 9,7:1 ✓ |
| Acento | Granate #7A2E3B | Segunda línea del logo, etiquetas, referencias bíblicas, filetes. Máximo 10 % | Sobre arena 7,5:1 ✓ |
| Fondo cálido | Arena #EFE7DA | Secciones | — |
| Fondo de página | Arena clara #F7F2E9 | Fondo general | — |
| Blanco | #FFFFFF | Tarjetas, aire | — |
| Texto | Carbón #2A2A2A | Texto corrido | ✓ |
| Texto secundario | Pizarra #4B5A64 | Pies, fechas, notas | ✓ |
| Sobre fondos oscuros | Azul claro #C9D3DA | Texto secundario sobre oscuro | Sobre #0c5373 5,5:1 ✓ |
| Sobre fondos oscuros | Rosa pálido #C9A0A8 | Etiquetas | Solo sobre #163A52 (5,2:1); sobre #0c5373 se queda en 3,6:1 ✗ |
| Decorativo | Piedra #8A9AA6 | Filetes y separadores. Nunca texto (2,9:1) | ✗ para texto |
| Bordes | Hueso #E3DACB | Bordes y líneas de tabla | — |

Proporción: arena y azul llevan el peso; el blanco limpia; el granate solo señala, nunca es fondo entero salvo piezas puntuales (Semana Santa, aniversario). Comprueba cualquier combinación nueva con un comprobador de contraste (mínimo 4,5:1 para texto normal y 3:1 para texto grande).

### 4.3. Tipografías
- Cormorant Garamond: títulos, versículos y nombre. Pesos 500 y 600; cursiva 500 para referencias bíblicas. Nunca por debajo de 18 px. En mayúsculas, espaciado del 18-20 %.
- Public Sans: texto corrido, menú, botones, horarios y etiquetas. Pesos 400 y 600. Base 16 px (18 px en móvil para textos largos). Etiquetas en mayúsculas con espaciado del 14-20 %.
- Licencia: ambas SIL Open Font License 1.1 (uso libre en web).
- Se alojan en la propia web (archivos WOFF2 de «marca/04 Tipografia/webfonts»). No se cargan desde Google Fonts, para no enviar la IP de los visitantes a Google (sentencia del Tribunal Regional de Múnich de 2022).
- Recurso editorial: una palabra de cada titular en Cormorant cursiva.
- Máximo dos tipografías en todo el sitio.

### 4.4. Logotipo

El símbolo es la paloma, la cruz y la Biblia abierta. No se redibuja: un solo color plano, sin degradados ni sombras.

| Versión | Uso | Tamaño mínimo en pantalla |
|---|---|---|
| A · Vertical (principal) | Portadas, carteles, fachada | 110 px |
| B · Horizontal | Cabecera de la web, boletín, firma de correo | 150 px |
| C · Sigla «IBIL» | Redes, perfil, sello | 48 px |
| D · Símbolo | Favicon, avatar, marca de agua | 20 px |

- El nombre va en Cormorant Garamond, mayúsculas con espaciado del 20 %: primera línea en el color principal (peso 600), segunda línea «Internacional de Logroño» en granate (peso 500). La sigla se escribe IBIL, sin puntos.
- Zona de protección: la mitad del ancho de la Biblia del símbolo (½ X) en los cuatro lados. Si no cabe, se usa la versión C o D antes que reducir el margen.
- Positivo: color principal sobre arena o blanco. Negativo: arena sobre fondo oscuro. Sobre fotografía: blanco, siempre con velo oscuro detrás.
- Usos incorrectos: deformar, degradados, sombras, colores fuera de la paleta, contraste insuficiente.
- Cabecera de la web: versión B. Pie oscuro: versión en negativo. Favicon: iconos de «02 Icono».

### 4.5. Archivos de marca en el repositorio
Carpeta «marca» (copiada del Drive de Carlos, «AAA IB > Web y marca > Marca IBIL - archivos para la web»):
- 01 Logotipo: SVG y PNG de las versiones A, B, C y D en color, negro y blanco (entre otros: IBIL_logo_A-vertical_color.png, IBIL_logo_B-horizontal_negro.svg, IBIL_logo_C-sigla_blanco.png, IBIL_logo_D-simbolo_color.svg).
- 02 Icono: IBIL_icono_512_transparente.png, IBIL_icono_192_azul.png, IBIL_icono_32_azul.png, IBIL_avatar_1080_azul.png.
- 03 Colores: colores-ibil.md.
- 04 Tipografia: LEEME-tipografias.md y webfonts (cormorant-garamond-500, -600, -500-italic y public-sans-400, -600 en WOFF2). El LEEME cita un fonts.css que puede no estar.
- 05 Manual: manual de marca. [PENDIENTE: Carlos sube el .html original; la copia de Drive se convirtió en documento y no se lee.]

### 4.6. Tarea previa de marca (Fase 0)
1. Haz inventario completo de «marca» y lista lo que falte respecto al apartado 4.4.
2. Recolorea a #0c5373 todos los logos que usen #163A52 en el símbolo o en la primera línea: en los SVG cambiando el código de color; los PNG, regenerados desde el SVG con la misma resolución y fondo transparente. La segunda línea sigue en granate #7A2E3B. Guarda los originales en «marca/_originales».
3. Comprueba el color real de cada archivo y que la versión blanca sea blanca de verdad (los tres SVG del símbolo pesan exactamente lo mismo; lo normal si solo cambia el código de color, pero hay que verlo).
4. Comprueba los WOFF2: public-sans-400 y -600 pesan lo mismo (26.832 bytes), igual que cormorant-garamond-500 y -600 (37.640). O son fuentes variables (válido) o es el mismo archivo copiado con otro nombre, y entonces la negrita no saldría. Si es lo segundo, consigue los pesos correctos (paquetes @fontsource de npm o Google Fonts, según el acceso de red de la sesión).
5. Actualiza colores-ibil.md y el capítulo de paleta del manual con la paleta del apartado 4.2.

### 4.7. Voz y lenguaje
- Frases cortas. Un mensaje por bloque. Claro, cálido y sin jerga.
- Al visitante se le tutea en singular («te esperamos»). En plural, siempre «ustedes», nunca «vosotros». Las citas bíblicas de la RV60 se dejan literales aunque usen «vosotros».
- «Hermanos» solo hacia dentro; en páginas públicas, «personas», «familia», «comunidad».
- Jerga interna siempre explicada o sustituida: «EBD», «célula», «ágape», «culto» (la primera vez, «culto de adoración, nuestra reunión principal del domingo»).
- Cada versículo con su referencia completa, en RV60.
- Siempre hora, lugar y qué esperar.
- «Te esperamos», no «no faltes». Sin mayúsculas para gritar, sin signos repetidos, sin emojis en la web.
- Evitar la fórmula «sus dones al servicio de la Obra».
- Nombre: primera mención «Iglesia Bautista Internacional de Logroño»; después, «IBIL». Firma breve: «IBIL · Logroño».

---

## 5. Arquitectura del sitio

### 5.1. Menú

Escritorio: logo (enlaza a inicio) · ¿Eres nuevo? · Conoce a Jesús · Predicaciones · Nosotros ▾ · Vida de iglesia ▾ · Contacto · botón destacado «Visítanos este domingo» (lleva a ¿Eres nuevo?).

- Nosotros ▾: Quiénes somos · Qué creemos · Liderazgo.
- Vida de iglesia ▾: Reuniones y grupos · Niños y jóvenes · Agenda · Reflexión del mes.
- No pongas «Inicio» en el menú: el logo cumple esa función.
- Móvil: menú desplegable con los mismos elementos y el botón al final; además, barra fija abajo con «Cómo llegar» y «WhatsApp».

### 5.2. Páginas y direcciones (URL sin tildes ni eñes)

| Página | Dirección |
|---|---|
| Inicio | / |
| ¿Eres nuevo? | /eres-nuevo/ |
| Conoce a Jesús | /conoce-a-jesus/ |
| Predicaciones (listado) | /predicaciones/ |
| Una predicación | /predicaciones/AAAA-MM-DD-titulo-corto/ |
| Quiénes somos | /nosotros/ |
| Qué creemos | /nosotros/que-creemos/ |
| Liderazgo | /nosotros/liderazgo/ |
| Reuniones y grupos | /vida-de-iglesia/ |
| Niños y jóvenes | /vida-de-iglesia/ninos-y-jovenes/ |
| Agenda | /agenda/ |
| Reflexión del mes (listado y entradas) | /reflexiones/ y /reflexiones/AAAA-MM-titulo/ |
| Contacto | /contacto/ |
| Aviso legal | /aviso-legal/ |
| Privacidad | /privacidad/ |
| Cookies | /cookies/ |
| Accesibilidad | /accesibilidad/ |
| Bienvenida en otros idiomas (opcional, fase posterior) | /welcome/ [PENDIENTE: idiomas] |
| Página 404 | Propia, con enlaces a inicio, ¿Eres nuevo? y contacto |

### 5.3. Redirecciones desde la web actual (archivo _redirects de Cloudflare Pages, código 301)
Incluye cada ruta en su forma con tilde y en su forma codificada (por ejemplo /qui%C3%A9nes-somos).

| Ruta antigua | Ruta nueva |
|---|---|
| /inicio | / |
| /quiénes-somos | /nosotros/ |
| /quiénes-somos/en-que-creemos | /nosotros/que-creemos/ |
| /ministerios | /vida-de-iglesia/ |
| /reuniones | /vida-de-iglesia/ |
| /recursos, /recursos/devocionales, /recursos/estudios-biblicos | /predicaciones/ |
| /noticias | /reflexiones/ |
| /noticias/galeria-de-eventos | /vida-de-iglesia/ |
| /contacto | /contacto/ |
| /política-de-privacidad | /privacidad/ (ver apartado 10.5: esta dirección es crítica) |

---

## 6. Portada

### 6.1. Orden de bloques
1. Cabecera: logo horizontal, menú y botón «Visítanos este domingo».
2. Primera pantalla: foto real de la congregación con velo del color principal (en torno al 60 %) para que el texto se lea; titular, subtítulo, franja de datos y dos botones.
3. ¿Primera vez?: tres tarjetas (Qué esperar · Niños · Te acompañamos) y enlace a ¿Eres nuevo?
4. ¿Quién es Jesús?: cuatro líneas y botón «Conoce a Jesús».
5. Última predicación: vídeo, título, pasaje, predicador, fecha; botones «Ver predicación», «Todas las predicaciones» y «Compartir por WhatsApp».
6. Qué creemos en tres frases, con enlace.
7. Esta semana: próximos actos de la agenda (máximo tres; nunca actos ya pasados).
8. Fotos de la vida de la iglesia (sin deslizador automático).
9. ¿Podemos orar por ti?: enlace a WhatsApp y a correo, sin formulario.
10. Cómo llegar: mapa, dirección, horario, aparcamiento y autobuses.
11. Pie.

### 6.2. Textos de la portada (BORRADOR)
- Titular: «Una iglesia en Logroño para conocer a Jesús» (en cursiva, «Jesús»).
- Subtítulo: «Somos una iglesia evangélica bautista. Te esperamos el domingo a las 11:30 en la calle Ronda de los Cuarteles, 32. Ven tal como eres: alguien te recibirá en la puerta.»
- Franja de datos: «Domingo · 11:30 · Ronda de los Cuarteles, 32 · Cómo llegar →»
- Botón principal: «Visítanos este domingo». Botón secundario: «Escuchar la última predicación».
- Tarjetas «¿Primera vez?»:
  - Qué esperar: «Canciones, oración y una predicación de la Biblia. Dura unas dos horas y antes hay café.»
  - Niños: «Los niños de hasta 12 años tienen su propia clase durante la predicación.»
  - Te acompañamos: «Escríbenos antes de venir y alguien te esperará en la puerta.»
- ¿Quién es Jesús?: «Jesús no vino a fundar una religión más. Vino a buscarnos. Murió en nuestro lugar y resucitó, y hoy ofrece perdón y una vida nueva a quien confía en Él. Si nunca te lo han explicado con calma, empieza aquí.»
- Qué creemos en tres frases: «Creemos que la Biblia es la Palabra de Dios y nuestra guía de fe y vida. Creemos que la salvación es un regalo de Dios por la fe en Jesucristo, no un premio a nuestras obras. Creemos que la iglesia es una familia de creyentes que se reúne para adorar a Dios, aprender su Palabra y servir a los demás.»
- ¿Podemos orar por ti?: «Si estás pasando por algo y quieres que oremos por ti, escríbenos. Lo que nos cuentes queda entre nosotros.»

Las horas y la dirección dependen de la confirmación del apartado 2.2.

---

## 7. Contenido por página

Todos los textos de este apartado son BORRADOR y los revisa el pastor antes de publicarse. Lo marcado [PENDIENTE] no se rellena.

### 7.1. ¿Eres nuevo? (/eres-nuevo/)
Objetivo: quitar el miedo a entrar. Estructura: introducción, «Así es un domingo», preguntas frecuentes, cómo llegar y «Te acompañamos».

Introducción: «Entrar por primera vez en una iglesia puede imponer. Queremos que sepas exactamente qué vas a encontrar.»

Así es un domingo:
- 10:15 Escuela Bíblica para jóvenes y adultos: un rato de estudio de la Biblia en grupo. Puedes venir solo a escuchar.
- 11:15 Café: es buen momento para conocernos.
- 11:30 Culto de adoración, nuestra reunión principal: canciones, oración, lectura de la Biblia y una predicación que explica un pasaje bíblico.
- 13:30 Final. Una vez al trimestre comemos juntos después del culto.

Preguntas frecuentes (formato acordeón accesible):
- ¿Tengo que ser creyente para venir? «No. Puedes venir a escuchar, observar y preguntar. Nadie te va a señalar ni te va a pedir que hagas nada.»
- ¿Cómo tengo que vestir? «Ven como te sientas cómodo.» [PENDIENTE: confirmar]
- ¿Cuánto dura? «El culto dura unas dos horas, de 11:30 a 13:30.»
- ¿Y mis hijos? «Los niños de hasta 12 años tienen Escuela Dominical durante la predicación, con monitores de la iglesia. Al principio puedes acompañarlos.» [PENDIENTE: confirmar funcionamiento]
- ¿Tengo que dar dinero? «No. La iglesia se sostiene con las ofrendas voluntarias de sus miembros. Tú solo ven.»
- ¿Qué es la Santa Cena? «Una vez al mes recordamos la muerte de Jesús tomando pan y fruto de la vid. Participan los creyentes bautizados; si no es tu caso, puedes quedarte tranquilamente en tu sitio.»
- ¿En qué idioma es? «En español.» [PENDIENTE: ¿hay traducción o ayuda en otros idiomas?]
- ¿Es accesible? [PENDIENTE: escalones, rampa, aseos]
- ¿Dónde aparco? ¿Qué autobús me deja cerca? [PENDIENTE]

Te acompañamos: «Si nos escribes antes de venir, alguien te esperará en la puerta y se sentará contigo.» Botones: WhatsApp [PENDIENTE: número] y correo.

Cómo llegar: dirección, mapa (cargado solo tras aceptar cookies; antes, enlace a Google Maps), aparcamiento y autobuses.

### 7.2. Conoce a Jesús (/conoce-a-jesus/)
Objetivo: explicar el evangelio con fidelidad, sin presión comercial, y facilitar una conversación. Basado en las lecciones 2, 3, 5, 6, 7 y 8 de la guía de doctrinas de la iglesia (Anexo A.3). Citas en RV60.

1. Dios te creó y te ama. «Dios es el creador de todo y nos hizo a su imagen. No eres un accidente.» (Gn 1:27; 1 Jn 4:8)
2. El problema: el pecado nos separa de Dios. «Todos hemos vivido de espaldas a Dios. Eso tiene consecuencias: nos aleja de Él y merece su juicio.» (Ro 3:23; Is 59:2; Ro 6:23)
3. Ni las buenas obras ni la religión lo arreglan. «No podemos ganarnos el perdón de Dios a base de esfuerzo.» (Ef 2:8-9; Tit 3:5)
4. Jesucristo, Dios hecho hombre, murió en nuestro lugar y resucitó. «Vivió sin pecado, cargó con nuestro castigo en la cruz y resucitó al tercer día.» (1 Co 15:3-4; 2 Co 5:21; 1 P 2:24)
5. La salvación es un regalo que se recibe por fe. «Dios declara justo a quien se arrepiente y confía en Jesús, y le da una vida nueva.» (Jn 1:12; Ro 10:9-10; 2 Co 5:17)
6. ¿Y ahora qué? «Arrepentirse es dar la vuelta: dejar de vivir para uno mismo y confiar en Cristo. Si quieres dar ese paso, o simplemente tienes preguntas, no lo hagas solo.» (Hch 3:19)
7. Quiero hablar con alguien: WhatsApp y correo; invitación al domingo; enlace a predicaciones.

Opcional: vídeo de unos dos minutos con un fragmento de predicación que presente el evangelio (sale del flujo de reels) [PENDIENTE: elegir clip].

### 7.3. Predicaciones (/predicaciones/)
- Arriba, la última predicación destacada; debajo, el archivo.
- Cada predicación tiene su propia página con: título, pasaje bíblico, predicador, fecha, serie (si la hay), vídeo de YouTube (cargado tras consentimiento) y síntesis en texto.
- La síntesis ya la produce cada semana el flujo de vídeo de Carlos (apartado 8.4). Ese texto es lo que permite a Google entender la página: no basta con el vídeo.
- Filtros: por libro de la Biblia, por serie y por predicador (como St Helen's Bishopsgate).
- Botón «Compartir por WhatsApp» en cada predicación.
- Añadir una predicación debe consistir en crear un solo archivo de texto (apartado 13.3).

### 7.4. Quiénes somos (/nosotros/)
BORRADOR (actualización 12/10/2026, prevalece):

«Somos la Iglesia Bautista Internacional de Logroño (IBIL), una iglesia pequeña que está empezando, y eso nos permite conocernos por el nombre y caminar como una familia. Estamos bajo el ministerio del pastor Felipe Albacete, con la colaboración de los diáconos Carlos Campos y Evelyn Torres. Nuestra seña de identidad es volver a la Biblia: todo dentro de la Biblia y nada fuera de ella. Desde ahí queremos servir también a nuestra ciudad.»

Bloque «Nuestra historia»: «Nuestra historia empieza en Calahorra. Durante un tiempo nos congregamos en la Iglesia Bautista Internacional de Calahorra, punto de misión de la Iglesia Evangélica Bautista de Tudela. Desde 2023 comenzamos a reunirnos en Logroño, en los hogares de dos familias de la congregación, y en marzo de 2024 dimos el paso de abrir nuestro propio local en la calle Ronda de los Cuarteles.» Nunca se publican las direcciones de esos hogares.

Tono: ser pequeña es un valor (cercanía, familia, nadie pasa desapercibido), nunca una disculpa. Proyecto cristiano con carácter social, pero sobre todo bíblico. Sin inventar proyectos sociales: [PENDIENTE: proyecto social] si hace falta.

Dominios: solo iglesiabautistalogrono.com (principal) e iglesiabautistalogroño.com (redirige). No se comprarán más.

BORRADOR anterior (sustituido):

«Somos la Iglesia Bautista Internacional de Logroño (IBIL), una iglesia evangélica que busca conocer y vivir la Palabra de Dios, anunciar el evangelio de Jesucristo y hacer discípulos.

Nacimos en [PENDIENTE: año] como fruto de la obra misionera de la Iglesia Evangélica Bautista de Tudela, de la mano del pastor Felipe Albacete y su esposa, la misionera Patricia Fernández, que desde 2011 se dedican a revitalizar y plantar iglesias en Navarra, La Rioja y Soria.

Somos parte de la tradición bautista en España: creemos en la autoridad de la Biblia, en la fe personal en Jesucristo y en el bautismo de los creyentes por inmersión. Pertenecemos a la Unión Evangélica Bautista de España (UEBE) y apoyamos el Pacto Bautista, que nos llama a ser fieles a Dios, crecer en Cristo y vivir en santidad y amor mientras cumplimos la Gran Comisión (Mateo 28:19-20).

Somos internacionales: en IBIL se reúnen personas de distintos países que hoy tienen su casa en Logroño.»

Bloques adicionales: lema (Firmes en la Verdad · Creciendo en Cristo · Haciendo discípulos), misión, iglesias hermanas (apartado 2.3) y afiliaciones (UEBE; AIBNE [PENDIENTE confirmar]), con enlaces si los hay.

### 7.5. Qué creemos (/nosotros/que-creemos/)
- Introducción breve y comprensible para quien no conoce el lenguaje cristiano.
- Los diez distintivos bautistas del folleto, en tarjetas, con sus referencias (Anexo A.1).
- Debajo, la confesión de fe y los principios bautistas completos de la web actual (Anexo A.2), en acordeones accesibles, corrigiendo solo erratas evidentes.
- Enlace a Conoce a Jesús.

### 7.6. Liderazgo (/nosotros/liderazgo/)
- Pastor Felipe Albacete y la misionera Patricia Fernández: foto y dos o tres líneas (texto de la web actual, Anexo B).
- Diáconos Carlos Campos y Evelyn Torres: foto y dos o tres líneas. Texto corregido de la web actual: «Tienen una larga trayectoria en el evangelio y en el servicio. Se unieron al ministerio del pastor Felipe y su esposa en La Rioja. Carlos ha apoyado en los últimos años la predicación y la enseñanza en Tudela, sede de la iglesia madre, y en la congregación de Calahorra. Hoy colaboran en la gestión y los ministerios de la congregación de Logroño, bajo la guía del pastor Felipe y su esposa.»
- Responsables de ministerios: [PENDIENTE].
- Fotos solo con consentimiento de cada persona.

### 7.7. Reuniones y grupos (/vida-de-iglesia/)
- Horarios del apartado 3 en tablas o tarjetas legibles (nunca dentro de una imagen).
- Cada actividad con una frase que explique qué es, para quién y cuándo.
- Ministerios del apartado 3.3 en tarjetas con icono lineal sencillo.
- Fotos de la vida de la iglesia.

### 7.8. Niños y jóvenes (/vida-de-iglesia/ninos-y-jovenes/)
- Escuela Dominical para niños de hasta 12 años durante la predicación; reunión de los miércoles abierta a niños, jóvenes y adultos; reuniones de jóvenes.
- [PENDIENTE: confirmar que los monitores tienen el certificado negativo del Registro Central de Delincuentes Sexuales (obligatorio para actividades con contacto habitual con menores, art. 57 de la LO 8/2021). Si es así, puede decirse en la web; si no, no se menciona hasta resolverlo.]
- Sin fotos de menores identificables salvo las que Carlos aporte con autorización.

### 7.9. Agenda (/agenda/)
- Calendario de Google público de la iglesia insertado (tras consentimiento) [PENDIENTE: enlace del calendario].
- Alternativa sin cookies: lista de próximos actos leída del calendario en el momento de construir la web (apartado 13.4).
- Nunca mostrar actos pasados.
- El calendario de Google «IBIL» nombra los actos así: «IBIL: nombre» (Logroño) e «IEBT: nombre» (Tudela); los especiales llevan el detalle entre paréntesis. En la web se muestran solo los de Logroño y sin el prefijo «IBIL:». Si se inserta el calendario completo y no se puede filtrar, avisa a Carlos.

### 7.10. Reflexión del mes (/reflexiones/)
- Una entrada al mes: una reflexión, un resumen de una serie o un anuncio importante.
- Añadir una entrada = crear un solo archivo de texto.
- Si un mes no hay entrada, la web no debe parecer abandonada: el listado muestra solo fechas de las entradas, sin «última actualización».

### 7.11. Contacto (/contacto/)
- Dirección, mapa, horario, correo, WhatsApp [PENDIENTE] y redes.
- Formulario: nombre, correo, mensaje y casilla obligatoria «He leído y acepto la política de privacidad» (enlazada). Ninguna pregunta religiosa ni casilla de intereses religiosos ni petición de oración (apartado 10.2).
- Bloque «¿Podemos orar por ti?» con enlace a WhatsApp y correo, sin formulario.
- Debajo del formulario, información básica de privacidad (responsable, finalidad, derechos y enlace a la política).

### 7.12. Pie (todas las páginas)
Logo en negativo, lema, dirección y horario del domingo, correo, redes (YouTube, Instagram, Facebook, WhatsApp), iglesias hermanas, afiliaciones, aviso legal, privacidad, cookies, accesibilidad, «Configurar cookies» y año actual generado automáticamente (nunca escrito a mano).

### 7.13. Donativos
No hay apartado de donativos en esta versión. [PENDIENTE: decisión de la iglesia sobre mostrar IBAN o Bizum.]

---

## 8. Contenido que se actualiza solo y estrategia de contenidos

### 8.1. Qué se automatiza

| Contenido | Fuente | Cómo | Mantenimiento |
|---|---|---|---|
| Última predicación (portada) | Canal de YouTube | Lista de «subidas» del canal insertada (cada vídeo nuevo aparece solo) o lectura del RSS del canal al construir | Ninguno |
| Archivo de predicaciones | Un archivo de texto por predicación | Carlos pega la síntesis que ya produce su flujo semanal | 2 minutos a la semana |
| Agenda | Calendario de Google público | Inserción o lectura al construir | Lo que se añada en Google Calendar |
| Mensajes diarios | Instagram (@ibilogro) | Ver 8.2 | Ninguno en la web |
| Reflexión del mes | Un archivo de texto | Carlos o Claude la redactan | Una al mes |

### 8.2. Instagram: límite real
Mostrar automáticamente las últimas publicaciones de Instagram en una web no tiene una solución oficial sencilla y gratuita: exige una cuenta profesional y la API de Meta, o un servicio de terceros (con sus cookies y su política de datos) (confianza 75%). Opciones, de más simple a más compleja:
1. Bloque «Síguenos en Instagram» con enlace y, como mucho, 3 publicaciones insertadas a mano (tras consentimiento).
2. Servicio de terceros, solo si Carlos lo aprueba y se refleja en la política de cookies.
3. API de Meta con un proceso automático: no compensa para esta web.
Recomendación: opción 1. Plantéaselo a Carlos antes de implementar nada más.

### 8.3. Estrategia de contenidos (contexto)
- La web es el centro: las redes llevan a la web y la web lleva al domingo.
- YouTube: sermón íntegro (solo el tramo de predicación) y reels o shorts.
- Instagram y Facebook: mensajes diarios, reels y síntesis breve de cada sermón remitiendo al sermón completo en YouTube.
- Los reels terminan con una tarjeta final hacia el sermón completo, con los logos de la iglesia, de la asociación y de la web. Conviene que esa tarjeta muestre la dirección de la web.
- Publicación programada en lote: Meta Business Suite para Instagram y Facebook; YouTube Studio para YouTube.
- Perfil de Empresa de Google: es lo primero que ve quien busca «iglesia evangélica Logroño»; debe enlazar a la web y tener los mismos datos (apartado 11).
- Objetivo de fondo: que la gente conozca a Dios en Logroño y alrededores. Calidad antes que cantidad.

### 8.4. Flujo semanal de predicaciones (para diseñar la plantilla)
1. El vídeo del domingo se recorta al tramo de predicación y se sube a YouTube.
2. El flujo de vídeo de Carlos genera la transcripción, los reels y una síntesis breve.
3. Carlos crea el archivo de la predicación (título, pasaje, predicador, fecha, serie, identificador del vídeo y síntesis) y lo sube al repositorio.
4. La web se reconstruye y publica sola.
Opcional: un pequeño script que genere ese archivo a partir del enlace de YouTube y del texto de la síntesis. Antes de hacerlo, calcula si compensa frente a hacerlo a mano (si ahorra menos de un minuto por semana, no compensa).

---

## 9. Imágenes

### 9.1. Reglas
- Fotos reales de IBIL. Nada de bancos de imágenes, nada de imágenes generadas con IA, nada de manos alzadas con contraluz genérico.
- Personas antes que edificio: culto, saludos, conversaciones, café, estudio, alabanza, Biblia abierta.
- Las fotos que aporte Carlos tienen autorización para publicarse, incluidas las de algún niño que aparezca de lejos. Fotos de adultos identificables: con su consentimiento. Fotos de menores identificables: solo las que Carlos aporte expresamente.
- Ningún texto importante dentro de imágenes (horarios, direcciones): siempre en texto HTML.
- Formato WebP (o AVIF) con versiones de varios tamaños, carga diferida salvo la de la primera pantalla, texto alternativo descriptivo y nombre de archivo descriptivo (por ejemplo, iglesia-evangelica-logrono-culto.webp).
- Sin vídeo de fondo ni deslizadores automáticos.
- Iconos lineales sencillos en el color principal.

### 9.2. Plan de fotos [PENDIENTE: Carlos sube las fotos a la carpeta «fotos»]

| Página | Foto | Nota |
|---|---|---|
| Inicio | Culto con gente, plano amplio, horizontal | Primera impresión: calidez y comunidad. Necesita espacio para el texto |
| Inicio / ¿Eres nuevo? | Entrada o fachada del local | Que el visitante reconozca el sitio al llegar |
| ¿Eres nuevo? | Café o momento de acogida | Quita el miedo a entrar |
| ¿Eres nuevo? / Niños | Zona de niños, sin caras identificables | Para familias |
| Quiénes somos | Grupo o congregación | «Aquí hay gente como tú» |
| Liderazgo | Retrato del pastor y su esposa; retrato de los diáconos | Con consentimiento |
| Qué creemos / Conoce a Jesús | Biblia abierta, manos, detalle sobrio | Apoyo, no protagonista |
| Predicaciones | Predicación en el púlpito | Además de las miniaturas de YouTube |
| Vida de iglesia | Estudio, oración, alabanza, comida fraternal | Varias |
| Contacto | Exterior | Junto al mapa |

Si faltan fotos, usa bloques de color y tipografía (fondo arena con un versículo en Cormorant), nunca imágenes de relleno. Cada hueco de foto pendiente queda marcado [FOTO PENDIENTE: descripción].

---

## 10. Legal y privacidad

Todos los textos legales son BORRADOR. Los revisa Carlos (economista y asesor jurídico-laboral) antes de publicarse.

### 10.1. Principios
- Recoger los mínimos datos posibles.
- Nada de datos que revelen creencias religiosas en formularios.
- Ninguna cookie que no sea técnica sin consentimiento previo.
- Ninguna base de datos de visitantes.

### 10.2. Formulario y datos de categoría especial
- Las creencias religiosas son datos de categoría especial (art. 9 del RGPD). Un formulario de «petición de oración» o con casillas como «quiero estudiar la Biblia» las revela y exige consentimiento explícito y más garantías.
- La excepción del art. 9.2.d del RGPD para entidades religiosas cubre a miembros, antiguos miembros y personas con contactos regulares, no a visitantes desconocidos que escriben desde la web.
- Por eso, en esta versión el formulario solo pide nombre, correo y mensaje libre, con casilla de aceptación de la privacidad. Las peticiones de oración van por WhatsApp o correo, fuera de la web.
- El mensaje se envía al correo de la iglesia y no se guarda en ninguna base de datos.

### 10.3. Cookies
- Técnicas (necesarias para la web, incluida la que guarda la elección de cookies): sin consentimiento.
- De terceros (YouTube, Google Maps, Google Calendar, Instagram): solo después de que el visitante acepte. Hasta entonces, cada inserción se sustituye por un recuadro con su descripción, un botón «Cargar contenido de YouTube» (o del servicio que sea) y un enlace directo al servicio.
- YouTube con el dominio youtube-nocookie.com reduce el rastreo, pero no lo elimina: sigue necesitando consentimiento (confianza 80%).
- Aviso de cookies: botones «Aceptar», «Rechazar» y «Configurar» al mismo nivel y con el mismo peso visual; nada de «si sigue navegando, acepta»; sin muros que bloqueen la página; enlace permanente «Configurar cookies» en el pie.
- Guardar la elección un tiempo razonable y volver a preguntar como máximo a los 24 meses (criterio de la guía de cookies de la AEPD; confianza 80%, verificar en la versión vigente).
- Analítica: ninguna en la primera versión. Si Carlos la quiere, Cloudflare Web Analytics, que no usa cookies, mencionada en la política de privacidad.

### 10.4. Textos legales (páginas)
- Aviso legal: datos del titular (art. 10 de la LSSI): denominación, NIF, domicilio, correo y datos de inscripción en el Registro de Entidades Religiosas [PENDIENTE]. Es dudoso que la LSSI obligue a una web sin actividad económica (confianza 65% de que no), pero se incluye igualmente.
- Política de privacidad (arts. 13 y 14 del RGPD): responsable, finalidades (responder a quien escribe), base jurídica (consentimiento), plazo de conservación, destinatarios y encargados del tratamiento (Cloudflare para el alojamiento; el servicio que envíe el formulario, si lo hay), transferencias internacionales si las hay, derechos y cómo ejercerlos, y derecho a reclamar ante la AEPD. Incluye la sección de la herramienta de YouTube (10.5).
- Política de cookies: tabla de cookies técnicas y de terceros con su finalidad y duración, y cómo cambiar la elección.
- Declaración de accesibilidad: voluntaria; nivel buscado, WCAG 2.2 AA, y contacto para incidencias.

### 10.5. Dirección crítica: la página de privacidad actual
La página /política-de-privacidad de la web actual no es la privacidad de la web: es la política de privacidad de «IEBIL Publicador», una herramienta interna de la iglesia que publica vídeos en el canal de YouTube mediante la API de YouTube. Google exige esa dirección para autorizar la herramienta. Si desaparece, Google puede bloquear la herramienta o pedir otra verificación (confianza 75%).
- La nueva /privacidad/ incluye una sección «Herramienta IEBIL Publicador» con el texto del Anexo B.6 (se mantiene el nombre de la aplicación tal como está registrada en Google).
- La dirección antigua redirige a /privacidad/ (apartado 5.3).
- Carlos actualiza el enlace de privacidad en la pantalla de consentimiento de la consola de Google Cloud cuando la nueva web esté publicada.

### 10.6. Imágenes y menores
- Fotos: con consentimiento de los adultos identificables; las que aporta Carlos están autorizadas.
- Menores: los menores de 14 años necesitan el consentimiento de padres o tutores (art. 7 de la LOPDGDD); además está el derecho a la propia imagen (LO 1/1982). Solo se publican las que Carlos aporte expresamente.

### 10.7. Texto bíblico
Las citas son de la Reina-Valera 1960. En el pie o en la página de aviso legal, incluir la nota de derechos: «Texto bíblico tomado de la Santa Biblia Reina-Valera 1960 © Sociedades Bíblicas en América Latina, 1960. Renovado © Sociedades Bíblicas Unidas, 1988. Utilizado con permiso.» (confianza 85% en la redacción exacta; verificar en la web de las Sociedades Bíblicas Unidas).

---

## 11. Posicionamiento local (SEO)

### 11.1. Búsquedas objetivo
«iglesia evangélica Logroño», «iglesia bautista Logroño», «iglesia cristiana Logroño», «iglesia protestante La Rioja», «iglesia cerca de mí». No crees páginas casi idénticas para cada búsqueda: se trabaja con textos naturales.

### 11.2. En cada página
- Título único. Inicio: «Iglesia evangélica bautista en Logroño | IBIL». Resto: «[Página] | IBIL Logroño».
- Descripción única de unos 150 caracteres que mencione Logroño cuando tenga sentido.
- Un solo H1 por página; jerarquía de encabezados correcta.
- Direcciones limpias (apartado 5.2), etiqueta canónica, lang="es".
- Open Graph y tarjeta para redes con imagen de 1200 x 630 (foto real o logo sobre arena).
- Texto alternativo útil en todas las imágenes.

### 11.3. Datos estructurados (JSON-LD)
- En toda la web: schema.org Church (subtipo de PlaceOfWorship) con nombre, alternateName «IBIL», dirección, coordenadas, url, correo y sameAs (YouTube, Instagram, Facebook). Sin teléfono salvo que se confirme.
- En cada predicación: VideoObject (nombre, descripción, miniatura, fecha de subida, embedUrl).
- Event solo para actos públicos reales con fecha (no para el culto semanal genérico).
- BreadcrumbList en páginas interiores.

### 11.4. Técnico
- sitemap.xml y robots.txt generados automáticamente.
- Verificación en Google Search Console (registro TXT en los DNS, en la fase de publicación) y envío del sitemap.
- Perfil de Empresa de Google (lo gestiona Carlos): mismos nombre, dirección, horario y web que en la web (coherencia de datos).
- Revisión final de posicionamiento y visibilidad en asistentes de IA: la hará Claude en el chat de Carlos con la skill seo-ai-visibility.

---

## 12. Accesibilidad y rendimiento

### 12.1. Accesibilidad (objetivo WCAG 2.2 AA)
- Contraste mínimo 4,5:1 en texto normal y 3:1 en texto grande y elementos gráficos.
- Nunca bloquear el zoom (sin maximum-scale ni user-scalable=no).
- Navegación completa con teclado, foco visible, enlace «Saltar al contenido».
- Zonas pulsables de 24 x 24 px como mínimo (recomendado 44 x 44 en móvil).
- Acordeones, menú y aviso de cookies con atributos ARIA correctos.
- Respeto a «reducir movimiento» del sistema; animaciones suaves y prescindibles.
- Vídeos de YouTube con subtítulos cuando existan.
- Formularios con etiquetas visibles y mensajes de error claros.

### 12.2. Rendimiento (umbrales «buenos» de Core Web Vitals, en móvil)
- LCP ≤ 2,5 s · INP ≤ 200 ms · CLS ≤ 0,1.
- Objetivo Lighthouse en móvil: 90 o más en rendimiento, accesibilidad, buenas prácticas y SEO.
- Imágenes optimizadas y con dimensiones declaradas; precarga de la imagen y de las fuentes de la primera pantalla; font-display: swap.
- Nada de JavaScript de terceros antes del consentimiento.

---

## 13. Técnica

### 13.1. Tecnología
- Web estática: el resultado son archivos HTML, CSS y el mínimo JavaScript (menú, acordeones, aviso de cookies, carga de inserciones tras consentimiento).
- Para que añadir una predicación o una reflexión sea crear un solo archivo, usa un generador de sitios estáticos ligero con contenido en Markdown (por ejemplo Eleventy o Astro). Elige el más simple que cumpla este brief y justifícalo en una línea en el README.
- Sin gestor de contenidos, sin base de datos, sin frameworks de cliente, sin dependencias que no hagan falta.
- Alojamiento: Cloudflare Pages, plan gratuito, conectado al repositorio de GitHub; cada cambio genera una vista previa.
- Usa la skill frontend-design para el diseño. Si no está disponible en la sesión, cópiala a .claude/skills del repositorio para que quede para siempre.

### 13.2. Estructura de carpetas propuesta
- CLAUDE.md: reglas esenciales para cada sesión.
- README.md: instrucciones en lenguaje sencillo para Carlos (cómo añadir una predicación, una reflexión o cambiar un horario).
- docs/: este brief y documentación.
- marca/: archivos de marca (y marca/_originales).
- fotos/: fotos originales que sube Carlos (no se publican tal cual; se optimizan).
- contenido/predicaciones/, contenido/reflexiones/: un archivo Markdown por entrada.
- datos/: horarios, contacto, redes e iglesias hermanas en un único archivo de datos, para cambiar un horario en un solo sitio y que se actualice en toda la web.
- src/: plantillas, estilos y scripts.
- public/: _redirects, robots.txt, favicons, manifiesto.

### 13.3. Plantillas de contenido
Predicación (encabezado del archivo): título, fecha, predicador, pasaje (por ejemplo, «Juan 3:1-21»), libro, serie (opcional), identificador del vídeo de YouTube, resumen de una frase; en el cuerpo, la síntesis.
Reflexión del mes: título, fecha, autor, resumen de una frase; en el cuerpo, el texto.
Incluye en README.md un ejemplo completo de cada una para copiar y pegar.

### 13.4. Datos que vienen de fuera
- Última predicación: inserción de la lista de subidas del canal (identificador del canal [PENDIENTE: obtenerlo del canal @IglesiaBautistaLogroño]) tras consentimiento; en la portada se puede mostrar además la última predicación del archivo propio, con su síntesis.
- Agenda, versión 1: inserción del calendario público de Google tras consentimiento. Versión 2 (solo si compensa): lectura del calendario (formato iCal) al construir la web y reconstrucción diaria programada, para mostrar una lista propia sin cookies.

### 13.5. Formulario de contacto
Propón a Carlos, antes de implementar, la opción más sencilla que cumpla: sin base de datos; envío solo al correo de la iglesia; protección contra spam (campo trampa y, si hace falta, Cloudflare Turnstile); proveedor indicado en la política de privacidad. Opciones: una función de Cloudflare Pages con un servicio de envío de correo, o un servicio de formularios como encargado del tratamiento. Mientras no se decida, el bloque de contacto funciona con enlaces a correo y WhatsApp.

### 13.6. Seguridad e higiene
- Ninguna clave, contraseña ni dato personal no público en el repositorio.
- Cabeceras de seguridad básicas (archivo _headers): Content-Security-Policy acorde a los servicios usados, X-Content-Type-Options, Referrer-Policy y Permissions-Policy.
- HTTPS obligatorio.
- Enlaces externos con rel="noopener".

---

## 14. Flujo de trabajo

- Repositorio privado en GitHub [PENDIENTE: nombre; propuesta «web-ibil»], trabajado desde sesiones de Claude Code en la nube.
- Crédito de sesiones en la nube hasta el 5/11/2026 a las 8:59 (hora peninsular). Conviene construir la web durante octubre.
- Una rama por fase o tarea; solicitud de cambios con descripción en español; Carlos aprueba antes de fusionar.
- Mensajes de commit en español, claros.
- Método de revisión: Carlos lleva cada entrega a otro chat de Claude para revisarla y vuelve con mejoras (uno hace, otro revisa). Máximo dos rondas por fase; después se decide y se avanza.
- Carlos no es programador: explicaciones breves y sin jerga; si algo lo tiene que hacer él, pasos numerados y concretos, indicando dónde pulsar.
- Si alguna instrucción afecta a su ordenador (Windows), las rutas con espacios, siempre entre comillas.
- Al terminar cada sesión: qué se ha hecho, qué queda pendiente, siguiente paso.

---

## 15. Publicación y dominio (solo cuando Carlos lo diga)

### 15.1. Situación actual
- Dominios registrados en GoDaddy, en la cuenta personal de Carlos: iglesiabautistalogrono.com (principal) e iglesiabautistalogroño.com.
- La web actual (Google Sites) funciona en www.iglesiabautistalogrono.com.
- En GoDaddy no hay que contratar nada: ni WordPress, ni Airo, ni cuenta de correo, ni plan de protección.

### 15.2. Pasos
1. Carlos crea una cuenta gratuita de Cloudflare.
2. Conecta Cloudflare Pages al repositorio; la web se publica primero en la dirección provisional de Cloudflare (*.pages.dev) para la aprobación final del pastor.
3. Añade iglesiabautistalogrono.com a Cloudflare (plan gratuito). Cloudflare copia los registros DNS actuales: hay que comprobar que estén todos, incluidos los de Google Sites, cualquier verificación TXT y cualquier registro de correo.
4. En GoDaddy, cambia los servidores de nombres por los dos que indique Cloudflare. El registro y la renovación siguen en GoDaddy.
5. Cuando Cloudflare confirme el dominio, se añade como dominio personalizado de Pages. Dirección canónica: https://www.iglesiabautistalogrono.com (mantiene el host que ya conoce Google); la versión sin «www» redirige a la de «www».
6. iglesiabautistalogroño.com se añade también a Cloudflare y redirige con 301 al dominio principal. Con eñe, los dominios se convierten internamente en una dirección que empieza por «xn--» y dan problemas al compartirlos y en el correo: por eso el principal es el de sin eñe.
7. Reenvío de correo de Cloudflare: contacto@iglesiabautistalogrono.com se reenvía a [PENDIENTE: Gmail de destino]. Para responder desde esa misma dirección hace falta un ajuste adicional en Gmail («Enviar como»); si no, se responde desde el Gmail. Explícaselo a Carlos paso a paso cuando llegue el momento.
8. Google Search Console: verificación por registro TXT y envío del sitemap.
9. Consola de Google Cloud: actualizar el enlace de privacidad de la herramienta IEBIL Publicador (apartado 10.5).
10. Comprobaciones tras el cambio: todas las redirecciones del apartado 5.3, formulario, aviso de cookies, inserciones, móvil, HTTPS y que Google Sites ya no responde en el dominio.

Google Sites sigue funcionando hasta el cambio de servidores de nombres, así que no hay corte si se hace en este orden.

### 15.3. Recomendaciones sobre el dominio (para Carlos, no para Code)
- El dominio está en la cuenta personal de Carlos: dar acceso delegado al pastor, activar la renovación automática con un medio de pago de la iglesia, activar la verificación en dos pasos y revisar la fecha de vencimiento de los dos dominios.

---

## 16. Investigación de mercado: cómo lo hacen otras iglesias

### 16.1. Método
El 05/10/2026 se lanzó el mismo encargo de investigación en tres IA (Claude, ChatGPT y Perplexity). Este apartado es la síntesis de los tres; no hace falta consultar los informes originales. Valoración:

| Informe | Muestra | Fiabilidad | Qué aporta |
|---|---|---|---|
| Claude | 15 webs, 3 de Logroño | Alta: comprueba cada web y dice lo que no pudo ver | Competencia local, detalle por web, parte legal española |
| ChatGPT | 25 webs, 11 españolas | Alta: no inventa tipografías ni mediciones | Arquitectura, recorrido del visitante, SEO, direcciones artísticas |
| Perplexity | 28 webs, casi todas megaiglesias de EE. UU. | Baja: porcentajes sin método y tipografías deducidas | Poco que no digan los otros dos; se descarta casi entero |

### 16.2. Consenso de los tres (muy fiable)
- La web debe responder en segundos: quiénes son, qué creen, dónde, cuándo y qué pasará si voy.
- Horario y dirección en la primera pantalla.
- Página para nuevos con dudas reales: duración, ropa, niños, dinero, aparcamiento, «¿y si no soy creyente?».
- Fotos propias de personas reales; nunca de banco.
- Menú de seis elementos como máximo y un único botón principal.
- El contenido caducado es el peor error.
- Primero el móvil; textos legibles; contraste.
- Posicionamiento local y Perfil de Empresa de Google.
- Estilo cálido y comunitario con el orden del minimalismo; sin estética de megaiglesia.

### 16.3. Competencia en Logroño (05/10/2026)

| Iglesia | Web | Lo mejor | Lo peor |
|---|---|---|---|
| Somos Luz (ADE) | https://somosluziglesia.com/ | Menú corto y dirección en portada | Horarios dentro de imágenes; sin página para nuevos ni evangelio; sin textos legales visibles |
| Jesús Manantial de Vida | https://jesusmanantialdevida.es/ | Página «Saber más de Jesús», privacidad, cookies con aceptar o rechazar | Portada larga sin llamada a la acción; imagen generada con IA |
| Remar Rioja | https://www.remarrioja.es/saber-mas/iglesia-evangelica-en-logrono | WhatsApp y dirección | Página dentro de una ONG, sin horario de culto |

Ninguna resuelve bien la página para nuevos ni el evangelio a la vez: es el hueco que puede ocupar IBIL.

### 16.4. Referencias y qué tomar de cada una

| Web | Qué tomar |
|---|---|
| IEB Granada (https://www.iebg.es/; ChatGPT la cita como https://www.iebgranada.com/, comprobar cuál responde) | La mejor referencia española: próxima reunión en portada, horarios, última predicación, ofrecimiento de acompañar en la primera visita, una palabra en cursiva en cada titular |
| Revelation Church, Londres (https://www.revelationchurch.org.uk/) | La página de primera visita más completa: horas, transporte, accesibilidad, ropa, niños, qué hacer si no eres creyente |
| The Village Church (https://www.thevillagechurch.com/) | Ruta explícita para quien tiene preguntas sobre Jesús; nadie señala al visitante |
| Sierra North International Church (https://sierranorthchurch.com/) | Iglesia pequeña con una web sencilla y muy orientada a la primera visita |
| Iglesia Bautista Victoria (https://www.iglesiavictoria.com/planea-mi-visita) | Preguntas reales: pasado, dinero, ropa, niños, autobús |
| IB Monte Hebrón (https://ibmh.mx/) | Menú de tres opciones, WhatsApp y botón para compartir la predicación por WhatsApp |
| Iglesia Bíblica de Albacete (https://www.albacetebiblica.es/) | «Evangelio» como primer elemento del menú y botón «¿Qué es el evangelio?» |
| La Roca Pamplona (https://larocapamplona.com/) | «¿Eres nuevo?», «Conoce a Jesús» y vídeo corto sobre la salvación (y, como contraejemplo, anuncios caducados) |
| St Helen's Bishopsgate (https://www.st-helens.org.uk/sunday/1030am/) | Predicaciones ordenadas por pasaje bíblico |
| Capitol Hill Baptist (https://www.capitolhillbaptist.org/new-here/) | Qué esperar en cada reunión, accesibilidad, protección infantil |
| Redeemer East Side (https://eastside.redeemer.com/about/new) | Detalles concretos para el recién llegado |
| ICF Zürich (https://icf.church/zuerich/en/visit/) | Bloque «Bueno saber»: duración, ropa, gratis, niños, transporte |
| The Austin Stone (https://www.austinstone.org/) | Jerarquía visual y fotografía (sin su escala de megaiglesia) |

### 16.5. Diez buenas prácticas, por impacto
1. Horario, dirección y botón de visita en la primera pantalla.
2. Página «¿Eres nuevo?» que resuelva las dudas reales.
3. Página del evangelio enlazada desde el menú y la portada.
4. Ofrecer acompañar al visitante la primera vez.
5. Última predicación integrada que se actualice sola, con botón para compartir por WhatsApp.
6. Fotos reales y recientes.
7. Menú corto y sin jerga.
8. Contenido que se actualice solo.
9. Ciudad y tipo de iglesia en títulos y descripciones.
10. Primero el móvil; carga en menos de 3 segundos.

### 16.6. Diez errores que hay que evitar
1. Restos de plantilla (texto de relleno, enlaces a la plataforma, textos en inglés).
2. Contenido caducado (actos pasados, año del pie escrito a mano).
3. Sin página para nuevos ni presentación del evangelio.
4. Mezcla de idiomas y faltas de ortografía («Conoce a Jesus» sin tilde, «Eres Nuevo?» sin signo de apertura).
5. Bloquear el zoom.
6. Aviso de cookies del tipo «si sigue navegando, acepta».
7. Textos legales ausentes y formularios sin información de privacidad.
8. Información clave dentro de imágenes.
9. Menú pensado desde la estructura interna de la iglesia y no desde las preguntas del visitante.
10. Vídeo pesado de fondo, deslizadores automáticos y varios botones compitiendo.

### 16.7. Lo que se descartó y por qué

| Propuesta | De quién | Motivo |
|---|---|---|
| Porcentajes de frecuencia | Perplexity | Sin método, no verificables |
| Tipografías «identificadas» | Perplexity | Deducidas a ojo |
| Squarespace o WordPress, 150-300 €/año | Perplexity | Web estática gratuita ya decidida |
| Fotógrafo profesional trimestral | Perplexity | Desproporcionado; basta un domingo con un voluntario |
| Evitar el aviso de cookies | Perplexity | Con inserciones de terceros es obligatorio |
| Paletas ajenas (azul marino, turquesa, granate como principal) | ChatGPT, Perplexity | El color principal es #0c5373 |
| Lora + Source Sans 3 (propuesta inicial) | Claude | Sustituida por las tipografías del kit de marca (Cormorant Garamond + Public Sans) |
| Formulario de petición de oración | ChatGPT, Perplexity | Dato religioso (art. 9 RGPD): por WhatsApp o correo |
| «Bienvenido a casa» y frases hechas | Perplexity | Frases vacías |

---

## 17. Fases y entregables

| Fase | Contenido | Entregable |
|---|---|---|
| 0. Preparación | CLAUDE.md, inventario y ajuste de marca (4.6), skill frontend-design, estructura del proyecto, README | Informe de inventario y lista de lo que falta |
| 1. Maqueta completa | Todas las páginas con diseño definitivo, textos borrador de este brief y huecos marcados | Vista previa en móvil y escritorio + lista de huecos |
| 2. Contenido definitivo | Textos revisados por el pastor, fotos reales, datos confirmados | Vista previa sin huecos críticos |
| 3. Legal, posicionamiento, accesibilidad y rendimiento | Textos legales, aviso de cookies, datos estructurados, sitemap, auditoría Lighthouse en móvil | Informe de auditoría con resultados |
| 4. Publicación | Apartado 15, cuando Carlos lo diga | Web en el dominio y comprobaciones hechas |
| 5. Mantenimiento | Predicación semanal, reflexión mensual, revisión trimestral de horarios y datos, revisión anual de textos legales | README con instrucciones |

Plazo orientativo: la primera versión publicable en unas 4-6 sesiones de trabajo de unas 2 horas, con el material listo (confianza 70%). El cuello de botella no es la construcción, sino los datos pendientes y las fotos (apartado 19).

---

## 18. Lista de comprobación antes de cada entrega
- [ ] Ningún dato inventado; todos los huecos marcados y listados.
- [ ] Horario y dirección visibles en la primera pantalla del móvil.
- [ ] Botón «Visítanos este domingo» visible en todas las páginas.
- [ ] Colores y tipografías del apartado 4; logos con el color real comprobado.
- [ ] «Ustedes» en plural; nada de «vosotros» salvo en citas literales de la RV60.
- [ ] Sin faltas de ortografía; tildes y signos de apertura correctos.
- [ ] Nada de texto importante dentro de imágenes.
- [ ] Ninguna cookie de terceros antes del consentimiento; aviso con aceptar y rechazar al mismo nivel.
- [ ] Formulario sin preguntas religiosas y con información de privacidad.
- [ ] Zoom permitido; navegación con teclado; contraste comprobado.
- [ ] Lighthouse en móvil: 90 o más en las cuatro categorías.
- [ ] Redirecciones de la web antigua probadas.
- [ ] Año del pie automático; ningún acto pasado en la agenda.
- [ ] Sin restos de plantilla ni textos en inglés.

---

## 19. Pendientes

### 19.1. Datos que faltan

| Dato | Lo aporta | Mientras tanto |
|---|---|---|
| Horario vigente (mañana o tarde) | Carlos | El de la web actual |
| Correo que se publica | Carlos | redesiebal@gmail.com |
| WhatsApp de la iglesia | Carlos | Sin botón de WhatsApp |
| Consentimiento para publicar algún teléfono | Pastor | Sin teléfono |
| Entidad titular, NIF, domicilio social y número del Registro de Entidades Religiosas | Carlos | Huecos en el aviso legal |
| Ministerios activos y responsables | Carlos | Lista de la web actual |
| ¿Siguen los Grupos Crecer? | Carlos | No se mencionan |
| Aparcamiento, autobuses y accesibilidad del local | Carlos | Huecos |
| Funcionamiento de la Escuela Dominical y certificados de los monitores | Carlos | Mención básica sin detalles |
| Enlace del calendario de Google público | Carlos | Sin agenda insertada |
| Identificador del canal de YouTube | Code (desde el canal) o Carlos | — |
| Gmail de destino del correo de contacto | Carlos | — |
| Fotos | Carlos | Bloques de color y tipografía |
| Manual de marca en .html original | Carlos | Reglas del apartado 4 |
| Confirmar AIBNE (y si su logo va en la web) | Carlos | Solo UEBE |
| Dirección de la iglesia de Cintruénigo | Carlos | Sin dirección |
| Donativos (IBAN o Bizum) | Iglesia | Sin apartado |
| Idiomas de la página de bienvenida | Carlos | No se crea en la primera versión |
| Visto bueno del pastor a textos doctrinales y de presentación | Pastor | BORRADOR |

### 19.2. Tareas de Carlos (fuera de Code)
1. Crear la cuenta de GitHub y el repositorio privado vacío; conectar Claude Code en la nube.
2. Subir al repositorio: este brief (en docs/), la carpeta de marca (en marca/) y el manual de marca en .html.
3. Responder a la lista 19.1.
4. Hacer o recopilar las fotos (apartado 9.2) y subirlas a fotos/.
5. Hacer público el calendario de Google de la iglesia y pasar el enlace.
6. Cuando toque publicar: cuenta de Cloudflare, servidores de nombres en GoDaddy, Search Console y enlace de privacidad en Google Cloud (apartado 15).
7. Reclamar o actualizar el Perfil de Empresa de Google de IBIL.
8. Asegurar el dominio: acceso del pastor, renovación automática y verificación en dos pasos.

---

## Anexo A. Doctrina (fuentes de la iglesia; no añadir nada)

### A.1. Distintivos bautistas (folleto informativo de IBIL, octubre de 2024)
«Creemos y practicamos estas verdades»:
1. Deidad y señorío de Jesucristo (Efesios 1:21-23; 2 Corintios 4:5).
2. Autoridad de la Biblia. La Biblia es nuestra guía de fe y práctica (Juan 17:17).
3. Salvos por la gracia de Dios, por la fe en Cristo solamente (Efesios 2:8; Romanos 10:9-10).
4. Seguridad del creyente. El que es de Cristo es hijo de Dios y persevera en Él (Juan 1:12; 1 Pedro 1:5; 1 Juan 3:9-10; 5:4).
5. Sacerdocio del creyente (Hebreos 4:14-16; 1 Pedro 2:4-9).
6. Autonomía y autogobierno de la iglesia local (1 Timoteo 3:15; Colosenses 1:18).
7. Proclamar el evangelio (Mateo 28:19-20; 1 Corintios 9:16).
8. Dos ordenanzas: el bautismo y la Cena del Señor (Mateo 28:18-20; 1 Corintios 11:23-26).
9. Derecho a libre examen. Libertad de conciencia y responsabilidad total de cada persona ante Dios (Gálatas 5:13; Romanos 14:10).
10. Separación de Iglesia y Estado. El Estado no debe dictar pautas de doctrina. La iglesia es sostenida por sus miembros e intercede por los gobernantes (el folleto cita: Hechos 13-16; Efesios 4:24-32; 1 Pedro 2:11-17; 1 Timoteo 1:2 [PENDIENTE: revisar estas referencias, que parecen contener erratas]).

Doctrina sana (folleto): «Estamos comprometidos con la enseñanza bíblica, en crecer en el carácter cristiano, afirmar nuestra relación personal con Jesucristo, ministrar y servir a otros en amor y sabiduría, edificar la Iglesia de Cristo y ver vidas y familias transformadas por la gracia y poder de Dios (Efesios 4:11-16).»

### A.2. Confesión de fe y principios bautistas (texto de la web actual, página «En que creemos»)
Usar este texto para la sección completa de Qué creemos, corrigiendo solo erratas evidentes.

CONFESIÓN DE FE Y PRINCIPIOS BAUTISTAS

Los cristianos evangélicos y bautistas creemos que nuestras doctrinas emanan de la Palabra de Dios, son coherentes con las enseñanzas de Jesús y de sus apóstoles, están avaladas por la experiencia de fe de generaciones de cristianos que nos han precedido y no son patrimonio exclusivo del pueblo bautista, sino de un significativo conjunto de cristianos que reconocen a Jesucristo como su Salvador y Señor, tienen en la Biblia su única fuente de autoridad y, bajo la dirección del Espíritu Santo, han llegado a las mismas conclusiones que los bautistas.

DOCTRINAS BAUTISTAS

Las Escrituras. Creemos que la Santa Biblia fue escrita por hombres divinamente inspirados; que tiene a Dios por autor, por objeto, la salvación, y por contenido, la verdad sin mezcla de error; que revela los principios conforme a los cuales Dios nos juzgará; y que constituye la norma suprema sobre las conductas, creencias y opiniones de los hombres.

El Dios verdadero. Creemos que, de acuerdo con las Sagradas Escrituras, hay un único Dios, vivo y verdadero, creador del cielo y de la tierra y de todo lo que en ellos hay, con existencia propia, o sea, no creado. Dios, según su propia naturaleza, es eterno, omnisciente, omnipresente y omnipotente. Dios es amor, es justo y es santo, un solo Dios en tres personas distintas: el Padre, el Hijo y el Espíritu Santo, co-eternos e iguales en perfección divina, pero con distintos cometidos en la redención de la humanidad, y perfectamente unidos en un solo ser.

Dios el Padre. Dios, como Padre, reina con cuidado providencial en su universo, en sus criaturas y en la historia humana, según los propósitos de su gracia. Dios es verdaderamente Padre de todos aquellos que llegan a ser sus hijos por medio de la fe en Cristo Jesús.

Dios el Hijo. Cristo es el Hijo eterno de Dios. En su encarnación como Jesús de Nazaret fue concebido del Espíritu Santo y nacido de la virgen María. Jesús reveló y cumplió plenamente la voluntad del Padre. Se hizo completamente hombre, mas nunca cometió pecado. Honró la ley divina con su obediencia personal, y con su muerte en la cruz proveyó la redención del hombre. Fue levantado de entre los muertos con un cuerpo glorificado y apareció a sus discípulos como la persona que estaba con ellos antes de ser crucificado. Ascendió a los cielos y ahora está exaltado a la diestra de Dios el Padre, siendo el único Mediador entre Dios y los hombres, ya que tiene naturaleza divina y humana. Jesucristo volverá con poder y gloria para juzgar al mundo y para finalizar su misión redentora; mientras tanto mora en todos los creyentes como Señor y Salvador.

Dios el Espíritu Santo. El Espíritu Santo es el Espíritu de Dios. Él inspiró a unos santos hombres de la antigüedad para que escribieran las Escrituras. Él capacita a los hombres para que entiendan la verdad, convence de pecado, de justicia y de juicio. Llama a los hombres para que acudan al Salvador, efectúa la regeneración y exalta a Cristo. El Espíritu Santo conforta a los creyentes y les otorga los dones espirituales con los que la iglesia es edificada. Preserva al creyente hasta el día de la redención. Su presencia en el cristiano garantiza que Dios conducirá al creyente hacia la madurez espiritual. Ilumina y da poder al creyente y a la Iglesia en la adoración, la evangelización y el servicio.

El pecado del ser humano. Creemos que, según las Escrituras, el hombre fue creado a imagen y semejanza de Dios a quien ha de obedecer. Pero nuestros primeros padres (Adán y Eva) pecaron desobedeciendo a Dios, quedando sometidos o expuestos al juicio divino. El pecado produce la separación entre Dios y el hombre y arrastra a éste hacia la condenación, sin que pueda alcanzar la salvación por sus propios méritos, ni por sus propias obras.

La salvación. Creemos que, según las Escrituras, la salvación significa pasar de muerte a vida; es decir, pasar de estar espiritualmente muerto y condenado a causa del pecado, a tener vida: una nueva vida eterna con Cristo, primero aquí en la tierra y, luego, tras la muerte física, en los lugares celestiales. La salvación supone la reconciliación con Dios, y se obtiene mediante el arrepentimiento sincero y la fe (genuina o auténtica) en el Señor Jesucristo y en su obra redentora e intercesora. En su sentido más amplio, la salvación comprende la justificación, la regeneración, la santificación y la glorificación.

La justificación. Creemos que la justificación es un acto de Dios y un estado del cristiano. En el instante en que el pecador arrepentido acepta por la fe la gracia divina, que nos es ofrecida en la expiación vicaria de Jesucristo en la cruz, pasa a estar justificado, es decir, es declarado justo delante de Dios y liberado de Su ira y de la condenación eterna, que por su injusticia merecía, recibiendo en su lugar los beneficios de la salvación obtenida por Jesucristo.

La regeneración. La regeneración es el nuevo nacimiento en Cristo Jesús que se produce por obra del Espíritu Santo, y constituye el comienzo de una vida nueva caracterizada por la obediencia al Evangelio y los frutos del arrepentimiento y la fe.

La santificación. La santificación es un proceso que comienza con la regeneración y concluye en la glorificación. Mediante la santificación, los creyentes van siendo perfeccionados por el Espíritu Santo siguiendo el modelo de Cristo, y son capacitados para hacer la voluntad de Dios, conforme a los propósitos divinos.

La glorificación. La glorificación es la culminación de la salvación y la participación de la gloria eterna de Cristo: un estado gozoso, final y permanente de los redimidos.

La perseverancia de los santos o verdaderos creyentes. Creemos que, según las Escrituras, los redimidos en Cristo, o sea los nacidos del Espíritu, no apostatarán de la fe, sino que perseverarán hasta el fin. Esto distingue a los verdaderos creyentes de aquellos que superficialmente hacen profesión de fe; pues los cristianos auténticos son guardados por Dios y nada ni nadie les podrá separar del amor de Dios en Cristo Jesús.

Una iglesia evangélica. Creemos que, según las Escrituras, la Iglesia fue fundada por Jesucristo, que es la cabeza de la Iglesia. Que cada iglesia local está formada por quienes públicamente han confesado a Jesucristo como su Salvador y Señor, dando testimonio de su fe en Él y manifestando su compromiso con la propia iglesia por medio del bautismo. Que las iglesias locales son cuidadas y dirigidas por Cristo (cabeza de la Iglesia) a través de sus miembros, siendo éstos capacitados, según los dones espirituales, como pastores, maestros, diáconos, etc. para la edificación del Cuerpo de Cristo. Que la administración de cada iglesia es responsabilidad de todos y cada uno de sus miembros. Que los fines de la iglesia son la adoración a Dios, la proclamación del Evangelio, la enseñanza de las Escrituras, la comunión de sus miembros, y el servicio a los demás. Y que los medios con que cuentan las iglesias para el cumplimiento de sus fines son tanto materiales como espirituales: los materiales vienen mayormente de las ofrendas de los miembros (diezmos y ofrendas); y los espirituales están constituidos por la gracia de Dios, la presencia de Cristo y los dones del Espíritu Santo.

El bautismo. Creemos que, según las Escrituras, las dos únicas ordenanzas dadas por Cristo a la iglesia son el bautismo y la cena del Señor. Creemos que, según las Escrituras, el Bautismo en el nombre del Padre, del Hijo y del Espíritu Santo sólo ha de administrarse a quien ya profese fe personal y genuina en Jesucristo, practicándose por inmersión en agua para simbolizar la muerte a la vieja naturaleza o vieja vida y la regeneración interior hacia una nueva vida en comunión con Cristo y con la Iglesia. El Bautismo es un requisito para participar de la cena del Señor y de los derechos y obligaciones como miembro de la iglesia.

La Cena del Señor. Creemos asimismo que, según las Escrituras, la institución de la Cena del Señor es otra ordenanza que han de practicar los miembros de la iglesia, tras un detenido examen de conciencia y arrepentimiento en su caso, tomando pan y vino después de dar gracias a Dios. El pan y el vino no imparten gracia, sino que simbolizan o representan el cuerpo y la sangre de Cristo, entregado y derramada respectivamente para la remisión de los pecados de toda la humanidad. La celebración de la Santa Cena constituye un testimonio de fe, y un acto de proclamación de la muerte redentora y de la resurrección gloriosa del Señor hasta su segunda venida.

El día del Señor. Creemos que, según las Escrituras, cada primer día de la semana debemos congregarnos para dar culto a Dios, proclamando y celebrando la resurrección de Cristo.

El juicio y destino eternos. Creemos que, según las Escrituras, Cristo regresará a la tierra de una manera imprevista, personal y visible en gloria y que, seguidamente, habrá un juicio final.

PRINCIPIOS BAUTISTAS

Los principios se constituyen en la interpretación y aplicación práctica de las doctrinas cristianas por parte de determinados sectores del cristianismo, estando condicionados, como las doctrinas, por la tradición (en este caso, denominacional), la razón, la experiencia personal y colectiva y el contexto ideológico y cultural en el que se aplican. La experiencia nos dice que las denominaciones cristianas han deducido diferentes principios de las mismas doctrinas, por lo que éstos no tienen carácter indefinido y absoluto, y mucho menos infalible. Los principios están en estrecha relación con las doctrinas que los inspiran, pero su definición está sujeta a los avatares de la interpretación y contextualización en situaciones históricas concretas. El valor de los principios radica en su coherencia con respecto a las doctrinas de las que surgen, y en que definen el carácter espiritual, teológico y eclesiológico de las denominaciones cristianas que los sostienen.

Soberanía de Jesucristo. Afirmamos que Cristo está en medio de Su Iglesia como su Señor. Como cabeza de la iglesia, la capacita y equipa para una misión y ministerio integral, y garantiza su libertad. Afirmamos que nuestra autoridad final es Jesucristo, tal como se revela en las Escrituras y entre su pueblo por medio del Espíritu Santo.

La Santa Biblia, única norma de fe y práctica. La Biblia es el registro escrito de la revelación de Dios a la humanidad. Contiene la voluntad de Dios para la vida de cada creyente. Las sagradas Escrituras constituyen la Palabra de Dios y dan testimonio de Cristo el Señor (la Palabra hecha carne), quien nos mandó permanecer en su Palabra y ser hacedores, y no sólo oidores, de la misma.

Concepto de la iglesia. Consideramos que la iglesia es una comunidad de creyentes, y no de meros profesantes, asociados voluntariamente en un pacto con Dios y con los hermanos en la fe.

Un culto espiritual y sencillo. El culto de adoración a Dios ha de realizarse por los cristianos en espíritu y verdad, pero también con sencillez, respeto y orden, procurando la armonía y participación de todos los creyentes.

Iglesia local e Iglesia universal. Creemos que la iglesia bautista es una iglesia completa, pero no la Iglesia completa. Nuestras iglesias locales, así como nuestras convenciones y uniones, participan de la única iglesia que Dios ha fundado.

Autonomía e interdependencia de la iglesia local. Afirmamos la libertad y la responsabilidad de cada congregación local de descubrir el propósito de Cristo para su propia vida y obra.

Administración eclesiástica congregacional. Bajo la autoridad divina y con la guía del Espíritu Santo, la administración eclesiástica de cada iglesia local recae en la congregación, en la que cada miembro tiene idénticos derechos y obligaciones. Además, los cristianos bautistas tienen el deber de potenciar y ejercitar sus dones para provecho común.

Sacerdocio de todos los creyentes. Afirmamos el sacerdocio de todos los creyentes, en el que todos los miembros de la iglesia son llamados al ministerio, así como reconocemos que Dios llama a algunos de entre ellos a ejercer la dirección espiritual de las congregaciones.

Valor del ser humano y responsabilidad personal. El ser humano ha sido creado por Dios a su imagen y semejanza, siendo, por tanto, el eje o centro de la creación. Sin embargo, las personas no somos hijos de Dios por el mero hecho de nacer, sino que el cristianismo, en su más pura concepción, es la realización y desarrollo de la vida mediante la fe personal y responsable en Jesucristo.

Asociacionismo. Creemos que el compromiso mutuo manifestado en el bautismo y la membresía en una iglesia local debe llevar a asociaciones más amplias entre iglesias donde sea posible.

Fraternidad cristiana. Afirmamos la necesidad teológica y práctica de relacionarnos con iglesias hermanas para discernimiento y acción, tal como fue expresado por la antigua frase bautista inglesa: «para caminar juntos por caminos conocidos y por conocer».

Compromiso misionero. Creemos que todo discípulo de Jesucristo está llamado por Dios a testificar del señorío de Jesucristo a toda persona, y que la Iglesia, como parte del Reino de Dios, debe participar en la misión total de Dios en el mundo.

Libertad de conciencia. Afirmamos la necesidad de preservar la libertad de conciencia, aceptando diferencias de puntos de vista y diversidad en la práctica en el seno del pueblo de Dios y respetando el derecho de toda persona a creer según el dictado de su conciencia, o no creer.

Derecho al libre examen de las Escrituras. La Biblia y la promesa del Espíritu Santo son para toda persona, sin acepción, de manera que cualquiera tiene derecho a examinar su vida ante Dios, de forma personal y directa, a la luz de las Sagradas Escrituras y con la guía del Espíritu Santo. Sin embargo, la facultad de examinar libremente las Sagradas Escrituras no admite la interpretación privada en menoscabo de la verdad bíblica.

Separación de Iglesia y Estado. Abogamos por la separación de la Iglesia y el Estado, basados en el señorío único de Cristo y en el interés por la libertad religiosa.

Libertad religiosa. La libertad religiosa es un derecho de toda persona y, como tal, debe ser defendido y respetado.

Respeto a la autoridad civil. Los bautistas manifiestan su respeto a las órdenes y decisiones lícitas de las autoridades legítimamente establecidas, siempre que no se opongan a la Palabra de Dios.

Mayordomía cristiana. Las iglesias bautistas deben ser sostenidas económicamente por los propios miembros mediante los diezmos y ofrendas, como parte del culto a Dios. Cada cristiano bautista, reconociendo que «de Dios es la tierra y su plenitud, el mundo y los que en él habitan», ha de considerarse un administrador inteligente y responsable de sí mismo y de cuanto tenga y utilice, pues de todo ello ha de rendir cuenta a Dios.

### A.3. Guía «Doctrinas Bíblicas Básicas» (IEBT y puntos de misión, revisión de agosto de 2025)
Curso de 15 lecciones elaborado por el pastor Felipe Albacete y Patricia Fernández. Fuentes declaradas: Confesión de Fe de la UEBE («Fe y Mensaje Bautista»), estatutos de la IEBT, «Doctrina Bautista en un año» (Gilberto Pinzón Suárez) y «Principios Bíblicos Básicos de los Bautistas» (Instituto Bautista Colombiano). Citas en RV60 salvo indicación.

Ideas clave por lección (resumen fiel; úsalo para Conoce a Jesús y Qué creemos):
1. La Biblia: escrita por hombres divinamente inspirados; Dios por autor, la salvación por objeto, la verdad sin mezcla de error por contenido; norma suprema de conducta, creencias y opiniones (2 Ti 3:16-17).
2. Dios: un único Dios vivo y verdadero, eterno, todopoderoso, santo, justo, infinito en sabiduría y amor; un Dios en tres personas: Padre, Hijo y Espíritu Santo.
3. Jesucristo: Hijo eterno de Dios, plenamente Dios y plenamente hombre, concebido por el Espíritu Santo en la virgen María; vivió sin pecado; murió en expiación por nuestros pecados; resucitó para nuestra justificación; ascendió y está a la diestra del Padre intercediendo; volverá como Rey y Juez.
4. El Espíritu Santo: persona divina, tercera persona de la Trinidad; convence de pecado, regenera, sella, santifica, enseña, guía, consuela y reparte dones; todo creyente lo recibe desde su conversión.
5. El ser humano: creado por Dios a su imagen, con propósito y con libre albedrío; por la caída, nace con una naturaleza pecaminosa, alejado de Dios y necesitado de ser regenerado, justificado y santificado.
6. La gracia de Dios: favor inmerecido; la salvación se obtiene por fe y no por obras (Ef 2:8-9); la ley muestra el pecado y lleva a Cristo; la soberanía de Dios actúa en concordancia con el libre albedrío humano.
7. La justificación: acto de Dios por el que declara justo y libre al pecador que se arrepiente y pone su fe solo en Jesucristo, por su muerte sustitutiva; las buenas obras son fruto, no medio, de la salvación.
8. La regeneración (nuevo nacimiento): obra instantánea del Espíritu Santo que hace del creyente una nueva criatura (2 Co 5:17); no consiste en nacer en familia cristiana, bautizarse, ser religioso ni ser miembro de una iglesia; se nace de nuevo al arrepentirse y creer en Jesucristo.
9. La santificación: obra posicional (desde la regeneración) y progresiva del Espíritu Santo en todo el ser, por la fe, la Palabra y la sangre de Cristo.
10. La Iglesia: fundada por Cristo, su cabeza; formada por los salvos; dos ordenanzas; misión de honrar a Dios, testificar de Jesús y hacer discípulos; gobierno congregacional con pastores y diáconos.
11. El bautismo: por inmersión, solo para creyentes capaces de creer; no salva ni limpia de pecado; es proclamación pública de la fe y obediencia al mandato de Cristo; en el nombre del Padre, del Hijo y del Espíritu Santo.
12. La Cena del Señor: acto conmemorativo y simbólico (pan y fruto de la vid), no sacrificio repetido ni transformación de los elementos; para los nacidos de nuevo.
13-15. Mayordomía bíblica, la vida cristiana y el mundo espiritual, más un capítulo de distintivos bautistas: no se han podido leer en esta preparación (el documento superó el límite de lectura). [PENDIENTE: si hacen falta, Carlos sube la guía en PDF a docs/.]

---

## Anexo B. Textos actuales (web de Google Sites y folleto), para reutilizar

### B.1. Portada actual
- Cabecera: «Iglesia Bautista Internacional de Logroño. Llevando la luz de Cristo a cada persona, ciudad y nación.»
- «Bienvenido a nuestra iglesia.» Colosenses 1:28.
- Lema: Firmes en la Verdad · Creciendo en Cristo · Haciendo discípulos.
- «Somos parte de la tradición bautista en España, que históricamente se caracteriza por creer en la autoridad de las Escrituras, la fe personal en Jesús y el bautismo de creyentes por inmersión. En resumen, es una iglesia evangelística, fiel a la Palabra de Dios y Cristo céntrica que busca acercar a las personas a Cristo, crecer en fe y servir a la sociedad desde el amor y la enseñanza del evangelio.»

### B.2. Quiénes somos (web actual)
«Le damos una cordial bienvenida a la Iglesia Bautista Internacional de Logroño, somos una iglesia que busca conocer y vivir la Palabra de Dios, proclamar el evangelio de Jesucristo y hacer discípulos. Nacimos en 2024, fruto de la obra misionera de nuestro Pastor Felipe Albacete y su esposa, la misionera Patricia Fernández, responsables de la revitalización de la Iglesia Evangélica Bautista de Tudela, con el apoyo de un equipo de obreros que han apoyado a lo largo de estos años en la obra misionera en Navarra, La Rioja y Soria. Somos miembros de la Unión Evangélica Bautista de España (UEBE), apoyamos el Pacto Bautista, y las Doctrinas y Principios Bautistas, que nos exhortan a ser fieles a Dios, a crecer en Cristo, vivir en santidad y amor mientras cumplimos la Gran Comisión (Mateo 28:19,20). Le invitamos a visitarnos y participar activamente en la obra de la Iglesia y vivir la fe en Cristo.» Cita: Hechos 5:42.

### B.3. Pastor (web actual)
«El pastor Felipe y su esposa han dedicado su vida y esfuerzos desde el 2011 a la revitalización y plantación de Iglesias en Navarra, La Rioja y Soria. Labor por la que se sienten muy bendecidos y agradecidos por cada uno de los siervos y siervas que se han dispuesto a servir con amor y sacrificio y por el respaldo de la UEBE en su labor ministerial. Actualmente el Pastor Felipe es presidente de la AIBNE (Asociación de Iglesias Bautistas del Norte de España).»

### B.4. Reuniones: invitación (web actual)
- Conocerá más profundamente a Dios y afirmará su relación con Él.
- Estudiará la Palabra de Dios y aprenderá cómo poner en práctica los principios y valores cristianos.
- Será animado y acompañado para crecer en la fe y en todas las áreas de su vida, y a seguir y proclamar a Cristo (Ro 8:29).
- Se relacionará con personas que buscan y aman a Dios.
- Compartirá las bendiciones que recibe de Dios para servir a otros (Jn 7:38; Ef 3:20; 4:25; 2 Ti 1:7; 1 Co 2:4).
Cita: 1 Tesalonicenses 3:12 («Y que el Señor los haga crecer y tener todavía más amor los unos para con los otros y para con todos»; en la web figura como 3:11, comprobar).

### B.5. Folleto (octubre de 2024): textos útiles
- Grupos Crecer: «grupos pequeños, de 3 a 15 personas que se reúnen semanalmente, tanto presencial como online, en la iglesia y en las casas, para orar, estudiar la Biblia y aprender a poner en práctica los principios bíblicos (Mt 22:37-39; Ef 4:25). Son coordinados por el Ministerio de Enseñanza y Discipulado.»
- Al participar: conocerás más profundamente a Dios; aprenderás principios y valores cristianos para madurar y vivir con integridad y paz; tendrás amistad con personas que buscan a Dios.
- «Las personas que están en nuestra iglesia buscan»: una congregación cristiana de sana doctrina; conocer más acerca de Dios y de la Biblia; crecer en su vida espiritual; fortalecerse y encontrar apoyo para su vida personal, familiar y sus relaciones; relacionarse con personas que aman y desean servir a Dios; ser discípulos de Jesucristo y enseñar a otros a vivir para Él.
- Cierre: «Le invitamos a un encuentro con Dios y a una vida plena en Cristo Jesús.» Colosenses 1:28.

### B.6. Privacidad de la herramienta IEBIL Publicador (texto actual, se mantiene dentro de /privacidad/)
«IEBIL Publicador es una herramienta interna de la Iglesia Evangélica Bautista Internacional de Logroño (IEBIL) para publicar en su propio canal de YouTube los sermones y vídeos que produce la iglesia.

Qué datos usa: la herramienta accede, con permiso de la cuenta propietaria del canal, a la API de YouTube solo para subir vídeos, miniaturas y subtítulos, y editar sus títulos, descripciones y visibilidad. No lee ni guarda datos personales de ningún usuario ni de los espectadores del canal.

Dónde se guardan: el permiso de acceso se guarda únicamente en el ordenador de la iglesia que realiza las publicaciones. No se comparte, vende ni cede a terceros.

Cómo retirar el permiso: en cualquier momento desde https://myaccount.google.com/permissions

Esta herramienta usa los Servicios de API de YouTube. Al usarla se aplican las Condiciones de Servicio de YouTube (https://www.youtube.com/t/terms) y la Política de Privacidad de Google (https://policies.google.com/privacy).

Contacto: redesiebal@gmail.com»

Nota: el nombre de la entidad (IEBIL) debe coincidir con el titular que se confirme en el apartado 2.4; el nombre de la aplicación se mantiene tal como está registrado en Google.

---

## Anexo C. Fuentes

Documentos de la iglesia (Drive de Carlos):
- Guía «Doctrinas Bíblicas Básicas», revisión de agosto de 2025: https://drive.google.com/file/d/1xmScQGUEC-cCjJazaexKMk2QdGLvX270/view
- Folleto informativo de visitas y miembros, 29/10/2024: https://drive.google.com/file/d/121q7j2NnjWo_nIiyfd8VmgTfJEJNKdQ2/view
- Kit de marca, carpeta «Marca IBIL - archivos para la web»: https://drive.google.com/drive/folders/1fgQRJWObPMNPLXVp2we_1r1G4UstDIBF
- Colores IBIL: https://docs.google.com/document/d/1lB5VQ6rHxENaFmGequXiEWrbaqfIIWJcSE2v92oKUzw/edit
- Tipografías IBIL: https://docs.google.com/document/d/1fWA04OjyIEPCj7QfPTT8y16WOBCiOsasxi1Ovixir6I/edit

Web actual:
- Inicio: https://www.iglesiabautistalogrono.com/
- Quiénes somos: https://www.iglesiabautistalogrono.com/quiénes-somos
- En que creemos: https://www.iglesiabautistalogrono.com/quiénes-somos/en-que-creemos
- Ministerios: https://www.iglesiabautistalogrono.com/ministerios
- Reuniones: https://www.iglesiabautistalogrono.com/reuniones
- Contacto: https://www.iglesiabautistalogrono.com/contacto
- Política de privacidad (IEBIL Publicador): https://www.iglesiabautistalogrono.com/política-de-privacidad

Normativa (verificar siempre la versión vigente):
- RGPD (arts. 9, 13 y 14): https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679
- LOPDGDD (art. 7): https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673
- LSSI (arts. 10 y 22.2): https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758
- LO 8/2021 de protección integral a la infancia (art. 57): https://www.boe.es/buscar/act.php?id=BOE-A-2021-9347
- LO 1/1982 de protección del derecho al honor, a la intimidad y a la propia imagen: https://www.boe.es/buscar/act.php?id=BOE-A-1982-11196
- Guía de cookies de la AEPD: https://www.aepd.es/guias/guia-cookies.pdf

Técnica y diseño:
- Cloudflare Pages, dominios personalizados: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Cloudflare Pages, redirecciones: https://developers.cloudflare.com/pages/configuration/redirects/
- Cloudflare Pages, cabeceras: https://developers.cloudflare.com/pages/configuration/headers/
- Cloudflare, reenvío de correo: https://developers.cloudflare.com/email-routing/
- Cloudflare, cambio de servidores de nombres: https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/
- Cloudflare Web Analytics: https://developers.cloudflare.com/web-analytics/
- Cloudflare Turnstile: https://developers.cloudflare.com/turnstile/
- Claude Code en la web: https://code.claude.com/docs/en/claude-code-on-the-web
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Comprobador de contraste WebAIM: https://webaim.org/resources/contrastchecker/
- Core Web Vitals: https://web.dev/articles/vitals
- Schema.org Church: https://schema.org/Church
- Datos estructurados de vídeo en Google: https://developers.google.com/search/docs/appearance/structured-data/video
- Cormorant Garamond: https://fonts.google.com/specimen/Cormorant+Garamond
- Public Sans: https://fonts.google.com/specimen/Public+Sans
- Licencia SIL OFL: https://openfontlicense.org/