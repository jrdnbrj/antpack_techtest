const { 
    getUsers,
    getUserById,
    createUser 
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
    

module.exports = {
    allUsers,
    newUser,
}
