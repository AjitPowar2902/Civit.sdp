import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { Container, Col, Row, Card, Form, ListGroup } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import SecondaryButton from "../../../../components/buttons/SecondaryButton";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import { FaRegEdit } from "react-icons/fa";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SweetAlert from "../../../../components/SweetAlert";
import FinalLeaseServices from "../../../../services/land-department-services/final-lease";
import { useSelector } from "react-redux";
const FinalLeaseSummary = () => {
  const componentRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const finalLeaseData = location.state?.data;

  const handleEdit = () => {
    navigate("/finallease");
  };

  const validationSchema = Yup.object().shape({
    agree: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
  });
  const UserId = useSelector((state) => state.user.UserId);
  const clkSubmit = async () => {
    SweetAlert({
      type: "confirmation",
      options: {
        title: "Are you sure?",
        text: "By clicking on 'Confirm', your application will be submitted. Are you sure you want to proceed?",
        cancelButtonText: "Back",
        confirmButtonText: "Confirm",
      },
      onConfirm: async () => {
        const response = await FinalLeaseServices.postFinalLease(
          UserId,
          finalLeaseData
        );
        console.log("response", response);
        if (response.IsSuccess) {
          SweetAlert({
            type: "toast",
            options: {
              title: "Application submitted!",
              text: "Application for Final Lease has been submitted successfully.",
              icon: "success",
              timer: 2000,
            },
          });
          navigate("/plotservice");
        }else{
          SweetAlert({
            type: "toast",
            options: {
              title: "Application failed!",
              text: "Application not submitted.",
              icon: "error",
              timer: 2000,
            },
          });
        }
      },
    });
  };
  const handleService = async () => {
    const response = await FinalLeaseServices.postFinalLease(
      UserId,
      finalLeaseData
    );
  };
  return (
    <>
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
            <Breadcrumbs
              label={"Services / Application For Water Meter Testing"}
            />
          </Col>
        </Row>
        <Row className="mt-3" style={{ height: "auto" }}>
          <ListGroup
            horizontal
            className="d-flex container"
            style={{ height: "auto" }}
          >
            <ListGroup.Item style={{ width: "50%" }}>
              Fields marked with (*) are Mandatory
            </ListGroup.Item>

            <ListGroup.Item style={{ width: "50%" }}>
              View List of Required Documents
            </ListGroup.Item>
          </ListGroup>
        </Row>
      </Container>

      <Container className="d-sm-block pb-5">
        <Row className="mt-3"></Row>
        <Card className="mt-3 box-shadow avoid-box-shadow" ref={componentRef}>
          <Card.Header className="bg-gray">
            <h4>Form Summary</h4>
            <small className="text-muted">Application For Final Lease</small>
          </Card.Header>
          <Card.Body className="force-overflow">
            <Card.Text>
              <Row>
                <Col
                  sm="12"
                  md="12"
                  lg="12"
                  className="hide-on-print mt-3 d-flex align-items-center"
                >
                  <h5 className={"mb-0 me-3"}>Application For Final Lease</h5>
                  <hr className="flex-grow-1" />
                  <div className="hide-on-print">
                    <a onClick={handleEdit} style={{ cursor: "pointer" }}>
                      &nbsp;Edit
                    </a>
                    &nbsp;
                    <FaRegEdit
                      onClick={handleEdit}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </Col>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">
                    Data BCC Obtained
                  </Form.Label>
                  <Form.Label className="w-100">
                    {finalLeaseData.DateBCCobtained
                      ? finalLeaseData.DateBCCobtained
                      : "NA"}
                  </Form.Label>
                </Col>
                <Col sm="12" md="4" lg="4" className="mt-3">
                  <Form.Label className="text-muted w-100">
                    Built up Area
                  </Form.Label>
                  <Form.Label className="w-100">
                    {finalLeaseData.BuiltUpArea
                      ? finalLeaseData.BuiltUpArea
                      : "NA"}
                  </Form.Label>
                </Col>
              </Row>
              <Row className="custom-row p-3 border rounded">
                <Col>
                  <Col>Tentative Cost</Col>
                  <Col className="fw-bolder">₹ 1,200</Col>
                </Col>
                <Col className="d-flex justify-content-end">
                  <div className="custom-row p-2 border rounded">
                    <div>Expected Payment Date</div> <div>August 30, 2024</div>
                  </div>
                </Col>
              </Row>
              <Formik
                initialValues={{ agree: false }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  if (values.agree) {
                    clkSubmit();
                  }
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, handleSubmit, touched, errors, values }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row>
                      <Col
                        sm="12"
                        md="12"
                        lg="12"
                        className="hide-on-print mt-3 d-flex align-items-center"
                      >
                        <h5 className={"mb-0 me-3"}>Declaration</h5>
                        <hr className="flex-grow-1" />
                      </Col>
                      <Col xs="auto" className="d-flex align-items-start">
                        <Field
                          type="checkbox"
                          name="agree"
                          id="custom-checkbox"
                          as={Form.Check}
                          className="me-2"
                          isInvalid={touched.agree && !!errors.agree}
                        />
                        <Col className="flex-column">
                          <Form.Label
                            htmlFor="custom-checkbox"
                            className="mb-0"
                          >
                            I/we hereby declare that the information provided by
                            me/us is true to the best of my knowledge.
                          </Form.Label>
                          <ErrorMessage
                            name="agree"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12" md="12" lg="12" className="mt-3 text-center">
                        <ReactToPrint
                          trigger={() => (
                            <SecondaryButton
                              type="button"
                              label={"Print"}
                              disabled={!values.agree}
                            />
                          )}
                          content={() => componentRef.current}
                          onAfterPrint={() => {
                            console.log("Document Printed");
                          }}
                        />
                        <PrimaryButton
                          type="submit"
                          label={"Submit Form"}
                          onClick={handleService}
                          disabled={!values.agree || isSubmitting}
                        />
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default FinalLeaseSummary;
