const Discord = require('discord.js')
const db = require('quick.db');

exports.run = (client, message, args) => {
  
if(db.fetch(`bakim`)) return message.channel.send('Şuanda Bakım Modu Açıktır.')

  const Mesaj = new Discord.RichEmbed()
    .setColor('#000000')
    .setDescription(`${args[0]} sayısının karekökü: ${Math.sqrt(args[0])}`)
  
  message.channel.send(Mesaj)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['karekök'],
  permLevel: 0
}

exports.help = {
  name: 'Karekök',
  category: 'diğer komutlar',
  description: 'Girdiğiniz Sayının Karekökünü Alır.',
  usage: 'karekök <sayı>',
}