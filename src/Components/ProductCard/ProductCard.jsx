import React from "react";
import './ProductCard.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ProductCard = props => {

    return (
        <Row xs={1} md={1} className="g-4 img-fluid">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
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

    );
}

export default ProductCard