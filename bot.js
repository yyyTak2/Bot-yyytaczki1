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

 if(message.content.toLowerCase() === 'dassadadsasdf2')
      message.channel.send('lololol' + message.author);
   
 else if(message.content.toLowerCase() === 'wersdasdaadsf1')
      message.reply('pong');

  else if(message.content.toLowerCase() === '!help')
      message.channel.send('Pisz @yyy... Tak#1959');
});
   
// THIS  MUST  BE  THIS  WAY
client.login(process.env.B0T_T0KEN);
bot.login(process.env.B0T_T0KEN);
