const { 
    getUsers, 
    importUsers, 
    createUser 
} = require('./userService')


const allUsers = async () => {
    const users = await getUsers()
    return users
}


const newUser = async data => {
    const user = await createUser(data)
    // console.log('user:', user)
    return user
}
    

const usersFromApi = async () => {
    await importUsers()
}

module.exports = {
    allUsers,
    newUser,
    usersFromApi
}
