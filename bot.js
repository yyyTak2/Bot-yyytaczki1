const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();

bot.on('ready', () => {
  bot.user.setGame('GEJM HERE')
  console.log('I am ready!');
})
  
client.on(message => {
    if (message.content === 'vert') {
    	message.reply('Penisek');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.B0T_T0KEN);
