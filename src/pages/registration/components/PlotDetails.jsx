import React, { useContext } from "react";
import {
  Button,
  Form as BootstarpForm,
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
import "../../../styles/Global.css";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

export default function PlotDetails() {
  const { plotData, setPlotData, currentStep, setCurrentStep } =
    useContext(RegistrationContext);
  const navigate = useNavigate();

  const handleNext = (values) => {
    setPlotData({
      ...plotData,
      district: values.district,
      prtUnit: values.prtUnit,
      propertyforms: values.propertyforms,
      propertytype: values.propertytype,
      presentpropertyno: values.presentpropertyno,
      plotarea: values.plotarea,
    });
    setCurrentStep(2);
  };

  const handleback = (e) => {
    navigate("/");
  };

  const validationSchema = Yup.object({
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
      <div className="container shadow-lg p-3 headerradius">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            &nbsp;&nbsp;
            <span style={{ fontSize: "24px" }}>Property Details</span>
            &nbsp;&nbsp;
            <span style={{ fontSize: "12px" }}>Time requires 3 mins</span>
          </div>{" "}
          <br />
        </div>
        {/* <RegistrationProgress variantFirst={'warning'} property={100}/> */}
      </div>
      <Formik
        initialValues={{
          district: plotData.district || "",
          prtUnit: plotData.prtUnit || "",
          propertyforms: plotData.propertyforms || "",
          propertytype: plotData.propertytype || "",
          presentpropertyno: plotData.presentpropertyno || "",
          plotarea: plotData.plotarea || "",
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
                    <BootstarpForm.Group>
                      <BootstarpForm.Label className="form-label">
                        District of Present Unit{" "}
                        <span className="text-danger">*</span>
                      </BootstarpForm.Label>
                      <Field
                        as="select"
                        id="cboDistrict"
                        name="district"
                        aria-label="Default select example"
                        className="form-select p-2"
                        onChange={(e) => {
                          setFieldValue("district", e.target.value);
                          setPlotData({
                            ...plotData,
                            district: e.target.value,
                          });
                        }}
                        value={plotData.district}
                      >
                        <option value=""></option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                      </Field>
                      <ErrorMessage
                        name="district"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </BootstarpForm.Group>
                  </div>
                  <div className="col-md-6">
                    <BootstarpForm.Group>
                      <BootstarpForm.Label className="form-label">
                        Industrial Area of Present Unit{" "}
                        <span className="text-danger">*</span>
                      </BootstarpForm.Label>
                      <Field
                        as="select"
                        id="prtUnit"
                        name="prtUnit"
                        className="form-select p-2"
                        value={plotData.prtUnit}
                        onChange={(e) => {
                          setFieldValue("prtUnit", e.target.value);
                          setPlotData({
                            ...plotData,
                            prtUnit: e.target.value,
                          });
                        }}
                      >
                        <option> </option>
                        <option value="MIDC.Maharashtra">
                          MIDC.Maharashtra
                        </option>
                        <option value="ADDL.Ahmedabad">ADDL.Ahmedabad</option>
                        <option value="MPDC.Madhya Pradesh">
                          MPDC.Madhya Pradesh
                        </option>
                      </Field>
                      <ErrorMessage
                        name="prtUnit"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </BootstarpForm.Group>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <BootstarpForm.Group>
                      <BootstarpForm.Label className="form-label">
                        Property Forms <span className="text-danger">*</span>
                      </BootstarpForm.Label>
                      <Field
                        as="select"
                        id="propertyforms"
                        name="propertyforms"
                        aria-label="Default select example"
                        className="form-select p-2"
                        value={plotData.propertyforms}
                        onChange={(e) => {
                          setFieldValue("propertyforms", e.target.value);
                          setPlotData({
                            ...plotData,
                            propertyforms: e.target.value,
                          });
                        }}
                      >
                        <option> </option>
                        <option value="shields">shields</option>
                        <option value="shiel">shiel</option>
                      </Field>
                      <ErrorMessage
                        name="propertyforms"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </BootstarpForm.Group>
                  </div>
                  <div className="col-md-6">
                    <BootstarpForm.Group>
                      <BootstarpForm.Label className="form-label">
                        Type of Property <span className="text-danger">*</span>
                      </BootstarpForm.Label>
                      <Field
                        as="select"
                        id="propertytype"
                        name="propertytype"
                        aria-label="Default select example"
                        className="form-select p-2"
                        value={plotData.propertytype}
                        onChange={(e) => {
                          setFieldValue("propertytype", e.target.value);
                          setPlotData({
                            ...plotData,
                            propertytype: e.target.value,
                          });
                        }}
                      >
                        {" "}
                        <option> </option>
                        <option value="Industrial">Industrial</option>
                        <option value="Resedential">Resedential</option>
                      </Field>
                      <ErrorMessage
                        name="propertytype"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </BootstarpForm.Group>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <BootstarpForm.Group>
                      <BootstarpForm.Label className="form-label">
                        Present Property No.{" "}
                        <span className="text-danger">*</span>
                      </BootstarpForm.Label>
                      <Field
                        as="select"
                        id="presentpropertyno"
                        name="presentpropertyno"
                        aria-label="Default select example"
                        className="form-select p-2"
                        value={plotData.presentpropertyno}
                        onChange={(e) => {
                          setFieldValue("presentpropertyno", e.target.value);
                          setPlotData({
                            ...plotData,
                            presentpropertyno: e.target.value,
                          });
                        }}
                      >
                        <option> </option>
                        <option value="A 007">A 007</option>
                        <option value="A 008">A 008</option>
                        <option value="A 009">A 009</option>
                      </Field>
                      <ErrorMessage
                        name="presentpropertyno"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </BootstarpForm.Group>
                  </div>
                  <div className="col-md-6">
                    <BootstarpForm.Group>
                      <BootstarpForm.Label className="form-label">
                        Plot Area in m2 <span className="text-danger">*</span>
                      </BootstarpForm.Label>
                      <InputGroup>
                        <Field
                          as={BootstarpForm.Control}
                          id="plotarea"
                          name="plotarea"
                          placeholder="Enter plot area..."
                        />
                      </InputGroup>
                      <ErrorMessage
                        name="plotarea"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </BootstarpForm.Group>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-6"></div>
                  <div className="col-md-6"></div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 lg-12 button-container">
                    <SecondaryButton
                      onClick={handleback}
                      label={"Cancel"}
                    ></SecondaryButton>
                    <PrimaryButton
                      label={"Save & Continue"}
                       onClick={handleNext}
                       disabled={isSubmitting}
                    ></PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
