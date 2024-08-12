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

export default function EditProfile() {
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
                    <Form.Control placeholder="enter username" />
                  </Form.Group>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
                      <IoMailOutline className="me-2" />
                      Contact Email
                    </Form.Label>
                    <Form.Control placeholder="enter contact email" />
                  </Form.Group>
                </Col>
                <Col lg="4" md="4" sm="12">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
                      <MdAddCall className="me-2" />
                      Mobile Number
                    </Form.Label>
                    <Form.Control placeholder="enter mobile number" />
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
                    <Form.Control placeholder="enter company name" />
                  </Form.Group>
                </Col>
                <Col lg="12" md="12" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
                      Company Address
                    </Form.Label>
                    <Form.Control as="textarea" placeholder="enter company address" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
                      State
                    </Form.Label>
                    <Form.Control placeholder="enter state" />
                  </Form.Group>
                </Col>

                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
                      District
                    </Form.Label>
                    <Form.Control placeholder="enter district" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
                      City
                    </Form.Label>
                    <Form.Control placeholder="enter city" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
                      Pin Code
                    </Form.Label>
                    <Form.Control placeholder="enter pin code" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
                      Company TIN
                    </Form.Label>
                    <Form.Control placeholder="enter contact tin" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
                      Company PAN
                    </Form.Label>
                    <Form.Control placeholder="enter company pan number" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
                      Company Phone Number
                    </Form.Label>
                    <Form.Control placeholder="enter company phone number" />
                  </Form.Group>
                </Col>
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
                      Company FAX Number
                    </Form.Label>
                    <Form.Control placeholder="enter company fax number" />
                  </Form.Group>
                </Col>``
                <Col lg="3" md="3" sm="12" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label w-100 fw-bold">
                      GSTIN
                    </Form.Label>
                    <Form.Control placeholder="enter gst" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
