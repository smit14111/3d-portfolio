# Smit Chaudhari — 3D Portfolio

Personal portfolio website with a 3D character scene, scroll-driven animations, and project showcase. Built with React, TypeScript, Three.js, and GSAP.

## Links

- **GitHub:** [github.com/smit14111](https://github.com/smit14111)
- **LinkedIn:** [linkedin.com/in/smit-c](https://www.linkedin.com/in/smit-c)
- **Resume:** [`public/Smit_Resume.pdf`](public/Smit_Resume.pdf)

## Featured projects

| Project | Link |
| --- | --- |
| GullyScore | [github.com/smit14111/gullyscore](https://github.com/smit14111/gullyscore) · [Live demo](https://gullyscore.vercel.app/) |
| NGO Platform | [github.com/smit14111/NGO_Website](https://github.com/smit14111/NGO_Website) |
| WRAP AI | Private (NDA) — shown in portfolio without source link |

## Tech stack

- **Frontend:** React 18, TypeScript, Vite
- **3D & animation:** Three.js, React Three Fiber, GSAP, Rapier physics
- **UI:** Custom CSS, react-icons

## Getting started

### Prerequisites

- Node.js 18+
- npm 9+

### Install and run

```bash
git clone https://github.com/smit14111/3d-portfolio.git
cd 3d-portfolio
npm install
npm run dev
```

Open the URL from the terminal (usually `http://localhost:5173`).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
public/
  images/          # Tech stack icons
  models/          # 3D character & environment assets
  Smit_Resume.pdf  # Downloadable resume
src/
  components/      # Page sections (About, Work, Career, etc.)
  components/Character/  # 3D scene
  context/         # Loading state
  data/            # Animation bone data
```

## Customize content

Edit these files to update your portfolio:

- `src/components/Landing.tsx` — name and headline
- `src/components/About.tsx` — bio
- `src/components/Career.tsx` — experience and education
- `src/components/Work.tsx` — projects carousel
- `src/components/WhatIDo.tsx` — skills sections
- `src/components/Contact.tsx` — contact and social links
- `src/components/SocialIcons.tsx` — sidebar icons and resume link

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import the project at [vercel.com](https://vercel.com).
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

### Netlify

1. Connect your GitHub repo at [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`

## GSAP note

This project uses the standard `gsap` package. See [GSAP installation docs](https://gsap.com/docs/v3/Installation/) if you add or change plugins.

## License

MIT — see [LICENSE](LICENSE).
