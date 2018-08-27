const log = require("../functions/log");

exports.run = (client, guild) => {
  log.run(2, "guildUnavailableEvent", guild.id + " NAMED \"" + guild.name + "\"");
}
