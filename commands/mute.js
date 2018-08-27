const config = require("../data/config.json");
const log = require("../functions/log");
const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You need to have the `MANAGE_MESSAGES` permission for doing this.");
      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if (!tomute) return message.reply("Usage: `" + config.prefix + "mute <username> <1s|5m|2h>`");
      if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("You are trying to mute someone with the same, or higher role.");
      let muterole = message.guild.roles.find(`name`, "Muted");

      if (!muterole) {
          try {
              muterole = await message.guild.createRole({
                  name: "Muted",
                  color: "#000000",
                  permissions: []
              })
              message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(muterole, {
                      SEND_MESSAGES: false,
                      ADD_REACTIONS: false
                  });
              });
          } catch (e) {
              log.run(1, "muteCommand", e.stack);
          }
      }

      let mutetime = args[1];
      if (!mutetime) return message.reply("Usage: `" + config.prefix + "mute <username> <1s|5m|2h>`");

      await (tomute.addRole(muterole.id));
      message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

      setTimeout(function() {
          tomute.removeRole(muterole.id);
          message.channel.send(`<@${tomute.id}> has been unmuted!`);
      }, ms(mutetime));
}
