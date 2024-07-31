import React from "react";
import { Row,Col,Card } from "react-bootstrap";

export default function Cards({header,subtitle}) {
  return (
    <>
    
      <Col sm="12" md="3" lg="3" className="mt-3">
      <Card className="tiles-shadow">
        <Card.Body>
          <h1 className="fw-bold text-muted">{header}</h1>
          <hr />
          <Card.Subtitle className="mt-2 text-muted">
            {subtitle}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      </Col>
      
    </>
  );
}
