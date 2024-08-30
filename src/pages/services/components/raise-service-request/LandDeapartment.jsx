//React Library
import React from "react";
import "../../../../styles/Global.scss";
import { Row, Col, Badge, ListGroup, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function LandDeapartment() {
  const navigate = useNavigate();

  function handleOC() {
    navigate("/applicantinformation");
  }
  function handleFinalLease(){
    navigate("/finalleaseservice")
  }
  function handleMortgage() {
    navigate("/mortgageconsentservice");
  }
  return (
    <>
      <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item
              action
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Time Limit Extension for obtaining OC
                  <br />
                  <Badge bg="secondary">14 days</Badge>
                </div>
              </div>
              <Button variant="outline-dark hidden-button" onClick={handleOC}>
                Apply Now&nbsp;
                <FaArrowRight />
              </Button>
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Mortgage Consent
                  <br />
                  <Badge bg="secondary">14 days</Badge>
                </div>
              </div>
              <Button variant="outline-dark hidden-button" onClick={handleMortgage}>
                Apply Now&nbsp;
                <FaArrowRight />
              </Button>
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Final Lease
                  <br />
                  <Badge bg="secondary">14 days</Badge>
                </div>
              </div>
              <Button variant="outline-dark hidden-button" onClick={handleFinalLease}>
                Apply Now&nbsp;
                <FaArrowRight />
              </Button>
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Plot Tranfer
                  <br />
                  <Badge bg="secondary">14 days</Badge>
                </div>
              </div>
              <Button variant="outline-dark hidden-button">
                Apply Now&nbsp;
                <FaArrowRight />
              </Button>
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Change in company name
                  <br />
                  <Badge bg="secondary">14 days</Badge>
                </div>
              </div>
              <Button variant="outline-dark hidden-button">
                Apply Now&nbsp;
                <FaArrowRight />
              </Button>
            </ListGroup.Item>
            <ListGroup.Item
              action
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Plot sub-letting
                  <br />
                  <Badge bg="secondary">14 days</Badge>
                </div>
              </div>
              <Button variant="outline-dark hidden-button">
                Apply Now&nbsp;
                <FaArrowRight />
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}
