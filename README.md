# AURELLE — The Essential Guide to Fine Jewelry & Luxury Watches

> **The Essential Guide to Fine Jewelry & Watches.**  
> *Luxury Editorial Magazine + Expert Buying Guide + Product Discovery Platform + Personal Collection Tool.*

---

## 🏛️ Brand & Concept

**AURELLE** is an independent, editorial-first digital reference platform tailored for horological connoisseurs, fine jewelry collectors, gemology enthusiasts, and first-time luxury buyers. It is built strictly as an intelligence, comparison, and discovery platform without generic ecommerce clutter or shopping carts.

### Key Philosophy
* **Discover → Explore → Compare → Learn → Save → Build Your Collection**
* High-contrast editorial typography (Cormorant Garamond + Inter/Manrope).
* Restrained Obsidian and Warm Ivory color palettes with antique champagne-gold accents.
* Flawless dark/light mode with persistence and zero contrast glitches.
* Guaranteed zero horizontal overflow across all device viewports (320px to 4K).

---

## 📂 File Architecture

```text
Fine-Jewelry-Watches-Essentials-Equipment-Guide/
│
├── index.html                  # Cinematic Luxury Editorial Homepage
├── discover.html               # Multi-faceted Filter & Search Catalog Engine
├── details.html                # Universal Dynamic Specification & Heritage View
├── compare.html                # 2-4 Item Side-by-Side Matrix Comparison
├── essentials.html             # Dedicated Equipment, Care & Preservation Guide
├── guides.html                 # Editorial Library & Journal
├── guide-details.html          # High-Typography Editorial Treatise Reader
├── collections.html            # Curated Discovery Dossiers & Capsules
├── saved.html                  # Personal Saved Vault & Reference Bookmarks
├── about.html                  # Editorial Purpose & Knowledge Standards
├── contact.html                # Editorial Inquiries, Bureau Offices & FAQ
│
├── login.html                  # Luxury Collector Authentication
├── signup.html                 # Collector Registration with Interest Profiling
├── forgot-password.html        # Credential Recovery Workflow
├── 404.html                    # Luxury Not-Found State
├── coming-soon.html            # Upcoming Museum Reference State
│
├── assets/
│   ├── css/
│   │   ├── style.css           # Core Design Tokens, Theme Variables, Global Layout
│   │   ├── components.css      # Sticky Navbar, Dropdowns, Drawers, Modals, Cards, Tables
│   │   └── responsive.css      # Exhaustive Mobile-First Breakpoints (320px–2560px+)
│   │
│   ├── js/
│   │   ├── data.js             # Central High-Fidelity Dataset
│   │   ├── theme.js            # Light/Dark Theme Controller (System Sync & Persistence)
│   │   ├── auth.js             # Demo Session Manager & Interest Profiling
│   │   ├── bookmarks.js        # Global Bookmark & Save Engine (Toast Alerts & Badge Sync)
│   │   ├── compare.js          # Comparison Tray & Side-by-Side Matrix Engine
│   │   ├── search.js           # Live Keyboard-Driven Modal Search Engine (`/` or `Ctrl+K`)
│   │   ├── filters.js          # Faceted Multi-Category Filters for Discover Grid
│   │   ├── movement-explorer.js# Interactive Horological Calibre Visualizer
│   │   ├── gemstone-explorer.js# Interactive Gemstone Hardness & Mohs Scale Inspector
│   │   └── main.js             # Page Renderers, Mobile Navigation, Sticky Header
│   │
│   ├── images/                 # High-resolution generated and curated photography
│   └── icons/                  # Crisp inline vector SVG icons
│
└── README.md
```

---

## ⚡ Interactive Features

1. **Mandatory Luxury Sticky Navbar & Mobile Drawer**:
   - Smooth backdrop blur transition when scrolling.
   - Rich multi-column dropdown menus for Jewelry, Watches, and Essentials.
   - Accordion navigation on mobile with zero horizontal overflow.
2. **Global Search Modal (`search.js`)**:
   - Real-time search across Watches, Jewelry, Materials, Gemstones, Movements, and Guides.
   - Instant keyboard shortcut (`/` or `Ctrl+K`).
3. **Save / Bookmark System (`bookmarks.js`)**:
   - Saves watches, jewelry, tools, guides, comparisons, and collections to localStorage.
   - Animated visual feedback with luxury toast notifications and live badge counters.
4. **Side-by-Side Comparison Matrix (`compare.js` & `compare.html`)**:
   - Compare 2 to 4 items simultaneously.
   - Floating bottom comparison drawer on all pages with quick removal and clear actions.
   - Responsive horizontal scroll container preserving table alignment on mobile.
5. **Interactive Watch Movement Explorer (`movement-explorer.js`)**:
   - Interactive breakdown of Manual Wind, Automatic Rotors, Quartz Resonators, and Tourbillons with animated SVGs.
6. **Gemstone & Material Hardness Inspector (`gemstone-explorer.js`)**:
   - Interactive Mohs scale visualizer, refractive indices, origin context, and care protocols.
7. **Demo Authentication & Session State (`auth.js`)**:
   - Front-end demonstration of Sign In, Registration with Interest Tags, Session Persistence, and Password Reset.

---

## 💻 Local Testing & Preview

To serve and test locally:
```powershell
# Using Python Simple HTTP Server:
python -m http.server 8000

# Or using Node http-server / npx serve:
npx -y serve ./
```
Open `http://localhost:8000` in your web browser.
