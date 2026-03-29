# SEO & AI SEO Best Practices — Covenant Leather Co.

## Table of Contents
1. [Google EEAT Requirements](#eeat)
2. [Technical SEO](#technical-seo)
3. [On-Page SEO](#on-page-seo)
4. [AI Search Optimization (AIO/GEO)](#ai-seo)
5. [Content Strategy](#content-strategy)
6. [Local SEO](#local-seo)
7. [Ongoing Checklist](#checklist)

---

## 1. Google EEAT Requirements {#eeat}

EEAT stands for **Experience, Expertise, Authoritativeness, and Trustworthiness**. Google uses these signals to evaluate content quality — especially for e-commerce and "Your Money or Your Life" (YMYL) topics.

### Experience
- **Real photos** of Ben making journals, his workspace, and finished products ✅
- **First-person stories** — Ben's bishop tradition, sending missionaries ✅
- **Personalization example** — the engraved "Benjamin S. Fowler" photo proves real work ✅
- **Action:** Add date stamps or "made in [month/year]" to products if possible
- **Action:** Consider a short video of the leather-working process (Instagram Reels → embed)

### Expertise
- **Detailed product specs** — leather type, thread, paper weight ✅
- **Care instructions** on every product page ✅
- **Blog posts** with genuine how-to knowledge (leather care, journal selection) ✅
- **Action:** Add author byline "By Benjamin S. Fowler" to all blog posts
- **Action:** Write from first-person expertise, not generic advice

### Authoritativeness
- **About page** with real maker story and photo ✅
- **Real business name, location** (Saratoga Springs, Utah) ✅
- **Action:** Get listed on Google Business Profile (free)
- **Action:** Earn backlinks from LDS-related blogs, missionary prep sites, leather craft communities
- **Action:** Add a press/media page as the brand grows

### Trustworthiness
- **HTTPS/SSL** via Vercel ✅
- **Clear pricing** with no hidden fees ✅
- **FAQ with real policies** (shipping, returns, customization) ✅
- **Contact page** with real email
- **Action:** Add real customer reviews/testimonials with names
- **Action:** Add a privacy policy page
- **Action:** Display trust badges at checkout (Stripe Secure, SSL)
- **Action:** Add a physical address or at minimum city/state

---

## 2. Technical SEO {#technical-seo}

### Meta Tags
Every page should have unique:
- `<title>` — 50–60 characters, include primary keyword
- `<meta name="description">` — 150–160 characters, include CTA
- These are already set via `generateMetadata()` in each route ✅

### Structured Data (Schema Markup)
Add JSON-LD schema to key pages. Priority order:

**Product pages** — `Product` schema:
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "The Covenant Journal",
  "image": "...",
  "description": "...",
  "brand": { "@type": "Brand", "name": "Covenant Leather Co." },
  "offers": {
    "@type": "Offer",
    "price": "89",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}
```

**About/Organization** — `LocalBusiness` schema:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Covenant Leather Co.",
  "founder": { "@type": "Person", "name": "Benjamin S. Fowler" },
  "address": { "@type": "PostalAddress", "addressLocality": "Saratoga Springs", "addressRegion": "UT" },
  "url": "https://covenantleatherco.com"
}
```

**Blog posts** — `Article` schema with author, datePublished

### Page Speed
- Images are `.webp` format ✅
- Next.js Image component with lazy loading ✅
- **Action:** Run Lighthouse audit on deployed site (Chrome DevTools → Lighthouse)
- **Action:** Keep images under 200KB each where possible

### URLs
- Clean, keyword-rich slugs: `/products/covenant-journal` ✅
- Blog: `/blog/how-to-care-for-leather-journal` ✅
- No query strings, no underscores

### Sitemap & Robots
- **Action:** Add `sitemap.xml` — Next.js App Router can auto-generate this
- **Action:** Add `robots.txt` to allow all crawlers

---

## 3. On-Page SEO {#on-page-seo}

### Title Tag Formula
- Homepage: `Handmade Leather Journals | Covenant Leather Co.`
- Product: `The Covenant Journal — Genuine Leather | Covenant Leather Co.`
- Blog: `How to Care for a Leather Journal | Covenant Leather Co.`
- Collection: `Mission Journals — Handmade Leather | Covenant Leather Co.`

### Heading Hierarchy
- One `<h1>` per page (the main keyword-rich title) ✅
- `<h2>` for major sections ✅
- `<h3>` for subsections ✅
- Never skip heading levels

### Image Alt Text
All images should describe the image AND include a keyword naturally:
- ✅ Good: `"Benjamin S. Fowler name engraved on a handmade leather journal cover"`
- ❌ Bad: `"journal"` or `"image1.webp"`

### Internal Linking
- Blog posts should link to relevant product pages
- Product pages link to related products ✅
- About page links to shop ✅
- **Action:** Add "related posts" to blog posts

### Keyword Density
- Primary keyword appears in: H1, first paragraph, at least one H2, meta description
- Natural usage — never "keyword stuffed"
- Target 1–2% density for primary keyword

---

## 4. AI Search Optimization (AIO/GEO) {#ai-seo}

AI search engines (ChatGPT, Perplexity, Google AI Overviews, Claude) pull from content differently than traditional search. Optimize for being cited:

### Write in Direct Answer Format
AI tools love concise, factual answers. Structure content as:
- **Question:** "What is the best leather journal for missionaries?"
- **Direct answer in first sentence:** "Full-grain leather journals with waxed linen stitching and acid-free paper are best for missionaries because..."

### Use FAQ Sections on Every Page
AI Overview (SGE) pulls from FAQ-structured content. Add an FAQ section to:
- Product detail pages
- Blog posts
- Collections pages

### Be Cited as a Source
AI tools cite authoritative, specific content. Write blog posts that:
- Answer very specific questions ("What GSM paper is best for fountain pens in a leather journal?")
- Contain original data or first-hand experience
- Are comprehensive (1,500+ words for pillar posts)

### Structured Definitions
AI models extract definitions easily. Include:
- "Full-grain leather is the highest quality leather because..."
- "Saddle stitching refers to the technique where..."
- "Acid-free paper means the paper has a pH of 7 or above, preventing yellowing..."

### Brand Mentions
Get your brand mentioned on other sites — AI models learn brand associations from:
- Guest posts on LDS/missionary blogs
- Product reviews on leather craft forums
- Mentions in Reddit threads (r/Leathercraft, r/missionarylife)
- YouTube reviews

### Schema Markup for AI
`FAQPage`, `HowTo`, and `Article` schema helps AI models understand your content structure and increases likelihood of citation.

---

## 5. Content Strategy {#content-strategy}

### Priority Blog Posts (by SEO value)

| Post | Target Keyword | Search Intent | Priority |
|---|---|---|---|
| What to Write in Your Mission Journal | "what to write in mission journal" | Informational | HIGH |
| How to Choose a Leather Journal for Missionaries | "best leather journal missionaries" | Commercial | HIGH |
| Best Gifts for a Missionary | "missionary gift ideas" | Commercial | HIGH |
| How to Care for a Genuine Leather Journal | "leather journal care" | Informational | MEDIUM |
| Why Handwritten Journals Still Matter | "benefits of handwriting journal" | Informational | MEDIUM |
| Bulk Leather Journals for Wards and Stakes | "bulk leather journals missionaries" | Commercial | HIGH |
| How to Break In a New Leather Journal | "break in leather journal" | Informational | LOW |

### Content Pillars
1. **Missionary Life** — journals for missionaries, what to write, how to prepare
2. **Leather Craft** — how Ben makes them, leather types, care guides
3. **Faith & Journaling** — scripture study, personal history, testimony recording
4. **Gifting** — gift guides, personalization, ward orders

### Word Count Targets
- Blog posts: 1,200–2,500 words (longer = more ranking opportunity)
- Product descriptions: 150–300 words
- Collection pages: 300–500 words
- About page: 600–1,000 words ✅

### Content Freshness
- Publish at least 1 blog post per month
- Update product pages seasonally (Christmas gift guide, mission call season)
- Refresh top-performing posts annually

---

## 6. Local SEO {#local-seo}

Even though this is an e-commerce store, local signals build trust and drive searches like "leather journal maker Utah."

### Google Business Profile
- Create a free listing at business.google.com
- Category: "Leather Goods Store" or "Craft Store"
- Add photos of Ben's workspace and products
- Collect reviews from early customers

### Local Keywords to Target
- "handmade leather journals Utah"
- "leather journal maker Saratoga Springs"
- "LDS mission journal Utah"
- "custom leather journal Utah"

### NAP Consistency
Name, Address, Phone must be identical everywhere:
- Website footer
- Google Business Profile
- Any directory listings (Etsy, Yelp, etc.)

---

## 7. Ongoing SEO Checklist {#checklist}

### Monthly
- [ ] Publish 1 new blog post targeting a keyword gap
- [ ] Check Google Search Console for new queries
- [ ] Respond to any customer reviews
- [ ] Update Google Business Profile with new photos

### Quarterly
- [ ] Run Lighthouse audit, fix any speed issues
- [ ] Review top-performing pages, expand content
- [ ] Build 2–3 backlinks (guest posts, community mentions)
- [ ] Check for broken links

### Before Every Product Launch
- [ ] Unique meta title + description with target keyword
- [ ] Alt text on all product images
- [ ] Product schema markup added
- [ ] Internal links from relevant blog posts
- [ ] FAQ section added to product page

### One-Time Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Create Google Business Profile
- [ ] Add `robots.txt`
- [ ] Add `sitemap.xml`
- [ ] Add Organization schema to layout
- [ ] Add Product schema to product pages
- [ ] Create privacy policy page
- [ ] Verify site in Google Search Console
