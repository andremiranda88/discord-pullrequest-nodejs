const express = require("express")

const server = express()
const { createPullRequest } = require('./features/pull-request/usecase-webhook');

server.use(express.json())

let client = null;

server.all("/", (req, res) => {
  res.send({ message: 'online' })
})

server.post("/bitbucket-webhook", (req, res) => {
  console.log('----------------------')
  const data = req.body
  const actor = data.actor.display_name
  const repository = data.repository.full_name
  const link = `https://bitbucket.org/${repository}/pull-requests/${data.pullrequest.id}/`

  console.log(`ACTOR[${actor}] REPO[${repository}] LINK[${link}`)

  // if (data.pullrequest.state == "CREATED") {
  //   createPullRequest(client, data)
  // }

  res.json({ requestBody: `ACTOR[${actor}] REPO[${repository}] LINK[${link}` })
})

function keepAlive(paramClient) {
  client = paramClient
  server.listen(3000, () => {
    console.log("Server is ready!")
  })
}

module.exports = { keepAlive }