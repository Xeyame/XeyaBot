const config = require("../data/config.json");
const log = require("../functions/log");

exports.run = (client, message, args) => { //non async!
  if (message.author.id != "250603354487652352") {
    return message.reply("Sorry, only for the bot owner.")
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error))});
  }
  message.reply(client.guilds.map(g => g.name));
};
