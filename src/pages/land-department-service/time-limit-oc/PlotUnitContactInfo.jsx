import React, { useContext } from "react";
import { ObtainingOCContext } from "./obtainingOC-context";
import { Container, Col, Row, Card, Form } from "react-bootstrap";
import "../../../styles/global.scss";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ListGroup from "react-bootstrap/ListGroup";
const PlotUnitContactInfo = () => {
  const { currentStep, setCurrentStep } = useContext(ObtainingOCContext);

  const handleNext = () => {
    setCurrentStep(5);
  };

  const handleBack = () => {
    setCurrentStep(3);
  };

  return (
    <>
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
            <Breadcrumbs label={"Plot/Unit Contact Information"} />
          </Col>
        </Row>
        <Row className="mt-3" style={{ height: "auto" }}>
          <ListGroup
            horizontal
            className="d-flex container"
            style={{ height: "auto" }}
          >
            <ListGroup.Item style={{ width: "50%" }}>
              fields marked with (*) are Mandatory
            </ListGroup.Item>

            <ListGroup.Item style={{ width: "50%" }}>
              View List of Required Documents
            </ListGroup.Item>
          </ListGroup>
        </Row>
        <Card className="mt-3 box-shadow">
          <Card.Header className="bg-gray">
            <h4>Plot/Unit Contact Information</h4>
            <small className="text-muted">Time requires 3 mins</small>
          </Card.Header>

          <Form>
            <Card.Body>
              <Card.Text>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group>
                      <Form.Label className="form-label">
                        Telephone Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="fax"
                        placeholder="Enter unit fax..."
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group>
                      <Form.Label className="form-label">Fax</Form.Label>
                      <Form.Control
                        type="text"
                        name="fax"
                        placeholder="Enter unit fax..."
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group>
                      <Form.Label className="form-label">Email ID</Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email id..."
                      />
                    </Form.Group>
                  </Col>
                  <Row>
                    <Col sm="12" md="6" lg="6" className="mt-3">
                      <Form.Group>
                        <Form.Label className="form-label">
                          Type of Industry/Activity
                        </Form.Label>
                        <Form.Select
                          name="industrytype"
                          aria-label="Default select example"
                          className="p-2"
                        >
                          <option>Select an option</option>
                          <option value="Industrial">Industrial</option>
                          <option value="Residential">Residential</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Col sm="12" md="12" lg="12" className="mt-3">
                    <Form.Group>
                      <Form.Label>Description of selected Activity</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="description"
                        className="custom-textarea"
                        placeholder="Enter the description of the selected activity"
                        rows={6}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group>
                      <Form.Label className="form-label">
                        EM Acknowledgement Number
                      </Form.Label>
                      <Form.Control
                        name="number"
                        type="number"
                        placeholder="Enter if applicable.."
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group>
                      <Form.Label className="form-label">
                        EMI Acknowledgement Number
                      </Form.Label>
                      <Form.Control
                        name="date"
                        type="date"
                        placeholder="Enter if applicable.."
                      />
                    </Form.Group>
                  </Col>
                  {/* <Col>
                      <Dropzone
                          setFieldValue={setFieldValue}
                          name="files"
                          files={values.files}
                          setFiles={(files) => setFieldValue("files", files)}
                          plotData={plotData}
                          setPlotData={setPlotData}
                        />
                        {touched.files && errors.files && (
                          <div className="mt-3 text-danger">{errors.files}</div>
                        )}
                      </Col> */}
                </Row>
                <Row>
                  <Col sm="12" md="12" lg="12" className="mt-3 t-center">
                    <SecondaryButton onClick={handleBack} label={"Cancel"} />
                    <PrimaryButton type="submit" label={"Save & Continue"} />
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default PlotUnitContactInfo;
