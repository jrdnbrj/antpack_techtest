import { useState } from 'react'
import EmailValidator from 'email-validator'
import urlRegex from 'url-regex'
import Loading from './Loading'

const UserForm = ({ onSubmit, user = {} }) => {

    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

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

        const form = e.target

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

            if (response.created)
                setSuccessMsg(response.message)
            else
                setErrorMsg(response.message)
        }

        setLoading(false)
    }


    return (
        <div>
            <form className="user-form" onSubmit={handleSubmit}>
                <input type="text" id="name" placeholder="Nombre" defaultValue={user.name} />
                <input type="text" id="username" placeholder="Nombre de usuario" defaultValue={user.username} />
                <input type="email" id="email" placeholder="Correo Electrónio" defaultValue={user.email} />
                <input type="text" id="website" placeholder="Sitio Web" defaultValue={user.website} />
                <input type="text" id="phone" placeholder="Telefono" defaultValue={user.phone} />

                <div className="address-title">DIRECCION</div>
                <input type="text" id="street" placeholder="Calle" defaultValue={user.address?.street} />
                <input type="text" id="suite" placeholder="Suite" defaultValue={user.address?.suite} />
                <input type="text" id="city" placeholder="Ciudad" defaultValue={user.address?.city} />
                <input type="text" id="zipcode" placeholder="Código ZIP" defaultValue={user.address?.zipcode} />
                <input type="text" id="lat" placeholder="Latitud" defaultValue={user.address?.geo.lat} />
                <input type="text" id="lng" placeholder="Longitud" defaultValue={user.address?.geo.lng} />

                <div className="company-title">COMPAÑIA</div>
                <input type="text" id="companyName" placeholder="Nombre" defaultValue={user.company?.name} />
                <input type="text" id="catchPhrase" placeholder="Eslogan" defaultValue={user.company?.catchPhrase} />
                <input type="text" id="bs" placeholder="BS" defaultValue={user.company?.bs} />
                <button className="save-title" type="submit" disabled={loading}>
                    {loading ? <>GUARDANDO<Loading /></> : 'GUARDAR'}
                </button>
            </form>
            {errorMsg && 
                <div className="error-msg">
                    <span>{errorMsg}</span>
                    <span className="close-msg" onClick={() => setErrorMsg('')}>
                        x
                    </span>
                </div>
            }
            {successMsg &&
                <div className="success-msg">
                    <span>{successMsg}</span>
                    <span className="close-msg" onClick={() => setSuccessMsg('')}>
                        x
                    </span>
                </div>
            }
        </div>
    )
}

export default UserForm
