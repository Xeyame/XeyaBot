const config = require("../data/config.json");
const log = require("../functions/log");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let botembed = new Discord.RichEmbed()
  .setThumbnail(client.user.displayAvatarURL)
  .setColor("#0066ff")
  .addField("Name", client.user.username, true)
  .addField("Creator", "<@250603354487652352>", true)
  .addField("Version", config.version)
  .addField("Prefix", config.prefix, true)
  .addField("Command list", "`" + config.prefix + "help`", true)
  .addField("Need help?", "[Click here to join the support server](https://discord.gg/nUZQNWq)")
  .addField("Add me", "[Just click here and i'll join your discord](https://discordapp.com/api/oauth2/authorize?client_id=439769201977065472&permissions=8&scope=bot)")
  .setFooter("Bot ID: " + client.user.id + "Requested by " + message.author.username, client.user.displayAvatarURL)
  .setTimestamp();

  return message.channel.send(botembed)
    .catch(error => log.run(3, "messageCleanup", error));

}
