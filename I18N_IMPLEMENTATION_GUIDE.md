# i18n Implementation Guide

## ✅ Completed Setup

### 1. **Package Dependencies Installed**

- `i18next` (^23.7.6)
- `next-i18next` (^15.1.0)
- `react-i18next` (^14.0.0)
- `i18next-browser-languagedetector` (^7.2.0)

### 2. **Configuration Files Created**

- `next-i18next.config.js` - i18n configuration
- `lib/i18n.ts` - i18n initialization

### 3. **Translation Files Created**

- `public/locales/en/common.json` - English translations
- `public/locales/de/common.json` - German translations

**Available Translation Keys:**

```
hero.badge
hero.headline
hero.tagline
hero.cta
navigation.*
coreExpertise.*
agentforce.*
customEngineering.*
about.*
footer.*
buttons.*
common.*
```

### 4. **Provider Setup**

- `app/providers.tsx` - I18nProvider component
- Updated `app/layout.tsx` to use I18nProvider

### 5. **Language Switcher Updated**

- `app/components/languageSwitcher.tsx` - Now integrated with i18n
- Persists language preference to localStorage

### 6. **Components Updated**

- `app/components/sections/home/Hero.tsx` - Now uses i18n for badge text

## 📋 Next Steps to Complete Translation

### Update All Pages to Use Translations

For each component/page, follow this pattern:

```tsx
"use client";
import { useTranslation } from "react-i18next";

export default function YourComponent() {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("key.path")}</h1>
      <p>{t("another.key")}</p>
    </div>
  );
}
```

### Components to Update (Priority Order):

1. **Hero Section** (`app/components/sections/home/Hero.tsx`)
   - Replace "Machen Sie Technologie..." with multilingual headline
   - Suggested approach: Store headline parts in translation file

2. **Core Expertise** (`app/components/sections/home/CoreExpertise.tsx`)
   - Header badge and title
   - Description

3. **Custom Engineering** (`app/components/sections/home/CustomEngineering.tsx`)
   - Badge, title, description
   - Item titles and descriptions

4. **About Us** - Currently on home page
   - Badge and title

5. **Footer** (`app/components/layout/Footer.tsx`)
   - All footer content (links, copyright)

6. **Header Navigation** (`app/components/layout/Header.tsx`)
   - Navigation links

7. **Mobile Navigation** (`app/components/layout/MobileNavigation.tsx`)
   - Navigation links

### Dynamic Content (Already Optimized):

✅ Services - Uses CMS data with bilingual support (title, titleDe)
✅ Industries - Uses CMS data with bilingual support (title, titleDe)
✅ FAQ - Uses CMS data with bilingual support (question, questionDe)
✅ Case Studies - Uses CMS data with bilingual support (title, titleDe)

## 🔧 How to Add New Translation Keys

1. Open `public/locales/en/common.json`
2. Add your new key structure:

   ```json
   {
     "newSection": {
       "title": "Title in English",
       "description": "Description in English"
     }
   }
   ```

3. Open `public/locales/de/common.json`
4. Add the German translation for the same key structure

5. In your component, use:

   ```tsx
   const { t } = useTranslation('common');

   <h2>{t('newSection.title')}</h2>
   <p>{t('newSection.description')}</p>
   ```

## 🚀 Installation Instructions for User

```bash
# Install dependencies
npm install

# Now you can run development server with Turbopack
npm run dev

# Format code with Prettier
npm run format:fix
```

## 💡 Usage Examples

### In Components:

```tsx
"use client";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t, i18n } = useTranslation("common");

  // Get translation
  const title = t("hero.headline");

  // Get current language
  const currentLang = i18n.language; // 'en' or 'de'

  // Change language programmatically
  i18n.changeLanguage("en");

  return <h1>{title}</h1>;
}
```

### Language Switcher:

- Located in header
- Component: `app/components/languageSwitcher.tsx`
- Automatically persists selection to localStorage
- Detects browser language on first visit

## 📝 Translation File Structure

```
public/
└── locales/
    ├── en/
    │   └── common.json
    └── de/
        └── common.json
```

## ✨ Features

- Auto language detection from browser preferences
- Language persistence using localStorage
- Fallback language: German (de)
- Namespace: common (all translations in one file for simplicity)
- Full TypeScript support

## 🎯 What Works Now

- ✅ Language switcher functional
- ✅ Language persistence
- ✅ I18n provider setup
- ✅ Translation files ready
- ✅ Dynamic content already has bilingual fields
- ✅ Hero badge uses translations

## ⏳ Remaining Work

- [ ] Update Hero section headline (complex multilingual structure)
- [ ] Update Hero tagline
- [ ] Update CTA button text
- [ ] Update Core Expertise section
- [ ] Update Custom Engineering section
- [ ] Update About Us section
- [ ] Update Footer with all footer links
- [ ] Update Header navigation
- [ ] Update Mobile navigation
- [ ] Test all translations work correctly
- [ ] Add translations for error states and loading messages
