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
import commonInformation from "../../../../services/common-information";
import { useSelector } from "react-redux";
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
  const PlotId = useSelector((state) => state.plot.PlotId);
  const UserId = useSelector((state) => state.user.UserId);
  const handleNext = () => {
    console.log("Applicant Details", applicant);
    setData(prevData => ({
      ...prevData,
      ApplicantInfo: applicant
    }));
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    navigate('/raiseservicerequest');
  }

 

  useEffect(() => {
    const fetchApplicantData = async () => {
      try {
        const applicantData = await userServices.getApplicantDetails();
         const commonInfo = await commonInformation.getPlotInfo(PlotId,UserId);
         console.log("common Info", commonInfo.Data.ApplicantInfo.ContactPin);
        setApplicant(commonInfo.Data.ApplicantInfo); 
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
                        value={applicant.FullName == null ? "NA" : applicant.FullName} 
                        onChange={(e) => handleApplicantChange(e, 'FullName')}
                        
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
                        
                        value={applicant.Role == null ? "NA" : applicant.Role} 
                        onChange={(e) => handleApplicantChange(e, 'Role')}
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
                       value={applicant.ContactEmail == null ? "NA" : applicant.ContactEmail} 
                        onChange={(e) => handleApplicantChange(e, 'ContactEmail')}
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
                      <Form.Control type="text"
                       placeholder="9876543210" 
                       value={applicant.ContactMobile == null ? "NA" : applicant.ContactMobile} 
                        onChange={(e) => handleApplicantChange(e, 'ContactMobile')}
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
                         
                        value={applicant.ContactPhone == null ? "NA" : applicant.ContactPhone} 
                        onChange={(e) => handleApplicantChange(e, 'ContactPhone')}
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
                        
                        value={applicant.EducationQualification == null ? "NA" : applicant.EducationQualification} 
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
                      <Form.Select aria-label="Default select example" value={applicant.SpecialCategory}>
                        <option  value={applicant.SpecialCategory}>{applicant.SpecialCategory}</option>
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
                      <Form.Label>Preference Category</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Mention Education Qualification"
                        value={applicant.PreferenceCatergory == null ? "NA" : applicant.PreferenceCatergory} 
                        onChange={(e) => handleApplicantChange(e, 'PreferenceCatergory')}
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
                        
                        value={applicant.Address == null ? "NA" : applicant.Address} 
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
                        value={applicant.Address == null ? "NA" : applicant.Address} 
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
                      value={applicant.StateID == null ? "NA" : applicant.StateID} 
                      onChange={(e) => handleApplicantChange(e, 'StateID')}
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
                     value={applicant.DistrictID == null ? "NA" : applicant.DistrictID} 
                     onChange={(e) => handleApplicantChange(e, 'DistrictID')}
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
                     value={applicant.ContactCityTown == null ? "NA" : applicant.ContactCityTown} 
                     onChange={(e) => handleApplicantChange(e, 'ContactCityTown')}
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
                        type="text"
                        
                        value={applicant.ContactPin == null ? "NA" : applicant.ContactPin} 
                        onChange={(e) => handleApplicantChange(e, 'ContactPin')}
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
