const { createPullRequestThread } = require("./functions")

const { getWebHookArgs } = require('../utils/params')
const { getMemberListIdByRole } = require('../utils/roles')
const { getRandomMembers, removeAuthor } = require('../utils/members')
const { deleteThread } = require("../utils/threads")
const { rotateStackWithDb } = require("../utils/dbRotation")

const createPullRequest = async function(client, data) {

  try {

    const guild = client.guilds.cache.get("Server_ID");
    const members = await guild.members.fetch();
    
    console.log(`\n\n-------------------------------------\n`)
    const args = getWebHookArgs(data)
    const author = args.actor
    const membersWithRole = getMemberListIdByRole(msg, args.config.role, members)
    const membersWithoutAuthor = removeAuthor(membersWithRole, author)
    const randomUsers = getRandomMembers(membersWithoutAuthor, 2)
    const rotate = await rotateStackWithDb(args.config.role, membersWithoutAuthor, randomUsers)


    await createPullRequestThread(msg, args, client, rotate)
    console.log(`\n-------------------------------------\n\n`)

  } catch (e) {
    console.log(e)
  }
}

const deletePullRequest = async function(client, msg) {

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

module.exports = { createPullRequest, deletePullRequest }