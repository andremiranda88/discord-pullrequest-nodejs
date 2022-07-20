const { getDatabaseValue } = require('../auth/database')

const ROTATE_STACK = "randomUserRotationByRole"

const rotateStackWithDb = function (roleId, members, selectedMembers) {
    const roleList = createRoleInStack(roleId, members, selectedMembers)

    if (roleList.create || roleList.getRoleStack[roleId] == undefined) {
        return selectedMembers
    }

    const selectedRole = roleList.getRoleStack[roleId]
    const newMembers = selectedMembers.map(m => {
        let usedMember = m
        if (selectedRole.includes(m)) {
            usedMember = members.find(another => {
                if (selectedRole.includes(another)) return false
                if (another == usedMember) return false

                return true
            })
        }
        roleList.getRoleStack[roleId].push(usedMember)
        setDatabaseValue(ROTATE_STACK, roleList.getRoleStack)
        return usedMember
    });

    return newMembers
}

const createRoleInStack = function (roleId, members, selectedMembers) {
    const stack = getDatabaseValue(ROTATE_STACK)
    let create = false
    if (stack == undefined || stack.length == members.length || stack.length == (members.length - 1)) {
        stack[roleId] = selectedMembers
        setDatabaseValue(ROTATE_STACK, stack)
        create = true
    }

    return { getRoleStack: stack, create }
}

module.exports = { rotateStackWithDb }