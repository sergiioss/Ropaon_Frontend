import React, { useEffect } from "react"
import "./Profile.css"
import { useSelector, useDispatch } from 'react-redux';
import { selectDatosUsuario } from '../User/userSlice';
import { logOut } from '../User/userSlice'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import axios from 'axios'



const Profile = props => {

    /* const credenciales = useSelector(selectDatosUsuario) */
    const dispatch = useDispatch()
    const navegador = useNavigate()
    const token = useSelector(selectDatosUsuario)
    /* const photo = credenciales.user.photo */
    
    
    const [me, setMe] = useState({
        name:"",
        photo:"",
        address:""

    })

    useEffect(()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${token.token}`
            }
        }
        axios.get(/* 'https://ropaon-production.up.railway.app/api/me' */'http://localhost:8000/api/me',config)
            .then(resp => {
                console.log(resp)
                setMe({
                    name: resp.data.name,
                    photo: resp.data.photo,
                    address:resp.data.addres
                })
            })
    },[])

    return (
        <Container className="profile">
            <Col>
                <Row>
                    <Col xl={10} className="welcomeProfile">BIENVENIDO A TU PERFIL!</Col>
                    <Col  className="logoutButton" onClick={() => {
                        /* navegador("/") */
                        /* localStorage.clear() */
                        dispatch(logOut())
                        navegador("/")
                    }}>Logout<img className="imgLogout" src="http://cdn.onlinewebfonts.com/svg/img_119401.png"></img></Col><br></br>
                </Row>  
                <Col className="photo" xs={4} sm={4} md={4} xl={4}>
                    <p className="namephoto">{me.name}</p>
                    <img className="cutrefoto" src={me.photo}></img>
                    <Button className="buttonProfile" onClick={()=>{
                        navegador("/settings")
                    }}><img className="imgAdjust" src="https://img.freepik.com/iconos-gratis/configuracion_318-667509.jpg?w=360"></img></Button>
                    <Button className="buttonProfile">X</Button>
                </Col>
                {/* <Col className="information">
                    <p>E-mail:{credenciales.user.email}</p><br></br>
                    <p>Telefono:{credenciales.user.addres}</p>
                </Col> */}
            </Col>
            <br></br>

        </Container>
    )
}

export default Profile