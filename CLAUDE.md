# CLAUDE.md — Anim'PA 35 Landing Page

## Projet

Site vitrine statique pour **Anim'PA 35**, association des animateurs en gérontologie d'Ille-et-Vilaine (fondée en 2008, ~60 adhérents, basée à Rennes).

**URL live :** https://sylvainremoue.github.io/animpa35-landing/
**Repo :** https://github.com/SylvainRemoue/animpa35-landing

## Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS v4 (via `@tailwindcss/vite`, config dans `@theme` de `src/index.css`)
- Framer Motion (animations, parallaxe, compteurs animés)
- GitHub Pages + GitHub Actions (`.github/workflows/deploy.yml`)

## Structure

```
src/
  components/
    Header.tsx      — Sticky header, transparent→blanc au scroll, burger mobile
    Hero.tsx        — Parallaxe, orbes flottantes, logo animé, CTA
    Actualites.tsx  — Posts depuis public/posts.json, images/vidéos, "voir plus"
    Missions.tsx    — 3 cartes (Collectifs, Bals, Drive)
    QuiSommesNous.tsx — Présentation + compteurs + statuts accordéon (12 articles)
    AnimatedCounter.tsx — Compteurs animés avec prefers-reduced-motion
    Contact.tsx     — Email + Facebook
    Footer.tsx      — Logo, liens, contact
  index.css         — Tailwind @theme (couleurs, fonts)
  App.tsx           — Composition des sections
public/
  posts.json        — Données des actualités
  images/           — Médias uploadés via le back-office
  logo-animpa35.png — Logo (mains colorées + texte orange)
admin/
  server.js         — Back-office Express local (CRUD posts + git auto push)
  index.html        — UI admin (créer/modifier/supprimer des posts)
  package.json      — Dépendances séparées (express, multer)
```

## Points importants

- **Base path** : Vite `base: '/animpa35-landing/'` — tous les assets publics doivent utiliser `import.meta.env.BASE_URL` (pas de `/` absolu)
- **Posts JSON** : `public/posts.json` — format `[{content, date, media: [{type: "image"|"video", url}]}]`, trié par date desc dans le composant
- **URLs des médias** dans posts.json : préfixées `/animpa35-landing/images/...`
- **Tailwind v4** : pas de `tailwind.config.js`, tout se configure dans `@theme {}` de `index.css`
- **Fonts** : Poppins (headings) + Inter (body), chargées via Google Fonts dans `index.html`
- **Couleurs** : primary `#E8711A` (orange), secondary `#4CAF50` (vert), dark `#1a1a2e`
- **Logo** : utilise `brightness-0 invert` en CSS pour apparaître blanc sur fond sombre

## Back-office local

Le dossier `admin/` est un serveur Express indépendant (port 3333). Il édite `public/posts.json`, gère les uploads dans `public/images/`, et fait `git add + commit + push` automatiquement. Nécessite git configuré avec accès push au repo.

Lancer : `cd admin && npm start` → http://localhost:3333

## Commandes

```bash
npm run dev       # Dev server (port 5173)
npm run build     # tsc + vite build → dist/
npm run preview   # Preview du build
```

## SEO

- Meta tags, Open Graph, Twitter Card dans `index.html`
- Schema.org JSON-LD (Organization)
- `public/sitemap.xml` et `public/robots.txt`
- Canonical URL : `https://sylvainremoue.github.io/animpa35-landing/`
- Le site n'est pas encore indexé par Google — soumettre via Google Search Console
