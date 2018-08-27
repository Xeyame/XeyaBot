const config = require("../data/config.json");
const log = require("../functions/log");
var figlet = require('figlet');

exports.run = async (client, message, args) => {
  var maxLen = 25 // You can modify the max characters here

  if(args.join(' ').length > maxLen) {
    message.delete(config.deleteAfter);
    return message.reply('Please use less than ' + maxLen + " characters")
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error))});
  }

  if(!args[0]) {
    message.delete(config.deleteAfter);
    return message.reply(`Usage: \`${config.prefix}ascii <text>\``)
      .then(message => {message.delete(config.deleteAfter)
      .catch(error => log.run(3, "messageCleanup", error))});
  }

  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          log.run(1, commandAscii, err);
          return;
      }
      message.reply(`${data}`, {code: 'AsciiArt'});
  });
}
