import React, { useContext, useEffect, useState } from "react";
import { Container, Col, Row, Card, Form } from "react-bootstrap";
import { RegistrationContext } from "../../../registration/registration-context";
import "../../../../styles/global.scss"
import SecondaryButton from "../../../../components/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import plotRegistrationServices from "../../../../services/plot-registration-services";
import * as formik from "formik";
import * as Yup from "yup";
import SweetAlert from "../../../../components/SweetAlert";

export default function PlotDetails() {
  const {
    plotData,
    setPlotData,
    currentStep,
    setCurrentStep,
    setDisplayData,
    displayData,
  } = useContext(RegistrationContext);
  const [districts, setDistricts] = useState([]);
  const [industrialAreas, setIndustrialAreas] = useState([]);
  const [propertyForms, setPropertyForms] = useState([]);
  const [propertyForm, setPropertyForm] = useState(
    plotData.propertyforms || ""
  );
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [propertyType, setPropertyType] = useState(plotData.propertytype || "");
  const [propertyNumbers, setPropertyNumbers] = useState([]);
  const [selectedDistrictId, setSelectedDistrictId] = useState(
    plotData.district || ""
  );
  const [selectedIndustrialAreaId, setSelectedIndustrialAreaId] = useState(
    plotData.prtUnit || ""
  );
  const navigate = useNavigate();

  const getDistrictData = async () => {
    const district = await plotRegistrationServices.getDistrict();
    if (district.ErrorCode === 0) {
      setDistricts(district.Data);
    } else if (district.ErrorCode === -1) {
      setDistricts([{ DistrictId: "", DistrictName: "No data present" }]);
    } else {
      setDistricts([]);
    }
  };

  const getIndustrialAreaData = async (districtId) => {
    if (districtId) {
      const industrialArea = await plotRegistrationServices.getIndustrialArea(
        districtId
      );
      if (industrialArea.ErrorCode === 0) {
        setIndustrialAreas(industrialArea.Data);
      } else if (industrialArea.ErrorCode === -1) {
        setIndustrialAreas([
          { IndustrialAreaId: "", IndustrialAreaName: "No data present" },
        ]);
      } else {
        setIndustrialAreas([]);
      }
    } else {
      setIndustrialAreas([]);
    }
  };

  const getPropertyForms = async (industrialAreaId) => {
    if (industrialAreaId) {
      const propertyForms = await plotRegistrationServices.getPropertForms(
        industrialAreaId
      );
      if (propertyForms.ErrorCode === 0) {
        setPropertyForms(propertyForms.Data);
      } else if (propertyForms.ErrorCode === -1) {
        setPropertyForms([
          { PropertyType: "", PropertyType: "No data present" },
        ]);
      } else {
        setPropertyForms([]);
      }
    } else {
      setPropertyForms([]);
    }
  };

  const getPropertyTypes = async (industrialAreaId) => {
    if (industrialAreaId) {
      const propertyTypes = await plotRegistrationServices.getPropertyType(
        industrialAreaId
      );
      if (propertyTypes.ErrorCode === 0) {
        setPropertyTypes(propertyTypes.Data);
      } else if (propertyTypes.ErrorCode === -1) {
        setPropertyTypes([
          { PlotTypeMasterName: "", PlotTypeMasterName: "No data present" },
        ]);
      } else {
        setPropertyTypes([]);
      }
    } else {
      setPropertyTypes([]);
    }
  };

  const getPropertyNumbers = async (
    selectedIndustrialAreaId,
    propertyType,
    propertyForm
  ) => {
    if (selectedIndustrialAreaId && propertyForm && propertyType) {
      const propertyNumbers = await plotRegistrationServices.getPropertyNumber(
        selectedIndustrialAreaId,
        propertyType,
        propertyForm
      );
      if (propertyNumbers.ErrorCode === 0) {
        setPropertyNumbers(propertyNumbers.Data);
      } else if (propertyNumbers.ErrorCode === -1) {
        setPropertyNumbers([
          { Property_ID: "", Lms_plot_no: "No data present" },
        ]);
      } else {
        setPropertyNumbers([]);
      }
    } else {
      setPropertyNumbers([]);
    }
  };

  useEffect(() => {
    getDistrictData();
  }, []);

  useEffect(() => {
    getIndustrialAreaData(selectedDistrictId);
  }, [selectedDistrictId]);

  useEffect(() => {
    getPropertyForms(selectedIndustrialAreaId);
  }, [selectedIndustrialAreaId]);

  useEffect(() => {
    getPropertyTypes(selectedIndustrialAreaId);
  }, [selectedIndustrialAreaId]);

  useEffect(() => {
    getPropertyNumbers(selectedIndustrialAreaId, propertyType, propertyForm);
  }, [selectedIndustrialAreaId, propertyType, propertyForm]);

  useEffect(() => {
    updateDisplayData();
  }, [
    plotData,
    districts,
    industrialAreas,
    propertyForms,
    propertyTypes,
    propertyNumbers,
  ]);

  const handleNext = () => {
    setCurrentStep(2);
  };

  const handleback = (e) => {
    navigate("/dashboard");
  };

  const updateDisplayData = () => {
    const districtName =
      districts.find(
        (district) => district.DistrictId === parseInt(plotData.district)
      )?.DistrictName || "";
    const industrialAreaName =
      industrialAreas.find(
        (area) => area.IndustrialAreaId === parseInt(plotData.prtUnit)
      )?.IndustrialAreaName || "";
    const propertyFormName = plotData.propertyforms || "";
    const propertyTypeName = plotData.propertytype || "";
    const propertyNumber = plotData.presentpropertyno || "";
    setDisplayData({
      ...displayData,
      districtName,
      industrialAreaName,
      propertyFormName,
      propertyTypeName,
      propertyNumber,
    });
  };

  const handleDropdownChange = (e, handleChange) => {
    const { name, value } = e.target;
    handleChange(e);
    setPlotData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "district") {
      setSelectedDistrictId(value);
    } else if (name === "prtUnit") {
      setSelectedIndustrialAreaId(value);
    } else if (name === "propertyforms") {
      setPropertyForm(value);
    } else if (name === "propertytype") {
      setPropertyType(value);
    }
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
    plotarea: Yup.number()
      .typeError("Plot area must be a number")
      .required("Please enter a plot area")
      .positive("Plot area must be a positive number")
      .integer("Plot area must be an integer")
      .min(0, "Plot area must be at least 0"),
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
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              const hasNoData = [
                values.district,
                values.prtUnit,
                values.propertyforms,
                values.propertytype,
                values.presentpropertyno,
              ].some((value) => value === "No data present");
              if (hasNoData) {
                console.warn(
                  "Some dropdowns have 'No data present' as the selected value."
                );
              }
              handleNext(values);
              setSubmitting(false);
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              errors,
              isSubmitting,
            }) => (
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
                                handleDropdownChange(e, handleChange)
                              }
                              isValid={touched.district && !errors.district}
                              isInvalid={touched.district && !!errors.district}
                            >
                              <option value="">Select an option</option>
                              {districts.map((district) => (
                                <option
                                  key={district.DistrictId}
                                  value={district.DistrictId}
                                >
                                  {district.DistrictName}
                                </option>
                              ))}
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
                                value={plotData.prtUnit}
                                onChange={(e) =>
                                  handleDropdownChange(e, handleChange)
                                }
                                isValid={touched.prtUnit && !errors.prtUnit}
                                isInvalid={touched.prtUnit && !!errors.prtUnit}
                              >
                                <option> Select an option</option>
                                {industrialAreas.map((industrialArea) => (
                                  <option
                                    key={industrialArea.IndustrialAreaId}
                                    value={industrialArea.IndustrialAreaId}
                                  >
                                    {industrialArea.IndustrialAreaName}
                                  </option>
                                ))}
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
                                  handleDropdownChange(e, handleChange)
                                }
                                isValid={
                                  touched.propertyforms && !errors.propertyforms
                                }
                                isInvalid={
                                  touched.propertyforms &&
                                  !!errors.propertyforms
                                }
                              >
                                <option>Select an option</option>
                                {propertyForms.map((propertyForm) => (
                                  <option
                                    key={propertyForm.PropertyType}
                                    value={propertyForm.PropertyType}
                                  >
                                    {propertyForm.PropertyType}
                                  </option>
                                ))}
                              </Form.Select>
                              {touched.propertyforms &&
                                errors.propertyforms && (
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
                                value={plotData.propertytype}
                                onChange={(e) =>
                                  handleDropdownChange(e, handleChange)
                                }
                                isValid={
                                  touched.propertytype && !errors.propertytype
                                }
                                isInvalid={
                                  touched.propertytype && !!errors.propertytype
                                }
                              >
                                <option> Select an option</option>
                                {propertyTypes.map((propertyType) => (
                                  <option
                                    key={propertyType.PlotTypeMasterName}
                                    value={propertyType.PlotTypeMasterName}
                                  >
                                    {propertyType.PlotTypeMasterName}
                                  </option>
                                ))}
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
                                value={plotData.presentpropertyno}
                                onChange={(e) =>
                                  handleDropdownChange(e, handleChange)
                                }
                                isValid={
                                  touched.presentpropertyno &&
                                  !errors.presentpropertyno
                                }
                                isInvalid={
                                  touched.presentpropertyno &&
                                  !!errors.presentpropertyno
                                }
                              >
                                <option>Select an option</option>
                                {propertyNumbers.map((propertyNumber) => (
                                  <option
                                    key={propertyNumber.Property_ID}
                                    value={propertyNumber.Lms_plot_no}
                                  >
                                    {propertyNumber.Lms_plot_no}
                                  </option>
                                ))}
                              </Form.Select>
                              {touched.presentpropertyno &&
                                errors.presentpropertyno && (
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
                                  handleDropdownChange(e, handleChange)
                                }
                                isValid={touched.plotarea && !errors.plotarea}
                                isInvalid={
                                  touched.plotarea && !!errors.plotarea
                                }
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
                        <SecondaryButton
                          onClick={handleback}
                          // onSubmit={handleSubmit}
                          label={"Cancel"}
                          disabled={isSubmitting}
                        ></SecondaryButton>
                        <PrimaryButton
                          onSubmit={handleNext}
                          label={"Save & Continue"}
                        ></PrimaryButton>
                        {/* <button type="submit">save and continue</button> */}
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
