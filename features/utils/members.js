const config = require('./../../config.json')

const getRandomMembers = function (members, author, n) {
    return members
        .sort(() => .5 - Math.random()).slice(0, n)
}

const removeAuthor = function (members, author) {
    return members
        .filter(m => m !== author)
}

module.exports = { getRandomMembers, removeAuthor } 