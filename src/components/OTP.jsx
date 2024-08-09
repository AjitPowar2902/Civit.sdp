import React, { useEffect, useState } from "react";
import OTPInput from "otp-input-react";
import { Row, Col, Card } from "react-bootstrap";
import SecondaryButton from "./buttons/SecondaryButton";
import PrimaryButton from "./buttons/PrimaryButton";
import Countdown from "react-countdown";
import { MdScheduleSend } from "react-icons/md";
export default function OTP({ OTPLength,Count }) {
  const [OTP, setOTP] = useState("");
  const [btnShow, setBtnShow] = useState(false);

  //const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return setBtnShow(true);
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };

  const resendClick =()=> {
    setBtnShow(false);
  }

  function handleClick(){
   if (OTP.length <5){
    alert("Invalid OTP, please enter valid OTP.")
   }
  }

useEffect( ()=>{
},[btnShow]
)
  return (
    <>
      <Card className="text-center border-0">
        <Row>
          <Col lg="12" md="12" sm="12" className="text-center">
                <Card.Img
                src="/images/OTP.png"
              className="w-10 mb-3"
              ></Card.Img>
            <Card.Title as="h4">OTP Verification</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Please enter OTP received on registered&nbsp;
              <b className="text-dark">Mobile Number/Mail</b>.
            </Card.Subtitle>
            <Card.Body>
              <OTPInput
                className="col-12 otp"
                value={OTP}
                onChange={setOTP}
                OTPLength={OTPLength}
                otpType="number"
                disabled={false}
                autoFocus
                inputClassName="form-control otp-textbox"
              />
              {btnShow ? "":
               <Card.Subtitle className="mt-2 text-muted">
               This OTP will expire in&nbsp;
               <Countdown date={Date.now() + Count} renderer={renderer} />&nbsp;mins.
             </Card.Subtitle>
              }
            </Card.Body>
            {btnShow ?"": <PrimaryButton label={"Submit"} onClick={handleClick}/>}
            {btnShow ?  <SecondaryButton label={"Resend"} onClick={resendClick}/>:""}
          </Col>
        </Row>
        <br/>
        <Row>
        </Row>

      </Card>
    </>
  );
}
