import { Link } from 'react-router-dom'
import UserForm from '../components/UserForm'
import { createUser } from '../api'


const CreateUser = () => {
    return (
        <div className="form-container">
            <h2 className="users-title">Nuevo Usuario</h2>
            <Link className="go-back" to="/">{'< Usuarios'}</Link>
            <UserForm onSubmit={createUser} />
        </div>
    )
}

export default CreateUser
