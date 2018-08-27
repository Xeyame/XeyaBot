const config = require("../data/config.json");
const log = require("../functions/log");

exports.run = async (client, message, args) => {

  if (args[0] === undefined || args[1] === undefined) {
    var result = "Usage: `!say <channel> <message>`";
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
      var result = "Usage: `!say <channel> <message>`";
    } else if (!message.guild.channels.has(channelID)) {
      var result = "Usage: `!say <channel> <message>`";
    } else {
      message.guild.channels.get(channelID).send(args.slice(1).join(" "));
      var result = "Message sent.";
    }
  }
  message.delete(config.deleteAfter);
  return message.channel.send(result)
  .then(message => {message.delete(config.deleteAfter)
  .catch(error => log.run(3, "messageCleanup", error))});
}
