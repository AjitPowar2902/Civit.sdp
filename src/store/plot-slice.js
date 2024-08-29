import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  PlotId:null,
  };

const plotSlice = createSlice({
    name:'plot',
    initialState,
    reducers:{
      setPlotId:(state,action)=>{
        state.PlotId = action.payload;
      }
    },
});

export const {setPlotId} = plotSlice.actions;
export default plotSlice.reducer;