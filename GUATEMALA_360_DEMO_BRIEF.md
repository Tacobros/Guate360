# GUATEMALA 360 — DEMO BRIEF
**Versión:** 1.0.0  
**Fecha:** 2026-06-19  
**Estado:** En desarrollo  
**Autor:** Luis Cerezo

---

## HISTORIAL DE CAMBIOS

| Versión | Fecha | Descripción | Autor |
|---------|-------|-------------|-------|
| 1.0.0 | 2026-06-19 | Creación inicial del Demo Brief | Luis Cerezo |

---

## 1. RESUMEN DEL PROYECTO

Guatemala 360 es una plataforma web turística, cultural e histórica que permite explorar lugares emblemáticos de Guatemala mediante recorridos virtuales 360 navegables. La demo es una referencia visual y funcional HTML/CSS/JS para presentar al cliente/ONG, con la visión de migrar a WordPress después.

---

## 2. OBJETIVO DE LA DEMO

Crear una propuesta de referencia **visual y funcional** que:
- Comunique claramente la propuesta de valor del proyecto.
- Demuestre la experiencia 360 navegable con hotspots.
- Muestre la estructura completa del sitio (landing, fichas, mapa, chatbot, contacto).
- Sea presentable ante una ONG como propuesta ganadora.
- Sirva como blueprint para el desarrollo en WordPress.

---

## 3. ALCANCE DE LA DEMO

### Incluido ✅
- Landing page completa con todas las secciones
- Visor 360 funcional con Pannellum (librería open source)
- Al menos 3 escenas navegables con hotspots
- Página de listado de ubicaciones con filtros
- Página individual de ubicación (ficha histórica)
- Componente visual de chatbot (interfaz, sin IA real en demo)
- Página de FAQ
- Formulario de contacto
- Diseño responsive (desktop + mobile)
- Sistema de navegación completo

### No incluido en demo ❌
- IA real en el chatbot (solo interfaz y respuestas simuladas)
- Base de datos real (contenido hardcoded o simulado)
- Sistema de administración
- Multiidioma
- Blog activo
- Mapa interactivo real (placeholder)

---

## 4. PÁGINAS REQUERIDAS

| Página | Archivo | Estado |
|--------|---------|--------|
| Landing principal | `index.html` | ✅ Incluida |
| Tour / Recorrido 360 | `tour.html` | ✅ Incluida |
| Listado de ubicaciones | `explorar.html` | ✅ Incluida |
| Ficha de ubicación | `ubicacion.html` | ✅ Incluida |
| FAQ | `faq.html` | ✅ Incluida |
| Contacto | `contacto.html` | ✅ Incluida |

---

## 5. COMPONENTES REQUERIDOS

| Componente | Descripción |
|-----------|-------------|
| Navbar | Menú principal responsive con hamburger en mobile |
| Hero | Banner principal con video/imagen de fondo y CTA |
| Cards de ubicaciones | Tarjetas con imagen, nombre, categoría, estado |
| Filtros | Por departamento, tipo, interior/exterior, estado |
| Buscador | Input de búsqueda con filtrado en tiempo real |
| Visor 360 | Pannellum embebido con controles |
| Hotspot modal | Popup al clicar un hotspot con imagen, título, descripción |
| Ficha histórica | Layout de detalle con secciones: historia, datos, galería, FAQ |
| Chatbot widget | Burbuja flotante + panel de chat |
| Breadcrumb | Navegación contextual |
| Footer | Links, créditos, RRSS |

---

## 6. ARQUITECTURA TÉCNICA

### Estructura de carpetas (Demo HTML)
```
/
├── index.html              ← Landing page
├── tour.html               ← Recorrido virtual 360
├── explorar.html           ← Listado y filtros
├── ubicacion.html          ← Ficha individual
├── faq.html                ← Preguntas frecuentes
├── contacto.html           ← Formulario de contacto
├── README.md               ← Documentación
├── GUATEMALA_360_DEMO_BRIEF.md
├── GUATEMALA_360_MASTER_BRIEF.md
│
├── css/
│   ├── styles.css          ← Estilos globales
│   ├── tour.css            ← Estilos específicos del visor
│   └── components.css      ← Componentes reutilizables
│
├── js/
│   ├── main.js             ← Lógica general + navbar + chatbot
│   ├── tour.js             ← Configuración Pannellum + hotspots
│   ├── explorar.js         ← Filtros y búsqueda
│   └── data.js             ← Datos simulados (ubicaciones, escenas, hotspots)
│
├── img/
│   ├── logo.svg
│   ├── hero-bg.jpg
│   ├── locations/
│   │   └── catedral/       ← Fotos y thumbnails
│   └── 360/
│       └── catedral/       ← Imágenes equirectangulares
│
└── fonts/                  ← Tipografías locales (si aplica)
```

