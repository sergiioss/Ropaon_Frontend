import React from "react"
import { useState, useEffect } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import "./Home.css"
import axios from "axios"
import ProductCard from "../../Components/ProductCard/ProductCard"

const Home = (props) => {

    const [products, setProducts] = useState({
        prod: []
    })

    useEffect(() => {
        axios.get('http://sergi.lighthousemarketing.es/public/api/productall'/* 'http://localhost:8000/api/productall' */)
            .then(resp => {
                setProducts({
                    prod: resp.data.data
                })
            })

    }, [])


    return (

    <Container className="home">
        <Row>
            {
                products.prod.map((prod, i) => (
                    <Col key={i} xs={6} sm={6} md={4} xl={2} className="img-fluid minw">
                        <ProductCard data={prod} key={i}/>
                    </Col>
                ))
            }
        </Row>
    </Container>
    )
}

export default Home