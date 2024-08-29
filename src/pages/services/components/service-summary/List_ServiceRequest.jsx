 //React Library
 import React from 'react'
 import '../../../../styles/Global.scss';
 //React Bootstrap
import {
    Badge 
  } from "react-bootstrap";
 export default function List_ServiceRequest() {
   return (
     <>
       <table class="table  table-hover">
  <thead class="table-secondary">
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
      <td> <Badge bg="warning" text="dark">Withdrawn</Badge></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Charge in water supply</td>
      <td>Dipak Patil</td>
      <td>22 June 2024</td>
      <td>23 June 2024</td>
      <td className="text-dark fw-bold">23</td>
      <td> <Badge bg="success">Approved</Badge></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Charge in water supply</td>
      <td>Amar Thakur</td>
      <td>22 June 2024</td>
      <td>23 June 2024</td>
      <td className="text-dark fw-bold">17</td>
      <td> <Badge bg="danger">Rejected</Badge></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Charge in water supply</td>
      <td>Ajit Powar</td>
      <td>22 June 2024</td>
      <td>23 June 2024</td>
      <td className="text-dark fw-bold">10</td>
      <td> <Badge bg="dark">Aplication</Badge></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Charge in water supply</td>
      <td>Rakesh Desai</td>
      <td>22 June 2024</td>
      <td>23 June 2024</td>
      <td className="text-dark fw-bold">00</td>
      <td> <Badge bg="primary">Inprocess</Badge></td>
    </tr>
  </tbody>
</table>
     </>
   )
 }
 