import { useState } from 'react'
import Loading from './Loading'


const Modal = ({ id, userName, deleteUser }) => {

    const [loading, setLoading] = useState(false)

    const closeModal = () => {
        const modal = document.getElementById('modal')
        modal.style.display = 'none'
    }

    const handleDelete = () => {
        setLoading(true)
        deleteUser(id)
            .then(() => setLoading(false))
            .catch(console.error)
            .finally(() => window.location.reload())
    }

    return (
        <div id="modal">
            <div className="modal-header">
                <h1>Eliminar Usuario</h1>
            </div>
            {/* <div className="modal-close">
                <span onClick={closeModal}>
                    x
                </span>
            </div> */}
            <div className="modal-body">
                <p>
                    Estás seguro que deseas eliminar la información de contacto de <strong>{userName}</strong>?
                </p>
                <div>
                    <button className="delete-btn" onClick={handleDelete}>
                        Eliminar
                        {loading && <Loading />}
                    </button>
                    <button className="cancel-btn" onClick={closeModal}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
