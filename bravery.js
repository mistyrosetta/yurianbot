const Discord = require("discord.js");
var Jimp = require('jimp');
exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
  
  	if (args[0] === '1') {
        var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=bravery&url=https://api.eggsybot.xyz/pub/resources/frames/bravery.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance1/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance1/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
  	if (args[0] === '2') {
        var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=bravery2&url=https://api.eggsybot.xyz/pub/resources/frames/bravery2.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance2/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance2/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
  	if (args[0] === '3') {
        var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=bravery3&url=https://api.eggsybot.xyz/pub/resources/frames/bravery3.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance3/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance3/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '4') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=bravery4&url=https://api.eggsybot.xyz/pub/resources/frames/bravery.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance4/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance4/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '5') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=bravery5&url=https://api.eggsybot.xyz/pub/resources/frames/bravery5.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance5/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance5/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '6') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=bravery6&url=https://api.eggsybot.xyz/pub/resources/frames/bravery6.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance6/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance6/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '7') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=bravery7&url=https://api.eggsybot.xyz/pub/resources/frames/bravery7.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance7/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance7/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    	if (args[0] === '8') {
          var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
    message.channel.send(`:timer: | Fotoğraf işleniyor, lütfen bekleyin.`).then(m => m.delete(1000));
Jimp.read(user.avatarURL, (err, image) => {
    image.resize(315, 310)
    Jimp.read("https://api.eggsybot.xyz/api/cerceve?cerceve=bravery8&url=https://api.eggsybot.xyz/pub/resources/frames/bravery8.png", (err, avatar) => {
        avatar.resize(315, 320)
        image.composite(avatar, 0, 0).write(`./secim/balance8/${client.user.id}-${user.id}.png`);
        setTimeout(function() {
            message.channel.send(new Discord.Attachment(`./secim/balance8/${client.user.id}-${user.id}.png`));
        }, 1000);
    });
});  
}
    if (!args[0]) return message.channel.send('**Bu Komutta Toplam 8 Tane Çerçeve Var** `(Lütfen 1den 8e Kadar Bir Sayı Seç)`');
    if (args[0] < 1) return message.channel.send('**Bu Komutta Toplam 8 Tane Çerçeve Var** `(Lütfen 1den 8e Kadar Bir Sayı Seç)`');
    if (args[0] > 8) return message.channel.send('**Bu Komutta Toplam 8 Tane Çerçeve Var** `(Lütfen 1den 8e Kadar Bir Sayı Seç)`');
    if (isNaN(args[0])) return message.channel.send('**Bu Komutta Toplam 8 Tane Çerçeve Var** `(Lütfen 1den 8e Kadar Bir Sayı Seç)`');
  
  
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bravery"],
    permLevel: 0,
    kategori: "eğlence"
  };
  
  exports.help = {
    komut: 'bravery',
    description: 'Avatariniza Bravery Efekti Ekler.',
    usage: 'bravery <rakam>'
  };