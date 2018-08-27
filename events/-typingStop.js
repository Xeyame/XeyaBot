const log = require("../functions/log");

exports.run = (client, channel, user) => {
  log.run(3, "typingStopEvent", user.id + " CHANNEL " + channel.id);
}
