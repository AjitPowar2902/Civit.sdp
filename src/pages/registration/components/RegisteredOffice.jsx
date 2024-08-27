import React, { useContext } from "react";

import { Link } from "react-router-dom";
 
import "../../../styles/global.scss";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ListGroup from "react-bootstrap/ListGroup";

import { RegistrationContext } from "../registration-context";
import { Row, Col, Form, Button, Card, Container } from "react-bootstrap";
 
 
 

 
function RegisteredOffice() {
    const {
        plotData,
        setPlotData,
        currentStep,
        setCurrentStep,
        setDisplayData,
        displayData,
      } = useContext(RegistrationContext);

  const handleNext = () => {
    setCurrentStep(3);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };
  return (
    <div>
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
            <h4>Registered Office</h4>
            <small className="text-muted">time requires 3 mins</small>
          </Card.Header>
                <Card.Body>
                <Form>
                    <Row>
                    <Col>
                        <Form.Group className="companyName" controlId="companyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Yellow Slice" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="companyName" controlId="companyName">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Yellow Slice" />
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Form.Group className="adLn1" controlId="adLn1">
                        <Form.Label>Address Line 1 </Form.Label>
                        <Form.Control type="text" placeholder="Hadapsar, Pune" />
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Form.Group className="adLn2" controlId="adLn2">
                        <Form.Label>Address Line 2 </Form.Label>
                        <Form.Control type="text" placeholder="Hadapsar, Pune" />
                        </Form.Group>
                    </Col>
                    </Row>

                    <Row>
                    <Col>
                        <Form.Group className="state" controlId="state">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Yellow Slice" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="district" controlId="district">
                        <Form.Label>District</Form.Label>
                        <Form.Control type="text" placeholder="Yellow Slice" />
                        </Form.Group>
                    </Col>
                    </Row>

                    <Row>
                    <Col>
                        <Form.Group className="city" controlId="city">
                        <Form.Label>City/Town</Form.Label>
                        <Form.Control type="text" placeholder="Yellow Slice" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="pincode" controlId="pincode">
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control type="text" placeholder="Yellow Slice" />
                        </Form.Group>
                    </Col>
                    </Row>

                    <Row>
                    <Col>
                        <Form.Group className="tn" controlId="tn">
                        <Form.Label>Telephone Number</Form.Label>
                        <Form.Control type="text" placeholder="Yellow Slice" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="fax" controlId="fax">
                        <Form.Label>Fax</Form.Label>
                        <Form.Control type="text" placeholder="Yellow Slice" />
                        </Form.Group>
                    </Col>
                    </Row>

                    <Row>
                    <Col>
                        <Form.Group className="website" controlId="website">
                        <Form.Label>Website </Form.Label>
                        <Form.Control type="text" placeholder="Website" />
                        </Form.Group>
                    </Col>
                    </Row>

                    <Row>
                    <Col>
                        <Form.Group className="emailId" controlId="emailId">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control type="text" placeholder="Yellow Slice" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="altEmailId1" controlId="altEmailId1">
                        <Form.Label>Alternative Email ID - 1 </Form.Label>
                        <Form.Control type="text" placeholder="Yellow Slice" />
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Form.Group className="altEmailId2" controlId="altEmailId2">
                        <Form.Label>Alternative Email ID - 2</Form.Label>
                        <Form.Control type="text" placeholder="Yellow Slice" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="altEmailId3" controlId="altEmailId3">
                        <Form.Label>Alternative Email ID - 3</Form.Label>
                        <Form.Control type="text" placeholder="Yellow Slice" />
                        </Form.Group>
                    </Col>
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
                </Form>
                </Card.Body>
                </Card>
      </Container>
    </div>
  );
}

export default RegisteredOffice;
