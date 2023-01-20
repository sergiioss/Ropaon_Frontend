import React from "react"
import "./Profile.css"
import { useSelector, useDispatch } from 'react-redux';
import { selectDatosUsuario } from '../User/userSlice';
import { logOut } from '../User/userSlice'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'


const Profile = props => {

    const credenciales = useSelector(selectDatosUsuario)
    const dispatch = useDispatch()
    const navegador = useNavigate()
    const photo = credenciales.user.photo
    console.log(credenciales)

    return (
        <Container className="profile">
            <Row>
                <Col className="photo">
                    <Card.Img src={credenciales.user.photo}></Card.Img>
                </Col>
                <Col className="information">
                    <p>BIENVENIDO! </p>
                    <p>Nombre:{credenciales.user.name}</p><br></br>
                    <p>E-mail:{credenciales.user.email}</p><br></br>
                    <p>Telefono:{credenciales.user.addres}</p>
                </Col>
            </Row>


            <div>
                <div className="perfil">

                </div>
                <div className="sendButton" onClick={() => {
                    /* navegador("/") */
                    /* localStorage.clear() */
                    dispatch(logOut())
                    navegador("/")
                }}>Logout</div><br></br>
            </div>
        </Container>
    )
}

export default Profile