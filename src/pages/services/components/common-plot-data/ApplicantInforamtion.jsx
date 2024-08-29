import React, {useContext, useEffect, useState} from "react";
import {useNavigate } from "react-router-dom"
import { Container, Col, Row, Card, Form } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import SecondaryButton from "../../../../components/buttons/SecondaryButton";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
//import { RegistrationContext } from "../../../registration/registration-context";
import { PlotContext } from "./plot-context";
import userServices from "../../../../services/user-services";
import Dropzone from "../../../../components/Dropzone";
const ApplicantInformation = () => {
    
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const {
    plotData,
    setPlotData,
    currentStep,
    setCurrentStep,
    setDisplayData,
    displayData,
    data,
    setData
  } = useContext(PlotContext);
  const[applicant, setApplicant] = useState([]);

  const handleNext = () => {
    console.log("Applicant Details", applicant);
    setData(prevData => ({
      ...prevData,
      ApplicantInfo: applicant
    }));
    setCurrentStep(2);
  };

  const handleBack = () => {
    navigate('/dashboard');
  }

 

  useEffect(() => {
    const fetchApplicantData = async () => {
      try {
        const applicantData = await userServices.getApplicantDetails();
         
        setApplicant(applicantData); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }finally{
         
      }
    };

    fetchApplicantData();
  }, []); 

  const handleApplicantChange = (e, property) => {
    const newValue = e.target.value;

    setApplicant(prevData => ({
      ...prevData,
      [property]: newValue
    }));
  };
 
  return (
    <>
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="12" lg="12">
            <Breadcrumbs
              label={
                "Services / Application for grant of Extention of Time Limit of obtaining OC"
              }
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
            <h4>Applicant Information </h4>
            <small className="text-muted">time requires 3 mins</small>
          </Card.Header>
          <Form>
            <Card.Body>
              <Card.Text>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="eg. Bharat Jadhav"
                        value={applicant.fullName} 
                        onChange={(e) => handleApplicantChange(e, 'fullName')}
                        
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Role of Applicant</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Company Employee"
                        
                        value={applicant.RoleOfApplicant} 
                        onChange={(e) => handleApplicantChange(e, 'RoleOfApplicant')}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email Id</Form.Label>
                      <Form.Control type="email"
                       placeholder="adbc@gmail.com"
                       value={applicant.email} 
                        onChange={(e) => handleApplicantChange(e, 'email')}
                       disabled
                       />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="number"
                       placeholder="9876543210" 
                       value={applicant.MobileNumber} 
                        onChange={(e) => handleApplicantChange(e, 'MobileNumber')}
                       disabled
                       />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Telephone Number</Form.Label>
                      <Form.Control
                       type="text"
                        placeholder="02564-764853"
                         
                        value={applicant.TelephoneNumber} 
                        onChange={(e) => handleApplicantChange(e, 'TelephoneNumber')}
                        />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Education Qualification</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mention Education Qualification"
                        
                        value={applicant.EducationQualification} 
                        onChange={(e) => handleApplicantChange(e, 'EducationQualification')}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Special Category</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Select Special Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Education Qualification</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mention Education Qualification"
                        value={applicant.EducationQualification} 
                        onChange={(e) => handleApplicantChange(e, 'EducationQualification')}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Address Line 1</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="xyz address"
                        
                        value={applicant.Address} 
                        onChange={(e) => handleApplicantChange(e, 'Address')}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Address Line 2</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="abc address "
                        value={applicant.Address} 
                        onChange={(e) => handleApplicantChange(e, 'Address')}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>States</Form.Label>
                      <Form.Control type="text" placeholder="Maharashtra" 
                      value={applicant.State} 
                      onChange={(e) => handleApplicantChange(e, 'State')}
                        disabled />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>District</Form.Label>
                      <Form.Control type="text" placeholder="Dhule"
                     value={applicant.District} 
                     onChange={(e) => handleApplicantChange(e, 'District')}
                      disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>City/Town Name</Form.Label>
                      <Form.Control type="text" placeholder="Dhule"
                     value={applicant.CityTown} 
                     onChange={(e) => handleApplicantChange(e, 'CityTown')}
                      disabled
                       />
                    </Form.Group>
                  </Col>
                  <Col sm="12" md="6" lg="6" className="mt-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="425412"
                        value={applicant.Pincode} 
                        onChange={(e) => handleApplicantChange(e, 'Pincode')}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Dropzone
                    name="files"
                    files={files}
                    setFiles={setFiles}
                  />
                </Row>
                <Row>
                  <Col sm="12" md="12" lg="12" className="mt-3 t-center">
                    <SecondaryButton onClick={handleBack} label={"Back"} />
                    <PrimaryButton
                      type="submit"
                      label={"Save & Continue"}
                      onClick={handleNext}
                      //disabled={isSubmitting}
                    />
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default ApplicantInformation;
