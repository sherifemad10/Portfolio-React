import { Container, Row, Col } from "react-bootstrap";

 const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1 className="logo">Sherif Emad</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">            

            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;