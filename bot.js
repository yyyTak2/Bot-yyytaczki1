var Discord = require('discord.js');
var bot = new Discord.Client();
var client = new Discord.Client();

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

client.on('message', message => {

 if(message.content.toLowerCase() === 'hello')
      message.channel.send('lololol' + message.author);
   
 else if(message.content.toLowerCase() === 'lol')
      message.reply('pong');

  else if(message.content.toLowerCase() === 'lol')
      message.channel.send('eksdi');
   
        }
    });
});
   
// THIS  MUST  BE  THIS  WAY
client.login(process.env.B0T_T0KEN);
bot.login(process.env.B0T_T0KEN);
