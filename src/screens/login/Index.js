import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Container fluid>
        <Row>
            <Col md={8}>
                <Form.Control
                    type="text"
                    id="search"
                    placeholder="Search"
                />
            </Col>
            <Col md={4}>Config</Col>
        </Row>
    </Container>
  );
}

export default Login;