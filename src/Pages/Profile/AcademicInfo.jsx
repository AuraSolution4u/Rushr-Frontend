// import { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import Modal from "./Modal";
// import { useDispatch, useSelector } from "react-redux";
// import useMasterList from "../../utils/useMasterList";
// import { setUserFormData } from "../../slices/authenticatedSlice";

// import { baseApi } from "../../api/baseApi";
// import { endPoints } from "../../api/endPoints";
// import { Strings } from "../../Strings/Strings";

// const Acadamic = () => {
//   // const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isUniversityDropdownOpen, setUniversityDropdownOpen] = useState(false);
//   const [signedUniversity, setSignedUniversity] = useState(null);
//   const [isGraduationDropdownOpen, setGraduationDropdownOpen] = useState(false);
//   const [isRoleDropdownOpen, setRoleDropdownOpen] = useState(false);
//   const [majorOpen, setMajorOpen] = useState(false);
//   const [universityOpen, setUniversityOpen] = useState(false); // University dropdown visibility
//   const [showOtherUniversityInput, setShowOtherUniversityInput] =
//     useState(false); // Show input for 'other' university
//   const [universitySearch, setUniversitySearch] = useState("");
//   const [majorSearch, setMajorSearch] = useState("");
//   const [masterList, setMasterList] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const getUserData = useSelector((store) => store.authenticated.storeUserData);
//   console.log(masterList,"hareee")

//   const universities = masterList !== null && masterList.responseObject.universityMasterList;

//   const majorMasterList =masterList !== null && masterList.responseObject.majorMasterList;

//   // console.log(majorMasterList,"hareee")

//   useEffect(() => {
//     const universityId = getUserData.universityId;
//     const fetchMasters = async () => {
//       const data = await fetch(baseApi + endPoints.masterApi);
//       const res = await data.json();
//       const masterList = res.responseObject.universityMasterList;
//       const findUniversityId = masterList.find((each) => each.universityId === universityId);
//       setSignedUniversity(findUniversityId.universityName);
//       setMasterList(res);
//     };
//     fetchMasters();
//   }, []);
//   // const getUserData = useSelector((store) => store.authenticated.basicFormData);

//   const role = localStorage.getItem("userType");
//   console.log("acedemic info", getUserData);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const graduationYears = ["2024", "2025", "2026", "2027", "2028"];
//   const roles = ["Student", "Alumni"];
//   const userProfile = JSON.parse(localStorage.getItem("userProfile"));
//   const formik = useFormik({
//     initialValues: {
//       //university: getUserData.universityName || userProfile.university,
//       university:
//         getUserData.universityName === 48
//           ? "Other"
//           : getUserData.universityName,
//       otherUniversity:
//         getUserData.otherUniversityName ,
//       graduationYear:
//         getUserData.graduationYear || userProfile.graduationYear || null,
//       studyField: getUserData.majorName || userProfile.major || null,
//       userType: role || "",
//       //  ...userProfile
//     },
//     validationSchema: Yup.object({
//       // university: Yup.string(),
//       // .test(
//       //   "validate-other-university",
//       //   "Enter Your University ",
//       //   function (value) {
//       //     const { otherUniversity } = this.parent;
//       //     if (value === "Others" && !otherUniversity) {
//       //       return false;
//       //     }
//       //     return true;
//       //   }
//       // ),
//       // otherUniversity: Yup.string(),
//       graduationYear: Yup.string().required("Please select a graduation year"),
//       studyField: Yup.string().max(50, "Must be 50 characters or less"),
//       userType: Yup.string().required("Please select a role"),
//     }),
//     onSubmit: (values) => {
//       const selectedUniversity = universities.find(
//         (uni) => uni.universityName === values.university
//       );
//       const selectedMajor = majorMasterList.find(
//         (uni) => uni.nameOfMajor === values.studyField
//       );
//       // console.log(selectedUniversity,selectedMajor,majorMasterList," Vinayaka chavithi")
//      console.log("userProfileAcademic",userProfile)
//       const updateProfile = {
//         ...userProfile,
//         signUpAs: values.userType, // if backend team updated to change role field, then remove comments
//        universityId:getUserData.universityId , //selectedUniversity.universityId || null , // if this field is added
//         //universityName:values.university //(uncomment this if universityid is added in api)

