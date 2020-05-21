const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

if(db.fetch(`bakim`)) return message.channel.send('Şuanda Bakım Modu Açıktır.')


  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const linqo = `https://dummyimage.com/2000x500/33363c/ffffff&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.RichEmbed()
  .setTitle("Banner!")
  .setColor("#2ECC71")
  .setImage(linqo)
  .setFooter('Banner Oluşturuldu!')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'banner',
    description: 'Yazdığınız yazıyı bannera çevirir.',
    usage: 'banner <yazı>'
}