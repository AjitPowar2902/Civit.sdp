import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  UserId:null,
    role: null, // Possible roles: 'Investor', 'MIDC User', 'Transaction user', 'Admin'
    userData: {
      CreatedBy: '',
      CreatedDate: '',
      Email:'',
      EmailVerified:'',
      EmailVerifiedDate:'',
      IsActive: '',
      IsOLASUser: '',
      MAITRIUserId: '',
      MIDCUser: '',
      ModifiedBy: '',
      ModifiedDate: '',
      RoleID: '',
      SecurityAnswer: '',
      SecurityQuestion: '',
      TokenGeneratedDate: '',
      UserId: '',
      UserName: '',
      VerificationToken: '',
    },
  };

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
      setUserId:(state,action)=>{
        state.UserId = action.payload;
      },
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

export const {setRole,setUserData,clearUserData,setUserId} = userSlice.actions;
export default userSlice.reducer;