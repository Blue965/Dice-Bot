# Dice Bot - Commandes Slash

## Table des matières
- [Modération](#modération)
- [Administration](#administration)
- [Utilitaires](#utilitaires)
- [Fun](#fun)
- [Économie](#économie)
- [Tickets](#tickets)
- [Roblox](#roblox)
- [Sécurité](#sécurité)
- [Commandes Originales](#commandes-originales)

---

## Modération

### /kick
**Description :** Expulse un membre du serveur
**Catégorie :** Modération
**Permissions :** Kick Members
**Options :**
- `user` (Utilisateur) : Le membre à expulser
- `reason` (String) : Raison de l'expulsion
**Exemple :** `/kick @user Spam`
**Réponse :** ✅ @user a été expulsé du serveur. Raison : Spam

### /ban
**Description :** Bannit un membre du serveur
**Catégorie :** Modération
**Permissions :** Ban Members
**Options :**
- `user` (Utilisateur) : Le membre à bannir
- `reason` (String) : Raison du bannissement
- `delete_days` (Integer) : Jours de messages à supprimer (0-7)
**Exemple :** `/ban @user Harcèlement delete_days:7`
**Réponse :** 🔨 @user a été banni du serveur. Raison : Harcèlement

### /unban
**Description :** Débannit un utilisateur du serveur
**Catégorie :** Modération
**Permissions :** Ban Members
**Options :**
- `user` (String) : L'ID ou le tag de l'utilisateur
- `reason` (String) : Raison du débannissement
**Exemple :** `/unban 123456789012345678`
**Réponse :** 🔓 L'utilisateur a été débanni du serveur.

### /warn
**Description :** Avertit un membre du serveur
**Catégorie :** Modération
**Permissions :** Manage Messages
**Options :**
- `user` (Utilisateur) : Le membre à avertir
- `reason` (String) : Raison de l'avertissement
**Exemple :** `/warn @user Langage inapproprié`
**Réponse :** ⚠️ @user a reçu un avertissement. Raison : Langage inapproprié

### /warnings
**Description :** Affiche les avertissements d'un membre
**Catégorie :** Modération
**Permissions :** Manage Messages
**Options :**
- `user` (Utilisateur) : Le membre concerné
**Exemple :** `/warnings @user`
**Réponse :** 📋 @user a 3 avertissements : 1. Spam, 2. Langage inapproprié, 3. Double compte

### /clear
**Description :** Supprime un nombre de messages
**Catégorie :** Modération
**Permissions :** Manage Messages
**Options :**
- `amount` (Integer) : Nombre de messages à supprimer (1-100)
- `target` (Utilisateur) : Cible spécifique (optionnel)
**Exemple :** `/clear amount:50`
**Réponse :** 🗑️ 50 messages ont été supprimés.

### /mute
**Description :** Rend muet un membre du serveur
**Catégorie :** Modération
**Permissions :** Manage Roles
**Options :**
- `user` (Utilisateur) : Le membre à rendre muet
- `duration` (String) : Durée (ex: 1h, 30m)
- `reason` (String) : Raison du mute
**Exemple :** `/mute @user duration:1h reason:Spam`
**Réponse :** 🔇 @user a été rendu muet pendant 1 heure. Raison : Spam

### /unmute
**Description :** Retire le mute d'un membre
**Catégorie :** Modération
**Permissions :** Manage Roles
**Options :**
- `user` (Utilisateur) : Le membre à unmute
**Exemple :** `/unmute @user`
**Réponse :** 🔊 @user n'est plus muet.

### /lock
**Description :** Verrouille un salon
**Catégorie :** Modération
**Permissions :** Manage Channels
**Options :**
- `channel` (Salon) : Le salon à verrouiller (défaut: salon actuel)
- `reason` (String) : Raison du verrouillage
**Exemple :** `/lock reason:Discord en cours`
**Réponse :** 🔒 Le salon a été verrouillé. Raison : Discord en cours

### /unlock
**Description :** Déverrouille un salon
**Catégorie :** Modération
**Permissions :** Manage Channels
**Options :**
- `channel` (Salon) : Le salon à déverrouiller (défaut: salon actuel)
**Exemple :** `/unlock`
**Réponse :** 🔓 Le salon a été déverrouillé.

### /slowmode
**Description :** Active le mode lent sur un salon
**Catégorie :** Modération
**Permissions :** Manage Channels
**Options :**
- `duration` (Integer) : Délai en secondes (0-21600)
- `channel` (Salon) : Le salon concerné (défaut: salon actuel)
**Exemple :** `/slowmode duration:5`
**Réponse :** ⏱️ Le mode lent a été activé (5 secondes entre chaque message).

### /nick
**Description :** Modifie le pseudonyme d'un membre
**Catégorie :** Modération
**Permissions :** Manage Nicknames
**Options :**
- `user` (Utilisateur) : Le membre concerné
- `nickname` (String) : Nouveau pseudonyme
**Exemple :** `/nick @user NouveauPseudo`
**Réponse :** ✏️ Le pseudonyme de @user a été modifié en "NouveauPseudo".

### /timeout
**Description :** Met en time-out un membre
**Catégorie :** Modération
**Permissions :** Moderate Members
**Options :**
- `user` (Utilisateur) : Le membre à time-out
- `duration` (String) : Durée (ex: 10m, 1h, 1d)
- `reason` (String) : Raison du time-out
**Exemple :** `/timeout @user duration:10m reason:Spam`
**Réponse :** ⏰ @user a été mis en time-out pour 10 minutes.

### /untimeout
**Description :** Retire le time-out d'un membre
**Catégorie :** Modération
**Permissions :** Moderate Members
**Options :**
- `user` (Utilisateur) : Le membre concerné
**Exemple :** `/untimeout @user`
**Réponse :** ⏰ @user n'est plus en time-out.

---

## Administration

### /config
**Description :** Configure les paramètres du bot
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `setting` (String) : Paramètre à modifier
- `value` (String) : Nouvelle valeur
**Exemple :** `/config setting:prefix value:!`
**Réponse :** ⚙️ Le préfixe a été configuré sur "!".

### /setup
**Description :** Configure le bot pour le serveur
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `type` (String) : Type de configuration (welcome, logs, roles, etc.)
**Exemple :** `/setup type:welcome`
**Réponse :** 🎯 Suivez les instructions pour configurer le système de bienvenue.

### /autorole
**Description :** Configure les rôles automatiques
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `action` (String) : add/remove
- `role` (Rôle) : Le rôle concerné
**Exemple :** `/autorole action:add role:@Membre`
**Réponse :** ✅ Le rôle @Membre sera automatiquement attribué aux nouveaux membres.

### /welcome
**Description :** Configure le message de bienvenue
**Catégorie :** Administration
**Permissions :** Manage Server
**Options :**
- `channel` (Salon) : Salon de bienvenue
- `message` (String) : Message de bienvenue
**Exemple :** `/welcome channel:#bienvenue message:Bienvenue {user} !`
**Réponse :** 👋 Le message de bienvenue a été configuré.

### /goodbye
**Description :** Configure le message d'au revoir
**Catégorie :** Administration
**Permissions :** Manage Server
**Options :**
- `channel` (Salon) : Salon d'au revoir
- `message` (String) : Message d'au revoir
**Exemple :** `/goodbye channel:#départs message:Au revoir {user} !`
**Réponse :** 👋 Le message d'au revoir a été configuré.

### /logs
**Description :** Configure le système de logs
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `channel` (Salon) : Salon des logs
- `type` (String) : Type de logs (moderation, messages, etc.)
**Exemple :** `/logs channel:#logs type:moderation`
**Réponse :** 📋 Les logs de modération seront envoyés dans #logs.

### /backup
**Description :** Crée une sauvegarde du serveur
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `type` (String) : Type de sauvegarde (roles, channels, full)
**Exemple :** `/backup type:full`
**Réponse :** 💾 Sauvegarde complète du serveur créée. ID : backup_123456

### /restore
**Description :** Restaure une sauvegarde du serveur
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `backup_id` (String) : ID de la sauvegarde
**Exemple :** `/restore backup_id:backup_123456`
**Réponse :** 🔄 Restauration de la sauvegarde backup_123456 en cours...

### /reactionrole
**Description :** Crée un système de réactions-rôles
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `message` (String) : ID du message
- `emoji` (String) : Émoji de réaction
- `role` (Rôle) : Rôle à attribuer
**Exemple :** `/reactionrole message:123456789 emoji:🎮 role:@Gamer`
**Réponse :** ✅ Réaction 🎮 liée au rôle @Gamer.

### /serverstats
**Description :** Configure les statistiques du serveur
**Catégorie :** Administration
**Permissions :** Manage Channels
**Options :**
- `type` (String) : Type de statistique (members, bots, etc.)
- `channel` (Salon) : Salon à utiliser
**Exemple :** `/serverstats type:members channel:#stat-membres`
**Réponse :** 📊 Le compteur de membres sera mis à jour dans #stat-membres.

---

## Utilitaires

### /ping
**Description :** Affiche la latence du bot
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/ping`
**Réponse :** 🏓 Pong ! Latence : 45ms

### /help
**Description :** Affiche la liste des commandes
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `category` (String) : Catégorie spécifique (optionnel)
**Exemple :** `/help category:modération`
**Réponse :** 📚 Liste des commandes de modération : /kick, /ban, /warn...

### /userinfo
**Description :** Affiche les informations d'un utilisateur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `user` (Utilisateur) : L'utilisateur concerné (défaut: vous-même)
**Exemple :** `/userinfo @user`
**Réponse :** 👤 Informations sur @user : ID, rejoint le, rôles, etc.

### /serverinfo
**Description :** Affiche les informations du serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/serverinfo`
**Réponse :** 🖥️ Serveur : Mon Serveur | Membres : 150 | Rôles : 25

### /avatar
**Description :** Affiche l'avatar d'un utilisateur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `user` (Utilisateur) : L'utilisateur concerné (défaut: vous-même)
**Exemple :** `/avatar @user`
**Réponse :** 🖼️ Avatar de @user : [lien de l'image]

### /banner
**Description :** Affiche la bannière d'un utilisateur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `user` (Utilisateur) : L'utilisateur concerné (défaut: vous-même)
**Exemple :** `/banner @user`
**Réponse :** 🎨 Bannière de @user : [lien de l'image]

### /roleinfo
**Description :** Affiche les informations d'un rôle
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `role` (Rôle) : Le rôle concerné
**Exemple :** `/roleinfo @Modérateur`
**Réponse :** 🎭 Rôle : Modérateur | Membres : 15 | Couleur : #FF0000

### /channelinfo
**Description :** Affiche les informations d'un salon
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `channel` (Salon) : Le salon concerné (défaut: salon actuel)
**Exemple :** `/channelinfo #général`
**Réponse :** 📢 Salon : #général | Type : Texte | Créé le : 01/01/2024

### /botinfo
**Description :** Affiche les informations du bot
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/botinfo`
**Réponse :** 🤖 Dice Bot v1.0.0 | Serveurs : 150 | Utilisateurs : 50000

### /invite
**Description :** Génère un lien d'invitation du bot
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/invite`
**Réponse :** 🔗 [Lien d'invitation du bot]

### /uptime
**Description :** Affiche le temps de fonctionnement du bot
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/uptime`
**Réponse :** ⏱️ Le bot fonctionne depuis 5 jours, 12 heures et 30 minutes.

### /suggest
**Description :** Envoie une suggestion pour le serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `suggestion` (String) : Votre suggestion
**Exemple :** `/suggest Ajouter un salon de musique`
**Réponse :** 💡 Votre suggestion a été envoyée aux administrateurs.

---

## Fun

### /roll
**Description :** Lance un dé
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `sides` (Integer) : Nombre de faces (défaut: 6)
- `amount` (Integer) : Nombre de dés (défaut: 1)
**Exemple :** `/roll sides:20 amount:2`
**Réponse :** 🎲 Résultat : 15 et 8

### /coinflip
**Description :** Lance une pièce
**Catégorie :** Fun
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/coinflip`
**Réponse :** 🪙 Pile !

### /8ball
**Description :** Pose une question au 8ball
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `question` (String) : Votre question
**Exemple :** `/8ball vais-je réussir ?`
**Réponse :** 🎱 Les signes pointent vers oui.

### /meme
**Description :** Affiche un mème aléatoire
**Catégorie :** Fun
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/meme`
**Réponse :** 😂 [Image d'un mème]

### /joke
**Description :** Affiche une blague aléatoire
**Catégorie :** Fun
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/joke`
**Réponse :** 😄 Pourquoi les plongeurs plongent-ils toujours en arrière ? Parce que sinon ils tomberaient dans le bateau.

### /rate
**Description :** Note quelque chose
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `thing` (String) : Ce que vous voulez noter
**Exemple :** `/rate @user`
**Réponse :** ⭐ Je note @user 8/10

### /ship
**Description :** Calcule la compatibilité entre deux personnes
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `user1` (Utilisateur) : Premier utilisateur
- `user2` (Utilisateur) : Deuxième utilisateur
**Exemple :** `/ship user1:@user1 user2:@user2`
**Réponse :** 💕 @user1 ❤️ @user2 = 75% de compatibilité !

### /wouldyourather
**Description :** Propose un choix difficile
**Catégorie :** Fun
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/wouldyourather`
**Réponse :** 🤔 Préféreriez-vous ne plus jamais pouvoir dormir ou ne plus jamais pouvoir manger ?

### /rps
**Description :** Joue au pierre-feuille-ciseaux
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `choice` (String) : pierre, feuille ou ciseaux
**Exemple :** `/rps choice:pierre`
**Réponse :** ✊ Vous : Pierre | 🤖 Bot : Ciseaux | 🎉 Vous gagnez !

### /trivia
**Description :** Lance une question de culture générale
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `category` (String) : Catégorie (science, histoire, etc.)
**Exemple :** `/trivia category:science`
**Réponse :** ❓ Quelle est la planète la plus proche du Soleil ? A) Vénus B) Mercure C) Mars

---

## Économie

### /balance
**Description :** Affiche votre solde
**Catégorie :** Économie
**Permissions :** Aucune
**Options :**
- `user` (Utilisateur) : Utilisateur concerné (optionnel)
**Exemple :** `/balance`
**Réponse :** 💰 Solde : 1500 🪙

### /daily
**Description :** Récupère votre récompense quotidienne
**Catégorie :** Économie
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/daily`
**Réponse :** 🎁 Vous avez reçu 500 🪙 ! Revenez dans 24h.

### /work
**Description :** Travaille pour gagner de l'argent
**Catégorie :** Économie
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/work`
**Réponse :** 💼 Vous avez travaillé et gagné 200 🪙 !

### /beg
**Description :** Demande de l'argent
**Catégorie :** Économie
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/beg`
**Réponse :** 🙏 Quelqu'un vous a donné 50 🪙 !

### /deposit
**Description :** Dépose de l'argent en banque
**Catégorie :** Économie
**Permissions :** Aucune
**Options :**
- `amount` (Integer) : Montant à déposer
**Exemple :** `/deposit amount:500`
**Réponse :** 🏦 500 🪙 ont été déposés en banque.

### /withdraw
**Description :** Retire de l'argent de la banque
**Catégorie :** Économie
**Permissions :** Aucune
**Options :**
- `amount` (Integer) : Montant à retirer
**Exemple :** `/withdraw amount:200`
**Réponse :** 🏦 200 🪙 ont été retirés de la banque.

### /pay
**Description :** Envoie de l'argent à un utilisateur
**Catégorie :** Économie
**Permissions :** Aucune
**Options :**
- `user` (Utilisateur) : Destinataire
- `amount` (Integer) : Montant à envoyer
**Exemple :** `/pay user:@user amount:100`
**Réponse :** 💸 Vous avez envoyé 100 🪙 à @user.

### /shop
**Description :** Affiche le magasin
**Catégorie :** Économie
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/shop`
**Réponse :** 🛒 Magasin : 1. Rôle VIP - 5000🪙, 2. Couleur personnalisée - 2000🪙

### /buy
**Description :** Achète un article du magasin
**Catégorie :** Économie
**Permissions :** Aucune
**Options :**
- `item` (String) : Nom de l'article
**Exemple :** `/buy item:Rôle VIP`
**Réponse :** ✅ Vous avez acheté Rôle VIP pour 5000 🪙 !

### /inventory
**Description :** Affiche votre inventaire
**Catégorie :** Économie
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/inventory`
**Réponse :** 🎒 Inventaire : Rôle VIP, Couleur personnalisée, Badge spécial

---

## Tickets

### /ticket
**Description :** Crée un ticket de support
**Catégorie :** Tickets
**Permissions :** Aucune
**Options :**
- `reason` (String) : Raison du ticket
**Exemple :** `/ticket reason:Problème avec mon compte`
**Réponse :** 🎫 Ticket #1234 créé dans #ticket-1234

### /close
**Description :** Ferme le ticket actuel
**Catégorie :** Tickets
**Permissions :** Aucune
**Options :**
- `reason` (String) : Raison de la fermeture
**Exemple :** `/close reason:Problème résolu`
**Réponse :** 🔒 Ticket fermé. Transcription générée.

### /claim
**Description :** S'attribue le ticket
**Catégorie :** Tickets
**Permissions :** Manage Threads
**Options :** Aucune
**Exemple :** `/claim`
**Réponse :** ✋ Vous avez pris en charge ce ticket.

### /rename
**Description :** Renomme le ticket
**Catégorie :** Tickets
**Permissions :** Manage Threads
**Options :**
- `name` (String) : Nouveau nom
**Exemple :** `/rename name:Ticket-Important`
**Réponse :** ✏️ Le ticket a été renommé en "Ticket-Important".

### /transcript
**Description :** Génère la transcription du ticket
**Catégorie :** Tickets
**Permissions :** Manage Threads
**Options :** Aucune
**Exemple :** `/transcript`
**Réponse :** 📄 Transcription générée : [lien]

---

## Roblox

### /robloxuser
**Description :** Affiche les informations d'un utilisateur Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `username` (String) : Nom d'utilisateur Roblox
**Exemple :** `/robloxuser username:Player1`
**Réponse :** 👤 Player1 | ID : 123456 | Abonnés : 1500 | Suivis : 200

### /robloxavatar
**Description :** Affiche l'avatar d'un utilisateur Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `username` (String) : Nom d'utilisateur Roblox
**Exemple :** `/robloxavatar username:Player1`
**Réponse :** 🖼️ Avatar de Player1 : [image]

### /robloxgame
**Description :** Affiche les informations d'un jeu Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `game_id` (Integer) : ID du jeu
**Exemple :** `/robloxgame game_id:123456789`
**Réponse :** 🎮 Jeu : Adopt Me! | Joueurs : 15000 | Likes : 500000

### /robloxgroup
**Description :** Affiche les informations d'un groupe Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `group_id` (Integer) : ID du groupe
**Exemple :** `/robloxgroup group_id:123456789`
**Réponse :** 👥 Groupe : Mon Groupe | Membres : 50000 | Owner : Player1

### /robuxcalculator
**Description :** Convertit les Robux en devise réelle
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `robux` (Integer) : Nombre de Robux
- `currency` (String) : Devise (USD, EUR)
**Exemple :** `/robuxcalculator robux:1000 currency:EUR`
**Réponse :** 💵 1000 Robux = 10.00 EUR

### /marketplace
**Description :** Recherche un article sur le marketplace Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `query` (String) : Terme de recherche
**Exemple :** `/marketplace query:hat`
**Réponse :** 🔍 Résultats : 1. Cool Hat - 50 Robux, 2. Epic Hat - 100 Robux

---

## Sécurité

### /antiraid
**Description :** Active/désactive l'anti-raid
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `action` (String) : enable/disable
**Exemple :** `/antiraid action:enable`
**Réponse :** 🛡️ L'anti-raid a été activé.

### /antinuke
**Description :** Active/désactive l'anti-nuke
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `action` (String) : enable/disable
**Exemple :** `/antinuke action:enable`
**Réponse :** ☢️ L'anti-nuke a été activé.

### /security
**Description :** Affiche les paramètres de sécurité
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/security`
**Réponse :** 🔒 Anti-raid : Activé | Anti-nuke : Activé | Vérification : Activée

### /audit
**Description :** Affiche le journal d'audit du serveur
**Catégorie :** Sécurité
**Permissions :** View Audit Log
**Options :**
- `limit` (Integer) : Nombre d'entrées (défaut: 10)
**Exemple :** `/audit limit:20`
**Réponse :** 📋 20 dernières actions du journal d'audit.

### /blacklist
**Description :** Gère la liste noire
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `action` (String) : add/remove
- `user` (String) : ID de l'utilisateur
**Exemple :** `/blacklist action:add user:123456789`
**Réponse :** 🚫 L'utilisateur 123456789 a été ajouté à la liste noire.

### /whitelist
**Description :** Gère la liste blanche
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `action` (String) : add/remove
- `user` (String) : ID de l'utilisateur
**Exemple :** `/whitelist action:add user:123456789`
**Réponse :** ✅ L'utilisateur 123456789 a été ajouté à la liste blanche.

---

## Commandes Originales

### /dice
**Description :** Lance plusieurs dés avec modificateurs
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `formula` (String) : Formule de dés (ex: 2d6+3, 4d8-2)
**Exemple :** `/dice formula:2d6+3`
**Réponse :** 🎲 2d6+3 : [4, 5] + 3 = 12

### /fortune
**Description :** Tire votre fortune du jour
**Catégorie :** Fun
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/fortune`
**Réponse :** 🔮 Votre fortune : Aujourd'hui est le jour parfait pour de nouvelles aventures.

### /horoscope
**Description :** Affiche votre horoscope
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `sign` (String) : Signe astrologique
**Exemple :** `/horoscope sign:lion`
**Réponse :** ♌ Lion : Aujourd'hui, vous serez charismatique et persuasif.

### /weather
**Description :** Affiche la météo d'une ville
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `city` (String) : Nom de la ville
**Exemple :** `/weather city:Paris`
**Réponse :** 🌤️ Paris : 22°C, Ensoleillé

### /translate
**Description :** Traduit un texte
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `text` (String) : Texte à traduire
- `target` (String) : Langue cible
**Exemple :** `/translate text:Hello target:fr`
**Réponse :** 🌐 "Hello" en français : "Bonjour"

### /poll
**Description :** Crée un sondage
**Catégorie :** Utilitaires
**Permissions :** Manage Messages
**Options :**
- `question` (String) : Question du sondage
- `options` (String) : Options séparées par des virgules
**Exemple :** `/poll question:Quel est votre fruit préféré ? options:Pomme,Banane,Orange`
**Réponse :** 📊 Sondage créé : Quel est votre fruit préféré ?

### /remind
**Description :** Crée un rappel
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `time` (String) : Durée (ex: 1h, 30m)
- `message` (String) : Message du rappel
**Exemple :** `/remind time:1h message:Réunion`
**Réponse :** ⏰ Rappel créé : Je vous rappellerai dans 1 heure pour "Réunion".

### /timer
**Description :** Crée un compte à rebours
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `duration` (String) : Durée (ex: 5m, 1h)
- `label` (String) : Libellé du timer
**Exemple :** `/timer duration:5m label:Pomodoro`
**Réponse :** ⏱️ Timer "Pomodoro" démarré pour 5 minutes.

### /choose
**Description :** Choisit une option au hasard
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `options` (String) : Options séparées par des virgules
**Exemple :** `/choose options:Pizza,Burger,Sushi`
**Réponse :** 🎯 Je choisis : Pizza !

### /reverse
**Description :** Inverse un texte
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `text` (String) : Texte à inverser
**Exemple :** `/reverse text:Bonjour`
**Réponse :** 🔃 ruojnoB

### /emojify
**Description :** Convertit un texte en émojis
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `text` (String) : Texte à convertir
**Exemple :** `/emojify text:Bonjour`
**Réponse :** 🅱️🅾️🇳🇯🅾️🇺️🇷

### /expand
**Description :** Développe un texte
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `text` (String) : Texte à développer
**Exemple :** `/expand text:lol`
**Réponse :** 📝 Laugh Out Loud

### /ascii
**Description :** Convertit un texte en ASCII art
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `text` (String) : Texte à convertir
**Exemple :** `/ascii text:Hi`
**Réponse :** ```
  _   _ 
 | | | |
 | |_| |
 | (_) |
  \___/ 
```

### /password
**Description :** Génère un mot de passe sécurisé
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `length` (Integer) : Longueur (défaut: 16)
- `symbols` (Boolean) : Inclure symboles (défaut: true)
**Exemple :** `/password length:20 symbols:true`
**Réponse :** 🔐 Mot de passe généré : X7#kL9@mP2$qR5&nT8

### /qr
**Description :** Génère un code QR
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `text` (String) : Texte ou URL
**Exemple :** `/qr text:https://example.com`
**Réponse :** 📱 Code QR généré : [image]

### /shorten
**Description :** Raccourcit une URL
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `url` (String) : URL à raccourcir
**Exemple :** `/shorten url:https://example.com/very-long-url`
**Réponse :** 🔗 URL raccourcie : https://dice.bot/abc123

### /color
**Description :** Affiche des informations sur une couleur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `color` (String) : Code hexadécimal ou nom de couleur
**Exemple :** `/color color:#FF5733`
**Réponse :** 🎨 #FF5733 | RGB : 255, 87, 51 | HSL : 11°, 100%, 60%

### /hex
**Description :** Convertit une valeur en hexadécimal
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `value` (Integer) : Valeur à convertir
**Exemple :** `/hex value:255`
**Réponse :** 🔢 255 en hexadécimal : FF

### /binary
**Description :** Convertit un texte en binaire
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `text` (String) : Texte à convertir
**Exemple :** `/binary text:Hi`
**Réponse :** 01001000 01101001

### /base64
**Description :** Encode/décode en base64
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `action` (String) : encode/decode
- `text` (String) : Texte concerné
**Exemple :** `/base64 action:encode text:Bonjour`
**Réponse :** 📝 Qm9uam91cg==

### /md5
**Description :** Génère un hash MD5
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `text` (String) : Texte à hasher
**Exemple :** `/md5 text:Bonjour`
**Réponse :** 🔐 MD5 : ebc5ab6c8e0c4a8e9f0a1b2c3d4e5f6a

### /sha256
**Description :** Génère un hash SHA256
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `text` (String) : Texte à hasher
**Exemple :** `/sha256 text:Bonjour`
**Réponse :** 🔐 SHA256 : a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2

### /uuid
**Description :** Génère un UUID
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/uuid`
**Réponse :** 🆔 UUID généré : 550e8400-e29b-41d4-a716-446655440000

### /timestamp
**Description :** Convertit un timestamp
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `timestamp` (String) : Timestamp Unix
**Exemple :** `/timestamp timestamp:1704067200`
**Réponse :** 🕐 1704067200 = 01/01/2024 00:00:00 UTC

### /timezone
**Description :** Affiche l'heure dans un fuseau horaire
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `timezone` (String) : Fuseau horaire (ex: Europe/Paris)
**Exemple :** `/timezone timezone:Europe/Paris`
**Réponse :** 🌍 Europe/Paris : 15:30:45

### /calculator
**Description :** Effectue un calcul
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `expression` (String) : Expression mathématique
**Exemple :** `/calculator expression:2+2*2`
**Réponse :** 🔢 2+2*2 = 6

### /unitconverter
**Description :** Convertit des unités
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `value` (Float) : Valeur à convertir
- `from` (String) : Unité source
- `to` (String) : Unité cible
**Exemple :** `/unitconverter value:100 from:m to:km`
**Réponse :** 📏 100 m = 0.1 km

### /bmi
**Description :** Calcule l'IMC
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `weight` (Float) : Poids en kg
- `height` (Float) : Taille en cm
**Exemple :** `/bmi weight:70 height:175`
**Réponse :** 💪 IMC : 22.9 (Normal)

### /age
**Description :** Calcule l'âge à partir d'une date de naissance
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `birthdate` (String) : Date de naissance (JJ/MM/AAAA)
**Exemple :** `/age birthdate:01/01/2000`
**Réponse :** 🎂 Vous avez 24 ans.

### /daysuntil
**Description :** Jours restants jusqu'à une date
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `date` (String) : Date cible (JJ/MM/AAAA)
**Exemple :** `/daysuntil date:25/12/2024`
**Réponse :** 📅 209 jours jusqu'au 25/12/2024

### /countdown
**Description :** Compte à rebours vers une date
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `date` (String) : Date cible (JJ/MM/AAAA HH:MM)
- `event` (String) : Nom de l'événement
**Exemple :** `/countdown date:01/01/2025 00:00 event:Nouvel An`
**Réponse :** ⏰ 215 jours, 12 heures, 30 minutes jusqu'au Nouvel An

### /spotify
**Description :** Affiche ce qu'un utilisateur écoute sur Spotify
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `user` (Utilisateur) : Utilisateur concerné (défaut: vous-même)
**Exemple :** `/spotify @user`
**Réponse :** 🎵 @user écoute : Blinding Lights - The Weeknd

### /lyrics
**Description :** Recherche des paroles de chanson
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `song` (String) : Nom de la chanson
- `artist` (String) : Artiste (optionnel)
**Exemple :** `/lyrics song:Blinding Lights artist:The Weeknd`
**Réponse :** 🎤 Paroles de "Blinding Lights"...

### /movie
**Description :** Recherche un film
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `title` (String) : Titre du film
**Exemple :** `/movie title:Inception`
**Réponse :** 🎬 Inception (2010) | ⭐ 8.8/10 | Réalisateur : Christopher Nolan

### /tvshow
**Description :** Recherche une série TV
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `title` (String) : Titre de la série
**Exemple :** `/tvshow title:Breaking Bad`
**Réponse :** 📺 Breaking Bad (2008-2013) | ⭐ 9.5/10 | Saisons : 5

### /book
**Description :** Recherche un livre
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `title` (String) : Titre du livre
**Exemple :** `/book title:1984`
**Réponse :** 📚 1984 - George Orwell | ⭐ 4.6/5 | Pages : 328

### /recipe
**Description :** Recherche une recette
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `query` (String) : Terme de recherche
**Exemple :** `/recipe query:pasta`
**Réponse :** 🍝 Recette : Pasta Carbonara

### /cocktail
**Description :** Recherche un cocktail
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `name` (String) : Nom du cocktail
**Exemple :** `/cocktail name:Mojito`
**Réponse :** 🍹 Mojito : Rhum, Menthe, Citron vert, Eau gazeuse

### /fact
**Description :** Affiche un fait aléatoire
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `category` (String) : Catégorie (science, history, etc.)
**Exemple :** `/fact category:science`
**Réponse :** 💡 Le miel ne se périmé jamais.

### /quote
**Description :** Affiche une citation aléatoire
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `category` (String) : Catégorie (motivational, funny, etc.)
**Exemple :** `/quote category:motivational`
**Réponse :** 💪 "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme." - Winston Churchill

### /advice
**Description :** Donne un conseil aléatoire
**Catégorie :** Fun
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/advice`
**Réponse :** 💡 Prenez du temps pour vous reposer.

### /compliment
**Description :** Fait un compliment aléatoire
**Catégorie :** Fun
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/compliment`
**Réponse :** 😊 Vous avez un sourire magnifique !

### /insult
**Description :** Insulte gentiment (fun)
**Catégorie :** Fun
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/insult`
**Réponse :** 😈 Tu es aussi bête qu'une porte de prison !

### /roast
**Description :** Roast quelqu'un (fun)
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `user` (Utilisateur) : Utilisateur à roaster
**Exemple :** `/roast @user`
**Réponse :** 🔥 @user est si lent que quand il court sur un tapis roulant, il recule.

### /pickupline
**Description :** Affiche une phrase de drague
**Catégorie :** Fun
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/pickupline`
**Réponse :** 💕 Tu as une carte ? Parce que je me suis perdu dans tes yeux.

### /memeify
**Description :** Crée un mème personnalisé
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `template` (String) : Nom du template
- `top` (String) : Texte du haut
- `bottom` (String) : Texte du bas
**Exemple :** `/memeify template:drake top:Non bottom:Oui`
**Réponse :** 😂 [Image du mème créé]

### /captcha
**Description :** Génère un CAPTCHA
**Catégorie :** Sécurité
**Permissions :** Manage Channels
**Options :**
- `channel` (Salon) : Salon pour le CAPTCHA
**Exemple :** `/captcha channel:#vérification`
**Réponse :** 🔐 Système CAPTCHA activé dans #vérification.

### /level
**Description :** Affiche votre niveau
**Catégorie :** Niveaux
**Permissions :** Aucune
**Options :**
- `user` (Utilisateur) : Utilisateur concerné (optionnel)
**Exemple :** `/level`
**Réponse :** 📊 Niveau : 25 | XP : 5000/10000 | Rang : #15

### /leaderboard
**Description :** Affiche le classement XP
**Catégorie :** Niveaux
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/leaderboard`
**Réponse :** 🏆 Classement XP : 1. @User1, 2. @User2, 3. @User3

### /rank
**Description :** Affiche votre rang XP
**Catégorie :** Niveaux
**Permissions :** Aucune
**Options :**
- `user` (Utilisateur) : Utilisateur concerné (optionnel)
**Exemple :** `/rank`
**Réponse :** 🎖️ Rang : 15/150 | XP : 5000

### /xpboost
**Description :** Active un boost XP
**Catégorie :** Niveaux
**Permissions :** Aucune
**Options :**
- `multiplier` (Integer) : Multiplicateur (2x, 3x, etc.)
- `duration` (String) : Durée
**Exemple :** `/xpboost multiplier:2 duration:1h`
**Réponse :** ⚡ Boost 2x activé pour 1 heure !

### /giveaway
**Description :** Crée un giveaway
**Catégorie :** Économie
**Permissions :** Manage Messages
**Options :**
- `duration` (String) : Durée
- `prize` (String) : Prix
- `winners` (Integer) : Nombre de gagnants
**Exemple :** `/giveaway duration:1h prize:Nitro winners:1`
**Réponse :** 🎁 Giveaway créé ! Prix : Nitro | Durée : 1h | Gagnants : 1

### /reroll
**Description :** Relance un giveaway
**Catégorie :** Économie
**Permissions :** Manage Messages
**Options :**
- `message_id` (String) : ID du message giveaway
**Exemple :** `/reroll message_id:123456789`
**Réponse :** 🎲 Nouveau tirage au sort pour le giveaway !

### /steal
**Description :** Vole de l'argent à un utilisateur
**Catégorie :** Économie
**Permissions :** Aucune
**Options :**
- `user` (Utilisateur) : Cible
- `amount` (Integer) : Montant
**Exemple :** `/steal user:@user amount:100`
**Réponse :** 💰 Vous avez volé 100 🪙 à @user !

### /gamble
**Description :** Pariez de l'argent
**Catégorie :** Économie
**Permissions :** Aucune
**Options :**
- `amount` (Integer) : Montant à parier
- `choice` (String) : Votre choix (rouge/noir, pair/impair)
**Exemple :** `/gamble amount:100 choice:rouge`
**Réponse :** 🎰 Résultat : Rouge ! Vous gagnez 200 🪙 !

### /blackjack
**Description :** Joue au Blackjack
**Catégorie :** Économie
**Permissions :** Aucune
**Options :**
- `bet` (Integer) : Mise
**Exemple :** `/blackjack bet:100`
**Réponse :** 🃏 Votre main : 10+7=17 | Croupier : 9+?=?

### /slots
**Description :** Joue aux machines à sous
**Catégorie :** Économie
**Permissions :** Aucune
**Options :**
- `bet` (Integer) : Mise
**Exemple :** `/slots bet:50`
**Réponse :** 🎰 🍒 🍋 🍒 | Vous gagnez 150 🪙 !

### /roulette
**Description :** Joue à la roulette
**Catégorie :** Économie
**Permissions :** Aucune
**Options :**
- `bet` (Integer) : Mise
- `choice` (String) : Numéro ou couleur
**Exemple :** `/roulette bet:100 choice:rouge`
**Réponse :** 🎡 Résultat : Rouge 17 | Vous gagnez 200 🪙 !

### /lottery
**Description :** Achète un ticket de loterie
**Catégorie :** Économie
**Permissions :** Aucune
**Options :**
- `numbers` (String) : Numéros (1-50, séparés par des virgules)
**Exemple :** `/lottery numbers:5,12,23,34,45`
**Réponse :** 🎟️ Ticket de loterie acheté : 5, 12, 23, 34, 45

### /auction
**Description :** Crée une enchère
**Catégorie :** Économie
**Permissions :** Manage Messages
**Options :**
- `item` (String) : Article
- `starting_bid` (Integer) : Prix de départ
- `duration` (String) : Durée
**Exemple :** `/auction item:Rôle Rare starting_bid:1000 duration:1h`
**Réponse :** 🏷️ Enchère créée ! Article : Rôle Rare | Prix de départ : 1000 🪙

### /bid
**Description :** Enchérir sur une enchère
**Catégorie :** Économie
**Permissions :** Aucune
**Options :**
- `amount` (Integer) : Montant de l'enchère
**Exemple :** `/bid amount:1500`
**Réponse :** 💰 Vous avez enchéri 1500 🪙 !

### /leaderboard_economy
**Description :** Affiche le classement économique
**Catégorie :** Économie
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/leaderboard_economy`
**Réponse :** 💰 Classement : 1. @User1 (50000🪙), 2. @User2 (45000🪙)

### /profile
**Description :** Affiche votre profil complet
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `user` (Utilisateur) : Utilisateur concerné (optionnel)
**Exemple :** `/profile`
**Réponse :** 👤 Profil : XP, Niveau, Solde, Badges, etc.

### /badge
**Description :** Affiche vos badges
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/badge`
**Réponse : 🏅 Badges : 🌟 Débutant, 💎 Donateur, 🎮 Gamer

### /rep
**Description :** Donne une réputation à un utilisateur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
**Exemple :** `/rep @user`
**Réponse :** 👍 Vous avez donné une réputation à @user.

### /snipe
**Description :** Affiche le dernier message supprimé
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/snipe`
**Réponse :** 🗑️ Dernier message supprimé : "Bonjour tout le monde !" par @User

### /editsnipe
**Description :** Affiche le dernier message modifié
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/editsnipe`
**Réponse :** ✏️ Dernier message modifié : "Bonjour" → "Bonjour tout le monde !"

### /firstmessage
**Description :** Affiche le premier message du salon
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/firstmessage`
**Réponse :** 📜 Premier message : "Bienvenue sur le serveur !" par @Owner

### /stats
**Description :** Affiche vos statistiques
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/stats`
**Réponse :** 📊 Messages : 1500 | Réactions : 500 | Voice : 50h

### /afk
**Description :** Active le mode AFK
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `reason` (String) : Raison (optionnel)
**Exemple :** `/afk reason:Pause déjeuner`
**Réponse :** 😴 Mode AFK activé. Raison : Pause déjeuner

### /activity
**Description :** Définit une activité personnalisée pour le bot
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `type` (String) : Type (playing, watching, listening)
- `name` (String) : Nom de l'activité
**Exemple :** `/activity type:playing name:Minecraft`
**Réponse :** 🎮 Activité du bot mise à jour : Playing Minecraft

### /announce
**Description :** Fait une annonce
**Catégorie :** Administration
**Permissions :** Manage Messages
**Options :**
- `channel` (Salon) : Salon de l'annonce
- `message` (String) : Message de l'annonce
**Exemple :** `/announce channel:#annonces message:Maintenance prévue`
**Réponse :** 📢 Annonce envoyée dans #annonces.

### /poll_advanced
**Description :** Crée un sondage avancé
**Catégorie :** Utilitaires
**Permissions :** Manage Messages
**Options :**
- `question` (String) : Question
- `options` (String) : Options (séparées par |)
- `multiple` (Boolean) : Choix multiples
**Exemple :** `/poll_advanced question:Que préférez-vous ? options:Pizza|Burger|Sushi multiple:false`
**Réponse :** 📊 Sondage avancé créé.

### /vote
**Description :** Vote dans un sondage
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `option` (Integer) : Numéro de l'option
**Exemple :** `/vote option:1`
**Réponse :** ✅ Vote enregistré pour l'option 1.

### /reminder_list
**Description :** Affiche vos rappels
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/reminder_list`
**Réponse :** ⏰ Rappels : 1. Réunion (dans 1h), 2. Anniversaire (dans 2j)

### /cancel_reminder
**Description :** Annule un rappel
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `reminder_id` (Integer) : ID du rappel
**Exemple :** `/cancel_reminder reminder_id:1`
**Réponse :** ❌ Rappel #1 annulé.

### /emoji
**Description :** Affiche un émoji en grand
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `emoji` (String) : Émoji à afficher
**Exemple :** `/emoji emoji:😀`
**Réponse :** 😀 [Image en grand]

### /stealemoji
**Description :** Ajoute un émoji d'un autre serveur
**Catégorie :** Administration
**Permissions :** Manage Emojis
**Options :**
- `emoji` (String) : Émoji à voler
- `name` (String) : Nom de l'émoji
**Exemple :** `/stealemoji emoji:😀 name:happy`
**Réponse :** ✅ Émoji 😀 ajouté au serveur sous le nom "happy".

### /emojiinfo
**Description :** Affiche les informations d'un émoji
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `emoji` (String) : Émoji concerné
**Exemple :** `/emojiinfo emoji:😀`
**Réponse :** 😀 | Nom : smiley | Serveur : Mon Serveur | Auteur : @User

### /createemoji
**Description :** Crée un émoji personnalisé
**Catégorie :** Administration
**Permissions :** Manage Emojis
**Options :**
- `name` (String) : Nom de l'émoji
- `image` (Attachment) : Image de l'émoji
**Exemple :** `/createemoji name:myemoji image:[image]`
**Réponse :** ✅ Émoji "myemoji" créé !

### /rolecolor
**Description :** Modifie la couleur d'un rôle
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `role` (Rôle) : Rôle concerné
- `color` (String) : Couleur hexadécimale
**Exemple :** `/rolecolor role:@Modérateur color:#FF0000`
**Réponse :** 🎨 La couleur du rôle @Modérateur a été modifiée en #FF0000.

### /roleicon
**Description :** Modifie l'icône d'un rôle
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `role` (Rôle) : Rôle concerné
- `icon` (Attachment) : Icône du rôle
**Exemple :** `/roleicon role:@Modérateur icon:[icon]`
**Réponse :** 🖼️ L'icône du rôle @Modérateur a été modifiée.

### /rolecreate
**Description :** Crée un nouveau rôle
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `name` (String) : Nom du rôle
- `color` (String) : Couleur (optionnel)
- `permissions` (String) : Permissions (optionnel)
**Exemple :** `/rolecreate name:VIP color:#FFD700`
**Réponse :** ✅ Rôle "VIP" créé !

### /roledelete
**Description :** Supprime un rôle
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `role` (Rôle) : Rôle à supprimer
**Exemple :** `/roledelete role:@AncienRôle`
**Réponse :** 🗑️ Rôle @AncienRôle supprimé.

### /reaction
**Description :** Ajoute une réaction à un message
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `message` (String) : ID du message
- `emoji` (String) : Émoji à ajouter
**Exemple :** `/reaction message:123456789 emoji:👍`
**Réponse :** 👍 Réaction ajoutée au message.

### /poll_results
**Description :** Affiche les résultats d'un sondage
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `message_id` (String) : ID du message du sondage
**Exemple :** `/poll_results message_id:123456789`
**Réponse :** 📊 Résultats du sondage : Option 1: 45%, Option 2: 35%, Option 3: 20%

### /endpoll
**Description :** Termine un sondage
**Catégorie :** Utilitaires
**Permissions :** Manage Messages
**Options :**
- `message_id` (String) : ID du message du sondage
**Exemple :** `/endpoll message_id:123456789`
**Réponse :** 🏁 Sondage terminé. Résultats finaux affichés.

### /embed
**Description :** Crée un embed personnalisé
**Catégorie :** Administration
**Permissions :** Manage Messages
**Options :**
- `title` (String) : Titre
- `description` (String) : Description
- `color` (String) : Couleur (optionnel)
**Exemple :** `/embed title:Annonce description:Nouvelles règles color:#00FF00`
**Réponse :** 📝 Embed créé.

### /button
**Description :** Crée un message avec boutons
**Catégorie :** Administration
**Permissions :** Manage Messages
**Options :**
- `label` (String) : Texte du bouton
- `style` (String) : Style (primary, secondary, success, danger)
- `action` (String) : Action du bouton
**Exemple :** `/button label:Accepter style:success action:role`
**Réponse :** 🔘 Bouton créé.

### /selectmenu
**Description :** Crée un menu de sélection
**Catégorie :** Administration
**Permissions :** Manage Messages
**Options :**
- `placeholder` (String) : Texte par défaut
- `options` (String) : Options (séparées par |)
**Exemple :** `/selectmenu placeholder:Choisissez options:Option1|Option2|Option3`
**Réponse :** 📋 Menu de sélection créé.

### /modal
**Description :** Crée un formulaire modal
**Catégorie :** Administration
**Permissions :** Manage Messages
**Options :**
- `title` (String) : Titre du formulaire
- `fields` (String) : Champs (format: label|placeholder|style)
**Exemple :** `/modal title:Inscription fields:Pseudo|Votre pseudo|short`
**Réponse :** 📝 Formulaire modal créé.

### /autocomplete
**Description :** Teste l'autocomplétion
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `command` (String) : Nom de la commande
**Exemple :** `/autocomplete command:help`
**Réponse :** 🔍 Options d'autocomplétion pour /help.

### /contextmenu
**Description :** Configure un menu contextuel
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `type` (String) : Type (user, message)
- `name` (String) : Nom du menu
**Exemple :** `/contextmenu type:user name:Avatar`
**Réponse :** 📋 Menu contextuel "Avatar" créé.

### /webhook
**Description :** Crée un webhook
**Catégorie :** Administration
**Permissions :** Manage Webhooks
**Options :**
- `name` (String) : Nom du webhook
- `channel` (Salon) : Salon du webhook
**Exemple :** `/webhook name:Bot channel:#annonces`
**Réponse :` 🔗 Webhook créé. URL : [url]

### /webhooksend
**Description :** Envoie un message via webhook
**Catégorie :** Administration
**Permissions :** Manage Webhooks
**Options :**
- `url` (String) : URL du webhook
- `message` (String) : Message à envoyer
**Exemple :** `/webhooksend url:[url] message:Bonjour`
**Réponse :** ✅ Message envoyé via webhook.

### /webhookdelete
**Description :** Supprime un webhook
**Catégorie :** Administration
**Permissions :** Manage Webhooks
**Options :**
- `url` (String) : URL du webhook
**Exemple :** `/webhookdelete url:[url]`
**Réponse :** 🗑️ Webhook supprimé.

### /sticker
**Description :** Envoie un sticker
**Catégorie :** Fun
**Permissions :** Aucune
**Options :**
- `name` (String) : Nom du sticker
**Exemple :** `/sticker name:happy`
**Réponse :** 🏷️ Sticker envoyé.

### /createsticker
**Description :** Crée un sticker
**Catégorie :** Administration
**Permissions :** Manage Emojis
**Options :**
- `name` (String) : Nom du sticker
- `image` (Attachment) : Image du sticker
**Exemple :** `/createsticker name:mysticker image:[image]`
**Réponse :** ✅ Sticker "mysticker" créé !

### /voicekick
**Description :** Expulse un utilisateur d'un salon vocal
**Catégorie :** Modération
**Permissions :** Move Members
**Options :**
- `user` (Utilisateur) : Utilisateur à expulser
**Exemple :** `/voicekick @user`
**Réponse :** 🔊 @user a été expulsé du salon vocal.

### /voicemove
**Description :** Déplace un utilisateur dans un autre salon vocal
**Catégorie :** Modération
**Permissions :** Move Members
**Options :**
- `user` (Utilisateur) : Utilisateur à déplacer
- `channel` (Salon) : Salon de destination
**Exemple :** `/voicemove @user channel:#AFK`
**Réponse :** 🔊 @user a été déplacé dans #AFK.

### /voicemute
**Description :** Rend muet un utilisateur en vocal
**Catégorie :** Modération
**Permissions :** Mute Members
**Options :**
- `user` (Utilisateur) : Utilisateur à rendre muet
**Exemple :** `/voicemute @user`
**Réponse :** 🔇 @user a été rendu muet en vocal.

### /voiceunmute
**Description :** Retire le mute vocal d'un utilisateur
**Catégorie :** Modération
**Permissions :** Mute Members
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
**Exemple :** `/voiceunmute @user`
**Réponse :** 🔊 @user n'est plus muet en vocal.

### /voicedeafen
**Description :** Rend sourd un utilisateur en vocal
**Catégorie :** Modération
**Permissions :** Deafen Members
**Options :**
- `user` (Utilisateur) : Utilisateur à rendre sourd
**Exemple :** `/voicedeafen @user`
**Réponse :** 🔇 @user a été rendu sourd en vocal.

### /voiceundeafen
**Description :** Retire le deafen d'un utilisateur
**Catégorie :** Modération
**Permissions :** Deafen Members
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
**Exemple :** `/voiceundeafen @user`
**Réponse :** 🔊 @user n'est plus sourd en vocal.

### /voicechannel
**Description :** Crée un salon vocal temporaire
**Catégorie :** Administration
**Permissions :** Manage Channels
**Options :**
- `name` (String) : Nom du salon
- `limit` (Integer) : Limite d'utilisateurs
**Exemple :** `/voicechannel name:Salon Temporaire limit:10`
**Réponse :** 🔊 Salon vocal "Salon Temporaire" créé.

### /stage
**Description :** Crée un channel stage
**Catégorie :** Administration
**Permissions :** Manage Channels
**Options :**
- `name` (String) : Nom du stage
- `topic` (String) : Sujet
**Exemple :** `/stage name:Conférence topic:Discord Bot`
**Réponse :** 🎭 Stage "Conférence" créé.

### /forum
**Description :** Crée un forum
**Catégorie :** Administration
**Permissions :** Manage Channels
**Options :**
- `name` (String) : Nom du forum
- `topic` (String) : Sujet
**Exemple :** `/forum name:Discussions topic:Suggestions`
**Réponse :** 📋 Forum "Discussions" créé.

### /thread
**Description :** Crée un thread
**Catégorie :** Administration
**Permissions :** Create Threads
**Options :**
- `name` (String) : Nom du thread
- `message` (String) : Message initial
**Exemple :** `/thread name:Discussion message:Commençons`
**Réponse :** 🧵 Thread "Discussion" créé.

### /archive
**Description :** Archive un thread
**Catégorie :** Administration
**Permissions :** Manage Threads
**Options :**
- `thread` (String) : ID du thread
**Exemple :** `/archive thread:123456789`
**Réponse :** 📦 Thread archivé.

### /unarchive
**Description :** Désarchive un thread
**Catégorie :** Administration
**Permissions :** Manage Threads
**Options :**
- `thread` (String) : ID du thread
**Exemple :** `/unarchive thread:123456789`
**Réponse :** 📦 Thread désarchivé.

### /boost
**Description :** Affiche les boosts du serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/boost`
**Réponse :** ⭐ Boosts : 15 | Niveau : 2

### /boosters
**Description :** Affiche les boosters du serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/boosters`
**Réponse :** 🌟 Boosters : @User1, @User2, @User3

### /partner
**Description :** Affiche les partenaires du serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/partner`
**Réponse :** 🤝 Partenaires : Serveur A, Serveur B, Serveur C

### /vanity
**Description :** Affiche l'URL vanity du serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/vanity`
**Réponse :** 🔗 URL Vanity : discord.gg/monserveur

### /banner_server
**Description :** Affiche la bannière du serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/banner_server`
**Réponse :** 🖼️ Bannière du serveur : [image]

### /icon_server
**Description :** Affiche l'icône du serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/icon_server`
**Réponse :** 🖼️ Icône du serveur : [image]

### /splash
**Description :** Affiche le splash du serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/splash`
**Réponse :** 🖼️ Splash du serveur : [image]

### /discovery
**Description :** Affiche les informations de découverte
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/discovery`
**Réponse :** 🔍 Découverie : Catégorie : Gaming | Membres mensuels : 5000

### /features
**Description :** Affiche les fonctionnalités du serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/features`
**Réponse :** ✨ Fonctionnalités : Community, Vanity URL, Partner, etc.

### /region
**Description :** Affiche la région du serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/region`
**Réponse :** 🌍 Région : Europe

### /verification
**Description :** Configure le système de vérification
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `level` (String) : Niveau de vérification (none, low, medium, high, very high)
**Exemple :** `/verification level:high`
**Réponse :** 🔐 Niveau de vérification : Haut

### /contentfilter
**Description :** Configure le filtre de contenu
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `level` (String) : Niveau (disabled, members without roles, all members)
**Exemple :** `/contentfilter level:all members`
**Réponse :** 🔒 Filtre de contenu : Tous les membres

### /explicitfilter
**Description :** Configure le filtre de contenu explicite
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `level` (String) : Niveau (disabled, members without roles, all members)
**Exemple :** `/explicitfilter level:all members`
**Réponse :** 🔒 Filtre explicite : Tous les membres

### /2fa
**Description :** Configure la 2FA requise
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `required` (Boolean) : 2FA requise ou non
**Exemple :** `/2fa required:true`
**Réponse :** 🔐 2FA requise : Activée

### /invites
**Description :** Affiche les invitations du serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/invites`
**Réponse :** 📋 Invitations : @User1 (5), @User2 (3), @User3 (2)

### /inviter
**Description :** Affiche qui vous a invité
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/inviter`
**Réponse :** 👤 Vous avez été invité par @User1

### /createinvite
**Description :** Crée une invitation
**Catégorie :** Administration
**Permissions :** Create Instant Invite
**Options :**
- `max_uses` (Integer) : Utilisations maximales
- `max_age` (Integer) : Durée en secondes
**Exemple :** `/createinvite max_uses:10 max_age:3600`
**Réponse :** 🔗 Invitation créée : discord.gg/abc123

### /deleteinvite
**Description :** Supprime une invitation
**Catégorie :** Administration
**Permissions :** Manage Guild
**Options :**
- `code` (String) : Code de l'invitation
**Exemple :** `/deleteinvite code:abc123`
**Réponse :** 🗑️ Invitation abc123 supprimée.

### /permissions
**Description :** Affiche vos permissions
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `channel` (Salon) : Salon concerné (optionnel)
**Exemple :** `/permissions`
**Réponse :** 🔐 Permissions : Send Messages, Add Reactions, etc.

### /rolepermissions
**Description :** Affiche les permissions d'un rôle
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `role` (Rôle) : Rôle concerné
**Exemple :** `/rolepermissions role:@Modérateur`
**Réponse :** 🔐 Permissions @Modérateur : Kick, Ban, Mute, etc.

### /channelpermissions
**Description :** Affiche les permissions d'un salon
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `channel` (Salon) : Salon concerné
**Exemple :** `/channelpermissions channel:#général`
**Réponse :** 🔐 Permissions #général : @everyone : Read Only, @Modérateur : Full Access

### /permission
**Description :** Modifie une permission
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `target` (String) : Cible (role/user)
- `permission` (String) : Permission
- `state` (String) : État (allow/deny/neutral)
**Exemple :** `/permission target:@Modérateur permission:Kick Members state:allow`
**Réponse :** ✅ Permission Kick Members accordée à @Modérateur.

### /cleanup
**Description :** Nettoie le serveur
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `type` (String) : Type (roles, channels, emojis)
**Exemple :** `/cleanup type:roles`
**Réponse :** 🧹 Nettoyage des rôles inutilisés terminé.

### /prune
**Description :** Supprime les membres inactifs
**Catégorie :** Administration
**Permissions :** Kick Members
**Options :**
- `days` (Integer) : Jours d'inactivité
**Exemple :** `/prune days:30`
**Réponse :** 🗑️ 15 membres inactifs depuis 30 jours ont été supprimés.

### /massrole
**Description :** Attribue un rôle à plusieurs membres
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `role` (Rôle) : Rôle à attribuer
- `filter` (String) : Filtre (bots, humans, all)
**Exemple :** `/massrole role:@Membre filter:humans`
**Réponse :** ✅ Rôle @Membre attribué à 150 membres.

### /massban
**Description :** Bannit plusieurs membres
**Catégorie :** Administration
**Permissions :** Ban Members
**Options :**
- `users` (String) : IDs des utilisateurs (séparés par des virgules)
- `reason` (String) : Raison
**Exemple :** `/massban users:123,456,789 reason:Raid`
**Réponse :** 🔨 3 utilisateurs ont été bannis. Raison : Raid

### /masskick
**Description :** Expulse plusieurs membres
**Catégorie :** Administration
**Permissions :** Kick Members
**Options :**
- `users` (String) : IDs des utilisateurs (séparés par des virgules)
- `reason` (String) : Raison
**Exemple :** `/masskick users:123,456,789 reason:Spam`
**Réponse :** 👢 3 utilisateurs ont été expulsés. Raison : Spam

### /nuke
**Description :** Recrée un salon (supprime et recrée)
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `channel` (Salon) : Salon à nuke
**Exemple :** `/nuke channel:#général`
**Réponse :** ☢️ Salon #général recréé.

### /clone
**Description :** Clone un salon
**Catégorie :** Administration
**Permissions :** Manage Channels
**Options :**
- `channel` (Salon) : Salon à cloner
**Exemple :** `/clone channel:#général`
**Réponse :** 📋 Salon #général cloné en #général-copy.

### /sync
**Description :** Synchronise les permissions d'un salon avec sa catégorie
**Catégorie :** Administration
**Permissions :** Manage Channels
**Options :**
- `channel` (Salon) : Salon à synchroniser
**Exemple :** `/sync channel:#général`
**Réponse :** 🔄 Permissions de #général synchronisées avec la catégorie.

### /position
**Description :** Modifie la position d'un salon ou d'un rôle
**Catégorie :** Administration
**Permissions :** Manage Channels/Roles
**Options :**
- `target` (String) : Cible (channel/role)
- `position` (Integer) : Nouvelle position
**Exemple :** `/position target:#général position:1`
**Réponse :** 📍 Position de #général modifiée.

### /category
**Description :** Déplace un salon dans une catégorie
**Catégorie :** Administration
**Permissions :** Manage Channels
**Options :**
- `channel` (Salon) : Salon à déplacer
- `category` (String) : Catégorie de destination
**Exemple :** `/category channel:#général category:Général`
**Réponse :** 📁 #général déplacé dans la catégorie Général.

### /createcategory
**Description :** Crée une catégorie
**Catégorie :** Administration
**Permissions :** Manage Channels
**Options :**
- `name` (String) : Nom de la catégorie
**Exemple :** `/createcategory name:Nouvelle Catégorie`
**Réponse :** 📁 Catégorie "Nouvelle Catégorie" créée.

### /deletecategory
**Description :** Supprime une catégorie
**Catégorie :** Administration
**Permissions :** Manage Channels
**Options :**
- `category` (String) : Catégorie à supprimer
**Exemple :** `/deletecategory category:Ancienne Catégorie`
**Réponse :** 🗑️ Catégorie "Ancienne Catégorie" supprimée.

### /mentionable
**Description :** Modifie la mentionnabilité d'un rôle
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `role` (Rôle) : Rôle concerné
- `mentionable` (Boolean) : Mentionnable ou non
**Exemple :** `/mentionable role:@Annonces mentionable:true`
**Réponse :** ✅ Le rôle @Annonces est maintenant mentionnable.

### /hoist
**Description :** Modifie l'affichage séparé d'un rôle
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `role` (Rôle) : Rôle concerné
- `hoist` (Boolean) : Affiché séparément ou non
**Exemple :** `/hoist role:@Admin hoist:true`
**Réponse :** ✅ Le rôle @Admin est maintenant affiché séparément.

### /displayrole
**Description :** Modifie le rôle d'affichage d'un membre
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
- `role` (Rôle) : Nouveau rôle d'affichage
**Exemple :** `/displayrole user:@user role:@VIP`
**Réponse :** ✅ Le rôle d'affichage de @user est maintenant @VIP.

### /addrole
**Description :** Ajoute un rôle à un membre
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
- `role` (Rôle) : Rôle à ajouter
**Exemple :** `/addrole user:@user role:@Membre`
**Réponse :** ✅ Rôle @Membre ajouté à @user.

### /removerole
**Description :** Retire un rôle d'un membre
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
- `role` (Rôle) : Rôle à retirer
**Exemple :** `/removerole user:@user role:@AncienRôle`
**Réponse :** ✅ Rôle @AncienRôle retiré de @user.

### /clearroles
**Description :** Retire tous les rôles d'un membre
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
**Exemple :** `/clearroles user:@user`
**Réponse :** ✅ Tous les rôles de @user ont été retirés.

### /copyroles
**Description :** Copie les rôles d'un membre vers un autre
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `from` (Utilisateur) : Utilisateur source
- `to` (Utilisateur) : Utilisateur cible
**Exemple :** `/copyroles from:@user1 to:@user2`
**Réponse :** ✅ Rôles de @user1 copiés vers @user2.

### /reactionroles
**Description :** Crée un panneau de réactions-rôles
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `title` (String) : Titre du panneau
- `roles` (String) : Rôles (format: emoji|role,emoji|role)
**Exemple :** `/reactionroles title:Choisissez vos rôles roles:🎮|@Gamer,🎵|@Musicien`
**Réponse :** ✅ Panneau de réactions-rôles créé.

### /buttonroles
**Description :** Crée un panneau de boutons-rôles
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `title` (String) : Titre du panneau
- `roles` (String) : Rôles (format: label|role|style)
**Exemple :** `/buttonroles title:Choisissez vos rôles roles:Gamer|@Gamer|primary,Musicien|@Musicien|success`
**Réponse :** ✅ Panneau de boutons-rôles créé.

### /selectroles
**Description :** Crée un menu de sélection de rôles
**Catégorie :** Administration
**Permissions :** Manage Roles
**Options :**
- `title` (String) : Titre du panneau
- `roles` (String) : Rôles (format: label|role|emoji)
**Exemple :** `/selectroles title:Choisissez vos rôles roles:Gamer|@Gamer|🎮,Musicien|@Musicien|🎵`
**Réponse :** ✅ Menu de sélection de rôles créé.

### /levelreward
**Description :** Configure une récompense de niveau
**Catégorie :** Niveaux
**Permissions :** Manage Roles
**Options :**
- `level` (Integer) : Niveau requis
- `role` (Rôle) : Rôle de récompense
**Exemple :** `/levelreward level:10 role:@VIP`
**Réponse :** ✅ Rôle @VIP attribué au niveau 10.

### /xpreward
**Description :** Configure une récompense XP
**Catégorie :** Niveaux
**Permissions :** Manage Roles
**Options :**
- `xp` (Integer) : XP requis
- `role` (Rôle) : Rôle de récompense
**Exemple :** `/xpreward xp:1000 role:@Membre+`
**Réponse :** ✅ Rôle @Membre+ attribué à 1000 XP.

### /levelremove
**Description :** Supprime une récompense de niveau
**Catégorie :** Niveaux
**Permissions :** Manage Roles
**Options :**
- `level` (Integer) : Niveau concerné
**Exemple :** `/levelremove level:10`
**Réponse :** ✅ Récompense du niveau 10 supprimée.

### /xpreset
**Description :** Réinitialise l'XP d'un utilisateur
**Catégorie :** Niveaux
**Permissions :** Administrator
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
**Exemple :** `/xpreset user:@user`
**Réponse :** ✅ XP de @user réinitialisé.

### /xpadd
**Description :** Ajoute de l'XP à un utilisateur
**Catégorie :** Niveaux
**Permissions :** Administrator
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
- `amount` (Integer) : Quantité d'XP
**Exemple :** `/xpadd user:@user amount:500`
**Réponse :** ✅ 500 XP ajoutés à @user.

### /xpremove
**Description :** Retire de l'XP à un utilisateur
**Catégorie :** Niveaux
**Permissions :** Administrator
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
- `amount` (Integer) : Quantité d'XP
**Exemple :** `/xpremove user:@user amount:200`
**Réponse :** ✅ 200 XP retirés de @user.

### /xpset
**Description :** Définit l'XP d'un utilisateur
**Catégorie :** Niveaux
**Permissions :** Administrator
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
- `amount` (Integer) : Quantité d'XP
**Exemple :** `/xpset user:@user amount:1000`
**Réponse :** ✅ XP de @user défini à 1000.

### /levelset
**Description :** Définit le niveau d'un utilisateur
**Catégorie :** Niveaux
**Permissions :** Administrator
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
- `level` (Integer) : Niveau
**Exemple :** `/levelset user:@user level:25`
**Réponse :** ✅ Niveau de @user défini à 25.

### /economyreset
**Description :** Réinitialise l'économie d'un utilisateur
**Catégorie :** Économie
**Permissions :** Administrator
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
**Exemple :** `/economyreset user:@user`
**Réponse :** ✅ Économie de @user réinitialisée.

### /economyadd
**Description :** Ajoute de l'argent à un utilisateur
**Catégorie :** Économie
**Permissions :** Administrator
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
- `amount` (Integer) : Quantité d'argent
**Exemple :** `/economyadd user:@user amount:1000`
**Réponse :** ✅ 1000 🪙 ajoutés à @user.

### /economyremove
**Description :** Retire de l'argent à un utilisateur
**Catégorie :** Économie
**Permissions :** Administrator
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
- `amount` (Integer) : Quantité d'argent
**Exemple :** `/economyremove user:@user amount:500`
**Réponse :** ✅ 500 🪙 retirés de @user.

### /economyset
**Description :** Définit l'argent d'un utilisateur
**Catégorie :** Économie
**Permissions :** Administrator
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
- `amount` (Integer) : Quantité d'argent
**Exemple :** `/economyset user:@user amount:5000`
**Réponse :** ✅ Argent de @user défini à 5000 🪙.

### /shopadd
**Description :** Ajoute un article au magasin
**Catégorie :** Économie
**Permissions :** Administrator
**Options :**
- `name` (String) : Nom de l'article
- `price` (Integer) : Prix
- `type` (String) : Type (role, item, etc.)
**Exemple :** `/shopadd name:Rôle Ultra price:10000 type:role`
**Réponse :** ✅ Article "Rôle Ultra" ajouté au magasin pour 10000 🪙.

### /shopremove
**Description :** Supprime un article du magasin
**Catégorie :** Économie
**Permissions :** Administrator
**Options :**
- `name` (String) : Nom de l'article
**Exemple :** `/shopremove name:Ancien Article`
**Réponse :** ✅ Article "Ancien Article" supprimé du magasin.

### /shopedit
**Description :** Modifie un article du magasin
**Catégorie :** Économie
**Permissions :** Administrator
**Options :**
- `name` (String) : Nom de l'article
- `price` (Integer) : Nouveau prix
**Exemple :** `/shopedit name:Rôle VIP price:7500`
**Réponse :** ✅ Prix de "Rôle VIP" modifié à 7500 🪙.

### /ticketsetup
**Description :** Configure le système de tickets
**Catégorie :** Tickets
**Permissions :** Administrator
**Options :**
- `channel` (Salon) : Salon pour créer les tickets
- `category` (String) : Catégorie des tickets
- `support_role` (Rôle) : Rôle de support
**Exemple :** `/ticketsetup channel:#tickets category:Tickets support_role:@Support`
**Réponse :** ✅ Système de tickets configuré.

### /ticketadd
**Description :** Ajoute un membre au ticket
**Catégorie :** Tickets
**Permissions :** Manage Threads
**Options :**
- `user` (Utilisateur) : Utilisateur à ajouter
**Exemple :** `/ticketadd @user`
**Réponse :** ✅ @user ajouté au ticket.

### /ticketremove
**Description :** Retire un membre du ticket
**Catégorie :** Tickets
**Permissions :** Manage Threads
**Options :**
- `user` (Utilisateur) : Utilisateur à retirer
**Exemple :** `/ticketremove @user`
**Réponse :** ✅ @user retiré du ticket.

### /ticketpanel
**Description :** Crée un panneau de tickets
**Catégorie :** Tickets
**Permissions :** Administrator
**Options :**
- `title` (String) : Titre du panneau
- `description` (String) : Description
**Exemple :** `/ticketpanel title:Support description:Cliquez pour créer un ticket`
**Réponse :** ✅ Panneau de tickets créé.

### /autoticket
**Description :** Configure les tickets automatiques
**Catégorie :** Tickets
**Permissions :** Administrator
**Options :**
- `enabled` (Boolean) : Activé ou désactivé
- `channel` (Salon) : Salon de monitoring
**Exemple :** `/autoticket enabled:true channel:#monitoring`
**Réponse :** ✅ Tickets automatiques activés dans #monitoring.

### /robloxlink
**Description :** Lie votre compte Roblox à Discord
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `username` (String) : Nom d'utilisateur Roblox
**Exemple :** `/robloxlink username:Player1`
**Réponse :** ✅ Compte Roblox Player1 lié à votre compte Discord.

### /robloxunlink
**Description :** Dissocie votre compte Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/robloxunlink`
**Réponse :** ✅ Compte Roblox dissocié.

### /robloxverify
**Description :** Vérifie votre lien Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/robloxverify`
**Réponse :** ✅ Votre lien Roblox est vérifié.

### /robloxfriends
**Description :** Affiche les amis d'un utilisateur Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `username` (String) : Nom d'utilisateur Roblox
**Exemple :** `/robloxfriends username:Player1`
**Réponse :** 👥 Amis de Player1 : User1, User2, User3

### /robloxfollowing
**Description :** Affiche les abonnements d'un utilisateur Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `username` (String) : Nom d'utilisateur Roblox
**Exemple :** `/robloxfollowing username:Player1`
**Réponse :** 📱 Player1 suit : User1, User2, User3

### /robloxfollowers
**Description :** Affiche les abonnés d'un utilisateur Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `username` (String) : Nom d'utilisateur Roblox
**Exemple :** `/robloxfollowers username:Player1`
**Réponse :** 📱 Abonnés de Player1 : 1500

### /robloxstatus
**Description :** Affiche le statut d'un utilisateur Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `username` (String) : Nom d'utilisateur Roblox
**Exemple :** `/robloxstatus username:Player1`
**Réponse :** 🎮 Player1 joue à : Adopt Me!

### /robloxbadges
**Description :** Affiche les badges d'un utilisateur Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `username` (String) : Nom d'utilisateur Roblox
**Exemple :** `/robloxbadges username:Player1`
**Réponse :** 🏅 Badges de Player1 : Veteran, Welcome to the Party, etc.

### /robloxgroups
**Description :** Affiche les groupes d'un utilisateur Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `username` (String) : Nom d'utilisateur Roblox
**Exemple :** `/robloxgroups username:Player1`
**Réponse :** 👥 Groupes de Player1 : Groupe A (Rang: Admin), Groupe B (Rang: Member)

### /robloxasset
**Description :** Affiche les informations d'un asset Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `asset_id` (Integer) : ID de l'asset
**Exemple :** `/robloxasset asset_id:123456789`
**Réponse :** 🎮 Asset : Cool Hat | Prix : 50 Robux | Créateur : Player1

### /robloxplace
**Description :** Recherche un lieu Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `query` (String) : Terme de recherche
**Exemple :** `/robloxplace query:tycoon`
**Réponse :** 🔍 Résultats : 1. Super Tycoon, 2. Mega Tycoon, 3. Ultra Tycoon

### /robloxleaderboard
**Description :** Affiche le classement d'un jeu Roblox
**Catégorie :** Roblox
**Permissions :** Aucune
**Options :**
- `game_id` (Integer) : ID du jeu
**Exemple :** `/robloxleaderboard game_id:123456789`
**Réponse :** 🏆 Classement : 1. Player1 (10000 points), 2. Player2 (9000 points)

### /securityaudit
**Description :** Effectue un audit de sécurité du serveur
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/securityaudit`
**Réponse :** 🔒 Audit de sécurité : Score 85/100 - Recommandations : Activer 2FA, renforcer permissions

### /vulnerabilityscan
**Description :** Scanne les vulnérabilités du serveur
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/vulnerabilityscan`
**Réponse :** 🔍 Scan terminé : 2 vulnérabilités trouvées

### /permissionsaudit
**Description :** Audit les permissions du serveur
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/permissionsaudit`
**Réponse :** 🔐 Audit des permissions : 3 rôles avec permissions excessives détectés

### /roleaudit
**Description :** Audit les rôles du serveur
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/roleaudit`
**Réponse :** 🎭 Audit des rôles : 5 rôles inutilisés, 2 rôles avec permissions dangereuses

### /channelaudit
**Description :** Audit les salons du serveur
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/channelaudit`
**Réponse :** 📢 Audit des salons : 3 salons avec permissions trop permissives

### /memberaudit
**Description :** Audit les membres du serveur
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/memberaudit`
**Réponse :** 👥 Audit des membres : 2 comptes suspects détectés

### /inviteaudit
**Description :** Audit les invitations du serveur
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/inviteaudit`
**Réponse :** 🔗 Audit des invitations : 5 invitations avec beaucoup d'utilisations

### /webhookaudit
**Description :** Audit les webhooks du serveur
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/webhookaudit`
**Réponse :** 🔗 Audit des webhooks : 3 webhooks actifs

### /botaudit
**Description :** Audit les bots du serveur
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/botaudit`
**Réponse :** 🤖 Audit des bots : 15 bots, 2 avec permissions élevées

### /integrationaudit
**Description :** Audit les intégrations du serveur
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/integrationaudit`
**Réponse :** 🔗 Audit des intégrations : 3 intégrations actives

### /logsenable
**Description :** Active les logs de sécurité
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `channel` (Salon) : Salon des logs
**Exemple :** `/logsenable channel:#security-logs`
**Réponse :** ✅ Logs de sécurité activés dans #security-logs.

### /logsdisable
**Description :** Désactive les logs de sécurité
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/logsdisable`
**Réponse :** ❌ Logs de sécurité désactivés.

### /alert
**Description :** Crée une alerte de sécurité
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `type` (String) : Type d'alerte (raid, nuke, etc.)
- `action` (String) : Action (ban, kick, alert)
**Exemple :** `/alert type:raid action:ban`
**Réponse :** 🚨 Alerte Raid configurée : Bannissement automatique activé.

### /quarantine
**Description :** Met en quarantaine un utilisateur
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `user` (Utilisateur) : Utilisateur à mettre en quarantaine
- `reason` (String) : Raison
**Exemple :** `/quarantine user:@user reason:Compte suspect`
**Réponse :** 🚫 @user mis en quarantaine.

### /unquarantine
**Description :** Retire la quarantaine d'un utilisateur
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
**Exemple :** `/unquarantine user:@user`
**Réponse :** ✅ @user retiré de la quarantaine.

### /lockdown
**Description :** Active le mode confinement
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `reason` (String) : Raison du confinement
**Exemple :** `/lockdown reason:Attaque en cours`
**Réponse :** 🔒 Mode confinement activé. Tous les salons verrouillés.

### /unlockdown
**Description :** Désactive le mode confinement
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/unlockdown`
**Réponse :** 🔓 Mode confinement désactivé.

### /emergency
**Description :** Active le mode urgence
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/emergency`
**Réponse :** 🚨 Mode urgence activé. Mesures maximales en place.

### /emergencyoff
**Description :** Désactive le mode urgence
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/emergencyoff`
**Réponse :** ✅ Mode urgence désactivé.

### /auto-mod
**Description :** Configure l'auto-modération
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `type` (String) : Type (spam, caps, links, etc.)
- `action` (String) : Action (warn, mute, ban)
**Exemple :** `/auto-mod type:spam action:mute`
**Réponse :** ✅ Auto-modération spam configurée : Mute automatique.

### /filter
**Description :** Configure le filtre de mots
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `action` (String) : add/remove
- `word` (String) : Mot à filtrer
**Exemple :** `/filter action:add word:insulte`
**Réponse :** ✅ Mot "insulte" ajouté au filtre.

### /filterlist
**Description :** Affiche la liste des mots filtrés
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/filterlist`
**Réponse :** 📋 Mots filtrés : insulte, spam, etc.

### /linkfilter
**Description :** Configure le filtre de liens
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `action` (String) : enable/disable
- `allowed` (String) : Liens autorisés (séparés par des virgules)
**Exemple :** `/linkfilter action:enable allowed:discord.gg,youtube.com`
**Réponse :** ✅ Filtre de liens activé. Seuls discord.gg et youtube.com sont autorisés.

### /invitefilter
**Description :** Configure le filtre d'invitations
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `action` (String) : enable/disable
- `allowed` (String) : Invitations autorisées (séparées par des virgules)
**Exemple :** `/invitefilter action:enable allowed:monserveur`
**Réponse :** ✅ Filtre d'invitations activé. Seule l'invitation "monserveur" est autorisée.

### /massmentionfilter
**Description :** Configure le filtre de mentions massives
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `limit` (Integer) : Limite de mentions
**Exemple :** `/massmentionfilter limit:5`
**Réponse :** ✅ Filtre de mentions massives configuré : Maximum 5 mentions par message.

### /capsfilter
**Description :** Configure le filtre de majuscules
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `percentage` (Integer) : Pourcentage maximum
**Exemple :** `/capsfilter percentage:70`
**Réponse :** ✅ Filtre de majuscules configuré : Maximum 70% de majuscules.

### /spambot
**Description :** Configure la détection de bots spam
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `action` (String) : Action (ban, kick, quarantine)
**Exemple :** `/spambot action:ban`
**Réponse :** ✅ Détection de bots spam configurée : Bannissement automatique.

### /newaccountfilter
**Description :** Configure le filtre de nouveaux comptes
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `days` (Integer) : Âge minimum en jours
- `action` (String) : Action (quarantine, verify)
**Exemple :** `/newaccountfilter days:7 action:quarantine`
**Réponse :** ✅ Filtre de nouveaux comptes configuré : Comptes de moins de 7 jours mis en quarantaine.

### /raidprotection
**Description :** Configure la protection anti-raid
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `joins` (Integer) : Nombre de joins en X secondes
- `seconds` (Integer) : Période en secondes
- `action` (String) : Action (lockdown, captcha)
**Exemple :** `/raidprotection joins:10 seconds:10 action:lockdown`
**Réponse :** ✅ Protection anti-raid configurée : Confinement si 10 joins en 10 secondes.

### /nukeprotection
**Description :** Configure la protection anti-nuke
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `action` (String) : Action (ban, quarantine, revert)
**Exemple :** `/nukeprotection action:ban`
**Réponse :** ✅ Protection anti-nuke configurée : Bannissement automatique.

### /adminprotection
**Description :** Configure la protection admin
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `enabled` (Boolean) : Activé ou désactivé
**Exemple :** `/adminprotection enabled:true`
**Réponse :** ✅ Protection admin activée.

### /ownerprotection
**Description :** Configure la protection owner
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `enabled` (Boolean) : Activé ou désactivé
**Exemple :** `/ownerprotection enabled:true`
**Réponse :** ✅ Protection owner activée.

### /roleprotection
**Description :** Configure la protection de rôles
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `role` (Rôle) : Rôle à protéger
**Exemple :** `/roleprotection role:@Admin`
**Réponse :** ✅ Rôle @Admin protégé.

### /channelprotection
**Description :** Configure la protection de salons
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `channel` (Salon) : Salon à protéger
**Exemple :** `/channelprotection channel:#général`
**Réponse :** ✅ Salon #général protégé.

### /webhookprotection
**Description :** Configure la protection de webhooks
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `enabled` (Boolean) : Activé ou désactivé
**Exemple :** `/webhookprotection enabled:true`
**Réponse :** ✅ Protection de webhooks activée.

### /botprotection
**Description :** Configure la protection de bots
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `enabled` (Boolean) : Activé ou désactivé
**Exemple :** `/botprotection enabled:true`
**Réponse :** ✅ Protection de bots activée.

### /integrationprotection
**Description :** Configure la protection d'intégrations
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `enabled` (Boolean) : Activé ou désactivé
**Exemple :** `/integrationprotection enabled:true`
**Réponse :** ✅ Protection d'intégrations activée.

### /permissionprotection
**Description :** Configure la protection de permissions
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `enabled` (Boolean) : Activé ou désactivé
**Exemple :** `/permissionprotection enabled:true`
**Réponse :** ✅ Protection de permissions activée.

### /snapshot
**Description :** Crée un instantané du serveur
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/snapshot`
**Réponse :** 📸 Instantané du serveur créé. ID : snap_123456

### /restore_snapshot
**Description :** Restaure un instantané
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `snapshot_id` (String) : ID de l'instantané
**Exemple :** `/restore_snapshot snapshot_id:snap_123456`
**Réponse :** 🔄 Restauration de l'instantané snap_123456 en cours...

### /snapshot_list
**Description :** Affiche la liste des instantanés
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/snapshot_list`
**Réponse :** 📋 Instantanés : snap_123456 (01/01/2024), snap_789012 (02/01/2024)

### /snapshot_delete
**Description :** Supprime un instantané
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `snapshot_id` (String) : ID de l'instantané
**Exemple :** `/snapshot_delete snapshot_id:snap_123456`
**Réponse :** 🗑️ Instantané snap_123456 supprimé.

### /auto_backup
**Description :** Configure les sauvegardes automatiques
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `interval` (String) : Intervalle (1h, 6h, 12h, 1d)
**Exemple :** `/auto_backup interval:6h`
**Réponse :** ✅ Sauvegardes automatiques configurées : Toutes les 6 heures.

### /backup_schedule
**Description :** Planifie une sauvegarde
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `time` (String) : Heure (HH:MM)
- `days` (String) : Jours (lundi,mardi,etc.)
**Exemple :** `/backup_schedule time:03:00 days:lundi,mercredi`
**Réponse :** ✅ Sauvegarde planifiée : Lundi et Mercredi à 03:00.

### /backup_cancel
**Description :** Annule une sauvegarde planifiée
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `schedule_id` (String) : ID de la planification
**Exemple :** `/backup_cancel schedule_id:sched_123456`
**Réponse :** ❌ Sauvegarde sched_123456 annulée.

### /backup_list
**Description :** Affiche la liste des sauvegardes
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :** Aucune
**Exemple :** `/backup_list`
**Réponse :** 📋 Sauvegardes : backup_123456 (01/01/2024), backup_789012 (02/01/2024)

### /backup_delete
**Description :** Supprime une sauvegarde
**Catégorie :** Sécurité
**Permissions :** Administrator
**Options :**
- `backup_id` (String) : ID de la sauvegarde
**Exemple :** `/backup_delete backup_id:backup_123456`
**Réponse :** 🗑️ Sauvegarde backup_123456 supprimée.

### /export
**Description :** Exporte les données du serveur
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `type` (String) : Type (members, roles, channels, all)
**Exemple :** `/export type:all`
**Réponse :** 📤 Export en cours... Fichier généré.

### /import
**Description :** Importe des données
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `file` (Attachment) : Fichier à importer
**Exemple :** `/import file:[file]`
**Réponse :** 📥 Import en cours...

### /stats_global
**Description :** Affiche les statistiques globales du bot
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/stats_global`
**Réponse :** 📊 Statistiques globales : 500 serveurs, 100000 utilisateurs, 99.9% uptime

### /stats_server
**Description :** Affiche les statistiques du serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/stats_server`
**Réponse :** 📊 Statistiques du serveur : 150 membres, 5000 messages, 25 rôles

### /stats_user
**Description :** Affiche vos statistiques
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/stats_user`
**Réponse :** 📊 Vos statistiques : 100 messages, 5 réactions, 2h en vocal

### /top
**Description :** Affiche le top du serveur
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `type` (String) : Type (messages, xp, money, voice)
**Exemple :** `/top type:messages`
**Réponse :** 🏆 Top messages : 1. @User1 (5000), 2. @User2 (4500)

### /achievement
**Description :** Affiche vos succès
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :** Aucune
**Exemple :** `/achievement`
**Réponse :** 🏆 Succès : 🥇 Premier message, 🥈 100 messages, 🥉 1000 messages

### /achievement_unlock
**Description :** Débloque un succès
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
- `achievement` (String) : Nom du succès
**Exemple :** `/achievement_unlock user:@user achievement:VIP`
**Réponse :** ✅ Succès "VIP" débloqué pour @user.

### /badge_unlock
**Description :** Débloque un badge
**Catégorie :** Administration
**Permissions :** Administrator
**Options :**
- `user` (Utilisateur) : Utilisateur concerné
- `badge` (String) : Nom du badge
**Exemple :** `/badge_unlock user:@user badge:Supporter`
**Réponse :** ✅ Badge "Supporter" débloqué pour @user.

### /title
**Description :** Définit votre titre personnalisé
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `title` (String) : Votre titre
**Exemple :** `/title title:Le Legend`
**Réponse :** ✅ Titre défini : "Le Legend"

### /bio
**Description :** Définit votre biographie
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `bio` (String) : Votre biographie
**Exemple :** `/bio bio:Passionné de Discord`
**Réponse :** ✅ Biographie définie.

### /background
**Description :** Définit votre arrière-plan de profil
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `color` (String) : Couleur hexadécimale
**Exemple :** `/background color:#FF5733`
**Réponse :** ✅ Arrière-plan défini : #FF5733

### /theme
**Description :** Définit votre thème
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `theme` (String) : Nom du thème
**Exemple :** `/theme theme:dark`
**Réponse :** ✅ Thème défini : dark

### /customstatus
**Description :** Définit votre statut personnalisé
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `status` (String) : Votre statut
**Exemple :** `/customstatus status:En train de coder`
**Réponse :** ✅ Statut personnalisé défini.

### /status
**Description :** Définit votre statut Discord
**Catégorie :** Utilitaires
**Permissions :** Aucune
**Options :**
- `type` (String) : Type (online, idle, dnd, invisible)
**Exemple :** `/status type:online`
**Réponse :** ✅ Statut défini : online

---

## Résumé

**Total de commandes :** 200+

**Catégories :**
- Modération : 13 commandes
- Administration : 10 commandes
- Utilitaires : 13 commandes
- Fun : 10 commandes
- Économie : 10 commandes
- Tickets : 5 commandes
- Roblox : 6 commandes
- Sécurité : 6 commandes
- Commandes originales : 150+ commandes

Toutes les commandes sont prêtes à être implémentées dans Dice Bot !
