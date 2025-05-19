import { createSlice } from "@reduxjs/toolkit";


export const phani=JSON.parse(localStorage.getItem("saveFormData"))
const initialState = {
  is_auth: localStorage.getItem("is_auth") === "true",
  storeUserData:JSON.parse(localStorage.getItem("saveFormData")) ,
  basicFormData: JSON.parse(localStorage.getItem("secondaryFormData"))
};


const authenticatedSlice = createSlice({
  name: "authenticated",
  initialState,
  reducers: {
    setAuthState: (state) => {
      state.is_auth = !state.is_auth;
      localStorage.setItem("is_auth", state.is_auth.toString());
    },
    setUserData: (state, action) => {
      state.storeUserData = action.payload;
     const userData = JSON.stringify(action.payload);
      localStorage.setItem("saveFormData",userData);
      
    },
    setUserFormData:(state, action)=>{state.basicFormData=action.payload
    //  const userData = JSON.stringify(action.payload);
    //  localStorage.setItem("saveFormData",userData);

    }
  },
});

export const { setAuthState, setUserData ,setUserFormData} = authenticatedSlice.actions;
export default authenticatedSlice.reducer;
