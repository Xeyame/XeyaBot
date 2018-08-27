const Discord = require("discord.js");
const config = require("../data/config.json");
const log = require("../functions/log");
const snekfetch = require("snekfetch");

function getExtention(fname) {
  return fname.slice((fname.lastIndexOf(".") - 1 >>> 0) + 2);
}

exports.run = async (client, message, args) => {
  snekfetch.get('https://random.dog/woof.json')
  .then(r => {
      let fileurl = JSON.parse(r.text).url;
      if (getExtention(fileurl) === "mp4" || getExtention(fileurl) === "webm") {
        //is vid
        message.channel.startTyping();
        return message.reply({file: fileurl})
          //.then(message => {message.delete(config.deleteAfter)
          .catch(error => log.run(3, "messageCleanup", error)) // })
          .then(message.channel.stopTyping())
      } else {
        // probs image
        let botembed = new Discord.RichEmbed()
          .setColor("#7289DA")
          .setTitle("🐶 Dog incoming")
          .setImage(JSON.parse(r.text).url)
        return message.channel.send(botembed)
          //.then(message => {message.delete(config.deleteAfter)
          .catch(error => log.run(3, "messageCleanup", error)) // })
      }
  });
}
