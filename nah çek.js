const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message, args) => {
  const resim = await get('http://sicanzi.com/images/nah.png').set('Authorization', 'qvetcg83-v7m5o7y4fv2ms01hwbk1re08oa68456r8fdqzc-6ity-dx39gcwlxas');
  if (!resim || !resim.body || !resim.body.mesaj) return console.log("Bir hata oluştu.");
  const attachment = new Discord.Attachment(resim.body.mesaj)
   message.channel.send(attachment)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "nahçek",
  description: "Nah çeker.",
  usage: "nahçek"
};