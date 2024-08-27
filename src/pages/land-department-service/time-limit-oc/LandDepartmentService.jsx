import React, { useState, UseContext } from "react";

import ApplicantInformation from "./ApplicantInformation.jsx";
import RegisteredOfficeDetails from "./RegisteredOfficeDetails.jsx";

import PropertyDetails from "./PropertyDetails.jsx";
import { ObtainingOCContext } from "./obtainingOC-context";
import PlotUnitContactInfo from "./PlotUnitContactInfo.jsx";

const LandDepartmentService = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [ocData, setOCData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  function showStep1(s) {
    switch (s) {
      case 1:
        return <ApplicantInformation />;
      case 2:
        return <RegisteredOfficeDetails />;
      case 3:
        return <PropertyDetails />;
      case 4:
        return <PlotUnitContactInfo />;
      //  case 3 :
      //   return <PlotDetails/>
    }
  }
  return (
    <>
      <ObtainingOCContext.Provider
        value={{
          ocData,
          setOCData,
          currentStep,
          setCurrentStep,
          displayData,
          setDisplayData,
        }}
      >
        {showStep1(currentStep)}
      </ObtainingOCContext.Provider>
    </>
  );
};

export default LandDepartmentService;
