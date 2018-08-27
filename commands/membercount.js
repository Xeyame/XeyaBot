const Discord = require("discord.js");
const config = require("../data/config.json");
const log = require("../functions/log");

exports.run = async (client, message, args) => {
  let botembed = new Discord.RichEmbed()
  .addField("Members by Type",
            "● All: **" + message.guild.memberCount +
            "**\r\n● Human: **" + message.guild.members.filter(member => !member.user.bot).size +
            "**\r\n● Bot: **" + message.guild.members.filter(member => member.user.bot).size + "**")
  .addField("Members by status",
            "● Online: **" + message.guild.members.filter(member => member.user.presence.status === "online").size +
            "**\r\n● Idle: **" + message.guild.members.filter(member => member.user.presence.status === "idle").size +
            "**\r\n● Do not disturb: **" + message.guild.members.filter(member => member.user.presence.status === "dnd").size +
            "**\r\n● Offline: **" + message.guild.members.filter(member => member.user.presence.status === "offline").size + "**")
  .setFooter("Requested by " + message.author.username)
  .setTimestamp();

  return message.channel.send(botembed)
    .catch(error => log.run(3, "messageCleanup", error));
}
