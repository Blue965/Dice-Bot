# 🚀 Guide de Déploiement - Dice Bot

Ce guide vous explique comment déployer Dice Bot en production.

## 📋 Table des matières

- [Prérequis](#prérequis)
- [Configuration Discord](#configuration-discord)
- [Déploiement Local](#déploiement-local)
- [Déploiement VPS](#déploiement-vps)
- [Déploiement Cloud](#déploiement-cloud)
- [Déploiement Docker](#déploiement-docker)
- [Configuration HTTPS](#configuration-https)
- [Maintenance](#maintenance)

## Prérequis

Avant de déployer, assurez-vous d'avoir :

- Node.js 18.0 ou supérieur
- MongoDB 4.4 ou supérieur
- Un compte Discord développeur
- Un domaine (optionnel mais recommandé)
- Connaissances de base en ligne de commande

## Configuration Discord

### 1. Créer l'application

1. Allez sur [Discord Developer Portal](https://discord.com/developers/applications)
2. Cliquez sur "New Application"
3. Donnez un nom à votre application (ex: "Dice Bot")
4. Cliquez sur "Create"

### 2. Créer le bot

1. Dans le menu de gauche, cliquez sur "Bot"
2. Cliquez sur "Add Bot"
3. Confirmez en cliquant sur "Yes, do it!"
4. Copiez le "TOKEN" (vous en aurez besoin pour le `.env`)

### 3. Configurer les intents

1. Dans la section "Bot", faites défiler jusqu'à "Privileged Gateway Intents"
2. Activez les intents suivants :
   - ✅ Presence Intent
   - ✅ Server Members Intent
   - ✅ Message Content Intent

### 4. Configurer OAuth2

1. Dans le menu de gauche, cliquez sur "OAuth2"
2. Dans la section "Redirects", cliquez sur "Add Redirect"
3. Ajoutez votre URL de callback :
   - Développement : `http://localhost:3000/auth/discord/callback`
   - Production : `https://votre-domaine.com/auth/discord/callback`
4. Cliquez sur "Save Changes"

### 5. Inviter le bot

1. Dans la section "OAuth2" > "URL Generator"
2. Cochez les scopes :
   - ✅ bot
   - ✅ applications.commands
3. Cochez les permissions bot :
   - ✅ Administrator (recommandé)
   - Ou sélectionnez les permissions spécifiques nécessaires
4. Copiez l'URL générée et ouvrez-la dans votre navigateur
5. Sélectionnez votre serveur et autorisez le bot

## Déploiement Local

### Installation

```bash
# Cloner le repository
git clone https://github.com/yourusername/dice-bot.git
cd dice-bot

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditez .env avec vos valeurs
```

### Démarrage

```bash
# Démarrer le bot
npm start

# Démarrer le dashboard (dans un autre terminal)
npm run dashboard
```

## Déploiement VPS

### 1. Préparer le VPS

Connectez-vous à votre VPS :

```bash
ssh user@votre-vps-ip
```

Mettez à jour le système :

```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Installer Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

Vérifiez l'installation :

```bash
node -v
npm -v
```

### 3. Installer MongoDB

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt update
sudo apt install -y mongodb-org
```

Démarrez MongoDB :

```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

### 4. Installer Git

```bash
sudo apt install -y git
```

### 5. Cloner le repository

```bash
cd /opt
sudo git clone https://github.com/yourusername/dice-bot.git
sudo chown -R $USER:$USER dice-bot
cd dice-bot
```

### 6. Installer les dépendances

```bash
npm install --production
```

### 7. Configurer

```bash
cp .env.example .env
nano .env
```

Remplissez toutes les variables d'environnement requises.

### 8. Installer PM2

```bash
sudo npm install -g pm2
```

### 9. Démarrer avec PM2

```bash
# Démarrer le bot
pm2 start src/index.js --name dice-bot

# Démarrer le dashboard
pm2 start src/dashboard/server.js --name dice-dashboard

# Sauvegarder la configuration
pm2 save

# Configurer le démarrage automatique
pm2 startup
```

### 10. Configurer Nginx (optionnel)

Installez Nginx :

```bash
sudo apt install -y nginx
```

Créez une configuration :

```bash
sudo nano /etc/nginx/sites-available/dice-bot
```

Contenu :

```nginx
server {
    listen 80;
    server_name votre-domaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

Activez le site :

```bash
sudo ln -s /etc/nginx/sites-available/dice-bot /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Déploiement Cloud

### Heroku

1. Créez un fichier `Procfile` :

```
bot: node src/index.js
dashboard: node src/dashboard/server.js
```

2. Installez Heroku CLI :

```bash
npm install -g heroku
```

3. Connectez-vous :

```bash
heroku login
```

4. Créez l'application :

```bash
heroku create dice-bot
```

5. Ajoutez MongoDB Atlas :

```bash
heroku addons:create mongolab:sandbox
```

6. Configurez les variables d'environnement :

```bash
heroku config:set DISCORD_TOKEN=votre_token
heroku config:set DISCORD_CLIENT_ID=votre_client_id
heroku config:set DISCORD_CLIENT_SECRET=votre_client_secret
heroku config:set DISCORD_REDIRECT_URI=https://votre-app.herokuapp.com/auth/discord/callback
heroku config:set SESSION_SECRET=votre_secret
```

7. Déployez :

```bash
git push heroku main
```

8. Scale les dynos :

```bash
heroku ps:scale bot=1
heroku ps:scale dashboard=1
```

### Railway

1. Connectez-vous sur [Railway](https://railway.app)
2. Cliquez sur "New Project"
3. Sélectionnez "Deploy from GitHub repo"
4. Choisissez votre repository
5. Ajoutez les variables d'environnement
6. Déployez

### Render

1. Créez un compte sur [Render](https://render.com)
2. Cliquez sur "New +"
3. Sélectionnez "Web Service"
4. Connectez votre repository GitHub
5. Configurez :
   - Build Command: `npm install`
   - Start Command: `node src/dashboard/server.js`
6. Ajoutez un "Worker" pour le bot avec :
   - Start Command: `node src/index.js`
7. Configurez les variables d'environnement
8. Déployez

## Déploiement Docker

### 1. Créer le Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

CMD ["node", "src/index.js"]
```

### 2. Créer docker-compose.yml

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
    ports:
      - "27017:27017"

volumes:
  mongo-data:
```

### 3. Lancer

```bash
# Construire et démarrer
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter
docker-compose down
```

## Configuration HTTPS

### Avec Let's Encrypt (Certbot)

1. Installez Certbot :

```bash
sudo apt install certbot python3-certbot-nginx
```

2. Obtenez un certificat :

```bash
sudo certbot --nginx -d votre-domaine.com
```

3. Renouvellement automatique :

```bash
sudo certbot renew --dry-run
```

### Avec Cloudflare

1. Créez un compte Cloudflare
2. Ajoutez votre domaine
3. Configurez les DNS pour pointer vers votre VPS
4. Activez "Flexible SSL" dans les paramètres SSL/TLS

## Maintenance

### Mises à jour

```bash
# Sur le serveur
cd /opt/dice-bot
git pull
npm install --production
pm2 restart dice-bot dice-dashboard
```

### Sauvegardes

```bash
# Sauvegarde MongoDB
mongodump --db dicebot --out /backup/$(date +%Y%m%d)

# Restaurer
mongorestore --db dicebot /backup/20240101/dicebot
```

### Logs

```bash
# Voir les logs PM2
pm2 logs dice-bot
pm2 logs dice-dashboard

# Logs MongoDB
sudo tail -f /var/log/mongodb/mongod.log
```

### Monitoring

```bash
# Statistiques PM2
pm2 monit

# Ressources système
htop
```

## Sécurité

1. **Firewall** :

```bash
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

2. **Fail2Ban** :

```bash
sudo apt install fail2ban
```

3. **Mises à jour régulières** :

```bash
sudo apt update && sudo apt upgrade -y
```

## Dépannage

### Bot ne démarre pas

```bash
# Vérifier les logs
pm2 logs dice-bot

# Vérifier MongoDB
sudo systemctl status mongod

# Vérifier les variables d'environnement
pm2 env dice-bot
```

### Dashboard inaccessible

```bash
# Vérifier si le dashboard tourne
pm2 status

# Vérifier les logs
pm2 logs dice-dashboard

# Vérifier Nginx
sudo nginx -t
sudo systemctl status nginx
```

### Problèmes de base de données

```bash
# Vérifier la connexion MongoDB
mongo --eval "db.adminCommand('ping')"

# Vérifier les logs MongoDB
sudo tail -f /var/log/mongodb/mongod.log
```

## Support

Pour plus d'aide :

- Documentation Discord.js : https://discord.js.org
- Documentation MongoDB : https://docs.mongodb.com
- Serveur support Discord : [Lien]
- Issues GitHub : https://github.com/yourusername/dice-bot/issues

---

**Bon déploiement ! 🚀**
