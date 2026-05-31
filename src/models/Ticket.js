import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    ticketId: { type: String, required: true, unique: true },
    guildId: { type: String, required: true },
    channelId: { type: String, required: true },
    userId: { type: String, required: true },
    username: { type: String, required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ['open', 'closed', 'claimed'], default: 'open' },
    claimedBy: { type: String, default: null },
    claimedAt: { type: Date, default: null },
    closedBy: { type: String, default: null },
    closedAt: { type: Date, default: null },
    closeReason: { type: String, default: null },
    transcript: { type: String, default: null },
    priority: { type: String, enum: ['low', 'medium', 'high', 'urgent'], default: 'medium' },
    category: { type: String, default: 'general' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

ticketSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

export default mongoose.model('Ticket', ticketSchema);
