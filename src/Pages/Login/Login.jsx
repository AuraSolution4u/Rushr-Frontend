import { Link, useNavigate } from "react-router-dom";
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthState,
  setUserData,
  setUserFormData,
} from "../../slices/authenticatedSlice";
import handleScrollToTop from "../../utils/SmoothScroll";
import { loginApi } from "../../features/users/api";
import { Oval } from "react-loader-spinner";
import LoadingSpinner from "../../utils/loading/LoadingSpinner";
import { ProtectedRoute, RedirectRoute } from "../../Routes/AppRoutes";
import { Strings } from "../../Strings/Strings";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userType = localStorage.getItem("userType");

  const isAuth = useSelector((store) => store.authenticated.is_auth);

  const handleForgotPassword = () => {
    handleScrollToTop();
    navigate("/reset");
  };

  const validationSchema = Yup.object({
    emailId: Yup.string()
      .email("Invalid emailId address")
      .matches(/.*@.*\.(com|edu)$/, ".edu and .com email IDs are allowed")
      .required("emailId is required"),
    password: Yup.string()
      .min(4, "Password must be at least 8 characters long")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      emailId: "",
      password: "",
    },
    validationSchema,

    onSubmit: async (values) => {
      console.log("Form values:", values);
      setIsLoading(true);
      const response = await loginApi(values);

      if (response.statusCode === 200) {
        const userType = response.responseObject.signUpAs;

        localStorage.setItem("userType", userType);

        dispatch(setUserData(response.responseObject));

        dispatch(setAuthState());
        // console.log("check userType:", response.responseObject.signUpAs);
        // history.push("/profilesetup")
        // navigate("/profilesetup");
        if (
          response.responseObject.signUpAs === "Student" ||
          response.responseObject.signUpAs === "Alumini"
        ) {
          handleScrollToTop();
          setIsLoading(false);

          const checkUserProfile =
            response.responseObject.notificationPreference;
          localStorage.setItem("chekUserProfile", checkUserProfile);
          // RedirectRoute(checkUserProfile)
          // if (checkUserProfile===null){

          //   navigate("/profilesetup");

          // }
          // else {
          //   navigate("/dashboard")
          // }
        } else if (response.responseObject.signUpAs === "Super Admin") {
          navigate("/chapters");
        }
      } else if (
        response.message === "No User Found" &&
        response.statusCode === 404
      ) {
        console.log(response);
        setIsLoading(false);

        setErrorMessage("No User Found");
      } else if (
        response.message === "Invalid Password" &&
        response.statusCode === 401
      ) {
        console.log(response);
        setIsLoading(false);
        setErrorMessage("Invalid Password");
      }

      // if (isValidUser) {
      //   handleScrollToTop();
      //   navigate("/profilesetup");
      // } else {
      //   alert("Invalid login credentials");
      // }
    },
  });
  //className={`flex flex-col ml-[240px] gap-6 p-8 ${studentDetailModal ? 'bg-black' : 'bg-gray-100'} min-h-screen`}

  return (
//     <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 md:bg-bglargescreen bg-bgsmallscreen w-full">
//       <div
//         className={`relative top-[10px] sm:top-[10px] md:top-[10px] p-6 sm:p-8 bg-white rounded-lg sm:rounded-xl shadow-lg w-full   sm:max-w-[400px] max-h-[420px] flex flex-col justify-center items-center ${
//           isLoading ? "opacity-10" : "opacity-100"
//         }`}
//       >
//         <div className="w-full">
//           <div className="flex flex-col items-center gap-2 sm:gap-[7px]">
//             <h1 className="text-lg sm:text-xl text-center font-semibold">
//               {Strings.login}
//             </h1>
//             <p className="text-center text-sm sm:text-base text-logsubText">
//               {Strings.welcome_back_to_RUSHR}
//             </p>
//           </div>

//           <div className="w-full max-w-[343px] mt-4">
//             <form
//               onSubmit={formik.handleSubmit}
//               className="space-y-3 sm:space-y-4"
//             >
//               <div>
//                 <input
//                   required
//                   type="email"
//                   id="emailId"
//                   placeholder=".edu Email Address"
//                   className={`block w-full h-10 px-4 border sm:max-w-[400px] rounded-lg shadow-sm   text-sm ${
//                     formik.touched.emailId && formik.errors.emailId
//                       ? "border-primary"
//                       : "border-inputBorder"
//                   }`}
//                   {...formik.getFieldProps("emailId")}
//                 />
//               </div>
//               <div className="relative">
//                 <input
//                   required
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   placeholder="Password"
//                   className={`block w-full h-10 px-4  sm:max-w-[400px] border rounded-lg shadow-sm   text-sm ${
//                     formik.touched.password && formik.errors.password
//                       ? "border-primary"
//                       : "border-inputBorder"
//                   }`}
//                   {...formik.getFieldProps("password")}
//                 />
//                 <GoEyeClosed
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-3 text-gray-500 text-lg cursor-pointer"
//                 />
//               </div>
//               <p className="text-xs text-primary">
//                 {errorMessage === "Invalid Password" ? "Invalid Password" : ""}
//                 {errorMessage === "No User Found" ? "No User Found" : ""}
//               </p>

//               {/* <div className="text-right">
//               <p
//                 onClick={() => {}}
//                 className="text-xs sm:text-sm text-primary underline cursor-pointer"
//               >
//                 {Strings.forgot_password}
//               </p>
//             </div> */}

//               <div className="text-right mb-4">
//                 <p
//                   onClick={handleForgotPassword}
//                   className="text-forgotsmall md:text-forgot text-primary underline cursor-pointer"
//                 >
//                   {Strings.forgot_password}
//                 </p>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-2 bg-primary text-white rounded-full shadow-md hover:bg-red-600 transition text-sm sm:text-base"
//               >
//                 {Strings.login}
//               </button>
//             </form>

//             <p className="mt-4 text-center text-xs sm:text-sm text-logsubText">
//               {Strings.dont_have_an_account}
//               <Link to="/signup" className="text-primary underline ml-1">
//                 {Strings.signup}
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//       {isLoading && <LoadingSpinner />}
//     </div>
//   );
// };

<div className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 w-full bg-bgsmallscreen md:bg-bglargescreen">
 {/* className="relative p-6 sm:p-8 bg-white rounded-lg sm:rounded-xl shadow-lg w-full max-w-[400px] flex flex-col justify-center items-center transition-opacity duration-300"> */}
<div className={`relative top-[10px] sm:top-[10px] md:top-[10px] p-6 sm:p-8 bg-white rounded-lg sm:rounded-xl shadow-lg w-full   sm:max-w-[400px] max-h-[420px] flex flex-col justify-center items-center ${
           isLoading ? "opacity-10" : "opacity-100"
        }`}>
  <div className="w-full">
    <div className="flex flex-col items-center gap-2 sm:gap-[7px]">
      <h1 className="text-lg sm:text-xl text-center font-semibold">{Strings.login}</h1>
      <p className="text-center text-sm sm:text-base text-logsubText">{Strings.welcome_back_to_RUSHR}</p>
    </div>

    <div className="w-full max-w-[343px] mt-4">
      <form onSubmit={formik.handleSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <input
            required
            type="email"
            id="emailId"
            placeholder=".edu Email Address"
            className={`block w-full h-10 px-4 border rounded-lg shadow-sm text-sm ${
              formik.touched.emailId && formik.errors.emailId ? "border-primary" : "border-inputBorder"
            }`}
            {...formik.getFieldProps("emailId")}
          />
        </div>
        <div className="relative">
          <input
            required
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            className={`block w-full h-10 px-4 border rounded-lg shadow-sm text-sm ${
              formik.touched.password && formik.errors.password ? "border-primary" : "border-inputBorder"
            }`}
            {...formik.getFieldProps("password")}
          />
          <GoEyeClosed
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500 text-lg cursor-pointer"
          />
        </div>
        <p className="text-xs text-primary">{errorMessage}</p>

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
          className="w-full py-2 bg-primary text-white rounded-full shadow-md hover:bg-red-600 transition text-sm sm:text-base"
        >
          {Strings.login}
        </button>
      </form>

      <p className="mt-4 text-center text-xs sm:text-sm text-logsubText">
        {Strings.dont_have_an_account}
        <Link to="/signup" className="text-primary underline ml-1">
          {Strings.signup}
        </Link>
      </p>
    </div>
  </div>
</div>
{isLoading && <LoadingSpinner />}
</div>
);
};


export default Login;
