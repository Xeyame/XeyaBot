//load config
const config = require("../data/config.json");

module.exports.run = async (type, source, info) => {
  if (config.verboseLevel >= type) {
    const typeMapping = {
    0: "[IMPORTANT]",
    1: "[ERROR]",
    2: "[INFO]",
    3: "[DEBUG]"
    };
    var currentDate = new Date();
    var logDate = "[" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + "]";

    console.log(logDate + " " + typeMapping[type] + " " + source + " " + info);
  }
}

//USAGE
//const log = require("./functions/log");
//log.run(type, source, info);
