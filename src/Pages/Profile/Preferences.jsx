// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// // import {
// //   Profile_preferences_decription,
// //   Profile_preferences_heading,
// // } from "../../utils/String.js";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setUserFormData } from "../../slices/authenticatedSlice.js";
// import Modal from "./Modal.jsx";
// import { submitForm } from "../../features/users/submitForm.js";
// import { updateUserData } from "../../features/users/api.js";
// import LoadingSpinner from "../../utils/loading/LoadingSpinner.jsx";
// import { Strings } from "../../Strings/Strings.js";

// const Preferences = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [loading,setLoading] = useState(false)
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const getUserData = useSelector((store) => store.authenticated.storeUserData);

//   // Validation schema
//   const validationSchema = Yup.object().shape({
//     notificationPreference: Yup.string().required(
//       "Please select a notification preference."
//     ),
//     privacySetting: Yup.string().required("Please select a privacy setting."),
//   });
//   const userProfile = JSON.parse(localStorage.getItem("userProfile"));
//   // final submit data

//   return (
//     <div className="flex flex-wrap items-start justify-center bg-gray-100 px-5 min-h-screen text-basicInfoLabelColor scrollbar-hide overflow-scroll h-[100vh]  w-full">
//            <div className="relative top-10 sm:top-16 flex flex-col items-center gap-8 w-full max-w-4xl p-4 md:p-6 lg:p-8 mt-[50px]">
//              <div className="min-w-full max-w-full md:h-[40px] arrow flex flex-col items-center gap-[9px] mb-[30px]">
//              <div className="flex items-center justify-center gap-4 mt-[-5px] bg-white w-70 h-12 rounded-full shadow-md">
//                  <h1 className="text-profileSetUpHeading text-lg p-3">
//                   {Strings.preferences}
//                 </h1>               
//                 </div>
//                </div>
//               <div>
//               <div className="w-full max-w-[566px] text-center">
//                  <p className="text-secondary w-fit">{Strings.preferences_desc}</p>
//                </div>
//              </div>
//         {/* Formik Form */}
//         <Formik
//           initialValues={{
//             notificationPreference:
//               getUserData.notificationPreference || "Email",
//             privacySetting: getUserData.privacySettings || null,
//             ...userProfile,
//           }}
//           validationSchema={validationSchema}
//           onSubmit={async (values) => {
//             const updateProfile = {
//               ...userProfile,
//               notificationPreference: values.notificationPreference,
//               privacySettings: values.privacySetting,
//             };
            
//             // const finalUserData = {
//             //   dateOfBirth:updateProfile.dateOfBirth,
//             //   emailId: updateProfile.emailId,
//             //   profilePicDir: updateProfile.profilePicDir,
//             //   profilePicName: updateProfile.profilePicName ,
//             //   firstName: updateProfile.firstName,
//             //   lastName: updateProfile.lastName,
//             //   universityName: updateProfile.universityName,
//             //   otherUniversityName: updateProfile.otherUniversityName,
//             //   mobileNumber: updateProfile.mobileNumber,
//             //   bio: updateProfile.bio,
//             //   tags: updateProfile.tags,
//             //   graduationYear: updateProfile.graduationYear,
//             //   major: updateProfile.major,
//             //   notificationPreference:values.notificationPreference,
//             //   privacySettings: values.privacySetting,
//             // };

//             const finalUserData = {
//               dateOfBirth:updateProfile.dateOfBirth,
//               emailId: updateProfile.emailId,
//               profilePicDir: updateProfile.profilePicDir,
//               profilePicName: updateProfile.profilePicName ,
//               firstName: updateProfile.firstName,
//               lastName: updateProfile.lastName,
//               universityName: updateProfile.universityName,
//               otherUniversityName: getUserData.otherUniversityName, //updateProfile.otherUniversityName,
//               mobileNumber: getUserData.mobileNumber,// updateProfile.mobileNumber,
//               bio: updateProfile.bio,
//               tags: updateProfile.tags,
//               graduationYear: updateProfile.graduationYear,
//               major: updateProfile.major,
//               notificationPreference:values.notificationPreference,
//               privacySettings: values.privacySetting,
//             };

