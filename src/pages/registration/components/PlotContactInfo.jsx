import React, { useContext } from "react";
import {
  Button,
  Form as BootstrapForm,
  Col,
  Row,
  Card,
  Breadcrumb,
  ListGroup,
  Badge,
  InputGroup,
  ProgressBar,
} from "react-bootstrap";
import { RegistrationContext } from "../RegistrationContext";
import { TiHomeOutline } from "react-icons/ti";
import "../../../styles/Global.css";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

export default function PlotContactInfo() {
  const { currentStep, setCurrentStep, plotData, setPlotData } =
    useContext(RegistrationContext);
  const handleNext = (values) => {
    setPlotData({
      ...plotData,
      phonenumber: values.phonenumber,
      fax: values.fax,
      email: values.email,
      industrytype: values.industrytypes,
      description: values.description,
      eminumber: values.eminumber,
    });
    setCurrentStep(3);
  };

  const handleback = (e) => {
    e.preventDefault();
    setCurrentStep(1);
  };
  const validationSchema = Yup.object({
    phonenumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^(\+?\d{1,4}[-.\s]?(\(?\d{1,4}\)?[-.\s]?)?)\d{1,9}$/,
        "Phone number is not valid"
      )
      .length(10, "Phone number must be exactly 10 digits"),
    fax: Yup.string().required("Fax is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    industrytype: Yup.string()
      .required("Please select industry type")
      .notOneOf([""], "Please select industry type"),
    description: Yup.string().required("Please add a description"),
    eminumber: Yup.string().required("Emi Number is required"),
  });

  return (
    <>
      <div className="container shadow-lg p-3 headerradius">
        <div className="d-flex justify-content-between align-items-center">
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

        {/* <RegistrationProgress variantFirst={'success'} property={100} variantSecond={'warning'} contact={100} check={1}/> */}
      </div>
      <Formik
        initialValues={{
          phonenumber: plotData.phonenumber || "",
          fax: plotData.fax || "",
          email: plotData.email || "",
          industrytype: plotData.industrytype || "",
          description: plotData.description || "",
          eminumber: plotData.eminumber || "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          handleNext(values);
          setSubmitting(false);
        }}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <div className="container shadow-lg p-3 mb-5 bg-body formradius">
              <div className="container mt-4">
                <div className="row">
                  <div className="col-md-6">
                    <BootstrapForm.Group>
                      <BootstrapForm.Label className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <InputGroup>
                        {" "}
                        <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                        <Field
                          as={BootstrapForm.Control}
                          id="textphonenumber"
                          name="phonenumber"
                          placeholder="enter phone number..."
                          value={plotData.phonenumber}
                          onChange={(e) => {
                            setFieldValue("phonenumber", e.target.value);
                            setPlotData({
                              ...plotData,
                              phonenumber: e.target.value,
                            });
                          }}
                        /><br></br>
                        <ErrorMessage
                          name="phonenumber"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </InputGroup>
                    </BootstrapForm.Group>
                    <BootstrapForm.Group controlId="formBasicCheckbox">
                      <BootstrapForm.Check
                        type="checkbox"
                        label={
                          <span className="custom-label">
                            Receive SMS alerts for any plot related developments
                          </span>
                        }
                      />
                    </BootstrapForm.Group>
                  </div>
                  <div className="col-md-6">
                    <BootstrapForm.Group>
                      <BootstrapForm.Label className="form-label">
                        Fax{" "}<span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <InputGroup>
                        <Field
                          as={BootstrapForm.Control}
                          id="txtfax"
                          name="fax"
                          placeholder="enter unit fax..."
                          value={plotData.fax}
                          onChange={(e) => {
                            setFieldValue("fax", e.target.value);
                            setPlotData({ ...plotData, fax: e.target.value });
                          }}
                        />
                        <ErrorMessage
                          name="fax"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </InputGroup>
                    </BootstrapForm.Group>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <BootstrapForm.Group>
                      <BootstrapForm.Label className="form-label">
                        Email ID <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <InputGroup>
                        <Field
                          as={BootstrapForm.Control}
                          name="email"
                          id="txtemail"
                          placeholder="enter email id..."
                          value={plotData.email}
                          onChange={(e) => {
                            setFieldValue("email", e.target.value);
                            setPlotData({ ...plotData, email: e.target.value });
                          }}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </InputGroup>
                    </BootstrapForm.Group>
                  </div>
                  <div className="col-md-6">
                    <BootstrapForm.Group>
                      <BootstrapForm.Label className="form-label">
                        Type of Industry/Activity{" "}
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        as={BootstrapForm.Select}
                        name="industrytype"
                        aria-label="Default select example"
                        className="p-2"
                        value={plotData.industrytype}
                        onChange={(e) => {
                          setFieldValue("industrytype", e.target.value);
                          setPlotData({
                            ...plotData,
                            industrytype: e.target.value,
                          });
                        }}
                      >
                        <option> </option>
                        <option value="Industrial">Industrial</option>
                        <option value="Resedential">Resedential</option>
                      </Field>
                      <ErrorMessage
                        name="industrytype"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </BootstrapForm.Group>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6"></div>
                  <div className="col-md-6"></div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <BootstrapForm.Group>
                      <BootstrapForm.Label>
                        Description of selected Activity{" "}
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <Field
                        as="textarea"
                        className="custom-textarea"
                        name="description"
                        value={plotData.description}
                        onChange={(e) => {
                          setFieldValue("description", e.target.value);
                          setPlotData({
                            ...plotData,
                            description: e.target.value,
                          });
                        }}
                        placeholder="Enter the description of the selected activity"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </BootstrapForm.Group>
                  </div>
                  <div className="col-md-6"></div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <BootstrapForm.Group>
                      <BootstrapForm.Label className="form-label">
                        EMI Acknowledgement Number{" "}
                        <span className="text-danger">*</span>
                      </BootstrapForm.Label>
                      <InputGroup>
                        <Field
                          as={BootstrapForm.Control}
                          name="eminumber"
                          id="txtacknowledgementno"
                          placeholder="Enter if applicable.."
                          value={plotData.eminumber}
                          onChange={(e) => {
                            setFieldValue("eminumber", e.target.value);
                            setPlotData({
                              ...plotData,
                              eminumber: e.target.value,
                            });
                          }}
                        />
                        <ErrorMessage
                          name="eminumber"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </InputGroup>
                    </BootstrapForm.Group>
                  </div>
                  <div className="col-md-6"></div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-4"></div>
                  <div className="col-md-4 button-container">
                    <SecondaryButton
                      onClick={handleback}
                      label={"Cancel"}
                    ></SecondaryButton>
                    <PrimaryButton
                    label={"Save & Continue"}
                    onClick={handleNext}
                    disabled={isSubmitting}
                  ></PrimaryButton>
                    {/* <button
                      type="submit"
                      className="pr-4 pl-4 rounded-1"
                      disabled={isSubmitting}
                    >
                      save and continue
                    </button> */}
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
