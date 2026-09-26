/* =========================================================================
   FELIX · CONTENIDO
   Todo el texto del sitio vive acá, en inglés y español: T('english', 'español').
   Para sumar una imagen: I('archivo.jpg', ancho, alto, 'texto alternativo').
   Para un video:        V('archivo.mp4', 'poster.jpg', ancho, alto, 'texto alternativo').
   ========================================================================= */

window.FELIX = window.FELIX || {};

(function () {
  const FELIX = window.FELIX;
  const T = (en, es) => ({ en, es: es || en });
  const I = (file, w, h, alt, cap) => ({ type: 'image', src: `assets/img/${file}`, w, h, alt, cap });
  const V = (file, poster, w, h, alt, cap) => ({ type: 'video', src: `assets/video/${file}`, poster: `assets/img/${poster}`, w, h, alt, cap });

  /* ------------------------------------------------------------------ UI */
  FELIX.ui = {
    'nav.work': T('Work', 'Trabajos'),
    'nav.archive': T('Archive', 'Archivo'),
    'nav.about': T('About', 'Sobre mí'),
    'nav.contact': T('Contact', 'Contacto'),
    'skip': T('Skip to content', 'Ir al contenido'),
    'home.kicker': T('Multimedia designer · Buenos Aires · GMT-3', 'Diseñador multimedia · Buenos Aires · GMT-3'),
    'home.title': T('I design brand systems, learning experiences and 3D — and build them in code.', 'Diseño sistemas de marca, experiencias de aprendizaje y 3D — y los construyo en código.'),
    'home.title.short': T('Multimedia designer. Brand systems, e‑learning and 3D.', 'Diseñador multimedia. Sistemas de marca, e‑learning y 3D.'),
    'home.lead': T('Ten years designing where design has to work: training for companies like Scania, identities for small studios, and personal projects that sold on their own.', 'Diez años diseñando donde el diseño tiene que funcionar: capacitaciones para empresas como Scania, identidades para estudios chicos y proyectos personales que se vendieron solos.'),
    'home.facts': [
      [T('2016'), T('designing since — covers, brands, courses', 'diseñando desde — portadas, marcas, cursos')],
      [T('40+'), T('e-learning projects for Scania, Aluar, Fate and Cruz Roja', 'proyectos de e-learning para Scania, Aluar, Fate y Cruz Roja')],
      [T('100+'), T('copies sold of a personal 3D project', 'copias vendidas de un proyecto 3D personal')]
    ],
    'home.status': T('Open to remote roles and freelance projects', 'Disponible para trabajo remoto y proyectos freelance'),
    'home.cta.work': T('See selected work', 'Ver trabajos'),
    'home.cta.cv': T('Download CV', 'Descargar CV'),
    'home.cases': T('Selected work', 'Trabajos seleccionados'),
    'home.cases.note': T('Seven case studies, from brief to result.', 'Siete casos, del encargo al resultado.'),
    'home.archive': T('From the archive', 'Del archivo'),
    'home.archive.note': T('Brands, covers, motion, websites and trains.', 'Marcas, portadas, animación, sitios y trenes.'),
    'home.archive.all': T('Open the archive', 'Abrir el archivo'),
    'home.clients': T('Worked for or with', 'Trabajé para o con'),
    'case.label': T('Case', 'Caso'),
    'case.result': T('Result', 'Resultado'),
    'case.next': T('Next case', 'Siguiente caso'),
    'case.back': T('All work', 'Todos los trabajos'),
    'case.view': T('View', 'Ver'),
    'archive.title': T('Archive', 'Archivo'),
    'archive.lead': T('Everything that is not a full case study: brands, websites, motion, 3D, covers, paintings and photographs.', 'Todo lo que no es un caso completo: marcas, sitios, animación, 3D, portadas, pinturas y fotografías.'),
    'archive.all': T('All', 'Todo'),
    'archive.items': T('projects', 'proyectos'),
    'about.title': T('About', 'Sobre mí'),
    'about.experience': T('Experience', 'Experiencia'),
    'about.skills': T('Tools', 'Herramientas'),
    'about.education': T('Education', 'Formación'),
    'about.languages': T('Languages', 'Idiomas'),
    'contact.title': T('Let’s work together.', 'Trabajemos juntos.'),
    'contact.lead': T('Remote full-time, contract or freelance. I reply within 24 hours on working days. GMT-3 overlaps with US mornings and European afternoons.', 'Remoto full-time, por contrato o freelance. Respondo dentro de las 24 horas hábiles. GMT-3 coincide con las mañanas de EE. UU. y las tardes de Europa.'),
    'contact.email': T('Email', 'Mail'),
    'contact.cv': T('CV · PDF', 'CV · PDF'),
    'foot.identity': T('Identity: FELIX, chapter I', 'Identidad: FELIX, capítulo I'),
    'foot.top': T('Back to top', 'Volver arriba'),
    'lb.close': T('Close', 'Cerrar'),
    'lb.prev': T('Previous', 'Anterior'),
    'lb.next': T('Next', 'Siguiente'),
    'notfound': T('This page does not exist.', 'Esta página no existe.'),
    'lang.switch': T('Ver en español', 'View in English')
  };

  /* ---------------------------------------------------------------- CASOS */
  FELIX.cases = [
    {
      slug: 'scania',
      client: 'Scania',
      title: T('A training system for drivers who don’t use technology', 'Un sistema para capacitar a conductores que no usan tecnología'),
      short: T('Scania · Driver training system', 'Scania · Sistema de capacitación'),
      summary: T('A visual system to train Scania drivers across Latin America, built inside one of the strictest brand manuals in the industry.', 'Un sistema visual para capacitar a conductores de Scania en toda Latinoamérica, dentro de uno de los manuales de marca más estrictos de la industria.'),
      tags: T('E-learning · Information design · Illustration', 'E-learning · Diseño de información · Ilustración'),
      cover: I('scania-moodboard.jpg', 1600, 900, 'Four classic Scania trucks in blue fog: the moodboard cover'),
      facts: [
        [T('Client', 'Cliente'), T('Scania Latin America', 'Scania Latinoamérica')],
        [T('Context', 'Contexto'), T('Entornos Educativos')],
        [T('Year', 'Año'), T('2025')],
        [T('Role', 'Rol'), T('Visual proposal · Illustration', 'Propuesta visual · Ilustración')],
        [T('Tools', 'Herramientas'), T('Figma')]
      ],
      sections: [
        { h: T('The brief', 'El encargo'),
          p: [T('Design a system to train drivers across Scania Latin America. The premise: most of them were not familiar with technology, so every piece had to be easy to read and accessible. There was no previous material — the system started from zero.', 'Diseñar un sistema para capacitar a conductores de Scania Latinoamérica. La premisa: la mayoría no estaba familiarizada con la tecnología, así que cada pieza tenía que ser fácil de leer y accesible. No había material previo: el sistema empezó de cero.')],
          media: [I('scania-serie-s.jpg', 1600, 900, 'Infographic of the Scania S series cabin interior'), I('scania-motores.jpg', 1600, 900, 'Infographic about Scania engines with a photographic render')] },
        { h: T('The constraint', 'La restricción'),
          p: [T('Scania’s international brand manual is very strict: Scania Sans and Scania Bold, fixed colour and logo rules, almost no creative freedom. So the design work had to happen in reading order, hierarchy and illustration.', 'El manual de marca internacional de Scania es muy exigente: Scania Sans y Scania Bold, reglas fijas de color y logo, casi sin libertad creativa. Así que el diseño tenía que estar en el orden de lectura, la jerarquía y la ilustración.')],
          media: [I('scania-consumo.jpg', 1600, 900, 'Infographic about fuel consumption and cabin aerodynamics')] },
        { h: T('What I did', 'Qué hice'),
          p: [T('I designed the visual proposal and drew the illustrations for the infographics — fine-line technical drawings and more illustrative ones — for cabins, engines, gearboxes and fuel consumption. Everything was built in Figma as templates for desktop and mobile.', 'Diseñé la propuesta visual y dibujé las ilustraciones de las infografías — de línea fina técnica y otras más ilustrativas — para cabinas, motores, cajas de cambios y consumo de combustible. Todo se armó en Figma como plantillas para computadora y celular.')],
          media: [
            I('infographic-serie-p.jpg', 768, 432, 'Line-drawing infographic explaining a truck cabin'),
            I('infographic-transmission.jpg', 768, 432, 'Infographic of a truck gearbox'),
            I('infographic-engine.jpg', 820, 633, 'Technical render of a truck engine used in an infographic')
          ] }
      ],
      result: {
        stats: [[T('20–30'), T('pieces designed', 'piezas diseñadas')], [T('Templates', 'Plantillas'), T('reused by the client', 'que el cliente reutiliza')]],
        p: T('The client approved the designs — they liked them a lot — and went on to create and adapt new infographics from these templates.', 'El cliente aprobó los diseños — le gustaron mucho — y siguió creando y adaptando nuevas infografías a partir de estas plantillas.')
      },
      note: T('Images adapted for the portfolio to respect the client’s confidentiality.', 'Imágenes adaptadas para el portfolio, respetando la confidencialidad del cliente.')
    },

    {
      slug: 'frio-creativos',
      client: 'Frío Creativos',
      title: T('Cold judgement, living result', 'Criterio frío, resultado vivo'),
      short: T('Frío Creativos · Identity system', 'Frío Creativos · Sistema de identidad'),
      summary: T('An alternative identity system for Frío Creativos, a studio that builds brands, websites and immersive experiences — and the 29-page manual to design, write and build with it.', 'Un sistema de identidad alternativo para Frío Creativos, un estudio que hace marcas, sitios web y experiencias inmersivas — y el manual de 29 páginas para diseñar, escribir y construir con él.'),
      tags: T('Brand strategy · Identity · Brand manual', 'Estrategia · Identidad · Manual de marca'),
      cover: I('frio-id-cover.jpg', 1600, 900, 'Frío Creativos manual cover with the word FRIO in lime on dark green'),
      facts: [
        [T('Studio', 'Estudio'), T('Frío Creativos')],
        [T('Year', 'Año'), T('2026')],
        [T('Role', 'Rol'), T('Strategy · Identity · Manual', 'Estrategia · Identidad · Manual')],
        [T('Output', 'Entrega'), T('29 pages · 7 chapters', '29 páginas · 7 capítulos')],
        [T('Status', 'Estado'), T('Alternative proposal', 'Propuesta alternativa')]
      ],
      sections: [
        { h: T('The problem', 'El problema'),
          p: [T('Small businesses that can’t afford a professional brand manual end up with improvised identities. Frío’s promise is the opposite: the same process as a large agency — strategy, system and manual — with the client inside the process. The studio’s own brand had to prove it.', 'Los emprendimientos que no pueden pagar un manual de marca profesional terminan con identidades improvisadas. La promesa de Frío es la contraria: el mismo proceso que una gran agencia — estrategia, sistema y manual — con el cliente adentro. La marca del propio estudio tenía que demostrarlo.')], },
        { h: T('The idea', 'La idea'),
          p: [T('Frío, cold: calm to think, seriousness to decide, judgement to solve without detours. The voice follows the idea — calm, direct, close and confident. Short sentences, verb first, peer to peer. Work, not adjectives.', 'Frío: calma para pensar, seriedad para decidir, criterio para resolver sin vueltas. El tono sigue a la idea — tranquilo, directo, cercano y seguro. Frases cortas, verbo al frente, de igual a igual. Trabajos, no adjetivos.')],
          media: [I('frio-id-idea.jpg', 1600, 900, 'The brand idea: Frío — calm to think, seriousness to decide, judgement to solve')] },
        { h: T('One piece moves', 'Una sola pieza se mueve'),
          p: [T('An extended black grotesque in caps, rising at 8° with vertical stems: the logotype is the only thing in motion, everything else stays still. It is built on one module — x, the height of the F stem — with CREATIVOS at 0.6x, 0.5x between lines and a 1x indent. Three versions (primary, reduced and an isotype for avatars and favicons), 1x of clear space and minimum sizes down to 24 px.', 'Una grotesca extendida en negra y mayúsculas, que sube a 8° con astas verticales: el logotipo es lo único en movimiento, todo lo demás queda quieto. Se construye sobre un módulo — x, la altura del asta de la F — con CREATIVOS a 0,6x, 0,5x de interlínea y 1x de sangría. Tres versiones (principal, reducida e isotipo para avatares y favicon), 1x de resguardo y tamaños mínimos de hasta 24 px.')],
          media: [
            I('frio-id-construction.jpg', 1600, 900, 'Frío Creativos logotype on its construction grid, tilted 8 degrees'),
            I('frio-id-versions.jpg', 1600, 900, 'Primary, reduced and isotype versions of the logo')
          ] },
        { h: T('Colour and type', 'Color y tipografía'),
          p: [T('Five cold colours from a deep blue-green to a cold red and yellow, used in fixed proportions: lots of air, greens as the base, warm accents. Frío lime is reserved for screens — it loses its light on paper and is never used on light backgrounds. Archivo Expanded for headlines, always horizontal; Inter for reading.', 'Cinco colores fríos, de un azul verdoso profundo a un rojo y un amarillo fríos, en proporciones fijas: mucho aire, verdes de base, acentos cálidos. El Frío lima queda reservado a pantalla — en papel pierde la luz — y nunca va sobre fondo claro. Archivo Expanded para títulos, siempre horizontal; Inter para leer.')],
          media: [
            I('frio-id-palette.jpg', 1600, 900, 'Five-colour palette from dark cold blue to cold yellow'),
            I('frio-id-type.jpg', 1600, 900, 'Archivo Expanded as the headline typeface')
          ] },
        { h: T('Signs and images', 'Signos e imagen'),
          p: [T('Four graphic signs — wave, asterisk and star, marker square, line engraving — each with its own rule. Portraits with character, and a three-step method any designer can repeat to intervene classical sculpture: take the original, translate it into wavy lines, then intervene it with two blocks and a sign.', 'Cuatro signos gráficos — onda, asterisco y estrella, cuadrado marcador, grabado de líneas — cada uno con su regla. Retratos con carácter y un método de tres pasos que cualquier diseñador puede repetir para intervenir escultura clásica: tomar el original, traducirlo a líneas onduladas e intervenirlo con dos bloques y un signo.')],
          media: [
            I('frio-id-signs.jpg', 1600, 900, 'Four graphic signs: wave, asterisk, marker square and line engraving'),
            I('frio-id-method.jpg', 1600, 900, 'Three steps to intervene a classical sculpture photo'),
            I('frio-id-digital.jpg', 1600, 900, 'Intervened sculpture in cold white and lime on dark blue')
          ] },
        { h: T('Applications', 'Aplicaciones'),
          p: [T('Social posts, the website before and after the system, stationery — and an animated ad for the studio’s landing page.', 'Publicaciones para redes, el sitio antes y después del sistema, papelería — y una publicidad animada para la landing del estudio.')],
          media: [
            I('frio-id-social.jpg', 1600, 900, 'Three social media posts applying the system'),
            I('frio-id-web.jpg', 1600, 900, 'Current website compared with the system applied'),
            V('frio-reel.mp4', 'frio-reel-poster.jpg', 720, 1280, 'Frío Creativos animated ad showing the landing page', T('Animated ad for the landing page', 'Publicidad animada para la landing'))
          ] }
      ],
      result: {
        stats: [[T('29'), T('pages, from strategy to applications', 'páginas, de la estrategia a las aplicaciones')], [T('1'), T('module that builds the whole logotype', 'módulo que construye todo el logotipo')]],
        p: T('A complete system another designer can pick up and use without me — the same standard Frío promises its clients.', 'Un sistema completo que otro diseñador puede tomar y usar sin mí — el mismo estándar que Frío les promete a sus clientes.')
      }
    },

    {
      slug: 'canopia',
      client: 'Canopia',
      title: T('A brand that breathes', 'Una marca que respira'),
      short: T('Canopia · Identity and website', 'Canopia · Identidad y sitio web'),
      summary: T('A new identity for Canopia, a boutique landscape design and garden maintenance studio in Buenos Aires: logo, brand manual, an icon set for social media and a website designed in Figma and built in HTML, CSS and Bootstrap 5.', 'Una identidad nueva para Canopia, un estudio boutique de diseño paisajístico y mantenimiento de espacios verdes en Buenos Aires: logo, manual de marca, un set de íconos para redes y un sitio web diseñado en Figma y construido en HTML, CSS y Bootstrap 5.'),
      tags: T('Identity · Brand manual · Web design and build', 'Identidad · Manual de marca · Diseño y desarrollo web'),
      cover: I('canopia-m-cover.jpg', 1600, 900, 'Canopia brand manual cover: the logo over a large green leaf'),
      facts: [
        [T('Client', 'Cliente'), T('Canopia · landscaping', 'Canopia · paisajismo')],
        [T('Studio', 'Estudio'), T('Frío Creativos')],
        [T('Year', 'Año'), T('Dec 2023 — Feb 2024', 'Dic 2023 — feb 2024')],
        [T('Role', 'Rol'), T('Identity · Manual · Icons · Web', 'Identidad · Manual · Íconos · Web')],
        [T('Tools', 'Herramientas'), T('Illustrator · Figma · HTML · CSS · Bootstrap 5')]
      ],
      link: { href: 'https://www.instagram.com/canopia.ok/', label: T('See Canopia on Instagram', 'Ver Canopia en Instagram') },
      sections: [
        { h: T('The brief', 'El encargo'),
          p: [T('In the first meeting I met Eri, a landscape designer. She wanted to renew the brand and expand it with a new criterion — a different personality and a higher quality. Her brief described a boutique studio that uses resources rationally for each species and believes in environmental re-education, for professionals and families in southern Greater Buenos Aires and the city. The personality they asked for: practical, innovative, reliable, charming and flexible.', 'En la primera reunión conocí a Eri, paisajista. Quería renovar la marca y ampliarla con un nuevo criterio — otra personalidad y otra calidad. Su brief describía un estudio boutique que usa los recursos de forma racional para cada especie y cree en la reeducación ambiental, para profesionales y familias del sur del conurbano y CABA. La personalidad que pedían: práctica, innovadora, confiable, encantadora y flexible.')],
          media: [I('canopia-previous.jpg', 1600, 1118, 'Previous Canopia logos in brush script with grass illustrations', T('The previous logos', 'Los logos anteriores'))] },
        { h: T('Three routes', 'Tres caminos'),
          p: [T('I designed three logo proposals and presented them already applied — on social media, clothing and vehicle graphics — so the decision could be made on real uses, not on a logo floating on white. Eri took part in every meeting and made the calls with us.', 'Diseñé tres propuestas de logo y las presenté ya aplicadas — en redes, indumentaria y ploteo vehicular — para decidir sobre usos reales y no sobre un logo flotando en blanco. Eri participó de cada reunión y tomó las decisiones con nosotros.')],
          quote: T('“We loved the logo and the mock-ups for social media, clothing and vehicle graphics. The logo has the lightness and freshness we needed — you gave the image a turn we hadn’t imagined.” — Eri, Canopia', '“Nos encantó el logo y las propuestas maquetadas de redes, indumentaria y ploteo. El logo representa esa liviandad y frescura que necesitábamos, lograste que le demos un giro a la imagen que nosotras no dimensionábamos.” — Eri, Canopia'),
          media: [I('canopia-proposal-logo-1.jpg', 1000, 1000, 'Logo proposal: wordmark with a leaf inside a circle', T('Route 1', 'Camino 1')), I('canopia-proposal-logo-2.jpg', 1000, 1000, 'Logo proposal: a bouquet of stems over the wordmark', T('Route 2', 'Camino 2')), I('canopia-proposal-logo-3.jpg', 1000, 1000, 'Logo proposal: wordmark next to a single-line sprig', T('Route 3 — chosen', 'Camino 3 — elegido'))] },
        { h: T('The mark', 'La marca'),
          p: [T('A single-line sprig with three seeds and a wide, calm wordmark. The line is thin on purpose: light, fresh, closer to a botanical drawing than to a gardening logo. Isotype and logotype work together or apart, on a grid of 25x by 8x with 1x of clear space.', 'Una rama de trazo único con tres semillas y un logotipo ancho y sereno. La línea es fina a propósito: liviana, fresca, más cerca de un dibujo botánico que de un logo de jardinería. Isotipo y logotipo funcionan juntos o separados, sobre una grilla de 25x por 8x con 1x de resguardo.')],
          media: [I('canopia-m-versions.jpg', 1600, 892, 'Canopia logo in black on white and white on black'), I('canopia-m-variants.jpg', 1600, 900, 'Isotype and logotype variants'), I('canopia-m-grid.jpg', 1600, 900, 'Logotype on its construction grid')] },
        { h: T('The system', 'El sistema'),
          p: [T('A 12-page manual: versions, safe area, contrast on four backgrounds, misuse, Comfortaa as the typeface and a six-colour palette — neutral black, off-white, sand, sage, and lime and lilac as accents taken from flowers and new shoots.', 'Un manual de 12 páginas: versiones, área segura, contraste sobre cuatro fondos, usos incorrectos, Comfortaa como tipografía y una paleta de seis colores — negro neutro, blanco roto, arena, salvia, y lima y lila como acentos tomados de flores y brotes nuevos.')],
          media: [I('canopia-m-contrast.jpg', 1600, 900, 'Logo on light, black, sage and sand backgrounds'), I('canopia-m-palette.jpg', 1600, 900, 'Six-colour palette'), I('canopia-m-misuse.jpg', 1600, 900, 'Incorrect uses of the logo')] },
        { h: T('Icons for social media', 'Íconos para redes'),
          p: [T('An icon set for Instagram highlights, drawn with the same thin line as the sprig: gloves, trowels, shears, a watering can, a sun hat, pots and seedlings — one per topic, so the profile reads as part of the brand. Eri uses them today on the real account (@canopia.ok) for Plants, Works, Gardening and Designs.', 'Un set de íconos para los destacados de Instagram, dibujados con la misma línea fina de la rama: guantes, palas, tijeras, una regadera, un sombrero, macetas y brotes — uno por tema, para que el perfil se lea como parte de la marca. Eri los usa hoy en la cuenta real (@canopia.ok) para Plantas, Obras, Jardinería y Diseños.')],
          media: [I('canopia-icons.jpg', 1600, 467, 'Fourteen line icons for Instagram highlights on grey'), I('canopia-m-social.jpg', 1600, 1509, 'The logo applied to the Instagram profile, highlights and grid')] },
        { h: T('Applied', 'Aplicada'),
          p: [T('The mark works at many levels: aprons and merchandise, vehicle graphics, frames for exhibitions.', 'La marca funciona en muchos niveles: delantales y merch, ploteo vehicular, cuadros para muestras.')],
          media: [I('canopia-m-applied.jpg', 1600, 725, 'The logo on an apron, framed prints and a vehicle')] },
        { h: T('The website', 'El sitio web'),
          p: [T('I designed the site in Figma as modular, working prototypes and explored several directions for the home page — from a gardener portrait to a split layout and a full-width leaf photo. Eri chose the full-width version. I then built it in HTML, CSS and Bootstrap 5; it is still in development.', 'Diseñé el sitio en Figma como prototipos modulares y funcionales, y exploré varias direcciones para la home — desde un retrato de jardinero hasta un layout partido y una foto de hojas a todo el ancho. Eri eligió la versión a todo el ancho. Después lo maqueté en HTML, CSS y Bootstrap 5; todavía está en desarrollo.')],
          media: [I('canopia-hero-full.jpg', 1600, 1040, 'Chosen home page: serif headline over full-width tropical leaves', T('Chosen direction', 'Dirección elegida')), I('canopia-hero-leaves.jpg', 1600, 1040, 'Split layout variant with dark leaves'), I('canopia-hero-pothos.jpg', 1600, 1040, 'Split layout variant with a pothos plant'), I('canopia-proposal-1.jpg', 1600, 1600, 'First landing proposal with a gardener holding a plant'), I('canopia-mobile.jpg', 827, 1600, 'Home page on mobile')] }
      ],
      result: {
        stats: [[T('2024 →'), T('brand in use — and still working together', 'marca en uso — y seguimos trabajando juntos')], [T('1,700+', '1.700+'), T('Instagram followers today, with the brand applied', 'seguidores en Instagram hoy, con la marca aplicada')], [T('3'), T('routes presented, one chosen in the first review', 'caminos presentados, uno elegido en la primera revisión')]],
        p: T('A solid answer and a brand that breathes. The logo holds up from merch and vehicle graphics to exhibitions, and Frío Creativos keeps designing new pieces for Canopia.', 'Una respuesta sólida y una marca que respira. El logo funciona desde el merch y el ploteo hasta las muestras, y en Frío Creativos seguimos diseñando piezas nuevas para Canopia.')
      }
    },

    {
      slug: 'visorix',
      client: 'Visorix',
      title: T('An identity for the people who build identities', 'Una identidad para quienes construyen identidades'),
      short: T('Visorix · Brand identity', 'Visorix · Identidad de marca'),
      summary: T('Identity, brand manual and website concept for Visorix, an audiovisual agency specialised in photography and film.', 'Identidad, manual de marca y concepto de sitio web para Visorix, una agencia audiovisual especializada en fotografía y video.'),
      tags: T('Identity · Brand manual · Web', 'Identidad · Manual de marca · Web'),
      cover: I('brand-visorix-cover.jpg', 1020, 640, 'Visorix brand manual cover'),
      facts: [
        [T('Client', 'Cliente'), T('Visorix')],
        [T('With', 'Con'), T('Frío Creativos')],
        [T('Year', 'Año'), T('2024')],
        [T('Role', 'Rol'), T('Logo · Manual · Web concept', 'Logo · Manual · Concepto web')],
        [T('Tools', 'Herramientas'), T('Figma')]
      ],
      link: { href: 'https://visorixstudio.com.ar/', label: T('Visit the live site', 'Ver el sitio publicado') },
      sections: [
        { h: T('The brief', 'El encargo'),
          p: [T('Visorix builds the identity of other brands through photography and film. First they needed their own — I developed it together with them.', 'Visorix construye la identidad de otras marcas con fotografía y video. Primero necesitaban la propia: la desarrollé junto con ellos.')] },
        { h: T('The mark', 'La marca'),
          p: [T('The logo started as a sketch by Jimena Villabona. I redrew it in vectors and built the whole mark in Figma: a camera-shaped wordmark whose X also works as favicon and avatar.', 'El logo nació de un croquis de Jimena Villabona. Lo pasé a vectores y construí toda la marca en Figma: un logotipo con forma de cámara cuya X también funciona como favicon y avatar.')],
          media: [I('visorix-grid.jpg', 627, 384, 'Visorix logo on its construction grid'), I('visorix-palette.jpg', 673, 354, 'Visorix colour palette')] },
        { h: T('The system', 'El sistema'),
          p: [T('BR Sonoma for its legibility and modern feel. A palette that reads professional but warm, led by Visorix Yellow — a nod to Jime’s joyful personality. A 15-page manual: voice, one-colour versions, proportion grid, misuse, contrast, safe margins, palette and merchandise. I also designed the website concept, carrying the brand into white and yellow.', 'BR Sonoma por su legibilidad y su modernidad. Una paleta profesional y cálida a la vez, encabezada por el Amarillo Visorix, un guiño a la alegría de Jime. Un manual de 15 páginas: tono de voz, versiones a un color, grilla de proporciones, usos incorrectos, contraste, márgenes, paleta y merchandising. También diseñé el concepto del sitio, que lleva la marca al blanco y amarillo.')],
          media: [I('brand-visorix-type.jpg', 1020, 640, 'Visorix typography page with BR Sonoma'), I('brand-visorix-applications.jpg', 1020, 640, 'Visorix logo on caps, hoodie and website')] }
      ],
      result: {
        stats: [[T('15'), T('page brand manual', 'páginas de manual')], [T('Active', 'Activa'), T('brand, still in use', 'la marca sigue en uso')]],
        p: T('Visorix and Frío Creativos now quote and coordinate client work together — including identities I designed for Imperio Drinks, Home Pádel and Margarita.', 'Visorix y Frío Creativos hoy presupuestan y coordinan trabajos en conjunto — entre ellos identidades que diseñé para Imperio Drinks, Home Pádel y Margarita.')
      }
    },

    {
      slug: 'monumental',
      client: T('Personal project', 'Proyecto personal'),
      title: T('Rebuilding memory', 'Reconstruir la memoria'),
      short: T('Estadio Monumental, 1990 · 3D print', 'Estadio Monumental, 1990 · Impresión 3D'),
      summary: T('River Plate’s stadium as it looked in one of its most glorious eras, rebuilt in Blender as a 3D-printable model. More than 100 copies sold.', 'El estadio de River Plate como era en una de sus épocas más gloriosas, reconstruido en Blender como modelo para imprimir en 3D. Más de 100 copias vendidas.'),
      tags: T('3D modelling · Research · 3D print', 'Modelado 3D · Investigación · Impresión 3D'),
      cover: I('monumental-wireframe.jpg', 1080, 1080, 'Wireframe views of the stands and the River scoreboard in Blender'),
      hero: I('monumental-hero-clay.jpg', 1600, 900, 'Clay render of the Monumental model on its base, lit from the side'),
      coverPos: '50% 18%',
      facts: [
        [T('Type', 'Tipo'), T('Personal project', 'Proyecto personal')],
        [T('Year', 'Año'), T('2024')],
        [T('Tools', 'Herramientas'), T('Blender')],
        [T('Print tests', 'Pruebas'), T('30+')],
        [T('Sales', 'Ventas'), T('100+ copies · Cults', '100+ copias · Cults')]
      ],
      sections: [
        { h: T('Why', 'Por qué'),
          p: [T('When River Plate changed its identity and renovated the stadium — removing the historic athletics track and painting it grey — I wanted to preserve the memory of the club I belong to: the Monumental of one of its most glorious eras, at the peak of the fans’ banners.', 'Cuando River cambió su identidad y renovó el estadio — sacaron la histórica pista de atletismo y lo pintaron de gris — quise resguardar la memoria del club del que soy socio: el Monumental de una de sus épocas más gloriosas, en el pico de los trapos.')],
          media: [V('monumental-turntable.mp4', 'monumental-turntable-poster.jpg', 1280, 720, 'Turntable render of the Monumental stadium model')] },
        { h: T('The archive', 'El archivo'),
          p: [T('The target was the stadium people remember: the Coca-Cola scoreboard, paper streamers and banners in the stands, the red and white seats before the renovation. Photos from the 1990s set the reference for every decision.', 'El objetivo era el estadio que la gente recuerda: el marcador de Coca-Cola, los papelitos y los trapos en las tribunas, las butacas rojas y blancas antes de la renovación. Las fotos de los años 90 fueron la referencia para cada decisión.')],
          media: [
            I('monumental-archive-aerial.jpg', 1300, 655, 'Aerial view of the Monumental in the 1990s with red and white stands', T('Archive photo', 'Foto de archivo')),
            I('monumental-archive-players.jpg', 720, 563, 'River players celebrating in front of the banners', T('Archive photo', 'Foto de archivo')),
            I('monumental-archive-scoreboard.jpg', 447, 447, 'The RIVER scoreboard over stands full of streamers', T('Archive photo', 'Foto de archivo')),
            I('monumental-archive-campeon.jpg', 549, 746, 'Scoreboard reading River Campeón over packed stands', T('Archive photo', 'Foto de archivo'))
          ] },
        { h: T('Research', 'Investigación'),
          p: [T('There is almost no archive online. I mapped historic satellite images and found some of the original plans by the architects José Aslan and Héctor Ezcurra, shared by the River museum and a club blog.', 'Casi no hay archivo en internet. Mapeé imágenes satelitales históricas y encontré algunos de los planos originales de los arquitectos José Aslan y Héctor Ezcurra, difundidos por el Museo River y un blog del club.')],
          media: [
            I('monumental-found-section.jpg', 467, 428, 'Original structural section of the main stand', T('Structural section of the main stand · Museo River', 'Corte estructural de la tribuna oficial · Museo River')),
            I('monumental-found-stands.jpg', 640, 479, 'Architectural section of the upper stands with levels', T('Section of the stands · archive', 'Corte de las tribunas · archivo')),
            I('monumental-found-site.jpg', 482, 414, 'Original site plan of the River Plate grounds', T('Site plan of the grounds · Museo River', 'Plano del predio · Museo River')),
            I('monumental-found-satellite.jpg', 1024, 736, 'Historic satellite image of the stadium with the athletics track', T('Historic satellite image', 'Imagen satelital histórica'))
          ] },
        { h: T('Redrawing', 'Redibujar'),
          p: [T('What the plans didn’t show came from photographs: counting and drawing column by column around the stadium, then laying the model over the plan to check every module.', 'Lo que los planos no mostraban salió de las fotos: contar y dibujar columna por columna alrededor del estadio, y después apoyar el modelo sobre el plano para verificar cada módulo.')],
          media: [I('monumental-plan.jpg', 828, 720, 'Top view of the stadium model over the architectural plan'), I('monumental-linework.jpg', 1080, 1080, 'Line drawing of the stands'), I('monumental-elevation.jpg', 1600, 900, 'Elevation drawing of the stadium on a grid')] },
        { h: T('Build', 'Construcción'),
          p: [T('Modelled module by module in Blender: the stands, the columns and cantilevers of the upper tier, the towers and the scoreboard, checked against the plans in front and side elevation.', 'Modelado módulo por módulo en Blender: las tribunas, las columnas y voladizos de la bandeja alta, las torres y el marcador, verificados contra los planos en alzado frontal y lateral.')],
          media: [
            I('monumental-wire-stands.jpg', 1080, 1080, 'Wireframe views of the stands with the red upper tier'),
            I('monumental-wire-columns.jpg', 1080, 1095, 'Wireframe of the columns and a side elevation'),
            I('monumental-wire-front.jpg', 1080, 1080, 'Front view and elevation of the main stand with the scoreboard'),
            I('monumental-wire-elevation.jpg', 1080, 1095, 'Elevation and perspective of the stadium with the goal end'),
            V('monumental-process.mp4', 'monumental-poster.jpg', 1280, 720, 'Process video: from first attempt to final renders', T('From first attempt to final render', 'Del primer intento al render final'))
          ] },
        { h: T('Texture and light', 'Textura y luz'),
          p: [T('Once the geometry held, came the colour of memory: red and white seats, the athletics track, the pitch, the advertising boards. Then lighting studies — day, dusk and the floodlights on at night.', 'Cuando la geometría estuvo firme, llegó el color de la memoria: butacas rojas y blancas, la pista de atletismo, el césped, la publicidad estática. Después, estudios de luz — de día, al atardecer y con los reflectores encendidos de noche.')],
          media: [
            I('monumental-textured.jpg', 1080, 1080, 'Textured model with red and white stands and the pitch'),
            I('monumental-top.jpg', 1080, 1080, 'Top view of the textured stadium with the athletics track'),
            I('monumental-light-night.jpg', 1080, 1080, 'Night lighting study of the model'),
            V('monumental-lighting.mp4', 'monumental-lighting-poster.jpg', 1080, 1080, 'Lighting studies of the stadium in coloured light')
          ] },
        { h: T('The old Autotrol', 'El viejo Autotrol'),
          p: [T('For decades the Monumental’s scoreboard was the Autotrol: a matrix of light bulbs with a clock and match time, framed by two Coca-Cola towers shaped like bottles. It spelled RIVER in orange dots above the stand and became part of the stadium’s face — until LED screens replaced it. Rebuilding it bulb by bulb was a way of bringing it back.', 'Durante décadas el marcador del Monumental fue el Autotrol: una matriz de lamparitas con reloj y tiempo de juego, entre dos torres de Coca-Cola con forma de botella. Escribía RIVER en puntos naranjas sobre la tribuna y se volvió parte de la cara del estadio — hasta que lo reemplazaron las pantallas LED. Reconstruirlo lamparita por lamparita fue una manera de traerlo de vuelta.')],
          media: [
            I('monumental-autotrol.jpg', 1600, 1098, 'The Autotrol scoreboard spelling RIVER above a stand full of flags and streamers', T('Archive photo', 'Foto de archivo')),
            I('monumental-detail.jpg', 1080, 1080, 'Close-up of the rebuilt scoreboard and stands', T('The rebuilt Autotrol', 'El Autotrol reconstruido'))
          ] },
        { h: T('The banners', 'Los trapos'),
          p: [T('The stadium people remember is also its banners — the historic trapos that hung from the stands: “Son los mejores” with the figures of the idols, “Delirio y Carnaval”, Budge, Pilar, “Ramón y Angelito”, “River Plate 77 asado y vino”, “River y nada más”. The flag simulations are a first step toward putting them back where they belong.', 'El estadio que la gente recuerda también son sus trapos — los históricos que colgaban de las tribunas: “Son los mejores” con las figuras de los ídolos, “Delirio y Carnaval”, Budge, Pilar, “Ramón y Angelito”, “River Plate 77 asado y vino”, “River y nada más”. Las simulaciones de banderas son un primer paso para volver a ponerlos donde van.')],
          media: [V('monumental-flags.mp4', 'monumental-flags-poster.jpg', 1000, 1000, 'Cloth simulation test of red and white flags on the stands')] },
        { h: T('The hard part', 'Lo difícil'),
          p: [T('Scale and print errors: more than 30 print tests and model corrections on Bambu Lab, Ender and Artillery Hornet printers.', 'La escala y los errores de impresión: más de 30 pruebas y correcciones del modelo con impresoras Bambu Lab, Ender y Artillery Hornet.')],
          media: [I('monumental-night.jpg', 1080, 1080, 'Stadium render at night with lit stands'), I('monumental-render-final.jpg', 1240, 800, 'Final render of the stadium in red and white')] }
      ],
      result: {
        stats: [[T('100+'), T('copies sold on Cults', 'copias vendidas en Cults')], [T('30+'), T('print tests', 'pruebas de impresión')]],
        p: T('A personal project that became a product: published on Cults, where it keeps selling.', 'Un proyecto personal que se volvió producto: publicado en Cults, donde se sigue vendiendo.')
      }
    },

    {
      slug: 'material-rodante',
      client: T('Personal project · Entornos Educativos', 'Proyecto personal · Entornos Educativos'),
      title: T('Argentine trains: from a graffiti game to a sales tool', 'Trenes argentinos: de un juego de graffiti a una herramienta comercial'),
      short: T('Rolling stock · Game, 3D and course', 'Material rodante · Juego, 3D y curso'),
      summary: T('A universe of Argentine trains I have been building since 2021: it began as a graffiti video game with the FUA Belenes crew, grew into modelled and illustrated rolling stock, and part of its visual language became Stations of Argentina, a course that Entornos Educativos uses to sell to multinational companies.', 'Un universo de trenes argentinos que construyo desde 2021: empezó como un videojuego de graffiti con la crew FUA Belenes, creció en material rodante modelado e ilustrado, y parte de su lenguaje visual se volvió Stations of Argentina, un curso que Entornos Educativos usa para vender a empresas multinacionales.'),
      tags: T('Game concept · 3D · Learning experience', 'Concepto de juego · 3D · Experiencia de aprendizaje'),
      cover: I('stations-illustration.jpg', 859, 462, 'Illustrated platform with a blue train, entry screen of the course'),
      facts: [
        [T('Period', 'Período'), T('2021 — now', '2021 — hoy')],
        [T('Role', 'Rol'), T('Concept · Characters · Rolling stock · Visual language', 'Concepto · Personajes · Material rodante · Lenguaje visual')],
        [T('With', 'Con'), T('FUA Belenes crew · Cristiam Trujillo (Entornos)')],
        [T('Tools', 'Herramientas'), T('Blender · Figma · HTML · Python')],
        [T('Status', 'Estado'), T('Game in development', 'Juego en desarrollo')]
      ],
      sections: [
        { h: T('A graffiti game', 'Un juego de graffiti'),
          p: [T('It started in 2021 with the FUA Belenes crew: a video game about a graffiti writer whose mission is to paint trains — a tribute to Argentine graffiti, with real spots and purely Argentine trains. In the first level you sneak into the Haedo workshop and paint while dodging the guards.', 'Empezó en 2021 con la crew FUA Belenes: un videojuego sobre un escritor de graffiti cuya misión es pintar trenes — un homenaje al graffiti argentino, con spots reales y trenes puramente argentinos. En el primer nivel te metés en el taller de Haedo y pintás esquivando a los guardias.'),
             T('I tried several HTML and Python frameworks. The first prototype got a character moving across a surface and colliding with the trains. Painting was still far away, but a character interacting with the trains was the start of everything that followed.', 'Probé varios frameworks de HTML y Python. El primer prototipo logró un personaje que se desplaza por una superficie y colisiona con los trenes. Pintar quedaba lejos todavía, pero un personaje interactuando con los trenes fue el comienzo de todo lo que vino después.')] },
        { h: T('Research', 'Investigación'),
          p: [T('Clinical observation of trains in service, routes and workshops — and the history of Argentine graffiti, with writers such as Porno14, Fideos con Salsa, Hartos del Arte, Limón LHC and Soketes Crew as references.', 'Observación clínica de los trenes en funcionamiento, recorridos y talleres — y la historia del graffiti argentino, con escritores como Porno14, Fideos con Salsa, Hartos del Arte, Limón LHC y Soketes Crew como referencia.')] },
        { h: T('Trains for the game', 'Los trenes del juego'),
          p: [T('Low-poly studies in Blender for the game: a Belgrano Norte carriage based on the Materfer units, and the Toshiba of the Urquiza line — already tagged, because in the game the trains are the canvas. Modelled simple on purpose, so they could run in real time.', 'Estudios low-poly en Blender para el juego: un vagón del Belgrano Norte basado en los Materfer y el Toshiba del Urquiza — ya pintado, porque en el juego los trenes son el lienzo. Modelados simples a propósito, para que pudieran correr en tiempo real.')],
          media: [
            I('game-toshiba-graffiti.jpg', 933, 572, 'Blender capture: yellow Toshiba carriage of the Urquiza line with a graffiti piece', T('Toshiba · Urquiza line, with a piece', 'Toshiba · línea Urquiza, con una pieza')),
            I('game-materfer-render.jpg', 885, 586, 'Red low-poly Belgrano Norte carriage based on the Materfer units', T('Materfer · Belgrano Norte', 'Materfer · Belgrano Norte')),
            I('game-materfer-front.jpg', 917, 619, 'Front of the red carriage with red and white chevrons over a wet floor'),
            I('game-materfer-door.jpg', 1313, 682, 'Close-up of the carriage doors and windows in Blender'),
            I('game-materfer-noise.jpg', 632, 589, 'Early noisy render of the red carriage'),
            I('lab-wagon.jpg', 1152, 527, 'Low-poly 3D model of a red Belgrano Norte wagon')
          ] },
        { h: T('Rolling stock', 'Material rodante'),
          p: [T('Modelled and illustrated one by one: the CSR units running on the Sarmiento today, the Fiat Materfer 3170 (“La Canchita”), the General Motors EMD GR12W locomotive and RENFE’s Series 319 — plus replicas of the Japanese Toshiba units for the Urquiza line.', 'Modelado e ilustrado uno por uno: los CSR que hoy circulan en el Sarmiento, el Fiat Materfer 3170 (“La Canchita”), la locomotora General Motors EMD GR12W y la Serie 319 de RENFE — además de réplicas de los Toshiba japoneses para el Urquiza.')],
          media: [I('stations-strip.jpg', 1285, 198, 'Side view of a rendered blue train'), I('stations-blueprint.jpg', 1264, 200, 'Line drawing of a passenger train used as reference')] },
        { h: T('Stations of Argentina', 'Stations of Argentina'),
          p: [T('In 2022 I joined the content team at Entornos Educativos, which was developing SCORM and wanted an interactive journey for Moodle users. We brought the idea together into a commercial MVP: a character presenting multimedia elements at different stations — one branch based on Argentina’s geography, another on Latin America.', 'En 2022 entré al área de contenidos de Entornos Educativos, que estaba desarrollando SCORM y buscaba un recorrido interactivo para los usuarios de Moodle. Unificamos la idea en un MVP comercial: un personaje que presenta elementos multimedia en distintas estaciones — un ramal basado en la geografía de Argentina y otro en Latinoamérica.'),
             T('The navigation is a parody of Argentine train design. The look started in vectors and turned into collage, built from cut-outs of my own photographs.', 'La navegación es una parodia del diseño de los trenes argentinos. El lenguaje empezó en vectores y mutó a collage, con recortes de fotografías propias.')],
          media: [I('stations-collage.jpg', 957, 465, 'Collage of a blue train crossing an urban landscape')] },
        { h: T('Build and use', 'Desarrollo y uso'),
          p: [T('Working with Cristiam Trujillo, Entornos’ developer, pushed the product much further. Today Entornos uses it as a sales tool for multinational companies, with many multilingual variants, in sales meetings and conferences.', 'El trabajo con Cristiam Trujillo, el desarrollador de Entornos, potenció mucho el producto. Hoy Entornos lo usa como herramienta comercial para vender a empresas multinacionales, con muchas variantes multilenguaje, en reuniones comerciales y conferencias.')] },
        { h: T('Papercraft', 'Papercraft'),
          p: [T('The same trains, made to be built: a series of cardboard models to cut and assemble as a playful activity.', 'Los mismos trenes, hechos para armar: una serie de modelos en cartón para recortar y armar como actividad lúdica.')],
          media: [I('papercraft-sarmiento.jpg', 1400, 990, 'Papercraft template of a blue Sarmiento train with FUA Belen Crew graphics'), I('papercraft-belgrano.jpg', 1400, 502, 'Papercraft template of a yellow train with red and white chevrons')] }
      ],
      result: {
        stats: [[T('2021'), T('first playable prototype', 'primer prototipo jugable')], [T('Multilingual', 'Multilenguaje'), T('variants of the course in commercial use', 'variantes del curso en uso comercial')]],
        p: T('The graffiti game is still in development. Renders and infographics of the rolling stock are on the way.', 'El juego de graffiti sigue en desarrollo. Pronto, renders e infografías del material rodante.')
      }
    },

    {
      slug: 'felix',
      client: T('Personal identity', 'Identidad personal'),
      title: T('A seal for a proper name', 'Un sello para un nombre propio'),
      short: T('FELIX · Identity manual', 'FELIX · Manual de identidad'),
      summary: T('My personal identity: a circular monogram rooted in the industrial Buenos Aires of 1910–1940, and the first chapter of its manual. This site is its first application.', 'Mi identidad personal: un monograma circular con raíces en la Buenos Aires industrial de 1910–1940, y el primer capítulo de su manual. Este sitio es su primera aplicación.'),
      tags: T('Identity · Research · Brand manual', 'Identidad · Investigación · Manual de marca'),
      cover: I('felix-id-cover.jpg', 1600, 900, 'FELIX identity manual cover with the green circular monogram'),
      facts: [
        [T('Type', 'Tipo'), T('Personal project', 'Proyecto personal')],
        [T('Year', 'Año'), T('2026')],
        [T('Role', 'Rol'), T('Identity · Research · Manual', 'Identidad · Investigación · Manual')],
        [T('Output', 'Entrega'), T('Chapter I · 18 pages', 'Capítulo I · 18 páginas')]
      ],
      sections: [
        { h: T('Composition', 'Composición'),
          p: [T('A closed ring holds five single-stroke letters, stretched vertically until they touch an inner circle. The circle, not a type size, sets each letter’s height: E, L and I reach the maximum; F and X shorten and curve to follow the perimeter. It reads as a word and works as a seal.', 'Un anillo cerrado contiene cinco letras de trazo único, estiradas en vertical hasta tocar un círculo interior. La altura de cada letra la fija el círculo, no un cuerpo tipográfico: E, L e I llegan al máximo; F y X se acortan y se curvan para seguir el perímetro. Se lee como palabra y funciona como sello.')],
          media: [I('felix-id-anatomy.jpg', 1600, 900, 'Numbered anatomy of the FELIX monogram')] },
        { h: T('Measured in s', 'Medido en s'),
          p: [T('Everything is measured in s, the stroke width: 25s outer diameter, 23s inner, a 21s circle for the letters, rounded ends of 0.5s. Two axes, one grid, six steps to draw it.', 'Todo se mide en s, el espesor del trazo: 25s de diámetro exterior, 23s interior, un círculo de 21s para las letras, remates redondeados de 0,5s. Dos ejes, una grilla, seis pasos para trazarlo.')],
          media: [I('felix-id-grid.jpg', 1600, 900, 'Geometric construction of the monogram on a grid of module s')] },
        { h: T('Roots', 'Raíces'),
          p: [T('Between 1910 and 1940 Buenos Aires modernised — subways, state oil, technical standards, mass clubs — and every institution needed a mark that could be stamped, engraved, enamelled and cast. FELIX takes the rhythm of the La Brugeoise subway carriages, the green of the newspaper kiosks, and the rule shared by the seals of YPF, River Plate and IRAM: letters are not written inside the circle, they stretch to fill it.', 'Entre 1910 y 1940 Buenos Aires se modernizó — subtes, petróleo estatal, normas técnicas, clubes de masas — y cada institución necesitó una marca que se pudiera estampar, grabar, esmaltar y fundir. FELIX toma el ritmo de los coches La Brugeoise del subte, el verde de los puestos de diarios y la regla que comparten los sellos de YPF, River Plate e IRAM: las letras no se escriben dentro del círculo, se estiran hasta ocuparlo.')],
          media: [
            I('felix-id-origin.jpg', 1600, 900, 'Timeline of Buenos Aires from 1913 to 1935'),
            I('felix-id-brugeoise.jpg', 1600, 900, 'Schematic elevation of a La Brugeoise subway carriage'),
            I('felix-id-seals.jpg', 1600, 900, 'YPF, CARP and IRAM circular seals next to FELIX')
          ] },
        { h: T('Colour', 'Color'),
          p: [T('Newsstand green as the primary colour, with the monogram in pearl grey on top. Industrial mechanical grey, white and black complete the palette — the same one this site uses.', 'Verde puesto de diarios como color primario, con el monograma en gris perla encima. Gris mecánico industrial, blanco y negro completan la paleta — la misma que usa este sitio.')],
          media: [I('felix-id-colour.jpg', 1600, 900, 'Newsstand green as the primary colour'), I('felix-id-moodboard.jpg', 1600, 900, 'Historical moodboard with a map, a carriage and newspaper kiosks')] },
        { h: T('The newspaper kiosk', 'El puesto de diarios'),
          p: [T('The green kiosk is the heart of the identity — and of Gráfico, the album I am making for my music project Félix Fua, also built around a newspaper kiosk. Hand-painted signs in yellow over red, stacked magazines, layers of tags.', 'El puesto verde es el corazón de la identidad — y de Gráfico, el álbum que estoy haciendo para mi proyecto musical Félix Fua, también construido alrededor de un puesto de diarios. Carteles pintados a mano en amarillo sobre rojo, revistas apiladas, capas de firmas.')],
          media: [I('grafico-kiosk-cover.jpg', 1181, 1181, 'Gráfico: a green newspaper kiosk covered in magazines'), V('kiosk-cronista.mp4', 'kiosk-cronista-poster.jpg', 720, 1280, 'A painted kiosk with FUA graffiti turning around'), I('texture-diarios.jpg', 900, 1600, 'Red kiosk with hand-painted yellow letters reading Diarios Nacionales'), I('texture-revistas.jpg', 900, 1600, 'Red kiosk wall with the word Revistas under layers of tags')] },
        { h: T('Textures', 'Texturas'),
          p: [T('Photographs from the street used as texture: green walls with tags, torn posters, grey kiosk doors filled with signatures, Moreno at midday.', 'Fotos de la calle usadas como textura: paredes verdes con firmas, afiches arrancados, puertas grises de kiosco llenas de tags, Moreno al mediodía.')],
          media: [I('texture-torn-poster.jpg', 1600, 882, 'Torn light-blue poster over a green wall with white spray paint'), I('felix-fua-moreno.jpg', 1309, 737, 'A young man in a cap in a busy Moreno street'), I('texture-green-tags.jpg', 900, 1600, 'Green wall covered in white and lilac tags'), I('texture-grey-doors.jpg', 900, 1600, 'Grey kiosk doors covered in graffiti tags')] },
        { h: T('Retro references', 'Referencias retro'),
          p: [T('The collectible model cars sold at kiosks — Fiat 127, Ford Sierra, Renault 12 — are part of the retro aesthetic I want: worn plastic, the flag behind the car, a numbered issue.', 'Los autos de colección que se venden en los kioscos — Fiat 127, Ford Sierra, Renault 12 — son parte de la estética retro que busco: plástico gastado, la bandera detrás del auto, un número de colección.')],
          media: [I('autos-fiat-127.jpg', 1055, 1407, 'Collectible Fiat 127 model in its blister pack (reference)'), I('autos-ford-sierra.jpg', 1122, 1402, 'Collectible Ford Sierra TC2000 model in its blister pack (reference)'), I('autos-renault-12.jpg', 1123, 1401, 'Collectible Renault 12 TL model in its blister pack (reference)')] },
        { h: T('Applied here', 'Aplicado acá'),
          p: [T('This portfolio is the first application: the green, the grey scale, the running headers and the numbered sections come straight from the manual. The manual also records the directions given to an image generator for its plates. Its experimental sibling, Brugeoise, is in the archive.', 'Este portfolio es la primera aplicación: el verde, la escala de grises, los encabezados y las secciones numeradas salen del manual. El manual también registra las indicaciones dadas a un generador de imágenes para sus láminas. Su hermano experimental, Brugeoise, está en el archivo.')] }
      ],
      result: {
        stats: [[T('1s'), T('one module draws everything', 'un módulo dibuja todo')], [T('18'), T('pages · chapter I', 'páginas · capítulo I')]],
        p: T('Chapter II — system and applications — is in progress.', 'El capítulo II — sistema y aplicaciones — está en proceso.')
      }
    }
  ];

  /* -------------------------------------------------------------- ARCHIVO */
  FELIX.categories = [
    ['brand', T('Brand', 'Marca')],
    ['web', T('Web & learning', 'Web y e-learning')],
    ['motion', T('Motion & 3D', 'Animación y 3D')],
    ['art', T('Illustration & photo', 'Ilustración y foto')]
  ];

  FELIX.archive = [
    { id: 'touche', cat: 'brand', title: T('Touché · June campaign', 'Touché · campaña de junio'), tag: T('Campaign · Social · Web banners', 'Campaña · Redes · Banners web'),
      text: T('A visual proposal for the June campaign of Touché, a sportswear brand: Instagram stories and banners for the web landing. A thin, oversized month name over the product photo, short uppercase lines at the corners, and one colour per collection — pink for Home Run, sand for the sale.', 'Una propuesta visual para la campaña de junio de Touché, una marca de ropa deportiva: historias de Instagram y banners para la landing web. El mes en tipografía fina y gigante sobre la foto de producto, textos cortos en mayúsculas en las esquinas y un color por colección — rosa para Home Run, arena para la sale.'),
      media: [I('touche-cover.jpg', 1295, 1000, 'Model in a navy set doing a stretch, with Home Run Slim Fit text'), I('touche-banner-sale.jpg', 1600, 800, 'Web banner: T.S Active sale next to a model in a navy set'), I('touche-stories.jpg', 887, 530, 'Three Instagram stories for the June campaign'), I('touche-story-3.jpg', 900, 1600, 'Story with JUNIO in thin letters over a model in a sand set'), I('touche-story-1.jpg', 900, 1600, 'Story with a question sticker and a seated model'), I('touche-web-banners.jpg', 560, 580, 'Two web banner frames for the campaign')] },
    { id: 'duenos-ilusion', cat: 'brand', year: '2024', title: T('Los Dueños de la Ilusión · murga', 'Los Dueños de la Ilusión · murga'), tag: T('Logo · Character · Merch · Brand manual', 'Logo · Personaje · Merch · Manual de marca'),
      text: T('A murga from Barrio San Carlos in Moreno, born at the Néstor Paz cultural centre in 2024 as the successor of Los Revoltosos de Moreno — more than 200 people on the street. I designed the logo (the name stretched to fill a bass drum, the same rule as the YPF, River Plate and San Lorenzo seals I studied for FELIX), La Percu, the character of the percussion section, and the T-shirts — in red, yellow and black, taken from porteño murga costumes. Presentations at Club La Esperanza, the San Carlos Murga Festival, School No. 64 and Kindergarten No. 923.', 'Una murga del barrio San Carlos de Moreno, nacida en 2024 en el Centro Cultural Néstor Paz como sucesora de Los Revoltosos de Moreno — más de 200 personas en la calle. Diseñé el logo (el nombre estirado hasta llenar un bombo, la misma regla de los sellos de YPF, River y San Lorenzo que estudié para FELIX), La Percu, el personaje de la percusión, y las remeras — en rojo, amarillo y negro, tomados de la vestimenta de las murgas porteñas. Presentaciones en el Club La Esperanza, el Festival Murguero de San Carlos, la Escuela 64 y el Jardín 923.'),
      media: [I('murga-m08.jpg', 1600, 900, 'La Percu character: hat, joyful face and drum'), I('murga-m01.jpg', 1600, 900, 'Manual cover: logo on yellow'), I('murga-m02.jpg', 1600, 900, 'The neighbourhood: San Carlos, Moreno'), I('murga-m03.jpg', 1600, 900, 'The heritage: Los Revoltosos de Moreno and porteño murgas'), I('murga-m04.jpg', 1600, 900, 'Logo analysis grid'), I('murga-m05.jpg', 1600, 900, 'One-colour logo versions on white, black, yellow and red'), I('murga-m06.jpg', 1600, 900, 'Same rule as YPF, CARP and IRAM seals'), I('murga-m07.jpg', 1600, 900, 'Colour: red, yellow and black'), I('murga-m09.jpg', 1600, 900, 'Textures in yellow and black'), I('murga-m10.jpg', 1600, 900, 'T-shirt applications'), I('murga-m11.jpg', 1600, 900, 'On the street: 200+ people and the presentations'), I('murga-m12.jpg', 1600, 900, 'Closing page: logo on red')] },
    { id: 'imperio', cat: 'brand', title: T('Imperio Drinks'), tag: T('Logo · Posters · Social', 'Logo · Afiches · Redes'),
      text: T('A condensed, bar-sign wordmark with a bottle hidden in the “I”. Dark grey and red, gradients reserved for posters and events, and a ready-to-use Instagram system.', 'Un logotipo condensado, de cartel de bar, con una botella escondida en la “I”. Gris oscuro y rojo, degradés reservados para afiches y eventos, y un sistema listo para Instagram.'),
      media: [I('brand-imperio-cover.jpg', 1334, 750, 'Imperio Drinks manual cover in a dark bar'), I('brand-imperio-logo.jpg', 1600, 900, 'Imperio Drinks logotype on its proportion grid'), I('brand-imperio-posters.jpg', 1334, 750, 'Event posters using Imperio gradients'), I('brand-imperio-social.jpg', 1334, 750, 'Imperio Instagram profile mockup')] },
    { id: 'margarita', cat: 'brand', title: T('Margarita'), tag: T('Logo · Palette · Applications', 'Logo · Paleta · Aplicaciones'),
      text: T('Fork and daisy in one mark for a healthy meal-delivery business. The palette comes from the pigments of different daisy species, with a monochrome scale for the kitchen.', 'Tenedor y margarita en una sola marca para un servicio de viandas saludables. La paleta sale de los pigmentos de distintas especies de margarita, con una escala monocroma para la cocina.'),
      media: [I('margarita-palette.jpg', 1600, 1200, 'Palette taken from daisy pigments, with a monochrome scale'), I('brand-margarita-cover.jpg', 1024, 768, 'Margarita manual cover over meal containers'), I('margarita-logo.jpg', 1600, 1200, 'Margarita logo with a daisy moodboard'), I('margarita-grid.jpg', 1600, 1200, 'Horizontal logo and isotype on a grid'), I('margarita-variants.jpg', 1600, 1200, 'Dark, white and full-colour isotype variants'), I('margarita-type.jpg', 1600, 1200, 'Typography page: Font Awesome 6 Brands and TikTok Sans'), I('brand-margarita-0.jpg', 1024, 768, 'Staff wearing aprons with the Margarita logo'), I('margarita-paper.jpg', 1600, 1200, 'Kraft notebook with the Margarita logo next to a plate of pasta'), I('margarita-figure.jpg', 1600, 1200, 'Colour pairs for figure and background'), I('brand-margarita-3.jpg', 1024, 768, 'Margarita isotype on six colour backgrounds')] },
    { id: 'fua-belenes', cat: 'brand', year: '2020', title: T('FUA Belenes'), tag: T('Lettering · Pattern · Merch', 'Lettering · Patrón · Merch'),
      text: T('Identity, patterns and merchandise for an art and graffiti collective — where my practice started.', 'Identidad, patrones y merchandising para un colectivo de arte y graffiti — donde empezó mi práctica.'),
      media: [I('lab-fua-tshirt.jpg', 1400, 934, 'T-shirt and stationery with FUA Belenes graphics'), I('lab-fua-pattern.jpg', 803, 760, 'Purple pattern of hand-drawn faces'), I('lab-fua-logo.jpg', 494, 353, 'FUA lettering in white on black')] },

    { id: 'gamified', cat: 'web', title: T('Retro-futuristic gamified course', 'Curso gamificado retrofuturista'), tag: T('E-learning · 3D · AI', 'E-learning · 3D · IA'),
      text: T('A training on gamification built with graphic design, 3D modelling and AI tools: a responsive interactive prototype for desktop, tablet and mobile.', 'Una capacitación sobre gamificación hecha con diseño gráfico, modelado 3D y herramientas de IA: un prototipo interactivo responsive para escritorio, tablet y celular.'),
      media: [I('gamified-presenter.jpg', 1600, 900, 'Course screen with a 3D presenter explaining gamification'), I('gamified-course.jpg', 960, 540, 'Course screen introducing gamification'), I('gamified-screen.jpg', 960, 540, 'Course screen comparing gamification and video games'), I('gamified-wireframe.jpg', 992, 1064, 'Wireframe of the course screens')] },
    { id: 'demo-sites', cat: 'web', title: T('Modular demo sites', 'Sitios demo modulares'), tag: T('Design + code', 'Diseño + código'),
      text: T('A family of ready-to-adapt websites that cut implementation time for small businesses.', 'Una familia de sitios listos para adaptar que acortan los tiempos de implementación para pymes.'),
      link: { href: 'https://frio-demo-store.netlify.app/', label: T('Live demo store', 'Tienda demo online') },
      media: [I('modular-store.jpg', 601, 569, 'Demo online store'), I('modular-hanami.jpg', 600, 548, 'Hanami demo website with a goldfish'), I('modular-week.jpg', 581, 554, 'Demo website with a weekly menu')] },
    { id: 'wota', cat: 'web', title: T('WOTA'), tag: T('Web repository · Design + code', 'Repositorio web · Diseño + código'),
      text: T('A digital repository for Renaissance art.', 'Un repositorio digital de arte renacentista.'),
      media: [I('wota-laptop.jpg', 900, 675, 'WOTA art repository on a laptop'), I('wota-page.jpg', 990, 1400, 'WOTA repository page')] },
    { id: 'brugeoise', cat: 'web', year: '2026', title: T('Brugeoise · experimental portfolio', 'Brugeoise · portfolio experimental'), tag: T('Concept · Interface · Code', 'Concepto · Interfaz · Código'),
      text: T('An experimental version of this portfolio: a fictional multimedia terminal named after the La Brugeoise carriages of Line A (1913), with a skippable boot, a core map for projects and a time-zone radar for contact. Bilingual, keyboard-navigable, with a handheld version for phones.', 'Una versión experimental de este portfolio: una terminal multimedia ficticia con el nombre de los coches La Brugeoise de la línea A (1913), con un arranque salteable, un mapa de núcleo para los proyectos y un radar de husos horarios para el contacto. Bilingüe, navegable con teclado y con versión para celular.'),
      media: [I('brugeoise-home.jpg', 1600, 1000, 'Main console with the section menu'), I('brugeoise-boot.jpg', 1600, 1000, 'Boot screen with the ASCII diagnostic trace'), I('brugeoise-work.jpg', 1600, 1000, 'Work section with the core map'), I('brugeoise-contact.jpg', 1600, 1000, 'Contact section with the time-zone radar'), I('brugeoise-mobile.jpg', 780, 1688, 'Phone version of the terminal')] },

    { id: 'paul-laureano', cat: 'motion', year: '2026', title: T('Paul Laureano · live visuals', 'Paul Laureano · visuales en vivo'), tag: T('LED wall · Collage · Animation', 'Pantalla LED · Collage · Animación'),
      text: T('Collage visuals for his set at Festival Urbano de Moreno 2026 — Sarmiento trains, conurbano buildings and street signs running across the LED wall — plus an animated stage mock-up before the show.', 'Visuales en collage para su show en el Festival Urbano de Moreno 2026 — trenes del Sarmiento, edificios del conurbano y carteles recorriendo la pantalla LED — y una maqueta animada del escenario antes del show.'),
      media: [V('sir-paul-stage.mp4', 'paul-stage-cover.jpg', 1280, 720, 'Animated stage mock-up with the visuals on the LED wall'), I('fu26-paul-laureano-trains.jpg', 1400, 930, 'Paul Laureano on stage in front of an LED wall of animated trains'), V('paul-laureano-visuals.mp4', 'paul-laureano-visuals-poster.jpg', 432, 864, 'Loop of the collage visuals')] },
    { id: 'felix-fua', cat: 'motion', title: T('Félix Fua · visualizers', 'Félix Fua · visualizers'), tag: T('Collage · 3D · AI video', 'Collage · 3D · Video con IA'),
      text: T('Moving collages for my music project: the 501 bus to Moreno under the lyrics, a station under an orange sky, a newspaper kiosk turning in 3D, and Renaissance figures riding a La Brugeoise carriage for Plaza Infierno.', 'Collages en movimiento para mi proyecto musical: el 501 a Moreno bajo las letras, una estación bajo un cielo naranja, un kiosco de diarios girando en 3D y figuras renacentistas viajando en un coche La Brugeoise para Plaza Infierno.'),
      media: [V('felix-fua-estacion.mp4', 'felix-fua-estacion-poster.jpg', 1026, 1080, 'Collage of a train station under an orange sky'), V('plaza-infierno.mp4', 'plaza-infierno-poster.jpg', 1280, 854, 'Renaissance figures inside a subway carriage, animated collage'), V('felix-fua-501.mp4', 'felix-fua-501-poster.jpg', 720, 1280, 'The 501 bus to Moreno with lyrics as subtitles'), V('grafico-kiosk.mp4', 'grafico-kiosk-poster.jpg', 630, 1280, 'Green newspaper kiosk rotating 360 degrees'), V('hotel-kiss-me.mp4', 'hotel-kiss-me-poster.jpg', 640, 528, 'Hotel Kiss Me neon sign under a painted sky'), V('felix-fua-banner.mp4', 'felix-fua-banner-poster.jpg', 1600, 450, 'Wide animated collage banner with people on a platform')] },
    { id: 'ford-sierra', cat: 'motion', year: '2026', title: T('Ford Sierra · Gráfico'), tag: T('Animation · AI video', 'Animación · Video con IA'),
      text: T('A model car driving through Moreno streets — the motoring section of Gráfico, a set of fictional period magazines — plus AI-generated studio shots.', 'Un auto a escala recorriendo calles de Moreno — la sección de autos de Gráfico, un conjunto de revistas de época ficticias — y tomas de estudio generadas con IA.'),
      media: [I('ford-sierra-xr4.jpg', 643, 642, 'Gráfico page: a silver Ford Sierra XR4 in a period-style ad with song lyrics and the FELIX seal'), V('ford-sierra.mp4', 'ford-sierra-poster.jpg', 1280, 720, 'A model Ford Sierra driving through Moreno streets'), V('sierra-texaco.mp4', 'sierra-texaco-poster.jpg', 496, 864, 'Ford Sierra RS in Texaco livery rotating in a studio'), V('sierra-blue.mp4', 'sierra-blue-poster.jpg', 722, 1280, 'Metallic blue Ford Sierra in a dark studio')] },
    { id: 'covers', cat: 'motion', title: T('Animated covers', 'Portadas animadas'), tag: T('Music · Animation', 'Música · Animación'),
      text: T('Covers that move: Del 2000 for Mau M4 (2020) and an animated painting for the 20th anniversary of Okupas (2021).', 'Portadas que se mueven: Del 2000 para Mau M4 (2020) y una pintura animada por los 20 años de Okupas (2021).'),
      media: [V('mau-m4-del-2000.mp4', 'mau-m4-del-2000-poster.jpg', 1080, 1080, 'Animated cover: a painted street with an old car'), V('okupas-20.mp4', 'okupas-20-poster.jpg', 640, 374, 'Animated painting of four friends inside a train carriage')] },
    { id: 'belgrano-wagon', cat: 'motion', year: '2021', title: T('Belgrano Norte wagon', 'Vagón Belgrano Norte'), tag: T('Blender · Low-poly', 'Blender · Low-poly'),
      text: T('A low-poly red wagon of the Belgrano Norte, the line that starts at Retiro. One of my first Blender models.', 'Un vagón rojo low-poly del Belgrano Norte, la línea que sale de Retiro. Uno de mis primeros modelos en Blender.'),
      media: [I('lab-wagon.jpg', 1152, 527, 'Low-poly 3D model of a red Belgrano Norte wagon')] },

    { id: 'sol-negro', cat: 'art', year: '2020', title: T('Sol Negro'), tag: T('Illustrated book · Text + illustration', 'Libro ilustrado · Texto + ilustración'),
      text: T('A short, dark illustrated book about the “black sun”: the humanly impossible, doubt, and the thing that attracts and destroys at once. Written and illustrated by me.', 'Un libro ilustrado breve y oscuro sobre el “sol negro”: lo humanamente imposible, la duda y lo que atrae y destruye a la vez. Escrito e ilustrado por mí.'),
      media: [I('book-sol-negro-cover.jpg', 726, 1000, 'Cover of Sol Negro: an ink drawing of a dog on a chair'), I('book-sol-negro-hare.jpg', 528, 1000, 'Pen drawing of a hare'), I('book-sol-negro-bus.jpg', 630, 923, 'Pen drawing of an old city bus'), I('book-sol-negro-skull.jpg', 710, 956, 'Crosshatched drawing of a bald head')] },
    { id: 'paintings', cat: 'art', title: T('Carriages', 'Vagones'), tag: T('Painting · Watercolour', 'Pintura · Acuarela'),
      text: T('The line, painted: worn empty seats, watercolours of a bus and a station, and Tren al Sur for the 20th anniversary of Okupas.', 'La línea, pintada: asientos gastados y vacíos, acuarelas de un colectivo y una estación, y Tren al Sur por los 20 años de Okupas.'),
      media: [I('lab-seats-painting.jpg', 522, 720, 'Painting of worn empty train seats'), I('watercolour-line.jpg', 715, 504, 'Watercolours of a bus and a train station'), I('lab-train-painting.jpg', 640, 373, 'Painting of four young men inside a train carriage')] },
    { id: 'line-01', cat: 'art', title: T('Line 01 · Sarmiento', 'Línea 01 · Sarmiento'), tag: T('Photography · 2009 — 2026', 'Fotografía · 2009 — 2026'),
      text: T('The line I have ridden all my life. Moreno is the end of the Sarmiento; Retiro is where the Belgrano Norte starts. Photographs from a 2009 compact camera to a phone.', 'La línea que viajé toda mi vida. Moreno es el final del Sarmiento; en Retiro empieza el Belgrano Norte. Fotos desde una cámara compacta de 2009 hasta un celular.'),
      media: [I('train-moreno-station.jpg', 1400, 788, 'Moreno station platform with a blue Sarmiento train'), I('train-moreno-night.jpg', 689, 1224, 'Moreno station at night'), I('train-window.jpg', 1400, 788, 'Child looking out of a train window'), I('train-retiro.jpg', 1224, 689, 'Empty platform at Retiro station at night')] }
  ];

  /* ------------------------------------------------------------ SOBRE MÍ */
  FELIX.about = {
    portrait: I('felix-portrait.jpg', 646, 1400, 'Portrait of Félix Achucarro under a train station roof'),
    intro: T('Multimedia designer from Moreno, Buenos Aires.', 'Diseñador multimedia de Moreno, Buenos Aires.'),
    bio: [
      T('I trained as a visual arts teacher and learned to code so I could build what I designed.', 'Me formé como profesor de artes visuales y aprendí a programar para poder construir lo que diseñaba.'),
      T('For the last years I’ve worked where design has to work: e-learning for companies like Scania, Aluar, Fate and Cruz Roja Argentina, where if people don’t understand, the project fails. That left me with a method — untangle, design, build — that I also use for brands and websites.', 'En los últimos años trabajé donde el diseño tiene que funcionar: e-learning para empresas como Scania, Aluar, Fate y Cruz Roja Argentina, donde si la gente no entiende, el proyecto fracasa. Eso me dejó un método — desenredar, diseñar, construir — que también uso para marcas y sitios web.'),
      T('I grew up at the end of the Sarmiento line. Off the clock I model things in Blender and keep drawing trains.', 'Crecí al final del Sarmiento. Fuera del horario modelo cosas en Blender y sigo dibujando trenes.')
    ],
    experience: [
      [T('2022 — now', '2022 — hoy'), 'Entornos Educativos', T('Multimedia Designer & Developer · 40+ e-learning projects · ~15 Moodle sites · SCORM', 'Diseñador y desarrollador multimedia · 40+ proyectos de e-learning · ~15 sitios Moodle · SCORM')],
      [T('2021 — 2025'), 'Frío Creativos', T('Graphic Designer & Project Coordinator · team of 6 · 15+ brand, web and social projects', 'Diseñador gráfico y coordinador de proyectos · equipo de 6 · 15+ proyectos de marca, web y redes')],
      [T('2022 — 2024'), 'Escuela Sagrada Familia', T('Computer Science & Visual Language Teacher · programming, audio, 3D', 'Profesor de Informática y Lenguaje Visual · programación, audio, 3D')],
      [T('2016 — now', '2016 — hoy'), T('Independent', 'Independiente'), T('Covers, flyers, illustration, photography and film', 'Portadas, flyers, ilustración, fotografía y cine')]
    ],
    skills: [
      [T('Brand', 'Marca'), 'Illustrator · Photoshop · InDesign · Figma'],
      [T('3D & motion', '3D y animación'), T('Blender · 3D print · Premiere', 'Blender · Impresión 3D · Premiere')],
      [T('Learning', 'E-learning'), 'Moodle · SCORM · Storyboards · Premiere · Audition'],
      [T('Web', 'Web'), 'HTML · CSS · JavaScript · Bootstrap 5 · Git'],
      [T('AI', 'IA'), T('Image and video generation, directed and edited', 'Generación de imagen y video, dirigida y editada')]
    ],
    education: [
      [T('In progress', 'En curso'), T('Multimedia Design · Universidad Nacional de Moreno', 'Diseño Multimedial · Universidad Nacional de Moreno')],
      [T('2016 — 2022'), T('Visual Arts Teaching Degree · Escuela Raquel Forner', 'Profesorado de Artes Visuales · Escuela Raquel Forner')]
    ],
    languages: T('Spanish (native) · English (B2)', 'Español (nativo) · Inglés (B2)')
  };

  FELIX.clients = ['Scania', 'Aluar', 'Fate', 'Cruz Roja Argentina', 'Trenes Argentinos', 'Visorix', 'Canopia', 'Frío Creativos', 'Paul Laureano'];

  FELIX.contact = {
    email: 'felix.achucarro97@gmail.com',
    cv: 'assets/cv/Felix-Achucarro-CV.pdf',
    linkedin: 'https://www.linkedin.com/in/felix-achucarro'
  };
})();
