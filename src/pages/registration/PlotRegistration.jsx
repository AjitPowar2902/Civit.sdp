import React, { useState } from 'react'
import NavMenu from '../../components/NavMenu';
import {Button,Form,Col,Row,Card,Breadcrumb,ListGroup,Badge,InputGroup} from 'react-bootstrap';
import { TiHomeOutline } from "react-icons/ti";
import { RegistrationContext } from './registration-context';
import PlotDetails from './components/PlotDetails';
import PlotContactInfo from './components/PlotContactInfo';
import PlotSummary from './components/PlotSummary';
 import ApplicantInformation from './components/ApplicantInforamtion';
import RegisteredOffice from './components/RegisteredOffice';
export default function PlotRegistration() {

  const [currentStep, setCurrentStep] = useState(1);
  const [plotData, setPlotData] = useState([]);
  const[displayData, setDisplayData] = useState([]);

  function showStep(s)
  {
      switch(s)
      {
          case 1 : 
          return <ApplicantInformation/>
           case 2 : 
           return <RegisteredOffice/>
          case 3 :
          return <PlotDetails/>
           case 4 :
            return <PlotContactInfo/>
            case 5 :
              return <PlotSummary/>

      }
  }

  return (
    <>
    <RegistrationContext.Provider value={{plotData,setPlotData,currentStep,setCurrentStep,displayData,setDisplayData}}>
      
   {showStep(currentStep)}
      </RegistrationContext.Provider>
      </>
  )
}
