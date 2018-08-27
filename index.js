//load discord.js
const Discord = require("discord.js");
const client = new Discord.Client();
//load functions
const log = require("./functions/log");
const fs = require("fs");
//load config
const config = require("./data/config.json");


// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, async (...args) => eventFunction.run(client, ...args));
  });
});

client.on("error", console.error);

client.on("message", message => {
  //log.run(3, "messageReceivedEvent", message.author.id + " IN " + message.guild.id + " CHANNEL " + message.channel.id + " TEXT " + message.content)
  //.catch(error => console.log(error));

  if (message.author.bot) return; //ignore other bots
  if(message.content.toLowerCase().indexOf(config.prefix) !== 0) return; //ignore messages that dont start with the prefix

  log.run(3, "command", "[" + message.guild.id + "]" + message.channel + message.author + " " + message.content)
  .catch(error => console.log(error));

  //split command and args
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //check if file for command exists
  if (fs.existsSync(`./commands/${command}.js`)) {
    try { //try running command
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
      //message.delete(config.deleteAfter).catch(error => log.run(3, "issuingCommandDelete", error)); //also delete issuing command
    } catch (err) { //catch error if command somehow fails
      console.error(err);
    }
  }
});


client.login(process.env.xeyabot_token); //login with environment var
//edit the ~/.bash_proflle file and add line "export xetabot_token=YOURTOKEN" for a permanent change,
// or execute "export xetabot_token=YOURTOKEN" for a temporairy change.
// Also dont forget to export the discordbots.org token (events/ready.js process.env.xeyabot_dbotstoken) 


//shutdown handler
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('close', (input) => {
  log.run(2, "ShutdownHandler", "Shutting down...");
  client.destroy(); //proper logout instead of letting discord timeout.
  log.run(0, "ShutdownHandler", "Goodbye");
});
