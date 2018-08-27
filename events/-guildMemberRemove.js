const log = require("../functions/log");

exports.run = (client, member) => {
  log.run(3, "guildMemberRemove", member.id + " FROM " + member.guild.id);
}
