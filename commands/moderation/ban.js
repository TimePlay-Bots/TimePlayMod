const discord = require("discord.js");
module.exports.run = async (prefix, cmd, client, args, message, config) => {
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');

    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Du hast keine rechte dazu!");

    if (!target) return message.reply("Bitte ping einen spielen");
    if (!reason) return message.reply("Bitt gib ein Grund an");
        let embed = new discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle("BAN")
            .setThumbnail(target.user.avatarURL)
            .addField("Nutzer", `${target.user.username} (${target.id})`)
            .addField("Grund", reason)
            .addField("Moderator", `${message.author.username}`)

             message.channel.send(embed)

            target.ban(reason);
};