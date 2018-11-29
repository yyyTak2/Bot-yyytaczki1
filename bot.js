var Discord = require('discord.js');
var bot = new Discord.Client();
var logger = require('winston');
var auth = require('./auth.json')

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
else if(message.content.toLowerCase() === 'lol')
      message.channel.send('eksdi');
   
// THIS  MUST  BE  THIS  WAY
bot.login(process.env.B0T_T0KEN);
