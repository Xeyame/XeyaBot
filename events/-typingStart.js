const log = require("../functions/log");

exports.run = (client, channel, user) => {
  log.run(3, "typingStartEvent", user.id + " CHANNEL " + channel.id);
}
