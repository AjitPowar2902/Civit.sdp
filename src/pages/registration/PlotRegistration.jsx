import React, { useState } from "react";
import { RegistrationContext } from "./registration-context";
import PlotDetails from "../services/components/common-plot-data/PlotDetails";
import PlotContactInfo from "../services/components/common-plot-data/PlotContactInfo";
import PlotSummary from "./components/PlotSummary";
import ApplicantInformation from "../services/components/common-plot-data/ApplicantInforamtion";
import RegisteredOffice from "../services/components/common-plot-data/RegisteredOffice";
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
        return <PlotSummary />;
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
