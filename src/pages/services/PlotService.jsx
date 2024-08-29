 
import React, { useEffect, useState } from "react";
import { useNavigate,useLocation } from 'react-router-dom'
import {Row,Col,Breadcrumb,Container,Card,Form,Tabs,Tab,InputGroup} from "react-bootstrap";
import { IoHome } from "react-icons/io5";
import { AiOutlineNumber } from "react-icons/ai";
import { MdMyLocation } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import PendingActions from "../services/components/service-summary/PendingActions"
 import SuggestedActions from "../services/components/service-summary/SuggestedActions";
 import List_WaterService from "../services/components/service-summary/List_WaterService";
 import List_ServiceRequest from "../services/components/service-summary/List_ServiceRequest";
 import List_SubLettee from "../services/components/service-summary/List_SubLettee";
import '../../styles/Global.scss';
import plotServiceSummary from "../../services/plot-service-summary";
import { useDispatch } from "react-redux";
import { setPlotId } from "../../store/plot-slice";

export default function PlotDetail() {
  const navigate =  useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
    const Data = location.state?.data;
    const userData = Data.length > 0 ? Data[0] : {};
    const plotId = userData.CASubmissionId;


    
  useEffect(() => {
    dispatch(setPlotId(plotId));
  }, []);
    
    // useEffect(() => {
    //   const fetchServiceRequestSummary = async () => {
    //     try {
    //      const response  = await plotServiceSummary.getSubLettee(plotId);
        
    //      console.log(response);
         
    //       //console.log(rowData);
    //      // setDatatable(response);
          
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchServiceRequestSummary();
    // }, []); 

  const [key, setKey] = useState("1");
  function showStep(key) {
    switch (key) {
      case "1":
        return <List_ServiceRequest />;
      case "2":
        return <List_WaterService />;
      case "3":
        return <List_SubLettee plotId={plotId} />;
    }
  }
  function clksubmit() {
    navigate('/raiseservicerequest');
 }

 
  return (
    <>
      {/* <AnuragTopBar /> */}
      <Container className="d-sm-block">
        <Row className="mt-3">
          <Col sm="12" md="6" lg="6">
            <Breadcrumb>
              <Breadcrumb.Item href="#">
                <IoHome />
              </Breadcrumb.Item>
              <Breadcrumb.Item>Ghatkopar plot 3</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col sm="12" md="6" lg="6">
            <div className="button-container text-end ">
              <button className="rounded-1 button-Secondary mr-15 btn-4 hide-on-print" style={{padding:'5px 40px 5px 40px'}}>Apply Sub Lattee</button>
              <button className="rounded-1 button-Secondary mr-15 btn-4 hide-on-print" style={{padding:'5px 40px 5px 40px'}} onClick={clksubmit}>Raise Service Request</button>
            </div>
          </Col>
        </Row>
        <Row className="mt-3" style={{ height: "auto" }}>
          <Col>
            <Card className="border-0 ">
              <Card.Body className="bg-gray">
                <Card.Title className="p-2">Plot Details</Card.Title>
                <Card.Text className="mt-3">
                  <Row>
                    <Col>
                      <Form.Label className="form-label-gray f-size-sm">
                        <AiOutlineNumber className="text-black" />
                        &nbsp;Application No.
                      </Form.Label>
                      <Form.Label className="form-label-black f-size-md">
                        SWC/236/530/20240725/1234
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Label className="form-label-gray f-size-sm col-12">
                        <MdMyLocation className="text-blue" />
                        &nbsp;Plot Name.
                      </Form.Label>
                      <Form.Label className="form-label-black f-size-md col-12">
                        &nbsp; {userData.PlotName}
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Label className="form-label-gray f-size-sm">
                        <FaMapLocationDot className="text-green" />
                        &nbsp;Industrial Area
                      </Form.Label>
                      <Form.Label className="form-label-black f-size-md">
                        Ghatkopar Sector-2
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Label className="form-label-gray f-size-sm col-12">
                        <FaUser className="text-sky-blue" />
                        &nbsp;Applicant Name
                      </Form.Label>
                      <Form.Label className="form-label-black f-size-md col-12">
                       {/* Anurag Jain */}
                       
                      name
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Label className="form-label-gray f-size-sm">
                        <MdOutlineMailOutline className="text-red" />
                        &nbsp;E-Mail
                      </Form.Label>
                      <Form.Label className="form-label-black f-size-md ">
                        Anurag@gmail.com
                      </Form.Label>
                    </Col>
                  </Row>
                </Card.Text>
                <Row>
                  <Col sm="12" md="3" lg="3" className="pt-2">
                    <Card className="tiles-shadow">
                      <Card.Body>
                        <h3 className="fw-bold text-muted">20</h3>
                        <hr />
                        <Card.Subtitle className="mt-3 text-muted">
                          Pending Actions
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm="12" md="3" lg="3" className="pt-2">
                    <Card className="tiles-shadow">
                      <Card.Body>
                        <h3 className="fw-bold text-muted">20</h3>
                        <hr />
                        <Card.Subtitle className="mt-3 text-muted">
                          Application being processed
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm="12" md="3" lg="3" className="pt-2">
                    <Card className="tiles-shadow">
                      <Card.Body>
                        <h3 className="fw-bold text-muted">15</h3>
                        <hr />
                        <Card.Subtitle className="mt-3 text-muted">
                          Approved Applications
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm="12" md="3" lg="3" className="pt-2">
                    <Card className="tiles-shadow">
                      <Card.Body>
                        <h3 className="fw-bold text-muted">10</h3>
                        <hr />
                        <Card.Subtitle className="mt-3 text-muted red-hover">
                          Suggested Applications
                        </Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm="12" md="6" lg="6"  className="pt-2">
            <PendingActions />
          </Col>
          <Col sm="12" md="6" lg="6" className="pt-2">
            <SuggestedActions />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col sm="12" md="5" lg="5" className="pt-2">
            <Tabs
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 border-0"
            >
              <Tab eventKey="1" title="Service Request"></Tab>
              <Tab eventKey="2" title="Water Biils"></Tab>
              <Tab eventKey="3" title="Sub Lettee"></Tab>
            </Tabs>
          </Col>
          <Col sm="12" md="2" lg="2" className="pt-2">
            <Form.Select>
              <option>Filter By Year</option>
            </Form.Select>
          </Col>
          <Col sm="12" md="2" lg="2" className="pt-2">
            <Form.Select>
              <option>Filter By Application Status</option>
            </Form.Select>
          </Col>
          <Col sm="12" md="3" lg="3" className="pt-2">
            <Form.Group>
              <InputGroup>
                <Form.Control placeholder="Search for service request" />
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="pt-2">{showStep(key)}</Col>
        </Row>
      </Container>
    </>
  );
}
