//React Library
import React from "react";
import '../../../../styles/Global.scss';
//React Bootstrap
import { Row, Col, Card, Form,Badge } from "react-bootstrap";
// icons
import { BiRupee } from "react-icons/bi";
import { FaFileDownload } from "react-icons/fa";
import { MdFileDownloadOff } from "react-icons/md";
export default function List_WaterService() {
  return (
    <>
      <Row className="mt-1">
        <Card className="bg-gray">
          <Card.Body>
            <Row>
              <Col sm="6" md="4" lg="4" className="ms-auto">
                <Form.Label className="form-label text-muted">
                  Last Paid
                </Form.Label>
                <br />
                <Form.Label className="form-label f-size-lg "><BiRupee/>25000 
                &nbsp;<Badge className="mr-2" bg="secondary">On 24-June-2024</Badge>
                </Form.Label>
              </Col>
             
              <Col sm="6" md="4" lg="4">
                <Form.Label className="form-label text-muted">
                  Total Bill Payment Due
                </Form.Label>
                <br />
                <Form.Label className="form-label f-size-lg "><BiRupee/>20000 
                </Form.Label>
              </Col>
              <Col sm="12" md="4" lg="4">
              <div className="button-container text-end pt-3">
                <button className="button-black align-middle">Pay Total Dua</button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <table class="table  table-hover mt-3">
          <thead class="table-primary">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Bill Date</th>
              <th scope="col">Biil No</th>
              <th scope="col">Bill Amount</th>
              <th scope="col">Water Consumption Unit</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>24 June 2024</td>
              <td>BillNo-001</td>
              <td>25000</td>
              <td>1000 ltr.</td>
              <td><Badge bg="success">Payment Paid</Badge></td>
              <td><FaFileDownload/></td>
            </tr>
            <tr>
            <th scope="row">2</th>
              <td>24 June 2024</td>
              <td>BillNo-002</td>
              <td>25000</td>
              <td>1300 ltr.</td>
              <td><Badge bg="warning" text="dark">Pament Pending</Badge></td>
              <td><MdFileDownloadOff/></td>
            </tr>
            <tr>
            <th scope="row">3</th>
              <td>24 June 2024</td>
              <td>BillNo-003</td>
              <td>30000</td>
              <td>1200 ltr.</td>
              <td><Badge bg="danger">Payment Rejecated</Badge></td>
              <td><MdFileDownloadOff/></td>
            </tr>
          </tbody>
        </table>
      </Row>
    </>
  );
}
