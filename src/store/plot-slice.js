import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PlotId: null,
  plotData: {
    ApprovedApplications: "",
    CASubmissionId: "",
    OnGoingApplications: "",
    PendingApplications: "",
    PlotName: "",
    SuggestedApplications: "",
  },
};

const plotSlice = createSlice({
  name: "plot",
  initialState,
  reducers: {
    setPlotId: (state, action) => {
      state.PlotId = action.payload;
    },
    
    setPlotData: (state, action) => {
      state.plotData = { ...state.plotData, ...action.payload };
    },
    clearPlotData: (state) => {
      state.plotData = initialState.plotData;
    },
  },
});

export const { setPlotId, setPlotData, clearPlotData } = plotSlice.actions;
export default plotSlice.reducer;
