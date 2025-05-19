// import { FaArrowLeft } from "react-icons/fa6";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import handleScrollToTop from "../../utils/SmoothScroll";
// import { useDispatch, useSelector } from "react-redux";
// import { validateOtpRequest } from "../../slices/otpValidationSlice";
// import { userRegistrationAPI } from "../../features/users/api";
// import { useEffect, useState } from "react";
// import Success from "../Modals/Success";
// import { Strings } from "../../Strings/Strings";

// const SignUpVerify = (props) => {
//   const { emailId, sendOtp, item, setShowSignUpverify } = props;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const signUpData = useSelector((store) => store.signUpformData.FormData);
//   console.log(signUpData.userData,"hello")
//   const [successState, setSuccessState] = useState(false);
//   const [countdown, setCountdown] = useState(600); // 10 minutes in seconds
//   const [isResendDisabled, setIsResendDisabled] = useState(true);

//   useEffect(() => {
//     if (countdown > 0) {
//       const timer = setInterval(() => {
//         setCountdown((prev) => prev - 1);
//       }, 1000);

//       return () => clearInterval(timer);
//     } else {
//       setIsResendDisabled(false);
//     }
//   }, [countdown]);

//   const handleResendOtp = () => {
//     sendOtp(emailId);
//     setCountdown(600);
//     setIsResendDisabled(true);
//   };

//   const formik = useFormik({
//     initialValues: {
//       code: "",
//     },
//     validationSchema: Yup.object({
//       code: Yup.string()
//         .length(6, "Code must be exactly 6 digits")
//         .required("Code is required"),
//     }),
//     onSubmit: async (values) => {
//       handleScrollToTop();
//       try {
//         const response = await new Promise((resolve, reject) =>
//           dispatch(
//             validateOtpRequest({
//               emailId,
//               otp: String(values.code),
//               navigate,
//               signupPath: { path: "signupverify" },
//               regUserData: signUpData?.userData,
//               resolve,
//               reject,
//             })
//           )
//         );
     

//         const registrationResponse = await userRegistrationAPI(
//           JSON.stringify(signUpData?.userData)
//         );

//         if (registrationResponse?.statusCode === 200) {
//           setSuccessState(true);
//         } else {
//           formik.setErrors({
//             email: "This email already exists. Please use another.",
//           });
//         }
//       } catch (error) {
//         console.error("OTP mismatch!");
//         setSuccessState(false);
//         alert("Invalid OTP entered. Please check and try again.");
//       }
//     },
//   });

//   return successState ? (
//     <Success />
//   ) : (
//     <div className="flex items-start justify-center min-h-screen md:bg-bglargescreen bg-bgsmallscreen pt-[50px] px-[16px] h-[150vh]">
//       <div className="bg-primeWhite px-[56px] py-[36px] shadow-lg flex flex-col justify-center items-center gap-[24px] md:gap-[10px] relative w-[361px] h-[370px] md:w-[455px] md:h-[450px] top-[141px] md:top-[180px] md:rounded-[16px] rounded-[13px]">
//         <button
//           onClick={() => setShowSignUpverify(false)}
//           className="h-[46px] w-[46px] top-[36px] rounded-full bg-arrowBg"
//         >
//           <FaArrowLeft className="h-[19.9px] w-[19.41px] m-auto text-primary" />
//         </button>

//         <div className="flex flex-col items-center gap-[24px] md:gap-[32px]">
//           <div className="flex flex-col items-center w-[320px] h-[75px] gap-[7px] md:w-[341px] md:h-[94px] md:gap-[14px]">
//             <h2 className="text-log">{Strings.verify_yourself}</h2>
//             <p className="text-eyeColor text-verifyText text-center">
//               {Strings.enter_your_6_digit_code}
//             </p>
//           </div>

//           <form
//             onSubmit={formik.handleSubmit}
//             className="w-[315px] md:w-[343px] flex flex-col gap-[18px] md:gap-[16px]"
//           >
//             <input
//               type="text"
//               name="code"
//               placeholder="Enter 6 digit code"
//               maxLength={6}
//               className={`h-[48px] w-full px-4 py-2 border ${
//                 formik.touched.code && formik.errors.code
//                   ? "border-red-500"
//                   : "border-inputBorder"
//               } rounded-[8px] text-placeholder`}
//               value={formik.values.code}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//             />

//             <div className="flex justify-between items-center w-full">
//               {/* {formik.touched.code && formik.errors.code && (
//                 <div className="text-red-500 text-sm">{formik.errors.code}</div>
//               )} */}
//    {/* if required add this field */}
//               <button
//                 type="button"
//                 className={`w-[100%] h-[40px] text-white rounded-md ${
//                   isResendDisabled
//                     ? "bg-gray-200 cursor-not-allowed"
//                     : "bg-red-500 cursor-pointer"
//                 }`}
//                 onClick={handleResendOtp}
//                 disabled={isResendDisabled}
//               >
//                 {isResendDisabled
//                   ? `Resend OTP in ${Math.floor(countdown / 60)}:${String(
//                       countdown % 60
//                     ).padStart(2, "0")}`
//                   : "Resend OTP"}
//               </button>
//             </div>

