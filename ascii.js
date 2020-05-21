const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args) => {
    var figlet = require('figlet');
    figlet(args.join(' '), function (err, data) {
      if (err) {
        console.log('Bir şeyler yanlış gitti...');
        console.dir(err);
        return;
      }
      message.delete()
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('ASCII;')
      .setDescription('```fix\n' + data + '\n```')
      .setFooter('Yurian Bot', client.user.avatarURL)
      .setTimestamp()
      message.channel.send(embed);
        });
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['asciiyaz','ascii'],
  permLevel: 0
};

exports.help = {
  name: 'ascii',
  description: 'İstediğiniz şeyi bota şekilli şukullu yazdırır.',
  usage: 'y!ascii [yazdırmak istediğiniz şey]'
};