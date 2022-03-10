const { 
    getUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser,
} = require('./userService')


const allUsers = async () => {
    const users = await getUsers()
    return users
}

const userById = async id => {
    const user = await getUserById(id)
    return user
}

const newUser = async data => {
    const user = await createUser(data)
    // console.log('user:', user)
    return user
}
    
const updateUser = async data => {
    const user = await editUser(data)
    return user
}

const removeUser = async id => {
    const user = await deleteUser(id)
    return user
}

module.exports = {
    allUsers,
    userById,
    newUser,
    updateUser,
    removeUser
}
