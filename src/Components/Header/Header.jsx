import React from "react"
import "./Header.css"
import { NavLink, useNavigate } from "react-router-dom"
import img from "../../assets/logoProyecto.png"
import img2 from "../../assets/logocarrito.png"
import img3 from "../../assets/logologin.png"
import { useSelector, useDispatch } from "react-redux"
import { selectDatosUsuario } from "../../Containers/User/userSlice"
import { productos } from "../../Containers/Ftitulo/ftituloSlice"
import { Nav, Col, Row, Container } from 'react-bootstrap'

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
            <Container fluid className="header">
                <Row className="nav">
                    <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                        <img className="components maura" src={img} />
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                        <input className="components input" onKeyPress={changePage} placeholder="Busqueda por articulo..." type="text" name="titulo" />
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                        <img className="components car" src={img2}></img>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                        <NavLink to="/login"><img className="components login" src={img3} /></NavLink>
                    </Col>
                </Row>
                <Row className="nav2">
                    <Col xs={12} sm={4} md={3} lg={3} xl={3} xxl={3}>
                        <NavLink className="lin" to="/">
                            <div >Home</div>
                        </NavLink>
                    </Col>
                    <Col xs={12} sm={4} md={3} lg={3} xl={3} xxl={3}>
                        <NavLink className="lin" to="/female">
                            <div >Mujer</div>
                        </NavLink>
                    </Col>
                    <Col xs={12} sm={4} md={3} lg={3} xl={3} xxl={3}>
                        <NavLink className="lin" to="/male">
                            <div >Hombre</div>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        )
    } else if (credenciales.user.id === 7) {
        return (
            <Container fluid className="header">
                <Row className="nav">
                    <Col xs={12} sm={12} md={2} lg={3} xl={2} xxl={2}>
                        <img className="components maura" src={img} />
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={2} xxl={2}>
                        <input className="components input" onKeyPress={changePage} placeholder="Busqueda por articulo..." type="text" name="titulo" />
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2}>
                        <NavLink to="/purchase"><img className="components car" src={img2} /></NavLink>
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} xl={3} xxl={3}>
                        <NavLink className="components ad" to="/admin">Admin</NavLink>
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} xl={3} xxl={3}>
                        <span>Bienvenido, {credenciales.user.name}<br></br>
                            <NavLink className="components pro" to="/Profile">Mi perfil</NavLink></span>
                    </Col>
                </Row>
                <Row className="nav2">
                    <Col xs={12} sm={4} md={3} lg={3} xl={3} xxl={3}>
                        <NavLink className="lin" to="/">
                            <div >Home</div>
                        </NavLink>
                    </Col>
                    <Col xs={12} sm={4} md={3} lg={3} xl={3} xxl={3}>
                        <NavLink className="lin" to="/female">
                            <div >Mujer</div>
                        </NavLink>
                    </Col>
                    <Col xs={12} sm={4} md={3} lg={3} xl={3} xxl={3}>
                        <NavLink className="lin" to="/male">
                            <div >Hombre</div>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container fluid className="header">
                <Row className="nav">
                    <Col xs={6} sm={6} md={6} lg={2} xl={2} xxl={2}>
                        <img className="components maura" src={img} />
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3}>
                        <input className="components input" onKeyPress={changePage} placeholder="Busqueda por articulo..." type="text" name="titulo" />
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={2} xl={2} xxl={2}>
                        <NavLink to="/purchase"><img className="components car" src={img2} /></NavLink>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={2} xl={2} xxl={2}>
                        <NavLink to="/login"><img className="components login" src={img3} /></NavLink>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={3} xl={3} xxl={3}>
                        <span>Bienvenido, {credenciales.user.name}<br></br>
                            <NavLink className="components mypro" to="/Profile">Mi perfil</NavLink></span>
                    </Col>
                </Row>
                <Row className="nav2">
                    <Col xs={12} sm={4} md={3} lg={3} xl={3} xxl={3}>
                        <NavLink className="lin" to="/">
                            <div >Home</div>
                        </NavLink>
                    </Col>
                    <Col xs={12} sm={4} md={3} lg={3} xl={3} xxl={3}>
                        <NavLink className="lin" to="/female">
                            <div >Mujer</div>
                        </NavLink>
                    </Col>
                    <Col xs={12} sm={4} md={3} lg={3} xl={3} xxl={3}>
                        <NavLink className="lin" to="/male">
                            <div >Hombre</div>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Header