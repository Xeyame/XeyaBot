const log = require("../functions/log");

exports.run = (client, channel) => {
  log.run(3, "channelCreate", channel.id + " TYPE " + channel.type);
}
