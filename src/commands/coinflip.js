import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('coinflip')
        .setDescription('Lance une pièce'),
    cooldown: 2,
    async execute(interaction) {
        const outcomes = ['Pile', 'Face'];
        const result = outcomes[Math.floor(Math.random() * outcomes.length)];
        const emoji = result === 'Pile' ? '🪙' : '🪙';

        const embed = new EmbedBuilder()
            .setColor('#FEE75C')
            .setTitle(`${emoji} Pile ou Face`)
            .setDescription(`Résultat : **${result}**`)
            .setFooter({ text: `Lancé par ${interaction.user.tag}` })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
