const Discord = require("discord.js");
const config = require("../data/config.json");
const log = require("../functions/log");
const snekfetch = require("snekfetch");

exports.run = async (client, message, args) => {
  if (args[0] === undefined) {
    var d = new Date();
    var month = 1 + d.getMonth();
    var day = d.getDate();
    snekfetch.get(`http://numbersapi.com/${month}/${day}/date`)
    .then(r => {
        let botembed = new Discord.RichEmbed()
          .setColor("#7289DA")
          .addField(`Date fact (${d.toDateString()})`, r.text)
        return message.channel.send(botembed)
          //.then(message => {message.delete(config.deleteAfter)
          .catch(error => log.run(3, "messageCleanup", error)) //})
    });
  } else if (args[0] <= 12 && args[1] <= 31) {
    var d = new Date();
    d.setDate(args[1]);
    d.setMonth(args[0]- 1);
    var month = 1 + d.getMonth();
    var day = d.getDate();
    snekfetch.get(`http://numbersapi.com/${month}/${day}/date`)
    .then(r => {
        let botembed = new Discord.RichEmbed()
          .setColor("#7289DA")
          .addField(`Date fact (${d.toDateString()})`, r.text)
        return message.channel.send(botembed)
          //.then(message => {message.delete(config.deleteAfter)
          .catch(error => log.run(3, "messageCleanup", error)) //})
    });
  } else {
    message.delete(config.deleteAfter);
    return message.reply("Usage: `" + config.prefix + "datefact month day`")
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error)) })
  }
}
