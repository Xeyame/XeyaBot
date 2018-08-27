const Discord = require("discord.js");
const config = require("../data/config.json");
const log = require("../functions/log");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
  snekfetch.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
  .then(r => {
      let botembed = new Discord.RichEmbed()
        .setColor("#7289DA")
        .addField("Random trump quote", JSON.parse(r.text).message)
      return message.channel.send(botembed)
        .catch(error => log.run(3, "messageCleanup", error));
  });
}
