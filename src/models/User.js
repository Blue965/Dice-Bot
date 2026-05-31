import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    discriminator: { type: String, required: true },
    avatar: { type: String, default: null },
    guilds: [{
        guildId: { type: String, required: true },
        xp: { type: Number, default: 0 },
        level: { type: Number, default: 0 },
        balance: { type: Number, default: 0 },
        bank: { type: Number, default: 0 },
        warnings: { type: Number, default: 0 },
        warningsList: [{
            reason: String,
            moderator: String,
            date: { type: Date, default: Date.now },
        }],
        dailyLastClaimed: { type: Date, default: null },
        workLastUsed: { type: Date, default: null },
        begLastUsed: { type: Date, default: null },
        inventory: [{
            name: String,
            quantity: Number,
            obtainedAt: { type: Date, default: Date.now },
        }],
        badges: [{ type: String }],
        achievements: [{ type: String }],
        customTitle: { type: String, default: null },
        bio: { type: String, default: null },
        backgroundColor: { type: String, default: null },
        theme: { type: String, default: 'dark' },
        reputation: { type: Number, default: 0 },
        messagesSent: { type: Number, default: 0 },
        voiceTime: { type: Number, default: 0 },
        robloxUsername: { type: String, default: null },
        robloxVerified: { type: Boolean, default: false },
    }],
    global: {
        totalXp: { type: Number, default: 0 },
        totalMessages: { type: Number, default: 0 },
        totalVoiceTime: { type: Number, default: 0 },
        commandsUsed: { type: Number, default: 0 },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

userSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

export default mongoose.model('User', userSchema);
