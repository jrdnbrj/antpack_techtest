import axios from 'axios'


export const getUsers = async () => {
    const users = await axios.get('http://localhost:8000/users')
    // console.log("Users: ", users)
    return users
}


export const createUser = async data => {
    const url = 'http://localhost:8000/user/create'
    const user = await axios.post(url, data)
    return user.data
}

