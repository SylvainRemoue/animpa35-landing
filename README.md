# Anim'PA 35 — Site Vitrine

Site web vitrine de l'association **Anim'PA 35**, association des animateurs en gérontologie d'Ille-et-Vilaine.

## Stack technique

- **React** + **TypeScript** avec **Vite**
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **Express** pour le serveur API (proxy Facebook Graph API)

## Prérequis — Token Facebook

Le site récupère les posts directement depuis la **page Facebook** via l'API Graph. Il faut un **Page Access Token**.

### Obtenir le token

1. Aller sur [developers.facebook.com](https://developers.facebook.com/) et créer une app
2. Ajouter le produit **Facebook Login**
3. Dans l'**Explorateur de l'API Graph** ([ici](https://developers.facebook.com/tools/explorer/)), sélectionner votre app
4. Demander les permissions : `pages_show_list`, `pages_read_engagement`
5. Générer un **User Access Token**, puis sélectionner la page Anim'PA 35 pour obtenir un **Page Access Token**
6. Pour un token longue durée : utiliser l'[Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/) → "Extend Access Token"

### Configurer

```bash
cp .env.example .env
```

Remplir `.env` :

```
FB_PAGE_ID=100069875984629
FB_ACCESS_TOKEN=votre_token_ici
```

## Développement local

```bash
# Installer les dépendances
npm install

# Terminal 1 : API server (port 3001)
npm run server

# Terminal 2 : Vite dev server (port 5173, proxy vers 3001)
npm run dev
```

Le site est accessible sur `http://localhost:5173/`.

## Production

```bash
# Build du frontend
npm run build

# Démarrer le serveur (sert le frontend + l'API)
npm start
```

Le serveur écoute sur le port `3001` (ou `PORT` si défini).

## Structure du site

- **Hero** — Section d'accueil avec parallaxe et animations
- **Actualités** — Posts Facebook récupérés en temps réel via l'API Graph (texte, photos, vidéos)
- **Nos Missions** — 3 cartes : Collectifs, Bals Inter-EHPAD, Drive Partagé
- **Qui sommes-nous** — Présentation + statuts en accordéon
- **Contact** — Email et Facebook
