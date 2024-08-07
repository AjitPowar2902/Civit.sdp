import React, { useContext } from "react";
import {
  Container,
  Form,
  Col,
  Row,
  Card,
  InputGroup,
} from "react-bootstrap";
import { RegistrationContext } from "../RegistrationContext";
import { TiHomeOutline } from "react-icons/ti";
import "../../../styles/Global.scss";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import Breadcrumbs from "../../../components/Breadcrumbs";
import * as formik from "formik";
import * as Yup from "yup";
import Dropzone from "../../../components/filehandling/Dropzone";

export default function PlotContactInfo() {
  const { currentStep, setCurrentStep, plotData, setPlotData } =
    useContext(RegistrationContext);

  const handleNext = (values) => {
    setPlotData(values);
    setCurrentStep(3);
  };

  const handleBack = (e) => {
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
  const today = new Date();
  const schema = Yup.object().shape({
    phonenumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    fax: Yup.string()
      .matches(
        /^(?:\+91\s*[-]?\s*|0\s*[-]?)?(?:\d{2,5}\s*[-]?\s*)?\d{6,8}$/,
        "Please enter a valid fax number in the format: +91-XXXX-XXXXXXX or 0-XXX-XXXXXXX or XXX-XXXXXXX"
      )
      .required("Fax is required"),
    email: Yup.string()
      .email("Invalid Email")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address"
      )
      .required("Email is required"),
    industrytype: Yup.string()
      .required("Please select industry type")
      .notOneOf([""], "Please select industry type"),
    description: Yup.string().required("Please add a description"),
    eminumber: Yup.number()
      .typeError("Emi Number must be a number")
      .required("Emi Number is required")
      .positive("Emi Number must be a positive number")
      .integer("Emi Number must be an integer")
      .min(1, "Emi Number must be at least 1"),
    date: Yup.date()
      .required("Date is required")
      .nullable()
      .min(today, "Date cannot be earlier than today"),
    files: Yup.array()
      .min(1, "At least one document is required")
      .required("File upload is required"),
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
            <h4>Plot/Unit Contact Information</h4>
            <small className="text-muted">Time requires 3 mins</small>
          </Card.Header>
          <Formik
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              handleNext(values);
              setSubmitting(false);
            }}
            initialValues={{
              phonenumber: plotData.phonenumber || "",
              fax: plotData.fax || "",
              email: plotData.email || "",
              industrytype: plotData.industrytype || "",
              description: plotData.description || "",
              eminumber: plotData.eminumber || "",
              date: plotData.date || "",
              files: plotData.files || [],
            }}
          >
            {({
              handleSubmit,
              handleChange,
              setFieldValue,
              values,
              touched,
              errors,
              isSubmitting,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Card.Body className="force-overflow">
                  <Card.Text>
                    <Row>
                      <Col sm="12" md="6" lg="6" className="mt-3">
                        <Form.Group>
                          <Form.Label className="form-label">
                            Phone Number
                          </Form.Label>
                          <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">
                              +91
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              name="phonenumber"
                              placeholder="Enter phone number..."
                              value={values.phonenumber}
                              onChange={(e) =>
                                handleCustomChange(e, handleChange)
                              }
                              isValid={
                                touched.phonenumber && !errors.phonenumber
                              }
                              isInvalid={
                                touched.phonenumber && !!errors.phonenumber
                              }
                            />
                            {touched.phonenumber && errors.phonenumber && (
                              <Form.Control.Feedback type="invalid">
                                {errors.phonenumber}
                              </Form.Control.Feedback>
                            )}
                          </InputGroup>
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
                            name="fax"
                            placeholder="Enter unit fax..."
                            value={values.fax}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isValid={touched.fax && !errors.fax}
                            isInvalid={touched.fax && !!errors.fax}
                          />
                          {touched.fax && errors.fax && (
                            <Form.Control.Feedback type="invalid">
                              {errors.fax}
                            </Form.Control.Feedback>
                          )}
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
                            placeholder="Enter email id..."
                            value={values.email}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isValid={touched.email && !errors.email}
                            isInvalid={touched.email && !!errors.email}
                          />
                          {touched.email && errors.email && (
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          )}
                        </Form.Group>
                      </Col>
                      <Col sm="12" md="6" lg="6" className="mt-3">
                        <Form.Group>
                          <Form.Label className="form-label">
                            Type of Industry/Activity
                          </Form.Label>
                          <Form.Select
                            name="industrytype"
                            aria-label="Default select example"
                            className="p-2"
                            value={values.industrytype}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isValid={
                              touched.industrytype && !errors.industrytype
                            }
                            isInvalid={
                              touched.industrytype && !!errors.industrytype
                            }
                          >
                            <option>Select an option</option>
                            <option value="Industrial">Industrial</option>
                            <option value="Residential">Residential</option>
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
                            value={values.description}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isValid={touched.description && !errors.description}
                            isInvalid={
                              touched.description && !!errors.description
                            }
                            className="custom-textarea"
                            placeholder="Enter the description of the selected activity"
                          />
                          {touched.description && errors.description && (
                            <Form.Control.Feedback type="invalid">
                              {errors.description}
                            </Form.Control.Feedback>
                          )}
                        </Form.Group>
                      </Col>
                      <Col sm="12" md="6" lg="6" className="mt-3">
                        <Form.Group>
                          <Form.Label className="form-label">
                            EMI Acknowledgement Date
                          </Form.Label>
                          <Form.Control
                            name="date"
                            type="date"
                            placeholder="Enter if applicable.."
                            value={values.date}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isValid={touched.date && !errors.date}
                            isInvalid={touched.date && !!errors.date}
                          />
                          {touched.date && errors.date && (
                            <div className="invalid-feedback">
                              {errors.date}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                      <Col sm="12" md="6" lg="6" className="mt-3">
                        <Form.Group>
                          <Form.Label className="form-label">
                            EMI Acknowledgement Number
                          </Form.Label>
                          <Form.Control
                            name="eminumber"
                            placeholder="Enter if applicable.."
                            value={values.eminumber}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            isValid={touched.eminumber && !errors.eminumber}
                            isInvalid={touched.eminumber && !!errors.eminumber}
                          />
                          {touched.eminumber && errors.eminumber && (
                            <Form.Control.Feedback type="invalid">
                              {errors.eminumber}
                            </Form.Control.Feedback>
                          )}
                        </Form.Group>
                      </Col>
                      <Col>
                        <Dropzone
                          setFieldValue={setFieldValue}
                          name="files"
                          files={values.files}
                          setFiles={(files) => setFieldValue("files", files)}
                        />
                        {touched.files && errors.files && (
                          <div className="mt-3 text-danger">{errors.files}</div>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" md="12" lg="12" className="mt-3 t-center">
                        <SecondaryButton
                          onClick={handleBack}
                          label={"Cancel"}
                        />
                        <PrimaryButton
                          type="submit"
                          label={"Save & Continue"}
                          disabled={isSubmitting}
                        />
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
