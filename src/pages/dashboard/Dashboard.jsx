import React, { useEffect, useState } from "react";
import {Button,Form,Nav,Navbar,NavDropdown,Container,Row,Col,Breadcrumb,Badge} from 'react-bootstrap';

import NavMenu from "../../components/NavMenu";
import Cards from "../../components/Cards";
import data from '../../data/data.json'
import SecondaryButton from "../../components/buttons/SecondaryButton";
import Badges from "../../components/Badges";
import { useNavigate } from "react-router-dom";

import DashboardServices from "../../services/dashboard-services";

export default function Dashboard() {

  const[cards,setCards] = useState([]);
    const {actionsData,otherData} = data;
    const navigate = useNavigate();
    const url = process.env.REACT_APP_BASE_URL;
    
    const clksubmit = ()=>
    {
      
 
     navigate('/plotregistration');
    }

    // const fetchData = async () => {
    //   try {
       
    //     const result = await apiService.get('/company');
    //     console.log(result);
    //   } catch (error) {
        
    //     console.log(error);
    //   }
    // };


 
    const fetchCardDetails = async () => {
      try {
        const response = await DashboardServices.getCardData();
        setCards(response.data); // Assuming the response data contains project types
     
      } catch (error) {
        console.error('Error fetching project types:', error);
      }
    };

    useEffect(()=>{
      fetchCardDetails();
    },[])

  return (
    <>
      <NavMenu />
      <Container className="d-sm-block">
        <Row className="mt-3">
         
          {cards.map((card,index)=>(
            <Cards key={index} header={card.header} subtitle={card.subtitle}/>
           ))}
           
        </Row>
<Row className="mt-5"></Row>
        <Row className='mt-3'>
        
        <Col lg='3' sm='12' className="mt-3">
        <label className='fw-bold'  >My Plots</label>
        </Col>
        <Col lg='3' sm='12' className="mt-3">
        <Form.Control   type="text" placeholder="Serch for plot" />
        </Col>
        <Col lg='3' sm='12' className="mt-3">
        <Form.Select   aria-label="Filter by IA">
          <option>Filter by IA</option>
          <option value="1">Pune</option>
          <option value="2">Pimpri</option>
          <option value="3">Mumbai</option>
        </Form.Select>
        </Col>
        <Col lg='3' sm='12' className="mt-3" style={{textAlign:"right"}}>
        <SecondaryButton label={"Register a plot"} onClick={clksubmit}></SecondaryButton> &nbsp;
        
        </Col>
        </Row>
        <Row className="mt-3">
          <Col>
          <table className="table  table-hover">
  <thead className="table-secondary">
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Service Name</th>
      <th scope="col">Created by</th>
      <th scope="col">Created on</th>
      <th scope="col">Submitted on</th>
      <th scope="col">Pending actions</th>
      <th scope="col">status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Charge in water supply</td>
      <td>Anurag jain</td>
      <td>22 June 2024</td>
      <td>23 June 2024</td>
      <td className="text-danger fw-bold">02</td>
      <td> <Badges label={"Withdrawn"} background={"warning"}/></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Charge in water supply</td>
      <td>Dipak Patil</td>
      <td>22 June 2024</td>
      <td>23 June 2024</td>
      <td className="text-dark fw-bold">23</td>
      <td> <Badges label={"Approved"} background={"success"}/></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Charge in water supply</td>
      <td>Amar Thakur</td>
      <td>22 June 2024</td>
      <td>23 June 2024</td>
      <td className="text-dark fw-bold">17</td>
      <td> <Badges label={"Rejected"} background={"danger"}/></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Charge in water supply</td>
      <td>Ajit Powar</td>
      <td>22 June 2024</td>
      <td>23 June 2024</td>
      <td className="text-dark fw-bold">10</td>
      <td><Badges label={"Application"} background={"dark"}/></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Charge in water supply</td>
      <td>Rakesh Desai</td>
      <td>22 June 2024</td>
      <td>23 June 2024</td>
      <td className="text-dark fw-bold">00</td>
      <td>  <Badges label={"InProcess"} background={"primary"}/></td>
    </tr>
  </tbody>
</table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
