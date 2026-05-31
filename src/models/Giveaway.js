import mongoose from 'mongoose';

const giveawaySchema = new mongoose.Schema({
    giveawayId: { type: String, required: true, unique: true },
    guildId: { type: String, required: true },
    channelId: { type: String, required: true },
    messageId: { type: String, required: true },
    prize: { type: String, required: true },
    winnersCount: { type: Number, required: true },
    hostedBy: { type: String, required: true },
    endTime: { type: Date, required: true },
    participants: [{ type: String }],
    winners: [{ type: String }],
    status: { type: String, enum: ['active', 'ended', 'cancelled'], default: 'active' },
    requirements: {
        minLevel: { type: Number, default: 0 },
        minBalance: { type: Number, default: 0 },
        requiredRole: { type: String, default: null },
    },
    createdAt: { type: Date, default: Date.now },
    endedAt: { type: Date, default: null },
});

export default mongoose.model('Giveaway', giveawaySchema);
