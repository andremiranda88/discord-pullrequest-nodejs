const createThread = async function (threadCreate, msg, client) {
    const thread = await msg.channel.threads.create(threadCreate);
    console.log(`Created thread: ${thread.name}`)
    return client.channels.cache.find(channel => channel.id === thread.id)
}



module.exports = { createThread }