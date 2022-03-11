import axios from 'axios'

const host = 'http://localhost:8000'

export const getUsers = async () => {
    const url = `${host}/users`
    const users = await axios.get(url)
    return users.data
}

export const getUserById = async id => {
    const url = `${host}/users/${id}`
    const user = await axios.get(url)
    return user.data
}

export const createUser = async data => {
    const url = `${host}/users/create`
    const user = await axios.post(url, data)
    return user.data
}

export const editUser = async data => {
    const url = `${host}/users/edit`
    const user = await axios.post(url, data)
    return user.data
}

export const deleteUser = async id => {
    const url = `${host}/users/delete/${id}`
    const user = await axios.delete(url)
    return user.data
}

export const importUsers = async data => {
    const url = 'https://jsonplaceholder.typicode.com/users/import'
    const response = await axios.post(url, data)
    return response
}
