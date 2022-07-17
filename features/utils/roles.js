
const { error } = require('./errors')

const getMemberListIdByRole = function (msg, role, allMembers) {
    let roleMembers = allMembers
        .filter(m => m._roles.find(r => r === role))
        .map(m => m.user.id)

    console.log(`TOTAL USERS FOUND: ${roleMembers.length}`)
    if (roleMembers.length == 0) {
        error(msg, 'No User With Mentioned Role Found', "EMPTY")
    }
    if (roleMembers.length == 1) {
        error(msg, 'You need at least a role with 2 members, only 1 found instead', "EMPTY")
    }
    return roleMembers
}


module.exports = { getMemberListIdByRole }