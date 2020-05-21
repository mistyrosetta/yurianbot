const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: y!botekle <BOTUN IDSİ> <BOTUN PREFİXİ>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('istek-bot Bildirildi!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının eklenmesi istediği bot:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("bot-eklet", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('KANAL ID').send(embed2);
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['botekle','bot-ekle'],
  permLevel: 0 
};
exports.help = {
  name: 'bot-ekle',
  description: 'Botunuzun ID ve Prefixini Girerek Bu Sunucuya Ekleyebilirsiniz.',
  usage: 'y!bot-ekle <BOT ID> <PREFİX>'
};