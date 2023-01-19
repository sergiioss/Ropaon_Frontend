import React from "react"
import "./Profile.css"
import { useSelector, useDispatch } from 'react-redux';
import { selectDatosUsuario} from '../User/userSlice';
import { logOut} from '../User/userSlice'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'


const Profile = props => {

    const credenciales = useSelector(selectDatosUsuario)
    const dispatch = useDispatch()
    const navegador = useNavigate()

    return (
        <div className="profile">
            <Stack gap={4} className="col-md-5 mx-auto">
                <Button> Save Changes </Button>
                <Button> Cancel </Button>
            </Stack>
            <p>BIENVENIDO! </p>
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