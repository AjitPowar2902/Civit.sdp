import React, { useContext } from "react";
import { Container, Form, Col, Row, Card } from "react-bootstrap";
import { RegistrationContext } from "../RegistrationContext";
import { TiHomeOutline } from "react-icons/ti";
import "../../../styles/Global.scss";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import Breadcrumbs from "../../../components/Breadcrumbs";

export default function PlotContactInfo() {
  const { currentStep, setCurrentStep, plotData, setPlotData } =
    useContext(RegistrationContext);
  const handleNext = (e) => {
    setCurrentStep(3);
  };

  const handleback = (e) => {
    e.preventDefault();
    setCurrentStep(1);
  };

  return (
    <>
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
          <Breadcrumbs label={"Plot/Unit Contact Information"}/>
          </Col>
        </Row>
        <Card className="mt-3 box-shadow">
          <Card.Header className="bg-gray">
            <h4> Plot/Unit Contact Information</h4>
            <small className="text-muted">time requires 3 mins</small>
          </Card.Header>
          <Card.Body className="force-overflow">
            <Card.Text>
              <Row>
                <Col sm="12" md="6" lg="6" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label">Phone Number</Form.Label>
                    <Form.Control
                      id="txtphonenumber"
                      placeholder="enter phone number..."
                      value={plotData.phonenumber}
                      onChange={(e) =>
                        setPlotData({
                          ...plotData,
                          phonenumber: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label={
                        <small>
                          Receive SMS alerts for any plot related developments
                        </small>
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" md="6" lg="6" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label">Fax</Form.Label>
                    <Form.Control
                      id="txtfax"
                      placeholder="enter unit fax..."
                      value={plotData.fax}
                      onChange={(e) =>
                        setPlotData({ ...plotData, fax: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" md="6" lg="6" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label">Email ID</Form.Label>
                    <Form.Control
                      id="txtemail"
                      placeholder="enter email id..."
                      value={plotData.email}
                      onChange={(e) =>
                        setPlotData({ ...plotData, email: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" md="6" lg="6" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label">
                      Type of Industry/Activity{" "}
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="p-2"
                      value={plotData.industrytype}
                      onChange={(e) =>
                        setPlotData({
                          ...plotData,
                          industrytype: e.target.value,
                        })
                      }
                    >
                      <option> </option>
                      <option value="Industrial">Industrial</option>
                      <option value="Resedential">Resedential</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col sm="12" md="12" lg="12" className="mt-3">
                  <Form.Group>
                    <Form.Label>Description of selected Activity</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={plotData.description}
                      onChange={(e) =>
                        setPlotData({
                          ...plotData,
                          description: e.target.value,
                        })
                      }
                      className="custom-textarea"
                      placeholder="Enter the description of the selected activity"
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" md="6" lg="6" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label">
                      EMI Acknowledgement Number
                    </Form.Label>
                    <Form.Control
                      id="txtacknowledgementno"
                      placeholder="Enter if applicable.."
                      value={plotData.eminumber}
                      onChange={(e) =>
                        setPlotData({ ...plotData, eminumber: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col sm="12" md="6" lg="6" className="mt-3">
                  <Form.Group>
                    <Form.Label className="form-label">
                      EMI Acknowledgement Number
                    </Form.Label>
                    <Form.Control
                    type="Date"
                      id="txtacknowledgementno"
                      placeholder="Enter if applicable.."
                      value={plotData.eminumber}
                      onChange={(e) =>
                        setPlotData({ ...plotData, eminumber: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md="12" lg="12" className="mt-3 t-center">
                  <SecondaryButton
                    onClick={handleback}
                    label={"Cancel"}
                  ></SecondaryButton>
                  <PrimaryButton
                    onClick={handleNext}
                    label={"Save & Continue"}
                  ></PrimaryButton>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      {/* <div className="container shadow-lg p-3 headerradius"  >
        <div className="d-flex justify-content-between align-items-center" >
          <div>
            
          &nbsp;&nbsp; <span style={{fontSize:'25px'}}>Plot/Unit Contact Information</span>&nbsp;&nbsp;
            <span  style={{fontSize:'12px'}}>Time requires 3 mins</span>
          </div> <br />

         
          
        </div>
        </div>
        <div className="container shadow-lg p-3 mb-5 bg-body formradius" >
        <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
         
            </div>
            <div className="col-md-6">
           
            </div>
            </div>

            <div className="row mt-4">
          <div className="col-md-6">
        
            </div>
            <div className="col-md-6">
           
            </div>
            </div>

            <div className="row mt-4">
          <div className="col-md-6">
        
            </div>
            <div className="col-md-6">
              
            </div>
            </div>
            <div className="row mt-4">
          <div className="col-md-12">
         
            </div>
            <div className="col-md-6">
              
            </div>
            </div>
            <div className="row mt-4">
          <div className="col-md-6">
         
            </div>
            <div className="col-md-6">
            
            </div>
            </div>

         
            <div className="row mt-4">
          <div className="col-md-4">
           
            </div>
            <div className="col-md-4 button-container">
           
           
            </div>
            <div className="col-md-4">
              
            </div>
            </div>
            </div>
    </div> */}
    </>
  );
}
