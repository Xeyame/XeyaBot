const config = require("../data/config.json");
const log = require("../functions/log");

exports.run = async (client, message, args) => {
  if (message.mentions.users.size >= 1) {
      avatarurl = message.mentions.users.first().displayAvatarURL + ".png"
  } else {
      avatarurl = message.author.displayAvatarURL + ".png"
  }

return message.channel.send({file: avatarurl})
  .catch(error => log.run(3, "messageCleanup", error));
}
