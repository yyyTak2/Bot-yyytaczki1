var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Mokry Kamilek <3',
            type: "WATCHING",
            url: "https://www.pornhub.com/"
        }
    });
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.B0T_T0KEN);
