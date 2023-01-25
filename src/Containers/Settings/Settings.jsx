import "./Settings.css"
import { Container, Row, Col, Button } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux';
import { selectDatosUsuario, updated} from '../User/userSlice';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Settings = (props) => {
    const credenciales = useSelector(selectDatosUsuario);
    const dispatch = useDispatch();
    const token = useSelector(selectDatosUsuario);
    const navigate = useNavigate();
    const password = useSelector(selectDatosUsuario);
    
    

    const [cred, setCred] = useState({
        name: credenciales.user.name,
        address: credenciales.user.addres,
        photo: credenciales.user.photo
    })

    const [newCred, newSetCred] = useState({
        name: "",
        address: "",
        photo: ""
    })

    const updUser = (event) => {
        event.preventDefault();
        if (newCred.name == "") {
            newSetCred({
                name: cred.name,
            })
            return;
        }else if (newCred.address == "") {
            newSetCred({
                address: cred.address,
            })
            return;
        }else if (newCred.photo == "") {
            newSetCred({
                photo: cred.photo,
            })
            return;
        }
        dispatch(updateUser(newCred.name, newCred.address, newCred.photo))
    }
    const updateUser = (name, address, photo) => async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token.token}`
                }
            }
            const body = {
                name: name,
                addres: address,
                photo:photo,
                password:`${token.user.password}`
            }
            const user = await axios.put('http://localhost:8000/api/updateduser',body,config)
    
            let response = user
            if(response.status === 200){
                /* console.log(user) */
                dispatch(updated(response.data))
                setTimeout(() =>{
                    navigate('/Profile')
                },500)
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


    return (
        <Container className="settings">
            <Col>
                <Col>
                    <img className="photoSettings" src={cred.photo}></img>
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
                                defaultValue={cred.name}
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
                                defaultValue={cred.address}
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
                                defaultValue={cred.photo}
                                placeholder="Introduce la url de la foto"
                            />
                        </InputGroup>
                        <Button className="buttonSett" type="submit" onClick={updUser}>
                            SAVE
                        </Button>
                        <Button>
                            CANCEL
                        </Button>
                    </Form>
                </Col>
            </Col>
        </Container>
    )
}

export default Settings