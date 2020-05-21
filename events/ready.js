const Moment = require('moment')
const Discord = require('discord.js')
let prefix = 'y!'
module.exports = client => {
  
  const aktiviteListesi = [
    `${prefix}yardım | ${client.guilds.size} sunucudan ${client.users.size} kullanıcıya hizmet veriyoruz!`,
    'Bot Sürümü: v1.0.0'

  ]

  client.user.setStatus('online')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 7000)
}