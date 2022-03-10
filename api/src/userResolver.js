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

    if (user && user._id)
        return {
            created: true,
            message: 'Usuario creado correctamente.',
        }
    else 
        return {
            created: false,
            message: 'Error al crear el usuario.',
        }
}
    
const updateUser = async data => {
    const user = await editUser(data)
    
    if (user && user._id)
        return {
            updated: true,
            message: 'Usuario actualizado correctamente.',
        }
    else 
        return {
            updated: false,
            message: 'Error al actualizar el usuario.',
        }
}

const removeUser = async id => {
    const user = await deleteUser(id)

    if (user && user._id)
        return {
            deleted: true,
            message: 'Usuario eliminado correctamente.',
        }
    else 
        return {
            deleted: false,
            message: 'Error al eliminar el usuario.',
        }
}
// data = [{}, {}]
const importUsers = async data => {
}
    


module.exports = {
    allUsers,
    userById,
    newUser,
    updateUser,
    removeUser,
    importUsers
}
