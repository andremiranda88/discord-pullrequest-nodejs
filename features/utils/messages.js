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

const success = function (msg, title, type) {
    const exampleEmbed = new MessageEmbed()
        .setColor('#00C96B')
        .setTitle(title)
        .addFields(types[type]);

    msg.channel.send({ embeds: [exampleEmbed] })
}

module.exports = { error, success }