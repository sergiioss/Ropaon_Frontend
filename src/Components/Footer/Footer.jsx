import React from "react"
import "./Footer.css"
import img from "../../assets/logoProyecto.png"

const Footer = props => {

    return (

        <div className="footer">
            <div>
                <img className="logo" src={img}/>
            </div>
        </div>
    )
}

export default Footer