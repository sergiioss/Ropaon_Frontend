import "./Settings.css"
import { Container, Row, Col, Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux';
import { newUpdated, selectDatosUsuario, update} from '../User/userSlice';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Settings = (props) => {
    const credenciales = useSelector(selectDatosUsuario);
    const dispatch = useDispatch();
    const token = useSelector(selectDatosUsuario);
    const navigate = useNavigate();
    
    const [newCred, newSetCred] = useState({
        name: "",
        address: "",
        photo: ""
    })

    const updUser = (event) => {
        event.preventDefault();
        
        if (newCred.name == "" || newCred.name == undefined) {
            console.log('hola')
            console.log(credenciales.user.name)
            newSetCred({
                name: credenciales.user.name,
            })
            /* console.log(newCred.name) */
        }
        if (newCred.address == "" || newCred.address == undefined) {
            console.log('buenos dias')
            console.log(credenciales.user.addres)
            newSetCred({
                address: credenciales.user.addres,
            })
           /*  console.log(newCred.address) */
        }
        if (newCred.photo == "" || newCred.photo == undefined) {
            console.log('que tla')
            console.log(credenciales.user.photo)
            newSetCred({
                photo: credenciales.user.photo,
            })
            /* console.log(newCred.photo) */
        }
        setTimeout(()=>{
            dispatch(newUpdated(newCred.name, newCred.address, newCred.photo))
        },300)
        setTimeout(()=>{
            dispatch(updateUser(newCred.name, newCred.address, newCred.photo))
        },300)
        
        
    }
    const updateUser = (name, address,photo) => async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token.token}`
                }
            }
            const body = {
                name: name,
                addres: address,
                photo:photo
            }
            const user = await axios.put('http://localhost:8000/api/updateduser',body,config)
    
            let response = user
            if(response.status === 200){
                    setTimeout(()=>{
                        navigate("/Profile")
                    },300)
            } 
        } catch (error) {
            error
        }
    }

    const handleInput = (event) => {
        newSetCred({
            ...newCred,
            [event.target.name]: event.target.value
        })
    }

    const cancel = () =>{
        setTimeout(()=>{
            navigate("/Profile")
        },300)
    }


    return (
        <Container className="settings">
            <Col>
                <Col>
                    <img className="photoSettings" src={credenciales.user.photo}></img>
                </Col>
                <Col>
                    <Form>
                        <InputGroup size="xs" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-xs" className="inputProfile">Nombre</InputGroup.Text>
                            <Form.Control
                                onChange={handleInput}
                                type="text"
                                name="name"
                                className="inputProfileForm"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                defaultValue={credenciales.user.name}
                                placeholder="Introduce tu nombre"
                            />
                        </InputGroup>
                        <InputGroup size="xs" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-xs" className="inputProfile">Address</InputGroup.Text>
                            <Form.Control
                                onChange={handleInput}
                                type="text"
                                name="address"
                                className="inputProfileForm"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                defaultValue={credenciales.user.addres}
                                placeholder="Introduce la dirección"
                            />
                        </InputGroup>
                        <InputGroup size="xs" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-xs" className="inputProfile">Foto</InputGroup.Text>
                            <Form.Control
                                onChange={handleInput}
                                type="text"
                                name="photo"
                                className="inputProfileForm"
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                defaultValue={credenciales.user.photo}
                                placeholder="Introduce la url de la foto"
                            />
                        </InputGroup>
                        <Button className="buttonSett" type="submit" onClick={updUser}>
                            SAVE
                        </Button>
                        <Button onClick={cancel}>
                            CANCEL
                        </Button>
                    </Form>
                </Col>
            </Col>
        </Container>
    )
}

export default Settings