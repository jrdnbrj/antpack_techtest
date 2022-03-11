const User = require("./userModel")


const getUsers = async data => {
    const users = await User.find({})
    return users
}

const getUserById = async id => {
    const user = await User.findById(id)
    return user
}

const createUser = async data => {
    const user = await User.create(data)
    return user
}

const editUser = async data => {
    const user = await User.findByIdAndUpdate(data._id, data)
    return user
}

const deleteUser = async id => {
    const user = await User.findByIdAndDelete(id)
    return user
}

const importUsers = async data => {
    const response = await User.insertMany(data)
    return response
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser
}
