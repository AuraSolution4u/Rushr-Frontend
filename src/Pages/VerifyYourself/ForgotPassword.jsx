import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import handleScrollToTop from "../../utils/SmoothScroll";
import { useDispatch } from "react-redux";
import { emailForOtp, generatedOtp } from "../../slices/otpValidationSlice";
import { storeFormData } from "../../slices/signUpUserSlice";
import SignUp from "../SignUp/SignUp";
import ForgotDummy from "./ForgotDummy";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../utils/loading/LoadingSpinner";
import { Strings } from "../../Strings/Strings";
import { api } from "../../utils/api";
import { endPoints } from "../../api/endPoints";


const ForgotPassword = () => {
  const [showResend, setShowResend] = useState(false);
  const [loading, setLoading] = useState(false);

  const [emaiId, setEmailId] = useState();
  const [showForgotDummy, setShowForgotDummy] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .matches(/.*@.*\.(com|edu)$/, "Only .edu emails are allowed")
      .required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      dispatch(storeFormData(values));
      dispatch(emailForOtp(values));
      setEmailId(values.email);

      // navigate("/forgotverify");
      // handleScrollToTop();
      try {
        const otpResponse = await sendOtp(values.email);
        console.log("OTP Response:", otpResponse);
        if (otpResponse?.statusCode === 200) {
          console.log("otpResponse", otpResponse.responseObject);
          setShowForgotDummy(true);
          // dispatch(generatedOtp(otpResponse.responseObject.otp));
          // Navigate to OTP verification page
          // navigate("/forgotverify");
        } else {
          // Handle OTP failure
          alert("Failed to send OTP. Please try again.");
        }
      } catch (error) {
        alert("An error occurred. Please try again.");
      } finally {
        setLoading(false); // <-- Stop loading
      }
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowResend(true);
    }, 600000);

    return () => clearTimeout(timer);
  }, []);

  // Function to send OTP
  const sendOtp = async (email) => {
    
    try {
      const object = {
        emailId: email,
        requestType: "reset password",
      }
      const response = await api.post(endPoints.sendOtp,object)
      return response.data;
    } catch (error) {
      console.error("Error sending OTP:", error);
      throw new Error("Unable to send OTP.");
    }
  };
  return showForgotDummy ? (
    <ForgotDummy
      emailId={emaiId}
      item={showResend}
      sendOtp={sendOtp}
      setShowForgotDummy={setShowForgotDummy}
    />
  ) : (
    <div className="flex items-start justify-center min-h-screen w-full md:bg-bglargescreen bg-bgsmallscreen pt-[50px] px-[16px]  h-[150vh]  w-full">
      <div className="bg-primeWhite px-[56px] py-[36px] shadow-lg flex flex-col justify-center items-center gap-[24px] md:gap-[10px] relative w-[361px] h-[370px] md:w-[455px] md:h-[382px] top-[141px]  md:top-[180px]   md:rounded-[16px] rounded-[13px]">
        <div>
          <button
            onClick={() => navigate("/login")}
            className=" h-[46px] w-[46px] top-[36px] rounded-full bg-arrowBg "
          >
            <FaArrowLeft className="h-[19.9px] w-[19.41px] m-auto text-primary" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-[24px] md:gap-[32px] md:h-[343px] md:w-[254px]">
          <div className="flex flex-col items-center w-[320px] h-[75px] gap-[7px] md:w-[341px] md:h-[94px] md:gap-[14px] ">
            <h2 className="text-log">{Strings.forgot_password}</h2>
            <p className="text-eyeColor text-verifyText text-center">
              {Strings.registered_email} <br /> {Strings.your_password}
            </p>
          </div>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <form
              onSubmit={formik.handleSubmit}
              className="w-[315px] h-[114px] md:w-[343px] md:h[128px] flex flex-col gap-[18px] md:gap-[16px]"
            >
              <div className=" h-[48px] w-[315px]  md:w-[343px] relative flex items-center">
                <MdOutlineEmail className="absolute left-4 top-[12px]  text-eyeColor  text-xl h-[24px] w-[24px]" />
                <input
                  required
                  type="email"
                  id="password"
                  placeholder="Email"
                  className={`md:w-[343px] h-[48px] w-[315px] block  px-12 py-2  border border-inputBorder rounded-[8px] shadow-sm ${
                    formik.touched.email && formik.errors.email
                      ? "border-primary"
                      : "border-inputBorder"
                  }`}
                  {...formik.getFieldProps("email")}
                  // className="  md:w-[343px] h-[48px] w-[315px] block  px-12 py-2  border border-inputBorder rounded-[8px] shadow-sm"
                />
              </div>
              <button
                onClick={handleScrollToTop}
                className=" w-[343px]  h-[48px]  md:h-[56px] rounded-[40px]  py-[12px] md:py-[16px] gap-[10px] bg-primary text-primeWhite text-verify"
              >
                {Strings.request_otp}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;


