const log = require("../functions/log");

exports.run = (client, guild) => {
  log.run(2, "guildDeleteEvent", guild.id + " NAMED \"" + guild.name + "\"");
}
