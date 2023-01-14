import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './components.css';

function Modal_MoreInfo(props) {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  
  const handleClose = () => setShow(false);

  const handleShow = () => {

    props.getMoreInfo();
     
    setShow(true);
  };

  return (
    <>
      <Button className="MoreInfoButton" variant="primary" onClick={handleShow}>
        More Info
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>More Info about Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>director: {props.moreDetails.director}</p>

        {/* <h4>More Info!</h4> */}


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Add to List
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal_MoreInfo;
