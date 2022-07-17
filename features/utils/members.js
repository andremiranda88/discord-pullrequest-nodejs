const config = require('./../../config.json')

const getRandomMembers = function (members, n) {
    const sliced = members.sort(() => .5 - Math.random()).slice(0, n - 1)
    sliced.push(config.tetz)

    return sliced
}

module.exports = { getRandomMembers } 