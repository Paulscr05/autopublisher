const DiscordJS = require('discord.js')
const config = require('./config.json')
const token = "dein-token-hier"


const client = new DiscordJS.Client()

client.on('ready', () => {
  console.log('Bot Online')
  client.user.setActivity(`Hi, I am an Autopublisher | ${client.guilds.cache.size} Servers`, { type: "PLAYING" })
})

client.on('message', (message) => {
  const { channel } = message

  if (channel.type === 'news') {

    message.crosspost()
    console.log('hat funktioniert')

  }
})

client.login(token)