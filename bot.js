const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Ready");
  client.user.setActivity('YouTube', { type: 'WATCHING' });

client.login(process.env.B0T_T0KEN);
