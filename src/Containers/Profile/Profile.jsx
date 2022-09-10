import React from "react"
import "./Profile.css"
import { useSelector, useDispatch } from 'react-redux';
import { selectDatosUsuario} from '../User/userSlice';
import { logOut} from '../User/userSlice'
import { useNavigate } from 'react-router-dom'


const Profile = props => {

    const credenciales = useSelector(selectDatosUsuario)
    const dispatch = useDispatch()
    const navegador = useNavigate()

    return (
        <div className="profile">
            <p>Hola perfil</p>
            <p>Nombre:{credenciales.user.name}</p><br></br>
            <p>E-mail:{credenciales.user.email}</p><br></br>
            <p>Telefono:{credenciales.user.addres}</p>

            <div>
                <div className="sendButton" onClick={()=>{
                        /* navegador("/") */
                         /* localStorage.clear() */ 
                        dispatch(logOut())
                        navegador("/")
                    }}>Logout</div><br></br>
            </div>
        </div>
    )
}

export default Profile