# Pratik Salunkhe — Developer Portfolio

A responsive, dark-themed React portfolio built with Vite. Each major section is a reusable component and has its own stylesheet.

## Run locally

1. Install [Node.js](https://nodejs.org/) (LTS version).
2. Extract the ZIP and open this folder in VS Code.
3. Open the terminal in this folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

The production website is generated in the `dist` folder. Deploy that folder to Netlify, Vercel, or another static hosting provider.

## Personalise your portfolio

- **Profile photo:** Put your image in `public/images/` and update `PROFILE_IMAGE` in `src/data/portfolioData.js`. Example: `"/images/pratik.jpg"`.
- **Personal description, links, skills, experience and projects:** Edit `src/data/portfolioData.js`.
- **Colours and typography:** Edit CSS variables in `src/styles/global.css`.
- **Contact form:** The form opens the visitor's default email app with a pre-filled message using your email address. It does not require a backend service.
- **Resume button:** Add your resume PDF to `public/` as `Pratik-Salunkhe-Resume.pdf` to enable the download link.

## Project structure

```text
src/
  components/     Reusable page sections (one component per section)
  data/           Your portfolio content in one place
  styles/         Global styles
  App.jsx
  main.jsx
public/
  images/         Add your profile picture here
```
