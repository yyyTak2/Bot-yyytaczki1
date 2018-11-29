var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: '🔥Łazienka Kamilka🔥 👉👌',
            type: "STREAMING",
            url: "https://www.twitch.tv/yyytak32"

        }
    });
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: 382617504507232259,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.B0T_T0KEN);
