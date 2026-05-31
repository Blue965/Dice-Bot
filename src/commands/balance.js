import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import User from '../models/User.js';

export default {
    data: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Affiche votre solde')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Utilisateur concerné')
                .setRequired(false)),
    cooldown: 3,
    async execute(interaction) {
        const targetUser = interaction.options.getUser('user') || interaction.user;
        const guildId = interaction.guild.id;

        let user = await User.findOne({ userId: targetUser.id });
        
        if (!user) {
            user = new User({
                userId: targetUser.id,
                username: targetUser.username,
                discriminator: targetUser.discriminator,
                avatar: targetUser.avatar,
                guilds: [{
                    guildId: guildId,
                    balance: 1000,
                    bank: 0,
                }],
            });
            await user.save();
        }

        const guildData = user.guilds.find(g => g.guildId === guildId);
        const balance = guildData ? guildData.balance : 0;
        const bank = guildData ? guildData.bank : 0;
        const total = balance + bank;

        const embed = new EmbedBuilder()
            .setColor('#EB459E')
            .setTitle('💰 Solde')
            .setThumbnail(targetUser.displayAvatarURL())
            .addFields(
                { name: 'Utilisateur', value: targetUser.tag, inline: true },
                { name: 'Portefeuille', value: `${balance} 🪙`, inline: true },
                { name: 'Banque', value: `${bank} 🪙`, inline: true },
                { name: 'Total', value: `${total} 🪙`, inline: true }
            )
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
