import axios from 'axios'


// Backend url environment variable
const host = process.env.REACT_APP_BACKEND_URL

export const getUsers = async () => {
    const url = `${host}/users`
    const users = await axios.get(url)

    return users.data
}

// Retrieves the user information to be able to edit it
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

// function to fetch users from API and add them to the database
export const importUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const users = await axios.get(url)

    const response = await axios.post(`${host}/users/import`, users.data)

    return response.data
}
