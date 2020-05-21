const Discord = module.require("discord.js");
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Rastgele kullanıcı;")
    .setDescription(message.guild.members.random().displayName)
    .setThumbnail(message.author.avatarURL)
    .setFooter("Yurian Bot")
    .setTimestamp();
  message.channel.send(embed).then(msg => {
    msg.delete(10000);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [
    "randomkullanıcı",
    "random kullanıcı",
    "randomkullanici",
    "random kullanici",
    "randomuser",
    "random user"
  ],
  permLevel: 0
};

exports.help = {
  name: "rastgele-kullanıcı"
};
