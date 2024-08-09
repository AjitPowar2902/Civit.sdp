import React, { useEffect } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function UnderMaintenance() {
  return (
    <>
      <Container className="pt-3">
        <Row>
          <Col lg="3" md="3" sm="12"></Col>
          <Col lg="6" md="6" sm="12">
            <Card
              className="box-shadow text-center"
              style={{ background: "#f3fdff" }}
            >
              <Card.Body>
                <Row>
                  <Col lg="12" sm="12" md="12">
                    <Card.Img variant="top" src="/images/Maintenance.gif" className="w-50" />
                  </Col>
                </Row>
                <Col lg="12" sm="12" md="12">
                  <Card.Title as="h3" className="text-danger">
                    Site Under Maintenance
                  </Card.Title>
                  <Card.Title as="h6" className="text-muted">
                    Sorry for the inconvenience.
                  </Card.Title>
                  <Card.Title as="h6" className="text-muted">
                    We’re performing some maintenance at the moment.
                  </Card.Title>
                  <Card.Title as="h6" className="text-muted">
                    we’ll be back up shortly!
                  </Card.Title>
                  <Card.Title as="h6" className="text-muted">
                    If any queries please contact to administrator.
                  </Card.Title>
                </Col>
                <Col lg="12" sm="12" md="12" className="mt-3">
                  <footer className="blockquote-footer text-end">
                    <cite title="Source Title">Civit Teams</cite>
                  </footer>
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
