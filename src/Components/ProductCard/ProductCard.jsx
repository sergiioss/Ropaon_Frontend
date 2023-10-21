import React from "react";
import './ProductCard.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectDatosUsuario } from "../../Containers/User/userSlice"
import { arrayPurchase } from "../../Containers/Purchase/purchaseSlice";
import { idProduct } from "../../Containers/Admin/adminSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = props => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const credenciales = useSelector(selectDatosUsuario);

    const alertClick = (event) => (dispatch) => {
        dispatch(arrayPurchase(event))
        alert('Se ha añadido al carrito tu producto');
    }
    const updateProduct = (event) => (dispatch) => {
        dispatch(idProduct(event));
        navigate("/admin");
    }

    if (!credenciales?.token) {
        return (
            <Row xs={1} md={3} className="g-4 img-fluid">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx} className="card-cont">
                        <Card className="card-global">
                            <Card.Body className="card">
                                <Card.Title>{props.data.name}</Card.Title>
                                <Card.Img className="foto" src={props.data.url} />
                                <Card.Text>
                                    Talla: {props.data.size}
                                </Card.Text>
                                <Card.Text>
                                    Color: {props.data.color}
                                </Card.Text>
                                <Card.Text>
                                    Precio: {props.data.product_price},00 €
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        );
    } else if (credenciales.user.id === 1) {
        return (
            <Row xs={1} md={3} className="g-4 img-fluid">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx} className="card-cont">
                        <Card className="card-global">
                            <Card.Body className="card">
                                <Card.Title>{props.data.name}</Card.Title>
                                <Card.Img className="foto" src={props.data.url} />
                                <Card.Text>
                                    Talla: {props.data.size}
                                </Card.Text>
                                <Card.Text>
                                    Color: {props.data.color}
                                </Card.Text>
                                <Card.Text>
                                    Precio: {props.data.product_price},00 €
                                </Card.Text>
                                {props.buy != 1 && <Button onClick={() => { dispatch(updateProduct(props.data)) }}>
                                    Seleccionar
                                </Button>}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
    } else {
        return (
            <Row xs={1} md={3} className="g-4 img-fluid">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx} className="card-cont">
                        <Card className="card-global">
                            <Card.Body className="card">
                                <Card.Title>{props.data.name}</Card.Title>
                                <Card.Img className="foto" src={props.data.url} />
                                <Card.Text>
                                    Talla: {props.data.size}
                                </Card.Text>
                                <Card.Text>
                                    Color: {props.data.color}
                                </Card.Text>
                                <Card.Text>
                                    Precio: {props.data.product_price},00 €
                                </Card.Text>
                                {props.buy != 1 && <Button onClick={() => { dispatch(alertClick(props.data)) }}>
                                    Comprar
                                </Button>}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    }
}

export default ProductCard
