import React from "react"
import { useState, useEffect } from "react"
import "./Home.css"
import axios from "axios"
import ProductCard from "../../Components/ProductCard/ProductCard"



const Home = (props) => {

    const [products, setProducts] = useState({
        prod: []
    })

    useEffect(() => {
        axios.get('https://ropaon.herokuapp.com/api/productall')
            .then(resp => {
                setProducts({
                    prod: resp.data.data
                })
            })

    }, [])


    return (
        <div className="home">
            <div>

                {
                    products.prod.map((prod) =>
                        <ProductCard data={prod} />
                    )
                }
            </div>
        </div>
    )
}

export default Home