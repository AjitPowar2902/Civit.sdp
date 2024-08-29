import React, { useState } from "react";
import axios from "axios";
import Modals from "../../components/Modals";
import { Modal, Button, Form, Alert } from "react-bootstrap";  
import "../../styles/Global.scss"
//import "../../styles/forgot password/newpassword.scss"

const NewPassword = ({ isVisible, setIsVisible, handleSuccessMessage }) => {
  const username = "admin";
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const passwordCriteria = {
    length: newPassword.length >= 8,
    lowercase: /[a-z]/.test(newPassword),
    uppercase: /[A-Z]/.test(newPassword),
    number: /[0-9]/.test(newPassword),
    specialChar: /[!@#$%^&*]/.test(newPassword),
  };

  const isPasswordValid =
    passwordCriteria.length &&
    passwordCriteria.lowercase &&
    passwordCriteria.uppercase &&
    passwordCriteria.number &&
    passwordCriteria.specialChar;

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
    setError(""); // Clear errors on new input
    setShowValidation(true); // Show validation when user starts typing
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError(""); // Clear errors on new input
  };

  const handleSubmit = async () => {
    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!isPasswordValid) {
      setError("Password does not meet the criteria.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.get(
        `http://localhost:3006/users?username=${username}`
      );
      const user = response.data.find((u) => u.username === username);

      if (user) {
        await axios.patch(`http://localhost:3006/users/${user.id}`, {
          password: newPassword,
        });
        handleSuccessMessage(); // Trigger the success message
      } else {
        setError("User not found.");
      }
    } catch (err) {
      console.error("Error updating password:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modals
      label="Enter New Password"
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      size="md"
    >
      <Modal.Body>
        <Form noValidate>
          <Form.Group controlId="formNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              value={newPassword}
              onChange={handlePasswordChange}
              placeholder="Enter new password"
              isInvalid={showValidation && !isPasswordValid}
              isValid={isPasswordValid}
            />
            {showValidation && (
              <>
                <Form.Text
                  className={passwordCriteria.length ? "text-success" : "text-danger"}
                >
                  Password should be at least 8 characters long
                </Form.Text>
                <br />
                <Form.Text
                  className={passwordCriteria.lowercase ? "text-success" : "text-danger"}
                >
                  Should have at least one lowercase letter
                </Form.Text>
                <br />
                <Form.Text
                  className={passwordCriteria.uppercase ? "text-success" : "text-danger"}
                >
                  Should have at least one uppercase letter
                </Form.Text>
                <br />
                <Form.Text
                  className={passwordCriteria.number ? "text-success" : "text-danger"}
                >
                  Should have at least one number
                </Form.Text>
                <br />
                <Form.Text
                  className={passwordCriteria.specialChar ? "text-success" : "text-danger"}
                >
                  Should have at least one special character
                </Form.Text>
              </>
            )}
            <Form.Control.Feedback type="invalid">
              Password does not meet the criteria.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm new password"
              isInvalid={!!error || confirmPassword !== newPassword}
              isValid={confirmPassword && confirmPassword === newPassword}
            />
            <Form.Control.Feedback type="invalid">
              {confirmPassword !== newPassword ? "Passwords do not match." : error}
            </Form.Control.Feedback>
            {error && <Alert variant="danger">{error}</Alert>}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setIsVisible(false)}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Reset Password"}
        </Button>
      </Modal.Footer>
    </Modals>
  );
};

export default NewPassword;
