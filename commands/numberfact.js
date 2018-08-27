const Discord = require("discord.js");
const config = require("../data/config.json");
const log = require("../functions/log");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
  if (args[0] > 0) {
    snekfetch.get(`http://numbersapi.com/${args[0]}/trivia`)
    .then(r => {
        let botembed = new Discord.RichEmbed()
          .setColor("#7289DA")
          .addField(`Number fact (${args[0]})`, r.text)
        return message.channel.send(botembed)
          //.then(message => {message.delete(config.deleteAfter)
          .catch(error => log.run(3, "messageCleanup", error)) //})
    });
  } else {
    message.delete(config.deleteAfter);
    return message.reply("Usage: `" + config.prefix + "numberfact <number>`")
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error)) })
  }
}
