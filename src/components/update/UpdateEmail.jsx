import React, { useState } from "react";
import { Modal, Form, Card, Row, Col } from "react-bootstrap";
import Modals from "../Modals/Modals.jsx";
import SecondaryButton from "../buttons/SecondaryButton.jsx";
import PrimaryButton from "../buttons/PrimaryButton.jsx";

const UpdateEmail = ({ isVisible, setIsVisible, handleVerifyOtp }) => {
  const [Email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const previousEmail = "k@gmail.com";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Email) {
      setError("Please enter your email.");
      return;
    }

    if (Email === previousEmail) {
      setError("The new email cannot be the same as the previous one.");
      return;
    }

    if (!validateEmail(Email)) {
      setError("Please enter a valid email.");
      return;
    }

    setIsSubmitting(true);
    try {
      await handleVerifyOtp(); 
    } catch (err) {
      console.error("Error during verification:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modals
      label="Update Email"
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      size="md"
    >
      <Modal.Body>
        <Card className="text-center border-0">
          <Card.Body>
            <Row>
              <Col>
                <Card.Subtitle className="mb-3 text-muted">
                  Please enter your new email and verify it.
                </Card.Subtitle>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Enter new email"
                      value={Email}
                      onChange={handleEmailChange}
                      disabled={isSubmitting}
                    />
                    <Form.Text className="text-muted">
                      You will receive an OTP for authenticating your new email-id.
                    </Form.Text><br/>
                    {error && <Form.Text className="text-danger mt-2">{error}</Form.Text>}
                  </Form.Group>
                  <Row className="justify-content-center">
                    <Col xs="auto">
                      <SecondaryButton
                        onClick={() => setIsVisible(false)}
                        label="Cancel"
                        disabled={isSubmitting}
                        className="me-2"
                      />
                      <PrimaryButton
                        onClick={handleSubmit}
                        label={isSubmitting ? "Submitting..." : "Save & Continue"}
                        disabled={isSubmitting}
                      />
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modals>
  );
};

export default UpdateEmail;
