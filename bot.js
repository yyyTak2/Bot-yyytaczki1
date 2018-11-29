var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: 'Mokry Kamilek',
            type: "STREAMING",
            url: "https://www.youtube.com/channel/UCPRQyUsYerQFTKdVqgzjQ0g?view_as=subscriber"

        }
    });
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.B0T_T0KEN);
