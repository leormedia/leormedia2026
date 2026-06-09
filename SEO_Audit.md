# SEO Audit & Optimization Log - Leor Media (leormedia.com)
**Last Updated: June 2026**

This document serves as a persistent record of the SEO optimizations implemented for the Leor Media React application and outlines the roadmap for future improvements.

---

## 🚀 Live Website Audit (Lighthouse)
*Tested against `https://leormedia.com` via automated Google Lighthouse (Mobile Profile).*

- **SEO Score:** **100 / 100** 🏆
- **Best Practices:** **100 / 100** 🏆
- **Accessibility:** **80 / 100**
- **Performance:** **64 / 100**

*Insights:* The perfect SEO score confirms our technical routing and meta tag structure is pristine. However, the performance score (64) indicates that our next priority should strictly be **Image Optimization** (converting to WebP) and **Code Splitting** to improve load times.

---

## 1. Current Implemented Optimizations (As of June 2026)

### Technical SEO & Pre-rendering
- **React Snap Integration:** Configured `react-snap` to pre-render the single-page application (SPA) into static HTML files during the build process. 
- **Crawlability:** 125+ routes (including dynamic service subpages) are fully crawled and statically generated. Search engines now receive a populated DOM on the first request without waiting for JavaScript execution.
- **Sitemap & Robots.txt:** 
  - `generateBuildFiles.js` dynamically compiles all active routes into a `public/sitemap.xml` file.
  - `public/robots.txt` explicitly allows crawling of the public site while disallowing admin (`/auth/`, `/api/`) endpoints.

### Meta Tags & Dynamic SEO
- **Unified `<SEO />` Component:** Replaced scattered `react-helmet-async` usages with a centralized `<SEO />` component (`src/components/SEO/SEO.jsx`).
- **Open Graph & Twitter Cards:** Uniformly injected across all core pages (`Home.js`, `Services.js`, `Aboutus.js`, `Contactus.js`, `Blog.js`) to ensure links unfurl gracefully on social media and messaging platforms.

### Structured Data (JSON-LD)
- **Organization Schema:** Placed on the Home page to establish the brand entity, logo, and official contact numbers.
- **Service Schema:** Placed on the Services page to explicitly define business offerings.
- **Article Schema:** Dynamically injected into `BlogFullPost.js`, formatting the blog title, publication date, author, and featured image for Google News and Discover indexing.

### Core Web Vitals & Accessibility
- **Semantic HTML:** Implemented `<main>`, `<section>`, `<article>`, and `<header>` wrappers across the layout.
- **Cumulative Layout Shift (CLS) Mitigation:** Added explicit `width="800"` and `height="800"` to the `LazyImage` component used in `SubpagesWeddingplanners.js`, and `width="64"` `height="64"` to icons in `Services.js` to reserve visual space before images load.
- **Descriptive Alt Text:** Shifted from generic alt tags (e.g., `alt="illustration"`) to highly descriptive, keyword-rich tags (e.g., `alt="Wedding Planning service illustration"`).

---

## 2. Future SEO Improvement Roadmap

When revisiting the project for SEO, focus on these high-impact areas:

### A. Performance (Core Web Vitals)
- [ ] **Convert Images to WebP:** Many high-resolution assets in `src/assets/data/` and `src/assets/Generated/` are `.png` or `.jpg`. Converting these to `.webp` will drastically reduce the Largest Contentful Paint (LCP) time.
- [ ] **Code Splitting:** Analyze the Webpack/CRA bundle size and implement `React.lazy()` for heavy, below-the-fold components or massive route files.

### B. Content & Internal Linking
- [ ] **Service-to-Blog Linking:** Programmatically or manually link specific Blog posts at the bottom of related Service Subpages (e.g., "Read our latest article on Luxury Destination Weddings"). This builds a strong internal linking mesh.
- [ ] **Target Keywords:** Ensure the `target_keywords` from the blog database are heavily utilized in H2 and H3 headings.

### C. Off-Page & Analytics setup
- [ ] **Google Search Console (GSC):** Verify `leormedia.com` in GSC and submit the updated `sitemap.xml`. Monitor the "Page Indexing" report for any URLs that Google discovers but chooses not to index.
- [ ] **Google Analytics 4 (GA4):** Ensure the GA4 property is properly firing events on route changes (since React is an SPA, history changes need to be tracked manually or via the React GA library).

---
*Note: Ensure to run `npm run build` after making structural changes, as `react-snap` relies on the production build to generate the static SEO files.*
