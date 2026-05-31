import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Lance un dé')
        .addIntegerOption(option =>
            option.setName('sides')
                .setDescription('Nombre de faces')
                .setRequired(false)
                .setMinValue(2)
                .setMaxValue(100))
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Nombre de dés')
                .setRequired(false)
                .setMinValue(1)
                .setMaxValue(10)),
    cooldown: 2,
    async execute(interaction) {
        const sides = interaction.options.getInteger('sides') || 6;
        const amount = interaction.options.getInteger('amount') || 1;

        const rolls = [];
        let total = 0;

        for (let i = 0; i < amount; i++) {
            const roll = Math.floor(Math.random() * sides) + 1;
            rolls.push(roll);
            total += roll;
        }

        const embed = new EmbedBuilder()
            .setColor('#FEE75C')
            .setTitle('🎲 Lancé de dé')
            .addFields(
                { name: 'Configuration', value: `${amount}d${sides}`, inline: true },
                { name: 'Résultats', value: rolls.join(', '), inline: true },
                { name: 'Total', value: total.toString(), inline: true }
            )
            .setFooter({ text: `Lancé par ${interaction.user.tag}` })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
