const config = require('./../../config.json')

const getRandomMembers = function (members, n) {
    return members.sort(() => .5 - Math.random()).slice(0, n)
}

module.exports = { getRandomMembers } 