import React from "react"
import "./Header.css"
import { NavLink, useNavigate } from "react-router-dom"
import img from "../../assets/logoProyecto.png"
import img2 from "../../assets/logocarrito.png"
import img3 from "../../assets/logologin.png"
import { useSelector, useDispatch } from "react-redux"
import { selectDatosUsuario } from "../../Containers/User/userSlice"
import { productos } from "../../Containers/Ftitulo/ftituloSlice"



const Header = props => {

    const navegador = useNavigate();
    const credenciales = useSelector(selectDatosUsuario);
    const dispatch = useDispatch();

    const changePage = (event) => {
        if (event.key === "Enter") {
            dispatch(productos(event.target.value))
            navegador("/ftitulo");
        }
    }

    if (!credenciales?.token) {

        return (

            <div>
                <div className="header">
                    <img className="logo" src={img} />
                    <input className="listInput" onKeyPress={changePage} placeholder="Busqueda por articulo..." type="text" name="titulo" />
                    <img className="carrito" src={img2}></img>
                    <NavLink className="ilogin" to="/login"><img className="login" src={img3} /></NavLink>
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
    }else{
        return(
        <div>
                <div className="header">
                    <img className="logo" src={img} />
                    <input className="listInput" onKeyPress={changePage} placeholder="Busqueda por articulo..." type="text" name="titulo" />
                    <NavLink to="/Purchase"><img className="carrito" src={img2}></img></NavLink>
                    <span>Bienvenido, {credenciales.user.name}<br></br>
                    <NavLink className="navlinkp" to="/Profile">Mi perfil</NavLink></span>
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
}

    export default Header