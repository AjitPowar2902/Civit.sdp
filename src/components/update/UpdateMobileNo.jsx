import React, { useState } from "react";
import { Modal, Form, Card, Row, Col } from "react-bootstrap";
import Modals from "../Modals/Modals.jsx";
import SecondaryButton from "../buttons/SecondaryButton.jsx";
import PrimaryButton from "../buttons/PrimaryButton.jsx";

const UpdateMobileNo = ({ isVisible, setIsVisible, handleVerifyOtp }) => {
  const [mobileNo, setMobileNo] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const previousMobileNo = "9755779290";

  const handleMobileNoChange = (e) => {
    setMobileNo(e.target.value);
    if (error) setError("");
  };

  const validateMobileNo = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mobileNo) {
      setError("Please enter your mobile number.");
      return;
    }

    if (mobileNo === previousMobileNo) {
      setError("The new mobile number cannot be the same as the previous one.");
      return;
    }

    if (!validateMobileNo(mobileNo)) {
      setError("Please enter a valid mobile number.");
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
      label="Update Mobile Number"
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
                  Please enter your new mobile number and verify it.
                </Card.Subtitle>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicMobileNo" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Enter new mobile number"
                      value={mobileNo}
                      onChange={handleMobileNoChange}
                      disabled={isSubmitting}
                    />
                    <Form.Text className="text-muted">
                      You will receive an OTP for authenticating your new mobile number.
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

export default UpdateMobileNo;
