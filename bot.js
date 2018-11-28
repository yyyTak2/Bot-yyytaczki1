const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();

});

client.on('message', message => {
    if (message.content === 'vert') {
    	message.reply('Siusiaczek');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.B0T_T0KEN);
