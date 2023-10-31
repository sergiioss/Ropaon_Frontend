import React, { useState, useEffect } from "react"
import "./Male.css"
import axios from "axios"
import {Container, Row, Col} from 'react-bootstrap'
import ProductCard from "../../Components/ProductCard/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { selectGender } from "./maleSlice"

const Male = (props) => {
    const productGender = useSelector(selectGender)

    return (
        <Container className="home">
            <Row className="female-home">
                {
                    productGender.Gender.map((male, index) => (
                        <Col key={index} xs={12} sm={12} md={4} xl={2} className="minw">
                            <ProductCard data={male} key={index} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Male