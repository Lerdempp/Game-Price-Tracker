import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [show,setShow] = useState(false);
    const navigate = useNavigate();

    const handleCheckout = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        navigate('/');
    };

    return (
        <div className='container mt-5'>
            <h2>Checkout</h2>
            <Button variant="success" onClick={handleCheckout}>
                Complete Purchase
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Received</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your order has been received successfully!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>            
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Checkout