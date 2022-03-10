import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUsers, deleteUser } from '../api'
import Loading from '../components/Loading'
import Modal from '../components/Modal'
import Gravatar from 'react-gravatar'
import { AiOutlineDelete } from 'react-icons/ai'


const Users = () => {

    const navigate = useNavigate()

    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getUsers()
            .then(users => setUsers(users))
            .finally(() => setLoading(false))
    }, [])

    const editUser = id => navigate(`/user/edit/${id}`)

    const removeUser = user => {
        setUserId(user._id)
        setUserName(user.name)
        const modal = document.getElementById('modal')
        modal.style.display = 'flex'
    }

    return (
        <div className="container">
            <Modal id={userId} deleteUser={deleteUser} userName={userName} />
            <h2 className="users-title">Usuarios</h2>
            <Link to="/user/create" className="create-user">Agregar Usuario</Link>
            <table className="responsive-table">
                <thead>
                    <tr className="table-header">
                        <th>{loading && <Loading />}</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Ciudad</th>
                        <th>Compañia</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return (
                            <tr className="table-row" key={i}>
                                <td onClick={() => editUser(user._id)}>
                                    <Gravatar email={user.email} size={30} />
                                </td>
                                <td onClick={() => editUser(user._id)}>{user.name}</td>
                                <td onClick={() => editUser(user._id)}>{user.email}</td>
                                <td onClick={() => editUser(user._id)}>{user.address.city}</td>
                                <td onClick={() => editUser(user._id)}>{user.company.name}</td>
                                <td>
                                    <AiOutlineDelete 
                                        className="delete-icon"
                                        onClick={() => removeUser(user)} 
                                        size={30} 
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Users
