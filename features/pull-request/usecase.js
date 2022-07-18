const { createPullRequestThread } = require("./functions")

const { getArgs, validateParams } = require('../utils/params')
const { getMemberListIdByRole } = require('../utils/roles')
const { getRandomMembers } = require('../utils/members')
const { deleteThread } = require("../utils/threads")

const pullRequest = async function (client, msg, members) {

    try {

        console.log(`\n\n-------------------------------------\n`)
        const params = validateParams(msg)
        const args = getArgs(msg, params)
        const author = msg.author.id
        const membersWithRole = getMemberListIdByRole(msg, args.role, members)
        const randomUsers = getRandomMembers(membersWithRole, author, 2)

        await createPullRequestThread(msg, args, client, randomUsers)
        console.log(`\n-------------------------------------\n\n`)

    } catch (e) {
        console.log(e)
    }
}

const deletePullRequest = async function (client, msg) {

    try {

        console.log(`\n\n-------------------------------------\n`)
        const param = msg.content.replace(".pull-request --delete ", "")
        console.log(`Delete thread with Name[${param}]`);
        await deleteThread(param, msg, client);
        console.log(`Delete thread successfully with Name[${param}]`);
        console.log(`\n-------------------------------------\n\n`)

    } catch (e) {
        console.log(e)
    }
}

module.exports = { pullRequest, deletePullRequest }