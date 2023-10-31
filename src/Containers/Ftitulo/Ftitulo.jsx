import "./Ftitulo.css"
import { Container, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import ProductCard from "../../Components/ProductCard/ProductCard"
import { selectFiltra } from "./ftituloSlice"

const Ftitulo = (props) => {

    const ADIOS = useSelector(selectFiltra)

    if (ADIOS.isError.isError === "Error") {
        return (
            <Container className="ftituloe">
                Esa Prenda no existe
            </Container>
        )
    } else if (ADIOS.prod.prod === undefined) {
        return (
            <Container className="ftituloe">
                Hola Bienvenido a la tienda de ropa MAURA
            </Container>
        )
    }else{
        return (
            <Container className="ftitulo">
                <Row className="center">
                    {ADIOS.prod.prod.map((prod, i) => (
                        <Col key={i} xs={6} sm={6} md={4} xl={2} className="img-fluid minw">
                            <ProductCard data={prod} />
                        </Col>
                    ))
                    }
                </Row>
            </Container>
        )
    }
}

export default Ftitulo