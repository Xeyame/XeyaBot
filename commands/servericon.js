const config = require("../data/config.json");
const log = require("../functions/log");

exports.run = async (client, message, args) => {
  if (message.guild.iconURL === null) {
    var reply = "This server has no icon.";
    message.delete(config.deleteAfter);
    return message.reply(reply)
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error))});
  } else {
    var reply = "{file: " + message.guild.iconURL + "}";
    return message.channel.send(reply);
  }
}
