import React, { useState, useEffect } from "react"
import "./Invoice.css"
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { deletePurchase, selectPurchase } from "../Purchase/purchaseSlice"
import Table from "react-bootstrap/Table"
import { useNavigate } from "react-router-dom"
import { selectDatosUsuario } from "../User/userSlice"
import { addPurchase } from "./InvoiceSlice"

const Invoice = (props) => {
    const dispatch = useDispatch();
    const createInvoice = useSelector(selectPurchase);
    const user_id = useSelector(selectDatosUsuario);
    const token = useSelector(selectDatosUsuario);
    const date = new Date;
    let month = date.getMonth()+1
    let array1 = []
    let sumWithInitial;
    let navigate = useNavigate();
    let products = [];
    
    const [invoice, setInvoice] = useState({
        date: date.getUTCDate()+' '+ '- ' +month+' ' + '- '+date.getFullYear(),
        product_id: products,
        products_price: sumWithInitial,
        user_id: user_id.user.id,
        payment: ""
    })
    const handleChange = (e) => {
        setInvoice({
            ...invoice,
            [e.target.name]: e.target.value
        })
        if(!invoice.payment === "Visa" && !invoice.payment === "Paypal"){
            return alert('No has seleccionado la forma de pago');
        }
    }

    const activePurchase = ()=> (dispatch) => {
        dispatch(registerPurchase(invoice.date, invoice.product_id, sumWithInitial, invoice.user_id,invoice.payment));
        alert('Tu compra se ha efectuado con exito');
        setTimeout(() => {
            setInvoice({
                ...invoice,
                date: "",
                product_id:"",
                products_price: "",
                user_id: "",
                payment: ""
            });
            dispatch(deletePurchase());
            navigate("/");
        }, 1200)
        return;
    }

    const registerPurchase = (date, product_id, sumWithInitial, user_id, payment) => async (dispatch) => {
        let totalPrice = sumWithInitial.toString();
        try {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token.token}`
                }
            }
            const body = {
                purchase_date: date,
                product_id: product_id[0],
                total_price: totalPrice,
                user_id: user_id,
                payment: payment
            }
            const purchase = await axios.post('https://ropaon-production.up.railway.app/api/purchase',body, config)
    
            let response = purchase;
            console.log(response)
            if(response.status === 200){
                dispatch(addPurchase(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const totalPrice = () => (dispatch) => {
        sumWithInitial = array1.reduce(function (
            previousValue, currentValue) {
            return previousValue + currentValue;
        });
    }
    console.log(createInvoice.Purchase.length)
    if(!createInvoice.Purchase.length == 0){
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
                        <div>{products.push(purchase.id)}</div>,
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
                <div className="containermpay">
                    <Form.Select className="option" aria-label="Default select example" name="payment" onChange={handleChange}>
                        <option>Selecciona el método de pago</option>
                        <option value="Visa">Visa</option>
                        <option value="Paypal">Paypal</option>
                    </Form.Select>    
                    <Button className="option" onClick={() => { dispatch(activePurchase()) }}>Comprar</Button>
                </div>
            </Col>
        </Container>
    )
}else{
    return(
        <div className="none">NO HAY PRODUCTOS EN EL CARRITO!</div>
    )
}
}
export default Invoice