import React, { useState, useEffect } from "react"
import "./Invoice.css"
import { Container, Row, Col } from "react-bootstrap"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { selectPurchase } from "../Purchase/purchaseSlice"
import Table from "react-bootstrap/Table"

const Invoice = (props) => {
    const dispatch = useDispatch();
    const createInvoice = useSelector(selectPurchase);
    let array1 = []
    let sumWithInitial;

    const totalPrice = () => (dispatch) => {
        sumWithInitial = array1.reduce(function (
            previousValue, currentValue) {
            return previousValue + currentValue;
        });
    }

    return (
        <Container className="invoice">
            <Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th className="col">Nombre</th>
                            <th className="col">Precio</th>
                            <th className="col">Talla</th>
                            <th className="col">Color</th>
                            <th className="col">Foto</th>
                        </tr>
                    </thead>
                </Table>
                {
                    createInvoice.Purchase.map((purchase, i) => (
                        <div data={purchase} key={i} buy="1" />,
                        <div className="elmi" key={i}>{array1.push(purchase.product_price)}</div>,
                        <Row key={i}>
                            <div className="colinvoi">
                                <th className="colinvoi">{purchase.name}</th>
                                <th className="colinvoic">{purchase.product_price},00 €</th>
                                <th className="colinvoic">{purchase.size}</th>
                                <th className="colinvoic">{purchase.color}</th>
                                <th className="colinvoic"><img className="fotoinvoice" src={purchase.url}></img></th>
                            </div>
                        </Row>
                    ))
                }
            </Row>
            <Col>
                {dispatch(totalPrice())}
                <div className="res">
                    <h3>TU COMPRA ASCIENDE A: {sumWithInitial},00 €</h3>
                </div>
            </Col>
        </Container>
    )
}

export default Invoice