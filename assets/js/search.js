/**
 * AURELLE — Global Search Controller
 * Modal Overlay with Live Grouped Search across all Knowledge Items
 */

const AURELLE_SEARCH = (function () {
  let searchModal = null;
  let searchInput = null;
  let resultsContainer = null;

  function init() {
    searchModal = document.getElementById('search-modal');
    searchInput = document.getElementById('search-input-field');
    resultsContainer = document.getElementById('search-results-list');

    if (!searchModal) {
      createSearchModalDOM();
    }

    bindEvents();
  }

  function createSearchModalDOM() {
    const modal = document.createElement('div');
    modal.id = 'search-modal';
    modal.className = 'search-modal';
    modal.innerHTML = `
      <div class="search-container">
        <div class="search-input-wrapper">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" id="search-input-field" class="search-input-field" placeholder="Search jewelry, watches, materials, movements, essentials..." autocomplete="off">
          <button id="search-clear-btn" class="search-clear-btn" style="display: none;">✕</button>
          <button id="search-close-btn" class="search-close-btn">ESC</button>
        </div>
        <div class="search-results-area">
          <div id="search-suggestions" class="search-suggestions-box">
            <span class="search-section-title">Popular Inquiries</span>
            <div class="search-tags">
              <span class="search-tag-chip" onclick="AURELLE_SEARCH.searchFor('Chronograph')">Chronograph</span>
              <span class="search-tag-chip" onclick="AURELLE_SEARCH.searchFor('Colombian Emerald')">Colombian Emerald</span>
              <span class="search-tag-chip" onclick="AURELLE_SEARCH.searchFor('18K Gold')">18K Gold</span>
              <span class="search-tag-chip" onclick="AURELLE_SEARCH.searchFor('10x Loupe')">10x Loupe</span>
              <span class="search-tag-chip" onclick="AURELLE_SEARCH.searchFor('Automatic')">Automatic Movement</span>
              <span class="search-tag-chip" onclick="AURELLE_SEARCH.searchFor('Water Resistance')">Water Resistance</span>
              <span class="search-tag-chip" onclick="AURELLE_SEARCH.searchFor('Platinum 950')">Platinum 950</span>
            </div>
          </div>
          <div id="search-results-list" class="search-results-list" style="display: none;"></div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    searchModal = modal;
    searchInput = document.getElementById('search-input-field');
    resultsContainer = document.getElementById('search-results-list');
  }

  function bindEvents() {
    // Open triggers
    document.querySelectorAll('.search-open-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        openModal();
      });
    });

    // Close triggers
    const closeBtn = document.getElementById('search-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    const clearBtn = document.getElementById('search-clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        performSearch('');
        searchInput.focus();
      });
    }

    // Modal background click
    searchModal.addEventListener('click', e => {
      if (e.target === searchModal) closeModal();
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', e => {
      if ((e.key === '/' || (e.ctrlKey && e.key === 'k') || (e.metaKey && e.key === 'k')) && !isTypingInInput(e)) {
        e.preventDefault();
        openModal();
      }
      if (e.key === 'Escape' && searchModal.classList.contains('open')) {
        closeModal();
      }
    });

    // Input search typing
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        const query = e.target.value.trim();
        const clearBtn = document.getElementById('search-clear-btn');
        if (clearBtn) clearBtn.style.display = query ? 'block' : 'none';
        performSearch(query);
      });
    }
  }

  function isTypingInInput(e) {
    const tag = (e.target.tagName || '').toLowerCase();
    return tag === 'input' || tag === 'textarea' || tag === 'select';
  }

  function openModal() {
    searchModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 100);
  }

  function closeModal() {
    searchModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function searchFor(query) {
    if (searchInput) {
      searchInput.value = query;
      const clearBtn = document.getElementById('search-clear-btn');
      if (clearBtn) clearBtn.style.display = 'block';
      performSearch(query);
      searchInput.focus();
    }
  }

  function performSearch(query) {
    const suggestions = document.getElementById('search-suggestions');
    if (!query) {
      if (suggestions) suggestions.style.display = 'block';
      if (resultsContainer) {
        resultsContainer.style.display = 'none';
        resultsContainer.innerHTML = '';
      }
      return;
    }

    if (suggestions) suggestions.style.display = 'none';
    if (resultsContainer) resultsContainer.style.display = 'flex';

    const q = query.toLowerCase();
    const data = window.AURELLE_DATA || {};

    // Match watches, jewelry, essentials, materials, gemstones, guides
    const matches = [];

    // Watches
    (data.watches || []).forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.overview.toLowerCase().includes(q) || item.subcategory.toLowerCase().includes(q)) {
        matches.push({ ...item, link: `details.html?id=${item.id}&type=watches` });
      }
    });

    // Jewelry
    (data.jewelry || []).forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.overview.toLowerCase().includes(q) || item.subcategory.toLowerCase().includes(q)) {
        matches.push({ ...item, link: `details.html?id=${item.id}&type=jewelry` });
      }
    });

    // Essentials
    (data.essentials || []).forEach(item => {
      if (item.title.toLowerCase().includes(q) || item.overview.toLowerCase().includes(q) || item.subcategory.toLowerCase().includes(q)) {
        matches.push({ ...item, link: `details.html?id=${item.id}&type=essentials` });
      }
    });

    // Guides
    (data.guides || []).forEach(guide => {
      if (guide.title.toLowerCase().includes(q) || guide.lead.toLowerCase().includes(q) || guide.category.toLowerCase().includes(q)) {
        matches.push({
          id: guide.id,
          title: guide.title,
          category: `Guide · ${guide.category}`,
          overview: guide.lead,
          image: guide.image,
          link: `guide-details.html?id=${guide.id}`
        });
      }
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          <p>No discoveries matched "<strong>${escapeHtml(query)}</strong>".</p>
          <p style="font-size: 0.825rem; margin-top: 0.5rem;">Try searching for gemstones, tourbillons, platinum, or loupes.</p>
        </div>
      `;
      return;
    }

    let html = `<div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent-gold); margin-bottom: 0.5rem;">${matches.length} Results Found</div>`;

    matches.forEach(item => {
      html += `
        <a href="${item.link}" class="search-result-item" onclick="AURELLE_SEARCH.closeModal()">
          <div style="display: flex; align-items: center; gap: 1rem; min-width: 0;">
            <img src="${item.image || 'assets/images/hero-chronograph.jpg'}" alt="${item.title}" style="width: 44px; height: 44px; border-radius: 4px; object-fit: cover; flex-shrink: 0;">
            <div style="min-width: 0;">
              <span style="font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-gold);">${item.category || item.subcategory || 'Catalog'}</span>
              <h4 style="font-size: 0.95rem; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.title}</h4>
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--text-muted); flex-shrink: 0;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      `;
    });

    resultsContainer.innerHTML = html;
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m]);
  }

  document.addEventListener('DOMContentLoaded', init);

  return {
    openModal,
    closeModal,
    searchFor
  };
})();

window.AURELLE_SEARCH = AURELLE_SEARCH;
