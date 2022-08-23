import React from "react";
import './ProductCard.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductCard = props => {

    return (
        <Row xs={1} md={1} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card className="card-global">
                        <Card.Body className="card">
                            <Card.Title>{props.data.name}</Card.Title>
                            <Card.Img className="foto" src={props.data.url}/>
                            <Card.Text>
                                Talla: {props.data.size}
                            </Card.Text>
                            <Card.Text>
                                Color: {props.data.color}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        /* <div>
            <h1>{props.data.name}</h1>
            <img className="foto" src={props.data.url}/>
            <h3>Talla: {props.data.size}</h3>
            <h3>Color: {props.data.color}</h3>
        </div> */

    );
}

export default ProductCard