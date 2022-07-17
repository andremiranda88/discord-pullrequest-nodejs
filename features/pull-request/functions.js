const { MessageEmbed } = require("discord.js")
const { createThread } = require("../utils/threads")

const createPullRequestThread = async function (msg, args, client, randomUsers) {
    const threadCreate = {
        name: `${args.type}: ${args.description}`,
        reason: `${args.type}`,
    }


    pullRequestEmbed(
        msg,
        await createThread(threadCreate, msg, client),
        args,
        randomUsers
    )
}

const pullRequestEmbed = function (msg, channel, args, users) {
    const embed = new MessageEmbed()
        .setTitle(`${args.type}`)
        .setURL(args.url)
        .setColor('#B700FF')
        .addField("URL", `${args.url}`)
        .addField("Author", `<@${msg.author.id}>`)
        .setDescription(args.description)
    channel.send({ embeds: [embed] })
    channel.send(users.map(u => `<@${u}>`).join(" "))

    console.log(`Finished Creating thread: ${channel.name}`)
}

module.exports = { createPullRequestThread }