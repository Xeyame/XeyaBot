const log = require("../functions/log");
const updateBotStatus = require("../functions/updateBotStatus");
const snekfetch = require('snekfetch');

exports.run = (client) => {
  log.run(0, "readyEvent", "Username " + client.user.username);
  updateBotStatus.run(client);
  snekfetch.post(`https://discordbots.org/api/bots/stats`)
    .set('Authorization', process.env.xeyabot_dbotstoken)
    .send({ server_count: client.guilds.size })
    .then(() => console.log('Updated discordbots.org stats.'))
    .catch(err => console.error(`Whoops something went wrong: ${err.body}`));

  setInterval(() => {
  snekfetch.post(`https://discordbots.org/api/bots/stats`)
    .set('Authorization', process.env.xeyabot_dbotstoken)
    .send({ server_count: client.guilds.size })
    .then(() => console.log('Updated discordbots.org stats.'))
    .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
}, 1800000)
}
