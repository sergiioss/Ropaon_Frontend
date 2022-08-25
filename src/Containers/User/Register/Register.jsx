
import React from "react"
import { useState } from "react"
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch} from 'react-redux'
import { registerUser} from '../userSlice'
import { useNavigate } from 'react-router-dom'
import "./Register.css"




const Register = props => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [msgError, setMsgError] = useState("");

    const [register, setRegister] = useState({
        name: '',
        addres: '',
        email: '',
        password: '',
        msgIsError: '',
    })


    const handleInput = (event) => {
        setRegister({
            ...register,
            [event.target.name]: event.target.value
        })
    }

    const userRegister = (event) => {
        event.preventDefault()

        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(register.email)) {
            setRegister({
                ...register,
                isError: true,
                msgIsError: 'Introduce un e-mail válido'
            });
            setTimeout(() => {
                setRegister({
                    ...register,
                    msgIsError: ""
                });
            }, 1200)
            return;
        }

        if (register.password.length > 5) {
            if (! /[\d()+-]/g.test(register.password)) {
                setRegister({
                    ...register,
                    isError: true,
                    msgIsError: 'Introduce un password válido'
                });
                setTimeout(() => {
                    setRegister({
                        ...register,
                        msgIsError: ""
                    });
                }, 1200)
                return;
            };

        } else {
            setRegister({
                ...register,
                isError: true,
                msgIsError: 'El password minimo de 6 caracteres'
            });
            setTimeout(() => {
                setRegister({
                    ...register,
                    msgIsError: ""
                });
            }, 1200)
            return;
        }

        setRegister({
            ...register,
            isError: false,
            msgIsError: ''
        });
        
        if(register.name == ""){
            setMsgError('¡¡Te falta por rellenar el nombre!!');
            setTimeout(() => {
                setMsgError('');
            }, 1200)
            return;
        }else if(register.addres == ""){
            setMsgError('¡¡Te falta por rellenar el addres!!');
            setTimeout(() => {
                setMsgError('');
            }, 1200)
            return;
        }else if(register.email == ""){
            setMsgError('¡¡Te falta por rellenar el email!!');
            setTimeout(() => {
                setMsgError('');
            }, 1200)
            return;
        }else if(register.password == ""){
            setMsgError('¡¡Te falta por rellenar el password!!');
            setTimeout(() => {
                setMsgError('');
            }, 1200)
            return;
        };
        console.log(typeof(register.email));

        setMsgError('Te has registrado correctamente');

        dispatch(registerUser(register.name, register.addres, register.email, register.password))

        setTimeout(() => {
            navigate("/");
        }, 1000)

    }

    return(
        <Row className="Register justify-content-md-center">
            <Col md={12}>
                <h1>Registro</h1>
                <br></br>
                 {/* <pre>{JSON.stringify(register, null,5)}</pre> */} 
                <Form onSubmit={userRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control className="input-form" type="text" name="name" onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddres">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control type="text" name="addres" onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleInput} />
                    </Form.Group>
                    <Button className="buttonr" variant="primary" type="submit">
                        Registrarse
                    </Button>
                </Form>
                <Form.Label className="msgIsError">{msgError}</Form.Label> 
                <Form.Label className="msgIsError">{register.msgIsError}</Form.Label> 
            </Col>
        </Row>
    )
}
export default Register