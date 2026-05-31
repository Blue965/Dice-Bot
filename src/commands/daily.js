import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import User from '../models/User.js';

export default {
    data: new SlashCommandBuilder()
        .setName('daily')
        .setDescription('Récupère votre récompense quotidienne'),
    cooldown: 5,
    async execute(interaction) {
        const userId = interaction.user.id;
        const guildId = interaction.guild.id;

        let user = await User.findOne({ userId });
        
        if (!user) {
            user = new User({
                userId,
                username: interaction.user.username,
                discriminator: interaction.user.discriminator,
                avatar: interaction.user.avatar,
                guilds: [{
                    guildId,
                    balance: 1000,
                    bank: 0,
                    dailyLastClaimed: null,
                }],
            });
        }

        const guildData = user.guilds.find(g => g.guildId === guildId);
        if (!guildData) {
            user.guilds.push({
                guildId,
                balance: 1000,
                bank: 0,
                dailyLastClaimed: null,
            });
        }

        const now = new Date();
        const lastClaimed = guildData?.dailyLastClaimed;

        if (lastClaimed) {
            const timeDiff = now - lastClaimed;
            const hoursDiff = timeDiff / (1000 * 60 * 60);

            if (hoursDiff < 24) {
                const hoursLeft = 24 - hoursDiff;
                const hours = Math.floor(hoursLeft);
                const minutes = Math.floor((hoursLeft - hours) * 60);
                
                return interaction.reply({
                    content: `⏰ Vous devez attendre encore ${hours}h ${minutes}m avant de pouvoir récupérer votre récompense quotidienne.`,
                    ephemeral: true
                });
            }
        }

        // Give daily reward
        const reward = 500;
        const targetGuildData = user.guilds.find(g => g.guildId === guildId);
        targetGuildData.balance += reward;
        targetGuildData.dailyLastClaimed = now;

        await user.save();

        const embed = new EmbedBuilder()
            .setColor('#57F287')
            .setTitle('🎁 Récompense quotidienne')
            .setDescription(`Vous avez reçu ${reward} 🪙 !`)
            .addFields(
                { name: 'Nouveau solde', value: `${targetGuildData.balance} 🪙`, inline: true },
                { name: 'Prochain daily', value: 'Dans 24 heures', inline: true }
            )
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
