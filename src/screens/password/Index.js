import React, {useState} from 'react';
import './Style.css'
import { Container, Row, Col, ListGroup, Button} from 'react-bootstrap';
import FormPassword from '../../components/FormPassword';

const Password = () => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    }

    const openModal = () => {
        setShowModal(true);
    }

    return (
        <Container className="mainWrapper">
            <Row className="titleAddPassword">
                <Col md={9} className="mainTitleContainer">Passwords</Col>
                <Col md={3} className="addPasswordContainer">
                    <Button variant='success' onClick={()=>openModal()}>Add Password</Button>
                </Col>
            </Row>
            <Row className="passwordList">
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row className='bold'>
                            <Col md={8}>Title</Col>
                            <Col md={4}>Action</Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup variant="flush">
                    <ListGroup.Item className='border_top'>
                        <Row className=''>
                            <Col md={8}>Cuenta 1</Col>
                            <Col md={4}>Copiar | Pegar</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className='border_top'>
                        <Row className=''>
                            <Col md={8}>Cuenta 2</Col>
                            <Col md={4}>Copiar | Pegar</Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Row>

            <FormPassword showModal={showModal} closeModal={closeModal} />
        </Container>
    )
}

export default Password;