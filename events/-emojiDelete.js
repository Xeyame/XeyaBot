const log = require("../functions/log");

exports.run = (client, Emoji) => {
  log.run(3, "EmojiDelete", Emoji.id);
}
