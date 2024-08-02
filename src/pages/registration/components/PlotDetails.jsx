import React, { useContext } from "react";
import { Container, Col, Row, Card, Form } from "react-bootstrap";
import { RegistrationContext } from "../RegistrationContext";
import "../../../styles/Global.scss";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Breadcrumbs from "../../../components/Breadcrumbs";
export default function PlotDetails() {
  const { plotData, setPlotData, currentStep, setCurrentStep } =
    useContext(RegistrationContext);
  const navigate = useNavigate();

  const handleNext = () => {
    console.log(plotData);
    setCurrentStep(2);
  };

  const handleback = (e) => {
    navigate("/");
  };

  return (
    <>
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
            <Breadcrumbs label={"Property Details"}/>
          </Col>
        </Row>
        <Card className="mt-3 box-shadow">
          <Card.Header className="bg-gray">
            <h4> Property Details</h4>
            <small className="text-muted">time requires 3 mins</small>
          </Card.Header>
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
                        aria-label="default select example"
                        id="cbodistrict"
                        value={plotData.district}
                        onChange={(e) =>
                          setPlotData({ ...plotData, district: e.target.value })
                        }
                      >
                        <option> </option>
                        <option value="maharashtra">maharashtra</option>
                        <option value="ahmedabad">ahmedabad</option>
                        <option value="madhya pradesh">madhya pradesh</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col className="mt-3">
                    {plotData.district &&(
                      <Form.Group>
                        <Form.Label className="form-label">
                          Industrial Area of Present Unit{" "}
                        </Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          value={plotData.prtUnit}
                          onChange={(e) =>
                            setPlotData({
                              ...plotData,
                              prtUnit: e.target.value,
                            })
                          }
                        >
                          <option></option>
                          <option value="MIDC.Maharashtra">
                            MIDC.Maharashtra
                          </option>
                          <option value="ADDL.Ahmedabad">ADDL.Ahmedabad</option>
                          <option value="MPDC.Madhya Pradesh">
                            MPDC.Madhya Pradesh
                          </option>
                        </Form.Select>
                      </Form.Group>
                    )}
                  </Col>
                  <Col className="mt-3">
                  {plotData.prtUnit &&(
                    <Form.Group>
                      <Form.Label className="form-label">
                        Property forms{" "}
                      </Form.Label>
                      <Form.Select
                        aria-label="default select example"
                        value={plotData.propertyforms}
                        onChange={(e) =>
                          setPlotData({
                            ...plotData,
                            propertyforms: e.target.value,
                          })
                        }
                      >
                        <option> </option>
                        <option value="shields">shields</option>
                        <option value="shiel">shiel</option>
                      </Form.Select>
                    </Form.Group>
                     )}
                  </Col>
                  <Col className="mt-3">
                  {plotData.propertyforms &&(
                    <Form.Group className="col-12">
                      <Form.Label className="form-label">
                        Type of property{" "}
                      </Form.Label>
                      <Form.Select
                        aria-label="default select example"
                        value={plotData.propertytype}
                        onChange={(e) =>
                          setPlotData({
                            ...plotData,
                            propertytype: e.target.value,
                          })
                        }
                      >
                        <option> </option>
                        <option value="industrial">industrial</option>
                        <option value="resedential">resedential</option>
                      </Form.Select>
                    </Form.Group>
                      )}
                  </Col>
                  <Col className="mt-3">
                  {plotData.propertytype &&(
                    <Form.Group>
                      <Form.Label className="form-label">
                        Present property no.
                      </Form.Label>
                      <Form.Select
                        aria-label="default select example"
                        value={plotData.presentpropertyno}
                        onChange={(e) =>
                          setPlotData({
                            ...plotData,
                            presentpropertyno: e.target.value,
                          })
                        }
                      >
                        <option> </option>
                        <option value="a 007">a 007</option>
                        <option value="a 008">a 008</option>
                        <option value="a 009">a 009</option>
                      </Form.Select>
                    </Form.Group>
                    )}
                  </Col>
                  <Col className="mt-3">
                  {plotData.presentpropertyno &&(
                    <Form.Group>
                      <Form.Label className="form-label">
                        Plot area in m2
                      </Form.Label>
                      <Form.Control
                        id="txtusername"
                        value={plotData.plotarea}
                        onChange={(e) =>
                          setPlotData({
                            ...plotData,
                            plotarea: e.target.value,
                          })
                        }
                        placeholder="enter plot area..."
                      />
                    </Form.Group>
                    )}
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
                  <PrimaryButton
                    onClick={handleback}
                    label={"cancel"}
                  ></PrimaryButton>
                  <SecondaryButton
                    onClick={handleNext}
                    label={"save & continue"}
                  ></SecondaryButton>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
