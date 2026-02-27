# Case Study Integration Guide

## ✅ What's Been Set Up

You now have a complete, dynamic case study module that mirrors your service implementation. Here's what was created:

### 1. **Sanity Schema** (`sanity/schemaTypes/caseStudy.ts`)

- Complete case study document type with bilingual support (EN/DE)
- Sections include:
  - Hero headline & subline
  - Executive summary (multi-paragraph)
  - Customer information with highlights
  - Challenge description with issues (each can have an icon)
  - Solution/Architecture with tech stack details (each with icon)
  - Results pillars (3 columns with bullet points)
  - Client testimonial
  - Call-to-action section
  - SEO metadata

### 2. **Dynamic Route** (`app/caseStudies/[slug]/page.tsx`)

- Automatically generates static pages from Sanity data
- Supports static generation via `generateStaticParams()`
- SEO-friendly with automatic `generateMetadata()`
- Returns 404 if case study not found

### 3. **Refactored Component** (`app/components/CaseStudySolutionPage.tsx`)

- Now accepts dynamic props from Sanity
- Maintains 100% original design and styling
- Supports bilingual content (EN/DE)
- Language switching built-in
- Icon resolution from `iconMap` with fallbacks

### 4. **Sanity Queries** (`sanity/lib/sanity.queries.ts`)

- `caseStudyBySlugQuery` - Fetch single case study by slug
- `allCaseStudySlugsQuery` - Fetch all case study slugs for static generation

### 5. **Schema Registration** (`sanity/schemaTypes/index.ts`)

- Case study type automatically exported and available in Sanity Studio

---

## 🚀 How to Create a New Case Study in Sanity

1. **Go to Sanity Studio** → Click "Create" → Select "Case Study"

2. **Fill in Basic Info:**
   - Title (EN) & Title (DE)
   - Slug (auto-generated from title)

3. **Hero Section:**
   - Enter headline and subline for both languages
   - Add timeline metric (e.g., "4 MONTHS")
   - Set timeline labels

4. **Executive Summary:**
   - Add paragraphs as array (one paragraph or multiple)
   - Do this for both EN and DE

5. **Customer Section:**
   - Customer name (e.g., "SAH Zürich")
   - Customer headline and description
   - Add 3 highlights with title + description

6. **Challenge Section:**
   - Challenge headline and intro text
   - Add 3 challenge issues:
     - Title + Description + Icon name (e.g., "Lock", "Database", "Zap")

7. **Solution Section:**
   - Solution headline and intro
   - Add tech stack items (5+ recommended):
     - Technology name (e.g., "Salesforce Nonprofit Cloud")
     - Category (EN & DE) - e.g., "Backend", "Frontend", "Storage"
     - Description (EN & DE)
     - Icon name (e.g., "Cloud", "Code", "Database")

8. **Results Section:**
   - Add 3 result pillars:
     - Title (EN & DE)
     - Icon name (e.g., "Zap", "Code", "Lock")
     - 3 bullet points per pillar (EN & DE)

9. **Testimonial Section:**
   - Client quote (EN & DE)
   - Author name
   - Author role/title (EN & DE)

10. **CTA Section:**
    - Headline, description, button text (EN & DE)

11. **SEO:**
    - SEO title and description for search engines

---

## 🎨 Available Icons

The following icon names are available from Lucide React:

### Default Icons (Already in iconMap):

- `Headphones`, `Settings`, `Database`, `Zap`, `Users`, `Trophy`, `Cpu`, `BarChart3`, `Rocket`, `Shield`

### Good for Case Studies:

- For Challenges: `Lock`, `Database`, `Zap`
- For Tech Stack: `Cloud`, `Code`, `Database`, `Lock`, `Activity`
- For Results: `Zap`, `Code`, `Lock`, `TrendingDown`, `TrendingUp`

If you need more icons, add them to `sanity/lib/iconMap.ts`:

```typescript
import { MoreIcon } from "lucide-react";

export const iconMap = {
  // ... existing
  MoreIcon,
};
```

---

## 📝 Example: Creating a Case Study like SAH Zürich

### Hero Section:

```
Title (EN): "From Legacy to Cloud-Native in 4 Months"
Title (DE): "Von Legacy zu Cloud-Native in 4 Monaten"
Headline (EN): "From Legacy to\nCloud-Native\nin [4 MONTHS with accent]"
Subline: "Digital transformation at SAH Zürich"
TimelineMetric: "4 MONTHS"
```

### Challenge Issues (3):

```
1. Security Risks | Icon: Lock
2. Data Control | Icon: Database
3. Time Pressure | Icon: Zap
```

### Tech Stack (5):

```
1. Salesforce Nonprofit Cloud | Backend | Icon: Cloud
2. Next.js on Vercel | Frontend | Icon: Code
3. Supabase | Auth/DB | Icon: Database
4. AWS S3 | Storage | Icon: Lock
5. Infrastructure Tools | Infrastructure | Icon: Activity
```

### Results (3 Pillars):

```
1. Massive Relief | Icon: Zap
2. UX Modernization | Icon: Code
3. Independence & Security | Icon: Lock
```

---

## 🔗 Accessing the Case Study

Once published in Sanity, your case study will be automatically available at:

```
https://yoursite.com/caseStudies/[slug]
```

For example:

```
https://wondercode.com/caseStudies/sah-zurich
https://wondercode.com/caseStudies/acme-corp-migration
```

---

## 🛠️ Technical Details

### Dynamic Generation Flow:

1. Author creates case study in Sanity Studio
2. On deployment, Next.js calls `generateStaticParams()` to fetch all slugs
3. Static pages are pre-generated for each case study
4. Metadata is automatically generated for SEO

### Language Switching:

- Component includes built-in EN/DE toggle in UI
- All content is shown/hidden based on selected language
- No page reload needed

### Icon Fallback:

- If an icon name doesn't exist in `iconMap`, component uses `AlertTriangle`
- Check browser console for debug logs (in development)

---

## 📋 Bilingual Best Practices

- **Titles & Headings:** Keep similar length (DE tends to be longer)
- **Descriptions:** 1-2 sentences per language
- **Bullets:** Keep consistent formatting
- **Quotes:** Translate accurately, preserve tone
- **Technical Terms:** Use appropriate terminology for target language

---

## ✨ Going Live

1. Create case study in Sanity Studio (save draft first)
2. Preview using the "Preview" button
3. Publish when ready
4. Next.js will automatically regenerate static pages on next deployment
5. If using ISR (Incremental Static Regeneration), page updates automatically

---

## 🐛 Troubleshooting

**Case study not appearing?**

- Check slug is published (not just a draft)
- Verify all required fields are filled in
- Rebuild/redeploy the site

**Icons not showing?**

- Check icon name spelling (case-sensitive)
- Verify icon name exists in `iconMap.ts`
- Check browser console for debug messages

**Language not switching?**

- Ensure both EN and DE fields are filled in Sanity
- Check for empty string values

---

## 📞 Support

For questions or to add more icons:

- Check the icon list at [lucide.dev](https://lucide.dev)
- Add new icons to `sanity/lib/iconMap.ts`
- Update this guide with common use cases
