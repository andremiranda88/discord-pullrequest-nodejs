const Discord = require("discord.js")
const config = require('../config.json');


const { pullRequest } = require('./pull-request/usecase')

const client = new Discord.Client({ intents: config.intents })

client.login(config.token)

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", async msg => {
  const allMembers = await msg.guild.members.fetch()

  getMessage(msg)

  function getMessage(msg) {
    if (msg.content.startsWith(".pull-request")) {
      pullRequest(client, msg, allMembers)
    }
  }
})
