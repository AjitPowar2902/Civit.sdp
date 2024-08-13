import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    role: null, // Possible roles: 'Investor', 'MIDC User', 'Transaction user', 'Admin'
    userData: {
        Address: '',
        CityTown: '',
        CompanyFaxNo:'',
        CompanyName:'',
        CompanyPAN:'',
        CompanyPhoneNumber: '',
        CompanyTIN: '',
        ContactEmail: '',
        District: '',
        GSTIN: '',
        MobileNumber: '',
        Pincode: '',
        State: '',
        id: '',
        password: '',
        role: '',
        usernaCompanyPAN: '',
        username: '',
    },
  };

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setRole:(state,action)=>{
            state.role = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = { ...state.userData, ...action.payload };
          },
          clearUserData: (state) => {
            state.userData = initialState.userData;
            state.role = null;
          },
    },
});

export const {setRole,setUserData,clearUserData} = userSlice.actions;
export default userSlice.reducer;