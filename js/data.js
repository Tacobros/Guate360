/* ============================================================
   GUATEMALA 360 — DATOS SIMULADOS (DEMO)
   Contenido placeholder para presentación. Pendiente validación histórica.
   ============================================================ */

const G360_DATA = {

  ubicaciones: [
    {
      id: "catedral-metropolitana",
      nombre: "Catedral Metropolitana de Guatemala",
      nombre_corto: "Catedral Metropolitana",
      departamento: "Guatemala",
      municipio: "Ciudad de Guatemala",
      tipo: "Catedral",
      estado: "disponible",
      acceso: "mixto",
      tour_id: "tour-catedral",
      descripcion_corta: "El templo católico más emblemático de la capital guatemalteca, construido en el siglo XVIII sobre la Plaza de la Constitución.",
      historia: `La Catedral Metropolitana de Santiago de Guatemala es el principal templo católico de la capital y uno de los edificios más representativos de la arquitectura colonial en América Central. Su construcción inició en 1782 y concluyó en 1867, después de múltiples interrupciones causadas por terremotos y dificultades económicas.<br><br>
      El edificio original fue diseñado en estilo neoclásico con influencias barrocas coloniales. Su fachada principal cuenta con tres cuerpos verticales flanqueados por dos torres simétricas. A lo largo de los siglos ha sido restaurada en múltiples ocasiones, especialmente tras los terremotos de 1917-1918 y el devastador terremoto de 1976 que afectó gran parte de la infraestructura colonial guatemalteca.<br><br>
      En sus osarios se conservan los restos de figuras históricas importantes para Guatemala, convirtiéndola en un sitio de memoria histórica además de culto religioso. [Nota: Contenido simulado para demo — validar con historiador certificado]`,
      datos: [
        { label: "Año de inicio", valor: "1782" },
        { label: "Año de conclusión", valor: "1867" },
        { label: "Estilo", valor: "Neoclásico / Barroco colonial" },
        { label: "Largo aproximado", valor: "80 metros" },
        { label: "Declaratoria", valor: "Patrimonio cultural nacional" },
        { label: "Uso actual", valor: "Activo — culto religioso" }
      ],
      curiosidades: [
        "Los osarios debajo del altar mayor guardan restos de personalidades históricas de la época colonial y republicana.",
        "Fue construida en el lugar donde existía una iglesia anterior destruida por los terremotos de Santa Marta en 1773.",
        "Sus campanas originales fueron fundidas con mezcla de plata y bronce para mejorar su resonancia."
      ],
      fuentes: [
        "IDAEH — Instituto de Antropología e Historia de Guatemala",
        "Fundación para la Conservación del Centro Histórico de Guatemala",
        "[Fuente simulada — demo]"
      ],
      coordenadas: { lat: 14.6349, lng: -90.5134 },
      emoji: "⛪",
      imagen_principal: null
    },
    {
      id: "palacio-nacional",
      nombre: "Palacio Nacional de la Cultura",
      nombre_corto: "Palacio Nacional",
      departamento: "Guatemala",
      municipio: "Ciudad de Guatemala",
      tipo: "Edificio histórico",
      estado: "disponible",
      acceso: "mixto",
      tour_id: null,
      descripcion_corta: "Imponente edificio de mármol verde construido en los años 40, hoy sede del Museo Nacional del Palacio de la Cultura.",
      historia: "[Contenido pendiente — demo]",
      datos: [
        { label: "Año de construcción", valor: "1939–1943" },
        { label: "Estilo", valor: "Ecléctico / Renacimiento hispano" },
        { label: "Material", valor: "Mármol verde guatemalteco" },
        { label: "Uso actual", valor: "Museo / Sede de gobierno" }
      ],
      curiosidades: [
        "Construido durante el gobierno de Jorge Ubico con mármol extraído de canteras guatemaltecas.",
        "Sus murales fueron elaborados por artistas guatemaltecos de renombre."
      ],
      fuentes: ["[Fuente simulada — demo]"],
      coordenadas: { lat: 14.6354, lng: -90.5131 },
      emoji: "🏛️",
      imagen_principal: null
    },
    {
      id: "arco-santa-catalina",
      nombre: "Arco de Santa Catalina",
      nombre_corto: "Arco de Santa Catalina",
      departamento: "Sacatepéquez",
      municipio: "Antigua Guatemala",
      tipo: "Arco / Arquitectura colonial",
      estado: "disponible",
      acceso: "exterior",
      tour_id: null,
      descripcion_corta: "Icónico arco colonial del siglo XVII que une el convento de Santa Catalina con la calle del Arco, símbolo de Antigua Guatemala.",
      historia: "[Contenido pendiente — demo]",
      datos: [
        { label: "Siglo de construcción", valor: "XVII" },
        { label: "Ubicación", valor: "5a Avenida Norte, Antigua" },
        { label: "Uso original", valor: "Paso interno del convento" },
        { label: "Declaratoria", valor: "Patrimonio Mundial UNESCO" }
      ],
      curiosidades: [
        "Fue construido para que las monjas del convento pudieran cruzar la calle sin salir a la vía pública.",
        "La ciudad de Antigua Guatemala fue declarada Patrimonio de la Humanidad en 1979."
      ],
      fuentes: ["[Fuente simulada — demo]"],
      coordenadas: { lat: 14.5592, lng: -90.7326 },
      emoji: "🏰",
      imagen_principal: null
    },
    {
      id: "tikal",
      nombre: "Parque Nacional Tikal",
      nombre_corto: "Tikal",
      departamento: "Petén",
      municipio: "Flores",
      tipo: "Ruinas arqueológicas",
      estado: "proximamente",
      acceso: "exterior",
      tour_id: null,
      descripcion_corta: "Una de las ciudades mayas más importantes del mundo, declarada Patrimonio Natural y Cultural de la Humanidad por la UNESCO.",
      historia: "[Contenido pendiente — demo]",
      datos: [
        { label: "Período principal", valor: "250–900 d.C." },
        { label: "Declaratoria", valor: "Patrimonio Mixto UNESCO (1979)" },
        { label: "Área del parque", valor: "575 km²" }
      ],
      curiosidades: [
        "El Templo IV, con 70 metros de altura, fue el edificio maya más alto de su época.",
        "Tikal aparece brevemente en la película Star Wars Episodio IV como la base rebelde."
      ],
      fuentes: ["[Fuente simulada — demo]"],
      coordenadas: { lat: 17.2220, lng: -89.6237 },
      emoji: "🏯",
      imagen_principal: null
    },
    {
      id: "chichicastenango",
      nombre: "Mercado de Chichicastenango",
      nombre_corto: "Mercado de Chichi",
      departamento: "Quiché",
      municipio: "Chichicastenango",
      tipo: "Mercado tradicional",
      estado: "proximamente",
      acceso: "mixto",
      tour_id: null,
      descripcion_corta: "Uno de los mercados indígenas más coloridos y antiguos de América, con tradición maya K'iche' que se remonta siglos atrás.",
      historia: "[Contenido pendiente — demo]",
      datos: [
        { label: "Días de mercado", valor: "Jueves y domingo" },
        { label: "Etnia predominante", valor: "Maya K'iche'" },
        { label: "Altitud", valor: "2.071 metros" }
      ],
      curiosidades: [],
      fuentes: ["[Fuente simulada — demo]"],
      coordenadas: { lat: 14.9440, lng: -91.1122 },
      emoji: "🎨",
      imagen_principal: null
    },
    {
      id: "lago-atitlan",
      nombre: "Lago de Atitlán",
      nombre_corto: "Lago de Atitlán",
      departamento: "Sololá",
      municipio: "Panajachel",
      tipo: "Área natural",
      estado: "proximamente",
      acceso: "exterior",
      tour_id: null,
      descripcion_corta: "Considerado uno de los lagos más hermosos del mundo, rodeado de volcanes y pueblos mayas con tradiciones vivas.",
      historia: "[Contenido pendiente — demo]",
      datos: [
        { label: "Profundidad máxima", valor: "340 metros" },
        { label: "Altitud", valor: "1.562 metros" },
        { label: "Tipo", valor: "Caldera volcánica" }
      ],
      curiosidades: [],
      fuentes: ["[Fuente simulada — demo]"],
      coordenadas: { lat: 14.7198, lng: -91.2322 },
      emoji: "🌋",
      imagen_principal: null
    }
  ],

  departamentos: [
    { id: "guatemala", nombre: "Guatemala", count: 2, emoji: "🏙️" },
    { id: "sacatepequez", nombre: "Sacatepéquez", count: 1, emoji: "⛪" },
    { id: "peten", nombre: "Petén", count: 1, emoji: "🌿" },
    { id: "quiche", nombre: "Quiché", count: 1, emoji: "🎨" },
    { id: "solola", nombre: "Sololá", count: 1, emoji: "🌋" },
    { id: "alta-verapaz", nombre: "Alta Verapaz", count: 0, emoji: "💧" },
    { id: "chiquimula", nombre: "Chiquimula", count: 0, emoji: "🏔️" },
    { id: "huehuetenango", nombre: "Huehuetenango", count: 0, emoji: "🏘️" }
  ],

  tipos: [
    { id: "catedral", nombre: "Catedrales", emoji: "⛪", count: 1 },
    { id: "edificio-historico", nombre: "Edificios históricos", emoji: "🏛️", count: 1 },
    { id: "ruinas", nombre: "Ruinas arqueológicas", emoji: "🏯", count: 1 },
    { id: "mercado", nombre: "Mercados tradicionales", emoji: "🎨", count: 1 },
    { id: "area-natural", nombre: "Áreas naturales", emoji: "🌋", count: 1 },
    { id: "arco", nombre: "Arquitectura colonial", emoji: "🏰", count: 1 },
    { id: "museo", nombre: "Museos", emoji: "🖼️", count: 0 },
    { id: "plaza", nombre: "Plazas y parques", emoji: "🌳", count: 0 }
  ],

  tours: {
    "tour-catedral": {
      id: "tour-catedral",
      titulo: "Catedral Metropolitana — Recorrido 360°",
      descripcion: "Explora la Catedral Metropolitana de Guatemala en este recorrido virtual. Visita su fachada principal, la nave central y el área del altar.",
      ubicacion_id: "catedral-metropolitana",
      escenas: [
        {
          id: "escena-fachada",
          titulo: "Fachada Principal",
          descripcion: "Vista exterior de la imponente fachada neoclásica frente a la Plaza de la Constitución.",
          imagen: "https://pannellum.org/images/cerro-toro.jpg",
          yaw_inicial: 0,
          pitch_inicial: 0,
          hotspots: [
            {
              id: "hs-torres",
              tipo: "info",
              yaw: -25,
              pitch: 20,
              titulo: "Torres Campanario",
              descripcion: "Las dos torres simétricas de la catedral se elevan aproximadamente 30 metros sobre la Plaza de la Constitución. Albergan campanas que han marcado el ritmo de la ciudad durante más de dos siglos.",
              emoji: "🔔",
              fuente: "[Dato simulado — demo]"
            },
            {
              id: "hs-fachada-estilo",
              tipo: "info",
              yaw: 5,
              pitch: 15,
              titulo: "Estilo Neoclásico",
              descripcion: "La fachada de la catedral responde al estilo neoclásico con influencias barrocas coloniales. Sus tres cuerpos verticales representan la Trinidad y la tradición arquitectónica española del siglo XVIII.",
              emoji: "🏛️",
              fuente: "[Dato simulado — demo]"
            },
            {
              id: "hs-entrar",
              tipo: "nav",
              yaw: 45,
              pitch: -5,
              titulo: "Entrar a la Nave Central →",
              escena_destino: "escena-nave-central",
              emoji: "➡️"
            }
          ]
        },
        {
          id: "escena-nave-central",
          titulo: "Nave Central",
          descripcion: "El interior de la catedral con su impresionante nave central, columnas y altar mayor.",
          imagen: "https://pannellum.org/images/alma.jpg",
          yaw_inicial: -30,
          pitch_inicial: 0,
          hotspots: [
            {
              id: "hs-altar",
              tipo: "info",
              yaw: -30,
              pitch: 0,
              titulo: "Altar Mayor",
              descripcion: "El altar mayor de la catedral es una obra de orfebrería religiosa que data de finales del siglo XIX. Está dedicado al patrono Santiago Apóstol.",
              emoji: "✨",
              fuente: "[Dato simulado — demo]"
            },
            {
              id: "hs-columnas",
              tipo: "info",
              yaw: 60,
              pitch: 5,
              titulo: "Columnas Dóricas",
              descripcion: "Las columnas de orden dórico que flanquean la nave central fueron diseñadas para soportar los daños de temblores frecuentes, característica de la arquitectura sísmica colonial guatemalteca.",
              emoji: "🏛️",
              fuente: "[Dato simulado — demo]"
            },
            {
              id: "hs-volver",
              tipo: "nav",
              yaw: 140,
              pitch: -5,
              titulo: "← Volver a la Fachada",
              escena_destino: "escena-fachada",
              emoji: "⬅️"
            },
            {
              id: "hs-osarios",
              tipo: "nav",
              yaw: -100,
              pitch: -10,
              titulo: "Ver Capilla Lateral →",
              escena_destino: "escena-capilla",
              emoji: "➡️"
            }
          ]
        },
        {
          id: "escena-capilla",
          titulo: "Capilla Lateral y Osarios",
          descripcion: "Una de las capillas laterales de la catedral, donde se conservan osarios de figuras históricas.",
          imagen: "https://pannellum.org/images/tunnels.jpg",
          yaw_inicial: 0,
          pitch_inicial: 0,
          hotspots: [
            {
              id: "hs-osario-info",
              tipo: "info",
              yaw: 10,
              pitch: 5,
              titulo: "Osarios Históricos",
              descripcion: "Bajo el área del altar de esta capilla se conservan los restos de personajes importantes de la historia guatemalteca del período colonial y republicano. Los osarios son parte del patrimonio histórico custodiado por la Arquidiócesis.",
              emoji: "📜",
              fuente: "[Dato simulado — demo]"
            },
            {
              id: "hs-retablo",
              tipo: "info",
              yaw: -40,
              pitch: 10,
              titulo: "Retablo Barroco",
              descripcion: "Los retablos de las capillas laterales son ejemplos del arte barroco religioso que los artesanos guatemaltecos del siglo XVIII desarrollaron con influencia española y raíces indígenas.",
              emoji: "🎨",
              fuente: "[Dato simulado — demo]"
            },
            {
              id: "hs-regresar",
              tipo: "nav",
              yaw: 170,
              pitch: -5,
              titulo: "← Regresar a Nave Central",
              escena_destino: "escena-nave-central",
              emoji: "⬅️"
            }
          ]
        }
      ]
    }
  },

  faqs: [
    {
      categoria: "General",
      items: [
        {
          q: "¿Qué es Guatemala 360?",
          a: "Guatemala 360 es una plataforma digital que permite explorar lugares turísticos, históricos, culturales y patrimoniales de Guatemala mediante recorridos virtuales 360° interactivos. Combina tecnología de punta con investigación histórica para crear una experiencia educativa y turística única."
        },
        {
          q: "¿Es gratuita la plataforma?",
          a: "Sí, Guatemala 360 es de acceso libre y gratuito para todos los usuarios. La plataforma es un proyecto de preservación cultural digital sin fines de lucro."
        },
        {
          q: "¿Cuántos lugares están disponibles?",
          a: "Actualmente nos encontramos en fase piloto con nuestra primera ubicación. El proyecto contempla agregar hasta 10 ubicaciones durante el primer año, cubriendo distintos departamentos y tipos de patrimonio."
        }
      ]
    },
    {
      categoria: "Recorridos 360",
      items: [
        {
          q: "¿Cómo funcionan los recorridos virtuales?",
          a: "Los recorridos usan fotografías esféricas de alta resolución que cubren 360 grados. Puedes navegar haciendo clic o arrastrando la pantalla para girar la vista, hacer clic en los hotspots para obtener información, y moverte entre escenas diferentes del mismo lugar."
        },
        {
          q: "¿Se puede usar desde el celular?",
          a: "Sí. Los recorridos están optimizados para dispositivos móviles. En smartphones puedes girar la vista tocando y arrastrando, y activar el modo de pantalla completa para una experiencia más inmersiva. En dispositivos con giroscopio, puedes mover el teléfono para navegar."
        },
        {
          q: "¿Se necesita conexión a internet?",
          a: "Sí, actualmente se requiere conexión a internet para cargar los recorridos. Las imágenes 360 son de alta resolución y no están disponibles en modo offline. Recomendamos una conexión estable para una mejor experiencia."
        }
      ]
    },
    {
      categoria: "Contenido e Información",
      items: [
        {
          q: "¿Cómo se valida la información histórica?",
          a: "Todo el contenido histórico es investigado con fuentes documentadas y validado por historiadores y expertos en patrimonio cultural guatemalteco antes de ser publicado. Cada ficha indica sus fuentes bibliográficas y digitales."
        },
        {
          q: "¿Cómo se seleccionan los lugares?",
          a: "Los lugares se seleccionan considerando su valor histórico, cultural, patrimonial o turístico. Priorizamos sitios con declaratoria de patrimonio, relevancia educativa, representatividad de diferentes departamentos y disponibilidad de acceso para fotografía 360."
        },
        {
          q: "¿Qué es el chatbot guía?",
          a: "Guía360 es nuestro asistente virtual educativo. Puedes preguntarle sobre la historia de los lugares, datos relevantes, y rutas o destinos relacionados. Responde únicamente con información verificada y te indica cuando no tiene datos disponibles."
        }
      ]
    },
    {
      categoria: "Participación",
      items: [
        {
          q: "¿Cómo puedo proponer una ubicación?",
          a: "Puedes sugerir una ubicación a través de nuestro formulario de contacto. Evaluamos todas las propuestas considerando valor patrimonial, accesibilidad para fotografía 360, permisos del lugar y disponibilidad de información histórica verificada."
        },
        {
          q: "¿Cómo contactar para alianzas institucionales?",
          a: "Las instituciones interesadas en colaborar (municipalidades, museos, universidades, empresas de turismo) pueden contactarnos a través de nuestro formulario indicando el motivo 'Alianza institucional'. Respondemos en un plazo de 5 días hábiles."
        }
      ]
    }
  ],

  chatbot_responses: {
    "historia": "La Catedral Metropolitana de Guatemala inició su construcción en 1782 y fue concluida en 1867. Es el principal templo católico de la capital y un ejemplo importante de la arquitectura neoclásica con influencias barrocas coloniales. *[Información del recorrido actual]*",
    "departamento": "La Catedral Metropolitana se encuentra en el Centro Histórico de la Ciudad de Guatemala, departamento de Guatemala, frente a la Plaza de la Constitución. *[Información del recorrido actual]*",
    "horarios": "La Catedral Metropolitana generalmente está abierta al público de lunes a domingo, de 6:00 AM a 7:00 PM. Para misas y eventos especiales, los horarios pueden variar. *[Verificar con la institución]*",
    "curiosidades": "¡Hay varias curiosidades fascinantes! Por ejemplo: los osarios bajo el altar mayor guardan restos de figuras históricas coloniales, y las campanas fueron fundidas con mezcla de plata para mejorar su resonancia. *[Ver sección 'Curiosidades' en la ficha]*",
    "lugares": "Relacionados con esta catedral, te recomiendo explorar el Palacio Nacional de la Cultura (a 50 metros de distancia) y, si visitas Antigua Guatemala, la Catedral de Santiago. *[Próximamente disponibles en Guatemala 360]*",
    "greetings": "¡Hola! Soy Guía360, tu asistente virtual del patrimonio guatemalteco 🇬🇹. Puedo responder preguntas sobre los lugares de la plataforma. ¿Qué quieres saber?",
    "default": "No tengo información verificada sobre eso en mi base de conocimiento actual. Te recomiendo consultar el INGUAT (inguat.gob.gt) o el IDAEH para información oficial sobre el patrimonio de Guatemala. 📚"
  }
};
