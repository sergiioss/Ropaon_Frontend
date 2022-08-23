import React from "react"
import { useState, useEffect } from "react"
import "./Home.css"
import axios from "axios"
import ProductCard from "../../Components/ProductCard/ProductCard"



const Home = (props) => {

    const [products, setProducts] = useState({
        prod: ""
    })
        console.log(products.prod)
    useEffect(() => {
        axios.get('https://ropaon.herokuapp.com/api/productall')
            .then(resp => {
                setProducts({
                    prod: [resp.data.data]
                })
                /* const pal = products.prod[0].data */
                console.log(resp.data.data)
                console.log('hola')
            })

    }, [])
    
    
    return (
        <div className="home">
            <div>
                
                {
                    products.prod[0].map((index, prod)=> (
                        <ProductCard key={index} data={prod}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Home