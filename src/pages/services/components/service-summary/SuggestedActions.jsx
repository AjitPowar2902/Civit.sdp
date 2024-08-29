//React Library
import React from "react";
import '../../../../styles/Global.scss';
//React Bootstrap
import { Row, Col, ListGroup, Card, Container } from "react-bootstrap";
// icons
import { FaArrowRightLong } from "react-icons/fa6";

export default function SuggestedActions() {
  return (
    <>
      <Card>
      <Card.Title className="bg-gray p-2">Suggested Actions</Card.Title>
        <Card.Body >
             
          <ListGroup as="ol" >
            <ListGroup.Item action
              as="li"
              className="d-flex justify-content-between align-items-start border-0"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold"> Application for mortgage consent</div>
                Pune
              </div>
              <FaArrowRightLong />
            </ListGroup.Item>
            <ListGroup.Item
              as="li" action
              className="d-flex justify-content-between align-items-start border-0"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Grant of exection of time limit for obtaining OC
                </div>
                Pune
              </div>
              <FaArrowRightLong />
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}
