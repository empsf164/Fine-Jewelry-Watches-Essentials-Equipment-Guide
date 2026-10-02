/**
 * AURELLE — Faceted Discovery & Filter Controller
 * Drives discover.html filtering, sorting, active chips, and dynamic card rendering
 */

const AURELLE_FILTERS = (function () {
  let activeCategory = 'all';
  let activeFacets = {
    materials: [],
    gemstones: [],
    movements: [],
    subcategories: []
  };
  let activeSort = 'featured';
  let searchQuery = '';

  function init() {
    const grid = document.getElementById('discover-grid');
    if (!grid) return; // Only runs on pages with discover grid

    // Read URL params
    const params = new URLSearchParams(window.location.search);
    if (params.get('cat')) {
      activeCategory = params.get('cat').toLowerCase();
    }
    if (params.get('q')) {
      searchQuery = params.get('q');
      const searchInput = document.getElementById('discover-search-input');
      if (searchInput) searchInput.value = searchQuery;
    }

    bindFilterEvents();
    renderActiveFilterChips();
    applyFiltersAndRender();
  }

  function bindFilterEvents() {
    // Category tabs/buttons
    document.querySelectorAll('[data-filter-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-filter-cat]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-filter-cat').toLowerCase();
        applyFiltersAndRender();
      });
    });

    // Checkbox facets
    document.querySelectorAll('.facet-checkbox').forEach(box => {
      box.addEventListener('change', e => {
        const type = box.getAttribute('data-facet-type');
        const val = box.value;
        if (box.checked) {
          if (!activeFacets[type].includes(val)) activeFacets[type].push(val);
        } else {
          activeFacets[type] = activeFacets[type].filter(v => v !== val);
        }
        renderActiveFilterChips();
        applyFiltersAndRender();
      });
    });

    // Sort select
    const sortSelect = document.getElementById('discover-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', e => {
        activeSort = e.target.value;
        applyFiltersAndRender();
      });
    }

    // Search bar on page
    const searchInput = document.getElementById('discover-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        searchQuery = e.target.value.trim().toLowerCase();
        applyFiltersAndRender();
      });
    }

    // Clear all button
    const clearAllBtn = document.getElementById('clear-all-filters-btn');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', clearAllFilters);
    }
  }

  function clearAllFilters() {
    activeCategory = 'all';
    activeFacets = { materials: [], gemstones: [], movements: [], subcategories: [] };
    searchQuery = '';

    const searchInput = document.getElementById('discover-search-input');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('.facet-checkbox').forEach(box => (box.checked = false));
    document.querySelectorAll('[data-filter-cat]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter-cat') === 'all');
    });

    renderActiveFilterChips();
    applyFiltersAndRender();
  }

  function removeFacet(type, val) {
    activeFacets[type] = activeFacets[type].filter(v => v !== val);
    const box = document.querySelector(`.facet-checkbox[data-facet-type="${type}"][value="${val}"]`);
    if (box) box.checked = false;
    renderActiveFilterChips();
    applyFiltersAndRender();
  }

  function renderActiveFilterChips() {
    const chipsContainer = document.getElementById('active-filter-chips');
    if (!chipsContainer) return;

    let chipsHtml = '';
    let totalFacets = 0;

    Object.keys(activeFacets).forEach(type => {
      activeFacets[type].forEach(val => {
        totalFacets++;
        chipsHtml += `
          <div class="filter-chip">
            <span>${val}</span>
            <button onclick="AURELLE_FILTERS.removeFacet('${type}', '${val}')" title="Remove filter">✕</button>
          </div>
        `;
      });
    });

    if (totalFacets > 0) {
      chipsHtml += `<button onclick="AURELLE_FILTERS.clearAllFilters()" class="btn-text" style="font-size: 0.75rem; margin-left: 0.5rem;">Clear All</button>`;
      chipsContainer.style.display = 'flex';
    } else {
      chipsContainer.style.display = 'none';
    }

    chipsContainer.innerHTML = chipsHtml;
  }

  function applyFiltersAndRender() {
    const grid = document.getElementById('discover-grid');
    const resultCountEl = document.getElementById('discover-result-count');
    if (!grid) return;

    const data = window.AURELLE_DATA || {};
    let allItems = [];

    // Collect all catalog items
    (data.watches || []).forEach(i => allItems.push({ ...i, sectionType: 'watches' }));
    (data.jewelry || []).forEach(i => allItems.push({ ...i, sectionType: 'jewelry' }));
    (data.essentials || []).forEach(i => allItems.push({ ...i, sectionType: 'essentials' }));

    // Filter by Category Tab
    if (activeCategory !== 'all') {
      allItems = allItems.filter(item => {
        return item.category.toLowerCase() === activeCategory || (item.subcategory && item.subcategory.toLowerCase() === activeCategory);
      });
    }

    // Filter by Search Query
    if (searchQuery) {
      allItems = allItems.filter(item => {
        const txt = `${item.title} ${item.overview} ${item.tagline} ${item.category} ${item.subcategory || ''}`.toLowerCase();
        return txt.includes(searchQuery);
      });
    }

    // Filter by Facets (materials, gemstones, subcategories)
    if (activeFacets.materials.length > 0) {
      allItems = allItems.filter(item => {
        const itemMats = JSON.stringify(item.materials || []).toLowerCase() + ' ' + (item.specs?.metal || '').toLowerCase() + ' ' + (item.specs?.caseMaterial || '').toLowerCase();
        return activeFacets.materials.some(m => itemMats.includes(m.toLowerCase()));
      });
    }

    if (activeFacets.gemstones.length > 0) {
      allItems = allItems.filter(item => {
        const itemGems = (item.specs?.gemstone || '').toLowerCase() + ' ' + item.title.toLowerCase();
        return activeFacets.gemstones.some(g => itemGems.includes(g.toLowerCase()));
      });
    }

    if (activeFacets.movements.length > 0) {
      allItems = allItems.filter(item => {
        const itemMov = (item.specs?.movement || '').toLowerCase() + ' ' + (item.subcategory || '').toLowerCase();
        return activeFacets.movements.some(m => itemMov.includes(m.toLowerCase()));
      });
    }

    // Sorting
    if (activeSort === 'newest') {
      allItems.reverse();
    } else if (activeSort === 'rating') {
      allItems.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    // Update Result Counter
    if (resultCountEl) {
      resultCountEl.textContent = `${allItems.length} Discoveries`;
    }

    if (allItems.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <h3>No Discoveries Match Your Criteria</h3>
          <p>Try resetting active filters or searching for terms like "emerald", "gold", "chronograph", or "loupe".</p>
          <button onclick="AURELLE_FILTERS.clearAllFilters()" class="btn btn-primary btn-sm">Reset All Filters</button>
        </div>
      `;
      return;
    }

    let cardsHtml = '';
    allItems.forEach(item => {
      const isSaved = window.AURELLE_SAVED ? window.AURELLE_SAVED.isSaved(item.id, 'items') : false;
      const isInCompare = window.AURELLE_COMPARE ? window.AURELLE_COMPARE.isInCompare(item.id) : false;

      cardsHtml += `
        <article class="editorial-card">
          <div class="card-media">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="card-actions-float">
              <button class="btn-icon ${isSaved ? 'active' : ''}" data-bookmark-id="${item.id}" data-bookmark-type="items" data-bookmark-title="${item.title}" title="Save Discovery">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              </button>
              <button class="btn-icon ${isInCompare ? 'active' : ''}" data-compare-id="${item.id}" data-compare-title="${item.title}" data-compare-image="${item.image}" data-compare-category="${item.category}" title="Add to Compare">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </button>
            </div>
          </div>
          <div class="card-content">
            <div class="flex-between items-center" style="margin-bottom: 0.4rem;">
              <span class="card-category">${item.category} · ${item.subcategory || 'Reference'}</span>
              <span class="badge ${item.badge === 'Rare Gem' || item.badge === 'Masterpiece' ? 'badge-gold' : ''}">${item.badge || 'Essential'}</span>
            </div>
            <h3 class="card-title"><a href="details.html?id=${item.id}&type=${item.sectionType}">${item.title}</a></h3>
            <p class="card-desc">${item.tagline || item.overview}</p>
            <div class="card-footer">
              <span style="font-size: 0.75rem; color: var(--accent-gold); font-weight: 500;">${item.priceGuide || 'Editorial Catalog'}</span>
              <a href="details.html?id=${item.id}&type=${item.sectionType}" class="btn-text" style="font-size: 0.775rem;">Explore Spec &rarr;</a>
            </div>
          </div>
        </article>
      `;
    });

    grid.innerHTML = cardsHtml;
  }

  document.addEventListener('DOMContentLoaded', init);

  return {
    init,
    clearAllFilters,
    removeFacet,
    applyFiltersAndRender
  };
})();

window.AURELLE_FILTERS = AURELLE_FILTERS;
