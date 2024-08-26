//React Library
 import React from 'react'
 import '../../../../styles/global.scss';
 //React Bootstrap
import { Row, Col, Card, Form,Badge } from "react-bootstrap";
 export default function List_SubLetter() {
   return (
     <>
<table class="table  table-hover">
  <thead class="table-primary">
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Sub Lettee Name</th>
      <th scope="col">Sub Lettee Contact No.</th>
      <th scope="col">Sub Lettee E-Mail</th>
      <th scope="col">Plot Area(sq.ft.)</th>
      <th scope="col">From Date</th>
      <th scope="col">To Date</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Ajit Powar</td>
      <td>7047478701</td>
      <td>AjitPowar@gmail.com</td>
      <td>255010</td>
      <td>24 June 2024</td>
      <td>24 June 2024</td>
      <td><Badge bg="success">Approved</Badge></td>
    </tr>
    <tr>
    <th scope="row">2</th>
    <td>Amar Thakur</td>
      <td>AmarThakur@gmail.com</td>
      <td>2565565</td>
      <td>255010</td>
      <td>24 June 2024</td>
      <td>24 June 2024</td>
      <td><Badge bg="warning" text='dark'>Pending</Badge></td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Anurag Jain</td>
      <td>Ani@gmail.com</td>
      <td>3</td>
      <td>255010</td>
      <td>24 June 2024</td>
      <td>24 June 2024</td>
      <td><Badge bg="danger">Rejected</Badge></td>
    </tr>
  </tbody>
</table>
     </>
   )
 }
 