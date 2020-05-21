const Discord = require('discord.js');
const db = require("quick.db");
exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
  if (!mesaj) return message.channel.send('Bir not yazmalısın ki bende onu kaydedeyim!')
  db.set(`nots_${message.author.id}`, mesaj)
  const embed = new Discord.RichEmbed()
  .setDescription('Notun **'+ mesaj +'** olarak ayarlandı!')
   .setColor(0x36393E)
  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["notal","not-al"],
  permLevel: 0
};
exports.help = {
  name: 'notal',
  description: 'Not Alır.',
  usage: 'notal <notta yazacak yazı>'
};