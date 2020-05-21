const Discord = require('discord.js'); 
exports.run = async (client, message, args) => {
let kişi = message.mentions.members.first() || message.author;
message.channel.send(`**${kişi}** adlı kişinin ID numarası: **${kişi.id}**`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Id", "ıd", "ID","id"],
  permLevel: 0
};

exports.help = {
  name: "id",
  description: "Belirtilen Kişinin ID'sini Verir.",
  usage: "id"
};