import React, { useState, useEffect } from "react"
import "./Male.css"
import axios from "axios"
import {Container, Row, Col} from 'react-bootstrap'
import ProductCard from "../../Components/ProductCard/ProductCard"

const Male = (props) => {
    const [productMale, setProductMale] = useState({
        male: []
    })

    useEffect(() => {
        axios.get('https://ropaon.herokuapp.com/api/productgenderm')
            .then(resp => {
                setProductMale({
                    male: resp.data.message
                })
                
            })

    }, [])

    return (
        <Container className="home">
            <Row>
                {
                    productMale.male.map((male, index) => (
                        <Col key={index} xs={6} sm={6} md={4} xl={2}>
                            <ProductCard data={male} key={index} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Male