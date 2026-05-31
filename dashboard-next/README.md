# 🎲 Dice Bot Dashboard - Next.js

Dashboard moderne pour Dice Bot construit avec Next.js, React et TypeScript.

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.local.example .env.local
# Éditez .env.local avec vos valeurs

# Démarrer en développement
npm run dev

# Construire pour la production
npm run build

# Démarrer en production
npm start
```

## 📋 Variables d'environnement

```env
# Discord Configuration
DISCORD_CLIENT_ID=your_discord_client_id_here
DISCORD_CLIENT_SECRET=your_discord_client_secret_here
DISCORD_REDIRECT_URI=http://localhost:3000/api/auth/callback

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/dicebot

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000
```

## 🌐 Déploiement sur Vercel

1. Poussez votre code sur GitHub
2. Importez le projet sur Vercel
3. Configurez les variables d'environnement
4. Déployez

## 📁 Structure

```
dashboard-next/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts
│   ├── commands/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── docs/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Technologies

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **NextAuth.js** - Authentification Discord OAuth2
- **Phosphor Icons** - Icônes

## 🔧 Configuration Discord

1. Allez sur [Discord Developer Portal](https://discord.com/developers/applications)
2. Créez une application
3. Configurez OAuth2 avec votre redirect URI
4. Obtenez le Client ID et Client Secret
5. Ajoutez-les dans vos variables d'environnement

## 📝 Pages

- `/` - Page d'accueil
- `/commands` - Liste des commandes
- `/docs` - Documentation
- `/login` - Connexion Discord
- `/dashboard` - Dashboard principal (authentifié)

## 🚨 Note

Ce dashboard est une version Next.js du dashboard original Express/EJS. Il est optimisé pour le déploiement sur Vercel et autres plateformes serverless.
