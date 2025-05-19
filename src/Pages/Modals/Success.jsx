import { useNavigate } from "react-router-dom";

import handleScrollToTop from "../../utils/SmoothScroll";
import { loginApi } from "../../features/users/api";
import { useDispatch, useSelector } from "react-redux";
import { setAuthState, setUserData } from "../../slices/authenticatedSlice";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import { Strings } from "../../Strings/Strings";
import { useState } from "react";
import LoadingSpinner from "../../utils/loading/LoadingSpinner";

const Success = () => {
  const logindetails = localStorage.getItem("logindetails");
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSuccess = async () => {

    setLoading(true)
    handleScrollToTop();
    const response = await loginApi(logindetails);

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
        setLoading(false)
        // setIsLoading(false);
        navigate("/profilesetup");
        localStorage.removeItem("logindetails");
      } else if (response.responseObject.signUpAs === "Super Admin") {
        handleScrollToTop()
        navigate("/chapters");
      }
    } else if (
      response.message === "No User Found" &&
      response.statusCode === 404
    ) {
      console.log(response);
      //  setIsLoading(false);

      // setErrorMessage("No User Found");
    } else if (
      response.message === "Invalid Password" &&
      response.statusCode === 401
    ) {
      console.log(response);
      // setIsLoading(false);
      // setErrorMessage("Invalid Password");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-bgsmallscreen md:bg-bglargescreen h-[100vh] w-full  px-4">
      <div className={`bg-primeWhite shadow-lg flex flex-col items-center w-[340px] h-[345px] rounded-[16px] p-6 ${loading && "opacity-10"}`}>
        {/* Text Section */}
        <img src={Logo} alt="success-logo" />
        <div className="flex-grow flex flex-col justify-center items-center">
          <h2 className="text-log text-center font-semibold">
            {Strings.account_sucessfully_created}
          </h2>
        </div>

        {/* Button Section */}
        <div className="mt-4 w-full">
          <button
            onClick={handleSuccess}
            type="submit"
            className="w-full h-[48px] rounded-[24px] bg-primary text-primeWhite font-medium"
          >
            {Strings.Continue}
          </button>
        </div>
      </div>
      {
        loading && <LoadingSpinner/>
      }
    </div>
  );
};

export default Success;
