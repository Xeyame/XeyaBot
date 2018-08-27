const log = require("../functions/log");
const updateBotStatus = require("../functions/updateBotStatus");

exports.run = (client, member) => {
  log.run(3, "guildMemberAdd", member.id + " IN " + member.guild.id);
  updateBotStatus.run(client);
}
