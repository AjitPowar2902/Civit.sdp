import React, { useState } from "react";
import "../../styles/global.scss";
import { Form, Card, InputGroup, Row, Col, Button } from "react-bootstrap";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import loginServices from "../../services/login-services";
import SweetAlert from "../../components/SweetAlert";
export default function Login() {
  const [userData, setUserData] = useState({
    username:'',
    password:''
  });
  const [requestUser, setRequestUser] = useState([]);
  const navigate = useNavigate();
  const handlenext = async (e) => {
    e.preventDefault();
    console.log(userData);
    if (userData.username === "" ) {
      
      SweetAlert({
        type: "toast",
        options: {
          title: "Alert",
          text: "Please enter username",
          icon: "warning",
          timer: 3000,
        },
      });
      return false;
    }
    if ( userData.password === "") {
      
      SweetAlert({
        type: "toast",
        options: {
          title: "Alert",
          text: "Please enter password",
          icon: "warning",
          timer: 3000,
        },
      });
      return false;
    }
    var response = await loginServices.validateUser(userData);
    
    if(response == 200){
      SweetAlert({
        type: "toast",
        options: {
          title: "Success",
          text: "Welcome to Service Delivery Portal",
          icon: "success",
          timer: 2000,
        },
      });
        navigate("/Dashboard");
    }else{
      SweetAlert({
        type: "toast",
        options: {
          title: "Warning",
          text: "Please enter valid username and password",
          icon: "error",
          timer: 1500,
        },
      });
    }
    

   
  };

  return (
    <>
      <body className="bgLogin-linear" style={{ height: "100%" }}>
        <Row className="mr-0">
          <Col md="4" sm="12" lg="4"></Col>
          <Col md="4" sm="12" lg="4">
            <Card style={{ margin: "15% 0% 0% 0%" }} className="box-shadow">
              <Card.Body className="pl-2">
                <img
                  src="/images/CIVIT_Dark_Logo.png"
                  style={{ width: "35%" }}
                ></img>
                <h5 className="mt-3">Welcome to Service Delivery Portal</h5>
                <small className="text-muted">
                  Please fill the below details to authenticate and move forward
                  to the SWC Portal for Login.
                </small>
                <Row className="mr-0">
                  <Col sm="12" md="12" lg="12" className="mt-3">
                    <InputGroup size="lg">
                      <InputGroup.Text>
                        <MdAlternateEmail />
                      </InputGroup.Text>
                      <Form.Control
                        id="idUser"
                        placeholder="Enter Email Address"
                        onChange={(e) =>
                          setUserData({ ...userData, username: e.target.value })
                        }
                      />
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
                        onChange={(e) =>
                          setUserData({ ...userData, password: e.target.value })
                        }
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
            </Card>
          </Col>
          <Col md="4" sm="12" lg="4"></Col>
        </Row>
      </body>
    </>
  );
}
