import { GoEyeClosed } from "react-icons/go";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux"
import { resetPasswordAPI } from "../../features/users/api";

import PasswordModalSuccess from "../Modals/PasswordModalSuccess";
import { Strings } from "../../Strings/Strings";

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [sucessModal, setSucessModal] = useState(false);
  const storedemailId = useSelector(store => store.signUpformData.FormData)
  const emailId= storedemailId.email

  const dispatch= useDispatch()

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/\d/, "Must contain at least one number")
      .matches(/[@$!%*?&#]/, "Must contain at least one special character")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async(values) => {
      const payload= {
        emailId,
        password:values.confirmPassword
      }
   

      setSucessModal(true);
      console.log("Form submitted:", values);

      const res= await dispatch(resetPasswordAPI(payload));
       console.log(res,"century")
      //dispatch(resetPasswordAPI(payload));
    },
  });

  return sucessModal ? (
    <PasswordModalSuccess />
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-bgsmallscreen md:bg-bglargescreen px-6">
      <div className="bg-white mt-16 p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
        <div className="w-full text-center">
          <h1 className=" text-log font-bold mb-4">{Strings["set_your_password"]}</h1>
          <p className=" text-accent mb-6">
            {Strings.password_text}
          </p>
        </div>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={formik.handleSubmit}
        >
          <div className="relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={`block w-full h-[48px] px-4 py-2 border rounded-[8px] shadow-sm ${
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

          <div className="relative">
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`block w-full h-[48px]  px-4 py-2 border rounded-[8px] shadow-sm ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "border-primary"
                  : "border-inputBorder"
              }`}
              {...formik.getFieldProps("confirmPassword")}
            />
            <GoEyeClosed
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-[12px] top-[16px] text-eyeColor text-xl cursor-pointer"
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition"
          >
            {Strings.change_password}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
