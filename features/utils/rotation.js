let ROTATE_STACK = {}

const rotateStack = function (roleId, members, selectedMembers) {
    const stack = createRoleInStack(roleId, members, selectedMembers)

    if (stack.create) {
        return selectedMembers
    }

    const newMembers = selectedMembers.map(m => {
        let usedMember = m
        if (stack.getRoleStack.includes(m)) {
            usedMember = members.find(another => {
                if (stack.getRoleStack.includes(another)) return false
                if (another == usedMember) return false

                return true
            })
        }
        ROTATE_STACK[roleId].push(usedMember)
        return usedMember
    });

    return newMembers
}

const createRoleInStack = function (roleId, members, selectedMembers) {
    const stack = ROTATE_STACK[roleId]
    let create = false
    if (stack == undefined || stack.length == members.length) {
        ROTATE_STACK[roleId] = selectedMembers
        create = true
    }

    return { getRoleStack: ROTATE_STACK[roleId], create }
}

module.exports = { rotateStack }