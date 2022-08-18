import React from "react"
import "./Header.css"
import { NavLink } from "react-router-dom"
import img from "../../assets/logoProyecto.png"

const Header = props => {

    return (

        <div>
            <div className="header">
                <img className="logo" src={img} />
            </div>
            <div className="menu">
                <div className="submenu">
                    <NavLink className="navlink" to="/">Home</NavLink>
                </div>
                <div className="submenu">
                    <NavLink className="navlink" to="/female">Mujer</NavLink>
                </div>
                <div className="submenu">
                    <NavLink className="navlink" to="/male">Hombre</NavLink>
                </div>
                <div className="submenu">
                    <NavLink className="navlink" to="/boy">Niño</NavLink>
                </div>
            </div>
        </div>

    )
}

export default Header