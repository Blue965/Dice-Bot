import mongoose from 'mongoose';

const guildSchema = new mongoose.Schema({
    guildId: { type: String, required: true, unique: true },
    guildName: { type: String, required: true },
    ownerId: { type: String, required: true },
    memberCount: { type: Number, default: 0 },
    prefix: { type: String, default: '!' },
    language: { type: String, default: 'fr' },
    moderation: {
        enabled: { type: Boolean, default: true },
        logs: { type: Boolean, default: false },
        logChannel: { type: String, default: null },
        autoMod: { type: Boolean, default: false },
    },
    economy: {
        enabled: { type: Boolean, default: true },
        currency: { type: String, default: '🪙' },
        startingBalance: { type: Number, default: 1000 },
    },
    tickets: {
        enabled: { type: Boolean, default: false },
        category: { type: String, default: null },
        supportRole: { type: String, default: null },
        ticketChannel: { type: String, default: null },
    },
    levels: {
        enabled: { type: Boolean, default: true },
        xpMultiplier: { type: Number, default: 1 },
    },
    welcome: {
        enabled: { type: Boolean, default: false },
        channel: { type: String, default: null },
        message: { type: String, default: null },
    },
    goodbye: {
        enabled: { type: Boolean, default: false },
        channel: { type: String, default: null },
        message: { type: String, default: null },
    },
    security: {
        antiRaid: { type: Boolean, default: false },
        antiNuke: { type: Boolean, default: false },
        verification: { type: Boolean, default: false },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

guildSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

export default mongoose.model('Guild', guildSchema);
