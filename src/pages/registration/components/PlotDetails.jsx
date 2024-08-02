import React, { useContext } from "react";
import { Container, Col, Row, Card, Form } from "react-bootstrap";
import { RegistrationContext } from "../RegistrationContext";
import "../../../styles/Global.scss";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Breadcrumbs from "../../../components/Breadcrumbs";
import * as formik from "formik";
import * as Yup from "yup";

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

  const handleCustomChange = (e, handleChange) => {
    const { name, value } = e.target;
    handleChange(e);
    setPlotData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { Formik } = formik;

  const schema = Yup.object().shape({
    district: Yup.string()
      .required("Please select a district")
      .notOneOf([""], "Please select a district"),
    prtUnit: Yup.string()
      .required("Please select an industrial property unit")
      .notOneOf([""], "Please select an industrial property unit"),
    propertyforms: Yup.string()
      .required("Please select a property form")
      .notOneOf([""], "Please select a property form"),
    propertytype: Yup.string()
      .required("Please select a property type")
      .notOneOf([""], "Please select a property type"),
    presentpropertyno: Yup.string()
      .required("Please select a present property number")
      .notOneOf([""], "Please select a present property number"),
    plotarea: Yup.string().required("Please enter a plot area"),
  });

  return (
    <>
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
            <Breadcrumbs label={"Property Details"} />
          </Col>
        </Row>
        <Card className="mt-3 box-shadow">
          <Card.Header className="bg-gray">
            <h4> Property Details</h4>
            <small className="text-muted">time requires 3 mins</small>
          </Card.Header>
          <Formik
            initialValues={{
              district: plotData.district || "",
              prtUnit: plotData.prtUnit || "",
              propertyforms: plotData.propertyforms || "",
              propertytype: plotData.propertytype || "",
              presentpropertyno: plotData.presentpropertyno || "",
              plotarea: plotData.plotarea || "",
            }}
            validationSchema={schema}
            onSubmit={console.log}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
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
                            value={plotData.district}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isInvalid={
                              touched.district && !!errors.district
                            }
                          >
                            <option value=""></option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                          </Form.Select>
                          {touched.district && errors.district && (
                            <div className="invalid-feedback">
                              {errors.district}
                            </div>
                          )}
                          </Form.Group>
                        </Col>
                        <Col className="mt-3">
                          {plotData.district && (
                            <Form.Group>
                              <Form.Label className="form-label">
                                Industrial Area of Present Unit{" "}
                              </Form.Label>
                              <Form.Select
                            name="prtUnit"
                            aria-label="Default select example"
                            className="p-2"
                            value={plotData.industrytype}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isInvalid={
                              touched.prtUnit && !!errors.prtUnit
                            }
                          >
                            <option> Select an option</option>
                            <option value="Industrial">Industrial</option>
                            <option value="Resedential">Resedential</option>
                          </Form.Select>
                          {touched.prtUnit && errors.prtUnit && (
                            <div className="invalid-feedback">
                              {errors.prtUnit}
                            </div>
                          )}
                            </Form.Group>
                          )}
                        </Col>
                        <Col className="mt-3">
                          {plotData.prtUnit && (
                            <Form.Group>
                              <Form.Label className="form-label">
                                Property forms{" "}
                              </Form.Label>
                              <Form.Select
                            name="propertyforms"
                            aria-label="Default select example"
                            className="p-2"
                            value={plotData.propertyforms}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isInvalid={
                              touched.propertyforms && !!errors.propertyforms
                            }
                          >
                            <option> </option>
                        <option value="shields">shields</option>
                        <option value="shiel">shiel</option>
                          </Form.Select>
                          {touched.propertyforms && errors.propertyforms && (
                            <div className="invalid-feedback">
                              {errors.propertyforms}
                            </div>
                          )}
                            </Form.Group>
                          )}
                        </Col>
                        <Col className="mt-3">
                          {plotData.propertyforms && (
                            <Form.Group className="col-12">
                              <Form.Label className="form-label">
                                Type of property{" "}
                              </Form.Label>
                              <Form.Select
                            name="propertytype"
                            aria-label="Default select example"
                            className="p-2"
                            value={plotData.industrytype}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isInvalid={
                              touched.propertytype && !!errors.propertytype
                            }
                          >
                            <option> Select an option</option>
                            <option value="Industrial">Industrial</option>
                            <option value="Resedential">Resedential</option>
                          </Form.Select>
                          {touched.propertytype && errors.propertytype && (
                            <div className="invalid-feedback">
                              {errors.propertytype}
                            </div>
                          )}
                            </Form.Group>
                          )}
                        </Col>
                        <Col className="mt-3">
                          {plotData.propertytype && (
                            <Form.Group>
                              <Form.Label className="form-label">
                                Present property no.
                              </Form.Label>
                              <Form.Select
                            name="presentpropertyno"
                            aria-label="Default select example"
                            className="p-2"
                            value={plotData.industrytype}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isInvalid={
                              touched.presentpropertyno && !!errors.presentpropertyno
                            }
                          >
                            <option>Select an option</option>
                        <option value="A 007">A 007</option>
                        <option value="A 008">A 008</option>
                        <option value="A 009">A 009</option>
                          </Form.Select>
                          {touched.presentpropertyno && errors.presentpropertyno && (
                            <div className="invalid-feedback">
                              {errors.presentpropertyno}
                            </div>
                          )}
                            </Form.Group>
                          )}
                        </Col>
                        <Col className="mt-3">
                          {plotData.presentpropertyno && (
                            <Form.Group>
                              <Form.Label className="form-label">
                                Plot area in m2
                              </Form.Label>
                              <Form.Control
                            name="plotarea"
                            id="txtusername"
                            placeholder="Enter if applicable.."
                            value={plotData.plotarea}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isInvalid={touched.plotarea && !!errors.plotarea}
                          />
                          {touched.plotarea && errors.plotarea ? (
                            <Form.Control.Feedback type="invalid">
                              {errors.plotarea}
                            </Form.Control.Feedback>
                          ) : null}
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
                        <button type="submit">save and continue</button>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Form>
            )}
          </Formik>
        </Card>
      </Container>
    </>
  );
}
