const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  
if(db.fetch(`bakim`)) return message.channel.send('Şuanda Bakım Modu Açıktır.')

  const Mesaj = new Discord.RichEmbed()
    .setColor('#000000')
    .setDescription(`${args[0]} sayısının karesi: ${args[0] * args[0]}`)
  
  if (args[0]) message.channel.send(Mesaj)
  
  if (!args[0]) message.channel.send('Lütfen bir sayı giriniz.')
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kare'],
  permLevel: 5
}

exports.help = {
  name: 'Kare',
  category: 'diğer komutlar',
  description: 'Girdiğiniz Sayının Karesini Yazar.', 
  usage: 'kare <sayı>',
}