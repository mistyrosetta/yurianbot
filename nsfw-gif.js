const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pgif'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Bu kanal bir NSFW kanalı değil!")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nsfw","nsfwgif","porn","porno"],
  permLevel: 0
};

exports.help = {
  name: 'nsfw-gif',
  description: 'NSFW Yani +18 Gif Atar. Bu Komutu Kullanabilmen İçin Geçerli Kanalın NSFW Kanal Olarak Ayarlanması Gerekir.',
  usage: 'nsfw'
};