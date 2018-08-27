const config = require("../data/config.json");
const log = require("../functions/log");

function thumbsUp(message) {
  message.react("👍");
}

function shrug(message) {
  message.react("🤷");
}

function thumbsDown(message) {
  message.react("👎");
}

exports.run = async (client, message, args) => {
  if (!args[0]) {
    return message.reply("`Usage: " + config.prefix + "poll <text>")
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error))});
  } else {
    thumbsUp(message);
    setTimeout(shrug, 500, message);
    setTimeout(thumbsDown, 1000, message);
  }
}
