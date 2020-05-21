const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let youtube = args.slice(0).join("+");

  let link = `https://www.youtube.com/results?search_query=` + youtube;
  if (!youtube)
    return message.reply(`Lütfen aranacak kanalın linkini giriniz!`);
  if (!link) return message.reply("Console error");
  let embed = new Discord.RichEmbed()

    .setColor("RED")

    .setTimestamp()

    .addField("Aktivasyon:", "Youtube Üzerinde Arama Yapılıyor...")

    .addField("Aranan:", `${args.slice(0).join(" ")}`)

    .addField("Link:", `${link}`)

    .setFooter("Avatarın", message.author.avatarURL);

  message.channel.send(embed);
  message.author.send(
    `Aradığın link bulundu ${link} Sunucu: ${message.guild.name}`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["youtube", "kanalara", "youtube kanal ara"],
  permLevel: 0
};

exports.help = {
  name: "youtube",
  description:
    "Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..",
  usage: "youtube"
};
