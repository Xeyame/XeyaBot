const Discord = require("discord.js");
const verificationLevelToText = require("../functions/verificationLevelToText");
const config = require("../data/config.json");
const log = require("../functions/log");

exports.run = async (client, message, args) => {
  var creationStamp = new Date(message.guild.createdTimestamp);

  let embed = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setColor("#ff6600")
  .addField("Server Owner", message.guild.owner, true)
  .addField("Server creation date", creationStamp.getDate() + '/' + (creationStamp.getMonth()+1) + '/' + creationStamp.getFullYear(), true)
  .addField("Server Region", message.guild.region)
  .addField("Members", message.guild.memberCount, true)
  .addField("Bots", message.guild.members.filter(member => member.user.bot).size, true)
  .addField("Humans", message.guild.members.filter(member => !member.user.bot).size, true)
  .addField("Server verification level", "● " + verificationLevelToText.run(message.guild.verificationLevel, message) + " (" + message.guild.verificationLevel + "/4)")
  .addField("Members by status",
            "● Online: **" + message.guild.members.filter(member => member.user.presence.status === "online").size +
            "**\r\n● Idle: **" + message.guild.members.filter(member => member.user.presence.status === "idle").size +
            "**\r\n● Do not disturb: **" + message.guild.members.filter(member => member.user.presence.status === "dnd").size +
            "**\r\n● Offline: **" + message.guild.members.filter(member => member.user.presence.status === "offline").size + "**")
  .setFooter("Server ID: " + message.guild.id + " | Requested by " + message.author.username, client.user.displayAvatarURL)
  .setTimestamp();

  return message.channel.send(embed)
    .catch(error => log.run(3, "messageCleanup", error));
}
