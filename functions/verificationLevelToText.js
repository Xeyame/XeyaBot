module.exports.run = (level, message) => {
  if (message.guild.verificationLevel === 0) {
    var guildVerificationLevel = "None";
  } else if (message.guild.verificationLevel === 1) {
    var guildVerificationLevel = "Low";
  } else if (message.guild.verificationLevel === 2) {
    var guildVerificationLevel = "Medium";
  } else if (message.guild.verificationLevel === 3) {
    var guildVerificationLevel = "High ``(╯°□°）╯︵ ┻━┻``";
  } else {
    var guildVerificationLevel = "Very high ``┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻``";
  }
  return guildVerificationLevel;
}

//USAGE
//const verificationLevelToText = require("./functions/guildVerificationLevelToText");
//guildVerificationLevelToText.run(level, message);
