import React, { useEffect, useState } from 'react'
import NavMenu from '../../components/NavMenu';
import {Button,Form,Col,Row,Card,Breadcrumb,ListGroup,Badge,InputGroup} from 'react-bootstrap';
import { TiHomeOutline } from "react-icons/ti";
import { RegistrationContext } from './registration-context';
import PlotDetails from "../services/components/common-plot-data/PlotDetails"
import PlotContactInfo from "../services/components/common-plot-data/PlotContactInfo"
import PlotSummary from './components/PlotSummary';
 import ApplicantInformation from "../services/components/common-plot-data/ApplicantInforamtion"
import RegisteredOffice from "../services/components/common-plot-data/RegisteredOffice"
import userServices from '../../services/user-services';
export default function PlotRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [plotData, setPlotData] = useState([]);
  const[displayData, setDisplayData] = useState([]);
  const [data, setData] = useState({
    applicant: null,
    company: null,
    plot:null,
  });

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
   
  useEffect(() => {
    const fetchApplicantData = async () => {
      try {
        setLoading(true);
      
       // const applicantData = await userServices.getApplicantDetails();
        
        const companyData = await userServices.getCompanyInfo();
        
          setData({
            ApplicantInfo: null,
            RegisterOfficeInfo: null,
            PlotInfo : null,
            UnitContactInfo: null
          });
           
      } catch (error) {
        console.error('Error fetching data:', error);
      }finally{
        setLoading(false);
      }
    };

    fetchApplicantData();
  }, []); 

  if (loading) {
    return <p>Loading...</p>; // Display a loading message or spinner
  }

  return (
    <>
    <RegistrationContext.Provider value={{plotData,setPlotData,currentStep,setCurrentStep,displayData,setDisplayData,data,setData}}>
      
   {showStep(currentStep)}
      </RegistrationContext.Provider>
    </>
  );
}
