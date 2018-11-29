var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    bot.user.setPresence({
        game: {
            name: 'Type !help',
            type: 1
        }
    });
});
