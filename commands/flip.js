const config = require("../data/config.json");
const log = require("../functions/log");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (Math.random() > 0.5) {
    var res = "Heads";
  } else {
    var res = "Tails";
  }
  let botembed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .addField(":money_with_wings: Coin flip", res);

  message.channel.send(botembed);
}
