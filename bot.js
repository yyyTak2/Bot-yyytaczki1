var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Mokry Kamilek',
            type: "WATCHING",
            url: "jko"
        }
    });
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.B0T_T0KEN);
