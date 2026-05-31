import Guild from '../models/Guild.js';

export default {
    name: 'guildCreate',
    async execute(guild) {
        console.log(`[GUILD] Joined guild: ${guild.name} (ID: ${guild.id})`);

        try {
            const existingGuild = await Guild.findOne({ guildId: guild.id });
            
            if (!existingGuild) {
                const newGuild = new Guild({
                    guildId: guild.id,
                    guildName: guild.name,
                    ownerId: guild.ownerId,
                    memberCount: guild.memberCount,
                    prefix: '!',
                    language: 'fr',
                    moderation: {
                        enabled: true,
                        logs: false,
                        autoMod: false,
                    },
                    economy: {
                        enabled: true,
                        currency: '🪙',
                        startingBalance: 1000,
                    },
                    tickets: {
                        enabled: false,
                        category: null,
                        supportRole: null,
                    },
                    levels: {
                        enabled: true,
                        xpMultiplier: 1,
                    },
                    welcome: {
                        enabled: false,
                        channel: null,
                        message: null,
                    },
                    goodbye: {
                        enabled: false,
                        channel: null,
                        message: null,
                    },
                });
                
                await newGuild.save();
                console.log(`[GUILD] Created configuration for guild: ${guild.name}`);
            }
        } catch (error) {
            console.error(`[GUILD] Error creating guild configuration:`, error);
        }
    },
};
