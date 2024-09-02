import React, {useState} from 'react'
import PlotDetails from "../../components/common-plot-data/PlotDetails";
import PlotContactInfo from "../../components/common-plot-data/PlotContactInfo";
import ApplicantInformation from "../../components/common-plot-data/ApplicantInforamtion";
import RegisteredOffice from "../../components/common-plot-data/RegisteredOffice";
import GrantPermission from "../mortgage-consent/GrantPermission.jsx";
import MortgageSummary from './MortgageSummary.jsx';
import { PlotContext } from "../../components/common-plot-data/plot-context";

export default function MortgageConsentService() {
  const [currentStep, setCurrentStep] = useState(1);
  const [plotData, setPlotData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [data, setData] = useState({
    applicant: null,
    company: null,
    plot:null,
  });

  const [numberOfbanks, setNumberOfbanks] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [mortgageData, setMortgageData] = useState({
    LeaseDeedDated: '',
    RegistrationReceiptOfLeaseDeedDated: '',
    NOCOfBankDated: '',
    LeaseRegNo1: '',
    LeaseRegNo2: '',
    TotalRepaidAmount: '',
   
});




  function showStepMortgage(s) {
    switch (s) {
      case 1:
        return <ApplicantInformation />;
      case 2:
        return <RegisteredOffice />;
      case 3:
        return <PlotDetails />;
      case 4:
        return <PlotContactInfo />;
      case 5:
        return <GrantPermission />;
       case 6:
     return <MortgageSummary />;
    }
  }
  return (
    <div>
      <PlotContext.Provider
        value={{
          plotData,
          setPlotData,
          currentStep,
          setCurrentStep,
          displayData,
          setDisplayData,
          data,
          setData,
          mortgageData,
          setMortgageData,
          numberOfbanks,
          setNumberOfbanks,
          showDetails,
          setShowDetails
        }}
      >
        {showStepMortgage(currentStep)}
      </PlotContext.Provider>
    </div>
  )
}
