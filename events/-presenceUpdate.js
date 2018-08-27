const log = require("../functions/log");

exports.run = (client, oldMember, newMember) => {
  log.run(3, "presenceUpdate", oldMember.id + " BEFORE " + oldMember.presence.status);
  log.run(3, "presenceUpdate", newMember.id + " AFTER " + newMember.presence.status);
}
