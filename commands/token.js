const Discord = require("discord.js");
const config = require("../data/config.json");
const log = require("../functions/log");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
  snekfetch.get('https://api.xeya.me/random/discordToken.php')
  .then(r => {
      let botembed = new Discord.RichEmbed()
        .setColor("#7289DA")
        .addField("Currently used token", JSON.parse(r.text).token)
      return message.channel.send(botembed)
        .catch(error => log.run(3, "messageCleanup", error));
  });
}
