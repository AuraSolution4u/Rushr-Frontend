import { FaArrowLeft } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import handleScrollToTop from "../../utils/SmoothScroll";
import { Strings } from "../../Strings/Strings";

const VerifyYourself = () => {

  const navigate = useNavigate();
  const verify_code = "443322";

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .length(6, "Code must be exactly 6 digits")
        .required("Code is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);

      if (values.code === verify_code) {
        handleScrollToTop();
        navigate("/resetpassword");
        // dispatch(setAuthState());
      }
    },
  });

  return (
    <div className="flex items-start justify-center min-h-screen pt-[50px] px-[16px] h-[100vh]">
      <div className="bg-primeWhite px-[56px] py-[36px] shadow-lg flex flex-col justify-center items-center gap-[24px] md:gap-[10px] relative w-[361px] h-[370px] md:w-[455px] md:h-[382px] top-[141px] md:top-[180px] md:rounded-[16px] rounded-[13px]">
        <div>
          <button className="h-[46px] w-[46px] top-[36px] rounded-full bg-arrowBg">
            <FaArrowLeft className="h-[19.9px] w-[19.41px] m-auto text-primary" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-[24px] md:gap-[32px] md:h-[343px] md:w-[254px]">
          <div className="flex flex-col items-center w-[320px] h-[75px] gap-[7px] md:w-[341px] md:h-[94px] md:gap-[14px]">
            <h2 className="text-log">{Strings.verify_yourself}</h2>
            <p className="text-eyeColor text-verifyText text-center">
              {Strings.enter_your_6_digit_code}
            </p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="w-[315px] h-[114px] md:w-[343px] md:h[128px] flex flex-col gap-[18px] md:gap-[16px]"
          >
            <input
              type="text"
              name="code"
              placeholder="Enter 6 digit code"
              maxLength={6}
              className={`h-[48px] min-h-[48px] w-[315px] md:w-[343px] px-4 py-2 border ${
                formik.touched.code && formik.errors.code
                  ? "border-red-500"
                  : "border-inputBorder"
              } rounded-[8px] text-placeholder`}
              value={formik.values.code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <button
              type="submit"
              className="w-full h-[48px] md:h-[56px] rounded-[40px] px-[136px] py-[12px] md:py-[16px] gap-[10px] bg-primary text-primeWhite text-verify"
            >
              {Strings.verify}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyYourself;
