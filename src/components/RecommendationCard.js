import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function RecommendationCard(props) {
  const { name, Designation, Company, message } = props.recommendation;
  let newmessage;
  if (message.length > 25) {
    newmessage = message.slice(0, 25) + "...";
  } else {
    newmessage = message;
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-12 col-md-4 btn btn-outline-none mx-auto">
        <div className="card shadow h-100">
          <a onClick={handleShow}>
            <div className="card-body">
              <h4 className="card-text">{newmessage}</h4>
              <p className="card-text text-secondary mb-0">{name}</p>
              <p className="card-text text-secondary">
                {Designation} at {Company}
              </p>
            </div>
          </a>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title style={{ textAlign: "center" }}>{message}</Modal.Title>
          <button className="btn btn-close" onClick={handleClose}></button>
        </Modal.Header>
        <Modal.Body style={{ textAlign: "center" }}>
          {name}
          <br />
          {Designation} at {Company}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RecommendationCard;
