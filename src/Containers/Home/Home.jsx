import React from "react"
import { useState, useEffect } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import "./Home.css"
import axios from "axios"
import ProductCard from "../../Components/ProductCard/ProductCard"

const Home = (props) => {
    
    const dataObj = JSON.parse(localStorage.getItem('storage')); 
    const [products, setProducts] = useState({
        newData:[]
    })

    useEffect(() => {
        const cachedData = JSON.parse(localStorage.getItem('storage'));
        // Intenta cargar los datos desde el almacenamiento local
        if (cachedData) {
            return;
        } else {
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

  
    return (

    <Container className="home">
            {
                !localStorage.getItem('storage') &&
                products.newData.map((prod, i) => (
                    <Row key={i} className="img-fluid" >
                        <ProductCard data={prod} key={i}/>
                    </Row>
                ))
            }
            {
                localStorage.getItem('storage') &&
                dataObj.map((prod, i)=>(
                    <Row key={i} className="img-fluid">
                        <ProductCard data={prod} key={i}/>
                    </Row>
                ))
            }            
    </Container>
    )
}

export default Home