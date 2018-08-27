const config = require("../data/config.json");
const log = require("../functions/log");

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.delete(config.deleteAfter);
    return message.reply("**You need the `MANAGE_MESSAGES` permission for this.**")
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error))});
  }

  if (!args[0]) {
    message.delete(config.deleteAfter);
    return message.reply("Please specify how many messages to delete. (1-100)")
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error))});
  }

  if (args[0] < 1 || args[0] > 100) {
    message.delete(config.deleteAfter);
    return message.reply("You must specify between 1 and 100 messages to delete.")
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error))});
  }

  var toDeleteInit = args[0];
  var offset = 1;
  var toDelete = Number(toDeleteInit) + Number(offset);
  message.channel.bulkDelete(toDelete).then(() => {
    message.delete(config.deleteAfter);
    return message.reply(`Cleaned up ${args[0]} messages.`)
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error))});
  });
}
