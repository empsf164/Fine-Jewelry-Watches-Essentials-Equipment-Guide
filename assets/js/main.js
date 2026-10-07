/**
 * AURELLE — Main Global Application Controller
 * Dynamic page loaders, Mobile Drawer, Sticky Header, and Global Helpers
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  highlightActiveNavLink();
  initPageLoaders();
});

/* --------------------------------------------------------------------------
   1. STICKY HEADER
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER & ACCORDIONS
   -------------------------------------------------------------------------- */
function initMobileNavigation() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const closeBtn = document.querySelector('.mobile-nav-close');

  if (!hamburgerBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  hamburgerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Mobile Accordion Toggles
  document.querySelectorAll('.mobile-accordion-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      const content = toggle.nextElementSibling;
      if (!content || !content.classList.contains('mobile-accordion-content')) {
        return; // Allow standard link click through
      }
      e.preventDefault();
      const isOpen = content.classList.contains('open');

      // Close other open accordions
      document.querySelectorAll('.mobile-accordion-content').forEach(c => c.classList.remove('open'));
      document.querySelectorAll('.mobile-accordion-toggle').forEach(t => t.classList.remove('active'));

      if (!isOpen) {
        content.classList.add('open');
        toggle.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. HIGHLIGHT ACTIVE NAV LINK
   -------------------------------------------------------------------------- */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const params = new URLSearchParams(window.location.search);
  const catParam = (params.get('cat') || '').toLowerCase();
  const typeParam = (params.get('type') || '').toLowerCase();
  const idParam = (params.get('id') || '').toLowerCase();

  // Reset existing active classes
  document.querySelectorAll('.nav-link, .mobile-accordion-toggle, .mobile-nav-links a').forEach(link => {
    link.classList.remove('active');
  });

  const watchCategories = ['watches', 'mechanical', 'automatic', 'quartz', 'dress-watches', 'dive-watches', 'chronographs', 'complications'];
  const jewelryCategories = ['jewelry', 'rings', 'necklaces', 'earrings', 'bracelets', 'brooches', 'materials', 'gemstones'];

  // Determine logical active section
  let activeSection = null;
  if (currentPath === 'index.html' || currentPath === '') {
    activeSection = 'home';
  } else if (currentPath === 'about.html') {
    activeSection = 'about';
  } else if (currentPath === 'essentials.html' || catParam === 'essentials' || typeParam === 'essentials' || idParam.startsWith('essential-')) {
    activeSection = 'essentials';
  } else if (currentPath === 'guides.html' || currentPath === 'guide-details.html') {
    activeSection = 'guides';
  } else if (currentPath === 'contact.html') {
    activeSection = 'contact';
  } else if (watchCategories.includes(catParam) || typeParam === 'watches' || idParam.startsWith('watch-')) {
    activeSection = 'watches';
  } else if (jewelryCategories.includes(catParam) || typeParam === 'jewelry' || idParam.startsWith('jewelry-')) {
    activeSection = 'jewelry';
  } else if (currentPath === 'discover.html') {
    activeSection = 'jewelry'; // default fallback for discover
  }

  // Apply active class to desktop and mobile nav
  if (activeSection === 'home') {
    document.querySelectorAll('a[href="index.html"].nav-link, a[href="index.html"].mobile-accordion-toggle').forEach(el => el.classList.add('active'));
  } else if (activeSection === 'about') {
    document.querySelectorAll('a[href="about.html"].nav-link, a[href="about.html"].mobile-accordion-toggle').forEach(el => el.classList.add('active'));
  } else if (activeSection === 'watches') {
    document.querySelectorAll('.nav-link').forEach(el => {
      if (el.textContent.toLowerCase().includes('watches')) el.classList.add('active');
    });
    // In mobile drawer open watches accordion if on watches page
    const watchToggle = Array.from(document.querySelectorAll('.mobile-accordion-toggle')).find(b => b.textContent.toLowerCase().includes('watches'));
    if (watchToggle) {
      watchToggle.classList.add('active');
      const content = watchToggle.nextElementSibling;
      if (content && content.classList.contains('mobile-accordion-content')) {
        content.classList.add('open');
      }
    }
  } else if (activeSection === 'jewelry') {
    document.querySelectorAll('.nav-link').forEach(el => {
      if (el.textContent.toLowerCase().includes('jewelry')) el.classList.add('active');
    });
    const jewToggle = Array.from(document.querySelectorAll('.mobile-accordion-toggle')).find(b => b.textContent.toLowerCase().includes('jewelry'));
    if (jewToggle) {
      jewToggle.classList.add('active');
    }
  } else if (activeSection === 'essentials') {
    document.querySelectorAll('a[href="essentials.html"].nav-link, a[href="essentials.html"].mobile-accordion-toggle').forEach(el => el.classList.add('active'));
  } else if (activeSection === 'guides') {
    document.querySelectorAll('a[href="guides.html"].nav-link, a[href="guides.html"].mobile-accordion-toggle').forEach(el => el.classList.add('active'));
  } else if (activeSection === 'contact') {
    document.querySelectorAll('a[href="contact.html"].nav-link, a[href="contact.html"].mobile-accordion-toggle').forEach(el => el.classList.add('active'));
  }
}

/* --------------------------------------------------------------------------
   4. DYNAMIC PAGE LOADERS
   -------------------------------------------------------------------------- */
function initPageLoaders() {
  const path = window.location.pathname;

  if (path.includes('details.html')) {
    renderDetailsPage();
  } else if (path.includes('guide-details.html')) {
    renderGuideDetailsPage();
  } else if (path.includes('compare.html')) {
    renderComparePage();
  } else if (path.includes('saved.html')) {
    renderSavedPage();
  } else if (path.includes('collections.html')) {
    renderCollectionsPage();
  }
}

/* --------------------------------------------------------------------------
   5. DETAILS PAGE RENDERER (`details.html`)
   -------------------------------------------------------------------------- */
function renderDetailsPage() {
  const root = document.getElementById('details-root');
  if (!root || !window.AURELLE_DATA) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'watch-chronograph-rose';
  const type = params.get('type') || 'watches';

  let item = null;
  const data = window.AURELLE_DATA;
  const all = [...(data.watches || []), ...(data.jewelry || []), ...(data.essentials || [])];
  item = all.find(i => i.id === id) || all[0];

  const isSaved = window.AURELLE_SAVED ? window.AURELLE_SAVED.isSaved(item.id, 'items') : false;
  const isInCompare = window.AURELLE_COMPARE ? window.AURELLE_COMPARE.isInCompare(item.id) : false;

  // Render specifications rows
  let specsHtml = '';
  if (item.specs) {
    Object.entries(item.specs).forEach(([key, val]) => {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      specsHtml += `
        <div class="spec-sheet-item">
          <span class="spec-sheet-key">${formattedKey}</span>
          <div class="spec-sheet-val">${val}</div>
        </div>
      `;
    });
  }

  // Render materials breakdown
  let materialsHtml = '';
  if (item.materials) {
    item.materials.forEach(mat => {
      materialsHtml += `
        <div style="padding: 1.25rem; background: var(--bg-tertiary); border-radius: var(--radius-xs); margin-bottom: 0.75rem; border-left: 2px solid var(--accent-gold);">
          <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 0.25rem;">${mat.name}</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">${mat.desc}</p>
        </div>
      `;
    });
  }

  // Render Care guidelines
  let careHtml = '';
  if (item.care) {
    item.care.forEach(step => {
      careHtml += `
        <li style="margin-bottom: 0.75rem; font-size: 0.9rem; color: var(--text-secondary);">${step}</li>
      `;
    });
  }

  // Render Things to Know
  let knowHtml = '';
  if (item.thingsToKnow) {
    item.thingsToKnow.forEach(fact => {
      knowHtml += `
        <li style="margin-bottom: 0.75rem; font-size: 0.9rem; color: var(--text-secondary);">${fact}</li>
      `;
    });
  }

  root.innerHTML = `
    <div class="container section">
      <nav style="margin-bottom: 2rem; font-size: 0.8rem; color: var(--text-muted);">
        <a href="index.html" style="color: var(--text-muted);">Home</a> / 
        <a href="discover.html?cat=${item.category.toLowerCase()}" style="color: var(--text-muted);">${item.category}</a> / 
        <span style="color: var(--accent-gold);">${item.title}</span>
      </nav>

      <div class="details-hero-grid">
        <!-- Gallery Section -->
        <div class="details-gallery">
          <img id="main-details-img" class="details-main-img" src="${item.image}" alt="${item.title}">
          <div class="details-thumbs-row">
            <img class="details-thumb active" src="${item.image}" alt="View 1" onclick="document.getElementById('main-details-img').src='${item.image}'">
            <img class="details-thumb" src="assets/images/hero-watch-movement.jpg" alt="View 2" onclick="document.getElementById('main-details-img').src='assets/images/hero-watch-movement.jpg'">
            <img class="details-thumb" src="assets/images/hero-craftsman-tools.jpg" alt="View 3" onclick="document.getElementById('main-details-img').src='assets/images/hero-craftsman-tools.jpg'">
          </div>
        </div>

        <!-- Content Area -->
        <div class="details-content">
          <div class="flex-between items-center" style="margin-bottom: 0.5rem;">
            <span class="eyebrow">${item.category} · ${item.subcategory || 'Reference Specification'}</span>
            <span class="badge ${item.badge === 'Rare Gem' || item.badge === 'Masterpiece' ? 'badge-gold' : ''}">${item.badge || 'Essential'}</span>
          </div>
          <h1 style="font-size: clamp(2rem, 3.5vw, 2.8rem); margin-bottom: 0.75rem;">${item.title}</h1>
          <p class="lead-text" style="margin-bottom: 1.5rem;">${item.tagline || item.overview}</p>

          <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 2.5rem; flex-wrap: wrap;">
            <button class="btn btn-primary" data-bookmark-id="${item.id}" data-bookmark-type="items" data-bookmark-title="${item.title}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              <span>${isSaved ? 'Saved in Collection' : 'Save Discovery'}</span>
            </button>
            <button class="btn btn-outline" data-compare-id="${item.id}" data-compare-title="${item.title}" data-compare-image="${item.image}" data-compare-category="${item.category}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              <span>${isInCompare ? 'Remove from Compare' : 'Add to Compare'}</span>
            </button>
          </div>

          <!-- Tabs -->
          <div class="details-tabs">
            <button class="details-tab-btn active" onclick="switchDetailTab('tab-overview', this)">Overview</button>
            <button class="details-tab-btn" onclick="switchDetailTab('tab-specs', this)">Specifications</button>
            <button class="details-tab-btn" onclick="switchDetailTab('tab-materials', this)">Materials & Craft</button>
            <button class="details-tab-btn" onclick="switchDetailTab('tab-care', this)">Care & Protocols</button>
            <button class="details-tab-btn" onclick="switchDetailTab('tab-know', this)">Things to Know</button>
          </div>

          <!-- Tab Content Panes -->
          <div id="tab-overview" class="detail-pane active">
            <p style="font-size: 1rem; line-height: 1.8; margin-bottom: 1.5rem;">${item.overview}</p>
            <div style="background: var(--bg-tertiary); padding: 1.5rem; border-radius: var(--radius-xs); border: 1px solid var(--border-subtle);">
              <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent-gold); margin-bottom: 0.5rem;">Curator’s Evaluation</h4>
              <p style="font-size: 0.9rem; color: var(--text-secondary);">An exemplary reference showcasing uncompromising attention to dimensional proportions, longevity, and timeless aesthetic restraint.</p>
            </div>
          </div>

          <div id="tab-specs" class="detail-pane" style="display: none;">
            <div class="spec-sheet-grid">${specsHtml}</div>
          </div>

          <div id="tab-materials" class="detail-pane" style="display: none;">
            ${materialsHtml || '<p>Detailed material alloy compositions available upon request.</p>'}
          </div>

          <div id="tab-care" class="detail-pane" style="display: none;">
            <ul style="padding-left: 1.25rem;">${careHtml}</ul>
          </div>

          <div id="tab-know" class="detail-pane" style="display: none;">
            <ul style="padding-left: 1.25rem;">${knowHtml}</ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.switchDetailTab = function (paneId, btn) {
  document.querySelectorAll('.detail-pane').forEach(p => (p.style.display = 'none'));
  document.querySelectorAll('.details-tab-btn').forEach(b => b.classList.remove('active'));
  const target = document.getElementById(paneId);
  if (target) target.style.display = 'block';
  if (btn) btn.classList.add('active');
};

/* --------------------------------------------------------------------------
   6. GUIDE DETAILS PAGE RENDERER (`guide-details.html`)
   -------------------------------------------------------------------------- */
function renderGuideDetailsPage() {
  const root = document.getElementById('guide-details-root');
  if (!root || !window.AURELLE_DATA) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'guide-water-resistance';

  const guide = (window.AURELLE_DATA.guides || []).find(g => g.id === id) || window.AURELLE_DATA.guides[0];
  const isSaved = window.AURELLE_SAVED ? window.AURELLE_SAVED.isSaved(guide.id, 'guides') : false;

  root.innerHTML = `
    <article class="container section-sm" style="max-width: 860px;">
      <nav style="margin-bottom: 2rem; font-size: 0.8rem; color: var(--text-muted);">
        <a href="index.html" style="color: var(--text-muted);">Home</a> / 
        <a href="guides.html" style="color: var(--text-muted);">Editorial Guides</a> / 
        <span style="color: var(--accent-gold);">${guide.category}</span>
      </nav>

      <header style="margin-bottom: 2.5rem; text-align: center;">
        <span class="eyebrow">${guide.category} · ${guide.readingTime}</span>
        <h1 style="font-size: clamp(2.2rem, 4vw, 3.4rem); line-height: 1.2; margin-bottom: 1.25rem;">${guide.title}</h1>
        <div style="display: flex; justify-content: center; align-items: center; gap: 1.5rem; font-size: 0.85rem; color: var(--text-muted);">
          <span>By ${guide.author}</span>
          <span>•</span>
          <span>${guide.publishDate}</span>
          <span>•</span>
          <button class="btn-text" data-bookmark-id="${guide.id}" data-bookmark-type="guides" data-bookmark-title="${guide.title}" style="font-size: 0.8rem;">
            ${isSaved ? '★ Saved to Reading List' : '☆ Save Article'}
          </button>
        </div>
      </header>

      <div style="border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 2.5rem; border: 1px solid var(--border-subtle);">
        <img src="${guide.image}" alt="${guide.title}" style="width: 100%; max-height: 480px; object-fit: cover;">
      </div>

      <div class="lead-text" style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 2rem; font-family: var(--font-serif); line-height: 1.7; border-left: 2px solid var(--accent-gold); padding-left: 1.5rem;">
        ${guide.lead}
      </div>

      <div class="article-body" style="font-size: 1rem; line-height: 1.8; color: var(--text-secondary);">
        ${guide.contentHtml}
      </div>

      <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
        <a href="guides.html" class="btn btn-outline btn-sm">&larr; Back to Editorial Library</a>
        <button class="btn btn-primary btn-sm" data-bookmark-id="${guide.id}" data-bookmark-type="guides" data-bookmark-title="${guide.title}">
          Save Guide for Reference
        </button>
      </div>
    </article>
  `;
}

/* --------------------------------------------------------------------------
   7. COMPARE PAGE RENDERER (`compare.html`)
   -------------------------------------------------------------------------- */
function renderComparePage() {
  const root = document.getElementById('compare-root');
  if (!root || !window.AURELLE_COMPARE) return;

  const compareList = window.AURELLE_COMPARE.getCompareList();
  const fullItems = compareList.map(item => window.AURELLE_COMPARE.findItemById(item.id) || item);

  if (fullItems.length === 0) {
    root.innerHTML = `
      <div class="container section">
        <div class="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          <h3>Your Comparison Tray is Empty</h3>
          <p>Select up to 4 watches, jewelry pieces, or equipment items from the catalog to compare technical specifications side-by-side.</p>
          <a href="discover.html" class="btn btn-primary">Browse Discovery Catalog</a>
        </div>
      </div>
    `;
    return;
  }

  // Build matrix attributes
  const attributes = [
    { label: 'Category', key: 'category' },
    { label: 'Classification', key: 'subcategory' },
    { label: 'Price Guide', key: 'priceGuide' },
    { label: 'Rating', key: 'rating', format: val => `${val || '4.9'} / 5.0 ★` }
  ];

  // Specific watch specs
  const watchKeys = ['movement', 'caseMaterial', 'caseDiameter', 'caseThickness', 'waterResistance', 'powerReserve', 'complications', 'strap'];
  // Jewelry specs
  const jewelryKeys = ['metal', 'gemstone', 'caratWeight', 'cut', 'colorGrade', 'clarity', 'dimensions'];
  // Equipment specs
  const equipKeys = ['magnification', 'bodyMaterial', 'tipMaterial', 'compatibility', 'capacity', 'origin'];

  const allKeys = Array.from(new Set([...watchKeys, ...jewelryKeys, ...equipKeys]));

  let headerColsHtml = '<th>Specification</th>';
  fullItems.forEach(item => {
    headerColsHtml += `
      <td style="text-align: center; min-width: 220px;">
        <div class="compare-table-product-card">
          <button onclick="AURELLE_COMPARE.removeFromCompare('${item.id}'); renderComparePage();" class="btn-text" style="color: var(--error); font-size: 0.75rem; margin-bottom: 0.5rem;">✕ Remove</button>
          <img src="${item.image}" alt="${item.title}">
          <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-gold);">${item.category}</span>
          <h4 style="font-size: 1rem; margin: 0.25rem 0 0.75rem;"><a href="details.html?id=${item.id}">${item.title}</a></h4>
          <a href="details.html?id=${item.id}" class="btn btn-outline btn-sm" style="width: 100%; font-size: 0.7rem;">View Detail</a>
        </div>
      </td>
    `;
  });

  let rowsHtml = '';
  // Top Attributes
  attributes.forEach(attr => {
    rowsHtml += `<tr><th>${attr.label}</th>`;
    fullItems.forEach(item => {
      const val = item[attr.key] || '—';
      rowsHtml += `<td>${attr.format ? attr.format(val) : val}</td>`;
    });
    rowsHtml += '</tr>';
  });

  // Dynamic Specs
  allKeys.forEach(specKey => {
    // Check if at least one item has this spec
    const hasAny = fullItems.some(i => i.specs && i.specs[specKey]);
    if (!hasAny) return;

    const formattedKey = specKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    rowsHtml += `<tr><th>${formattedKey}</th>`;
    fullItems.forEach(item => {
      const val = item.specs ? item.specs[specKey] || '—' : '—';
      rowsHtml += `<td>${val}</td>`;
    });
    rowsHtml += '</tr>';
  });

  root.innerHTML = `
    <div class="container section">
      <div class="section-header text-left">
        <span class="eyebrow">Side-by-Side Comparison Engine</span>
        <h1>Technical Comparison Matrix</h1>
        <p>Comparing ${fullItems.length} curated reference pieces across metallurgy, dimensions, mechanics, and maintenance.</p>
      </div>

      <div class="flex-between items-center" style="margin-bottom: 1.5rem;">
        <div style="font-size: 0.85rem; color: var(--text-muted);">${fullItems.length} of 4 Slots Occupied</div>
        <div style="display: flex; gap: 0.75rem;">
          <a href="discover.html" class="btn btn-outline btn-sm">+ Add Another Item</a>
          <button onclick="AURELLE_COMPARE.clearCompare(); renderComparePage();" class="btn btn-outline btn-sm" style="color: var(--error);">Clear Matrix</button>
        </div>
      </div>

      <div class="compare-table-wrapper">
        <table class="compare-table">
          <thead>
            <tr>${headerColsHtml}</tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   8. SAVED / PERSONAL COLLECTION PAGE RENDERER (`saved.html`)
   -------------------------------------------------------------------------- */
function renderSavedPage() {
  const root = document.getElementById('saved-root');
  if (!root || !window.AURELLE_SAVED) return;

  const items = window.AURELLE_SAVED.getSavedItems();
  const guides = window.AURELLE_SAVED.getSavedGuides();
  const user = window.AURELLE_AUTH ? window.AURELLE_AUTH.getCurrentUser() : null;

  const data = window.AURELLE_DATA || {};
  const allCatalog = [...(data.watches || []), ...(data.jewelry || []), ...(data.essentials || [])];

  let itemsHtml = '';
  if (items.length === 0) {
    itemsHtml = `
      <div class="empty-state">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        <h3>No Saved Discoveries Yet</h3>
        <p>Click the bookmark icon on any watch, jewelry heirloom, or precision equipment item to pin it here.</p>
        <a href="discover.html" class="btn btn-primary btn-sm">Explore Catalog</a>
      </div>
    `;
  } else {
    itemsHtml = '<div class="grid grid-3">';
    items.forEach(savedEntry => {
      const fullItem = allCatalog.find(i => i.id === savedEntry.id) || savedEntry;
      itemsHtml += `
        <article class="editorial-card">
          <div class="card-media">
            <img src="${fullItem.image || 'assets/images/hero-chronograph.jpg'}" alt="${fullItem.title}">
            <div class="card-actions-float">
              <button class="btn-icon active" onclick="AURELLE_SAVED.toggleSave('${fullItem.id}', 'items'); renderSavedPage();" title="Remove from saved">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              </button>
            </div>
          </div>
          <div class="card-content">
            <span class="card-category">${fullItem.category || 'Catalog'}</span>
            <h3 class="card-title"><a href="details.html?id=${fullItem.id}">${fullItem.title}</a></h3>
            <div class="card-footer">
              <a href="details.html?id=${fullItem.id}" class="btn-text" style="font-size: 0.75rem;">View Specification &rarr;</a>
            </div>
          </div>
        </article>
      `;
    });
    itemsHtml += '</div>';
  }

  let guidesHtml = '';
  if (guides.length === 0) {
    guidesHtml = `
      <div class="empty-state">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        <h3>No Saved Reading Material</h3>
        <p>Save in-depth horological analyses and gemstone buying guides for future offline reference.</p>
        <a href="guides.html" class="btn btn-outline btn-sm">Browse Editorial Guides</a>
      </div>
    `;
  } else {
    guidesHtml = '<div class="grid grid-2">';
    guides.forEach(gEntry => {
      const fullGuide = (data.guides || []).find(g => g.id === gEntry.id) || gEntry;
      guidesHtml += `
        <article class="editorial-card">
          <div class="card-content">
            <span class="card-category">${fullGuide.category || 'Guide'}</span>
            <h3 class="card-title"><a href="guide-details.html?id=${fullGuide.id}">${fullGuide.title}</a></h3>
            <p class="card-desc">${fullGuide.lead || 'In-depth editorial reference.'}</p>
            <div class="card-footer">
              <a href="guide-details.html?id=${fullGuide.id}" class="btn-text" style="font-size: 0.775rem;">Read Guide &rarr;</a>
              <button onclick="AURELLE_SAVED.toggleSave('${fullGuide.id}', 'guides'); renderSavedPage();" class="btn-text" style="color: var(--error); font-size: 0.75rem;">Remove</button>
            </div>
          </div>
        </article>
      `;
    });
    guidesHtml += '</div>';
  }

  root.innerHTML = `
    <div class="container section">
      <div class="section-header text-left">
        <span class="eyebrow">Personal Vault</span>
        <h1>Curated Reference Collection</h1>
        <p>${user ? `Personal catalog curated by ${user.name}` : 'Sign in to preserve and synchronize your saved discoveries across sessions.'}</p>
      </div>

      <div class="saved-tabs">
        <button class="saved-tab-btn active" onclick="switchSavedTab('saved-pane-items', this)">Saved Pieces (${items.length})</button>
        <button class="saved-tab-btn" onclick="switchSavedTab('saved-pane-guides', this)">Saved Guides (${guides.length})</button>
      </div>

      <div id="saved-pane-items" class="saved-pane active">
        ${itemsHtml}
      </div>

      <div id="saved-pane-guides" class="saved-pane" style="display: none;">
        ${guidesHtml}
      </div>
    </div>
  `;
}

window.switchSavedTab = function (paneId, btn) {
  document.querySelectorAll('.saved-pane').forEach(p => (p.style.display = 'none'));
  document.querySelectorAll('.saved-tab-btn').forEach(b => b.classList.remove('active'));
  const target = document.getElementById(paneId);
  if (target) target.style.display = 'block';
  if (btn) btn.classList.add('active');
};

/* --------------------------------------------------------------------------
   9. COLLECTIONS PAGE RENDERER (`collections.html`)
   -------------------------------------------------------------------------- */
function renderCollectionsPage() {
  const root = document.getElementById('collections-root');
  if (!root || !window.AURELLE_DATA) return;

  const cols = window.AURELLE_DATA.collections || [];
  let html = '<div class="grid grid-2" style="gap: 2.5rem;">';

  cols.forEach(col => {
    html += `
      <article class="editorial-card" style="border-radius: var(--radius-sm);">
        <div class="card-media" style="aspect-ratio: 16/9;">
          <img src="${col.image}" alt="${col.title}">
        </div>
        <div class="card-content" style="padding: 2rem;">
          <span class="card-category">Curated Dossier · ${col.curator}</span>
          <h3 class="card-title" style="font-size: 1.6rem; margin-bottom: 0.5rem;"><a href="discover.html?q=${encodeURIComponent(col.title.split(' ')[1] || 'watch')}">${col.title}</a></h3>
          <p class="card-desc" style="font-size: 0.95rem; margin-bottom: 1.5rem;">${col.tagline}</p>
          
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
            ${col.itemIds.map(id => `<span class="badge badge-gold" style="font-size: 0.7rem;">${id.replace('-', ' ')}</span>`).join('')}
          </div>

          <div class="card-footer">
            <span style="font-size: 0.8rem; color: var(--text-muted);">${col.itemCount} Key Reference Pieces</span>
            <a href="discover.html?q=${encodeURIComponent(col.title.split(' ')[1] || 'watch')}" class="btn-text">Explore Dossier &rarr;</a>
          </div>
        </div>
      </article>
    `;
  });
  html += '</div>';

  root.innerHTML = html;
}
