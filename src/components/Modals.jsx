import React,{useEffect, useState } from 'react'
import {Modal,Button} from 'react-bootstrap';
export default function Modals({label,isVisible,setIsVisible,children,size,fullscreen}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setIsVisible(true);
    const handleClose = () => setIsVisible(false);

  return (
    <>
        <Modal show={isVisible} onHide={handleClose} size={size} fullscreen={fullscreen} centered   backdrop="static">
        <Modal.Header closeButton className='border-0'>
        <Modal.Title>{label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
          </Modal.Body>
        <Modal.Footer className='border-0'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </> 
  )
}
