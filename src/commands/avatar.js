import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Affiche l\'avatar d\'un utilisateur')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('L\'utilisateur concerné')
                .setRequired(false)),
    cooldown: 3,
    async execute(interaction) {
        const targetUser = interaction.options.getUser('user') || interaction.user;
        
        const avatarURL = targetUser.displayAvatarURL({ size: 4096, dynamic: true });

        const embed = new EmbedBuilder()
            .setColor('#5865F2')
            .setTitle(`🖼️ Avatar de ${targetUser.tag}`)
            .setImage(avatarURL)
            .addFields(
                { name: 'Format original', value: `[PNG](${targetUser.displayAvatarURL({ extension: 'png', size: 4096 })}) | [JPG](${targetUser.displayAvatarURL({ extension: 'jpg', size: 4096 })}) | [WEBP](${targetUser.displayAvatarURL({ extension: 'webp', size: 4096 })})`, inline: false }
            )
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
