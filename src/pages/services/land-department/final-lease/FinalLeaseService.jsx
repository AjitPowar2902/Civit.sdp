import React, { useState } from "react";
import { RegistrationContext } from "./registration-context";
import PlotDetails from "../../components/common-plot-data/PlotDetails";
import PlotContactInfo from "../../components/common-plot-data/PlotContactInfo";
import ApplicantInformation from "../../components/common-plot-data/ApplicantInforamtion";
import RegisteredOffice from "../../components/common-plot-data/RegisteredOffice";
import FinalLease from "../final-lease/FinalLease";
import FinalLeaseSummary from "../final-lease/FinalLeaseSummary";
export default function PlotRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [plotData, setPlotData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  function showStep(s) {
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
        return <FinalLease />;
      case 6:
        return <FinalLeaseSummary />;
    }
  }

  return (
    <>
      <RegistrationContext.Provider
        value={{
          plotData,
          setPlotData,
          currentStep,
          setCurrentStep,
          displayData,
          setDisplayData,
        }}
      >
        {showStep(currentStep)}
      </RegistrationContext.Provider>
    </>
  );
}
