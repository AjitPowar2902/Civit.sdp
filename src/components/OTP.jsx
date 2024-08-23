import React, { useEffect, useState } from "react";
import OTPInput from "otp-input-react";
import { Row, Col, Card } from "react-bootstrap";
import SecondaryButton from "./buttons/SecondaryButton";
import PrimaryButton from "./buttons/PrimaryButton";
import Countdown from "react-countdown";
import LinkButton from "./buttons/LinkButton";
import Tooltips from "../components/Tooltips";
export default function OTP({
  OTPLength,
  Count,
  title,
  subtitle,
  placeholder,
  secure,
  disabled,
  otpType,
  icon

}) {
  const [OTP, setOTP] = useState("");
  const [btnShow, setBtnShow] = useState(false);
  var imgpath="";

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

  const resendClick = () => {
    setBtnShow(false);
  };

  function handleClick() {
    if (OTP.length < 5) {
      alert("Invalid OTP, please enter valid OTP.");
      document.getElementById("divOtp").className = '';   
      document.getElementById("divOtpSuccess").className = 'hide';   
      
    }
    else
    {
        document.getElementById("divOtp").className = 'hide';   
        document.getElementById("divOtpSuccess").className = '';   
    }
  }

  if (icon =="email")
  {
    imgpath="/images/mail-otp.png"
  }
  else if (icon =="mobile"){
    imgpath="/images/mobile-otp.png"
  }
  else{
    imgpath="/images/default-otp.png"
  }

  useEffect(() => {}, [btnShow]);
  return (
    <>
      <Card className="text-center border-0">
        <Row>
          <Col lg="12" md="12" sm="12" className="text-center" id="divOtp">
            <Card.Img
              src={imgpath} //"/images/OTP.png"
              className="w-10 mb-3"
            ></Card.Img>
            <Card.Title as="h6">{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {subtitle}
            </Card.Subtitle>
            <Card.Body className="border">
              <OTPInput
                className="col-12 otp"
                value={OTP}
                onChange={setOTP}
                OTPLength={OTPLength}
                otpType={otpType}
                disabled={disabled}
                autoFocus
                inputClassName="form-control otp-textbox"
                placeholder={placeholder}
                secure={secure}
                
              />
              {btnShow ? (
                ""
              ) : (
                <Card.Subtitle className="mt-3 text-muted">
                  Your code expair in &nbsp;
                  <Countdown date={Date.now() + Count} renderer={renderer} />
                  &nbsp;minutes.
                </Card.Subtitle>
              )}
              <Row>
                {btnShow ? (
                  <LinkButton
                    label="Resend OTP"
                    classname="text-secondary pt-2"
                    onClick={resendClick}
                  />
                ) : (
                  ""
                )}
              </Row>
            </Card.Body>
            <Card.Footer className=" bg-transparent border-0">
              <SecondaryButton label={"Cancel"}  />
              <PrimaryButton label={"Verify OTP"} onClick={handleClick} />
            </Card.Footer>
          </Col>

          <Col lg="12" md="12" sm="12" className="text-center hide" id="divOtpSuccess">
            <Card.Img
              src={"/images/success-otp.png"} //"/images/success-otp.png"
              className="w-25 mb-3"
            ></Card.Img>
            <Card.Title as="h4" className="text-success">OTP Verify successfully... </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
             <small>Please close the popup.</small> 
            </Card.Subtitle>         
          </Col>
        </Row>
        <br />
        <Row></Row>
      </Card>
    </>
  );
}
