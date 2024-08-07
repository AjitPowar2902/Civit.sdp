import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import {useNavigate } from "react-router-dom";
export default function PageNotFound() {
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
                      src="/images/Search.png"
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
                      404
                    </Card.Title>
                    <Card.Title as="h3" className="text-muted">
                      Page not found...
                    </Card.Title>
                    <Card.Title as="h6" className="text-muted">
                      The page is missing or you assembled the link incorrectly.
                    </Card.Title>
                  </Col>
                  <Col lg="12" sm="12" md="12" className="mt-3">
                    <footer className="blockquote-footer text-end">
                      <cite title="Source Title">Civit Teams</cite>
                    </footer>
                  </Col>
                  <Col lg="12" sm="12" md="12" className="mt-3">
                    <SecondaryButton label={"Go To Home Page"}  onClick={clksubmit} />
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
