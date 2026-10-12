# Uosef Talaat - Portfolio Website

> **Software Tester / QC**  
> Pioneering AI-Augmented QA & Multi-Platform Quality Engineering  
> 🌐 **Live Website**: [https://uoseftalaat.github.io/](https://uoseftalaat.github.io/)

Modern, high-performance portfolio website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS v4**, showcasing production testing architectures, AI-assisted workflows (SpecKit), ISTQB certifications, and end-to-end multi-platform coverage.

---

## 🚀 Features

- **Hero & Profile**: Impact statement, availability badge, direct CV download (`Uosef_talaat.pdf`), contact links.
- **Key Metrics**: Quantified career impact (30% faster test authoring, 90% backend API coverage, 3x ISTQB certifications, 20% CI pipeline optimization).
- **Featured Systems & Projects**:
  - **ARM** (Resource & Team Management Platform) - AI-Augmented Test Engineering using SpecKit & Knowledge Graphs.
  - **Atlas / UCaffee** (Café Management App) - Greenfield API test suite (90% coverage in 2 months, sole QA).
  - **Cadaa** (FinTech Platform for Real Estate) - High-stakes financial workflows across Android, iOS, and Web.
  - **Domo** (SaaS Project Management) - Single-to-multi-tenant architectural migration QC.
  - **Dib** (Complex Workflow Management Platform) - Stateful API and web automation suites.
- **Categorized Competencies**: Test Automation (Playwright, Appium, Selenium), AI & Testing Tools (SpecKit, GenAI), Methodologies, Languages (TS, Ruby, Python, SQL), and DevOps (GitHub Actions, Bitrise).
- **Interactive QA Terminal Simulator**: Live simulated execution runs for Playwright E2E, SpecKit AI scenarios, API regressions, and Mobile sanity checks.
- **Verified Credentials**: ISTQB GenAI, Mobile Application Tester (MAT), and Foundation Level (CTFL), alongside B.Sc. from Ain Shams University.
- **Direct Contacts**: Click-to-copy email and phone number, direct LinkedIn connection, and mobile calling links.

---

## 🛠️ Development & Local Run

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Install Dependencies
```bash
npm install
```

### Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment

### GitHub Pages (Automated via GitHub Actions)
This repository includes an automated CI/CD workflow (`.github/workflows/deploy.yml`):
1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Every push to `main` automatically builds and publishes the website to:
   👉 **[https://uoseftalaat.github.io/](https://uoseftalaat.github.io/)**

### Alternative Hosts (Vercel / Netlify)
- **Vercel**: Import the GitHub repository at [vercel.com](https://vercel.com).
- **Netlify**: Connect the repository at [netlify.com](https://netlify.com) (`npm run build` | publish `dist`).
