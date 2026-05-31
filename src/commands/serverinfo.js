import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Affiche les informations du serveur'),
    cooldown: 5,
    async execute(interaction) {
        const guild = interaction.guild;

        const embed = new EmbedBuilder()
            .setColor('#5865F2')
            .setTitle('🖥️ Informations du serveur')
            .setThumbnail(guild.iconURL({ size: 4096 }))
            .addFields(
                { name: 'Nom', value: guild.name, inline: true },
                { name: 'ID', value: guild.id, inline: true },
                { name: 'Propriétaire', value: `<@${guild.ownerId}>`, inline: true },
                { name: 'Membres', value: `${guild.memberCount}`, inline: true },
                { name: 'Rôles', value: `${guild.roles.cache.size}`, inline: true },
                { name: 'Salons', value: `${guild.channels.cache.size}`, inline: true },
                { name: 'Créé le', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:R>`, inline: true },
                { name: 'Niveau de boost', value: `${guild.premiumTier}`, inline: true },
                { name: 'Boosts', value: `${guild.premiumSubscriptionCount}`, inline: true }
            )
            .setTimestamp();

        if (guild.description) {
            embed.setDescription(guild.description);
        }

        if (guild.banner) {
            embed.setImage(guild.bannerURL({ size: 4096 }));
        }

        await interaction.reply({ embeds: [embed] });
    },
};
