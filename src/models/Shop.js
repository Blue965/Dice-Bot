import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
    guildId: { type: String, required: true },
    items: [{
        name: { type: String, required: true },
        description: { type: String, default: null },
        price: { type: Number, required: true },
        type: { type: String, enum: ['role', 'item', 'badge', 'title'], required: true },
        roleId: { type: String, default: null },
        stock: { type: Number, default: -1 }, // -1 = unlimited
        emoji: { type: String, default: null },
        category: { type: String, default: 'general' },
        active: { type: Boolean, default: true },
        createdAt: { type: Date, default: Date.now },
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

shopSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

export default mongoose.model('Shop', shopSchema);
