import React,{useEffect, useState } from 'react'
import {Modal,Button} from 'react-bootstrap';
import "../Modals/Modals-module.scss" 
export default function Modals({label,isVisible,setIsVisible,children,size,fullscreen}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setIsVisible(true);
    const handleClose = () => setIsVisible(false);

  return (
    <>
        <Modal className="modal-animation " aria-labelledby="contained-modal-title-vcenter" show={isVisible} onHide={handleClose} size={size} fullscreen={fullscreen} centered   backdrop="static">
        <Modal.Header closeButton   className='border-0'>
        <Modal.Title className='w-100 text-center'>{label}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='pt-0'>
          {children}
          </Modal.Body>
      </Modal>
    </> 
  )
}
