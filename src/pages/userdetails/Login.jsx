import React from "react";
import "../../styles/Global.scss";
import { Form, Card, InputGroup, Row, Col, Button } from "react-bootstrap";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import * as formik from "formik";
import * as Yup from "yup";

export default function Login() {
  const navigate = useNavigate();
  const handlenext = (e) => {
    navigate("/Dashboard");
  };

  const { Formik } = formik;
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });
  
  return (
    <>
      <body className="bgLogin-linear" style={{ height: "100%" }}>
        <Row className="mr-0">
          <Col md="4" sm="12" lg="4"></Col>
          <Col md="4" sm="12" lg="4">
            <Card style={{ margin: "15% 0% 0% 0%" }} className="box-shadow">
              <Formik
                initialValues={{ 
                  email: "",
                  password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log("Form values:", values);
                }}
              >{({handleChange, handleSubmit, values, errors, touched })=>(
                <Form onSubmit={handleSubmit}>
                    <Card.Body className="pl-2">
                  <img
                    src="/images/CIVIT_Dark_Logo.png"
                    style={{ width: "35%" }}
                  ></img>
                  <h5 className="mt-3">Welcome to Service Delivery Portal</h5>
                  <small className="text-muted">
                    Please fill the below details to authenticate and move
                    forward to the SWC Portal for Login.
                  </small>
                  <Row className="mr-0">
                    <Col sm="12" md="12" lg="12" className="mt-3">
                      <InputGroup size="lg">
                        <InputGroup.Text>
                          <MdAlternateEmail />
                        </InputGroup.Text>
                          <Form.Control
                            name="email"
                            type="email"
                            id="txtemail"
                            placeholder="Enter Email id..."
                            value={values.email}
                            onChange={handleChange}
                
                            isInvalid={touched.email && !!errors.email}
                          />
                          {touched.email && errors.email ? (
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          ) : null}
                      </InputGroup>
                    </Col>
                    <Col sm="12" md="12" lg="12" className="mt-3">
                      <InputGroup size="lg">
                        <InputGroup.Text>
                          <RiLockPasswordLine />
                        </InputGroup.Text>
                        <Form.Control
                          id="idPassword"
                          type="password"
                          placeholder="Enter Password"
                        />
                        <InputGroup.Text>
                          <FaRegEyeSlash />
                        </InputGroup.Text>
                      </InputGroup>
                    </Col>
                    <Col sm="12" md="12" lg="12" className="mt-3 t-right">
                      <a href="#" className="text-muted">
                        Forgot Password
                      </a>
                    </Col>
                    <Col sm="12" md="12" lg="12" className="mt-3 t-center">
                      <button
                        className="btn btn-gray w-100"
                        size="lg"
                        onClick={handlenext}
                        type="submit"
                      >
                        Login
                      </button>
                    </Col>
                    <Col sm="12" md="12" lg="12" className="mt-3 t-center">
                      Don't have an account yet?&nbsp;
                      <a className="text-muted">
                        <b>Register Now</b>
                      </a>
                    </Col>
                  </Row>
                </Card.Body>
                </Form>
              
              )}
                
              </Formik>
            </Card>
          </Col>
          <Col md="4" sm="12" lg="4"></Col>
        </Row>
      </body>
    </>
  );
}
