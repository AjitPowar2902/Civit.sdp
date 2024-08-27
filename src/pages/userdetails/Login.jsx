import React, { useState } from "react";
import "../../styles/global.scss";
import {useDispatch} from 'react-redux';
import { Form, Card, InputGroup, Row, Col, Button } from "react-bootstrap";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import loginServices from "../../services/login-services";
import SweetAlert from "../../components/SweetAlert";
import {setRole,setUserData,setUserId} from '../../store/user-slice'
import { roleConfig } from "../../config/role-config";

import Modals from "../../components/Modals";
import EditProfile from "./EditProfile";
import OTP from "../../components/OTP";
export default function Login() {
  const [Data, setData] = useState({
    username:'',
    password:''
  });
  const [requestUser, setRequestUser] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handlenext = async (e) => {
    e.preventDefault();
    //console.log(userData);
    if (Data.username === "" ) {
      
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
    if ( Data.password === "") {
      
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
    try {
      
      //const response = await loginServices.validateUser(Data);
        const response = await loginServices.validateLogin(Data);
        const  RoleId  = response.RoleID;
        var roleName = null;
        const UserId = response.UserId;
     console.log(response);
      // console.log(response.RoleID);
      // console.log(response.UserId);
      
      if (response && response.RoleID) {
        
       
        console.log('Role ID:', RoleId);
        const role = roleConfig.find(role => role.roleId === RoleId);
        if (role) {
           roleName = role.roleName;
          // console.log('Role Name:', roleName);
          // You can now use roleName as needed
        } else {
          console.log('Role ID not found in roleConfig');
        }



     dispatch(setRole(roleName));
     console.log('User Id', UserId);
     dispatch(setUserId(UserId));
     dispatch(setUserData(response));
     
        
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
      } else {
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
    } catch (error) {
      SweetAlert({
        type: "toast",
        options: {
          title: "Error",
          text: "An error occurred while logging in",
          icon: "error",
          timer: 1500,
        },
      });
    }

   
  };
 const [eyeisVisible, setEyeVisible] = useState(false);
  const[isVisible,setIsVisible]=useState(false);

  const openModals = () => {
    setIsVisible(true);
  };
  const toggle = () => {
    setEyeVisible(!eyeisVisible);
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
                          setData({ ...Data, username: e.target.value })
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
                      type={!eyeisVisible ? "password" : "text"}
                        placeholder="Enter Password"
                        onChange={(e) =>
                          setData({ ...Data, password: e.target.value })
                        }
                      />
                    <InputGroup.Text onClick={toggle}>
                    {eyeisVisible ? <FaRegEye/> : < FaRegEyeSlash />}
                      
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
                    Don't have an account yet?&nbsp;<a className="text-muted"  onClick={openModals}><b>Register Now</b></a>
                    </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4" sm="12" lg="4"></Col>
        </Row>
        <Row>
         { isVisible && <Modals label="" isVisible={isVisible} setIsVisible={setIsVisible} size="md" fullscreen={false}>
         <OTP OTPLength={5} Count={6000}/>
          </Modals>}
        </Row>
      </body>
    </>
  );
}
