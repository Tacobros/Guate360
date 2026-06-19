# Guatemala 360 — Guía de Despliegue Gratuito

## Opción 1: Netlify (RECOMENDADO — 5 minutos) ⭐

### Paso a paso:
1. Ve a [netlify.com](https://www.netlify.com) → crear cuenta gratuita
2. En el dashboard, haz clic en **"Add new site"** → **"Import an existing project"**
3. Conecta tu cuenta de GitHub y selecciona el repositorio `tacobros/guate360`
4. Branch: `claude/fervent-edison-7483gq`
5. Build settings: dejar vacío (no hay proceso de build)
6. Publish directory: `.` (punto — raíz del repo)
7. Clic en **"Deploy site"**
8. En ~1 minuto tendrás una URL como: `https://guatemala360-demo.netlify.app`
9. Puedes personalizar el nombre del subdominio en Site settings → Domain

**URL resultante:** `https://[tu-nombre].netlify.app`

### Actualizar la demo:
Cada `git push` al branch actualiza el sitio automáticamente.

---

## Opción 2: GitHub Pages (también gratis)

1. Ve al repositorio en GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `claude/fervent-edison-7483gq` / `/ (root)`
5. Save → en ~2 minutos está disponible en: `https://tacobros.github.io/guate360/`

---

## Opción 3: Vercel (también gratis)

1. Ve a [vercel.com](https://vercel.com) → crear cuenta con GitHub
2. "Add New Project" → importar `tacobros/guate360`
3. Framework: Other
4. Root directory: `.`
5. Deploy

---

## Checklist antes de presentar al cliente

- [ ] Sitio desplegado y URL accesible
- [ ] Recorrido 360° carga correctamente (requiere internet)
- [ ] Chatbot responde preguntas básicas
- [ ] Funciona en mobile (probar en Android/iOS)
- [ ] Switcher de idioma funciona (ES/EN/FR)
- [ ] Login modal abre correctamente
- [ ] Formulario de contacto simula envío
- [ ] Todos los links internos funcionan
- [ ] No hay errores en la consola del navegador

## Dominio personalizado (opcional, para mayor impresionismo)

En Netlify o Vercel puedes agregar un dominio personalizado:
- Comprar en Namecheap: `guatemala360.gt` o `guate360.tours`
- Costo aproximado: $10-15 USD/año
- Configurar DNS según instrucciones de la plataforma

## Nota importante para la presentación

Informar al cliente que esta es una **demo de concepto** con:
- Imágenes 360° de demostración (no son las del cliente)
- Contenido histórico simulado (pendiente de validación)
- Sistema de login funcional visualmente (sin backend real)
- Chatbot con respuestas precargadas (sin IA real conectada)

La versión final en WordPress incluirá todas las funcionalidades reales.
