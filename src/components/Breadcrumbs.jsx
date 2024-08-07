import React from "react";
import { Breadcrumb,Badge } from "react-bootstrap";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function Breadcrumbs({label}) {
  const navigate = useNavigate();
  const handleback = (e) => {
    navigate("/");
  };
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item onClick={handleback} active>
        <IoHomeOutline style={{fontSize:"17px"}}/>
        </Breadcrumb.Item>
        {label &&(
        <Breadcrumb.Item href="#">
          <Badge style={{fontSize:"11.5px"}} bg="secondary">
           {label} 
          </Badge>
        </Breadcrumb.Item>
        )}
      </Breadcrumb>
    </>
  );
}
