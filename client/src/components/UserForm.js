import { useState } from 'react'
import EmailValidator from 'email-validator'
import urlRegex from 'url-regex'
import Loading from './Loading'


const UserForm = ({ onSubmit, user = {} }) => {

    // loading variable to show the loading spinner
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    // Validate that the form doesn't have any empty fields
    // Validate that the email is valid
    // Validate that the url is valid
    const validateForm = user => {
        const { 
            name, username, email, address, 
            phone, website, company 
        } = user

        if (!name) {
            setErrorMsg('El nombre es requerido.')
            return false
        }

        if (!username) {
            setErrorMsg('El nombre de usuario es requerido.')
            return false
        }

        if (!email) {
            setErrorMsg('El email es requerido.')
            return false
        }
        if (!EmailValidator.validate(email)) {
            setErrorMsg('El email no es válido.')
            return false
        }

        if (!website) {
            setErrorMsg('El sitio web es requerido.')
            return false
        }

        if (!urlRegex({ strict: false }).test(website)) {
            setErrorMsg('El sitio web no es válido.')
            return false
        }

        if (!phone) {
            setErrorMsg('El teléfono es requerido.')
            return false
        }

        if (!address.street || !address.suite || !address.city || 
            !address.zipcode || !address.geo.lat || !address.geo.lng) {
            setErrorMsg('La dirección está incompleta.')
            return false
        }

        if (!company.name || !company.catchPhrase || !company.bs) {
            setErrorMsg('La información de la compañia está incompleta.')
            return false
        }

        return true
    }

    const handleSubmit = async e => {
        e.preventDefault()

        setLoading(true)
        setErrorMsg('')
        setSuccessMsg('')

        const form = e.target

        // Builds the user object from the form to validate
        // to send it to our Backend
        const userForm = {
            name: form.name.value,
            username: form.username.value,
            email: form.email.value,
            address: {
                street: form.street.value,
                suite: form.suite.value,
                city: form.city.value,
                zipcode: form.zipcode.value,
                geo: {
                    lat: form.lat.value,
                    lng: form.lng.value
                }
            },
            phone: form.phone.value,
            website: form.website.value,
            company: {
                name: form.companyName.value,
                catchPhrase: form.catchPhrase.value,
                bs: form.bs.value
            }
        }

        
        if (validateForm(userForm)) {
            if (user)
                userForm._id = user._id
            
            const response = await onSubmit(userForm)

            if (response.success)
                setSuccessMsg(response.message)
            else
                setErrorMsg(response.message)
        }

        setLoading(false)
    }

    // Display error or success messages
    const MessageStatus = () => {
        if (errorMsg) {
            return (
                <div className="error-msg">
                    <span>{errorMsg}</span>
                    <span className="close-msg" onClick={() => setErrorMsg('')}>
                        x
                    </span>
                </div>
            )
        }
        if (successMsg) {
            return (
                <div className="success-msg">
                    <span>{successMsg}</span>
                    <span className="close-msg" onClick={() => setSuccessMsg('')}>
                        x
                    </span>
                </div>
            )
        }
        return null
    }

    return (
        <div>
            <form className="user-form" onSubmit={handleSubmit}>
                <div className="name">
                    <span>Nombre</span>
                    <input type="text" id="name" placeholder="Nombre" defaultValue={user.name} />
                </div>
                <div className="username">
                <span>Nombre de usuario</span>
                    <input type="text" id="username" placeholder="Nombre de usuario" defaultValue={user.username} />
                </div>
                <div className="email">
                    <span>Email</span>
                    <input type="email" id="email" placeholder="Correo Electrónio" defaultValue={user.email} />
                </div>
                <div className="website">
                    <span>Sitio Web</span>
                    <input type="text" id="website" placeholder="Sitio Web" defaultValue={user.website} />
                </div>
                <div className="phone">
                    <span>Telefono</span>
                    <input type="text" id="phone" placeholder="Telefono" defaultValue={user.phone} />
                </div>
                <div>
                    <br />
                    <div className="address-title">DIRECCIÓN</div>
                </div>
                <div className="street">
                    <span>Calle Principal</span>
                    <input type="text" id="street" placeholder="Calle" defaultValue={user.address?.street} />
                </div>
                <div className="suite">
                    <span>Suite</span>
                    <input type="text" id="suite" placeholder="Suite" defaultValue={user.address?.suite} />
                </div>
                <div className="city">
                    <span>Ciudad</span>
                    <input type="text" id="city" placeholder="Ciudad" defaultValue={user.address?.city} />
                </div>
                <div className="zipcode">
                    <span>Código Postal</span>
                    <input type="text" id="zipcode" placeholder="Código ZIP" defaultValue={user.address?.zipcode} />
                </div>
                <div className="lat">
                    <span>Latitud</span>
                    <input type="text" id="lat" placeholder="Latitud" defaultValue={user.address?.geo.lat} />
                </div>
                <div className="lng">
                    <span>Longitud</span>
                    <input type="text" id="lng" placeholder="Longitud" defaultValue={user.address?.geo.lng} />
                </div>
                <div>
                    <br />
                    <div className="company-title">COMPAÑIA</div>
                </div>
                <div className="companyName">
                    <span>Nombre de la Compañia</span>
                    <input type="text" id="companyName" placeholder="Nombre" defaultValue={user.company?.name} />
                </div>
                <div className="catchPhrase">
                    <span>Eslogan</span>
                    <input type="text" id="catchPhrase" placeholder="Eslogan" defaultValue={user.company?.catchPhrase} />
                </div>
                <div className="bs">
                    <span>BS</span>
                    <input type="text" id="bs" placeholder="BS" defaultValue={user.company?.bs} />
                </div>
                <button className="save-title" type="submit" disabled={loading}>
                    {loading ? <>GUARDANDO<Loading /></> : 'GUARDAR'}
                </button>
            </form>
            <MessageStatus />
        </div>
    )
}

export default UserForm
