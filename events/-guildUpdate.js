const log = require("../functions/log");

exports.run = (client, oldGuild, newGuild) => {
  log.run(3, "guildUpdateEvent", "OLD " + oldGuild.id + " NAMED \"" + oldGuild.name + "\"");
  log.run(3, "guildUpdateEvent", "NEW " + newGuild.id + " NAMED \"" + newGuild.name + "\"");
}
