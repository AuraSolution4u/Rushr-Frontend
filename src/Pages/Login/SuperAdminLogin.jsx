import { Link, useNavigate } from "react-router-dom";
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setAuthState, setNavbarState } from "../../slices/authenticatedSlice";
import handleScrollToTop from "../../utils/SmoothScroll"; 
import { loginApi } from "../../features/users/api";
import { Strings } from "../../Strings/Strings";

const SuperAdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

   const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleForgotPassword = () => {
    navigate("/reset");
  };
  const validationSchema = Yup.object({
    emailId: Yup.string()
      .email("Invalid emailId address")
      .matches(/.*@.*\.com$/, "Only .com emailIds are allowed")
      .required("emailId is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      emailId: "",
      password: "",
    },
    validationSchema,
    onSubmit:async (values) => {
      console.log("Form values:", values);
      const isValidUser =
        values.emailId === "aurasolution@gmail.com" &&
        values.password === "123456A@";

    
      if (isValidUser) {
        dispatch(setNavbarState("c"));
        handleScrollToTop();
        navigate("/profilesetup") 
      } else {
        alert("Invalid login credentials");
      }
    },
  });

  return (
    <div className="flex items-start justify-center min-h-screen md:bg-bglargescreen bg-bgsmallscreen px-[16px] h-[100vh]">
      <div className="bg-white top-[190px] relative p-8 rounded-[13px] shadow-lg w-[499px] h-[440px] flex flex-col justify-center items-center">
        <div className="h-[57px] md:h-[63px] w-[184px] md:w-[294px] gap-[7px]">
          <h1 className="text-log mb-4 text-center">{Strings.login}</h1>
          <p className="text-center text-logsubText mb-6">
           {Strings.welcome_back_to_RUSHR}
          </p>
        </div>
        <div className="md:w-[343px] h-[249.27px] w-[315px] mt-[49px] relative">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-[12px] w-[342px] h-[108px] md:[315px] ">
              <div className=" h-[48px] w-[315px] md:w-[343px] ">
                <input
                  required
                  type="email"
                  id="emailId"
                  placeholder=".edu emailId"
                  className={`block md:w-[343px] h-[48px] w-[315px] px-4 py-2 border rounded-[8px] shadow-sm ${
                    formik.touched.emailId && formik.errors.emailId
                      ? "border-primary"
                      : "border-inputBorder"
                  }`}
                  {...formik.getFieldProps("emailId")}
                />
              </div>

              <div className="h-[48px] w-[315px] md:w-[343px] relative ">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className={`block md:w-[343px] h-[48px] w-[315px] px-4 py-2 border rounded-[8px] shadow-sm ${
                    formik.touched.password && formik.errors.password
                      ? "border-primary"
                      : "border-inputBorder"
                  }`}
                  {...formik.getFieldProps("password")}
                /> 
                <GoEyeClosed
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[12px] top-[16px] text-eyeColor text-xl cursor-pointer"
                />
              </div>
            </div>

            <div className="text-right mb-4">
              <p
                onClick={handleForgotPassword}
                className="text-forgotsmall md:text-forgot text-primary underline cursor-pointer"
              >
                {Strings.forgot_password}
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-[12px] md:py-[16px] px-[136px] bg-primary text-white rounded-[40px] shadow-md hover:bg-red-600 transition"
            >
              {Strings.login}
            </button>
          </form>
          <p className="mt-6 text-center text-logsubText md:text-signup text-signupsmall">
            {Strings.dont_have_an_account}{" "}
            <Link to="/signup" className="text-primary underline">
              {Strings.signup}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLogin;