//         universityName:
//           userProfile.universityName === "Other"
//             ? 48
//             :  getUserData.universityId,//selectedUniversity.universityId,
//         otherUniversityName: getUserData.otherUniversityName,
//         graduationYear: values.graduationYear,
//         //major: values.studyField, //if backend send this  remove comment
//         major: selectedMajor.id,
//       };
//       console.log("userProfile", updateProfile, userProfile);
//       localStorage.setItem("userProfile", JSON.stringify(updateProfile));
//       dispatch(setUserFormData(updateProfile));

//       navigate("/preference");
//       // setIsModalVisible(true);
//     },
//   });
//   const toggleUniversityDropdown = () => setUniversityOpen(!universityOpen);
//   const toggleMajorDropdown = () => setMajorOpen(!majorOpen);

//   const handleSelect = (fieldName, value) => {
//     formik.setFieldValue(fieldName, value);
//     setUniversityDropdownOpen(false);
//     setGraduationDropdownOpen(false);
//     setRoleDropdownOpen(false);
//     setSearchTerm("");
//   };
//   const handleUniversitySelect = (value) => {
//     formik.setFieldValue("university", value);
//     setUniversityOpen(false);
//     setMajorOpen(false);
//     setUniversitySearch("");

//     if (value === "Other") {
//       setShowOtherUniversityInput(true);
//     } else {
//       setShowOtherUniversityInput(false);
//       setSignedUniversity(null);
//     }
//   };

//   const handleMajorSelect = (value) => {
//     formik.setFieldValue("studyField", value);
//     setUniversityOpen(false);
//     setMajorOpen(false);
//     setMajorSearch("");
//   };

//   const handleUniversitySearch = (e) => {
//     setUniversitySearch(e.target.value);
//   };

//   const handleMajorSearch = (e) => {
//     setMajorSearch(e.target.value);
//   };

//   return (
//     <div
//       onClick={() => {
//         if (universityOpen || majorOpen) {
//           setUniversityOpen(false);
//           setMajorOpen(false);
//         }
//       }}
//       className="flex items-start justify-center bg-gray-100 px-5 scrollbar-hide overflow-scroll h-[100vh]  w-full text-basicInfoLabelColor"
//     >
//      <div className="relative top-10 sm:top-16 flex flex-col items-center gap-8 w-full max-w-4xl p-4 md:p-6 lg:p-8 mt-[30px]">
//       <div className="min-w-full max-w-full md:h-[40px] arrow flex flex-col items-center gap-[9px] mb-[30px]">
//        <div className="flex items-center justify-center gap-4 mt-[-5px] bg-white w-70 h-12 rounded-full shadow-md">
//                  <h1 className="text-profileSetUpHeading text-lg p-3">{Strings.academic_information}
//                  </h1>
//                </div>
//           {/* <p className="text-secondary md:w-[518px] w-[322px] text-center">
//             {Strings.academic_information}
//           </p> */}
//         </div>

//         <form
//           onSubmit={formik.handleSubmit}
//           className="flex flex-col gap-[36px] items-center md:w-[648px] w-[313px]"
//         >
//           {/* University Dropdown */}

//           <div className="flex flex-col items-start md:w-full">
//             <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
//               <p className="text-primary">*</p>
//               <label className="text-h5 text-profileSetUpHeading">
//                 {Strings.university_name}
//               </label>
//             </div>
//             <div className="relative w-[315px] md:w-full text-accent z-10">
//               <div
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   toggleUniversityDropdown();
//                 }}
//                 className="px-4 py-2 border h-[48px] border-inputBorder bg-white flex items-center justify-between rounded-[8px] cursor-pointer"
//               >
//                 {formik.values.university ||
//                   signedUniversity ||
//                   "Select your University"}
//                 <IoIosArrowDown />
//                 {/* {universityOpen ? <IoIosArrowUp /> : <IoIosArrowDown />} */}
//               </div>

//               {/* {universityOpen && (
//                 <div
//                   onClick={(e) => e.stopPropagation()}
//                   className="absolute w-full mt-1 bg-white border border-inputBorder rounded-[8px] shadow-lg max-h-[150px] overflow-auto"
//                 >
//                   <input
//                     type="text"
//                     placeholder="Search your University"
//                     value={universitySearch}
//                     onChange={handleUniversitySearch}
//                     className="w-full px-4 py-2 border-b border-inputBorder focus:outline-none"
//                   />
//                   {universities
//                     .filter((uni) =>
//                       uni.universityName
//                         .toLowerCase()
//                         .includes(universitySearch.toLowerCase())
//                     )
//                     .map((each) => (
//                       <div
//                         key={each.universityId}
//                         onClick={() =>
//                           handleUniversitySelect(each.universityName)
//                         }
//                         className="px-4 py-2 cursor-pointer hover:bg-primary m-1 rounded-lg hover:text-white"
//                       >
//                         {each.universityName}
//                       </div>
//                     ))}
//                 </div>
//               )} */}
//             </div>
//             {formik.touched.university && formik.errors.university && (
//               <div className="text-primary text-sm mt-1">
//                 {formik.errors.university}
//               </div>
//             )}
//           </div>

