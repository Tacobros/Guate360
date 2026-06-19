/* ============================================================
   GUATEMALA 360 — VISOR PANNELLUM + HOTSPOTS
   ============================================================ */

let viewer = null;
let currentTourId = 'tour-catedral';
let currentSceneId = null;

function initTour() {
  const tourData = G360_DATA.tours[currentTourId];
  if (!tourData) { console.warn('Tour no encontrado:', currentTourId); return; }

  const firstScene = tourData.escenas[0];
  currentSceneId = firstScene.id;

  // Configurar Pannellum
  const scenes = {};
  tourData.escenas.forEach(escena => {
    const pannellumHotspots = escena.hotspots.map(hs => {
      if (hs.tipo === 'nav') {
        return {
          id: hs.id,
          pitch: hs.pitch,
          yaw: hs.yaw,
          type: 'custom',
          cssClass: 'hotspot-nav',
          createTooltipFunc: createNavTooltip,
          createTooltipArgs: hs,
          clickHandlerFunc: () => goToScene(hs.escena_destino),
          clickHandlerArgs: hs.escena_destino
        };
      } else {
        return {
          id: hs.id,
          pitch: hs.pitch,
          yaw: hs.yaw,
          type: 'custom',
          cssClass: 'hotspot-info',
          createTooltipFunc: createInfoTooltip,
          createTooltipArgs: hs,
          clickHandlerFunc: () => openHotspotModal(hs),
          clickHandlerArgs: hs
        };
      }
    });

    scenes[escena.id] = {
      title: escena.titulo,
      panorama: escena.imagen,
      yaw: escena.yaw_inicial || 0,
      pitch: escena.pitch_inicial || 0,
      hfov: 100,
      hotSpots: pannellumHotspots
    };
  });

  viewer = pannellum.viewer('panorama-container', {
    default: {
      firstScene: firstScene.id,
      sceneFadeDuration: 1000,
      autoLoad: true,
      showControls: true,
      keyboardZoom: true,
      mouseZoom: true,
      doubleClickZoom: true,
      showZoomCtrl: true,
      showFullscreenCtrl: true
    },
    scenes: scenes
  });

  viewer.on('scenechange', (sceneId) => {
    currentSceneId = sceneId;
    updateSceneInfo(sceneId);
    updateSceneNav(sceneId);
  });

  renderSceneNav(tourData);
  updateSceneInfo(firstScene.id);

  // Tour info
  const tourTitle = document.getElementById('tour-title');
  const tourDesc = document.getElementById('tour-desc');
  if (tourTitle) tourTitle.textContent = tourData.titulo;
  if (tourDesc) tourDesc.textContent = tourData.descripcion;
}

function createInfoTooltip(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot');
  hotSpotDiv.innerHTML = `
    <div class="hs-dot hs-dot--info">
      <span class="hs-icon">${args.emoji || 'ℹ'}</span>
      <span class="hs-pulse"></span>
    </div>
    <div class="hs-label">${args.titulo}</div>
  `;
}

function createNavTooltip(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot');
  hotSpotDiv.innerHTML = `
    <div class="hs-dot hs-dot--nav">
      <span class="hs-icon">➡</span>
    </div>
    <div class="hs-label">${args.titulo}</div>
  `;
}

function goToScene(sceneId) {
  if (viewer && sceneId) viewer.loadScene(sceneId);
}

function updateSceneInfo(sceneId) {
  const tourData = G360_DATA.tours[currentTourId];
  const escena = tourData.escenas.find(e => e.id === sceneId);
  if (!escena) return;
  const nameEl = document.getElementById('current-scene-name');
  const descEl = document.getElementById('current-scene-desc');
  if (nameEl) nameEl.textContent = escena.titulo;
  if (descEl) descEl.textContent = escena.descripcion;
}

function renderSceneNav(tourData) {
  const container = document.getElementById('scene-nav');
  if (!container) return;
  container.innerHTML = '';
  tourData.escenas.forEach((escena, idx) => {
    const btn = document.createElement('button');
    btn.className = 'scene-nav-btn';
    btn.dataset.sceneId = escena.id;
    btn.innerHTML = `
      <span class="scene-nav-num">${idx + 1}</span>
      <span class="scene-nav-name">${escena.titulo}</span>
    `;
    btn.addEventListener('click', () => goToScene(escena.id));
    container.appendChild(btn);
  });
}

function updateSceneNav(activeSceneId) {
  document.querySelectorAll('.scene-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sceneId === activeSceneId);
  });
}

function openHotspotModal(hs) {
  openModal({
    title: hs.titulo,
    emoji: hs.emoji || '🏛️',
    text: hs.descripcion,
    source: hs.fuente
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('panorama-container')) {
    initTour();
  }
});
