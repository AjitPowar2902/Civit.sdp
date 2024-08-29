//React Library
import React, { useState } from "react";
import "../../styles/Global.scss";
//import AnuragTopBar from "../Component/AnuragTopBar";
import { useNavigate } from "react-router-dom";
//CSS

//React Bootstrap
import {
  Row,
  Col,
  Breadcrumb,
  Container,
  Card,
  Form,
  InputGroup,
  ListGroup,
  Accordion,
} from "react-bootstrap";
// icons
import { IoHome } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
//Pages
//import TopBar from "../Component/TopBar";
import LandDeapartment from "./components/raise-service-request/LandDeapartment";
import FireDepartment from "./components/raise-service-request/FireDepartment";
import { serviceConfig } from "../../config/service-config"; 
export default function RaiseServiceRequest() {
  function BackToDashbord() {
    // navigate("/PlotDetail");
  }

  return (
    <>
      {/* <AnuragTopBar /> */}
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="6" lg="6">
            <Breadcrumb>
              <Breadcrumb.Item onClick={BackToDashbord()}>
                <IoHome />
              </Breadcrumb.Item>
              <Breadcrumb.Item>Raise Service Request</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Row className="mt-3" style={{ height: "auto" }}>
          <Col>
            <Card className="border-0 ">
              <Card.Body className="bg-gray">
                <Card.Title className="p-2">Suggested Services</Card.Title>
                <Row>
                  <Col sm="12" md="4" lg="4" className="pt-2">
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            Application For Mortigage Consent
                          </div>
                          <Form.Text className="text-muted">
                            Khopargaon plot DCM 73
                          </Form.Text>
                        </div>
                        <FaArrowRightLong />
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col sm="12" md="4" lg="4" className="pt-2">
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            Application For Mortigage Consent
                          </div>
                          <Form.Text className="text-muted">
                            Khopargaon plot DCM 73
                          </Form.Text>
                        </div>
                        <FaArrowRightLong />
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col sm="12" md="4" lg="4" className="pt-2">
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">
                            Application For Mortigage Consent
                          </div>
                          <Form.Text className="text-muted">
                            Khopargaon plot DCM 7312
                          </Form.Text>
                        </div>
                        <FaArrowRightLong />
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <InputGroup size="lg">
            <InputGroup.Text id="inputGroup-sizing-lg">
              <IoSearchSharp />
            </InputGroup.Text>
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Search For Service"
            />
          </InputGroup>
        </Row>
        {/* <Row className="mt-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Land Department</Accordion.Header>
              <Accordion.Body className="p-0">
                <LandDeapartment />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row> */}
        <Row className="mt-3">
          <Accordion>
            {serviceConfig.Services.map((service, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}  className="mb-3">
                <Accordion.Header>{service.serviceName}</Accordion.Header>
                <Accordion.Body className="p-0">
                  <service.component />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Row>
        {/* <Row className="mt-3">
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Fire Department</Accordion.Header>
              <Accordion.Body className="p-0">
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </Row>
          <Row className="mt-3">
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Engineering-Water Department</Accordion.Header>
              <Accordion.Body  className="p-0">
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </Row>
          <Row className="mt-3">
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Engineering-Drainage Department</Accordion.Header>
              <Accordion.Body className="p-0">
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </Row>
          <Row className="mt-3">
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Engineering-Power Department</Accordion.Header>
              <Accordion.Body className="p-0">
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </Row>
          <Row className="mt-3">
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>SPA Department</Accordion.Header>
              <Accordion.Body className="p-0">
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </Row>
          <Row className="mt-3">
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Technical Department</Accordion.Header>
              <Accordion.Body className="p-0">
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </Row>
          <Row className="mt-3">
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>IT Sez Department</Accordion.Header>
              <Accordion.Body className="p-0">
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </Row> */}
      </Container>
    </>
  );
}
