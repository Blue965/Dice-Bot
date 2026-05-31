import Guild from '../models/Guild.js';

export default {
    name: 'guildDelete',
    async execute(guild) {
        console.log(`[GUILD] Left guild: ${guild.name} (ID: ${guild.id})`);

        try {
            await Guild.deleteOne({ guildId: guild.id });
            console.log(`[GUILD] Deleted configuration for guild: ${guild.name}`);
        } catch (error) {
            console.error(`[GUILD] Error deleting guild configuration:`, error);
        }
    },
};
