const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = ""

client.on('ready', () => {
    client.user.setGame(prefix + "Huhehue");
    console.log('I am ready!')
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.B0T_T0KEN);
