import React from "react";
import { Col, Row } from "react-bootstrap";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";

export default function NoData({path}) {

  const paths = path;
  const navigate = useNavigate();
  const handleClick = ()=>
  {
    
      navigate(`/${paths}`)
  }
  return (
    <>
      <Row style={{ textAlign: "center" }} className="p-3">
        <Col md="12" lg="12" sm="12" className="mt-3">
          <img
            src="/images/CostEstimatorPerson.png"
            style={{ width: "auto" }}
          ></img>
        
        </Col>
        <Col md="12" lg="12" sm="12" className="mt-3">
         <h3>There are no plots registered</h3>
          <h6>To Raise one, click on the below button.</h6>
        </Col>
        <Col md="12" lg="12" sm="12" className="mt-3">
          <SecondaryButton label="Register a plot" onClick={handleClick}/>
        </Col>
      </Row>
    </>
  );
}
