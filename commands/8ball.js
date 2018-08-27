const Discord = require("discord.js");
const config = require("../data/config.json");
const log = require("../functions/log");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.run = async (client, message, args) => {

  if (args[0] === undefined) {
    message.delete(config.deleteAfter);
    return message.reply("Usage: `" + config.prefix + "8ball <some text>`")
    .then(message => {message.delete(config.deleteAfter)
    .catch(error => log.run(3, "messageCleanup", error))});
  }

  //get random type
  let type = getRandomInt(1,3);

  if (type === 1) {
    //positive
    var results = ["It is certain", "It is decidedly so", "Without a doubt",
		"Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely",
		"Outlook good", "Yes", "Signs point to yes"];
    var chosenResult = getRandomInt(1, results.length);
    var typeColor = "00ff00";
  } else if (type === 2) {
    //neutral
    var results = ["Reply hazy try again", "Ask again later",
		"Better not tell you now", "Cannot predict now", "Concentrate and ask again"];
    var chosenResult = getRandomInt(1, results.length);
    var typeColor = "00ccff";
  } else { //type must be 3 then
    //negative
    var results = ["Don't count on it", "My reply is no",
		"My sources say no", "Outlook not so good", "Very doubtful"];
    var chosenResult = getRandomInt(1, results.length);
    var typeColor = "ff0000";
  }

  chosenResult--; //remove 1 from chosenResult, as arrays start at 0

  let botembed = new Discord.RichEmbed()
  .setColor("#" + typeColor)
  .addField("Input", "● " + args.join(" "))
  .addField("Answer", results[chosenResult])

  return message.channel.send(botembed)
  .catch(error => log.run(3, "messageCleanup", error));
}
