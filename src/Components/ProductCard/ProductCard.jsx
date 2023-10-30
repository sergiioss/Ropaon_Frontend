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
            <Row xs={12} sm={12} md={12} xl={12} className="g-4 img-fluid">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Row key={idx}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.data.url} />
                        <Card.Body>
                            <Card.Title>{props.data.name}</Card.Title>
                            <Row className="size-color">
                                <span>
                                    Talla: {props.data.size}
                                </span>
                                <span  className="color">
                                    Color: {props.data.color}
                                </span>
                                <span  className="color">
                                    Precio: {props.data.product_price},00 €
                                </span>
                            </Row>
                        </Card.Body>
                        </Card>
                    </Row>
                ))}
            </Row>

        );
    } else if (credenciales.user.id === 1) {
        return (
            <Row xs={12} sm={12} md={12} xl={12} className="g-4 img-fluid">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Row key={idx}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.data.url} />
                        <Card.Body>
                            <Card.Title>{props.data.name}</Card.Title>
                            <Row className="size-color">
                                <span>
                                    Talla: {props.data.size}
                                </span>
                                <span  className="color">
                                    Color: {props.data.color}
                                </span>
                                <span  className="color">
                                    Precio: {props.data.product_price},00 €
                                </span>
                            </Row>
                            {props.buy != 1 && 
                            <Button onClick={() => { dispatch(updateProduct(props.data)) }}>
                                    Seleccionar
                            </Button>}
                        </Card.Body>
                        </Card>
                    </Row>
                ))}
            </Row>
        )
    } else {
        return (
            <Row xs={12} sm={12} md={12} xl={12} className="g-4 img-fluid">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Row key={idx} className="card-cont">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.data.url} />
                        <Card.Body>
                            <Card.Title>{props.data.name}</Card.Title>
                            <Row className="size-color">
                                <span>
                                    Talla: {props.data.size}
                                </span>
                                <span  className="color">
                                    Color: {props.data.color}
                                </span>
                                <span  className="color">
                                    Precio: {props.data.product_price},00 €
                                </span>
                            </Row>
                            {props.buy != 1 && 
                            <Button onClick={() => { dispatch(alertClick(props.data)) }}>
                                    Comprar
                            </Button>}
                        </Card.Body>
                        </Card>
                    </Row>
                ))}
            </Row>
        );
    }
}

export default ProductCard
