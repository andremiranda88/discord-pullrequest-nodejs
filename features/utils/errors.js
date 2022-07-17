const { MessageEmbed } = require('discord.js')
const types = require('./types.json')

const error = function (msg, title, type) {
    const exampleEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle(title)
        .addFields(types[type]);

    msg.channel.send({ embeds: [exampleEmbed] })
    throw new Error(title)
}

module.exports = { error }