### Equivalente en WordPress
```
/wp-content/themes/guate360/
├── functions.php           ← Registro de CPTs, scripts, estilos
├── header.php
├── footer.php
├── page-landing.php        ← Template landing
├── single-ubicacion.php    ← Template ficha
├── archive-ubicacion.php   ← Template listado
├── page-tour.php           ← Template visor 360
├── page-faq.php
├── page-contacto.php
├── assets/
│   ├── css/
│   ├── js/
│   └── img/
└── template-parts/
    ├── card-ubicacion.php
    ├── hotspot-modal.php
    ├── chatbot-widget.php
    └── ficha-historica.php
```

---

## 7. LIBRERÍAS RECOMENDADAS

| Librería | Versión | Uso | CDN |
|---------|---------|-----|-----|
| **Pannellum** | 2.5.6 | Visor 360 | ✅ Disponible |
| **AOS** | 3.0.0 | Animaciones scroll | ✅ Disponible |
| **Swiper.js** | 11.x | Carousels/sliders | ✅ Disponible |
| **Vanilla JS** | ES6+ | Lógica general | Sin librería |
| **Google Fonts** | — | Tipografías | ✅ Disponible |
| **Font Awesome** | 6.x | Iconos | ✅ Disponible |

**Sin jQuery, sin Bootstrap** — mantener el bundle liviano para performance.

---

## 8. DISEÑO VISUAL

### Paleta de colores
```css
/* Colores primarios */
--color-primary:    #1B4D3E;  /* Verde selva guatemalteca */
--color-secondary:  #C8A84B;  /* Dorado maya/colonial */
--color-accent:     #8B1A1A;  /* Rojo jade/colonial */

/* Neutros */
--color-dark:       #1A1A2E;  /* Negro profundo */
--color-mid:        #4A4A4A;  /* Gris texto */
--color-light:      #F5F0E8;  /* Crema papel antiguo */
--color-white:      #FFFFFF;

/* Fondos */
--color-bg-dark:    #0D1B1E;  /* Fondo hero oscuro */
--color-bg-light:   #FAFAF7;  /* Fondo secciones claras */
```

### Tipografías
```
Títulos:    Playfair Display (serif) — elegante, histórico
Cuerpo:     Inter (sans-serif) — legible, moderno
Accento:    Merriweather (serif) — fichas históricas
Código/UI:  JetBrains Mono — elementos técnicos
```

### Sistema de espaciado
Basado en múltiplos de 8px: 8, 16, 24, 32, 48, 64, 80, 96px

