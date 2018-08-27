const log = require("../functions/log");
const updateBotStatus = require("../functions/updateBotStatus");

exports.run = (client, guild) => {
  log.run(2, "guildCreateEvent", guild.id + " NAMED \"" + guild.name + "\"");
  updateBotStatus.run(client);
}
