import React from "react"
import "./Header.css"
import { NavLink, useNavigate } from "react-router-dom"
import img from "../../assets/logoProyecto.png"
import img2 from "../../assets/logocarrito.png"
import img3 from "../../assets/logologin.png"
import { useSelector, useDispatch } from "react-redux"
import { selectDatosUsuario } from "../../Containers/User/userSlice"
import { productos } from "../../Containers/Ftitulo/ftituloSlice"
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


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
                <Col className="header">
                    <Col xs={4} sm={4} md={3} lg={2}>
                        <img className="logo" src={img} />
                    </Col>
                    <Col xs={3} sm={4} md={3} lg={4}>
                        <input className="listInput" onKeyPress={changePage} placeholder="Busqueda por articulo..." type="text" name="titulo" />
                    </Col>
                    <Col xs={4} sm={1} md={3} lg={5}>
                        <img className="carrito" src={img2}></img>
                    </Col>
                    <Col xs={1} sm={4} md={3} lg={1}>
                        <NavLink className="ilogin" to="/login"><img className="login" src={img3} /></NavLink>
                    </Col>
                </Col>
                <Nav variant="pills" className="navMenu">
                    <Nav.Item className="submenu">
                        <NavLink className="navlink" to="/">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item className="submenu">
                        <NavLink className="navlink" to="/female">Mujer</NavLink>
                    </Nav.Item>
                    <Nav.Item className="submenu">
                        <NavLink className="navlink" to="/male">Hombre</NavLink>
                    </Nav.Item>
                </Nav>
            </div>
        )
    } else if (credenciales.user.id === 7) {
        return (
            <div>
                <Col className="header">
                    <Col xs={4} sm={4} md={3} lg={2}>
                        <img className="logo" src={img} />
                    </Col>
                    <Col xs={3} sm={4} md={2} lg={3}>
                        <input className="listInput" onKeyPress={changePage} placeholder="Busqueda por articulo..." type="text" name="titulo" />
                    </Col>
                    <Col xs={4} sm={1} md={3} lg={2}>
                        <NavLink to="/Purchase"><img className="carrito" src={img2}></img></NavLink>
                    </Col>
                    <Col xs={4} sm={1} md={1} lg={2}>
                        <NavLink className="navlinkp" to="/admin">Admin</NavLink>
                    </Col>
                    <Col xs={4} sm={1} md={3} lg={3}>
                        <span>Bienvenido, {credenciales.user.name}<br></br>
                            <NavLink className="navlinkp" to="/Profile">Mi perfil</NavLink></span>
                    </Col>
                </Col>
                <Nav variant="pills" className="navMenu">
                    <Nav.Item className="submenu">
                        <NavLink className="navlink" to="/">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item className="submenu">
                        <NavLink className="navlink" to="/female">Mujer</NavLink>
                    </Nav.Item>
                    <Nav.Item className="submenu">
                        <NavLink className="navlink" to="/male">Hombre</NavLink>
                    </Nav.Item>
                </Nav>
            </div>
        )
    } else {
        return (
            <div>
                <Col className="header">
                    <Col xs={4} sm={4} md={3} lg={2}>
                        <img className="logo" src={img} />
                    </Col>
                    <Col xs={5} sm={4} md={2} lg={4}>
                        <input className="listInput" onKeyPress={changePage} placeholder="Busqueda por articulo..." type="text" name="titulo" />
                    </Col>
                    <Col xs={1} sm={2} md={4} lg={4}>
                        <NavLink to="/Purchase"><img className="carrito" src={img2}></img></NavLink>
                    </Col>
                    <Col xs={3} sm={2} md={3} lg={2}>
                        <span>Bienvenido, {credenciales.user.name}<br></br>
                            <NavLink className="navlinkp" to="/Profile">Mi perfil</NavLink></span>
                    </Col>
                </Col>
                <Nav variant="pills" className="navMenu">
                    <Nav.Item className="submenu">
                        <NavLink className="navlink" to="/">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item className="submenu">
                        <NavLink className="navlink" to="/female">Mujer</NavLink>
                    </Nav.Item>
                    <Nav.Item className="submenu">
                        <NavLink className="navlink" to="/male">Hombre</NavLink>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Header