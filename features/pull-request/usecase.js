const { createPullRequestThread } = require("./functions")

const { getArgs, validateParams } = require('../utils/params')
const { getMemberListIdByRole } = require('../utils/roles')
const { getRandomMembers } = require('../utils/members')

const pullRequest = async function pullRequest(client, msg, members) {

    try {

        console.log(`\n\n-------------------------------------\n`)
        const params = validateParams(msg)
        const args = getArgs(msg, params)

        const membersWithRole = getMemberListIdByRole(msg, args.role, members)
        const randomUsers = getRandomMembers(membersWithRole, 2)

        await createPullRequestThread(msg, args, client, randomUsers)
        console.log(`\n-------------------------------------\n\n`)

    } catch (e) {
        console.log(e)
    }
}

module.exports = { createPullRequestThread, pullRequest }