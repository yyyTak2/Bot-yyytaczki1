const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDkyMDIxNzQ0MzA4MDYwMTgx.Dt8JTA.75SWDIjaiz4XG-oxHWvm1xwlkX8);
