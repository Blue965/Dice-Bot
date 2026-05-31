import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Expulse un membre du serveur')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Le membre à expulser')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Raison de l\'expulsion')
                .setRequired(false)),
    cooldown: 3,
    async execute(interaction, client) {
        if (!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) {
            return interaction.reply({ 
                content: '❌ Vous n\'avez pas la permission d\'expulser des membres.', 
                ephemeral: true 
            });
        }

        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason') || 'Aucune raison fournie';
        const member = await interaction.guild.members.fetch(user.id).catch(() => null);

        if (!member) {
            return interaction.reply({ 
                content: '❌ Cet utilisateur n\'est pas sur ce serveur.', 
                ephemeral: true 
            });
        }

        if (!member.kickable) {
            return interaction.reply({ 
                content: '❌ Je ne peux pas expulser cet utilisateur.', 
                ephemeral: true 
            });
        }

        if (member.roles.highest.position >= interaction.member.roles.highest.position) {
            return interaction.reply({ 
                content: '❌ Vous ne pouvez pas expulser quelqu\'un avec un rôle égal ou supérieur au vôtre.', 
                ephemeral: true 
            });
        }

        try {
            await member.kick(reason);

            const embed = new EmbedBuilder()
                .setColor('#ED4245')
                .setTitle('👢 Membre expulsé')
                .addFields(
                    { name: 'Utilisateur', value: `${user.tag} (${user.id})`, inline: true },
                    { name: 'Raison', value: reason, inline: true },
                    { name: 'Modérateur', value: interaction.user.tag, inline: true }
                )
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });

            // Log to mod logs if configured
            // This would be implemented with the guild settings
        } catch (error) {
            console.error('Error kicking member:', error);
            await interaction.reply({ 
                content: '❌ Une erreur s\'est produite lors de l\'expulsion.', 
                ephemeral: true 
            });
        }
    },
};
