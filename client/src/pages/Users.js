import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUsers, deleteUser, importUsers } from '../api'
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

    // Runs only once when starting the component
    useEffect(() => {
        setLoading(true)
        getUsers()
            .then(users => setUsers(users))
            .finally(() => setLoading(false))
    }, [])

    const editUser = id => navigate(`/user/edit/${id}`)

    // Sets the userId and userName as a local state and sends to Modal Component
    // to be able to delete later. The use of React Redux was algo possible but
    // due to the simplicity of the application it was not necessary
    const removeUser = user => {
        setUserId(user._id)
        setUserName(user.name)
        const modal = document.getElementById('modal')
        modal.style.display = 'flex'
    }

    // If the import of users is successful, the page is reloaded to see the changes
    const importAPIUsers = () => {
        console.log('Users imported')
        importUsers()
            .then(data => {
                if (data.success)
                    window.location.reload()
                else
                    console.error(data.message)
            })
            .catch(console.error)
            .finally(() => setLoading(false))
    }

    return (
        <div className="container">
            <Modal id={userId} deleteUser={deleteUser} userName={userName} />
            <h2 className="users-title">Usuarios</h2>
            <Link to="/user/create" className="create-user">Agregar Usuario</Link>
            <button type="button" className="import-users" onClick={importAPIUsers}>
                Importar Usuarios
            </button>
            <table className="responsive-table">
                <thead>
                    <tr className="table-header">
                        <th>{loading && <Loading />}</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Ciudad</th>
                        <th>Compa??ia</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return (
                            <tr className="table-row" key={i}>
                                <td className="edit-user" onClick={() => editUser(user._id)}>
                                    <Gravatar email={user.email} size={30} />
                                </td>
                                <td className="edit-user" onClick={() => editUser(user._id)}>
                                    {user.name}
                                </td>
                                <td className="edit-user" onClick={() => editUser(user._id)}>
                                    {user.email}
                                </td>
                                <td className="edit-user" onClick={() => editUser(user._id)}>
                                    {user.address.city}
                                </td>
                                <td className="edit-user" onClick={() => editUser(user._id)}>
                                    {user.company.name}
                                </td>
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
                    {users.length < 1 && 
                        <tr className="table-row">
                            <td colSpan="6">No hay usuarios</td>
                        </tr>}
                </tbody>
            </table>
        </div>
    )
}

export default Users
