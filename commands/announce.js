const config = require("../data/config.json");
const log = require("../functions/log");

exports.run = async (client, message, args) => {

  if (args[0] === undefined || args[1] === undefined || args[2] === undefined) {
    var result = "Usage: `!announce <channel> <role> <message>`";
    message.delete(config.deleteAfter);
    return message.channel.send(result)
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error))});
  }

  var channelID = args[0].replace(/\D/g,'');
  if (!message.guild.channels.get(channelID).permissionsFor(message.author).has("SEND_MESSAGES") || !message.guild.channels.get(channelID).permissionsFor(message.author).has("MANAGE_MESSAGES") ) {
    var result = "You need to have permission to write and edit messages in that channel.";
  } else {
    if (!channelID.lenght === 18) {
      var result = "!announce <channel> <role> <message>`";
    } else if (!message.guild.channels.has(channelID)) {
      var result = "Usage: `!announce <channel> <role> <message>`";
    } else {
      //send announcement
      var AnnounceRole = client.guilds.get(message.guild.id).roles.find(role => role.name === args[1]);
      AnnounceRole.setMentionable(true);
      message.guild.channels.get(channelID).send("<@&" + AnnounceRole.id + "> " + args.slice(2).join(" "));
      AnnounceRole.setMentionable(false);
      var result = "Announcement sent.";
    }
  }
  message.delete(config.deleteAfter);
  return message.channel.send(result)
  .then(message => {message.delete(config.deleteAfter)
  .catch(error => log.run(3, "messageCleanup", error))});
}
