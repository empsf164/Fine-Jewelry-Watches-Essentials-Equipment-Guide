/**
 * AURELLE — Comparison Workflow Engine
 * Manages comparing 2-4 items across Watches, Jewelry, and Equipment
 */

const AURELLE_COMPARE = (function () {
  const STORAGE_KEY = 'aurelle_compare_items';
  const MAX_COMPARE_ITEMS = 4;

  function getCompareList() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  function setCompareList(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    renderFloatingTray();
    updateCompareButtons();
  }

  function isInCompare(id) {
    return getCompareList().some(item => (typeof item === 'string' ? item === id : item.id === id));
  }

  function addToCompare(itemOrId, metadata = {}) {
    let list = getCompareList();
    const id = typeof itemOrId === 'object' ? itemOrId.id : itemOrId;

    if (list.length >= MAX_COMPARE_ITEMS && !isInCompare(id)) {
      if (window.AURELLE_SAVED) {
        window.AURELLE_SAVED.showToast(`Maximum ${MAX_COMPARE_ITEMS} items can be compared simultaneously.`, 'info');
      }
      return false;
    }

    if (isInCompare(id)) {
      removeFromCompare(id);
      return false;
    }

    // Resolve full item data if not passed
    let fullItem = typeof itemOrId === 'object' ? itemOrId : findItemById(id);
    if (!fullItem) {
      fullItem = { id, title: metadata.title || 'Item', image: metadata.image || 'assets/images/hero-chronograph.jpg', category: metadata.category || 'Watches' };
    }

    list.push(fullItem);
    setCompareList(list);

    if (window.AURELLE_SAVED) {
      window.AURELLE_SAVED.showToast(`Added "${fullItem.title}" to comparison tray`, 'success');
    }
    return true;
  }

  function removeFromCompare(id) {
    let list = getCompareList().filter(item => (typeof item === 'string' ? item !== id : item.id !== id));
    setCompareList(list);
    if (window.AURELLE_SAVED) {
      window.AURELLE_SAVED.showToast('Item removed from comparison', 'info');
    }
  }

  function clearCompare() {
    localStorage.removeItem(STORAGE_KEY);
    renderFloatingTray();
    updateCompareButtons();
    if (window.location.pathname.includes('compare.html')) {
      window.location.reload();
    }
  }

  function findItemById(id) {
    if (!window.AURELLE_DATA) return null;
    const all = [
      ...(window.AURELLE_DATA.watches || []),
      ...(window.AURELLE_DATA.jewelry || []),
      ...(window.AURELLE_DATA.essentials || [])
    ];
    return all.find(i => i.id === id) || null;
  }

  function updateCompareButtons() {
    document.querySelectorAll('[data-compare-id]').forEach(btn => {
      const id = btn.getAttribute('data-compare-id');
      const inTray = isInCompare(id);

      if (inTray) {
        btn.classList.add('active');
        btn.title = 'Remove from Compare';
        btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
      } else {
        btn.classList.remove('active');
        btn.title = 'Add to Compare';
        btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`;
      }
    });
  }

  function renderFloatingTray() {
    let tray = document.querySelector('.compare-floating-tray');
    const list = getCompareList();

    if (list.length === 0) {
      if (tray) tray.classList.remove('visible');
      return;
    }

    if (!tray) {
      tray = document.createElement('div');
      tray.className = 'compare-floating-tray';
      document.body.appendChild(tray);
    }

    let slotsHtml = '';
    for (let i = 0; i < MAX_COMPARE_ITEMS; i++) {
      const item = list[i];
      if (item) {
        slotsHtml += `
          <div class="compare-tray-slot" title="${item.title}">
            <img src="${item.image || 'assets/images/hero-chronograph.jpg'}" alt="${item.title}">
            <button class="slot-remove" onclick="AURELLE_COMPARE.removeFromCompare('${item.id}')" title="Remove">×</button>
          </div>
        `;
      } else {
        slotsHtml += `<div class="compare-tray-slot" style="opacity: 0.35;"><span style="font-size: 11px; color: var(--text-muted);">+ Slot</span></div>`;
      }
    }

    tray.innerHTML = `
      <div style="display: flex; flex-direction: column;">
        <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent-gold); font-weight: 600;">Comparison Tray</span>
        <span style="font-size: 0.8rem; color: var(--text-secondary);">${list.length} of ${MAX_COMPARE_ITEMS} items selected</span>
      </div>
      <div class="compare-tray-items">${slotsHtml}</div>
      <div style="display: flex; gap: 0.6rem; align-items: center;">
        <a href="compare.html" class="btn btn-primary btn-sm">Compare Specs</a>
        <button onclick="AURELLE_COMPARE.clearCompare()" class="btn btn-outline btn-sm" title="Clear all">Clear</button>
      </div>
    `;

    tray.classList.add('visible');
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderFloatingTray();
    updateCompareButtons();

    // Delegate comparison buttons
    document.body.addEventListener('click', e => {
      const btn = e.target.closest('[data-compare-id]');
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();

      const id = btn.getAttribute('data-compare-id');
      const title = btn.getAttribute('data-compare-title');
      const image = btn.getAttribute('data-compare-image');
      const category = btn.getAttribute('data-compare-category');
      addToCompare(id, { title, image, category });
    });
  });

  return {
    getCompareList,
    isInCompare,
    addToCompare,
    removeFromCompare,
    clearCompare,
    renderFloatingTray,
    findItemById
  };
})();

window.AURELLE_COMPARE = AURELLE_COMPARE;
