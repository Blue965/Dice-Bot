# 🎲 Dice Bot

Un bot Discord complet et moderne avec modération, économie, fun, tickets, sécurité, et un dashboard web intuitif.

## ✨ Fonctionnalités

### 🛡️ Modération
- Système complet de modération (kick, ban, mute, timeout, etc.)
- Système d'avertissements avec historique
- Logs automatiques
- Auto-modération configurable
- Protection anti-raid et anti-nuke

### 💰 Économie
- Système d'économie complet avec banque
- Récompenses quotidiennes et travail
- Magasin personnalisable
- Giveaways
- Jeux de casino (blackjack, roulette, slots)

### 🎮 Fun
- Commandes divertissantes (dés, pièces, 8ball, mèmes, blagues)
- Jeux (pierre-feuille-ciseaux, trivia, etc.)
- Système de niveaux et XP
- Badges et succès

### 🎫 Tickets
- Système de tickets avancé
- Panneaux de tickets personnalisables
- Transcription automatique
- Gestion par les modérateurs

### 🔒 Sécurité
- Protection anti-raid
- Protection anti-nuke
- Filtres de contenu
- Audit de sécurité complet
- Sauvegardes automatiques

### 🎮 Roblox
- Intégration Roblox
- Informations utilisateurs et jeux
- Calculateur Robux
- Marketplace

### 🌐 Dashboard Web
- Interface moderne et intuitive
- Authentification Discord OAuth2
- Configuration visuelle du bot
- Statistiques en temps réel
- Gestion des serveurs

## 📋 Prérequis

- Node.js 18.0 ou supérieur
- MongoDB 4.4 ou supérieur
- Un compte Discord développeur

## 🚀 Installation

### 1. Cloner le repository

```bash
git clone https://github.com/yourusername/dice-bot.git
cd dice-bot
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration

Créez un fichier `.env` à partir de `.env.example` :

```bash
cp .env.example .env
```

Remplissez les variables d'environnement :

```env
# Discord Bot Configuration
DISCORD_TOKEN=your_discord_bot_token_here
DISCORD_CLIENT_ID=your_discord_client_id_here
DISCORD_CLIENT_SECRET=your_discord_client_secret_here
DISCORD_REDIRECT_URI=http://localhost:3000/auth/discord/callback

# Dashboard Configuration
DASHBOARD_PORT=3000
SESSION_SECRET=your_random_session_secret_here

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/dicebot

# Roblox Configuration (Optionnel)
ROBLOX_COOKIE=your_roblox_cookie_here

# Bot Configuration
PREFIX=!
OWNER_ID=your_discord_user_id_here
EMBED_COLOR=#5865F2
```

### 4. Créer une application Discord

1. Allez sur [Discord Developer Portal](https://discord.com/developers/applications)
2. Créez une nouvelle application
3. Dans la section "Bot", créez un bot et obtenez le token
4. Activez les intents suivants :
   - Guilds
   - Guild Members
   - Guild Messages
   - Message Content
   - Guild Voice States
   - Guild Invites
   - Guild Presences
   - Guild Message Reactions
   - Guild Moderation

5. Dans la section "OAuth2", ajoutez un redirect URI :
   - `http://localhost:3000/auth/discord/callback` (développement)
   - `https://votre-domaine.com/auth/discord/callback` (production)

6. Invitez le bot sur votre serveur avec les permissions requises

## 🎯 Utilisation

### Démarrer le bot

```bash
npm start
```

Pour le développement avec auto-reload :

```bash
npm run dev
```

### Démarrer le dashboard

```bash
npm run dashboard
```

Le dashboard sera accessible sur `http://localhost:3000`

## 📚 Commandes

Dice Bot dispose de plus de 200 commandes organisées en catégories :

- **Modération** : `/kick`, `/ban`, `/warn`, `/mute`, `/lock`, etc.
- **Administration** : `/config`, `/setup`, `/autorole`, `/welcome`, `/logs`, etc.
- **Utilitaires** : `/ping`, `/help`, `/userinfo`, `/serverinfo`, `/avatar`, etc.
- **Fun** : `/roll`, `/coinflip`, `/8ball`, `/meme`, `/joke`, etc.
- **Économie** : `/balance`, `/daily`, `/work`, `/shop`, `/giveaway`, etc.
- **Tickets** : `/ticket`, `/close`, `/claim`, `/transcript`, etc.
- **Roblox** : `/robloxuser`, `/robloxgame`, `/robuxcalculator`, etc.
- **Sécurité** : `/antiraid`, `/antinuke`, `/security`, `/audit`, etc.

