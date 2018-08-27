const Discord = require("discord.js");
const config = require("../data/config.json");
const log = require("../functions/log");
const snekfetch = require("snekfetch");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.run = async (client, message, args) => {
  snekfetch.get('https://api.imgur.com/3/gallery/r/memes').set("Authorization", "Client-ID 573b4804eeecb44")
  .then(r => {
    let id = getRandomInt(0, 99);
    let botembed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle(JSON.parse(r.text).data[id].title)
    .setImage(JSON.parse(r.text).data[id].link)
    .setFooter("Source: /r/memes | Also try " + config.prefix + "dankmeme");
    return message.channel.send(botembed)
      //.then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error)) // })
  });
}
