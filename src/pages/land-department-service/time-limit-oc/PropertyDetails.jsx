import React, {useContext} from 'react'
import { ObtainingOCContext } from './obtainingOC-context';
import { Container, Col, Row, Card, Form } from "react-bootstrap";
import "../../../styles/global.scss";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ListGroup from "react-bootstrap/ListGroup";
const PropertyDetails = () => {

    const {currentStep,setCurrentStep } = useContext(ObtainingOCContext);
    const handleback = () => {
        setCurrentStep(2);
    }

    const handleNext=() =>{
      setCurrentStep(4)
    }

  return (
    <>
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
            <Breadcrumbs label={"Property Details"} />
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
            <h4> Property Details</h4>
            <small className="text-muted">time requires 3 mins</small>
          </Card.Header>
          
              <Form >
                <Card.Body className="force-overflow">
                  <Card.Text>
                    <Row>
                      <Col sm="12" md="6" lg="6">
                        <Col className="mt-3">
                          <Form.Check
                            type="radio"
                            label="MIDC(Plot provided by MIDC)"
                            name="RadioDefault"
                            id="rdo1"
                            defaultChecked={true}
                          />
                        </Col>
                        <Col className="mt-3">
                          <Form.Group>
                            <Form.Label className="form-label">
                              District of present unit
                            </Form.Label>
                            <Form.Select
                              name="district"
                              aria-label="Default select example"
                              className="p-2"
                            >
                              <option value="">Select an option</option>
                             
                            </Form.Select>
                            
                          </Form.Group>
                        </Col>
                        
                      </Col>

                      <Col sm="12" md="6" lg="6">
                        <Col className="mt-3">
                          <Form.Check
                            type="radio"
                            label="Non-MIDC(Plot acquired from elsewhere)"
                            name="RadioDefault"
                            id="rdo2"
                          />
                        </Col>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col sm="12" md="12" lg="12" className="t-center">
                        <SecondaryButton
                          onClick={handleback}
                          // onSubmit={handleSubmit}
                          label={"Back"}
                        ></SecondaryButton>
                        <PrimaryButton
                          //onSubmit={handleNext}
                          label={"Save & Continue"}
                          onClick={handleNext}
                        ></PrimaryButton>
                        {/* <button type="submit">save and continue</button> */}
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Form>
        </Card>
      </Container>
    </>
  )
}

export default PropertyDetails