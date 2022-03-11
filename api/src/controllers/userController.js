const { 
    getUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser,
    importUsers
} = require('../services/userService')


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
            success: true,
            message: 'Usuario creado correctamente.',
        }
    else 
        return {
            success: false,
            message: 'Error al crear el usuario.',
        }
}
    
const updateUser = async data => {
    const user = await editUser(data)
    
    if (user && user._id)
        return {
            success: true,
            message: 'Usuario actualizado correctamente.',
        }
    else 
        return {
            success: false,
            message: 'Error al actualizar el usuario.',
        }
}

const removeUser = async id => {
    const user = await deleteUser(id)

    if (user && user._id)
        return {
            success: true,
            message: 'Usuario eliminado correctamente.',
        }
    else 
        return {
            success: false,
            message: 'Error al eliminar el usuario.',
        }
}

const importAPIUsers = async data => {
    const users = await importUsers(data)

    if (users && users.length)
        return {
            success: true,
            message: 'Usuarios importados correctamente.',
        }
    else 
        return {
            success: false,
            message: 'Error al importar los usuarios.',
        }
}
    


module.exports = {
    allUsers,
    userById,
    newUser,
    updateUser,
    removeUser,
    importAPIUsers
}