//           {/* Conditionally Render Input for "Other" University */}
//           {(signedUniversity === "Other" || showOtherUniversityInput) && (
//             <div className="flex flex-col items-start w-full">
//               <input
//                 disabled
//                 type="text"
//                 value={getUserData.otherUniversityName || ""}
//                 name="otherUniversity"
//                 placeholder="Enter Your University"
//                 className={`md:w-full  h-[48px] w-full block px-4 py-2 border rounded-[8px] ${
//                   formik.touched.otherUniversity &&
//                   formik.errors.otherUniversity
//                     ? "border-red-500"
//                     : "border-inputBorder"
//                 }`}
//                 {...formik.getFieldProps("otherUniversity")}
//               />
//             </div>
//           )}
//           {/* Graduation Year */}
//           <div className="flex flex-col items-start w-full">
//             <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
//               <p className="text-primary">*</p>
//               <label className="text-h5 text-profileSetUpHeading">
//                 {Strings.graduation_year}
//               </label>
//             </div>
//             <div className="relative w-full">
//               <div
//                 onClick={() => {
//                   setGraduationDropdownOpen(!isGraduationDropdownOpen);
//                   setUniversityDropdownOpen(false);
//                   setRoleDropdownOpen(false);
//                 }}
//                 className={`flex items-center justify-between px-[12px] py-[8px]  bg-white border rounded-[6px] cursor-pointer ${
//                   formik.touched.graduationYear && formik.errors.graduationYear
//                     ? "border-primary"
//                     : "border-inputBorder"
//                 }`}
//               >
//                 {formik.values.graduationYear || "Select Year"}
//                 {isGraduationDropdownOpen ? (
//                   <IoIosArrowUp />
//                 ) : (
//                   <IoIosArrowDown />
//                 )}
//               </div>
//               {isGraduationDropdownOpen && (
//                 <div className="absolute w-full mt-1 bg-white border rounded-[6px] shadow-lg z-20">
//                   {graduationYears.map((year, index) => (
//                     <div
//                       key={index}
//                       onClick={() => handleSelect("graduationYear", year)}
//                       className="px-4 py-3 cursor-pointer hover:bg-primary hover:text-white"
//                     >
//                       {year}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Field of Study */}
//           {/* <div className="flex flex-col items-start w-full">
//            <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">

//              <label className="text-h5 text-profileSetUpHeading">
//                Major/Field of Study{" "}
//                <span className="text-secondary">(optional)</span>
//              </label>
//            </div>
//            <input
//              type="text"
//              name="studyField"
//              placeholder="Enter your field of study"
//              className={`w-full px-[12px] py-[8px] border rounded-[6px] outline-none ${
//                formik.touched.studyField && formik.errors.studyField
//                  ? "border-primary"
//                  : "border-inputBorder"
//              }`}
//              value={formik.values.studyField}
//              onChange={formik.handleChange}
//              onBlur={formik.handleBlur}
//            />
//            {formik.touched.studyField && formik.errors.studyField && (
//              <div className="text-primary text-sm mt-1">
//                {formik.errors.studyField}
//              </div>
//            )}
//          </div> */}

//           <div className="flex flex-col items-start md:w-full">
//             <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
//               <label className="text-h5 text-profileSetUpHeading">
//                 {Strings.major} {Strings.Optional}
//               </label>
//             </div>
//             <div className="relative w-[315px] md:w-full text-accent z-10">
//               <div
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   toggleMajorDropdown();
//                 }}
//                 className="px-4 py-2 border h-[48px] border-inputBorder bg-white flex items-center justify-between rounded-[8px] cursor-pointer"
//               >
//                 {formik.values.studyField || "Major/ Field of Study"}
//                 {majorOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
//               </div>

