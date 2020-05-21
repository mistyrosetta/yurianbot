const Discord = require('discord.js');
const ms = require('parse-ms');
const db = require('quick.db')
const superagent = require('superagent');

exports.run = async(client, message, args) => {
  
  
    if(!args[0]) return message.channel.send(new Discord.RichEmbed().setAuthor('Uyarı').setDescription(`:x: Bir şehir girmelisin.`).setColor('RANDOM'))
    let {body} = await superagent 
    .get(`https://tekno-mert-api.glitch.me/${args[0]}`);
    if(!{body}) return message.channel.send(`Görünüşe göre bir sorun var, lütfen daha sonra tekrar dene.`)
    if(body.hata) return message.channel.send(`Olamaz! Bir sorun oluştu. Geçerli bir şehir girmelisin.`)

let okul = new Date(`${body.tarihsahur}`)
let zaman = ms(okul - Date.now())


 message.channel.send(new Discord.RichEmbed().setImage(`${body.resim}`).setAuthor(`${body.sahur}`).setDescription(`${body.konums} **${zaman.days}** gün **${zaman.hours}** saat **${zaman.minutes}** dakika **${zaman.seconds}** saniye kaldı!`).setFooter(`API Sahibi: ${body.yapımcı}.`, message.author.avatarURL).setColor('RANDOM'))  


};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['imsakiye2', 'sh'],
    permLevel: 0
};

exports.help = {
    name: 'sahur',
    description: 'imsakiye',
    usage: 'imsakiye'
}; 