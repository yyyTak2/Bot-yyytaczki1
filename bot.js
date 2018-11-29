const Discord = require("discord.js");
const bot = new Discord.Client();
bot.on("ready", () => {
  console.log("Ready");
  bot.user.setActivity("Type !help");
})

client.login(process.env.B0T_T0KEN);
