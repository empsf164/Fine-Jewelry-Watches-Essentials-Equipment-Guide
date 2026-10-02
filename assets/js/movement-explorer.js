/**
 * AURELLE — Watch Movement Interactive Explorer
 * Interactive visualization of Manual Wind, Automatic, Quartz, and Tourbillon calibres
 */

const AURELLE_MOVEMENT_EXPLORER = (function () {
  let activeIndex = 0;

  function init() {
    const container = document.getElementById('movement-explorer-root');
    if (!container) return;

    renderExplorer();
  }

  function renderExplorer() {
    const container = document.getElementById('movement-explorer-root');
    if (!container || !window.AURELLE_DATA) return;

    const movements = window.AURELLE_DATA.movements || [];
    const current = movements[activeIndex] || movements[0];

    let tabsHtml = '';
    movements.forEach((mov, idx) => {
      tabsHtml += `
        <button class="movement-tab-btn ${idx === activeIndex ? 'active' : ''}" onclick="AURELLE_MOVEMENT_EXPLORER.selectMovement(${idx})">
          ${mov.name}
        </button>
      `;
    });

    container.innerHTML = `
      <div class="movement-tabs">${tabsHtml}</div>
      <div class="movement-display-grid">
        <div class="movement-schematic-box">
          ${current.diagramSvg}
          <div style="margin-top: 1rem; font-size: 0.75rem; color: var(--text-muted); font-style: italic;">
            Interactive Architecture: ${current.name}
          </div>
        </div>
        <div class="movement-info-box">
          <span class="eyebrow" style="margin-bottom: 0.25rem;">Horological Calibre Architecture</span>
          <h3 style="font-size: 1.85rem; margin-bottom: 0.5rem;">${current.name}</h3>
          <p class="lead-text" style="font-size: 0.95rem; margin-bottom: 1.5rem;">${current.characteristics}</p>
          
          <div class="movement-specs-list">
            <div class="movement-spec-item">
              <span class="movement-spec-label">Power Source</span>
              <div class="movement-spec-value">${current.powerSource}</div>
            </div>
            <div class="movement-spec-item">
              <span class="movement-spec-label">Beat Frequency</span>
              <div class="movement-spec-value">${current.frequency}</div>
            </div>
            <div class="movement-spec-item">
              <span class="movement-spec-label">Chronometric Precision</span>
              <div class="movement-spec-value">${current.accuracy}</div>
            </div>
            <div class="movement-spec-item">
              <span class="movement-spec-label">Service Overhaul</span>
              <div class="movement-spec-value">${current.maintenance}</div>
            </div>
          </div>

          <div style="margin-top: 2rem; display: flex; gap: 1rem;">
            <a href="discover.html?cat=watches" class="btn btn-outline btn-sm">Explore ${current.name.split(' ')[0]} Watches &rarr;</a>
          </div>
        </div>
      </div>
    `;
  }

  function selectMovement(index) {
    activeIndex = index;
    renderExplorer();
  }

  document.addEventListener('DOMContentLoaded', init);

  return {
    init,
    selectMovement
  };
})();

window.AURELLE_MOVEMENT_EXPLORER = AURELLE_MOVEMENT_EXPLORER;
