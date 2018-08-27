const Discord = require("discord.js");
const config = require("../data/config.json");
const log = require("../functions/log");

exports.run = async (client, message, args) => {
  let botembed = new Discord.RichEmbed()
  .addField("Add me to your server", "[Just click here and i'll join your discord](https://discordapp.com/api/oauth2/authorize?client_id=439769201977065472&permissions=8&scope=bot)")
  .addField("Need help?", "[Click here to join the support server](https://discord.gg/nUZQNWq)")
  .setFooter("Requested by " + message.author.username)
  .setTimestamp();

  return message.channel.send(botembed)
  .catch(error => log.run(3, "messageCleanup", error));
}
