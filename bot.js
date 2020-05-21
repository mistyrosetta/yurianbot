const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const db = require('quick.db')
const moment = require('moment');
require('./util/eventLoader')(client);
//7/24 başlangıç
const express = require('express');
const app = express();
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Yurian Bot | Hostlandı ");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
//7/24 bitiş
var prefix = ayarlar.prefix;



const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
/////////////////////////////////////////////////KOMUTLAR/////////////////////////////////////////////////
//snipe başlangıç
client.on('messageDelete', message => {
  db.set(`snipe.mesaj.${message.guild.id}`, message.content)
  db.set(`snipe.id.${message.guild.id}`, message.author.id)
})
//snipe bitiş

// özel mesaj başlangıç
client.on('guildMemberAdd', member => {
  member.sendMessage("**Sunucusuna Hoşgeldin**")

});
// özel mesaj bitiş

//bot eklendi atıldı mesaj başlangıç
client.on("guildCreate", guild => {
  let log = client.channels.get("644212463218458662");
  const embed = new Discord.RichEmbed()
    .setAuthor("Yeni bir sunucuya eklendim!")
    .setThumbnail(
      guild.iconURL ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9J1LKrqyj9OhkVIqldc8cIjHbL7YpCaCx03L04NwadHxZgn8l"
    )
    .setColor(client.renkler.yeşil)
    .addField("Sunucu İsmi:", `**${guild.name}**`)
    .addField("Sunucu ID:", `\`\`\`${guild.id}\`\`\``)
    .addField(
      "Sunucu Bilgisi:",
      `**Sunucu Sahibi: \`${guild.owner}\`\nSunucu Bölgesi: \`${guild.region}\`\nÜye Sayısı: \`${guild.members.size}\`\nKanal Sayısı: \`${guild.channels.size}\`**`
    )
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL);
  log.send(embed);
});
client.on("guildDelete", guild => {
  let log = client.channels.get("644212463218458662");
  const embed = new Discord.RichEmbed()
    .setAuthor("Bir sunucudan atıldım :(")
    .setThumbnail(
      guild.iconURL ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9J1LKrqyj9OhkVIqldc8cIjHbL7YpCaCx03L04NwadHxZgn8l"
    )
    .setColor(client.renkler.pembe)
    .addField("Sunucu İsmi:", `**${guild.name}**`)
    .addField("Sunucu ID:", `\`\`\`${guild.id}\`\`\``)
    .addField(
      "Sunucu Bilgisi:",
      `**Sunucu Sahibi: \`${guild.owner}\`\nSunucu Bölgesi: \`${guild.region}\`\nÜye Sayısı: \`${guild.members.size}\`\nKanal Sayısı: \`${guild.channels.size}\`**`
    )
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL);
  log.send(embed);
});
//bot eklendi atıldı mesaj bitiş
//sayaç başlangıç
client.on("message", message => {
if (message.content === ayarlar.prefix+"say") {
  message.channel.send('Sunucuda şu anda botlarla beraber ``' + message.guild.memberCount +  '`` kişi var.');
}
});
//sayaç bitiş

//

//küfür başlangıç
client.on("message", async  msg => {
 var i = await db.fetch(`küfür_${msg.guild.id}`)
    if (i == 'acik') {
       const küfür = ["sg","oç","oçe","anan","ananı","ananı sikim","anneni sikim","anneni sikeyim","ananı sikeyim","annen","ağzına","ağzına sıçim","ağzına sıçayım","ambiti","amını","amcık","amcik","amcığını","amciğini","amckskm","amcuk","amına","amınakoyim","amın oğlu","sikiyim","ebeni sikiyim","amınoğlu","amk","awsu","aq","amskm","anaskm","ananskm","amkafa","amk çocuğu","amk oç","piç","amq","amnskm","amk dölü","döl","orospu","kahpe","kahbe","kahße","ananı avradını","babanın amk","annenin amk","ananın amk","babası pezevenk","pezevenk","pezeveng","a.q","a.q.","yarrak","yarram","sikimi ye","am","gavat","gavad","fuck","gotten","götten","gtveren","gttn","gtnde","hassiktir","hasiktir","hsktr","ibne","ibine","ipne","kaltak","kancık","kevaşe","kevase","kodumun","orosbu","fucker","sikiş","sakso","sik","skcm","siktir","sktr","skecem","skeym","sokam","sokuş","sokarım","sokarm","sokaym","şerefsiz","şrfsz","taşak","taşşak","tasak","daşak","daşşak","yarramın başı","yarramınbaşı","yarraminbasi","zikeyim","zikik","zkym"]
         if (küfür.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('Bu Sunucuda Küfür Edemezsin!').then(msg => msg.delete(3000));
    

  msg.delete(3000);                              

            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (i == 'kapali') {
      
    }
    if (!i) return;
  })
  ;
//küfür bitiş
//link engel başlangıç
client.on("message", async  msg => {
 var mayfe = await db.fetch(`reklam_${msg.guild.id}`)
    if (mayfe == 'acik') {
        const birisireklammidedi = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (birisireklammidedi.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('Bu Sunucuda Reklam Engelleme Filtresi Aktiftir. Reklam Yapmana İzin Veremem !').then(msg => msg.delete(3000));
    

  msg.delete(3000);                              

            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    else if (mayfe == 'kapali') {
      
    }
    if (!mayfe) return;
  })
  ;

//link engel bitiş

//kayıt başlangıç
client.on('guildMemberAdd', (member) => {
    const db = require('quick.db'); 

         const channelss = db.fetch(`kkanal_${member.guild.id}`).replace("<#", "").replace(">", "")

       const kayıts = db.fetch(`ksistem_${member.guild.id}`)
             if (kayıts == undefined) {
             }
            if (kayıts == 'acik') {
             
                          member.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(member, {
                    VIEW_CHANNEL: false
                });
            });
                          
                 member.guild.channels.get(channelss).overwritePermissions(member, {
                    SEND_MESSAGES: true,
                    VIEW_CHANNEL: true
                });
            
            }

        
  });
//kayıt bitiş

//botun dm görme başlangıç
client.on("message", message => {
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        const dmlog = new Discord.RichEmbed()
         .setTitle(`${client.user.username}'a Özelden Mesaj Gönderildi!`)
         .setColor('RANDOM')
         .addField('Mesajı Gönderen',` \`\`\` ${message.author.tag} \`\`\` `)
         .addField('Mesajı Gönderenin ID', ` \`\`\`${message.author.id}\`\`\` `)
         .addField(`Gönderilen Mesaj`, message.content)
         .setThumbnail(message.author.avatarURL) 
    client.channels.get("KANAL ID").send(dmlog);
    }
});
//botun dm görme bitiş


//gold üye başlangıç
client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 600000
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = db.fetch(`gold_${msg.author.id}`)
          if (i == 'gold') {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
   msg.channel.send('**Bir Gold Üye Belirdi!!**')
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});
//gold üye bitiş

