import React from "react"
import "./Header.css"
import { NavLink } from "react-router-dom"

const Header = props => {

    return (

        <div>
            <div className="header">
                HEADER
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
                    HOLAQUETAl
                </div>
            </div>
        </div>

    )
}

export default Header