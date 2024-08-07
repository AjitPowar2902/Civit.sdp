import React, { useState } from 'react'
import NavMenu from '../../components/NavMenu';
import {Button,Form,Col,Row,Card,Breadcrumb,ListGroup,Badge,InputGroup} from 'react-bootstrap';
import { TiHomeOutline } from "react-icons/ti";
import { RegistrationContext } from './registration-context';
import PlotDetails from './components/PlotDetails';
import PlotContactInfo from './components/PlotContactInfo';
import PlotSummary from './components/PlotSummary';
export default function PlotRegistration() {

  const [currentStep, setCurrentStep] = useState(1);
  const [plotData, setPlotData] = useState([]);

  function showStep(s)
  {
      switch(s)
      {
          case 1 : 
          return <PlotDetails/>
           case 2 : 
           return <PlotContactInfo/>
          case 3 :
             return <PlotSummary/>
      }
  }

  return (
    <>
    <RegistrationContext.Provider value={{plotData,setPlotData,currentStep,setCurrentStep}}>
      
   {showStep(currentStep)}
      </RegistrationContext.Provider>
      </>
  )
}
