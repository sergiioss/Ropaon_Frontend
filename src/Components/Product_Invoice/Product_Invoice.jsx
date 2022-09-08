import React, { useState, useEffect } from "react"
import "./Product_Invoice.css"
import { Container, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { newCount, selectPurchase } from "../../Containers/Purchase/purchaseSlice"

const Product_Invoice = (props) => {
    const dispatch = useDispatch();
    let sum = useSelector(selectPurchase);
    let array1 = []
    let sumWithInitial;

    return (
        <Container className="invoice">
                {
                sum.Purchase.map((purchase, i) => (
                    <div className="elmi" key={i}>{array1.push(purchase.product_price)}</div>
                ))}
            <Col className="colinvoi">
                <th className="colinvoi">{props.data.name}</th>
                <th className="colinvoic">{props.data.product_price},00 €</th>
                <th className="colinvoic">{props.data.size}</th>
                <th className="colinvoic">{props.data.color}</th>
                <th className="colinvoic"><img className="fotoinvoice" src={props.data.url}></img></th>
                {/* {dispatch(totalPrice())} */}
            </Col>
        </Container>
    )
}

export default Product_Invoice