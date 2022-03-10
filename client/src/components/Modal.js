const Modal = ({ userName }) => {

    const closeModal = () => {
        console.log('Close')
        const modal = document.getElementById('modal')
        modal.style.display = 'none'
    }

    return (
        <>
        
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
                    <button className="delete-btn">Eliminar</button>
                    <button className="cancel-btn" onClick={closeModal}>Cancelar</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal
