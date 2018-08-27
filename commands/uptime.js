const config = require("../data/config.json");
const log = require("../functions/log");
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var uptime = new Date(client.uptime);
    var uptimeReadable = "";
    uptimeReadable += uptime.getUTCDate()-1 + " days, ";
    uptimeReadable += uptime.getUTCHours() + " hours, ";
    uptimeReadable += uptime.getUTCMinutes() + " minutes, ";
    uptimeReadable += uptime.getUTCSeconds() + " seconds";
    let botembed = new Discord.RichEmbed()
    .addField("Uptime", uptimeReadable)
    .setFooter("Requested by " + message.author.username)
    .setTimestamp();

    return message.channel.send(botembed)
      .catch(error => log.run(3, "messageCleanup", error));
}
