import React from "react";
import { Col, Row } from "react-bootstrap";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { useNavigate } from 'react-router-dom';

export default function NoData({ path, showButton = true, h3Text = "There are no plots registered" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${path}`);
  };

  return (
    <Row style={{ textAlign: "center" }} className="p-3">
      <Col md="12" lg="12" sm="12" className="mt-3">
        <img
          src="/images/CostEstimatorPerson.png"
          style={{ width: "auto" }}
          alt="No Data"
        />
      </Col>
      <Col md="12" lg="12" sm="12" className="mt-3">
        <h3>{h3Text}</h3>
        {showButton && <h6>To Raise one, click on the below button.</h6>}
      </Col>
      {showButton && (
        <Col md="12" lg="12" sm="12" className="mt-3">
          <SecondaryButton label="Register a plot" onClick={handleClick} />
        </Col>
      )}
    </Row>
  );
}
