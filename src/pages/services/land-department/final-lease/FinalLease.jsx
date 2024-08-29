import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import {
  Container,
  Col,
  Row,
  Card,
  Form,
  ListGroup,
  InputGroup,
} from "react-bootstrap";
import SecondaryButton from "../../../../components/buttons/SecondaryButton";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import * as formik from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const FinalLease = () => {
  const [DateBCCobtained,setDateBCCobtained] = useState("");
  const [BuiltUpArea, setBuiltUpArea] = useState("");
  const [finalLeaseData, setFinalLeaseData] = useState([]);
  const today = new Date();
  const navigate = useNavigate();
  const { Formik } = formik;
  const PlotId = useSelector((state) => state.plot.PlotId);

  const schema = Yup.object().shape({
    DateBCCobtained: Yup.date()
      .required("Date is required")
      .nullable()
      .min(today, "Date cannot be earlier than today"),
    BuiltUpArea: Yup.number()
      .typeError("Plot area must be a number")
      .required("Please enter a plot area")
      .positive("Plot area must be a positive number")
      .integer("Plot area must be an integer")
      .min(0, "Plot area must be at least 0"),
  });
  const handleBack = () => {
    navigate("/raiseservicerequest");
  };
  const handleCustomChange = (e, handleChange) => {
    const { name, value } = e.target;
    handleChange(e);
    setFinalLeaseData((prevData) => ({
      ...prevData,
      [name]: value,
      PlotId
    }));
  };

  return (
    <>
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
            <Breadcrumbs label={"Services / Application for Final Lease"} />
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
      </Container>
      <Container className="d-sm-block h-100 p-0">
        <Card className="mt-3 box-shadow">
          <Card.Header className="bg-gray">
            <h4>Application for Final Lease</h4>
            <small className="text-muted">time requires 3 mins</small>
          </Card.Header>
          <Formik
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              console.log("formik values", values);
              navigate("/finalleasesummary", {
                state: { data: finalLeaseData },
              });
              console.log("finalLeasedata", finalLeaseData);
              setSubmitting(false);
            }}
            initialValues={{
              DateBCCobtained: "",
              BuiltUpArea: "",
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
                <Card.Body>
                  <Card.Text>
                    <Row className="mt-4">
                      <Col sm="12" md="6" lg="6" className="mt-3">
                        <Form.Group className="mb-3" controlId="formDate">
                          <Form.Label>Data BCC Obtained</Form.Label>
                          <Form.Control
                            type="date"
                            name="DateBCCobtained"
                            as={Form.Control}
                            onChange={(e) =>
                              handleCustomChange(e, handleChange)
                            }
                            values={values.DateBCCobtained}
                            isInvalid={!!errors.DateBCCobtained && touched.DateBCCobtained}
                          />
                          {touched.DateBCCobtained && errors.DateBCCobtained && (
                            <div className="invalid-feedback">
                              {errors.DateBCCobtained}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                      <Col sm="12" md="6" lg="6" className="mt-3">
                        <Form.Group
                          className="mb-3"
                          controlId="formBuiltUpArea"
                        >
                          <Form.Label>Built up Area</Form.Label>
                          <InputGroup hasValidation>
                            {" "}
                            <Form.Control
                              type="number"
                              name="BuiltUpArea"
                              as={Form.Control}
                              placeholder="Enter built up area"
                              onChange={(e) =>
                                handleCustomChange(e, handleChange)
                              }
                              values={values.BuiltUpArea}
                              isInvalid={
                                !!errors.BuiltUpArea && touched.BuiltUpArea
                              }
                            />{" "}
                            <InputGroup.Text id="inputGroupPrepend">
                              Sq.Mtr
                            </InputGroup.Text>
                            {touched.BuiltUpArea && errors.BuiltUpArea && (
                              <div className="invalid-feedback">
                                {errors.BuiltUpArea}
                              </div>
                            )}
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" md="12" lg="12" className="mt-3 text-center">
                        <SecondaryButton
                          onClick={handleBack}
                          label={"Cancel"}
                       
                        />
                        <PrimaryButton
                          type="submit"
                          label={"View Summary"}
                          //onClick={handleNext}
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
};

export default FinalLease;
