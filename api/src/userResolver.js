const { 
    getUsers, 
    importUsers, 
    createUser 
} = require('./userService')


const allUsers = async () => {
    const users = await getUsers()
    return users
}


const newUser = async () => {
    const user = await createUser({
        name: 'test',
        username: 'test',
        email: 'hola@hola.com',
        address: {
            street: 'test',
            suite: 'test',
            city: 'test',
            zipcode: 'test',
            geo: {
                lat: 'test',
                lng: 'test'
            }
        },
        phone: 'test',
        website: 'test',
        company: {
            name: 'test',
            catchPhrase: 'test',
            bs: 'test'
        }
    })
    // console.log('user:', user)
}
    

const usersFromApi = async () => {
    await importUsers()
}

module.exports = {
    allUsers,
    newUser,
    usersFromApi
}
