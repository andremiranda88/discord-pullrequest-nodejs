let ROTATE_STACK = {}

const rotateStack = function (roleId, members, selectedMembers) {
    const stack = createRoleInStack(roleId, members, selectedMembers)
    console.log(stack.create);

    if (stack.create) {
        return selectedMembers
    }


    console.log('BEFORE');
    console.log(selectedMembers);
    console.log('\n\n');
    const newMembers = selectedMembers.map(m => {
        let usedMember = m
        if (stack.getRoleStack.includes(m)) {
            console.log('HERE')
            // usuario em members nao existente em RoleStack
            // usuario diferente do atual
            usedMember = members.find(another => {
                if (stack.getRoleStack.includes(another)) return false
                if (another == usedMember) return false

                return true
            })
        }
        ROTATE_STACK[roleId].push(usedMember)
        return usedMember
    });
    console.log('AFTER');
    console.log(newMembers);

    console.log('ROTATE STACK');
    console.log(ROTATE_STACK[roleId]);

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