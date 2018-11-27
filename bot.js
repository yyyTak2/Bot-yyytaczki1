const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "!"

client.on('ready', () => {
    client.user.setActivity("Huhehue");
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'vert') {
    	message.reply('Siusiaczek <3');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.B0T_T0KEN);
