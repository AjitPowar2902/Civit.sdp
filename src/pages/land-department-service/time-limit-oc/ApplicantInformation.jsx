import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Card, Form } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Breadcrumbs from "../../../components/Breadcrumbs";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { ObtainingOCContext } from "./obtainingOC-context";
import Dropzone from "../../../components/Dropzone";
const ApplicantInformation = () => {
  const navigate = useNavigate();
  const context = useContext(ObtainingOCContext);

  console.log(context);
  if (!context) {
    throw new Error('ApplicantInformation must be used within an ObtainingOCContext.Provider');
  }

  const { currentStep, setCurrentStep } = context;

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleBack = () => {
    navigate("/raiseservicerequest");
  };
  return (
    <>
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
            <Breadcrumbs
              label={
                "Services / Application for grant of Extention of Time Limit of obtaining OC"
              }
            />
          </Col>
        </Row>
        <Row className="mt-3" style={{ height: "auto" }}>
          <ListGroup
            horizontal
            className="d-flex container"
            style={{ height: "auto" }}
          >
            <ListGroup.Item style={{ width: "50%" }}>
              fields marked with (*) are Mandatory
            </ListGroup.Item>

            <ListGroup.Item style={{ width: "50%" }}>
              View List of Required Documents
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>
      <Container className="d-sm-block">
        <Card className="mt-3 box-shadow">
          <Card.Header className="bg-gray">
            <h4>Applicant Information</h4>
            <small className="text-muted">time requires 3 mins</small>
          </Card.Header>
          <Form>
            <Card.Body>
              <Card.Text>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="eg. Bharat Jadhav"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Role of Applicant</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Company Employee"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email Id</Form.Label>
                      <Form.Control type="email" placeholder="adbc@gmail.com" />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="number" placeholder="9876543210" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Telephone Number</Form.Label>
                      <Form.Control type="number" placeholder="02564-764853" />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Education Qualification</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mention Education Qualification"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Special Category</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Special Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Education Qualification</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mention Education Qualification"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Address Line 1</Form.Label>
                      <Form.Control type="text" placeholder="xyz address" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Address Line 2</Form.Label>
                      <Form.Control type="text" placeholder="abc address " />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>States</Form.Label>
                      <Form.Control type="text" placeholder="Maharashtra" />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>District</Form.Label>
                      <Form.Control type="text" placeholder="Dhule" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>City/Town Name</Form.Label>
                      <Form.Control type="text" placeholder="Dhule" />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control type="number" placeholder="425412" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Dropzone name="files" />
                </Row>
                <Row>
                  <Col sm="12" md="12" lg="12" className="mt-3 t-center">
                    <SecondaryButton onClick={handleBack} label={"Back"} />
                    <PrimaryButton
                      type="submit"
                      label={"Save & Continue"}
                      onClick={handleNext}
                      //disabled={isSubmitting}
                    />
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default ApplicantInformation;
