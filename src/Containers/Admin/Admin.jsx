import React, { useState, useEffect } from "react"
import "./Admin.css"
import { Row, Col, Form, Button, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { selectDatosUsuario } from "../User/userSlice"
import axios from "axios"
import { NavLink } from "react-router-dom"
import { selectProduct } from "./adminSlice"

const Admin = (props) => {
    const dispatch = useDispatch();
    const token = useSelector(selectDatosUsuario);
    let primo = useSelector(selectProduct);
    let newId = primo.id.id;
    let delProduct = primo.id.name;

    const [createProduct, setCreateProduct] = useState({
        name: "",
        size: "",
        product_price: "",
        url: "",
        color: "",
        gender: ""
    })

    const handleInput = (event) => {
        setCreateProduct({
            ...createProduct,
            [event.target.name]: event.target.value
        })
    }

    const registerProduct = (event) => {
        event.preventDefault()
        if (createProduct.name == "") {
            /* setMsgError('¡¡Te falta por rellenar el nombre!!'); */
            return;
        } else if (createProduct.size == "") {
            /* setMsgError('¡¡Te falta por rellenar el addres!!'); */
            return;
        } else if (createProduct.product_price == "") {
            /* setMsgError('¡¡Te falta por rellenar el email!!'); */
            return;
        } else if (createProduct.url == "") {
            /* setMsgError('¡¡Te falta por rellenar el password!!'); */
            return;
        } else if (createProduct.color == "") {
            /* setMsgError('¡¡Te falta por rellenar el password!!'); */
            return;
        } else if (createProduct.gender == "") {
            /* setMsgError('¡¡Te falta por rellenar el password!!'); */
            return;
        }

        dispatch(newProduct(createProduct.name, createProduct.size, createProduct.product_price, createProduct.url, createProduct.color, createProduct.gender))
    }
    const newProduct = (name, size, product_price, url, color, gender) => async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token.token}`
                }
            }
            const body = {
                name: name,
                size: size,
                product_price: product_price,
                url: url,
                color: color,
                gender: gender
            }
            const product = await axios.post(/* 'https://ropaon-production.up.railway.app/api/create' */'http://localhost:8000/api/create', body, config)

            let response = product

            if (response.status === 200) {
                dispatch(registerProduct(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const uProducts = (event) => {
        event.preventDefault();

    dispatch(updateProducts(createProduct.name, createProduct.size, createProduct.product_price, createProduct.url, createProduct.color, createProduct.gender))
    }

    const updateProducts = (name, size, product_price, url, color, gender) => async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token.token}`
                }
            }
            const body = {
                name: name,
                size: size,
                product_price: product_price,
                url: url,
                color: color,
                gender: gender
            }
            const product = await axios.put(/* `https://ropaon-production.up.railway.app/api/updatedproduct/${newId}` */`http://localhost:8000/api/updatedproduct/${newId}`, body, config);
            
            let response = product
            console.log(response);
            if (response.status === 200) {
                dispatch(registerProduct(response.data))
            }

        } catch (error) {
            console.log(error)
        }
    }

    const dProducts = (event) => {
        console.log(event)
        event.preventDefault();
        dispatch(deleteProducts());
    }

    const deleteProducts = () => async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token.token}`
                }
            }
            const product = await axios.delete(/* `https://ropaon-production.up.railway.app/api/deleteproduct/${newId}` */`http://localhost:8000/api/deleteproduct/${newId}`, config);
            
            let response = product
            if (response.status === 200) {
                dispatch(registerProduct(response.data))
            }

        } catch (error) {
            console.log(error)
        }
    }
    /* setMsgError('¡¡El producto se ha creado!!'); */

    return (
        <Container className="containeradmin">
            <Row>
                <Col xs={12} sm={6} md={4} xl={2}>
                    <br></br>
                    <Form className="admin" onSubmit={registerProduct}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <h1 className="titulo">Añadir.P</h1>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control className="input-form" type="text" name="name" onChange={handleInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddres">
                            <Form.Label>Talla</Form.Label>
                            <Form.Control type="text" name="size" onChange={handleInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="integer" name="product_price" onChange={handleInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Url</Form.Label>
                            <Form.Control type="text" name="url" onChange={handleInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" name="color" onChange={handleInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Genero</Form.Label>
                            <Form.Control type="text" name="gender" onChange={handleInput} />
                        </Form.Group>
                        <Button className="cbutton" variant="primary" type="submit">
                            Registrar producto
                        </Button>
                    </Form>
                    {/* <Form.Label className="msgIsError">{msgError}</Form.Label> */}
                </Col>
            </Row>
            <Row>
                <Col xs={6} sm={6} md={4} xl={2}>
                    <br></br>
                    <Form className="admin" onSubmit={uProducts}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <h1 className="titulo">Actualizar.P</h1>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control className="input-form" type="text" name="name" onChange={handleInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddres">
                            <Form.Label>Talla</Form.Label>
                            <Form.Control type="text" name="size" onChange={handleInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="integer" name="product_price" onChange={handleInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Url</Form.Label>
                            <Form.Control type="text" name="url" onChange={handleInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Color</Form.Label>
                            <Form.Control type="text" name="color" onChange={handleInput} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Genero</Form.Label>
                            <Form.Control type="text" name="gender" onChange={handleInput} />
                        </Form.Group>
                        <Button className="cbutton" variant="primary" type="submit">
                            Actualizar producto
                        </Button>
                    </Form>
                    {/* <Form.Label className="msgIsError">{msgError}</Form.Label> */}
                </Col>
            </Row>
            <Row>
                <Col xs={6} sm={6} md={4} xl={2}>
                    <br></br>
                    <Form className="admin" onSubmit={dProducts}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <h1 className="titulo">Borrar.P</h1>
                            <Form.Label>{delProduct}</Form.Label>
                        </Form.Group>
                        <Button className="cbutton" variant="primary" type="submit">
                            Borrar producto
                        </Button>
                    </Form>
                    <Row className="letters"><NavLink className="letters" to="/">Para actualizar o borrar un producto pincha aqui y selecciona el producto</NavLink></Row>
                    {/* <Form.Label className="msgIsError">{msgError}</Form.Label> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Admin