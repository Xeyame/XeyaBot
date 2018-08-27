const config = require("../data/config.json");
const log = require("../functions/log");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let botembed = new Discord.RichEmbed()
  .setThumbnail(client.user.displayAvatarURL)
  .setColor("#0066ff")
  .setTitle("Command help")
  .addField("General commands", "`" + config.prefix + "avatar [@someone]` - Show someone's avatar (defaults to self)\r\n\
`" + config.prefix + "botinfo` - Get information about me\r\n\
`" + config.prefix + "help` - Show this\r\n\
`" + config.prefix + "invite` - Get invites to the help server, and a link to add me\r\n\
`" + config.prefix + "membercount` - Count members inside current server\r\n\
`" + config.prefix + "permissions [@someone]` - Show your current permissions\r\n\
`" + config.prefix + "prune <amount>` - Prune messages\r\n\
`" + config.prefix + "say <channel> <message>` - Let the bot say something\r\n\
`" + config.prefix + "servericon` - Show the server's icon\r\n\
`" + config.prefix + "serverinfo` - Get information about the server\r\n\
`" + config.prefix + "ping` - Show the bot's ping\r\n\
`" + config.prefix + "poll` - Create a poll\r\n\
`" + config.prefix + "userinfo [@name]` - Get info about someone\n\
`" + config.prefix + "announce` - Announce something to a specific role\r\n\
`" + config.prefix + "uptime` - Show the bot's uptime")
.addField("Fun commands", "`" + config.prefix + "cat` - Get some cat pics\r\n\
`" + config.prefix + "dog` - Get some dog pics or vids\r\n\
`" + config.prefix + "panda` - Random panda quote and image\r\n\
`" + config.prefix + "fox` - Random fox image\r\n\
`" + config.prefix + "trump` - Random trump quote\r\n\
`" + config.prefix + "meme` - Send you a meme\r\n\
`" + config.prefix + "dankmeme` - Send a dank meme\r\n\
`" + config.prefix + "flip` - Flip a coin\r\n\
`" + config.prefix + "reverse` - Reverse some text\r\n\
`" + config.prefix + "8ball` - Play 8ball\r\n\
`" + config.prefix + "ascii` - Get yourself some ascii art\r\n\
`" + config.prefix + "datefact` - Get a random fact about some date\r\n\
`" + config.prefix + "numberfact` - Get some random facts about a number")
  .addField("Need more help?", "[Click here to join the support server](https://discord.gg/nUZQNWq)")
  .setFooter("Requested by " + message.author.username)
  .setTimestamp();

  return message.channel.send(botembed)
    //.then(message => {message.delete(config.deleteAfter)
    .catch(error => log.run(3, "messageCleanup", error))//});
}
