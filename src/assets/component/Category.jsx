import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container d-flex align-items-center">
        <h6 style={{color:"orange", textShadow:"inherit", fontWeight:"bold",fontSize:"35px" }}>All Category</h6>
        <button onClick={handleShow} className="btn btn-danger ms-3">
          <i className="fa-solid fa-plus" style={{ color: 'white' }}></i>
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h6 style={{color:"orange", textShadow:"inherit", fontWeight:"bold",fontSize:"35px" }}>All Category</h6></Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category;

