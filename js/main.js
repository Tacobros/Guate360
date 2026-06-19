/* ============================================================
   GUATEMALA 360 — LÓGICA PRINCIPAL
   ============================================================ */

/* ---- Navbar scroll behavior ---- */
const header = document.querySelector('.header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ---- Mobile hamburger menu ---- */
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    const isOpen = mobileNav.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.querySelectorAll('span')[1].style.opacity = isOpen ? '0' : '1';
    hamburger.querySelectorAll('span')[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
    hamburger.querySelectorAll('span')[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
    }
  });
}

/* ---- FAQ Accordion ---- */
function initFaqAccordion() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ---- Modal system ---- */
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const modalSource = document.getElementById('modal-source');

function openModal({ title, emoji, text, source }) {
  if (!modalOverlay) return;
  if (modalTitle) modalTitle.textContent = title;
  if (modalImage) {
    modalImage.textContent = emoji || '🏛️';
  }
  if (modalText) modalText.innerHTML = text || '';
  if (modalSource) modalSource.textContent = source ? `Fuente: ${source}` : '';
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ---- Chatbot Widget (REMOVED) ---- */
function initChatbot() {
  // chatbot removed
  return;
  const toggle = document.querySelector('.chatbot-toggle');
  const panel = document.querySelector('.chatbot-panel');
  const closeBtn = document.querySelector('.chatbot-panel-close');
  const input = document.querySelector('.chatbot-panel input, .chat-input');
  const sendBtn = document.querySelector('.chatbot-panel .chat-send');
  const messagesContainer = document.querySelector('.chatbot-panel .chat-messages');

  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    panel.classList.toggle('open');
    if (panel.classList.contains('open') && messagesContainer && messagesContainer.children.length === 0) {
      appendBotMessage(G360_DATA.chatbot_responses.greetings);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', () => panel.classList.remove('open'));

  function appendBotMessage(text) {
    if (!messagesContainer) return;
    const msg = document.createElement('div');
    msg.className = 'chat-msg chat-msg--bot';
    msg.innerHTML = text;
    messagesContainer.appendChild(msg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function appendUserMessage(text) {
    if (!messagesContainer) return;
    const msg = document.createElement('div');
    msg.className = 'chat-msg chat-msg--user';
    msg.textContent = text;
    messagesContainer.appendChild(msg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function getBotResponse(userInput) {
    const lower = userInput.toLowerCase();
    const responses = G360_DATA.chatbot_responses;
    if (lower.includes('hola') || lower.includes('buenos') || lower.includes('buenas')) return responses.greetings;
    if (lower.includes('historia') || lower.includes('histor')) return responses.historia;
    if (lower.includes('departamento') || lower.includes('dónde') || lower.includes('donde') || lower.includes('ubic')) return responses.departamento;
    if (lower.includes('horario') || lower.includes('abre') || lower.includes('hora')) return responses.horarios;
    if (lower.includes('curios') || lower.includes('dato') || lower.includes('sab')) return responses.curiosidades;
    if (lower.includes('lugar') || lower.includes('similar') || lower.includes('recomiend') || lower.includes('visitar')) return responses.lugares;
    return responses.default;
  }

  function sendMessage() {
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    appendUserMessage(text);
    input.value = '';
    setTimeout(() => appendBotMessage(getBotResponse(text)), 600);
  }

  if (sendBtn) sendBtn.addEventListener('click', sendMessage);
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  }

  // Quick suggestion chips
  document.querySelectorAll('.chat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.textContent;
      appendUserMessage(text);
      setTimeout(() => appendBotMessage(getBotResponse(text)), 500);
    });
  });
}

/* ---- Render location cards (explorar.html) ---- */
function renderLocationCards(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !data) return;

  container.innerHTML = '';
  if (data.length === 0) {
    container.innerHTML = '<p class="text-center" style="padding:40px;color:var(--color-muted)">No se encontraron ubicaciones con los filtros aplicados.</p>';
    return;
  }

  data.forEach(loc => {
    const badgeStatus = loc.estado === 'disponible'
      ? '<span class="badge badge--green">● Disponible</span>'
      : '<span class="badge badge--coming">◌ Próximamente</span>';
    const btn360 = loc.tour_id
      ? `<a href="tour.html" class="card-360-btn">Ver 360°</a>`
      : `<span class="card-360-btn" style="opacity:0.5;cursor:default">Próximamente</span>`;

    container.innerHTML += `
      <div class="location-card" data-id="${loc.id}" data-tipo="${loc.tipo.toLowerCase()}" data-depto="${loc.departamento.toLowerCase()}">
        <div class="card-img-wrap">
          <span>${loc.emoji}</span>
          <div class="card-badge-wrap">${badgeStatus}</div>
          ${btn360}
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>${loc.departamento}</span>
            <span class="card-meta-dot"></span>
            <span>${loc.municipio}</span>
          </div>
          <h3 class="card-title">${loc.nombre}</h3>
          <p class="card-desc">${loc.descripcion_corta}</p>
          <div class="card-footer">
            <span class="card-category">📍 ${loc.tipo}</span>
            <a href="ubicacion.html" class="btn btn--ghost btn--sm" style="font-size:0.8rem">Ver ficha</a>
          </div>
        </div>
      </div>
    `;
  });
}

/* ---- Filtros en explorar.html ---- */
function initFilters() {
  const searchInput = document.getElementById('search-input');
  const filterDepto = document.getElementById('filter-depto');
  const filterTipo = document.getElementById('filter-tipo');
  const filterAcceso = document.getElementById('filter-acceso');
  const filterTags = document.querySelectorAll('.filter-tag');
  const container = document.getElementById('locations-grid');

  if (!container) return;

  let activeStatus = 'all';

  renderLocationCards(G360_DATA.ubicaciones, 'locations-grid');

  function applyFilters() {
    const searchVal = searchInput ? searchInput.value.toLowerCase() : '';
    const deptoVal = filterDepto ? filterDepto.value : '';
    const tipoVal = filterTipo ? filterTipo.value : '';
    const accesoVal = filterAcceso ? filterAcceso.value : '';

    const filtered = G360_DATA.ubicaciones.filter(loc => {
      const matchSearch = !searchVal
        || loc.nombre.toLowerCase().includes(searchVal)
        || loc.departamento.toLowerCase().includes(searchVal)
        || loc.tipo.toLowerCase().includes(searchVal);
      const matchDepto = !deptoVal || loc.departamento.toLowerCase() === deptoVal;
      const matchTipo = !tipoVal || loc.tipo.toLowerCase().includes(tipoVal);
      const matchAcceso = !accesoVal || loc.acceso === accesoVal;
      const matchStatus = activeStatus === 'all' || loc.estado === activeStatus;
      return matchSearch && matchDepto && matchTipo && matchAcceso && matchStatus;
    });

    renderLocationCards(filtered, 'locations-grid');

    const countEl = document.getElementById('results-count');
    if (countEl) countEl.textContent = `${filtered.length} ubicación${filtered.length !== 1 ? 'es' : ''} encontrada${filtered.length !== 1 ? 's' : ''}`;
  }

  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (filterDepto) filterDepto.addEventListener('change', applyFilters);
  if (filterTipo) filterTipo.addEventListener('change', applyFilters);
  if (filterAcceso) filterAcceso.addEventListener('change', applyFilters);

  filterTags.forEach(tag => {
    tag.addEventListener('click', () => {
      filterTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      activeStatus = tag.dataset.filter || 'all';
      applyFilters();
    });
  });
}

/* ---- Scroll reveal (basic) ---- */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.location-card, .category-card, .step-card, .dept-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(el);
  });
}

/* ---- Init on DOM ready ---- */
document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initFilters();
  setTimeout(initScrollReveal, 100);
});
