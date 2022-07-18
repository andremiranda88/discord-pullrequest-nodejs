const config = require('./../../config.json')

const getRandomMembers = function (members, author, n) {
    return members
        .filter(m => m !== author)
        .sort(() => .5 - Math.random()).slice(0, n)
}

module.exports = { getRandomMembers } 