Pour voir la documentation complète de toutes les commandes, consultez le fichier [COMMANDS.md](COMMANDS.md).

## 🌐 Dashboard

Le dashboard web permet de :

- Gérer vos serveurs
- Configurer le bot visuellement
- Voir les statistiques
- Gérer les tickets
- Configurer la sécurité

Accédez au dashboard via `http://localhost:3000` après l'avoir démarré.

## 🗄️ Base de données

Le bot utilise MongoDB pour stocker :

- Configurations des serveurs
- Données utilisateurs (XP, économie, etc.)
- Tickets
- Magasins
- Giveaways

## 🔧 Configuration avancée

### Intents Discord

Assurez-vous d'activer les intents suivants dans le Discord Developer Portal :

- **Privileged Gateway Intents** :
  - Presence Intent
  - Server Members Intent
  - Message Content Intent

### Permissions Bot

Le bot a besoin des permissions suivantes :

- Administrator (recommandé pour la configuration initiale)
- Ou permissions spécifiques selon les fonctionnalités utilisées

## 📦 Structure du projet

```
dice-bot/
├── src/
│   ├── index.js              # Point d'entrée du bot
│   ├── commands/             # Commandes slash
│   ├── events/               # Événements Discord
│   ├── models/               # Modèles MongoDB
│   └── dashboard/            # Dashboard web
│       ├── server.js         # Serveur Express
│       ├── views/            # Templates EJS
│       └── public/           # Fichiers statiques
├── .env                      # Variables d'environnement
├── .env.example              # Exemple de configuration
├── package.json              # Dépendances
├── COMMANDS.md               # Documentation des commandes
└── README.md                 # Ce fichier
```

## 🚢 Déploiement

### Déploiement avec Docker

Créez un `Dockerfile` :

```dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

CMD ["node", "src/index.js"]
```

Créez un `docker-compose.yml` :

```yaml
version: '3.8'

services:
  bot:
    build: .
    restart: always
    environment:
      - DISCORD_TOKEN=${DISCORD_TOKEN}
      - DISCORD_CLIENT_ID=${DISCORD_CLIENT_ID}
      - DISCORD_CLIENT_SECRET=${DISCORD_CLIENT_SECRET}
      - MONGODB_URI=mongodb://mongo:27017/dicebot
    depends_on:
      - mongo

  dashboard:
    build: .
    command: node src/dashboard/server.js
    ports:
      - "3000:3000"
    environment:
      - DISCORD_CLIENT_ID=${DISCORD_CLIENT_ID}
      - DISCORD_CLIENT_SECRET=${DISCORD_CLIENT_SECRET}
      - SESSION_SECRET=${SESSION_SECRET}
      - MONGODB_URI=mongodb://mongo:27017/dicebot
    depends_on:
      - mongo

  mongo:
    image: mongo:latest
    restart: always
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

Lancez avec :

```bash
docker-compose up -d
```

### Déploiement sur VPS

1. Installez Node.js et MongoDB sur votre VPS
2. Clonez le repository
3. Installez les dépendances
4. Configurez le fichier `.env`
5. Utilisez PM2 pour gérer le processus :

```bash
npm install -g pm2
pm2 start src/index.js --name dice-bot
pm2 start src/dashboard/server.js --name dice-dashboard
pm2 save
pm2 startup
```

### Déploiement sur des services cloud

Le bot peut être déployé sur :

- **Heroku** : Utilisez le buildpack Node.js
- **Railway** : Connectez votre repository GitHub
- **Render** : Déployez comme service web et worker
- **DigitalOcean App Platform** : Déployez directement depuis GitHub

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Fork le repository
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## 🆘 Support

Pour obtenir de l'aide :

- Rejoignez notre serveur Discord : [Lien]
- Ouvrez une issue sur GitHub
- Contactez-nous par email : support@dicebot.com

## 🙏 Remerciements

- Discord.js pour l'excellente bibliothèque
- La communauté Discord pour le support
- Tous les contributeurs du projet

## 📝 Notes

- Le bot nécessite Node.js 18+ pour fonctionner correctement
- MongoDB doit être accessible et configuré correctement
- Assurez-vous d'avoir activé tous les intents nécessaires dans le Discord Developer Portal
- Le dashboard nécessite une connexion HTTPS en production

## 🔮 Roadmap

- [ ] Ajouter plus de commandes fun
- [ ] Système de musique avancé
- [ ] Intégration avec d'autres plateformes (Twitch, YouTube)
- [ ] API publique
- [ ] Système de plugins
- [ ] Thèmes personnalisables pour le dashboard
- [ ] Application mobile

---

**Développé avec ❤️ par l'équipe Dice Bot**
