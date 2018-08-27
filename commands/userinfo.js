const config = require("../data/config.json");
const log = require("../functions/log");
const Discord = require("discord.js");
function timestampToReadable(ts) {

  var d = new Date(ts);
  var readable = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  return readable;
}

exports.run = async (client, message, args) => {
  if (message.mentions.users.size >= 1) {
    let botembed = new Discord.RichEmbed()
      .setAuthor(message.mentions.users.first().username + "#" + message.mentions.users.first().discriminator, message.mentions.users.first().displayAvatarURL)
      .setThumbnail(message.mentions.users.first().displayAvatarURL)
      .setColor(message.guild.members.get(message.mentions.users.first().id).displayHexColor)
      .setTitle("User information")
      .addField("ID", "`" + message.mentions.users.first().id + "`", true)
      .addField("Is Bot", message.mentions.users.first().bot, true)
      .addField("Status", message.guild.members.get(message.mentions.users.first().id).presence.status)
      .addField("Registered", timestampToReadable(message.mentions.users.first().createdTimestamp), true)
      .addField("Joined", timestampToReadable(message.guild.members.get(message.mentions.users.first().id).joinedTimestamp), true)
      .addField("Roles (" + message.guild.members.get(message.mentions.users.first().id).roles.size + ")", message.guild.members.get(message.mentions.users.first().id).roles.array().join(", "))
      .setFooter("Requested by " + message.author.username)
      .setTimestamp();
    return message.channel.send(botembed)
      .catch(error => log.run(3, "messageCleanup", error));
  } else {
    let botembed = new Discord.RichEmbed()
      .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
      .setThumbnail(message.author.displayAvatarURL)
      .setColor(message.guild.members.get(message.author.id).displayHexColor)
      .setTitle("User information")
      .addField("ID", "`" + message.author.id + "`", true)
      .addField("Is Bot", message.author.bot, true)
      .addField("Status", message.guild.members.get(message.author.id).presence.status)
      .addField("Registered", timestampToReadable(message.author.createdTimestamp), true)
      .addField("Joined", timestampToReadable(message.guild.members.get(message.author.id).joinedTimestamp), true)
      .addField("Roles (" + message.guild.members.get(message.author.id).roles.size + ")", message.guild.members.get(message.author.id).roles.array().join(", "))
      .setFooter("Requested by " + message.author.username)
      .setTimestamp();
    return message.channel.send(botembed)
      .catch(error => log.run(3, "messageCleanup", error));
  }
}
