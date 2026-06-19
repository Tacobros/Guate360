# Guatemala 360 — Demo HTML

Plataforma web turística, cultural e histórica para explorar lugares emblemáticos de Guatemala mediante recorridos virtuales 360° interactivos.

## Estructura del proyecto

```
/
├── index.html              ← Landing page principal
├── tour.html               ← Recorrido virtual 360° (Pannellum)
├── explorar.html           ← Listado y filtros de ubicaciones
├── ubicacion.html          ← Ficha histórica individual
├── faq.html                ← Preguntas frecuentes
├── contacto.html           ← Formulario de contacto
├── css/
│   └── styles.css          ← Estilos globales
├── js/
│   ├── data.js             ← Datos simulados (ubicaciones, tours, chatbot)
│   ├── main.js             ← Lógica general, filtros, chatbot
│   └── tour.js             ← Configuración Pannellum + hotspots
├── GUATEMALA_360_MASTER_BRIEF.md   ← Plan estratégico completo
└── GUATEMALA_360_DEMO_BRIEF.md     ← Especificaciones técnicas de la demo
```

## Tecnologías usadas

| Librería | Uso |
|---------|-----|
| Pannellum 2.5.6 | Visor 360° open source |
| Font Awesome 6.5 | Iconografía |
| Google Fonts | Playfair Display, Inter, Merriweather |
| Vanilla JS (ES6+) | Sin jQuery ni frameworks |
| CSS Custom Properties | Sistema de diseño consistente |

## Cómo ver la demo

Abre `index.html` en cualquier navegador moderno. Para el visor 360° en `tour.html` se requiere conexión a internet para cargar Pannellum y las imágenes placeholder.

**Recomendado:** Usar un servidor local:
```bash
# Python
python3 -m http.server 8080

# Node.js
npx serve .
```

## Páginas disponibles

| Página | Descripción |
|--------|-------------|
| `index.html` | Landing principal con hero, propuesta de valor, categorías, chatbot preview |
| `tour.html` | Visor 360° Pannellum con 3 escenas navegables, hotspots y chatbot en sidebar |
| `explorar.html` | Grid de ubicaciones con filtros por departamento, tipo, acceso y estado |
| `ubicacion.html` | Ficha histórica de la Catedral Metropolitana con galería, datos y FAQ |
| `faq.html` | Acordeón de preguntas frecuentes por categoría |
| `contacto.html` | Formulario con validación y motivos de contacto |

## Notas de contenido

Todo el contenido histórico es **simulado/placeholder** para la demo. Pendiente de validación por historiador certificado, fotografías 360° reales y fuentes bibliográficas verificadas.

## Equipo

- **Amy Carrera** — Estrategia de marketing
- **Sofía Aguirre** — Diseño UX/UI
- **Luis Cerezo** — Desarrollo web / Analítica digital

---
*Guatemala 360 — © 2026. Demo para presentación a cliente/ONG.*
