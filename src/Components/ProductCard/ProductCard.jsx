import React from "react";
import './ProductCard.css'

const ProductCard = props => {
    
    return (
        <div className="Productcard">
            <div className="product">
                
                
                {
                props.data
                /* <div>
                <strong className="ntitulo">{}</strong><br></br>;
                </div> 
                <strong className="ntitulo">{props.data.products.name}</strong><br></br>
                <br></br><img className="products" src={props.data.name}></img><br></br>
                <strong>Precio:</strong> {props.data.size}<br></br> 
                <strong>Color:</strong> {props.data.product_price}
                <strong>Color:</strong> {props.data.color} 
                <strong>Color:</strong> {props.data.gender}
                <strong>Color:</strong> {props.data.url}  */}
                    
            </div>
        </div>
    )
}

export default ProductCard