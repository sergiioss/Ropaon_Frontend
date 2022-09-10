import React, { useState, useEffect } from "react"
import "./Purchase.css"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deletePurchase, selectPurchase } from "./purchaseSlice"
import ProductCard from "../../Components/ProductCard/ProductCard"
import { useNavigate } from "react-router-dom"

const Purchase = (props) => {
    const dispatch = useDispatch();
    const purch = useSelector(selectPurchase);
    const navigate = useNavigate();

    const purchase = (event) => (dispatch) => {
        navigate("/invoice");
    }

    const cancelPurchase = (event) => (dispatch) => {
        dispatch(deletePurchase());
    }

    return (
        <Container className="purchase">
            <Row>
                {
                    purch.Purchase.map((purchase, i) => (
                        <Col key={i} xs={6} sm={6} md={4} xl={2} className="minw">
                            <ProductCard data={purchase} key={i} buy="1" />
                        </Col>
                    ))
                }
            </Row>
            <div className="mainbton">
                <Button className="bton" onClick={() => { dispatch(purchase()) }}>
                    Comprar
                </Button>
                <Button className="bton" onClick={() => { dispatch(cancelPurchase()) }}>
                    Cancelar Compra
                </Button>
            </div>
        </Container>
    )
}

export default Purchase