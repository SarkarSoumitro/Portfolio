# Soumitro Sarkar — Portfolio

A clean, premium React portfolio built with custom CSS modules and editorial typography.

## Getting Started

### Prerequisites
- Node.js (v16 or higher) — download from https://nodejs.org
- npm (comes with Node.js)

### Setup

1. **Open the folder in VS Code**

2. **Open the integrated terminal** (`Ctrl + `` ` `` ` or Terminal → New Terminal)

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser** — it will auto-open at `http://localhost:3000`

---

## Customizing Your Portfolio

All your personal data lives in one file: **`src/data.js`**

Edit that file to update:
- Your name, role, and tagline
- Project titles, descriptions, tags, and GitHub links
- Skills
- Education history
- Awards and certifications
- Contact details

### Adding Real GitHub Links

In `src/data.js`, find each project and replace the `github` field with your actual repo URL:

```js
github: 'https://github.com/SarkarSoumitro/recipe-genie',
```

---

## Project Structure

```
soumitro-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Top section with name & intro
│   │   ├── Hero.module.css
│   │   ├── Projects.jsx      # Project cards
│   │   ├── Projects.module.css
│   │   ├── Skills.jsx        # Skills grid
│   │   ├── Skills.module.css
│   │   ├── Education.jsx     # Education & awards
│   │   ├── Education.module.css
│   │   ├── Contact.jsx       # Contact section
│   │   └── Contact.module.css
│   ├── App.js                # Main layout
│   ├── App.css               # Global layout styles
│   ├── data.js               # ← All your personal data lives here
│   ├── index.js              # Entry point
│   └── index.css             # CSS variables & global resets
└── package.json
```

## Build for Production

```bash
npm run build
```

This creates a `build/` folder you can deploy to Netlify, Vercel, or GitHub Pages.

---

**Typography:** Cormorant Garamond (serif display) + DM Sans (sans body)
