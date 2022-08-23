import React from "react";
import './ProductCard.css'

const ProductCard = props => {

    return (
        <div className="Productcard">
            <div className="product">
                <h1>{props.data.name}</h1>
                <img className="foto" src={props.data.url}/>
                <h3>Talla: {props.data.size}</h3>
                <h3>Color: {props.data.color}</h3>
            </div>
        </div>
    )
}

export default ProductCard