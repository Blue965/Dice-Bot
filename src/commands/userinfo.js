import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Affiche les informations d\'un utilisateur')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('L\'utilisateur concerné')
                .setRequired(false)),
    cooldown: 3,
    async execute(interaction) {
        const targetUser = interaction.options.getUser('user') || interaction.user;
        const member = await interaction.guild.members.fetch(targetUser.id).catch(() => null);

        const embed = new EmbedBuilder()
            .setColor('#5865F2')
            .setTitle('👤 Informations utilisateur')
            .setThumbnail(targetUser.displayAvatarURL({ size: 4096 }))
            .addFields(
                { name: 'Utilisateur', value: `${targetUser.tag}`, inline: true },
                { name: 'ID', value: targetUser.id, inline: true },
                { name: 'Bot', value: targetUser.bot ? 'Oui' : 'Non', inline: true },
                { name: 'Compte créé', value: `<t:${Math.floor(targetUser.createdTimestamp / 1000)}:R>`, inline: true }
            )
            .setTimestamp();

        if (member) {
            embed.addFields(
                { name: 'Rejoint le', value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`, inline: true },
                { name: 'Rôles', value: member.roles.cache.size > 10 
                    ? `${member.roles.cache.size} rôles (trop nombreux pour afficher)` 
                    : member.roles.cache.map(r => r.toString()).join(', ') || 'Aucun', inline: false },
                { name: 'Rôle le plus élevé', value: member.roles.highest.toString(), inline: true },
                { name: 'Boost serveur', value: member.premiumSince ? 'Oui' : 'Non', inline: true }
            );

            if (interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
                const permissions = member.permissions.toArray();
                embed.addFields({
                    name: 'Permissions clés',
                    value: permissions.slice(0, 5).join(', ') + (permissions.length > 5 ? '...' : ''),
                    inline: false
                });
            }
        }

        await interaction.reply({ embeds: [embed] });
    },
};
