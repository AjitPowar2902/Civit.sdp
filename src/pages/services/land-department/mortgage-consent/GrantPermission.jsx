import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import SecondaryButton from "../../../../components/buttons/PrimaryButton";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import axios from "axios";
import '../../../../styles/Global.scss';
import { PlotContext } from "../../components/common-plot-data/plot-context";
// import * as formik from "formik";
// import * as Yup from "yup";

const GrantPermission = () => {

  const {
    plotData,
    setPlotData,
    currentStep,
    setCurrentStep,
    setDisplayData,
    displayData,
    data,
    mortgageData,
    setMortgageData,
    numberOfbanks,
    setNumberOfbanks,
    showDetails,
    setShowDetails
  } = useContext(PlotContext);
  // const { Formik } = formik;
  const navigate= useNavigate();

  const plotId = useSelector((state) => state.plot.PlotId);
  console.log("plotId" , plotId);
   

  // const [mortgageData, setMortgageData] = useState({
  //         LeaseDeedDated: '',
  //         RegistrationReceiptOfLeaseDeedDated: '',
  //         NOCOfBankDated: '',
  //         LeaseRegNo1: '',
  //         LeaseRegNo2: '',
  //         TotalRepaidAmount: '',
         
  // });
  

  const increase = () => {
    setNumberOfbanks(numberOfbanks + 1);
    setShowDetails(true);
  }; // Show details when increasing counter s

  const decrease = () => {
    if (numberOfbanks > 0) {
      setNumberOfbanks(numberOfbanks - 1);
      if (numberOfbanks - 1 === 0) {
        setShowDetails(false); // Hide details when counter reaches zero
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMortgageData({
      ...mortgageData,
      [name]: value,
      plotId,
      numberOfbanks
    });
  };

  const handleNext = () => {
   // navigate("/mortgagesummary",{ state: { step: mortgageData } })
    setCurrentStep(currentStep + 1);
  };

  
  // const schema = Yup.object().shape({
  //   LeaseRegistrationNo1: Yup.number().required("Please enter Full Name"),
  //   LeaseRegistrationNo2: Yup.number().required("Please enter Role of Applicant"),
  //   DateofLeaseDeed: Yup.date().required("Please enter Email-ID"),
  //   RegistrationReceipt: Yup.date().required("Please enter Mobile Number"),
  //   LoanAmount: Yup.number().required("Please enter Telephone Number"),
  //   DateofNoc: Yup.date().required("Please enter your Edcuation Qualification"),
    
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data==",mortgageData)
    // Submit data to JSON Server API
    axios.post('https://192.168.4.231:44301/api/LandServices/SaveMortgageService', plotId, mortgageData, numberOfbanks)
      .then((response) => {
        alert("data added")
        console.log('Data added successfully:', response.data);
        // Reset form data after successful submission
        setMortgageData({
          LeaseRegNo1: '',
          LeaseRegNo2: '',
          LeaseDeedDated: '',
          RegistrationReceiptOfLeaseDeedDated: '',
          TotalRepaidAmount: '',
          NOCOfBankDated: '',
        });
      })
      .catch((error) => {
        console.error('There was an error adding the data!', error);
      });
  };

  const handleBack=()=>{
    setCurrentStep(4)
  }
  return (
    <>
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
            <Breadcrumbs label={"Services / Application for Mortage Concent"} />
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
      <Container className="d-sm-block">
        <Card className="mt-3 box-shadow">
          <Card.Header className="bg-gray">
            <h4>Grant for Permission of Mortage Concent</h4>
            <small className="text-muted">time requires 3 mins</small>
          </Card.Header>
          {/* <Formik
            validationSchema={schema}
            initialValues={{
              fullname: "",
              rollofapplicant: "",
              emailid: "",
              mobileno: "",
              telephoneno: "",
              educationqualification: "",
              specialcategory: "",
              preferencecategory: "",
              addressline1: "",
              addressline2: "",
              states: "",
              city: "",
              district: "",
              pincode: "",
            }}
   
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
             // handleNext(values);
              setSubmitting(false);
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => ( */}
        <Form onSubmit={handleSubmit}>    {/* noValidate onSubmit={handleSubmit} */}
            <Card.Body>
              <Card.Text>
                
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="LeaseRegistrationNo1"
                    >
                      <Form.Label>Lease Registration No-1</Form.Label>
                      <Form.Control
                        type="number"
                        name="LeaseRegNo1"
                        value={mortgageData.LeaseRegNo1}
                        onChange={handleChange}
                        placeholder="enter lease registration number"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="LeaseRegistrationNo2"
                    >
                      <Form.Label>Lease Registration No-2</Form.Label>
                      <Form.Control
                        type="number"
                        name="LeaseRegNo2"
                        value={mortgageData.LeaseRegNo2}
                        onChange={handleChange}
                        placeholder="enter lease registration number"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="DateofLeaseDeed"
                    >
                      <Form.Label>
                        Date of Lease Deed/Pre-Determined Lease
                      </Form.Label>
                      <Form.Control type="date"
                      name="LeaseDeedDated" 
                      value={mortgageData.LeaseDeedDated}
                      onChange={handleChange}
                      placeholder="enter date" />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="RegistrationReceipt"
                    >
                      <Form.Label>
                        Registration Receipt of Lease Deed Dated
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="RegistrationReceiptOfLeaseDeedDated"
                        value={mortgageData.RegistrationReceiptOfLeaseDeedDated}
                        placeholder="Mention Education Qualification"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Container>
                  <Row className="d-flex justify-content-between border border-medium p-2">
                    <Col xs="auto">
                      Number of Financial Institution/Banks from where Loan(s)
                      is(are) sanctioned *
                    </Col>
                    <Col xs="auto" className="text-right d-flex">
                      <Button
                        className="rounded-circle counter-button-custom " size="sm" style={{ height: "fit-content" }} onClick={decrease} > - </Button>
                      &nbsp;&nbsp;
                      <InputGroup>
                        <FormControl value={numberOfbanks} className="text-center" readOnly  style={{ width: "12rem" }} // Ensures the input box is small enough for a single digit
                        />
                        &nbsp;&nbsp;
                      </InputGroup>
                      <Button className="rounded-circle " size="sm" style={{ height: "fit-content" }} onClick={increase}
                      > + </Button>
                      &nbsp;&nbsp;
                    </Col>
                  </Row>
                </Container>
      
                {showDetails && (
                  <Row>
                    <Col sm="12" md="6" lg="6" className="mt-3">
                      <Form.Group
                        className="mb-3"
                        controlId="LoanAmount"
                      >
                        <Form.Label>Total Loan Amount Repaid(if any)</Form.Label>
                        <Form.Control 
                        type="text"
                        name="TotalRepaidAmount"
                        value={mortgageData.TotalRepaidAmount}
                        onChange={handleChange}
                         placeholder="Maharashtra" />
                      </Form.Group>
                    </Col>
                    <Col sm="12" md="6" lg="6" className="mt-3">
                      <Form.Group
                        className="mb-3"
                        controlId="DateofNoc"
                      >
                        <Form.Label>Date of NOC of Bank/ Financial Institution</Form.Label>
                        <Form.Control type="date"
                        name="NOCOfBankDated"
                        value={mortgageData.NOCOfBankDated}
                        onChange={handleChange}
                         placeholder="Dhule" />
                      </Form.Group>
                    </Col>
                  </Row>
                )}
                <Row>
                  <Col sm="12" md="12" lg="12" className="mt-3 t-center">
                    <SecondaryButton
                      onClick={handleBack}
                      label={"Back"}
                    />
                    <PrimaryButton
                      type="submit"
                      label={"Save & Continue"}
                      onClick={handleNext}
                      //onSubmit={handleNext}
                      //disabled={isSubmitting}
                    />
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Form>
           {/* )}
          </Formik> */}
        </Card>
      </Container>
    </>
  );
};

export default GrantPermission;
