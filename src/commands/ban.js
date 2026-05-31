import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bannit un membre du serveur')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Le membre à bannir')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Raison du bannissement')
                .setRequired(false))
        .addIntegerOption(option =>
            option.setName('delete_days')
                .setDescription('Jours de messages à supprimer (0-7)')
                .setRequired(false)
                .setMinValue(0)
                .setMaxValue(7)),
    cooldown: 3,
    async execute(interaction, client) {
        if (!interaction.member.permissions.has(PermissionFlagsBits.BanMembers)) {
            return interaction.reply({ 
                content: '❌ Vous n\'avez pas la permission de bannir des membres.', 
                ephemeral: true 
            });
        }

        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || 'Aucune raison fournie';
        const deleteDays = interaction.options.getInteger('delete_days') || 0;
        const member = await interaction.guild.members.fetch(user.id).catch(() => null);

        if (member) {
            if (!member.bannable) {
                return interaction.reply({ 
                    content: '❌ Je ne peux pas bannir cet utilisateur.', 
                    ephemeral: true 
                });
            }

            if (member.roles.highest.position >= interaction.member.roles.highest.position) {
                return interaction.reply({ 
                    content: '❌ Vous ne pouvez pas bannir quelqu\'un avec un rôle égal ou supérieur au vôtre.', 
                    ephemeral: true 
                });
            }
        }

        try {
            await interaction.guild.bans.create(user.id, { 
                reason, 
                deleteMessageDays: deleteDays 
            });

            const embed = new EmbedBuilder()
                .setColor('#ED4245')
                .setTitle('🔨 Membre banni')
                .addFields(
                    { name: 'Utilisateur', value: `${user.tag} (${user.id})`, inline: true },
                    { name: 'Raison', value: reason, inline: true },
                    { name: 'Messages supprimés', value: `${deleteDays} jours`, inline: true },
                    { name: 'Modérateur', value: interaction.user.tag, inline: true }
                )
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });

            // Log to mod logs if configured
        } catch (error) {
            console.error('Error banning member:', error);
            await interaction.reply({ 
                content: '❌ Une erreur s\'est produite lors du bannissement.', 
                ephemeral: true 
            });
        }
    },
};
