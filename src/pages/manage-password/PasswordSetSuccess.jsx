// SuccessPopup.jsx
import React from "react";
import Modals from "../../components/Modals";
import { Modal, Card } from "react-bootstrap";


export default function PasswordSetSuccess({ isVisible, setIsVisible }) {
  return (
    <Modals isVisible={isVisible} setIsVisible={setIsVisible} size="md">
      <Modal.Body>
        <h1 className="card-title fw-bolder text-center text-success">
          Success
        </h1>
        <p className="text-center fw-bolder ">
          Your Password Has Been reset Successfully
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-success text-center"
          onClick={() => setIsVisible(false)}
        >
          Close
        </button>
      </Modal.Footer>
    </Modals>
  );
}
