import axios from 'axios'


export const getUsers = async () => {
    const url = 'http://localhost:8000/users'
    const users = await axios.get(url)
    return users.data
}

export const getUserById = async id => {
    const url = `http://localhost:8000/user/${id}`
    const user = await axios.get(url)
    return user.data
}

export const createUser = async data => {
    const url = 'http://localhost:8000/user/create'
    const user = await axios.post(url, data)
    return user.data
}

export const editUser = async data => {
    const url = 'http://localhost:8000/user/edit'
    const user = await axios.post(url, data)
    return user.data
}

export const deleteUser = async id => {
    const url = 'http://localhost:8000/user/delete'
    const user = await axios.post(url, { id })
    return user.data
}
