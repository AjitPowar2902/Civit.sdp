import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import Modals from "../../components/Modals";
import { current } from "@reduxjs/toolkit";
import {useSelector} from 'react-redux'

const CurrentPassword = ({
  isVisible,
  setIsVisible,
  handleNewPassword,
}) => {
  const userData = useSelector(state => state.user.userData);
  const [password, setPassword] = useState("");
  //const username = "admin";
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError(""); // Clear error if user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.get(
        `http://localhost:3006/users?password=${password}`
      );
      console.log("API Response:", response);
      const currentPassword = response.data;

      console.log(currentPassword)
      console.log(userData.password);
      console.log(userData.username);
      // Validate user based on response
      const validUser = currentPassword.find(u =>
        u.password === userData.password && u.username === userData.username
      );
      console.log(validUser);
      if (validUser) {
        handleNewPassword();
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modals
      label="Enter Current Password"
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      size="md"
    >
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCurrentPassword">
            <Form.Label>
              Current Password <span style={{ color: 'red' }}>*</span>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              isInvalid={!!error}
            />
            {error && (
              <Form.Control.Feedback type="invalid">
                {error}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            disabled={!password || isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Continue"}
          </Button>
        </Form>
      </Modal.Body>
    </Modals>
  );
};

export default CurrentPassword;