### Bordes y radios
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-xl: 24px;
--radius-pill: 100px;
```

### Sombras
```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
--shadow-md: 0 4px 20px rgba(0,0,0,0.12);
--shadow-lg: 0 8px 40px rgba(0,0,0,0.16);
```

---

## 9. ESTILO DE HOTSPOTS

### Tipos de hotspot
| Tipo | Ícono | Color | Comportamiento |
|------|-------|-------|----------------|
| Información | ℹ️ | Dorado | Abre modal con descripción |
| Navegación | ➡️ | Verde | Va a otra escena |
| Galería | 🖼️ | Azul | Abre galería de fotos |
| Audio | 🔊 | Morado | Reproduce audio descriptivo |
| Dato curioso | ⭐ | Ámbar | Muestra tarjeta con curiosidad |

### Estilo visual
- Círculo pulsante con animación "ping"
- Tooltip al hover con título del hotspot
- Modal centrado al clicar con: imagen, título, descripción, fuente
- Botón cerrar visible y accesible

---

## 10. MODELO DE CONTENIDO (DEMO — DATOS SIMULADOS)

### Ubicación piloto: Catedral Metropolitana de Guatemala
```javascript
{
  id: "catedral-metropolitana",
  nombre: "Catedral Metropolitana de Guatemala",
  nombre_corto: "Catedral Metropolitana",
  departamento: "Guatemala",
  municipio: "Guatemala Ciudad",
  tipo: "Catedral",
  estado: "disponible",
  interior_exterior: "mixto",
  descripcion_corta: "La Catedral Metropolitana es el principal templo católico de Guatemala...",
  historia: "...[texto completo]...",
  fecha_construccion: "1782",
  datos_relevantes: [
    { label: "Año de inicio", valor: "1782" },
    { label: "Estilo arquitectónico", valor: "Barroco colonial" },
    { label: "Largo del edificio", valor: "80 metros" }
  ],
  curiosidades: [
    "Los osarios debajo de la catedral guardan restos de personalidades históricas...",
  ],
  fuentes: [
    "Fundación para la conservación del centro histórico de Guatemala"
  ],
  coordenadas: { lat: 14.6349, lng: -90.5134 },
  imagen_principal: "img/locations/catedral/principal.jpg",
  tour_id: "tour-catedral-metro"
}
```

### Escenas del Tour (simuladas)
```javascript
[
  {
    id: "escena-fachada",
    titulo: "Fachada Principal",
    imagen: "https://pannellum.org/images/alma.jpg", // placeholder
    yaw_inicial: 0,
    pitch_inicial: 0,
    hotspots: [
      {
        tipo: "info",
        yaw: -20,
        pitch: 5,
        titulo: "Torres campanario",
        descripcion: "Las torres de la catedral miden 30 metros de altura...",
        imagen: null
      },
      {
        tipo: "nav",
        yaw: 50,
        pitch: -10,
        titulo: "Entrar al interior →",
        escena_destino: "escena-nave-central"
      }
    ]
  }
]
```

---

## 11. REGLAS DEL CHATBOT (DEMO)

En la demo, el chatbot usa respuestas predefinidas (no IA real). Las reglas de producción son:

1. Solo responder con información de la base de conocimiento
2. Nunca inventar fechas, nombres ni datos históricos
3. Si no sabe: indicar limitación y sugerir fuente
4. Citar fuente o indicar procedencia del dato
5. Sugerir lugares relacionados dentro de la plataforma
6. No emitir opiniones políticas, religiosas o sociales
7. Responder en el idioma del usuario (ES por defecto en demo)

### Respuestas simuladas del chatbot (demo)
```javascript
const chatbotResponses = {
  "historia": "La Catedral Metropolitana de Guatemala fue construida entre 1782 y 1867...",
  "departamento": "La Catedral Metropolitana se encuentra en Guatemala Ciudad, capital del departamento de Guatemala.",
  "horarios": "La catedral generalmente abre de lunes a domingo de 6:00 AM a 7:00 PM.",
  "default": "No tengo información específica sobre eso. Te recomiendo consultar el sitio del INGUAT o la propia institución."
}
```

---

## 12. REQUISITOS TÉCNICOS IMÁGENES 360

| Parámetro | Requisito mínimo | Recomendado |
|-----------|-----------------|-------------|
| Resolución | 4000×2000 px | 8000×4000 px |
| Formato | JPEG | JPEG/WebP |
| Proyección | Equirectangular | Equirectangular |
| Peso máximo | 8 MB | < 5 MB (optimizado) |
| Campo visual | 360°×180° | 360°×180° |
| Equipo mínimo | Cámara 360 (Insta360 ONE X) | Insta360 Pro 2 o Ricoh Theta Z1 |
| Software edición | PTGui, Hugin | PTGui Pro |

**Nota:** Para la demo se usan imágenes placeholder de dominio público (Pannellum sample images).

---

## 13. REQUISITOS UX/UI

### Desktop (1280px+)
- Navbar horizontal con menú desplegable
- Visor 360 en full-width con sidebar de info
- Cards en grid de 3 columnas
- Chatbot en esquina inferior derecha

### Tablet (768px–1279px)
- Navbar con menú colapsable
- Cards en grid de 2 columnas
- Visor 360 adaptado

### Mobile (< 768px)
- Hamburger menu
- Cards en 1 columna
- Visor 360 fullscreen con controles táctiles
- Chatbot expandible desde botón flotante
- Hotspots con área táctil mínima de 44×44px

### Accesibilidad básica
- Contraste mínimo WCAG AA (4.5:1)
- Texto alternativo en todas las imágenes
- Navegación por teclado funcional
- ARIA labels en elementos interactivos
- Focus visible en todos los controles
- Tamaño mínimo de fuente: 16px en cuerpo

---

## 14. CHECKLIST DE DESARROLLO

### Setup
- [x] Estructura de carpetas creada
- [x] Paleta de colores definida
- [x] Tipografías seleccionadas
- [x] Pannellum integrado

### Páginas
- [x] index.html — Landing
- [x] tour.html — Recorrido 360
- [x] explorar.html — Listado
- [x] ubicacion.html — Ficha
- [x] faq.html — FAQ
- [x] contacto.html — Contacto

### Funcionalidades
- [x] Navbar responsive
- [x] Visor 360 funcional
- [x] Hotspots con modal
- [x] Filtros de ubicaciones
- [x] Chatbot simulado
- [x] Formulario de contacto
- [ ] Animaciones AOS
- [ ] Validación de formulario
- [ ] Modo oscuro (futuro)

### QA
- [ ] Prueba en Chrome/Firefox/Safari
- [ ] Prueba en mobile iOS/Android
- [ ] Prueba de velocidad (PageSpeed)
- [ ] Verificación de links rotos
- [ ] Revisión ortográfica
- [ ] Revisión de accesibilidad básica

---

## 15. PLAN MIGRACIÓN A WORDPRESS

| Paso | Descripción | Tiempo est. |
|------|-------------|-------------|
| 1 | Instalar WordPress + tema Kadence | 2h |
| 2 | Crear CPTs (ubicacion, tour, escena, hotspot, etc.) con CPT UI | 3h |
| 3 | Configurar campos ACF Pro | 4h |
| 4 | Convertir templates HTML a PHP con WordPress loops | 8h |
| 5 | Integrar Pannellum con ACF (datos dinámicos) | 6h |
| 6 | Configurar SEO (Yoast, Schema) | 3h |
| 7 | Configurar caché y performance (WP Rocket) | 2h |
| 8 | Configurar formulario de contacto (WPForms) | 1h |
| 9 | Integrar chatbot real (Botpress o Chatbase) | 4h |
| 10 | QA completo + ajustes | 4h |
| **TOTAL** | | **~37h** |

---

## 16. CÓMO CONTINUAR EL DESARROLLO

### Inmediato (próximas horas)
1. Revisar la demo en el navegador
2. Ajustar colores o textos según feedback del cliente
3. Agregar imágenes 360 reales cuando estén disponibles
4. Conectar chatbot real (reemplazar respuestas hardcoded)

### Corto plazo (próxima semana)
1. Presentar demo al cliente/ONG
2. Recopilar feedback
3. Ajustar antes de migrar a WordPress
4. Iniciar gestión de permisos para fotografía 360

### Mediano plazo (siguiente mes)
1. Setup WordPress en hosting
2. Migrar demo según pasos del plan
3. Cargar contenido real de la ubicación piloto
4. Lanzar versión beta para validación

---

## 17. SUPUESTOS DE LA DEMO

1. Las imágenes 360 usadas son placeholders de dominio público (Pannellum sample).
2. El chatbot es simulado con respuestas hardcoded, no IA real.
3. El contenido histórico es ilustrativo y debe validarse con fuentes.
4. El mapa usa coordenadas simuladas sin API de mapas real.
5. Los formularios no envían datos reales.
6. La demo no tiene backend ni base de datos.
7. El diseño puede variar en el desarrollo final en WordPress.

---

## 18. PENDIENTES

- [ ] Definir ubicación piloto real con el cliente
- [ ] Conseguir imágenes 360 reales (o autorizar placeholders para demo)
- [ ] Validar contenido histórico con experto
- [ ] Definir dominio y hosting final
- [ ] Confirmar identidad de marca (logo, colores oficiales)
- [ ] Acordar funcionalidades prioritarias para WordPress
- [ ] Decidir plataforma de chatbot IA real

---

*Documento de uso interno. Guatemala 360 — 2026*
