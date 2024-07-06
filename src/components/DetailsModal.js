import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DetailsModal = ({ show, onHide, file }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>File Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {file && (
          <img src={file.imageUrl} alt={file.name} style={{ maxWidth: '100%' }} />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailsModal;