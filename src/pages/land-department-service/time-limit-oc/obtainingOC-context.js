import { createContext } from "react";

export const ObtainingOCContext = createContext({
  currentStep: 1,
  setCurrentStep: () => {},
});