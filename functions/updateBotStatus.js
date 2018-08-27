const log = require("../functions/log");

function doUpdate(client) {
  var users = 0;
  client.guilds.map(g => users += g.memberCount); //get accurate user count from all guilds
  client.user.setActivity(`xb!help | ${users} people in ${client.guilds.size} guilds`, { type: 'WATCHING' });
  log.run(3, "updateBotStatus", `${users}; ${client.guilds.size}`);
}

module.exports.run = async (client, message, args) => {
  setTimeout(doUpdate, 3000, client);
}

//USAGE
//const updateBotStatus = require("./functions/updateBotStatus");
//updateBotStatus.run(client, message, args);
