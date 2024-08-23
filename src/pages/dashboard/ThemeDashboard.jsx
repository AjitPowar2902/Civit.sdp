import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import "../../styles/global.scss";
import { Col, Container, Row } from "react-bootstrap";
//import SecondaryButton from "../../components/buttons/SecondaryButton";
//import PrimaryButton from "../../components/buttons/PrimaryButton";
 //import '../../styles/CI-UI.scss';
 //import '../../styles/CI-UX.scss';
//import '../../styles/main.scss';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import "../../styles/custom-bootstrap.scss";
export default function ThemeDashboard() {
  return (
    <>
      <Container><br/>
        <Row>
         
          <Col>
            <Form>
            <Form.Group className="w-50"  >
                <Form.Label className="text-large txt-primary">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
            
              </Form.Group>
              <Form.Group className="w-30"  >
                <Form.Label className="text-medium txt-primary">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            
              </Form.Group>

              <Form.Group className="w-50"  >
                <Form.Label className="text-small txt-primary">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="w-50"  >
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
{/* <Button  className="btn-sdp-primary-sm ">btn-small</Button>
<button type="button" className="btn-sdp-primary-sm">Success</button>
<Button className="btn-sdp-primary-md ">btn-medium</Button>
<Button className="btn-sdp-primary-lg ">btn-large</Button>

<button className="btn-sdp-primary-sm">TEST </button>
<br/><br/>
<Button className="btn-sdp-secondary-sm ">btn-small</Button>
<Button className="btn-sdp-secondary-md ">btn-medium</Button>
<Button className="btn-sdp-secondary-lg ">btn-large</Button> */}

<button className="ci-primary-custom">HTML</button>
    {/* <ThemeProvider prefixes={{ btn: 'ci' }}>     */}
<Button variant="primary-custom" bsPrefix="ci">React</Button>
          {/* </ThemeProvider>     */}

               
              {/* <PrimaryButton label={"Submit"} className={"btn-small"}></PrimaryButton>
           
           
              <SecondaryButton label={"Clear"} className={"btn-small"} ></SecondaryButton> */}

              
            </Form>
          </Col>    
           
        </Row>
      </Container>
    </>
  );
}
