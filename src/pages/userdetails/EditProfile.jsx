import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import NavMenu from "../../components/NavMenu";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Breadcrumbs from "../../components/Breadcrumbs";
import {useSelector,useDispatch} from 'react-redux'
import {setUserData} from '../../store/user-slice';
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import SweetAlert from "../../components/SweetAlert";
import UpdateMobileNo from "../../components/update/UpdateMobileNo";
import VerifyOtp from "../../components/update/VerifyOtp";
import UpdateEmail from "../../components/update/UpdateEmail";

export default function EditProfile() {
  const userData = useSelector(state => state.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null);
  const [isVerifyOtpVisible, setVerifyOtpVisible] = useState(false);
  const [otpMessage, setOtpMessage] = useState('');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserData({ ...userData, [name]: value }));
  };

  const handleSave = () =>
  {
    SweetAlert({
      type: "confirmation",
      options: {
        title: "Do you want to save?",
        text: "please ensure changed details before saving",
        confirmButtonText:"Save",
        cancelButtonText:"Cancel"
      },
      onConfirm: ()=>{
        navigate('/profile');
      }
    });
    //
  }


  const openModal = (type) => {
    setModalType(type);
    setOtpMessage(type === 'mobile' ? 'update mobile number' : 'update email address');
  };

  const closeModal = () => {
    setModalType(null);
  };

  const handleVerifyOtp = () => {
    closeModal();
    setVerifyOtpVisible(true);
  };

  const handleSuccessMessage = () => {
    setVerifyOtpVisible(false);
  };


  return (
    <>
       
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
            <Breadcrumbs label={"Edit Profile"} />
          </Col>
        </Row>
        <Card className="mt-3 box-shadow">
          <Card.Body>
            <Card.Text>
              <Row>
                <Col lg="12" md="12" sm="12">
                  <h4 className="txt-primary">Edit Profile</h4>
                </Col>
              </Row>
              <Row className="mt-3 ">
                <Col
                  sm="12"
                  md="12"
                  lg="12"
                  className="d-flex align-items-center"
                >
                  <h5 className={"mb-0 me-3 txt-primary"}>Personal Details</h5>
                  <hr className="flex-grow-1 mt-3 txt-primary" />
                </Col>
              </Row>
              <Row className="mt-3 ">
                <Col lg="4" md="4" sm="12">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      <FaRegUser className="me-2" />
                      Username
                    </Form.Label>
                    <Form.Control    name="username"
                    
                      value={userData.username || ''}
                      onChange={handleInputChange}
                      placeholder="enter username" />
                  </Form.Group>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      <IoMailOutline className="me-2" />
                      Contact Email
                    </Form.Label>
                    <Form.Control placeholder="enter contact email" 
                    name="ContactEmail"
                    value={userData.ContactEmail || ''}
                      onChange={handleInputChange}/>
                  </Form.Group>
                  <a href="#" onClick={() => openModal('email')} className="fw-bold text-dark text-decoration-none">
                    Update Email
                  </a>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      <MdAddCall className="me-2" />
                      Mobile Number
                    </Form.Label>
                    <Form.Control
                     name="MobileNumber"
                     value={userData.MobileNumber || ''}
                     onChange={handleInputChange}
                      placeholder="enter mobile number" />
                  </Form.Group>
                  <a href="#" onClick={() => openModal('mobile')}  className="fw-bold text-dark text-decoration-none">
                    Update Mobile Number
                  </a>
                </Col>
              </Row>
              <Row className="mt-3 ">
                <Col
                  sm="12"
                  md="12"
                  lg="12"
                  className="d-flex align-items-center"
                >
                  <h5 className={"mb-0 me-3 txt-primary"}>Company Details</h5>
                  <hr className="flex-grow-1 mt-3" />
                </Col>
              </Row>
              <Row>
                <Col lg="12" md="12" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      Company Name
                    </Form.Label>
                    <Form.Control 
                     name="CompanyName"
                     value={userData.CompanyName || ''}
                     onChange={handleInputChange}
                      placeholder="enter company name" />
                  </Form.Group>
                </Col>
                <Col lg="12" md="12" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      Company Address
                    </Form.Label>
                    <Form.Control as="textarea" 
                     name="Address"
                     value={userData.Address || ''}
                     onChange={handleInputChange}
                      placeholder="enter company address" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      State
                    </Form.Label>
                    <Form.Control 
                     name="State"
                     value={userData.State || ''}
                     onChange={handleInputChange}
                      placeholder="enter state" />
                  </Form.Group>
                </Col>

                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      District
                    </Form.Label>
                    <Form.Control 
                      name="District"
                      value={userData.District || ''}
                      onChange={handleInputChange}
                       placeholder="enter district" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      City
                    </Form.Label>
                    <Form.Control 
                     name="CityTown"
                     value={userData.CityTown || ''}
                     onChange={handleInputChange}
                     placeholder="enter city" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      Pin Code
                    </Form.Label>
                    <Form.Control 
                      name="Pincode"
                      value={userData.Pincode || ''}
                      onChange={handleInputChange}
                      placeholder="enter pin code" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      Company TIN
                    </Form.Label>
                    <Form.Control 
                    name="CompanyTIN"
                    value={userData.CompanyTIN || ''}
                    onChange={handleInputChange}
                    placeholder="enter contact tin" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      Company PAN
                    </Form.Label>
                    <Form.Control 
                     name="CompanyPAN"
                     value={userData.CompanyPAN || ''}
                     onChange={handleInputChange}
                     placeholder="enter company pan number" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      Company Phone Number
                    </Form.Label>
                    <Form.Control 
                     name="CompanyPhoneNumber"
                     value={userData.CompanyPhoneNumber || ''}
                     onChange={handleInputChange}
                     placeholder="enter company phone number" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      Company FAX Number
                    </Form.Label>
                    <Form.Control 
                     name="CompanyFaxNo"
                     value={userData.CompanyFaxNo || ''}
                     onChange={handleInputChange}
                     placeholder="enter company fax number" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold txt-secondary">
                      GSTIN
                    </Form.Label>
                    <Form.Control 
                     name="GSTIN"
                     value={userData.GSTIN || ''}
                     onChange={handleInputChange}
                     placeholder="enter gst" />
                  </Form.Group>
                </Col>
              
              </Row>
              <Row>
              <Col lg="12" md="12" sm="12" className="mt-3 text-center">
                <PrimaryButton label={"Save"} onClick={handleSave} className={"btn-large"}/>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      {modalType === 'mobile' && (
        <UpdateMobileNo
          isVisible={modalType === 'mobile'}
          setIsVisible={closeModal}
          handleVerifyOtp={handleVerifyOtp}
        />
      )}
      {modalType === 'email' && (
        <UpdateEmail
          isVisible={modalType === 'email'}
          setIsVisible={closeModal}
          handleVerifyOtp={handleVerifyOtp}
        />
      )}
      <VerifyOtp
        isVisible={isVerifyOtpVisible}
        setIsVisible={setVerifyOtpVisible}
        handleSuccess={handleSuccessMessage}
        message={otpMessage}
      />
    </>
  );
}
