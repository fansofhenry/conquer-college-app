# Conquering College — Interactive Learning App

An interactive, multi-module learning app based on Jeff Anderson's **Conquering College** project — part of his larger [Strategic Deep Learning](https://jeffandersonmath.wordpress.com/2024/11/30/jeff-anderson-maths-strategic-deep-learning-project/) framework.

> **Goal:** Help college students earn any grade they want, in any class, with any teacher — while building skills that matter for the life they want to live.

---

## ✨ Features

- **4 Interactive Lab Modules** — each with intro, guided workbook, scored quiz, and summary
- **Progress Tracking** — persisted to `localStorage`, survives page refresh
- **Guided Workbook Prompts** — research-based reflection questions per lab
- **Self-Assessment Quizzes** — 5 questions per lab with explanations and scoring
- **Download Your Answers** — export each lab's workbook + quiz results as `.txt`
- **Final Project: Strategic Learner Blueprint** — synthesizes all 4 labs into a printable/downloadable capstone document
- **Print to PDF** — the final blueprint is print-optimized

---

## 🧭 The Four Labs

| Lab | Title | Focus |
|-----|-------|-------|
| 1 | Schedule to Succeed | Weekly schedules, SMART goals, 50-year vision |
| 2 | Prepare for Deep Learning | Sweet Spot model, deliberate practice, intrinsic motivation |
| 3 | Build Your Note System | Note rewrites, 2-Minute Questions, peer teaching, system navigation |
| 4 | Build Your Dream Binder | 5-year academic plan, scholarships, mentor relationships, second brain |

**Final Project:** Strategic Learner Blueprint — a synthesized, printable document tying all 4 labs together.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node)

### Install & Run

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/conquering-college.git
cd conquering-college

# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. The `base: './'` in `vite.config.js` ensures assets load correctly from any subdirectory (including GitHub Pages).

---

## 🌐 Deploy to GitHub Pages

### Option A — Manual

1. Run `npm run build`
2. Push the `dist/` folder contents to your repo's `gh-pages` branch
3. In repo Settings → Pages → set source to `gh-pages` branch

### Option B — GitHub Actions (recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 📁 Project Structure

```
conquering-college/
├── index.html                    # App entry point
├── vite.config.js                # Vite config (base: './')
├── package.json
├── README.md
└── src/
    ├── main.jsx                  # React root
    ├── App.jsx                   # Layout + routing
    ├── context/
    │   └── AppContext.jsx        # Global state + localStorage persistence
    ├── data/
    │   └── labContent.js         # All quiz questions, workbook prompts, metadata
    ├── styles/
    │   └── global.css            # Design system (dark/gold theme)
    ├── components/
    │   ├── Sidebar.jsx           # Navigation + per-lab progress
    │   └── LabShell.jsx          # Universal step-by-step lab wrapper
    └── modules/
        ├── Home.jsx              # Dashboard overview
        ├── Lab1.jsx              # Lab 1: Schedule to Succeed
        ├── Lab2.jsx              # Lab 2: Prepare for Deep Learning
        ├── Lab3.jsx              # Lab 3: Build Your Note System
        ├── Lab4.jsx              # Lab 4: Build Your Dream Binder
        └── FinalProject.jsx      # Final Project: Strategic Learner Blueprint
```

---

## 🧠 Architecture Notes

- **State management:** React Context + `useReducer` + `localStorage`
- **Routing:** State-based (no react-router) — simple, zero config
- **Styling:** Single CSS file with CSS variables; no Tailwind or CSS-in-JS required
- **Data:** All content lives in `src/data/labContent.js` — easy to add labs, edit questions, or translate
- **LabShell pattern:** All 4 lab modules share one `LabShell` component — add new labs by creating a data entry and a one-line module file

---

## ✏️ Adding or Editing Content

All quiz questions, workbook prompts, video links, and PDF links live in `src/data/labContent.js`. No JSX editing needed to update content.

To add a new lab:
1. Add an entry to the `labs` object in `labContent.js`
2. Add the key to `labOrder`
3. Create `src/modules/Lab5.jsx` (copy any existing lab, change the key)
4. Add it to `PAGE_MAP` in `App.jsx` and the sidebar in `Sidebar.jsx`

---

## 📚 Credits

All educational content, frameworks, and materials are created by **Jeff Anderson**.

- 🌐 [appliedlinearalgebra.com](https://www.appliedlinearalgebra.com/conquering-college)
- 📝 [Jeff Anderson Math Blog](https://jeffandersonmath.wordpress.com)
- 📺 [YouTube Channel](https://www.youtube.com/@JeffAndersonMath)
- 💼 [LinkedIn](https://www.linkedin.com/in/jeff-anderson-math/)

---

*This app is an open-source interactive companion to Jeff Anderson's free educational resources.*
