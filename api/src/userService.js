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
    const user = await User.findByIdAndUpdate(data.id, data)
    return user
}

const deleteUser = async data => {
    const user = await User.findByIdAndDelete(data.id)
    return user
}

module.exports = {
    getUsers,
    createUser,
    editUser,
    deleteUser,
}