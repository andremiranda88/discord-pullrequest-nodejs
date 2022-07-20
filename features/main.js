const Discord = require("discord.js")
const config = require('../config.json');
const { keepAlive } = require('../server.js')


const { pullRequest, deletePullRequest } = require('./pull-request/usecase');

const client = new Discord.Client({ intents: config.intents })

keepAlive()
client.login(process.env.TOKEN)

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", async msg => {
  const allMembers = await msg.guild.members.fetch()

  getMessage(msg)

  function getMessage(msg) {

    if (msg.content.startsWith(".pull-request --delete")) {
      deletePullRequest(client, msg)
    } else if (msg.content.startsWith(".pull-request")) {
      pullRequest(client, msg, allMembers)
    }
  }
})
