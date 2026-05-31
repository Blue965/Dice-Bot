import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Affiche la liste des commandes')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('Catégorie spécifique')
                .addChoices(
                    { name: 'Modération', value: 'moderation' },
                    { name: 'Administration', value: 'administration' },
                    { name: 'Utilitaires', value: 'utilities' },
                    { name: 'Fun', value: 'fun' },
                    { name: 'Économie', value: 'economy' },
                    { name: 'Tickets', value: 'tickets' },
                    { name: 'Roblox', value: 'roblox' },
                    { name: 'Sécurité', value: 'security' },
                )),
    cooldown: 5,
    async execute(interaction, client) {
        const category = interaction.options.getString('category');

        const categories = {
            moderation: {
                name: '🛡️ Modération',
                commands: ['kick', 'ban', 'unban', 'warn', 'warnings', 'clear', 'mute', 'unmute', 'lock', 'unlock', 'slowmode', 'nick', 'timeout', 'untimeout'],
                color: '#ED4245'
            },
            administration: {
                name: '⚙️ Administration',
                commands: ['config', 'setup', 'autorole', 'welcome', 'goodbye', 'logs', 'backup', 'restore', 'reactionrole', 'serverstats'],
                color: '#5865F2'
            },
            utilities: {
                name: '🔧 Utilitaires',
                commands: ['ping', 'help', 'userinfo', 'serverinfo', 'avatar', 'banner', 'roleinfo', 'channelinfo', 'botinfo', 'invite', 'uptime', 'suggest'],
                color: '#57F287'
            },
            fun: {
                name: '🎮 Fun',
                commands: ['roll', 'coinflip', '8ball', 'meme', 'joke', 'rate', 'ship', 'wouldyourather', 'rps', 'trivia'],
                color: '#FEE75C'
            },
            economy: {
                name: '💰 Économie',
                commands: ['balance', 'daily', 'work', 'beg', 'deposit', 'withdraw', 'pay', 'shop', 'buy', 'inventory'],
                color: '#EB459E'
            },
            tickets: {
                name: '🎫 Tickets',
                commands: ['ticket', 'close', 'claim', 'rename', 'transcript'],
                color: '#3BA55C'
            },
            roblox: {
                name: '🎮 Roblox',
                commands: ['robloxuser', 'robloxavatar', 'robloxgame', 'robloxgroup', 'robuxcalculator', 'marketplace'],
                color: '#E74C3C'
            },
            security: {
                name: '🔒 Sécurité',
                commands: ['antiraid', 'antinuke', 'security', 'audit', 'blacklist', 'whitelist'],
                color: '#99AAB5'
            }
        };

        if (category && categories[category]) {
            const cat = categories[category];
            const embed = new EmbedBuilder()
                .setColor(cat.color)
                .setTitle(cat.name)
                .setDescription(cat.commands.map(cmd => `\`/${cmd}\``).join('\n'))
                .setFooter({ text: 'Dice Bot - Utilisez /help sans catégorie pour voir toutes les commandes' })
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } else {
            const embed = new EmbedBuilder()
                .setColor('#5865F2')
                .setTitle('📚 Commandes de Dice Bot')
                .setDescription('Voici toutes les catégories de commandes disponibles. Utilisez `/help catégorie` pour voir les commandes d\'une catégorie spécifique.')
                .addFields(
                    Object.values(categories).map(cat => ({
                        name: cat.name,
                        value: cat.commands.length + ' commandes',
                        inline: true
                    }))
                )
                .setFooter({ text: 'Dice Bot - Bot Discord complet' })
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        }
    },
};
