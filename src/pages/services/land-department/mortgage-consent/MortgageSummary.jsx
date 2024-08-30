import React, { useState, useEffect,useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { PlotContext } from "../../components/common-plot-data/plot-context";
import ListGroup from "react-bootstrap/ListGroup";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import SecondaryButton from "../../../../components/buttons/PrimaryButton";
import PrimaryButton from "../../../../components/buttons/PrimaryButton";
import mortgageConsentService from "../../../../services/land-department-services/mortgage-consent-service";
import SweetAlert from "../../../../components/SweetAlert";
const MortgageSummary = () => {
  const {
    currentStep,
    setCurrentStep,
    mortgageData
  } = useContext(PlotContext);

  console.log("current",currentStep)
  const navigate = useNavigate();
  const handleEdit=()=>{
    navigate('/grantpermission');
  }
  const handleBack = () =>{
   
   setCurrentStep(currentStep - 1)
  //navigate('/grantpermission');
  }

  const handleNext = () =>{
    setCurrentStep(currentStep-1);
  }
   
  
  console.log("ANSWER,", mortgageData);
  const UserId = useSelector((state) => state.user.UserId);
  const handleSubmit = async () => {
    SweetAlert({
      type: "confirmation",
      options: {
        title: "Are you sure?",
        text: "By clicking on 'Confirm', your application will be submitted. Are you sure you want to proceed?",
        cancelButtonText: "Back",
        confirmButtonText: "Confirm",
      },
      onConfirm: async () => {
        const response = await mortgageConsentService.postMortgageConsent(
          UserId,
          mortgageData
        );
        console.log("response", response);
        if (response.IsSuccess) {
          SweetAlert({
            type: "toast",
            options: {
              title: "Application submitted!",
              text: "Application for Mortgage consent has been submitted successfully.",
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
          navigate("/plotservice");
        }
      },
    });
  };
  

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
            <h4>Form Summary</h4>
            <small className="text-muted">
              Application for Mortage Concent
            </small>
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
                  <h5 className={"mb-0 me-3"}>Application For Grant of Permission for Mortage Concent</h5>
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
                  <Row></Row>
                </Col>
                
              </Row>
              <br/>
              <Row>
                <Col >
                    <Form.Label className="form-label-gray f-size-sm col-12 font-weight-light" >Lease Registration No-1.</Form.Label>
                    <Form.Label className="font-weight-light">
                        {mortgageData.LeaseRegNo1}
                      </Form.Label>
                </Col>
                <Col>
                    <Form.Label className="form-label-gray f-size-sm col-12">Lease Registration No-2.</Form.Label>
                    <Form.Label >
                    {mortgageData.LeaseRegNo2}
                    </Form.Label>
                </Col>
                
                <Col>
                  <Form.Label className="form-label-gray f-size-sm col-12">Date of Lease Deed/Pre-determined Lease</Form.Label>
                 
                  <Form.Label >
                  {mortgageData.LeaseDeedDated}
                   
                  </Form.Label>
                </Col>
               
              </Row>
              <br/>
              <Row>
                <Col>
                  <Form.Label className="form-label-gray f-size-sm col-12">Registration Receipt of Lease Deed Dated</Form.Label>
                 
                  <Form.Label >
                  {mortgageData.RegistrationReceiptOfLeaseDeedDated}
                   
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Label className="form-label-gray f-size-sm col-12">Numer of finale Institution/Banks</Form.Label>
                 
                  <Form.Label  >
                  {mortgageData.numberOfbanks}
                   
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Label className="form-label-gray f-size-sm col-12 " >Total Load Amount Repaid(if any)</Form.Label>
                 
                  <Form.Label className="text-black" >
                  {mortgageData.TotalRepaidAmount}
                   
                  </Form.Label>
                </Col>
              </Row>
              <br/>
              <Row>
             
                  <Col>
                      <Form.Label className="form-label-gray f-size-sm col-12 " >Date of NOC of Banks/Financial Institution</Form.Label>
                    
                      <Form.Label className="text-black" >
                      {mortgageData.NOCOfBankDated}
                      
                      </Form.Label>
                    </Col>
                    <Col></Col>
                    <Col></Col>
            </Row>
            <Row>
                <Col
                  sm="12"
                  md="12"
                  lg="12"
                  className="hide-on-print mt-3 d-flex align-items-center"
                >
                  <h5 className={"mb-0 me-3"}>Declaration</h5>
                  <hr className="flex-grow-1" />
                  <Row></Row>
                </Col>
                
              </Row>
              <br/>
              <Row>
                  <Col sm="12" md="12" lg="12" className="mt-3 t-center">
                    <SecondaryButton onClick={handleBack} label={"Back"} />
                    <PrimaryButton
                      type="submit"
                      label={"Submit Form"}
                      onClick={handleSubmit}
                      //disabled={isSubmitting}
                    />
                  </Col>
                </Row>
            <Form>
                
            </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default MortgageSummary;
