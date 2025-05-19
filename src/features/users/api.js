import { api } from "../../utils/api.js";
import { endPoints } from "../../api/endPoints.js"; 

export const userRegistrationAPI = async (userData) => {
  console.log(userData)
  try {
    const response = await api.post(
      endPoints.userRegistration,
      userData
    );

    console.log(response,"11111")
    return response.data;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error;
  }
};

export const validateOtpAPI = async (otpData) => {
  try {
    const response = await api.post( endPoints.validateOtp, otpData);
    return response.data;
  } catch (error) {
    console.error("Error during OTP validation:", error.message);
    throw error;
  }
};

//for login api

export const loginApi = async (userLogData) => {
  try {
    const response = await api.post(
      endPoints.userAuthentication,
      userLogData
    );

    return response.data;
  } catch (error) {
    console.error("Error during OTP validation:", error.message);
    throw error;
  }
};


export const updateUserData = async (updateddata) => {
  try {
    const response = await api.put(
      endPoints.updateProfile,
      updateddata
    );
 console.log("response slice", response)
    return response.data;
  } catch (error) {
    console.error("Error during profile update", error.message);
    throw error;
  }
};

export const resetPasswordAPI = async (data) => {
  try { 

    console.log(data,"thnder client")
    const response= await api.put(endPoints.resetPassword, data)
    return response.data
    
  } 
  catch (error) {
    console.error("Error during OTP validation:", error.message);
    throw error;
  }
};

export const getMasterList = async () => {
  try { 
    console.log("getmasterapi",endPoints.masterApi)

    const response= await api.get(endPoints.masterApi)
    console.log("getmasterresponse",response)
    return response.data
    
  } 
  catch (error) {
    console.error("master list not found", error.message);
    throw error;
  }
};


//send otp 

export const sendOtp = async () => {
  try {
    const response = await api.post(
      endPoints.sendOtp,
    );

    return response.data;
  } catch (error) {
    console.error("Error during profile update", error.message);
    throw error;
  }
};


