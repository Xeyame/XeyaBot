const config = require("../data/config.json");
const log = require("../functions/log");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let botembed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle(":ping_pong: Pong!")
    .addField("Latency", "Calculating...")
    .addField("API Latency", "Calculating...")

  const m = await message.channel.send(botembed);

  m.edit(new Discord.RichEmbed().setColor("#7289DA").setTitle("🏓 Pong!").addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`, true).addField("API Ping", `${Math.round(client.ping)}ms`, true));
}
