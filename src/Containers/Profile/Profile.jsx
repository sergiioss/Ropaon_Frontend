import React from "react"
import "./Profile.css"
import { useSelector, useDispatch } from 'react-redux';
import { selectDatosUsuario } from '../User/userSlice';
import { logOut } from '../User/userSlice'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Profile = props => {

    const credenciales = useSelector(selectDatosUsuario)
    const dispatch = useDispatch()
    const navegador = useNavigate()
    const photo = credenciales.user.photo
    console.log(credenciales)

    return (
        <Container className="profile">
            <Row>
                    <p className="welcomeProfile">BIENVENIDO A TU PERFIL!</p>
                <Col className="photo" xs={4} sm={4} md={4} xl={4}>
                    <p className="namephoto">{credenciales.user.name}</p>
                    <Card.Img src={credenciales.user.photo}></Card.Img>
                    <Button className="buttonProfile">X</Button>
                    <Button className="buttonProfile">X</Button>
                </Col>
                <Col className="information">
                    <p>E-mail:{credenciales.user.email}</p><br></br>
                    <p>Telefono:{credenciales.user.addres}</p>
                </Col>
            </Row>
            <br></br>
            <Row className="sendButton">
                <Col onClick={() => {
                    /* navegador("/") */
                    /* localStorage.clear() */
                    dispatch(logOut())
                    navegador("/")
                }}>Logout</Col><br></br>
            </Row>
        </Container>
    )
}

export default Profile