//             console.log(finalUserData, "bfore sedn request");
//             // const result = await submitForm(updateProfile);
//             setLoading(true)
//             const result = await updateUserData(finalUserData);
           
//             dispatch(setUserFormData(finalUserData));
//             localStorage.setItem("userProfile", JSON.stringify(finalUserData));
//             // localStorage.setItem("saveForm")
//             localStorage.setItem("",JSON.stringify())
//             setLoading(false)
//             setIsModalVisible(true);
//           }}
//         >
//           {({ isValid, dirty }) => (
//             <Form className={`flex flex-col items-center gap-[26px] md:w-[648px] md:h-[358px] ${loading && "opacity-10"}`}>
//               {/* Notification Preferences */}
//               <div className="flex flex-col items-start md:w-[648px] gap-[36px]">
//                 <div className="flex flex-col md:w-full pb-[8px] gap-[26px]">
//                   <div className="w-full gap-[1px] flex flex-col">
//                     <div className="flex h-[29px] w-full pb-[8px] gap-[4px]">
//                       <p className="text-secondary">{Strings.notification_preferences}</p>
//                       <span>
//                         <HiOutlineQuestionMarkCircle className=" h-[16px] w-[16px] mt-[5px] text-accent" />
//                       </span>
//                     </div>
//                     <div className="flex md:flex-row flex-col md:w-full gap-[12px]">
//                       <div className="flex items-center gap-[10px]">
//                         <Field
//                           type="radio"
//                           name="notificationPreference"
//                           value="Email"
//                           className="accent-primary rounded w-[18px] h-[18px]"
//                         />
//                         <label className="text-signupsmall h-[22px] text-basicInfoLabelColor">
//                          {Strings.email_notifications}
//                         </label>
//                       </div>
//                     </div>
//                     <ErrorMessage
//                       name="notificationPreference"
//                       component="div"
//                       className="text-red-500 text-sm"
//                     />
//                   </div>

//                   {/* Privacy Settings */}
//                   <div>
//                     <div className="flex h-[29px] w-full pb-[8px] gap-[4px]">
//                       <p className="text-secondary">{Strings.privacy_settings}</p>
//                       <span>
//                         <HiOutlineQuestionMarkCircle className=" h-[16px] w-[16px] mt-[5px] text-accent" />
//                       </span>
//                     </div>
//                     <div className="flex md:flex-row flex-col md:w-full md:gap-[31px] gap-[8px]">
//                       <div className="flex items-center gap-[10px]">
//                         <Field
//                           type="radio"
//                           name="privacySetting"
//                           value="Public"
//                           className="accent-primary rounded w-[18px] h-[18px]"
//                         />
//                         <label className="text-signupsmall h-[22px] text-basicInfoLabelColor">
//                           {Strings.public } 
//                           <span className="text-secondary px-1">
//                             {Strings.visible_to_everyone}
//                           </span>
//                         </label>
//                       </div>
//                       <div className="flex items-center gap-[10px]">
//                         <Field
//                           type="radio"
//                           name="privacySetting"
//                           value="Private"
//                           className="accent-primary rounded w-[18px] h-[18px]"
//                         />
//                         <label className="text-signupsmall h-[22px] text-basicInfoLabelColor">
//                           {Strings.private}{" "}
//                           <span className="text-secondary">
//                             {Strings.visible_only_to_chapter_members}
//                           </span>
//                         </label>
//                       </div>
//                     </div>
//                     <ErrorMessage
//                       name="privacySetting"
//                       component="div"
//                       className="text-red-500 text-sm"
//                     />
//                   </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex flex-col md:flex-row items-center gap-[14px] w-full">
//                        <button onClick={()=>{
//                         navigate("/academicinfo")
//                        }} type="button" className="hidden md:block w-full max-w-[317px] h-[42px] md:h-[56px] bg-primeBlack text-primeWhite rounded-[8px]">
//                         {Strings.back}
//                       </button>
//                       <button type="submit" className="w-full max-w-[317px] h-[42px] md:h-[56px] bg-primary text-primeWhite rounded-[8px]">
//                          {Strings.save}
//                       </button>
//                     </div>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//       {
//         loading ? <LoadingSpinner/> :<Modal isOpen={isModalVisible} toggle={setIsModalVisible} />
//       }

      
//     </div>
//   );
// };

