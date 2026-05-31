import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits } from 'discord.js';
import Ticket from '../models/Ticket.js';
import crypto from 'crypto';

export default {
    data: new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('Crée un ticket de support')
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Raison du ticket')
                .setRequired(false)),
    cooldown: 10,
    async execute(interaction, client) {
        const reason = interaction.options.getString('reason') || 'Aucune raison fournie';
        const guildId = interaction.guild.id;
        const userId = interaction.user.id;

        // Check if user already has an open ticket
        const existingTicket = await Ticket.findOne({
            guildId,
            userId,
            status: 'open'
        });

        if (existingTicket) {
            return interaction.reply({
                content: '❌ Vous avez déjà un ticket ouvert. Veuillez le fermer avant d\'en créer un nouveau.',
                ephemeral: true
            });
        }

        // Create ticket channel
        const ticketId = crypto.randomBytes(4).toString('hex');
        const channelName = `ticket-${ticketId}`;

        const category = interaction.guild.channels.cache.find(
            c => c.name === 'tickets' && c.type === 4 // Category type
        );

        const ticketChannel = await interaction.guild.channels.create({
            name: channelName,
            type: 0, // Text channel
            parent: category?.id || null,
            permissionOverwrites: [
                {
                    id: interaction.guild.id,
                    deny: [PermissionFlagsBits.ViewChannel],
                },
                {
                    id: userId,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages, PermissionFlagsBits.ReadMessageHistory],
                },
            ],
        });

        // Save ticket to database
        const ticket = new Ticket({
            ticketId,
            guildId,
            channelId: ticketChannel.id,
            userId,
            username: interaction.user.tag,
            reason,
            status: 'open',
        });

        await ticket.save();

        // Create embed
        const embed = new EmbedBuilder()
            .setColor('#3BA55C')
            .setTitle('🎫 Nouveau Ticket')
            .setDescription(`Bonjour ${interaction.user}, votre ticket a été créé.`)
            .addFields(
                { name: 'Raison', value: reason, inline: true },
                { name: 'ID du ticket', value: ticketId, inline: true }
            )
            .setTimestamp();

        // Create buttons
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('ticket_close')
                    .setLabel('Fermer')
                    .setStyle(ButtonStyle.Danger),
                new ButtonBuilder()
                    .setCustomId('ticket_claim')
                    .setLabel('Réclamer')
                    .setStyle(ButtonStyle.Success),
            );

        await ticketChannel.send({ content: `<@${userId}>`, embeds: [embed], components: [row] });

        await interaction.reply({
            content: `✅ Votre ticket a été créé dans ${ticketChannel}`,
            ephemeral: true
        });
    },
};
