/**
 * AURELLE — Gemstone & Precious Material Explorer
 * Interactive Mohs hardness scale visualizer, refractive brilliance, and care inspector
 */

const AURELLE_GEMSTONE_EXPLORER = (function () {
  let activeGemId = 'gem-diamond';

  function init() {
    const root = document.getElementById('gemstone-explorer-root');
    if (!root) return;
    render();
  }

  function selectGem(id) {
    activeGemId = id;
    render();
  }

  function render() {
    const root = document.getElementById('gemstone-explorer-root');
    if (!root || !window.AURELLE_DATA) return;

    const gemstones = window.AURELLE_DATA.gemstones || [];
    const current = gemstones.find(g => g.id === activeGemId) || gemstones[0];

    let cardsHtml = '';
    gemstones.forEach(gem => {
      const isSelected = gem.id === current.id;
      const mohsPct = (gem.hardness / 10) * 100;

      cardsHtml += `
        <div class="gemstone-card ${isSelected ? 'active' : ''}" onclick="AURELLE_GEMSTONE_EXPLORER.selectGem('${gem.id}')">
          <div class="gemstone-header">
            <div>
              <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent-gold); font-weight: 600;">${gem.mineral}</span>
              <h4 style="font-size: 1.2rem; font-family: var(--font-serif); margin-top: 2px;">${gem.name}</h4>
            </div>
            <div class="gemstone-icon-circle">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                <polygon points="6 3 18 3 22 9 12 22 2 9 6 3"/>
              </svg>
            </div>
          </div>
          <div style="font-size: 0.75rem; color: var(--text-muted); display: flex; justify-content: space-between; margin-top: 0.5rem;">
            <span>Mohs Hardness</span>
            <strong style="color: var(--text-primary);">${gem.hardness} / 10</strong>
          </div>
          <div class="mohs-scale-bar">
            <div class="mohs-fill" style="width: ${mohsPct}%;"></div>
          </div>
          <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.75rem;">${gem.durability}</p>
          <span style="font-size: 0.725rem; color: var(--accent-gold); font-weight: 500;">Click to Inspect &rarr;</span>
        </div>
      `;
    });

    root.innerHTML = `
      <div class="grid grid-3" style="margin-bottom: 2.5rem;">
        ${cardsHtml}
      </div>
      <div style="background: var(--bg-card); border: 1px solid var(--border-accent); border-radius: var(--radius-sm); padding: 2rem; box-shadow: var(--shadow-md);">
        <div class="flex-between items-center" style="margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem;">
          <div>
            <span class="eyebrow" style="margin-bottom: 0.2rem;">Gemological Diagnostic Profile</span>
            <h3 style="font-size: 1.6rem;">${current.name} · Detailed Anatomy</h3>
          </div>
          <div style="text-align: right;">
            <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Refractive Index</span>
            <div style="font-size: 1.1rem; font-weight: 600; color: var(--accent-gold);">${current.refractiveIndex}</div>
          </div>
        </div>
        <div class="grid grid-2" style="gap: 2rem;">
          <div>
            <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 0.5rem;">Rarity & Origin Context</h4>
            <p style="font-size: 0.9rem; margin-bottom: 1.25rem;">${current.rarity}</p>
            <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 0.5rem;">Common High Jewelry Settings</h4>
            <p style="font-size: 0.9rem;">${current.uses}</p>
          </div>
          <div style="background: var(--bg-tertiary); padding: 1.5rem; border-radius: var(--radius-xs); border-left: 3px solid var(--accent-gold);">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-gold); margin-bottom: 0.5rem;">Expert Care Protocol</h4>
            <p style="font-size: 0.875rem; color: var(--text-primary); line-height: 1.6;">${current.care}</p>
          </div>
        </div>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', init);

  return {
    init,
    selectGem
  };
})();

window.AURELLE_GEMSTONE_EXPLORER = AURELLE_GEMSTONE_EXPLORER;
