import React from "react";
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

export default function EditProfile() {
  const userData = useSelector(state => state.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
                  <h4>Edit Profile</h4>
                </Col>
              </Row>
              <Row className="mt-3 ">
                <Col
                  sm="12"
                  md="12"
                  lg="12"
                  className="d-flex align-items-center"
                >
                  <h5 className={"mb-0 me-3"}>Personal Details</h5>
                  <hr className="flex-grow-1 mt-3" />
                </Col>
              </Row>
              <Row className="mt-3 ">
                <Col lg="4" md="4" sm="12">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
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
                    <Form.Label className="form-label w-100 fw-bold">
                      <IoMailOutline className="me-2" />
                      Contact Email
                    </Form.Label>
                    <Form.Control placeholder="enter contact email" 
                    name="ContactEmail"
                    value={userData.ContactEmail || ''}
                      onChange={handleInputChange}/>
                  </Form.Group>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
                      <MdAddCall className="me-2" />
                      Mobile Number
                    </Form.Label>
                    <Form.Control
                     name="MobileNumber"
                     value={userData.MobileNumber || ''}
                     onChange={handleInputChange}
                      placeholder="enter mobile number" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3 ">
                <Col
                  sm="12"
                  md="12"
                  lg="12"
                  className="d-flex align-items-center"
                >
                  <h5 className={"mb-0 me-3"}>Company Details</h5>
                  <hr className="flex-grow-1 mt-3" />
                </Col>
              </Row>
              <Row>
                <Col lg="12" md="12" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
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
                    <Form.Label className="form-label w-100 fw-bold">
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
                    <Form.Label className="form-label w-100 fw-bold">
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
                    <Form.Label className="form-label w-100 fw-bold">
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
                    <Form.Label className="form-label w-100 fw-bold">
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
                    <Form.Label className="form-label w-100 fw-bold">
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
                    <Form.Label className="form-label w-100 fw-bold">
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
                    <Form.Label className="form-label w-100 fw-bold">
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
                    <Form.Label className="form-label w-100 fw-bold">
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
                    <Form.Label className="form-label w-100 fw-bold">
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
                    <Form.Label className="form-label w-100 fw-bold">
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
                <PrimaryButton label={"Save"} onClick={handleSave}/>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
