import React, { useContext, useEffect } from "react";
import { Button, Form, Col, Row, Card, Container } from "react-bootstrap";
import { RegistrationContext } from "../registration-context";
import { TiHomeOutline } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../../styles/global.scss";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Swal from "sweetalert2";

export default function PlotSummary() {
  const { currentStep, setCurrentStep, plotData, setPlotData } = useContext(RegistrationContext);
  const navigate = useNavigate();

  const handleData = () => {
    Swal.fire({
      title: "Are you sure you want to submit?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit!",
      position: "center",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(plotData);
        navigate("/dashboard");
      }
    });
  };

  const handleProperty = () => {
    setCurrentStep(1);
  };

  const handleUnitContact = () => {
   
    setCurrentStep(2);
  };
useEffect(()=>{
  console.log("sss",plotData)
},[])
  return (
    <>
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
            <Breadcrumbs label={"Form Summary"} />
          </Col>
        </Row>
        <Card className="mt-3 box-shadow">
          <Card.Header className="bg-gray">
            <h4>Form Summary</h4>
            <small className="text-muted">
              Application for new plot registration
            </small>
          </Card.Header>
          <Card.Body className="force-overflow">
            <Card.Text>
              <Row>
                <Col sm="12" md="12" lg="12" className="mt-3 d-flex align-items-center">
                  <h5 className={"mb-0 me-3"}>Property Details</h5>
                  <hr className="flex-grow-1" />
                  <a onClick={handleProperty} style={{ cursor: "pointer" }}>
                    &nbsp;Edit
                  </a>
                  &nbsp;
                  <FaRegEdit onClick={handleProperty} style={{ cursor: "pointer" }} />
                </Col>
              </Row>
              <Row>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">
                    District of Present Unit
                  </Form.Label>
                  <Form.Label className="w-100">
                    {plotData.district ? plotData.district : "NA"}
                  </Form.Label>
                </Col>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">
                    Industrial Area of Present Unit
                  </Form.Label>
                  <Form.Label className="w-100">
                    {plotData.prtUnit ? plotData.prtUnit : "NA"}
                  </Form.Label>
                </Col>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">
                    Property Form
                  </Form.Label>
                  <Form.Label className="w-100">
                    {plotData.propertyforms ? plotData.propertyforms : "NA"}
                  </Form.Label>
                </Col>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">
                    Type of Property
                  </Form.Label>
                  <Form.Label className="w-100">
                    {plotData.propertytype ? plotData.propertytype : "NA"}
                  </Form.Label>
                </Col>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">
                    Present Property Number
                  </Form.Label>
                  <Form.Label className="w-100">
                    {plotData.presentpropertyno ? plotData.presentpropertyno : "NA"}
                  </Form.Label>
                </Col>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">
                    Plot area in m²
                  </Form.Label>
                  <Form.Label className="w-100">
                    {plotData.plotarea ? plotData.plotarea : "NA"}
                  </Form.Label>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md="12" lg="12" className="mt-3 d-flex align-items-center">
                  <h5 className={"mb-0 me-3"}>
                    Plot or Unit Contact Information
                  </h5>
                  <hr className="flex-grow-1" />
                  <a onClick={handleUnitContact} style={{ cursor: "pointer" }}>
                    &nbsp;Edit
                  </a>
                  &nbsp;
                  <FaRegEdit onClick={handleUnitContact} style={{ cursor: "pointer" }} />
                </Col>
              </Row>
              <Row>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">
                    Telephone Number
                  </Form.Label>
                  <Form.Label className="w-100">
                    {plotData.phonenumber ? plotData.phonenumber : "NA"}
                  </Form.Label>
                </Col>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">Fax</Form.Label>
                  <Form.Label className="w-100">
                    {plotData.fax ? plotData.fax : "NA"}
                  </Form.Label>
                </Col>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">Email ID</Form.Label>
                  <Form.Label className="w-100">
                    {plotData.email ? plotData.email : "NA"}
                  </Form.Label>
                </Col>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">
                    Type of Industry/Activity
                  </Form.Label>
                  <Form.Label className="w-100">
                    {plotData.industrytype ? plotData.industrytype : "NA"}
                  </Form.Label>
                </Col>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">
                    EMI Acknowledgement Number
                  </Form.Label>
                  <Form.Label className="w-100">
                    {plotData.eminumber ? plotData.eminumber : "NA"}
                  </Form.Label>
                </Col>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">
                    Description of Selected Activity
                  </Form.Label>
                  <Form.Label className="w-100">
                    {plotData.description ? plotData.description : "NA"}
                  </Form.Label>
                </Col>
                <Col sm="12" md="12" lg="12" className="mt-3">
                  <Form.Label className="text-muted w-100">
                    Uploaded Files
                  </Form.Label>
                  {plotData.files && plotData.files.length > 0 ? (
                    <ul>
                      {plotData.files.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  ) : (
                    <Form.Label className="w-100">No files uploaded</Form.Label>
                  )}
                </Col>
                <Col sm="12" md="12" lg="12" className="mt-3 t-center">
                  <SecondaryButton label={"Print"}></SecondaryButton>
                  <PrimaryButton
                    onClick={handleData}
                    label={"Submit Form"}
                  ></PrimaryButton>
                </Col>
              </Row>
            </Card.Text>    
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
