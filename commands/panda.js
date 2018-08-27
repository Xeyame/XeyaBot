const Discord = require("discord.js");
const config = require("../data/config.json");
const log = require("../functions/log");
const snekfetch = require("snekfetch");

var pandafact = '';
var pandaimg = '';

exports.run = async (client, message, args) => {
  snekfetch.get('https://some-random-api.glitch.me/pandafact')
  .then(rf => {
        snekfetch.get('https://some-random-api.glitch.me/pandaimg')
        .then(ri => {
              let botembed = new Discord.RichEmbed()
                .setColor("#7289DA")
                .addField("🐼 Panda fact", JSON.parse(rf.text).fact)
                .setImage(JSON.parse(ri.text).link)
              return message.channel.send(botembed)
                //.then(message => {message.delete(config.deleteAfter)
                .catch(error => log.run(3, "messageCleanup", error)) // })
        });
  });
}
