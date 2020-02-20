const Discord = require("discord.js")
module.exports.run = async (prefix, cmd, client, args, message, config) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Data Mod - Hilfe")
    .setDescription("Data Mod ist ein Moderator Bot mit einem Auto Mod system. Das heißt er löscht schimpwörtern und Invites. **Leute mit der Permission ADMINISTRATOR sind dagegen emun!**")
    .addField("m!help", "Lass dir diese liste anzeigen!")
    .addField("m!ban", "Banne einen Spieler von deinem Discord!")
    .addField("m!kick", "Kicke einen Spieler von deinem Discord!")

    return message.channel.send(embed)
}