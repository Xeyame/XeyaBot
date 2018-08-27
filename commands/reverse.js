const config = require("../data/config.json");
const log = require("../functions/log");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  function reverseString(input) {
        return input.split("").reverse().join("");
    }

  if (!args[0]) {
    return message.reply("Usage: `" + config.prefix + "reverse <text>`")
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error))});
  }
  message.reply(reverseString(args.join(" ")));
}
