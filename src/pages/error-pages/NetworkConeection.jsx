import React from 'react'
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { MdOutlineSignalWifiConnectedNoInternet4 } from "react-icons/md";
export default function NetworkConeection() {
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
                <Card.Body>
                  <Row>
                    <Col lg="12" sm="12" md="12">
                      <Card.Img variant="top" src="/images/Connection.gif" className='w-50' />
                    </Col>
                  </Row>
                  <Col lg="12" sm="12" md="12">
                    <Card.Title as="h3" className="text-danger">
                    <MdOutlineSignalWifiConnectedNoInternet4 /> Lost Connection 
                    </Card.Title>
                    <Card.Title as="h5" className="text-muted">
                    Your internet connection is unavaliable.
                    </Card.Title>
                    <Card.Subtitle className="text-muted">
                    Please check your internet connection.
                    </Card.Subtitle>
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
  )
}
