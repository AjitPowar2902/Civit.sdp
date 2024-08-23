import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import Modals from "../Modals/Modals.jsx";
import OTP from "../OTP.jsx";

const VerifyOtp = ({ isVisible, setIsVisible, message }) => {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      console.log("OTP submitted successfully");
    } catch (err) {
      console.error("Error during OTP verification:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modals
      label="Verify OTP"
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      size="md"
    >
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <OTP
            OTPLength={5}
            Count={10000}
            title={`Verify OTP to ${message}`}
            subtitle={`Enter the code we've sent via ${message === 'update mobile number' ? 'mobile number' : 'email address'}`}
            placeholder="*****"
            secure={false}
            disabled={false}
            otpType={"number"}
          />
          {error && <Form.Text className="text-danger">{error}</Form.Text>}
        </Form>
      </Modal.Body>
    </Modals>
  );
};

export default VerifyOtp;
