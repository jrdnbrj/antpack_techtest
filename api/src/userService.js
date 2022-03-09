const User = require("./userModel")
// const fetch = require("node-fetch")


const getUsers = async data => {
    const users = await User.find({})
    return users
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

const importUsers = async () => {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.json())
//     console.log('Users:', users)
//     // await Post.insertMany(posts)
}

module.exports = {
    getUsers,
    createUser,
    editUser,
    deleteUser,
    importUsers
}