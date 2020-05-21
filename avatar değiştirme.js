const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {

if(db.fetch(`bakim`)) return message.channel.send('Şuanda Bakım Modu Açıktır.')

    if(message.author.id !== ayarlar.sahip) 
    return message.reply('Bunu kullanmak için bot sahibi olman lazım.');
    const ayarlanan = args.join(` `);
    client.user.setAvatar(ayarlanan);
  return message.channel.send("Başarıyla profil resmimi URL'de belirtilen resimle değiştirdim.");
      
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 10
};

exports.help = {
  name: 'avatar-ayarla',
  description: 'Botun avatarını ayarlar. Sen yapamazsın :D',
  usage: 'avatar-ayarla <URL>'
};