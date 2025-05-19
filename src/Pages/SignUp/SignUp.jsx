import { Link, useNavigate } from "react-router-dom";
import { GoEyeClosed } from "react-icons/go";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { generatedOtp } from "../../slices/otpValidationSlice";

// import { getMasterList, userRegistrationAPI } from "../../features/users/api";

import { storeFormData } from "../../slices/signUpUserSlice";
import { fetchMasterListStart } from "../../slices/getMasterListSlice";
import useMasterList from "../../utils/useMasterList";
import LoadingSpinner from "../../utils/loading/LoadingSpinner";
import handleScrollToTop from "../../utils/SmoothScroll";
import SignUpVerify from "../VerifyYourself/SignUpVerify";
import { Strings } from "../../Strings/Strings";
import { endPoints } from "../../api/endPoints";
import { api } from "../../utils/api";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showSignUpverify, setShowSignUpverify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signUpAsOpen, setsignUpAsOpen] = useState(false); // User type dropdown visibility
  const [universityOpen, setUniversityOpen] = useState(false); // University dropdown visibility
  const [showOtherUniversityInput, setShowOtherUniversityInput] =
    useState(false); // Show input for 'other' university
  const [universitySearch, setUniversitySearch] = useState(""); // Search query for universities
  const [apiError, setApiError] = useState("");
  const [emaiId, setEmailId] = useState();
  const [showResend, setShowResend] = useState(false);
  const masterList = useMasterList();

  const universities = masterList !== null && masterList.responseObject.universityMasterList;

  const navigate = useNavigate();
  const togglesignUpAsDropdown = () => setsignUpAsOpen(!signUpAsOpen);
  const toggleUniversityDropdown = () => setUniversityOpen(!universityOpen);
  const handlesignUpAsSelect = (each, value) => {
    formik.setFieldValue("signUpAs", each);
    setsignUpAsOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowResend(true);
    }, 600000);

    return () => clearTimeout(timer);
  }, []);

  const handleUniversitySelect = (value) => {
    formik.setFieldValue("university", value);
    setUniversityOpen(false);
    setUniversitySearch("");
    if (value === "Other") {
      setShowOtherUniversityInput(true);
    } else {
      setShowOtherUniversityInput(false);
    }
  };

  const handleUniversitySearch = (e) => {
    setUniversitySearch(e.target.value);
  };

  const filteredUniversities = universities
    ? universities.filter((each) =>
        each.universityName
          .toLowerCase()
          .includes(universitySearch.toLowerCase())
      )
    : [];

  const showOthersOption =
    universitySearch.trim().length > 0 && filteredUniversities.length === 0;

  const validationSchema = Yup.object({
    signUpAs: Yup.string().required("User type is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      // .matches(/.*@.*\.edu$/, "Only .edu emails are allowed")
      .matches(/.*@.*\.(com|edu)$/, ".edu and .com email IDs are allowed")
      .required("Email is required"),
    university: Yup.string()
      .required("University name is required")
      .test(
        "validate-other-university",
        "Enter Your University ",
        function (value) {
          const { otherUniversity } = this.parent;
          if (value === "Other" && !otherUniversity) {
            return false;
          }
          return true;
        }
      ),
    otherUniversity: Yup.string(),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/\d/, "Must contain at least one number")
      .matches(/[@$!%*?&#]/, "Must contain at least one special character")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    terms: Yup.boolean().oneOf(
      [true],
      "You must accept the Terms & Conditions"
    ),
  });

  const signupAs = ["Student", "Alumni"];
  const formik = useFormik({
    initialValues: {
      signUpAs: "",
      firstName: "",
      lastName: "",
      email: "",
      university: "",
      otherUniversity: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
    validationSchema,

    onSubmit: async (values) => {
      setEmailId(values.email);
      console.log("SignUpAs Data:", values.signUpAs);
      const selectedUniversity = universities.find(
        (uni) => uni.universityName === values.university
      );

  
      const formattedData = {
        signUpAs:
          values.signUpAs === "Student"
            ? 1
            : values.signUpAs === "Alumni"
            ? 2
            : null,
        emailId: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
        //universityId:selectedUniversity.universityId, // if this field is added
        //universityName:values.university (uncomment this if universityid is added in api)

        universityName:
          values.university === "Other" ? 48 : selectedUniversity.universityId, // remove from ===  if universityId added
        otherUniversityName:
          values.university === "Other" ? values.otherUniversity : null,
      };

      console.log(formattedData,"sign up")

      const dataToStore = {
        userData: formattedData,
        email: formattedData.emailId,
        name: formattedData.firstName,
      };
      dispatch(storeFormData(dataToStore));
      handleScrollToTop();
      setIsLoading(true);
      const logindetails = {
        emailId: formattedData.emailId,
        password: formattedData.password,
      };
      localStorage.setItem("logindetails", JSON.stringify(logindetails));

      try {
        // Send OTP first

        const otpResponse = await sendOtp(values.email);
        console.log("OTP Response:", otpResponse);

        if (otpResponse?.statusCode === 200) {
          setIsLoading(false);
          setShowSignUpverify(true);
          // navigate("/signupverify");
        } else {
          setIsLoading(false);
          alert("Failed to send OTP. Please try again.");
        }
      } catch (error) {
        console.error("Error during submission:", error);
        setIsLoading(false);
        alert("Unable to process the request. Please try again.");
      }
    },
  });

  // Function to send OTP
  const sendOtp = async (email) => {
    setIsLoading(true);
    try {
      const body = { emailId: email, requestType: "signup" }
      const response = await api.post(endPoints.sendOtp, body)
      setIsLoading(false);
      return response.data; // Return the response data for further handling
    } catch (error) {
      console.error("Error sending OTP:", error);
      setIsLoading(false);
      throw new Error("Unable to send OTP.");
    }
  };

  return showSignUpverify ? (
    <SignUpVerify
      emailId={emaiId}
      item={showResend}
      sendOtp={sendOtp}
      
      setShowSignUpverify={setShowSignUpverify}
    />
  ) : (
    <div
      onClick={() => {
        if (signUpAsOpen || universityOpen) {
          setsignUpAsOpen(false);
          setUniversityOpen(false);
        }
      }}
      className="flex items-start justify-center  md:bg-bglargescreen bg-bgsmallscreen px-[16px] h-fit pb-[300px] w-full "
    >
      <div
        className={`rounded-[13px] shadow-lg w-[430px] h-[772px] flex flex-col justify-center items-center md:gap-[25px] gap-[14px] relative top-[150px]  ${
          isLoading ? "opacity-10" : "bg-white"
        }`}
      >
        <div className="md:w-[224px] sm:w-[174] md:h-[63px] mb-[-20pxP] w-[184px] h-[57px] flex flex-col items-center  ">
          <h1 className="text-log" >{Strings.signup}</h1>
          <p className="text-center  md:h-[24px]  h-[18px] w-[250px] text-logsubText">
            {Strings.welcome_to_rushr}
          </p>
        </div>

        <form
          className="w-full max-w-sm p-5 flex flex-col gap-[12px]"
          onSubmit={formik.handleSubmit}
        >
          {/* User Type Dropdown */}
          <div>
            <div className="relative w-full md:w-[343px] text-accent">
              <div
                onClick={togglesignUpAsDropdown}
                className="px-4 py-2 border h-[48px] border-inputBorder flex items-center justify-between rounded-[8px] cursor-pointer"
              >
                {formik.values.signUpAs || "Sign up as"}
                {signUpAsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

              {signUpAsOpen && (
                <div className="absolute w-full mt-1 bg-white border border-inputBorder rounded-[8px] shadow-lg">
                  {signupAs.map((each, index) => (
                    <div
                      key={index}
                      onClick={() => handlesignUpAsSelect(each, index)}
                      className="px-4 py-2 cursor-pointer hover:bg-primary m-1 rounded-lg hover:text-white"
                    >
                      {each}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {formik.touched.signUpAs && formik.errors.signUpAs && (
              <div className="text-primary text-sm mt-1">
                {formik.errors.signUpAs}
              </div>
            )}
          </div>
          {apiError && (
            <div className="text-red-500 text-sm mt-1">{apiError}</div>
          )}
          {/* First Name and Last Name */}
          <div className="flex gap-[15px]">
            <input
              type="text"
              name="firstName"
              placeholder="F. Name"
              className={`md:w-[164px] h-[48px] w-1/2 block px-4 py-2 border rounded-[8px] ${
                formik.touched.firstName && formik.errors.firstName
                  ? "border-red-500"
                  : "border-inputBorder"
              }`}
              {...formik.getFieldProps("firstName")}
            />
            <input
              type="text"
              name="lastName"
              placeholder="L. Name"
              className={`md:w-[164px] h-[48px] w-1/2 block px-4 py-2 border rounded-[8px] ${
                formik.touched.lastName && formik.errors.lastName
                  ? "border-red-500"
                  : "border-inputBorder"
              }`}
              {...formik.getFieldProps("lastName")}
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder=".edu Email Address"
              className={`md:w-[343px] h-[48px] w-full block px-4 py-2 border rounded-[8px] ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-inputBorder"
              }`}
              {...formik.getFieldProps("email")}
            />
          </div>

          {/* University Dropdown */}

          <div>
            <div className="relative w-full md:w-[343px] text-accent z-10">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  toggleUniversityDropdown();
                }}
                className="px-4 py-2 border h-[48px] border-inputBorder flex items-center justify-between rounded-[8px] cursor-pointer"
              >
                {formik.values.university || "Select University"}
                {universityOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

              {/* {universityOpen && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute w-full mt-1 bg-white border border-inputBorder rounded-[8px] shadow-lg max-h-[150px] overflow-auto"
                >
                  <input
                    type="text"
                    placeholder="Search University"
                    value={universitySearch}
                    onChange={handleUniversitySearch}
                    className="w-full px-4 py-2 border-b border-inputBorder focus:outline-none"
                  />
                  {universities
                    .filter((each) =>
                      each.universityName
                        .toLowerCase()
                        .includes(universitySearch.toLowerCase())
                    )
                    .map((each) => (
                      <div
                        key={each.universityId}
                        onClick={() =>
                          handleUniversitySelect(
                            each.universityName,
                            each.universityId
                          )
                        }
                        className="px-4 py-2 cursor-pointer hover:bg-primary m-1 rounded-lg hover:text-white"
                      >
                        {each.universityName}
                      </div>
                    ))}
                </div>
              )} */}
              {universityOpen && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute w-full mt-1 bg-white border border-inputBorder rounded-[8px] shadow-lg max-h-[150px] overflow-auto"
                >
                  <input
                    type="text"
                    placeholder="Search University"
                    value={universitySearch}
                    onChange={handleUniversitySearch}
                    className="w-full px-4 py-2 border-b border-inputBorder focus:outline-none"
                  />
                  {filteredUniversities.length > 0 ? (
                    filteredUniversities.map((each) => (
                      <div
                        key={each.universityId}
                        onClick={() =>
                          handleUniversitySelect(each.universityName)
                        }
                        className="px-4 py-2 cursor-pointer hover:bg-primary m-1 rounded-lg hover:text-white"
                      >
                        {each.universityName}
                      </div>
                    ))
                  ) : (
                    // Automatically show 'Others' if no match is found
                    <div
                      onClick={() => handleUniversitySelect("Other")}
                      className="px-4 py-2 cursor-pointer hover:bg-primary m-1 rounded-lg hover:text-white"
                    >
                      {Strings.others}
                    </div>
                  )}
                </div>
              )}
            </div>
            {formik.touched.university && formik.errors.university && (
              <div className="text-primary text-sm mt-1">
                {formik.errors.university}
              </div>
            )}
          </div>

          {/* Conditionally Render Input for "Other" University */}
          {showOtherUniversityInput && (
            <div>
              <input
                type="text"
                name="otherUniversity"
                placeholder="Enter Your University"
                className={`md:w-[343px] h-[48px] w-full block px-4 py-2 border rounded-[8px] ${
                  formik.touched.otherUniversity &&
                  formik.errors.otherUniversity
                    ? "border-red-500"
                    : "border-inputBorder"
                }`}
                {...formik.getFieldProps("otherUniversity")}
              />
            </div>
          )}

          {/* Password Fields */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={`md:w-[343px] h-[48px] w-full block px-4 py-2 border rounded-[8px] ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-inputBorder"
              }`}
              {...formik.getFieldProps("password")}
            />
            <GoEyeClosed
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-[12px] top-[16px] text-eyeColor text-xl cursor-pointer"
            />
          </div>
          <p className="Namemt-1 text-xs text-gray-500">
           {Strings.password_contraint_text}
          </p>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`md:w-[343px] h-[48px] w-full block px-4 py-2 border rounded-[8px] ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "border-red-500"
                  : "border-inputBorder"
              }`}
              {...formik.getFieldProps("confirmPassword")}
            />
            <GoEyeClosed
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-[12px] top-[16px] text-eyeColor text-xl cursor-pointer"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="w-[18px] h-[18px] accent-primary rounded"
              {...formik.getFieldProps("terms")}
            />
            <label htmlFor="terms" className="ml-2 w-[286px] text-conditions">
              {Strings.account}{" "}
              <Link
                to="/Termsandconditions"
                className="text-primary font-semibold underline"
                
              >
                {Strings.TermsnConditions}
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-[12px] md:py-[16px] bg-primary text-white rounded-[40px] shadow-md hover:bg-red-600 transition"
          >
            {Strings.signup}
          </button>
        </form>

        <p className="text-logsubText md:text-signup text-signupsmall">
          {Strings.already_have_an_account}{" "}
          <Link
            to="/login"
            onClick={handleScrollToTop}
            className="text-primary underline"
          >
            {Strings.login}
          </Link>
        </p>
      </div>
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default SignUp;
