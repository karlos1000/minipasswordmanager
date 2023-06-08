import React from "react";
import { Button, Form, Modal } from 'react-bootstrap';

const FormPassword = ({showModal, closeModal}) => {
    return (
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Title Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="frmTitle">Title *:</Form.Label>
                        <Form.Control type="text" placeholder="" id="frmTitle" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Note:</Form.Label>
                        <Form.Control as="textarea" rows={3} id="frmNote"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Close</Button>
                <Button type="submit" variant="primary">Save Changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FormPassword;