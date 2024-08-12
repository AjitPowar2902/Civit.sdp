import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card,Form } from "react-bootstrap";
import NavMenu from "../../components/NavMenu";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function Profile() {
    const navigate = useNavigate();
  const handlenext = (e) => {
    navigate("/editprofile");
  };
  return (
    <>
      
      <Container className="d-sm-block">
      <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
          <Breadcrumbs label={"Profile"}/>
          </Col>
        </Row>
        <Card className="mt-3 bg-gray box-shadow">
          <Card.Body >
            <Card.Text>
            <Row>
              <Col lg="6" md="6" sm="12">
                <h4>Profile</h4>
              </Col>
              <Col lg="6" md="6"  sm="12" className="t-right">
              <Form.Label className="form-label">Manage Password</Form.Label> &nbsp;
              <SecondaryButton label={"Edit Profile"} icon={<BsPencilSquare/>}  onClick={handlenext} / >
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
                <Col lg="4" md="4"  sm="12">
                <Form.Label className="form-label w-100 text-secondary"><FaRegUser className="me-2"/>Username</Form.Label>
                <Form.Label className="form-label w-100  fw-bold">Anurag.Jain</Form.Label>
                </Col>
                <Col lg="4" md="4"  sm="12">
                <Form.Label className="form-label w-100 text-secondary"><IoMailOutline className="me-2"/>Contact Email</Form.Label>
                <Form.Label className="form-label w-100  fw-bold">Anurag.Jain@gmail.com</Form.Label>
                </Col>
                <Col lg="4" md="4"  sm="12">
                <Form.Label className="form-label w-100 text-secondary"><MdAddCall className="me-2"/>Mobile Number</Form.Label>
                <Form.Label className="form-label w-100  fw-bold">+91-7047478705</Form.Label>
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
                <Col lg="12" md="12"  sm="12" className="mt-3">
                <Form.Label className="form-label w-100 text-secondary">Company Name</Form.Label>
                <Form.Label className="form-label fw-bold me-3">CodeHub Pvt. Ltd.</Form.Label>
                <a hrf="#" style={{cursor:"pointer"}} className="text-dark ">Apply to edit</a><FaArrowRightLong/>
                </Col>
                <Col lg="3" md="3"  sm="12" className="mt-3">
                <Form.Label className="form-label w-100 text-secondary">State</Form.Label>
                <Form.Label className="form-label w-100  fw-bold">Maharashtra</Form.Label>
                </Col>
                <Col lg="3" md="3"  sm="12" className="mt-3">
                <Form.Label className="form-label w-100 text-secondary">District</Form.Label>
                <Form.Label className="form-label w-100  fw-bold">Mumbai</Form.Label>
                </Col>
                <Col lg="3" md="3"  sm="12" className="mt-3">
                <Form.Label className="form-label w-100 text-secondary">City</Form.Label>
                <Form.Label className="form-label w-100  fw-bold">Andheri</Form.Label>
                </Col>
                <Col lg="3" md="3"  sm="12" className="mt-3">
                <Form.Label className="form-label w-100 text-secondary">Pin Code</Form.Label>
                <Form.Label className="form-label w-100  fw-bold">401 202</Form.Label>
                </Col>
                <Col lg="3" md="3"  sm="12" className="mt-3">
                <Form.Label className="form-label w-100 text-secondary">Company TIN</Form.Label>
                <Form.Label className="form-label w-100  fw-bold">2948715689</Form.Label>
                </Col>
                <Col lg="3" md="3"  sm="12" className="mt-3">
                <Form.Label className="form-label w-100 text-secondary">Company PAN</Form.Label>
                <Form.Label className="form-label w-100  fw-bold">BITPJ5343P</Form.Label>
                </Col>
                <Col lg="3" md="3"  sm="12" className="mt-3">
                <Form.Label className="form-label w-100 text-secondary">Company Phone Number</Form.Label>
                <Form.Label className="form-label w-100  fw-bold">+91 80-47478705</Form.Label>
                </Col>
                <Col lg="3" md="3"  sm="12" className="mt-3">
                <Form.Label className="form-label w-100 text-secondary">Company FAX Number</Form.Label>
                <Form.Label className="form-label w-100  fw-bold">+91 80-47478705</Form.Label>
                </Col>
                <Col lg="3" md="3"  sm="12" className="mt-3">
                <Form.Label className="form-label w-100 text-secondary">GSTIN</Form.Label>
                <Form.Label className="form-label w-100  fw-bold">23AAAPL1234CIZB</Form.Label>
                </Col>
                </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
