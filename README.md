# Discord bot - Pull Request
## pacman

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)


This bot is made to in node.js to request a pull request by a command

## Features

Commands available:

```
.pull-request <url> <type(jira-id)> <description-with-brackets> <role> 
```
Example
```
.pull-request https://google.com feature(JIRA-123) this-is-a-pull-request @Members
```

## Tech

- [discord.js] - Discord.js library to create bots
- [nodeJS] - evented I/O for the backend
- [npm] - to control dependencies


## Installation

requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm start
```


## Plugins

| Plugin     | README                                         |
| ---------- | ---------------------------------------------- |
| Discord.js | https://github.com/discordjs/discord.js#readme |
