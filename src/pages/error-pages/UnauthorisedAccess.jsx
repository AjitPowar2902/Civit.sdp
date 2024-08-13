import React,{useEffect} from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import {useNavigate } from "react-router-dom";
export default function UnauthorisedAccess() {
 const navigate =  useNavigate()
 function clksubmit() {
  navigate('/');
 };

  return (
    <>

        <Container className="pt-5">
          <Row  className="pt-5">
            <Col lg="3" md="3" sm="12"></Col>
            <Col lg="6" md="6" sm="12">
              <Card
                className="box-shadow text-center"
                style={{ background: "#f3fdff" }}
              >
                <Row>
                  <Col lg="12" sm="12" md="12">
                  <Card.Title className="text-danger">
                     <img src="/images/worker.png" alt="Stop" style={{height:'150px'}}></img>
                    </Card.Title>
                    <Card.Img
                      src="/images/UnauthorisedAccess.png"
                      style={{ width: "40%" }}
                    />
                  </Col>
                </Row>
                <Card.Body className="pt-0">
                  <Col lg="12" sm="12" md="12" style={{ textAlign: "center" }}>
                    <Card.Title as="h2" className="text-danger">
                    Unauthorised Access
                    </Card.Title>
                  </Col>
                  <Col lg="12" sm="12" md="12" style={{ textAlign: "center" }}>
                    <Card.Title as="h6" className="text-muted">
                    Please click on Go To Home Page,
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
