import React, {useState, useEffect} from "react"
import "./Purchase.css"
import {Container, Row, Col} from "react-bootstrap"
import { useSelector } from "react-redux"
import { selectPurchase } from "./purchaseSlice"
import ProductCard from "../../Components/ProductCard/ProductCard"

const Purchase = (props) => {
    const purch = useSelector(selectPurchase)
    return(
        <Container className="home">
        <Row>
            {
                purch.Purchase.map((purchase, i) => (
                    <Col key={i} xs={6} sm={6} md={4} xl={2}>
                        <ProductCard data={purchase} key={i} buy="1"/>
                    </Col>
                ))
            }
        </Row>
    </Container>
    )
}

export default Purchase