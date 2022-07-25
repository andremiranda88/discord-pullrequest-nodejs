const { getDatabaseValue, setDatabaseValue } = require('../auth/database')

const ROTATE_STACK = "randomUserRotationByRole"

const rotateStackWithDb = async function(roleId, members, selectedMembers) {
  const roleList = await createRoleInStack(roleId, members, selectedMembers)
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
    return usedMember
  });


  await setDatabaseValue(ROTATE_STACK, roleList.getRoleStack)
  return newMembers
}

const createRoleInStack = async function(roleId, members, selectedMembers) {
  let stack = await getDatabaseValue(ROTATE_STACK)
  let create = false
  if (isInvalidValidStack(stack, members, roleId)) {
    if (stack == null) stack = {}
    stack[roleId] = selectedMembers
    await setDatabaseValue(ROTATE_STACK, stack)
    create = true
  }

  return { getRoleStack: stack, create }
}

const isInvalidValidStack = function(stack, members, roleId) {
  return (
    stack == undefined ||
    stack == null ||
    stack.length === 0 ||
    stack[roleId] == undefined ||
    stack[roleId].length === 0 ||
    stack[roleId].length == members.length ||
    stack[roleId].length == (members.length - 1)
  )
}

module.exports = { rotateStackWithDb }