//               {majorOpen && (
//                 <div
//                   onClick={(e) => e.stopPropagation()}
//                   className="absolute w-full mt-1 bg-white border border-inputBorder rounded-[8px] shadow-lg max-h-[150px] overflow-auto"
//                 >
//                   <input
//                     type="text"
//                     placeholder="Search Your Major/Field of Study"
//                     value={majorSearch}
//                     onChange={handleMajorSearch}
//                     className="w-full px-4 py-2 border-b border-inputBorder focus:outline-none"
//                   />
//                   {majorMasterList
//                     .filter((uni) =>
//                       uni.nameOfMajor
//                         .toLowerCase()
//                         .includes(majorSearch.toLowerCase())
//                     )
//                     .map((each) => (
//                       <div
//                         key={each.universityId}
//                         onClick={() => handleMajorSelect(each.nameOfMajor)}
//                         className="px-4 py-2 cursor-pointer hover:bg-primary m-1 rounded-lg hover:text-white"
//                       >
//                         {each.nameOfMajor}
//                       </div>
//                     ))}
//                 </div>
//               )}
//             </div>
//             {formik.touched.studyField && formik.errors.studyField && (
//               <div className="text-primary text-sm mt-1">
//                 {formik.errors.studyField}
//               </div>
//             )}
//           </div>
//           {/* User Type */}
//           {/* <div className="  md:block flex flex-col items-start w-full">
//             <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
//               <p className="text-primary">*</p>
//               <label className="text-h5 text-profileSetUpHeading">
//                 {Strings.user_role}
//               </label>
//             </div>
//             <div
//               onClick={() => {
//                 setRoleDropdownOpen(!isRoleDropdownOpen);
//                 setUniversityDropdownOpen(false);
//                 setGraduationDropdownOpen(false);
//               }}
//               className={`flex items-center justify-between w-full px-[12px] py-[8px] border rounded-[6px] cursor-pointer ${
//                 formik.touched.userType && formik.errors.userType
//                   ? "border-primary"
//                   : "border-inputBorder"
//               }`}
//             >
//               {" "}
//               {formik.values.userType || ""}
//               {isRoleDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
//             </div>{" "}
//             {isRoleDropdownOpen && (
//               <div className="absolute w-[100%] mt-1 bg-white border rounded-[6px] shadow-lg z-10">
//                 {roles.map((role, index) => (
//                   <div
//                     key={index}
//                     onClick={() => handleSelect("userType", role)}
//                     className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
//                   >
//                     {role}

//                   </div>
//                 ))}
//               </div>
//             )}
//             {formik.touched.userType && formik.errors.userType && (
//               <div className="text-primary text-sm mt-1">
//                 {" "}
//                 {formik.errors.userType}{" "}
//               </div>
//             )}{" "}
//           </div> */}
//           <div className="relative md:block flex flex-col items-start w-full">
//   <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
//     <p className="text-primary">*</p>
//     <label className="text-h5 text-profileSetUpHeading">
//       {Strings.user_role}
//     </label>
//   </div>
//   <div
//     onClick={() => {
//       setRoleDropdownOpen(!isRoleDropdownOpen);
//       setUniversityDropdownOpen(false);
//       setGraduationDropdownOpen(false);
//     }}
//     className={`flex items-center justify-between w-full px-[12px] py-[8px] border rounded-[6px] cursor-pointer ${
//       formik.touched.userType && formik.errors.userType
//         ? "border-primary"
//         : "border-inputBorder"
//     }`}
//     tabIndex={0}
//     onKeyDown={(e) => {
//       if (e.key === "Enter") setRoleDropdownOpen(!isRoleDropdownOpen);
//     }}
//   >
//     {formik.values.userType || <span className="text-gray-400">Select a role</span>}
//     {isRoleDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
//   </div>

//   {isRoleDropdownOpen && (
//     <div className="absolute w-full mt-1 bg-white border rounded-[6px] shadow-lg z-10">
//       {roles.map((role, index) => (
//         <div
//           key={index}
//           onClick={() => handleSelect("userType", role)}
//           className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
//         >
//           {role}
//         </div>
//       ))}
//     </div>
//   )}

//   {formik.touched.userType && formik.errors.userType && (
//     <div className="text-primary text-sm mt-1">{formik.errors.userType}</div>
//   )}
// </div>

