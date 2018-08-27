const config = require("../data/config.json");
const log = require("../functions/log");
const Discord = require("discord.js");

function noFalseValues(arr) {
  var arrayLength = arr.length;
  let values = new Array();
  for (var i = 0; i < arrayLength; i++) {
      if (arr[i][1] === true) {
        values.push(arr[i][0]);
      }
  }
  return values.join(", ");
}

exports.run = async (client, message, args) => {
  if (message.mentions.users.size >= 1) {
    let botembed = new Discord.RichEmbed()
      .setAuthor(message.mentions.users.first().username + "#" + message.mentions.users.first().discriminator, message.mentions.users.first().displayAvatarURL)
      .setThumbnail(message.mentions.users.first().displayAvatarURL)
      .setColor(message.guild.members.get(message.mentions.users.first().id).displayHexColor)
      .setTitle("User information")
      .addField("Key Permissions", "```" + noFalseValues(Object.entries(message.guild.members.get(message.mentions.users.first().id).permissions.serialize())) + "```")
      .setFooter("Requested by " + message.author.username + "| ID: " + message.mentions.users.first().id)
      .setTimestamp();
    return message.channel.send(botembed)
      .catch(error => log.run(3, "messageCleanup", error));
  } else {
    let botembed = new Discord.RichEmbed()
      .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL)
      .setThumbnail(message.author.displayAvatarURL)
      .setColor(message.guild.members.get(message.author.id).displayHexColor)
      .addField("Key Permissions", "```" + noFalseValues(Object.entries(message.guild.members.get(message.author.id).permissions.serialize())) + "```")
      .setFooter("Requested by " + message.author.username + " | ID: " + message.author.id)
      .setTimestamp();
    return message.channel.send(botembed)
      .catch(error => log.run(3, "messageCleanup", error));
  }
}
