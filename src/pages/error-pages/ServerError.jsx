import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import {useNavigate } from "react-router-dom";
export default function ServerError() {
    const navigate =  useNavigate()
    function clksubmit() {
     navigate('/');
    };
  return (
    <>

        <Container className="pt-5">
          <Row>
            <Col lg="3" md="3" sm="12"></Col>
            <Col lg="6" md="6" sm="12">
              <Card
                className="box-shadow text-center"
                style={{ background: "#f3fdff" }}
              >
                <Row>
                  <Col lg="12" sm="12" md="12">
                    <Card.Img
                      variant="top"
                      src="/images/Question.png"
                      style={{ width: "60%" }}
                    />
                  </Col>
                </Row>
                <Card.Body>
                  <Col lg="12" sm="12" md="12" style={{ textAlign: "center" }}>
                    <Card.Title
                      className="text-danger fw-bold"
                      style={{ fontSize: "50px", color: "#ef6875" }}
                    >
                      500
                    </Card.Title>
                    <Card.Title as="h3" className="text-muted">
                      Something went wrong...
                    </Card.Title>
                    <Card.Title as="h6" className="text-muted">
                      We are wroking on fix the Problem.
                    </Card.Title>
                    <Card.Title as="h6" className="text-muted">
                      Please try again...
                    </Card.Title>
                  </Col>
                  <Col lg="12" sm="12" md="12" className="mt-3">
                    <footer className="blockquote-footer text-end">
                      <cite title="Source Title">Civit teams</cite>
                    </footer>
                  </Col>
                  <Col lg="12" sm="12" md="12" className="mt-3">
                    <SecondaryButton label={"Go To Home Page"} onClick={clksubmit}/>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="3" sm="12"></Col>
          </Row>
        </Container>
 
    </>
  );
}