// export default Preferences;


import { Formik, Form, Field, ErrorMessage } from "formik";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import {
//   Profile_preferences_decription,
//   Profile_preferences_heading,
// } from "../../utils/String.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserFormData } from "../../slices/authenticatedSlice.js";
import Modal from "./Modal.jsx";
import { submitForm } from "../../features/users/submitForm.js";
import { updateUserData } from "../../features/users/api.js";
import LoadingSpinner from "../../utils/loading/LoadingSpinner.jsx";
import { Strings } from "../../Strings/Strings.js";


const Preferences = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUserData = useSelector((store) => store.authenticated.storeUserData);


  // Validation schema
  const validationSchema = Yup.object().shape({
    notificationPreference: Yup.string().required(
      "Please select a notification preference."
    ),
    privacySetting: Yup.string().required("Please select a privacy setting."),
  });
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  // final submit data


  return (
    <div className="flex flex-wrap items-start justify-center bg-gray-100 px-5 min-h-screen text-basicInfoLabelColor scrollbar-hide overflow-scroll h-[100vh]  w-full">
           <div className="relative top-10 sm:top-16 flex flex-col items-center gap-8 w-full max-w-4xl p-4 md:p-6 lg:p-8 mt-[50px]">
             <div className="min-w-full max-w-full md:h-[40px] arrow flex flex-col items-center gap-[9px] mb-[30px]">
             <div className="flex items-center justify-center gap-4 mt-[-5px] bg-white w-70 h-12 rounded-full shadow-md">
                 <h1 className="text-profileSetUpHeading text-lg p-3">
                  {Strings.preferences}
                </h1>              
                </div>
               </div>
              <div>
              <div className="w-full max-w-[566px] text-center">
                 <p className="text-secondary w-fit">{Strings.preferences_desc}</p>
               </div>
             </div>
        {/* Formik Form */}
        <Formik
          initialValues={{
            notificationPreference:
              getUserData.notificationPreference || "Email",
            privacySetting: getUserData.privacySettings || null,
            ...userProfile,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const updateProfile = {
              ...userProfile,
              notificationPreference: values.notificationPreference,
              privacySettings: values.privacySetting,
            };
           
            // const finalUserData = {
            //   dateOfBirth:updateProfile.dateOfBirth,
            //   emailId: updateProfile.emailId,
            //   profilePicDir: updateProfile.profilePicDir,
            //   profilePicName: updateProfile.profilePicName ,
            //   firstName: updateProfile.firstName,
            //   lastName: updateProfile.lastName,
            //   universityName: updateProfile.universityName,
            //   otherUniversityName: updateProfile.otherUniversityName,
            //   mobileNumber: updateProfile.mobileNumber,
            //   bio: updateProfile.bio,
            //   tags: updateProfile.tags,
            //   graduationYear: updateProfile.graduationYear,
            //   major: updateProfile.major,
            //   notificationPreference:values.notificationPreference,
            //   privacySettings: values.privacySetting,
            // };


            const finalUserData = {
              signUpAs: updateProfile.signUpAs === "Student" ? 1 : updateProfile.signUpAs === "Alumni" ? 2 : null,
              dateOfBirth:updateProfile.dateOfBirth,
              emailId: updateProfile.emailId,
              profilePicDir: updateProfile.profilePicDir,
              profilePicName: updateProfile.profilePicName ,
              firstName: updateProfile.firstName,
              lastName: updateProfile.lastName,
              universityName: updateProfile.universityName,
              otherUniversityName: getUserData.otherUniversityName, //updateProfile.otherUniversityName,
              mobileNumber: getUserData.mobileNumber,// updateProfile.mobileNumber,
              bio: updateProfile.bio,
              tags: updateProfile.tags,
              graduationYear: updateProfile.graduationYear,
              major: updateProfile.major,
              notificationPreference:values.notificationPreference,
              privacySettings: values.privacySetting,
            };


            console.log(finalUserData, "bfore sedn request");
            // const result = await submitForm(updateProfile);
            setLoading(true)
            const result = await updateUserData(finalUserData);

          

           localStorage.setItem("saveFormData",JSON.stringify(result.responseObject))

            console.log(result.responseObject,"1,00,0000")
           
            dispatch(setUserFormData(finalUserData));
            localStorage.setItem("userProfile", JSON.stringify(finalUserData));
            // localStorage.setItem("saveForm")
            localStorage.setItem("",JSON.stringify())
            setLoading(false)
            setIsModalVisible(true);
          }}
        >
          {({ isValid, dirty }) => (
            <Form className={`flex flex-col items-center gap-[26px] md:w-[648px] md:h-[358px] ${loading && "opacity-10"}`}>
              {/* Notification Preferences */}
              <div className="flex flex-col items-start md:w-[648px] gap-[36px]">
                <div className="flex flex-col md:w-full pb-[8px] gap-[26px]">
                  <div className="w-full gap-[1px] flex flex-col">
                    <div className="flex h-[29px] w-full pb-[8px] gap-[4px]">
                      <p className="text-secondary">{Strings.notification_preferences}</p>
                      <span>
                        <HiOutlineQuestionMarkCircle className=" h-[16px] w-[16px] mt-[5px] text-accent" />
                      </span>
                    </div>
                    <div className="flex md:flex-row flex-col md:w-full gap-[12px]">
                      <div className="flex items-center gap-[10px]">
                        <Field
                          type="radio"
                          name="notificationPreference"
                          value="Email"
                          className="accent-primary rounded w-[18px] h-[18px]"
                        />
                        <label className="text-signupsmall h-[22px] text-basicInfoLabelColor">
                         {Strings.email_notifications}
                        </label>
                      </div>
                    </div>
                    <ErrorMessage
                      name="notificationPreference"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>


                  {/* Privacy Settings */}
                  <div>
                    <div className="flex h-[29px] w-full pb-[8px] gap-[4px]">
                      <p className="text-secondary">{Strings.privacy_settings}</p>
                      <span>
                        <HiOutlineQuestionMarkCircle className=" h-[16px] w-[16px] mt-[5px] text-accent" />
                      </span>
                    </div>
                    <div className="flex md:flex-row flex-col md:w-full md:gap-[31px] gap-[8px]">
                      <div className="flex items-center gap-[10px]">
                        <Field
                          type="radio"
                          name="privacySetting"
                          value="Public"
                          className="accent-primary rounded w-[18px] h-[18px]"
                        />
                        <label className="text-signupsmall h-[22px] text-basicInfoLabelColor">
                          {Strings.public }
                          <span className="text-secondary px-1">
                            {Strings.visible_to_everyone}
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <Field
                          type="radio"
                          name="privacySetting"
                          value="Private"
                          className="accent-primary rounded w-[18px] h-[18px]"
                        />
                        <label className="text-signupsmall h-[22px] text-basicInfoLabelColor">
                          {Strings.private}{" "}
                          <span className="text-secondary">
                            {Strings.visible_only_to_chapter_members}
                          </span>
                        </label>
                      </div>
                    </div>
                    <ErrorMessage
                      name="privacySetting"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>


                {/* Buttons */}
                <div className="flex flex-col md:flex-row items-center gap-[14px] w-full">
                       <button
                       onClick={()=>navigate("/Academicinfo")}
                        type="button" className="hidden md:block w-full max-w-[317px] h-[42px] md:h-[56px] bg-primeBlack text-primeWhite rounded-[8px]">
                        {Strings.back}
                      </button>
                      <button type="submit" className="w-full max-w-[317px] h-[42px] md:h-[56px] bg-primary text-primeWhite rounded-[8px]">
                         {Strings.save}
                      </button>
                    </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {
        loading ? <LoadingSpinner/> :<Modal isOpen={isModalVisible} toggle={setIsModalVisible} />
      }


     
    </div>
  );
};


export default Preferences;

