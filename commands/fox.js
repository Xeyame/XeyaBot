const Discord = require("discord.js");
const config = require("../data/config.json");
const log = require("../functions/log");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
  snekfetch.get('https://randomfox.ca/floof/')
  .then(r => {
      let botembed = new Discord.RichEmbed()
        .setColor("#7289DA")
        .setTitle("🦊 Fox incoming")
        .setImage(JSON.parse(r.text).image)
      return message.channel.send(botembed)
        //.then(message => {message.delete(config.deleteAfter)
        .catch(error => log.run(3, "messageCleanup", error)) // })
  });
}
