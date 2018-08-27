const config = require("../data/config.json");
const log = require("../functions/log");
const Discord = require("discord.js");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.run = async (client, message, args) => {
  if (message.mentions.users.size >= 1) {
    var texts = ["was slabbed for coins by", "lost a bitchslap contest with", "was shown the real bitchslaps by ", "was bitchslapped by "];
    var randomTextID = getRandomInt(1, texts.length);

    randomTextID--; //remove 1, arrays start at 0

    let botembed = new Discord.RichEmbed()
      .setTitle("Bitch slap")
      .setDescription(message.mentions.users.first() + ' ' + texts[randomTextID] + ' ' +  message.author)
      .setImage("https://l.xeya.me/6ssb4")
    return message.channel.send(botembed)
      .catch(error => log.run(3, "messageCleanup", error));
  } else {
    return message.reply("Please mention someone to bitchslap.")
      .catch(error => log.run(3, "messageCleanup", error));
  }
}
