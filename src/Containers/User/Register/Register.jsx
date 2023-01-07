import React from "react"
import { useState } from "react"
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { registerUser } from '../userSlice'
import { useNavigate } from 'react-router-dom'
import "./Register.css"

const Register = props => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [msgOk, setMsgOk] = useState("");

    const [register, setRegister] = useState({
        name: '',
        addres: '',
        email: '',
        password: '',
        isError: 'false',
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

        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(register.email)) {

            setRegister({
                ...register,
                isError: true,
                msgIsError: 'Introduce un e-mail válido'
            });
            setTimeout(() => {
                setRegister({
                    ...register,
                    isError: false,
                    msgIsError: ""
                });
            }, 1200)
            return;
        }

        if (register.password.length > 5) {
            /* Minimo 6 caracteres
            Al menos una letra mayúscula
            Maximo 15
            Al menos un dígito
            Al menos una letra minucula
            Al menos 1 caracter especial 
            No espacios en blanco
            */
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/.test(register.password)) {
                setRegister({
                    ...register,
                    isError: true,
                    msgIsError: 'Introduce un password válido'
                });
                setTimeout(() => {
                    setRegister({
                        ...register,
                        isError: false,
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
                    isError: false,
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

        if (register.name == "") {
            setRegister({
                ...register,
                isError: true,
                msgIsError: "¡¡Te falta por rellenar el nombre!!"
            });
            setTimeout(() => {
                setRegister({
                    ...register,
                    isError: false,
                    msgIsError: ""
                });
            }, 1200)
            return;
        } else if (register.addres == "") {
            setRegister({
                ...register,
                isError: true,
                msgIsError: "¡¡Te falta por rellenar la dirección!!"
            });
            setTimeout(() => {
                setRegister({
                    ...register,
                    isError: false,
                    msgIsError: ""
                });
            }, 1200)
            return;
        } else if (register.email == "") {
            setRegister({
                ...register,
                isError: true,
                msgIsError: "¡¡Te falta por rellenar el e-mail!!"
            });
            setTimeout(() => {
                setRegister({
                    ...register,
                    isError: false,
                    msgIsError: ""
                });
            }, 1200)
            return;
        } else if (register.password == "") {
            setRegister({
                ...register,
                isError: true,
                msgIsError: "¡¡Te falta por rellenar la contraseña!!"
            });
            setTimeout(() => {
                setRegister({
                    ...register,
                    isError: false,
                    msgIsError: ""
                });
            }, 1200)
            return;
        };

        setMsgOk('Te has registrado correctamente');

        dispatch(registerUser(register.name, register.addres, register.email, register.password))

        setTimeout(() => {
            navigate("/");
        }, 1000)

    }

    return (
        <Container className="register">
            <Row className="Register justify-content-center">
                <h1>Registro</h1>
                <br></br>
                {/* <pre>{JSON.stringify(register, null,5)}</pre> */}
                <Form className="form" onSubmit={userRegister}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control className="input-form" type="text" name="name" onChange={handleInput} />
                    </Form.Group>
                    <Form.Group controlId="formBasicAddres">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control className="input-form" type="text" name="addres" onChange={handleInput} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="input-form" type="text" name="email" onChange={handleInput} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control className="input-form" type="password" name="password" onChange={handleInput} />
                    </Form.Group>
                    <Button className="buttonr" variant="primary" type="submit">
                        Registrarse
                    </Button>
                </Form>
                <Form.Group className="errors">
                    <Form.Label className="msgIsOk">{msgOk}</Form.Label>
                    <Form.Label className="msgIsError">{register.msgIsError}</Form.Label>
                </Form.Group>
            </Row>
        </Container>
    )
}
export default Register