//             <button
//               type="submit"
//               className="w-full h-[48px] md:h-[56px] rounded-[40px] bg-primary text-primeWhite text-verify"
//             >
//              {Strings.verify}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpVerify;

import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import handleScrollToTop from "../../utils/SmoothScroll";
import { useDispatch, useSelector } from "react-redux";
import { validateOtpRequest } from "../../slices/otpValidationSlice";
import { userRegistrationAPI } from "../../features/users/api";
import Success from "../Modals/Success";
import { Strings } from "../../Strings/Strings";
import LoadingSpinner from "../../utils/loading/LoadingSpinner"; 

const SignUpVerify = (props) => {
  const { emailId, sendOtp, setShowSignUpverify } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUpData = useSelector((store) => store.signUpformData.FormData);
  
  const [successState, setSuccessState] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loader state
  const [countdown, setCountdown] = useState(600); // 10 minutes in seconds
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsResendDisabled(false);
    }
  }, [countdown]);

  const handleResendOtp = () => {
    sendOtp(emailId);
    setCountdown(600);
    setIsResendDisabled(true);
  };

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .length(6, "Code must be exactly 6 digits")
        .required("Code is required"),
    }),
    onSubmit: async (values) => {
      handleScrollToTop();
      setIsLoading(true); // Show loader before API call

      try {
        const response = await new Promise((resolve, reject) =>
          dispatch(
            validateOtpRequest({
              emailId,
              otp: String(values.code),
              navigate,
              signupPath: { path: "signupverify" },
              regUserData: signUpData?.userData,
              resolve,
              reject,
            })
          )
        );

        const registrationResponse = await userRegistrationAPI(
          JSON.stringify(signUpData?.userData)
        );

        if (registrationResponse?.statusCode === 200) {
          setTimeout(() => {
            setIsLoading(false);
            setSuccessState(true);
          }, 2000); // Simulate delay before navigating
        } else {
          setIsLoading(false);
          formik.setErrors({
            email: "This email already exists. Please use another.",
          });
        }
      } catch (error) {
        setIsLoading(false);
        alert("Invalid OTP entered. Please check and try again.");
      }
    },
  });

  return successState ? (
    <Success />
  ) : (
    <div className="flex items-start justify-center min-h-screen md:bg-bglargescreen bg-bgsmallscreen w-full pt-[50px] px-[16px] h-[150vh]">
      <div className={`bg-primeWhite px-[56px] py-[36px] shadow-lg flex flex-col justify-center items-center gap-[24px] md:gap-[10px] relative w-[361px] h-[370px] md:w-[455px] md:h-[450px] top-[141px] md:top-[180px] md:rounded-[16px] rounded-[13px] ${isLoading && "opacity-10"}`}>
        <button
          onClick={() => setShowSignUpverify(false)}
          className="h-[46px] w-[46px] top-[36px] rounded-full bg-arrowBg"
        >
          <FaArrowLeft className="h-[19.9px] w-[19.41px] m-auto text-primary" />
        </button>

        <div className="flex flex-col items-center gap-[24px] md:gap-[32px]">
          <div className="flex flex-col items-center w-[320px] h-[75px] gap-[7px] md:w-[341px] md:h-[94px] md:gap-[14px]">
            <h2 className="text-log">{Strings.verify_yourself}</h2>
            <p className="text-eyeColor text-verifyText text-center">
              {Strings.enter_your_6_digit_code}
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="w-[315px] md:w-[343px] flex flex-col gap-[18px] md:gap-[16px]"
          >
            <input
              type="text"
              name="code"
              placeholder="Enter 6 digit code"
              maxLength={6}
              className={`h-[48px] w-full px-4 py-2 border ${
                formik.touched.code && formik.errors.code
                  ? "border-red-500"
                  : "border-inputBorder"
              } rounded-[8px] text-placeholder`}
              value={formik.values.code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <div className="flex justify-end items-end ">
              <p
                type="button"
                className={` text-gray-500  ${
                  isResendDisabled
                    ? " cursor-not-allowed"
                    : "bg-red-500 cursor-pointer"
                }`}
                onClick={handleResendOtp}
                disabled={isResendDisabled}
              >
                {isResendDisabled
                  ? `Resend OTP in ${Math.floor(countdown / 60)}:${String(
                      countdown % 60
                    ).padStart(2, "0")}`
                  : "Resend OTP"}
              </p>
            </div>

            <button
              type="submit"
              className="w-full h-[48px] md:h-[56px] rounded-[40px] bg-primary text-primeWhite text-verify flex items-center justify-center"
              disabled={isLoading}
            >
              {Strings.verify}
            </button>
          </form>
        </div>
      </div>
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default SignUpVerify;
