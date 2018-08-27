const config = require("../data/config.json");
const log = require("../functions/log");

exports.run = (client, message, args) => { //non async!
  if (message.author.id != "250603354487652352") {
    return message.reply("Sorry, only for the bot owner.")
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error))});
  }
  if(!args[0]) {
    return message.reply("Usage: `" + config.prefix + "reload <command>`");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`${args[0]} has been reloaded.`);
};
