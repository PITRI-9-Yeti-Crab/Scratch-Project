import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import UserLogin from './UserLogin';
import UserSignup from './UserSignup';

function Modal_Login() {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary btn-lg" onClick={handleShow}>
        Login!!
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title><h1>Login!!</h1></Modal.Title>
        </Modal.Header> */}
        <Modal.Body>

            <UserLogin />

            <UserSignup />

        </Modal.Body>

      </Modal>
    </>
  );
}

export default Modal_Login;
