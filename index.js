const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
require("dotenv").config();
const cmdDir = fs.readdirSync("./commands/");


const client = new Discord.Client({
  disableEveryone: true
});
client.config = config;
client.commands = new Discord.Collection();
client.groups = [];
client.commands = new Discord.Collection();
for (let dir of cmdDir) {
  client.groups.push(dir);
  console.log("[Ladybug] Loading command category " + dir + ".");
  let group = fs.readdirSync(`./commands/${dir}`);
  for (let commandFile of group) {
    console.log("[Ladybug] Loading command " + dir + "/" + commandFile.split(".")[0] + ".")
//fs.readdir("./commands/${dir}/${commandFile}", (err, files) => {
    if (!commandFile.endsWith(".js")) {
      return console.log("No Command!")
    }
    let cmd = require(`./commands/${dir}/${commandFile}`)

    client.commands.set(commandFile.split(".")[0], [cmd])

    /* if (err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");

    if (jsfiles.length <= 0) return console.log("There are no commands to load...");

    console.log(`Loading ${jsfiles.length} commands...`);
    jsfiles.forEach((f, i) => {
      let props = require(`./commands/${f}`);
      console.log(`${i + 1}: ${f} loaded!`);
      client.commands.set(props.help.name, props);
    });
  })}}; */
  }
};
client.on("guildCreate", (guild) =>{

  if(guild.members.find(memberid => memberid.id === "675042385855774727")) {
    return
  } else {
    guild.leave()
  }

})

fs.readdir("./events", (err, files) => {
  if (err) {
    return console.error(err);
  }
  files.forEach((file) => {
    if (!file.endsWith(".js")) {
      return;
    }
    console.log("[Ladybug] Loading event " + file.split(".")[0] + ".");
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


client.login(process.env.DISCORD_TOKEN);