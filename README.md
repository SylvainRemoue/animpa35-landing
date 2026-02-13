# Anim'PA 35 — Site Vitrine

Site web vitrine de l'association **Anim'PA 35**, association des animateurs en gérontologie d'Ille-et-Vilaine.

Déployé automatiquement sur **GitHub Pages** : [sylvainremoue.github.io/animpa35-landing](https://sylvainremoue.github.io/animpa35-landing/)

## Stack technique

- **React** + **TypeScript** avec **Vite**
- **Tailwind CSS v4** pour le styling
- **Framer Motion** pour les animations
- **GitHub Actions** pour le déploiement automatique

## Développement local

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173/`.

## Build production

```bash
npm run build
npm run preview   # pour tester le build localement
```

## Structure du site

- **Hero** — Section d'accueil avec parallaxe et animations
- **Actualités** — Posts gérés via le back-office local (texte, photos, vidéos)
- **Nos Missions** — 3 cartes : Collectifs, Bals Inter-EHPAD, Drive Partagé
- **Qui sommes-nous** — Présentation + compteurs animés + statuts en accordéon
- **Contact** — Email et Facebook

## Back-office local

Le dossier `admin/` contient un petit back-office pour gérer les actualités **sans toucher au code**. Il met à jour le fichier `public/posts.json`, commit et push automatiquement sur GitHub, ce qui déclenche le redéploiement du site.

### Prérequis

- Le repo doit être cloné sur la machine
- Git doit être configuré avec un accès push au repo (SSH ou HTTPS)
- Node.js installé

### Lancer le back-office

```bash
cd admin
npm install   # uniquement la première fois
npm start
```

Puis ouvrir **http://localhost:3333** dans le navigateur.

### Fonctionnalités

- **Créer** une actualité : écrire le texte, choisir la date, ajouter des photos/vidéos (glisser-déposer ou clic), puis cliquer **Publier**
- **Modifier** une actualité existante : changer le texte, la date, ajouter ou supprimer des médias
- **Supprimer** une actualité

Chaque action enregistre les modifications, commit et push sur GitHub. Le site est mis à jour en ligne sous ~1 minute (temps du déploiement GitHub Actions).

### Fonctionnement technique

Le back-office est un serveur Express local qui :

1. Lit et écrit dans `public/posts.json`
2. Stocke les images/vidéos uploadées dans `public/images/`
3. Exécute `git add -A && git commit && git push` après chaque modification
4. GitHub Actions détecte le push et redéploie le site sur GitHub Pages

Le back-office n'est **pas déployé en ligne** — il tourne uniquement en local sur la machine de la personne qui gère les actualités.
