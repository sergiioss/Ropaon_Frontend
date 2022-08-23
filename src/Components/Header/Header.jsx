import React from "react"
import "./Header.css"
import { NavLink, useNavigate } from "react-router-dom"
import img from "../../assets/logoProyecto.png"
import img2 from "../../assets/logocarrito.png"
import img3 from "../../assets/logologin.png"   

const Header = props => {

    const navegador = useNavigate();
    const cambioPagina = (event) => {
        if(event.key === "Enter") {
            /* dispatch(peliculasFiltradas(event.target.value)) */
            navegador("/ftitulo");
        }  
    }

    return (

        <div>
            <div className="header">
                <img className="logo" src={img} />
                <input className="listInput" onKeyPress={cambioPagina} placeholder="Busqueda por articulo..." type="text" name="titulo" />
                <img className="carrito" src={img2}/>
                <img className="login" src={img3}/>
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