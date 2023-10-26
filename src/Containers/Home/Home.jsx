import React from "react"
import { useState, useEffect } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import "./Home.css"
import axios from "axios"
import ProductCard from "../../Components/ProductCard/ProductCard"

const Home = (props) => {

    const [products, setProducts] = useState({
        newData:[]
    })
    /* useEffect(() => {
        axios.get('https://sergi.lighthousemarketing.es/public/api/productall''http://localhost:8000/api/productall')
        .then(resp => {
            setProducts({
                newData: resp.data.data
            })
        })   
        
    }, []) */
    
    useEffect(() => {
        const cachedData = localStorage.getItem('storage');
        // Intenta cargar los datos desde el almacenamiento local
        console.log(cachedData !== "string")
        if (cachedData) {
            return;
        } else {
            console.log("hola")
          // Si no hay datos en la caché, realiza una carga inicial y guárdalos en la caché
          axios.get(/* 'https://sergi.lighthousemarketing.es/public/api/productall' */'http://localhost:8000/api/productall')
            .then(resp => {
                setProducts({
                    newData: resp.data.data
                })
                localStorage.setItem('storage', JSON.stringify(resp.data.data));
            })  
        }
      }, []);

      const dataObj = JSON.parse(localStorage.getItem('storage')); 
  
    return (

    <Container className="home">
        <Row>

            {
                !localStorage.getItem('storage') &&
                products.newData.map((prod, i) => (
                    <Col key={i} xs={6} sm={6} md={4} xl={2} className="img-fluid minw">
                        <ProductCard data={prod} key={i}/>
                    </Col>
                ))
            }
            {
                localStorage.getItem('storage') &&
                dataObj.map((prod, i)=>(
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