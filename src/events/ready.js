export default {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`[READY] Logged in as ${client.user.tag}`);
        console.log(`[READY] Serving ${client.guilds.cache.size} guilds`);
        console.log(`[READY] Serving ${client.users.cache.size} users`);
        
        client.user.setActivity('/help', { type: 'PLAYING' });
    },
};
