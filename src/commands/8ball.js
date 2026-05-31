import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Pose une question au 8ball')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('Votre question')
                .setRequired(true)),
    cooldown: 3,
    async execute(interaction) {
        const question = interaction.options.getString('question');
        
        const responses = [
            'Les signes pointent vers oui.',
            'Oui, absolument.',
            'C\'est certain.',
            'Sans aucun doute.',
            'Vous pouvez compter dessus.',
            'Comme je le vois, oui.',
            'Très probablement.',
            'Perspectives favorables.',
            'Oui.',
            'Les signes indiquent que oui.',
            'Réponse floue, essayez à nouveau.',
            'Demandez plus tard.',
            'Mieux vaut ne pas vous le dire maintenant.',
            'Impossible à prédire maintenant.',
            'Concentrez-vous et demandez à nouveau.',
            'Ne comptez pas là-dessus.',
            'Ma réponse est non.',
            'Mes sources disent non.',
            'Les perspectives ne sont pas bonnes.',
            'Très douteux.',
        ];

        const response = responses[Math.floor(Math.random() * responses.length)];

        const embed = new EmbedBuilder()
            .setColor('#5865F2')
            .setTitle('🎱 8 Ball')
            .addFields(
                { name: 'Question', value: question, inline: false },
                { name: 'Réponse', value: response, inline: false }
            )
            .setFooter({ text: `Demandé par ${interaction.user.tag}` })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
