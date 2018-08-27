const log = require("../functions/log");

exports.run = (client, oldEmoji, newEmoji) => {
  log.run(3, "EmojiUpdate", newEmoji.id + " " + newEmoji.url);
}
