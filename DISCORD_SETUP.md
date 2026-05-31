# 🎮 Guide de Configuration - Discord Developer Portal

Guide complet pour configurer Dice Bot sur le Discord Developer Portal.

## 📋 Table des matières

- [Créer une application](#créer-une-application)
- [Créer le bot](#créer-le-bot)
- [Configurer les Intents](#configurer-les-intents)
- [Configurer OAuth2](#configurer-oauth2)
- [Générer le lien d'invitation](#générer-le-lien-dinvitation)
- [Configurer le bot](#configurer-le-bot)
- [Obtenir les informations nécessaires](#obtenir-les-informations-nécessaires)

---

## Créer une application

### 1. Accéder au Discord Developer Portal

1. Allez sur [https://discord.com/developers/applications](https://discord.com/developers/applications)
2. Connectez-vous avec votre compte Discord

### 2. Créer une nouvelle application

1. Cliquez sur le bouton **"New Application"** en haut à droite
2. Entrez un nom pour votre application (ex: "Dice Bot")
3. Cliquez sur **"Create"**

### 3. Informations de base

1. Dans la section **"General Information"** :
   - **NAME** : Dice Bot (ou le nom de votre choix)
   - **DESCRIPTION** : Bot Discord complet avec modération, économie, fun et dashboard
   - **ICON** : Uploadez une icône pour votre bot (optionnel mais recommandé)
   - **APPLICATION ID** : Notez cet ID, vous en aurez besoin
2. Cliquez sur **"Save Changes"**

---

## Créer le bot

### 1. Créer le compte bot

1. Dans le menu de gauche, cliquez sur **"Bot"**
2. Cliquez sur le bouton **"Add Bot"** en haut à droite
3. Confirmez en cliquant sur **"Yes, do it!"**

### 2. Configurer le bot

1. **USERNAME** : Dice Bot (ou le nom de votre choix)
2. **AVATAR** : Uploadez un avatar pour le bot (optionnel)
3. Cochez **"Public Bot"** si vous voulez que d'autres puissent inviter votre bot
4. Cochez **"Require OAuth2 Code Grant"** si vous utilisez le dashboard
5. Cochez **"Server Members Intent"** (nécessaire pour certaines fonctionnalités)
6. Cliquez sur **"Save Changes"**

### 3. Obtenir le Token

1. Faites défiler jusqu'à la section **"TOKEN"**
2. Cliquez sur **"Reset Token"** pour générer un nouveau token
3. **IMPORTANT** : Copiez et sauvegardez ce token immédiatement
   - ⚠️ **Ne partagez jamais votre token avec personne**
   - ⚠️ **Ne commitez jamais votre token dans un repository public**
   - ⚠️ **Ce token ne sera plus affiché après avoir quitté la page**

---

## Configurer les Intents

Les Intents (intentions) déterminent quels événements le bot peut recevoir.

### 1. Activer les Privileged Gateway Intents

1. Dans la section **"Bot"**, faites défiler jusqu'à **"Privileged Gateway Intents"**
2. Activez les intents suivants :

   ✅ **Presence Intent**
   - Permet au bot de recevoir les mises à jour de présence (statut, activité)
   - Nécessaire pour les fonctionnalités de présence et d'activité

   ✅ **Server Members Intent**
   - Permet au bot de recevoir les événements de membres (joindre/quitter)
   - Nécessaire pour les systèmes de bienvenue, niveaux, etc.

   ✅ **Message Content Intent**
   - Permet au bot de lire le contenu des messages
   - Nécessaire pour les commandes de modération, fun, économie, etc.

3. Cliquez sur **"Save Changes"**

### 2. Intents standards (activés par défaut)

Les intents suivants sont généralement activés par défaut :

- ✅ **Guilds** : Reçoit les événements de serveur
- ✅ **Guild Members** : Reçoit les événements de membres
- ✅ **Guild Messages** : Reçoit les messages de serveur
- ✅ **Guild Voice States** : Reçoit les événements vocaux
- ✅ **Guild Invites** : Reçoit les événements d'invitations
- ✅ **Guild Presences** : Reçoit les présences des membres
- ✅ **Guild Message Reactions** : Reçoit les réactions aux messages
- ✅ **Guild Moderation** : Reçoit les événements de modération

---

## Configurer OAuth2

OAuth2 permet l'authentification et l'autorisation du bot.

### 1. Configurer les Redirects (pour le dashboard)

1. Dans le menu de gauche, cliquez sur **"OAuth2"**
2. Dans la section **"Redirects"**, cliquez sur **"Add Redirect"**
3. Ajoutez vos URLs de callback :

   **Pour le développement local :**
   ```
   http://localhost:3000/auth/discord/callback
   ```

   **Pour la production :**
   - Vous devez avoir un domaine réel (ex: dicebot.com, mon-bot.fr)
   - Exemple: `https://dicebot.com/auth/discord/callback`
   - Exemple: `https://mon-bot.herokuapp.com/auth/discord/callback`
   - Exemple: `https://dice-bot.railway.app/auth/discord/callback`

4. Cliquez sur **"Save Changes"**

### Comment fonctionne l'URL de callback ?

L'URL de callback est une partie essentielle du flux OAuth2. Voici comment cela fonctionne :

**Le flux d'authentification :**

1. **Utilisateur clique sur "Connexion avec Discord"**
   - Le dashboard redirige l'utilisateur vers Discord
   - URL: `https://discord.com/oauth2/authorize?client_id=...&redirect_uri=...`

2. **Discord demande l'autorisation**
   - L'utilisateur voit la page de consentement Discord
   - Discord affiche les permissions demandées par l'application

3. **Utilisateur accepte**
   - Discord génère un code d'autorisation
   - Discord redirige l'utilisateur vers votre URL de callback
   - URL: `https://votre-domaine.com/auth/discord/callback?code=...`

4. **Votre serveur reçoit le callback**
   - Le serveur Express reçoit la requête avec le code
   - Le serveur échange le code contre un token d'accès
   - Le serveur utilise le token pour obtenir les informations utilisateur

5. **Session créée**
   - Les informations utilisateur sont stockées en session
   - L'utilisateur est redirigé vers le dashboard

**Pourquoi un domaine est nécessaire en production :**

- Discord exige HTTPS pour les callbacks en production
- `localhost` ne fonctionne que pour le développement
- Vous devez avoir un domaine avec SSL/TLS configuré

**Comment obtenir un domaine pour la production :**

**Option 1: Services cloud gratuits**
- **Heroku**: `https://votre-app.herokuapp.com`
- **Railway**: `https://votre-app.railway.app`
- **Render**: `https://votre-app.onrender.com`
- **Vercel**: `https://votre-app.vercel.app`

**Option 2: Acheter un domaine**
- **Namecheap**: ~10€/an
- **GoDaddy**: ~12€/an
- **OVH**: ~5€/an
- **Google Domains**: ~12€/an

**Option 3: Sous-domaine gratuit**
- **Freenom**: .tk, .ml, .ga (gratuits)
- **DuckDNS**: Gratuit pour usage personnel

### 2. Configurer les Scopes

1. Dans la section **"OAuth2"** > **"URL Generator"**
2. Cochez les scopes nécessaires :

   ✅ **bot** : Permet d'ajouter le bot comme utilisateur bot
   ✅ **applications.commands** : Permet d'utiliser les slash commands

### 3. Configurer les Permissions Bot

1. Dans la section **"Bot Permissions"**, cochez les permissions nécessaires :

   **Permissions recommandées (Administrator) :**
   ✅ **Administrator** : Toutes les permissions
   - Recommandé pour une configuration facile
   - Permet au bot de fonctionner sans restrictions

   **Ou permissions spécifiques :**

   **Modération :**
   ✅ **Kick Members** : Expulser des membres
   ✅ **Ban Members** : Bannir des membres
   ✅ **Moderate Members** : Time-out des membres
   ✅ **Manage Messages** : Supprimer/gerer les messages
   ✅ **Manage Roles** : Gérer les rôles
   ✅ **Manage Channels** : Gérer les salons
   ✅ **Manage Threads** : Gérer les fils de discussion
   ✅ **Mute Members** : Rendre muet en vocal
   ✅ **Deafen Members** : Rendre sourd en vocal
   ✅ **Move Members** : Déplacer des membres en vocal

   **Administration :**
   ✅ **Manage Server** : Gérer le serveur
   ✅ **Manage Webhooks** : Gérer les webhooks
   ✅ **Manage Emojis and Stickers** : Gérer les émojis et stickers
   ✅ **View Audit Log** : Voir le journal d'audit
   ✅ **View Guild Insights** : Voir les statistiques du serveur

   **Messages :**
   ✅ **Send Messages** : Envoyer des messages
   ✅ **Send Messages in Threads** : Envoyer des messages dans les fils
   ✅ **Create Public Threads** : Créer des fils publics
   ✅ **Create Private Threads** : Créer des fils privés
   ✅ **Embed Links** : Envoyer des liens intégrés
   ✅ **Attach Files** : Envoyer des fichiers
   ✅ **Add Reactions** : Ajouter des réactions
   ✅ **Use External Emojis** : Utiliser des émojis externes
   ✅ **Mention Everyone** : Mentionner everyone
   ✅ **Manage Messages** : Gérer les messages

   **Vocal :**
   ✅ **Connect** : Se connecter aux salons vocaux
   ✅ **Speak** : Parler dans les salons vocaux
   ✅ **Stream** : Diffuser dans les salons vocaux
   ✅ **Use Voice Activity** : Utiliser l'activité vocale
   ✅ **Priority Speaker** : Haut-parleur prioritaire

2. Cliquez sur **"Copy"** pour copier l'URL générée

---

## Générer le lien d'invitation

### 1. Méthode via URL Generator

1. Dans **"OAuth2"** > **"URL Generator"**
2. Cochez les scopes et permissions comme décrit ci-dessus
3. Cliquez sur **"Copy"** pour copier l'URL
4. Collez l'URL dans votre navigateur
5. Sélectionnez le serveur où vous voulez ajouter le bot
6. Autorisez le bot

### 2. Méthode manuelle (URL formatée)

Vous pouvez aussi créer l'URL manuellement :

```
https://discord.com/oauth2/authorize?client_id=VOTRE_CLIENT_ID&permissions=8&scope=bot%20applications.commands
```

Remplacez `VOTRE_CLIENT_ID` par votre Application ID.

**Permissions codes :**
- `8` = Administrator (toutes les permissions)
- `0` = Aucune permission (à éviter)

---

## Configurer le bot

### 1. Inviter le bot sur votre serveur

1. Utilisez l'URL générée ou l'URL manuelle
2. Sélectionnez votre serveur
3. Autorisez les permissions demandées
4. Complétez le CAPTCHA si nécessaire

### 2. Vérifier que le bot est sur le serveur

1. Allez sur votre serveur Discord
2. Vérifiez que Dice Bot apparaît dans la liste des membres
3. Le bot devrait être en ligne avec le statut "Playing /help"

### 3. Tester le bot

1. Tapez `/help` dans un salon
2. Vous devriez voir la liste des commandes
3. Si vous ne voyez pas les slash commands, attendez quelques minutes (synchronisation)

---

## Obtenir les informations nécessaires

### Variables d'environnement requises

Pour votre fichier `.env`, vous aurez besoin de :

1. **DISCORD_TOKEN**
   - Obtenu depuis la section "Bot" > "TOKEN"
   - Ne le partagez jamais !

2. **DISCORD_CLIENT_ID**
   - Obtenu depuis la section "General Information" > "APPLICATION ID"
   - Affiché aussi dans l'URL du Developer Portal

3. **DISCORD_CLIENT_SECRET**
   - Obtenu depuis la section "OAuth2" > "CLIENT SECRET"
   - Cliquez sur "Reset Secret" pour le générer
   - ⚠️ Ne le partagez jamais !

4. **DISCORD_REDIRECT_URI**
   - URL que vous avez configurée dans OAuth2 > Redirects
   - Ex: `http://localhost:3000/auth/discord/callback`

### Exemple de configuration `.env`

```env
# Discord Bot Configuration
DISCORD_TOKEN=your_discord_bot_token_here
DISCORD_CLIENT_ID=your_discord_client_id_here
DISCORD_CLIENT_SECRET=your_discord_client_secret_here
DISCORD_REDIRECT_URI=http://localhost:3000/auth/discord/callback

# Dashboard Configuration
DASHBOARD_PORT=3000
SESSION_SECRET=votre_secret_aleatoire_ici

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/dicebot

# Bot Configuration
PREFIX=!
OWNER_ID=123456789012345678
EMBED_COLOR=#5865F2
```

---

## 🔧 Configuration avancée

### Activer le mode développeur (optionnel)

Pour accéder à des fonctionnalités supplémentaires :

1. Allez dans vos **Paramètres utilisateur Discord**
2. **Apparence** > **Mode développeur**
3. Activez le mode développeur

Cela vous permet de :
- Copier les IDs des serveurs, salons, messages, utilisateurs
- Accéder aux journaux d'audit
- Voir plus d'informations dans le client Discord

### Configurer les fonctionnalités du serveur

1. Dans le Developer Portal, allez sur votre application
2. Cliquez sur votre serveur dans la section "Guild"
3. Configurez les fonctionnalités selon vos besoins

---

## 🚨 Sécurité

### Bonnes pratiques de sécurité

1. **Ne partagez jamais vos tokens**
   - Token du bot
   - Client Secret
   - Session Secret

2. **Utilisez des variables d'environnement**
   - Ne hardcodez jamais les tokens dans le code
   - Utilisez toujours un fichier `.env`

3. **Générez des secrets sécurisés**
   - Utilisez des chaînes aléatoires longues
   - Ex: `openssl rand -base64 32`

4. **Limitez les permissions**
   - N'utilisez Administrator que si nécessaire
   - Privilégiez les permissions spécifiques

5. **Surveillez l'activité du bot**
   - Vérifiez les journaux d'audit
   - Surveillez les connexions anormales

---

## ❓ Dépannage

### Le bot ne se connecte pas

1. Vérifiez que le token est correct
2. Vérifiez que les intents sont activés
3. Vérifiez que vous avez invité le bot sur le serveur
4. Vérifiez les logs du bot pour les erreurs

### Les slash commands n'apparaissent pas

1. Attendez quelques minutes (synchronisation)
2. Vérifiez que `applications.commands` scope est activé
3. Essayez de redémarrer le bot
4. Utilisez la commande de synchronisation si disponible

### Erreur "Invalid Token"

1. Le token a peut-être expiré ou été révoqué
2. Générez un nouveau token dans le Developer Portal
3. Mettez à jour votre fichier `.env`

### Erreur "Missing Permissions"

1. Vérifiez que le bot a les permissions nécessaires
2. Vérifiez la hiérarchie des rôles
3. Assurez-vous que le rôle du bot est assez élevé

---

## 📚 Ressources supplémentaires

- [Documentation Discord.js](https://discord.js.org)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [Discord API Documentation](https://discord.com/developers/docs/intro)
- [Guide des Intents](https://discord.com/developers/docs/topics/gateway#gateway-intents)

---

**Configuration terminée ! 🎉**

Votre bot Dice Bot est maintenant configuré sur le Discord Developer Portal et prêt à être utilisé.
