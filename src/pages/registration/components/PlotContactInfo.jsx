import React, { useContext } from "react";
import { Container, Form, Col, Row, Card, InputGroup } from "react-bootstrap";
import { RegistrationContext } from "../RegistrationContext";
import { TiHomeOutline } from "react-icons/ti";
import "../../../styles/Global.scss";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import Breadcrumbs from "../../../components/Breadcrumbs";
import * as formik from "formik";
import * as Yup from "yup";

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
    phonenumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    fax: Yup.string().required("Fax is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    industrytype: Yup.string()
      .required("Please select industry type")
      .notOneOf([""], "Please select industry type"),
    description: Yup.string().required("Please add a description"),
    eminumber: Yup.string().required("Emi Number is required"),
    date: Yup.date().required("Date is required").nullable(),
  });

  return (
    <>
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
            <Breadcrumbs label={"Plot/Unit Contact Information"} />
          </Col>
        </Row>
        <Card className="mt-3 box-shadow">
          <Card.Header className="bg-gray">
            <h4> Plot/Unit Contact Information</h4>
            <small className="text-muted">time requires 3 mins</small>
          </Card.Header>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              phonenumber: plotData.phonenumber || "",
              fax: plotData.fax || "",
              email: plotData.email || "",
              industrytype: plotData.industrytype || "",
              description: plotData.description || "",
              eminumber: plotData.eminumber || "",
              date: "",
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Card.Body className="force-overflow">
                  <Card.Text>
                    <Row>
                      <Col sm="12" md="6" lg="6" className="mt-3">
                        <Form.Group>
                          <Form.Label className="form-label">
                            Phone Number
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="phonenumber"
                            id="txtphonenumber"
                            placeholder="enter phone number..."
                            value={plotData.phonenumber}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isInvalid={
                              touched.phonenumber && !!errors.phonenumber
                            }
                          />
                          {touched.phonenumber && errors.phonenumber ? (
                            <Form.Control.Feedback type="invalid">
                              {errors.phonenumber}
                            </Form.Control.Feedback>
                          ) : null}
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                          <Form.Check
                            type="checkbox"
                            label={
                              <small>
                                Receive SMS alerts for any plot related
                                developments
                              </small>
                            }
                          />
                        </Form.Group>
                      </Col>
                      <Col sm="12" md="6" lg="6" className="mt-3">
                        <Form.Group>
                          <Form.Label className="form-label">Fax</Form.Label>
                          <Form.Control
                            type="text"
                            id="txtfax"
                            name="fax"
                            placeholder="enter unit fax..."
                            value={plotData.fax}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isInvalid={touched.fax && !!errors.fax}
                          />
                          {touched.fax && errors.fax ? (
                            <Form.Control.Feedback type="invalid">
                              {errors.fax}
                            </Form.Control.Feedback>
                          ) : null}
                        </Form.Group>
                      </Col>
                      <Col sm="12" md="6" lg="6" className="mt-3">
                        <Form.Group>
                          <Form.Label className="form-label">
                            Email ID
                          </Form.Label>
                          <Form.Control
                            name="email"
                            type="email"
                            id="txtemail"
                            placeholder="enter email id..."
                            value={plotData.email}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isInvalid={touched.email && !!errors.email}
                          />
                          {touched.email && errors.email ? (
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          ) : null}
                        </Form.Group>
                      </Col>
                      <Col sm="12" md="6" lg="6" className="mt-3">
                        <Form.Group>
                          <Form.Label className="form-label">
                            Type of Industry/Activity{" "}
                          </Form.Label>
                          <Form.Select
                            name="industrytype"
                            aria-label="Default select example"
                            className="p-2"
                            value={plotData.industrytype}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isInvalid={
                              touched.industrytype && !!errors.industrytype
                            }
                          >
                            <option> Select an option</option>
                            <option value="Industrial">Industrial</option>
                            <option value="Resedential">Resedential</option>
                          </Form.Select>
                          {touched.industrytype && errors.industrytype && (
                            <div className="invalid-feedback">
                              {errors.industrytype}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                      <Col sm="12" md="12" lg="12" className="mt-3">
                        <Form.Group>
                          <Form.Label>
                            Description of selected Activity
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            name="description"
                            value={plotData.description}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isInvalid={
                              touched.description && !!errors.description
                            }
                            className="custom-textarea"
                            placeholder="Enter the description of the selected activity"
                          />
                          {touched.description && errors.description ? (
                            <Form.Control.Feedback type="invalid">
                              {errors.description}
                            </Form.Control.Feedback>
                          ) : null}
                        </Form.Group>
                      </Col>
                      <Col sm="12" md="6" lg="6" className="mt-3">
                        <Form.Group>
                          <Form.Label className="form-label">
                            EMI Acknowledgement Number
                          </Form.Label>
                          <Form.Control
                            name="eminumber"
                            id="txtacknowledgementno"
                            placeholder="Enter if applicable.."
                            value={plotData.eminumber}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isInvalid={touched.eminumber && !!errors.eminumber}
                          />
                          {touched.eminumber && errors.eminumber ? (
                            <Form.Control.Feedback type="invalid">
                              {errors.eminumber}
                            </Form.Control.Feedback>
                          ) : null}
                        </Form.Group>
                      </Col>
                      <Col sm="12" md="6" lg="6" className="mt-3">
                        <Form.Group>
                          <Form.Label className="form-label">
                            EMI Acknowledgement Date
                          </Form.Label>
                          <Form.Control
                            name="date"
                            type="Date"
                            id="txtacknowledgementno"
                            placeholder="Enter if applicable.."
                            value={plotData.date}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isInvalid={touched.date && !!errors.date}
                          />
                          {touched.date && errors.date && (
                            <div className="invalid-feedback">
                              {errors.date}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" md="12" lg="12" className="mt-3 t-center">
                        <SecondaryButton
                          onClick={handleback}
                          label={"Cancel"}
                        ></SecondaryButton>
                        {/* <PrimaryButton
                          onClick={handleNext}
                          label={"Save & Continue"}
                        ></PrimaryButton> */}
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

      {/* <div className="container shadow-lg p-3 headerradius"  >
        <div className="d-flex justify-content-between align-items-center" >
          <div>
            &nbsp;&nbsp;{" "}
            <span style={{ fontSize: "25px" }}>
              Plot/Unit Contact Information
            </span>
            &nbsp;&nbsp;
            <span style={{ fontSize: "12px" }}>Time requires 3 mins</span>
          </div>{" "}
          <br />
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
