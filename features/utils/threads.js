const { error, success } = require("./messages");

const createThread = async function (threadCreate, msg, client) {
    const thread = await msg.channel.threads.create(threadCreate);
    console.log(`Created thread: ${thread.name}`)
    return client.channels.cache.find(channel => channel.id === thread.id)
}

const deleteThread = async function (threadName, msg, client) {
    const thread = client.channels.cache.find(c => c.name == threadName);
    if (thread && thread.ownerId == '997569975172726834') {
        await thread.delete();
        success(msg, `Thread - ${threadName} \ndeleted successfully✅`, 'EMPTY')
    } else {
        error(msg, 'ERROR: Thread not found or not allowed', 'EMPTY')
    }
}



module.exports = { createThread, deleteThread }