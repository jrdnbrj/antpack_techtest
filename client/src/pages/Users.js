import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../api'
import Gravatar from 'react-gravatar'


const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const allUsers = async () => {
            const u = await getUsers()
            setUsers(u.data)
        }
        allUsers()
    }, [])

    useEffect(() => {
        console.table(users)
    }, [users])

    return (
        <div className="container">
            <h2 className="users-title">Usuarios</h2>
            <Link to="/user/create" className="create-user">Agregar Usuario</Link>
            <table className="responsive-table">
                <thead>
                    <tr className="table-header">
                        <th></th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Ciudad</th>
                        <th>Compañia</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return (
                            <tr className="table-row" key={i}>
                                <td><Gravatar email={user.email} size={30} /></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Users
