var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Mokry Kamilek <3',
            type: "WATCHING",
            url: "https://www.pornhub.com/view_video.php?viewkey=ph5b94e8f2878b1"
        }
    });
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.B0T_T0KEN);
