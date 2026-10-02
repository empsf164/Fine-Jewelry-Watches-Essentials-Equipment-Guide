/**
 * AURELLE — Bookmark & Saved Collection Manager
 * Manages saving watches, jewelry, equipment, guides, and comparisons
 */

const AURELLE_SAVED = (function () {
  const KEYS = {
    ITEMS: 'aurelle_saved_items',
    GUIDES: 'aurelle_saved_guides',
    COLLECTIONS: 'aurelle_saved_collections',
    COMPARISONS: 'aurelle_saved_comparisons'
  };

  // Helper to load list
  function getList(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || '[]');
    } catch (e) {
      return [];
    }
  }

  function setList(key, list) {
    localStorage.setItem(key, JSON.stringify(list));
    updateSavedCounters();
  }

  function isSaved(id, type = 'items') {
    const list = getList(KEYS[type.toUpperCase()] || KEYS.ITEMS);
    return list.some(item => (typeof item === 'string' ? item === id : item.id === id));
  }

  function toggleSave(itemOrId, type = 'items', metadata = {}) {
    const key = KEYS[type.toUpperCase()] || KEYS.ITEMS;
    let list = getList(key);
    const id = typeof itemOrId === 'object' ? itemOrId.id : itemOrId;
    const existsIndex = list.findIndex(entry => (typeof entry === 'string' ? entry === id : entry.id === id));

    let savedNow = false;
    let title = metadata.title || 'Item';

    if (existsIndex >= 0) {
      list.splice(existsIndex, 1);
      savedNow = false;
      showToast(`Removed from your saved collection`, 'info');
    } else {
      const entry = typeof itemOrId === 'object' ? itemOrId : { id, ...metadata, savedAt: new Date().toISOString() };
      list.push(entry);
      savedNow = true;
      showToast(`Saved "${title}" to your personal collection`, 'success');
    }

    setList(key, list);
    updateBookmarkButtons();
    return savedNow;
  }

  function getSavedItems() {
    return getList(KEYS.ITEMS);
  }

  function getSavedGuides() {
    return getList(KEYS.GUIDES);
  }

  function getSavedCollections() {
    return getList(KEYS.COLLECTIONS);
  }

  function getSavedComparisons() {
    return getList(KEYS.COMPARISONS);
  }

  function getTotalCount() {
    return getSavedItems().length + getSavedGuides().length + getSavedCollections().length + getSavedComparisons().length;
  }

  function updateSavedCounters() {
    const total = getTotalCount();
    document.querySelectorAll('.saved-counter-badge').forEach(badge => {
      badge.textContent = total;
      badge.style.display = total > 0 ? 'flex' : 'none';
    });
  }

  function updateBookmarkButtons() {
    document.querySelectorAll('[data-bookmark-id]').forEach(btn => {
      const id = btn.getAttribute('data-bookmark-id');
      const type = btn.getAttribute('data-bookmark-type') || 'items';
      const active = isSaved(id, type);

      if (active) {
        btn.classList.add('active');
        btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`;
      } else {
        btn.classList.remove('active');
        btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`;
      }
    });
  }

  function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'info' ? 'toast-removed' : ''}`;
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${type === 'success' 
          ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
          : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'fadeOut 0.3s ease forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateSavedCounters();
    updateBookmarkButtons();

    // Delegate bookmark button clicks
    document.body.addEventListener('click', e => {
      const btn = e.target.closest('[data-bookmark-id]');
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();

      const id = btn.getAttribute('data-bookmark-id');
      const type = btn.getAttribute('data-bookmark-type') || 'items';
      const title = btn.getAttribute('data-bookmark-title') || 'Item';
      toggleSave(id, type, { title });
    });
  });

  return {
    isSaved,
    toggleSave,
    getSavedItems,
    getSavedGuides,
    getSavedCollections,
    getSavedComparisons,
    getTotalCount,
    updateSavedCounters,
    showToast
  };
})();

window.AURELLE_SAVED = AURELLE_SAVED;