//seviye sistemi başlangıç
client.on("message", async msg => {
  const db = require('quick.db');
  
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 1) {
    
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 2)//mesaj yazınca xp veriyor
    db.add(`xpsira_${msg.author.id + msg.guild.id}`, 2)//doğru bir sıralama sistemi için var

};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 150) {//150 xp de 1 seviye veriyor
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)//seviye verildi
    

    
    db.delete(`puancik_${msg.author.id + msg.guild.id}`)//xp silindi
    
  };
 
  if (db.has(`roll_${msg.guild.id}`) === true) {//rol 
  if (db.has(`rollss_${msg.guild.id}`) === true) {//rol seviye
    
 var r = db.fetch(`roll_${msg.guild.id}`)//rolü bul
 var s = db.fetch(`rollss_${msg.guild.id}`)//seviyeyi bul
  
  if (db.fetch(`seviye_${msg.author.id + msg.guild.id}`) == s) {
    if (msg.member.roles.has(msg.guild.roles.get(r).id) === false) {
    msg.channel.send(`**<@${msg.author.id}> başarıyla ${db.fetch(`seviye_${msg.author.id + msg.guild.id}`) - 1 || 0} seviyeyi geçtin!**`)
    msg.member.addRole(msg.guild.roles.get(r).id)
    }
  };

}};
  
});
//seviye sistemi bitiş

//oto bot mesaj silici başlangıç
client.on("message", async msg => {
const db = require('quick.db');   
    let i = db.fetch(`otobsilicia_${msg.channel.id+msg.guild.id}`)
      if (i == undefined) {           
          }
        if (i == 'acik') {   
              let kanal = db.fetch(`otobsilici_${msg.channel.id+msg.guild.id}`)

          if (msg.channel.id != kanal.id) {
  if (msg.content.length > 0) {

    if(msg.author.bot === true){
      msg.delete(3000)
    }
  }
          }
        }
       
  
  })
//oto bot mesaj silici bitiş

//afk başlangıç
client.on("message", message => {

//var i = db.fetch(`prefix_${message.guild.id}`)

  
    let afk_kullanici = message.mentions.users.first() || message.author;
    if(message.content.startsWith(ayarlar.prefix+"afk")) return; 
 if (message.author.bot === true) return;
   

     if(message.content.includes(`<@${afk_kullanici.id}>`))
         if(db.has(`afks_${afk_kullanici.id}`)) {
             const afksuan = new Discord.RichEmbed()
                     .setColor("RANDOM")
                     .setDescription(`**${client.users.get(afk_kullanici.id).tag}** adlı kullanıcı şuanda AFK! \n**Sebep:** \n${db.fetch(`afks_${afk_kullanici.id}`)}`)
                     message.channel.send(afksuan)
         }
   
         if(db.has(`afks_${message.author.id}`)) {
                        let user = message.member

             const basarili = new Discord.RichEmbed()

                 .setColor("GREEN")
                 .setDescription("<@"+`${message.author.id}`+">"+"**Başarıyla AFK modundan çıktın <:tik:561940914247827470>**")
                              user.setNickname(message.author.username)

                message.channel.send(basarili)
             db.delete(`afks_${message.author.id}`)
         } 

       });
//afk bitiş

//yavaş mod başlangıç
client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let zaman= db.fetch(`${msg.guild.id}.slowmode`) 
if (zaman === undefined) zaman = 0;
let timeout = zaman
let dakdest = await db.fetch(`slowmodee_${msg.author.id}`);

    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
      msg.delete()
      msg.channel.send('**Bu kanalda yavaş mod açık, mesaj atmadan önce beklemen gerek!**').then(message => message.delete(2500));

    } else {
          if (!msg.member.hasPermission("MANAGE_MESSAGES")) {

  if (msg.content.length > 0) {
    db.set(`slowmodee_${msg.author.id}`,Date.now())
  }
    }
};       
});
//yavaş mod bitiş


   
/////////////////////////////////////////////////KOMUTLAR/////////////////////////////////////////////////

/////////////////////////////////////////////////DOKUNMA/////////////////////////////////////////////////
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Komut yüklendi: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
/////////////////////////////////////////////////DOKUNMA/////////////////////////////////////////////////////////////
client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('Aleyküm selam, hoş geldin ^^');      
      } 
      }
    }); 
/////////////////////////////////////////////////DOKUNMA/////////////////////////////////////////////////////////////
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
/////////////////////////////////////////////////DOKUNMA/////////////////////////////////////////////////////////////