//           {/* Submit Button */}
//           <div className="flex items-center gap-[14px] md:w-[648px] md:h-[56px] w-full">
//             <button
//             onClick={()=>{
//               navigate("/basicinformation")
//             }}
//               type="button"
//               className="hidden md:block md:w-[317px] md:h-[56px] bg-primeBlack text-primeWhite rounded-[8px]"
//             >
//               {Strings.back}
//             </button>
//             <button
//               type="submit"
//               className="md:w-[317px] md:h-[56px] w-full h-[42px] bg-primary text-primeWhite rounded-[8px]"
//             >
//               {Strings.next}
//             </button>
//           </div>
//         </form>
//       </div>
//       {/* <Modal
//        isVisible={isModalVisible}
//        onClose={() => setIsModalVisible(false)}
//      /> */}
//     </div>
//   );
// };

// export default Acadamic;

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import useMasterList from "../../utils/useMasterList";
import { setUserFormData } from "../../slices/authenticatedSlice";


import { baseApi } from "../../api/baseApi";
import { endPoints } from "../../api/endPoints";
import { Strings } from "../../Strings/Strings";


const Acadamic = () => {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [isUniversityDropdownOpen, setUniversityDropdownOpen] = useState(false);
  const [signedUniversity, setSignedUniversity] = useState(null);
  const [isGraduationDropdownOpen, setGraduationDropdownOpen] = useState(false);
  const [isRoleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [majorOpen, setMajorOpen] = useState(false);
  const [universityOpen, setUniversityOpen] = useState(false); // University dropdown visibility
  const [showOtherUniversityInput, setShowOtherUniversityInput] =
    useState(false); // Show input for 'other' university
  const [universitySearch, setUniversitySearch] = useState("");
  const [majorSearch, setMajorSearch] = useState("");
  const [masterList, setMasterList] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


  const getUserData = useSelector((store) => store.authenticated.storeUserData);
  console.log(masterList, "hareee");


  const universities =
    masterList !== null && masterList.responseObject.universityMasterList;


  const majorMasterList =
    masterList !== null && masterList.responseObject.majorMasterList;


  // console.log(majorMasterList,"hareee")


  const getUserTypeData = JSON.parse(localStorage.getItem("saveFormData"));
  console.log("getUserTypeData", getUserTypeData.signUpAs);
  const role = localStorage.getItem("userType");
  console.log("acedemic info", getUserData);


  useEffect(() => {
    const universityId = getUserData.universityId;
    const fetchMasters = async () => {
      const data = await fetch(baseApi + endPoints.masterApi);
      const res = await data.json();
      const masterList = res.responseObject.universityMasterList;
      const findUniversityId = masterList.find(
        (each) => each.universityId === universityId
      );
      setSignedUniversity(findUniversityId.universityName);
      setMasterList(res);
      const getUserTypeData = JSON.parse(localStorage.getItem("saveFormData"));
      generateYears(getUserTypeData.signUpAs);
    };
    fetchMasters();
  }, []);
  // const getUserData = useSelector((store) => store.authenticated.basicFormData);


  const navigate = useNavigate();
  const dispatch = useDispatch();


  const graduationYears = ["2024", "2025", "2026", "2027", "2028"];
  const roles = ["Student", "Alumni"];
  const userProfile = JSON.parse(localStorage.getItem("userProfile"));
  const formik = useFormik({
    initialValues: {
      //university: getUserData.universityName || userProfile.university,
      university:
        getUserData.universityName === 48
          ? "Other"
          : getUserData.universityName,
      otherUniversity: getUserData.otherUniversityName,
      graduationYear:
        getUserData.graduationYear || userProfile.graduationYear || null,
      studyField: getUserData.majorName || userProfile.major || null,
      userType: role || "",
      //  ...userProfile
    },
    validationSchema: Yup.object({
      // university: Yup.string(),
      // .test(
      //   "validate-other-university",
      //   "Enter Your University ",
      //   function (value) {
      //     const { otherUniversity } = this.parent;
      //     if (value === "Others" && !otherUniversity) {
      //       return false;
      //     }
      //     return true;
      //   }
      // ),
      // otherUniversity: Yup.string(),
      graduationYear: Yup.string().required("Please select a graduation year"),
      studyField: Yup.string().max(50, "Must be 50 characters or less"),
      userType: Yup.string().required("Please select a role"),
    }),
    onSubmit: (values) => {
      const currentYear = new Date().getFullYear();


      if (values.userType === "Student") {
        const minYear = currentYear ;
        if (
          values.graduationYear < minYear ||
          values.graduationYear > currentYear+5
        ) {
          alert(
            `Students can only select graduation years from ${minYear} to ${currentYear+5}.`
          );
          return;
        }
      } else if (values.userType === "Alumni") {
        if (
          values.graduationYear < 1935 ||
          values.graduationYear > currentYear
        ) {
          alert(
            `Alumni can only select graduation years from 1935 to ${currentYear}.`
          );
          return;
        }
      }


      const selectedUniversity = universities.find(
        (uni) => uni.universityName === values.university
      );
      const selectedMajor = majorMasterList.find(
        (uni) => uni.nameOfMajor === values.studyField
      );
      // console.log(selectedUniversity,selectedMajor,majorMasterList," Vinayaka chavithi")
      console.log("userProfileAcademic", userProfile);


      const updateProfile = {
        ...userProfile,
        signUpAs: values.userType, // if backend team updated to change role field, then remove comments
        universityId: getUserData.universityId, //selectedUniversity.universityId || null , // if this field is added
        //universityName:values.university //(uncomment this if universityid is added in api)


        universityName:
          userProfile.universityName === "Other"
            ? 48
            : getUserData.universityId, //selectedUniversity.universityId,
        otherUniversityName: getUserData.otherUniversityName,
        graduationYear: values.graduationYear,
        //major: values.studyField, //if backend send this  remove comment
        major: selectedMajor.id,
      };
      console.log("userProfile", updateProfile, userProfile);
      localStorage.setItem("userProfile", JSON.stringify(updateProfile));
      dispatch(setUserFormData(updateProfile));


      navigate("/preference");
      // setIsModalVisible(true);
    },
  });
  const toggleUniversityDropdown = () => setUniversityOpen(!universityOpen);
  const toggleMajorDropdown = () => setMajorOpen(!majorOpen);


  const [userYears, setUserYears] = useState([]);
  const [selectedUserType, setSelectedUserType] = useState(null);
  console.log(selectedUserType, "selectedUserType");


  const generateYears = (userType) => {
    const currentYear = new Date().getFullYear();
    let years = [];


    if (userType === "Alumni") {
   
      years = Array.from(
        { length: currentYear - 1935 + 1 },
        (_, i) => 1935 + i
      );
    } else if (userType === "Student") {
      years = Array.from({ length: 5 }, (_, i) => currentYear + i);
    }
    setUserYears(years);
    return years;
  };


  const handleSelect = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
    setSelectedUserType(value);
    generateYears(value);
    setUniversityDropdownOpen(false);
    setRoleDropdownOpen(false);
    setSearchTerm("");


    setGraduationDropdownOpen(!isGraduationDropdownOpen);
  };


  const handleUniversitySelect = (value) => {
    formik.setFieldValue("university", value);
    setUniversityOpen(false);
    setMajorOpen(false);
    setUniversitySearch("");


    if (value === "Other") {
      setShowOtherUniversityInput(true);
    } else {
      setShowOtherUniversityInput(false);
      setSignedUniversity(null);
    }
  };


  const handleMajorSelect = (value) => {
    formik.setFieldValue("studyField", value);
    setUniversityOpen(false);
    setMajorOpen(false);
    setMajorSearch("");
  };


  const handleUniversitySearch = (e) => {
    setUniversitySearch(e.target.value);
  };


  const handleMajorSearch = (e) => {
    setMajorSearch(e.target.value);
  };


  return (
    <div
      onClick={() => {
        if (
          universityOpen ||
          majorOpen ||
          isGraduationDropdownOpen ||
          isRoleDropdownOpen
        ) {
          setUniversityOpen(false);
          setMajorOpen(false);
          setGraduationDropdownOpen(false);
          setRoleDropdownOpen(false);
        }
      }}
      className="flex items-start justify-center bg-gray-100 px-5 scrollbar-hide overflow-scroll h-[100vh]  w-full text-basicInfoLabelColor"
    >
      <div className="relative top-10 sm:top-16 flex flex-col items-center gap-8 w-full max-w-4xl p-4 md:p-6 lg:p-8 mt-[30px]">
        <div className="min-w-full max-w-full md:h-[40px] arrow flex flex-col items-center gap-[9px] mb-[30px]">
          <div className="flex items-center justify-center gap-4 mt-[-5px] bg-white w-70 h-12 rounded-full shadow-md">
            <h1 className="text-profileSetUpHeading text-lg p-3">
              {Strings.academic_information}
            </h1>
          </div>
          {/* <p className="text-secondary md:w-[518px] w-[322px] text-center">
            {Strings.academic_information}
          </p> */}
        </div>


        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-[36px] items-center md:w-[648px] w-[313px]"
        >
          {/* University Dropdown */}


          <div className="flex flex-col items-start md:w-full">
            <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
              <p className="text-primary">*</p>
              <label className="text-h5 text-profileSetUpHeading">
                {Strings.university_name}
              </label>
            </div>
            <div className="relative w-[315px] md:w-full text-accent z-10">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  toggleUniversityDropdown();
                }}
                className="px-4 py-2 border h-[48px] border-inputBorder bg-white flex items-center justify-between rounded-[8px] cursor-pointer"
              >
                {formik.values.university ||
                  signedUniversity ||
                  "Select your University"}
                <IoIosArrowDown />
                {/* {universityOpen ? <IoIosArrowUp /> : <IoIosArrowDown />} */}
              </div>


              {/* {universityOpen && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute w-full mt-1 bg-white border border-inputBorder rounded-[8px] shadow-lg max-h-[150px] overflow-auto"
                >
                  <input
                    type="text"
                    placeholder="Search your University"
                    value={universitySearch}
                    onChange={handleUniversitySearch}
                    className="w-full px-4 py-2 border-b border-inputBorder focus:outline-none"
                  />
                  {universities
                    .filter((uni) =>
                      uni.universityName
                        .toLowerCase()
                        .includes(universitySearch.toLowerCase())
                    )
                    .map((each) => (
                      <div
                        key={each.universityId}
                        onClick={() =>
                          handleUniversitySelect(each.universityName)
                        }
                        className="px-4 py-2 cursor-pointer hover:bg-primary m-1 rounded-lg hover:text-white"
                      >
                        {each.universityName}
                      </div>
                    ))}
                </div>
              )} */}
            </div>
            {formik.touched.university && formik.errors.university && (
              <div className="text-primary text-sm mt-1">
                {formik.errors.university}
              </div>
            )}
          </div>


          {/* Conditionally Render Input for "Other" University */}
          {(signedUniversity === "Other" || showOtherUniversityInput) && (
            <div className="flex flex-col items-start w-full">
              <input
                disabled
                type="text"
                value={getUserData.otherUniversityName || ""}
                name="otherUniversity"
                placeholder="Enter Your University"
                className={`md:w-full  h-[48px] w-full block px-4 py-2 border rounded-[8px] ${
                  formik.touched.otherUniversity &&
                  formik.errors.otherUniversity
                    ? "border-red-500"
                    : "border-inputBorder"
                }`}
                {...formik.getFieldProps("otherUniversity")}
              />
            </div>
          )}
       


          {/* Field of Study */}
          {/* <div className="flex flex-col items-start w-full">
           <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
         
             <label className="text-h5 text-profileSetUpHeading">
               Major/Field of Study{" "}
               <span className="text-secondary">(optional)</span>
             </label>
           </div>
           <input
             type="text"
             name="studyField"
             placeholder="Enter your field of study"
             className={`w-full px-[12px] py-[8px] border rounded-[6px] outline-none ${
               formik.touched.studyField && formik.errors.studyField
                 ? "border-primary"
                 : "border-inputBorder"
             }`}
             value={formik.values.studyField}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
           />
           {formik.touched.studyField && formik.errors.studyField && (
             <div className="text-primary text-sm mt-1">
               {formik.errors.studyField}
             </div>
           )}
         </div> */}


          <div className="flex flex-col items-start md:w-full">
            <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
              <label className="text-h5 text-profileSetUpHeading">
                {Strings.major} {Strings.Optional}
              </label>
            </div>
            <div className="relative w-[315px] md:w-full text-accent z-10">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMajorDropdown();
                }}
                className="px-4 py-2 border h-[48px] border-inputBorder bg-white flex items-center justify-between rounded-[8px] cursor-pointer"
              >
                {formik.values.studyField || "Major/ Field of Study"}
                {majorOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>


              {majorOpen && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute w-full mt-1 bg-white border border-inputBorder rounded-[8px] shadow-lg max-h-[150px] overflow-auto"
                >
                  <input
                    type="text"
                    placeholder="Search your University"
                    value={majorSearch}
                    onChange={handleMajorSearch}
                    className="w-full px-4 py-2 border-b border-inputBorder focus:outline-none"
                  />
                  {majorMasterList
                    .filter((uni) =>
                      uni.nameOfMajor
                        .toLowerCase()
                        .includes(majorSearch.toLowerCase())
                    )
                    .map((each) => (
                      <div
                        key={each.universityId}
                        onClick={() => handleMajorSelect(each.nameOfMajor)}
                        className="px-4 py-2 cursor-pointer hover:bg-primary m-1 rounded-lg hover:text-white"
                      >
                        {each.nameOfMajor}
                      </div>
                    ))}
                </div>
              )}
            </div>
            {formik.touched.studyField && formik.errors.studyField && (
              <div className="text-primary text-sm mt-1">
                {formik.errors.studyField}
              </div>
            )}
          </div>
          {/* User Type */}
          <div className="relative  md:block  flex flex-col items-start w-full">
            <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
              <p className="text-primary">*</p>
              <label className="text-h5 text-profileSetUpHeading">
                {Strings.user_role}
              </label>
            </div>
            <div
              onClick={() => {
                setRoleDropdownOpen(!isRoleDropdownOpen); //👉 if backend team updated to change role field, then remove comments
                setUniversityDropdownOpen(false);
                setGraduationDropdownOpen(false);
              }}
              className={`flex items-center justify-between w-full px-[12px] py-[8px] bg-white border rounded-[6px] cursor-pointer ${
                formik.touched.userType && formik.errors.userType
                  ? "border-primary"
                  : "border-inputBorder"
              }`}
            >
              {" "}
           <span className=" text-accent">{formik.values.userType || ""}</span>   
              {isRoleDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
            </div>{" "}
            {isRoleDropdownOpen && (
              <div className="absolute w-full mt-1 bg-white border rounded-[6px] shadow-lg z-10">
                {roles.map((role, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect("userType", role)}
                    className="px-4 py-2 text-accent cursor-pointer hover:bg-primary hover:text-white"
                  >
                    {role}
                    {/* {(getUserData.signUpAs===role) && role } */}
                  </div>
                ))}
              </div>
            )}
            {formik.touched.userType && formik.errors.userType && (
              <div className="text-primary text-sm mt-1">
                {" "}
                {formik.errors.userType}{" "}
              </div>
            )}{" "}
          </div>

   {/* Graduation Year */}
   <div className="flex flex-col items-start w-full">
            <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
              <p className="text-primary">*</p>
              <label className="text-h5 text-profileSetUpHeading">
                {Strings.graduation_year}
              </label>
            </div>
            <div className="relative w-full text-accent">
              <div
                onClick={() => {
                  if (userYears.length === 0) {
                    alert("Please Select Year");
                  } else {
                    setGraduationDropdownOpen(!isGraduationDropdownOpen);
                  }
                  console.log(userYears, "userYears");
                  setUniversityDropdownOpen(false);
                  setRoleDropdownOpen(false);
                }}
                className={`flex items-center justify-between px-[12px] py-[8px]  bg-white border rounded-[6px] cursor-pointer ${
                  formik.touched.graduationYear && formik.errors.graduationYear
                    ? "border-primary"
                    : "border-inputBorder"
                }`}
              >
                {formik.values.graduationYear || "Select Year"}
                {isGraduationDropdownOpen ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </div>
              {isGraduationDropdownOpen && (
                <div className="absolute w-full mt-1 bg-white border rounded-[6px] shadow-lg z-20 h-[200px] overflow-scroll scrollbar-hide">
                  {userYears.map((year, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelect("graduationYear", year)}
                      className="px-4 py-3 text-accent cursor-pointer hover:bg-primary hover:text-white"
                    >
                    <span className=" text-accent"> {year}</span> 
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center gap-[14px] md:w-[648px] md:h-[56px] w-full">
            <button
              onClick={() => {
                navigate("/basicinformation");
              }}
              type="button"
              className="hidden md:block md:w-[317px] md:h-[56px] bg-primeBlack text-primeWhite rounded-[8px]"
            >
              {Strings.back}
            </button>
            <button
              type="submit"
              className="md:w-[317px] md:h-[56px] w-full h-[42px] bg-primary text-primeWhite rounded-[8px]"
            >
              {Strings.next}
            </button>
          </div>
        </form>
      </div>
      {/* <Modal
       isVisible={isModalVisible}
       onClose={() => setIsModalVisible(false)}
     /> */}
    </div>
  );
};


export default Acadamic;






