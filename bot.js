const Discord = require('discord.js');
const client = new Discord.Client();

const Discord = require("discord.js");
const bot = new Discord.Client();
bot.on("ready", () => {
  console.log("Ready");
  bot.user.setGame("Type !help");
}
       
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'vert') {
    	message.reply('Siusiaczek');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.B0T_T0KEN);
