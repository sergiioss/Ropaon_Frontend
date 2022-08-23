import React, {useState, useEffect} from "react"
import "./Female.css"
import axios from "axios"
import {Container, Row, Col} from 'react-bootstrap'
import ProductCard from "../../Components/ProductCard/ProductCard"


const Female = (props) => {

    const [productFemale, setProductFemale] = useState({
        female: []
    })

    useEffect(() => {
        axios.get('https://ropaon.herokuapp.com/api/productgenderf')
            .then(resp => {
                setProductFemale({
                    female: resp.data.message
                })
                
            })

    }, [])


    return(
        <Container className="home">
        <Row>
            {
                productFemale.female.map((female, index) => (
                    <Col key={index} xs={6} sm={6} md={4} xl={4}>
                        <ProductCard data={female} key={index}/>
                    </Col>
                ))
            }
        </Row>
    </Container>
    )
}

export default Female