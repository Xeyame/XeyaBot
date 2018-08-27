const Discord = require("discord.js");
const config = require("../data/config.json");
const log = require("../functions/log");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
  snekfetch.get('https://nekos.life/api/v2/img/meow')
  .then(r => {
      let botembed = new Discord.RichEmbed()
        .setColor("#7289DA")
        .setTitle("🐱 Cat incoming")
        .setImage(JSON.parse(r.text).url)
      return message.channel.send(botembed)
        //.then(message => {message.delete(config.deleteAfter)
        .catch(error => log.run(3, "messageCleanup", error)) // })
  });
}
