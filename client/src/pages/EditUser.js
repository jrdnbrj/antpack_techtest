import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserForm from '../components/UserForm'
import { useParams } from 'react-router-dom'
import { editUser, getUserById } from '../api'


const EditUser = () => {

    const { id } = useParams()

    const [user, setUser] = useState({})

    useEffect(() => {
        getUserById(id)
            .then(user => setUser(user))
        // eslint-disable-next-line
    }, [])

    return (
        <div className="form-container">
            <h2 className="users-title">Editar Usuario</h2>
            <Link className="go-back" to="/">{'< Usuarios'}</Link>
            <UserForm onSubmit={editUser} user={user} />
        </div>
    )
}

export default EditUser
