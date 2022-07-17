const { error } = require("./errors");
const { isValidUrl } = require("./helpers");

const getArgs = function (msg, params) {
    const url = params[1]
    const type = params[2]
    const partialRole = params[4].split("&")
    const role = partialRole.length > 1 ? partialRole[1].replace(">", "").toString() : '';
    const description = params[3]

    console.log(`${type} | ROLE ID[${role}] URL[${url}] DESCRIPTION[${description}]`)

    if (!isValidUrl(url)) {
        error(msg, 'ERROR: Invalid URL', 'EMPTY')
    }

    return {
        url,
        type,
        role,
        description
    }
}

const validateParams = function (msg) {
    const params = msg.content.split(" ")

    if (params.length != 5) {
        error(msg, 'ERROR: Invalid Arguments', 'INVALID_ARGUMENTS')
    }

    return params
}

module.exports = { getArgs, validateParams }