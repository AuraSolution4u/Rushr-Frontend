// import { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import uploadImage from "../../assets/svgIcons/uploadImage.svg";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setUserData, setUserFormData } from "../../slices/authenticatedSlice";
// import { uploadFile } from "../../features/users/uploadFile";
// import LoadingSpinner from "../../utils/loading/LoadingSpinner";
// import handleScrollToTop from "../../utils/SmoothScroll";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { TextField } from "@mui/material";
// // import "react-datepicker/dist/react-datepicker.css";
// import dayjs from "dayjs";
// import { Strings } from "../../Strings/Strings";

// const BasicInfo = () => {
//   const getUserData = useSelector((store) => store.authenticated.storeUserData);
 
//   const [loading, setLoading] = useState(false);
//   const [text, setText] = useState("");
//   const [file, setFile] = useState(null);
//   const [tags, setTags] = useState([]);
//   const [preview, setPreview] = useState(getUserData.profieLink || null);
//   const [inputValue, setInputValue] = useState("");
//   const maxLength = 1000;
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const userIdValue = localStorage.getItem("userIdName");
//   const currentYear = dayjs().year();
//   const validationSchema = Yup.object({
//     firstName: Yup.string().required("First Name is required"),
//     lastName: Yup.string().required("Last Name is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required")
//       .matches(/.*@.*\.(com|edu)$/, "Only .edu emails are allowed"),
//     phone: Yup.string()
//       .matches(/^\d{10}$/, "Phone number must be 10 digits")
//       .nullable(true)
//       .test(
//         "is-valid-or-empty",
//         "Phone number must be 10 digits or left empty",
//         (value) => !value || /^\d{10}$/.test(value)
//       ),
//       dob: Yup.date()
//       .nullable()
//       .typeError("Invalid date format")
//       .min(new Date(1935, 0, 1), "Date of birth must be from 1935 onwards")
//       .max(new Date(currentYear, 11, 31), `Date of birth cannot be after ${currentYear}`)
//       .required("Date of birth is required"),
//     bio: Yup.string()
//       .max(maxLength, `Bio must not exceed ${maxLength} characters`)
//       .required("Bio is required"),
//     tags: Yup.array()
//       .of(Yup.string().max(20, "Tag must not exceed 20 characters"))
//       .optional(),
//   });

//   const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
//   const extractFileName = (url) => {
//     const path = url.split("/").pop(); 
//     const fileName = path.split("?")[0]; 
//     console.log("filenameextract",fileName)
//     return fileName;
//   };

//   const formik = useFormik({
//     initialValues: {
//       firstName: getUserData.firstName,
//       lastName: getUserData.lastName,
//       email: getUserData.emailId,
//       phone: getUserData.mobileNumber ,
//       dob: getUserData.dateOfBirth || {}, 
//       bio: getUserData.bio,
//       tags: getUserData.tags,
//       ...userProfile,
//     },
//     validationSchema,

//     onSubmit: async (values) => {

 
      
//       if (!file && !getUserData.profieLink) {
//         alert("Please select a file");
//         return;
//       }
//       const updateProfile = {
//         emailId: values.email,
//         profilePicDir: "profile",
//         profilePicName: file ? file.name : extractFileName(getUserData.profieLink), 
//         firstName: values.firstName,
//         lastName: values.lastName,
//         universityName: getUserData.universityName,
//         otherUniversityName: getUserData.otherUniversityName,
//         mobileNumber: values.phone  ,
//         bio: values.bio,
//         tags: values.tags,
//         graduationYear: getUserData.graduationYear || null,
//         major: getUserData.majorId || null,
//         notificationPreference: getUserData.notificationPreference || null,
//         privacySettings: getUserData.privacySettings || null,
//         dateOfBirth: values.dob,
//       };
//     console.log(updateProfile,"updatedprofile")
//       handleScrollToTop();
//       setLoading(true);
//       try {
//         if (file) {
//           console.log(file,"basicinfo")
//           const result = await uploadFile(file, "profile", Number(userIdValue));
//           setPreview(result.data.responseObject.fileName);
//           localStorage.setItem(
//             "userProfile",
//             JSON.stringify({
//               ...updateProfile,
//               profilePicName: result.data.responseObject.fileName,
//             })
//           );
//           dispatch(
//             setUserFormData({
//               ...updateProfile,
//               profilePicName: result.data.responseObject.fileName,
//             })
//           );
//           // setLoading(false)
//         } else {
//           // setLoading(false)
//           localStorage.setItem("userProfile", JSON.stringify(updateProfile));
//           dispatch(setUserFormData(updateProfile));
//         }

//         setLoading(false);
//         handleScrollToTop();
//         navigate("/academicinfo");
//         console.log("Profile updated successfully.");
//       } catch (error) {
//         console.error("Failed to upload file:", error.message);
//       }

//       console.log("Form values:", values);
//     },
//   });

  
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFile(file);

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };

//       reader.readAsDataURL(file);
//     }
//   };
//   const handleDateChange = (newValue) => {
//     // Format the selected date as YYYY-MM-DD (without the time)
//     const formattedDate = newValue ? newValue.format('YYYY-MM-DD') : '';
//     formik.setFieldValue('dob', formattedDate); 
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleKeyDown = (e) => {
//     if (
//       e.key === "Enter" &&
//       inputValue.trim() &&
//       formik.values.tags.length < 10
//     ) {
//       e.preventDefault();
//       const newTag = inputValue.trim();
//       if (!formik.values.tags.includes(newTag)) {
//         formik.setFieldValue("tags", [...formik.values.tags, newTag]);
//       }
//       setInputValue(""); 
//     }
//   };
//   const handleRemoveTag = (tagToRemove) => {
//     formik.setFieldValue(
//       "tags",
//       formik.values.tags.filter((tag) => tag !== tagToRemove)
//     );
//   };

//   const handleChange = (e) => {
//     if (e.target.value.length <= maxLength) {
//       setText(e.target.value);
//     }
//   };

  
//       return (
//         <div className="flex items-start justify-center bg-gray-100 px-5 min-h-screen w-full text-basicInfoLabelColor scrollbar-hide overflow-scroll h-[100vh]">
//           <form
//             onSubmit={formik.handleSubmit}
//             className={`relative top-[90px] flex flex-col items-center gap-12 w-full max-w-3xl p-5 ${loading && "opacity-10"}`}
//           >
//             {/* Top Heading */}
           
//             <div className="min-w-full max-w-full md:h-[40px] arrow flex flex-col items-center gap-[9px] mb-[30px] ">
//             <div className="w-full flex items-center justify-center ">
//               <div className="flex items-center justify-center gap-2 mt-[-5px] bg-white w-70 h-12 rounded-full shadow-md">
//                 <h1 className="text-profileSetUpHeading text-lg p-3  align-middle ">
//                   {Strings.basic_information}
//                 </h1>
//               </div>
//             </div>
//             </div>

//             {/* Form */}
//             <div className="flex flex-col items-center gap-9 w-full max-w-xl">
//               {/* Image Upload */}
//               <div className="flex flex-col items-center gap-2">
//                 <div className="w-20 h-20 md:w-36 md:h-36 flex justify-center items-center border border-red-300 rounded-full bg-white relative">
//                   <input
//                     type="file"
//                     accept="image/*"
//                     id="uploadImage"
//                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                     onChange={handleImageChange}
//                   />
//                   <label htmlFor="uploadImage" className="flex justify-center items-center w-full h-full">
//                     {preview ? (
//                       <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-full" />
//                     ) : (
//                       <img src={uploadImage} alt="Upload" className="w-9 h-9" />
//                     )}
//                   </label>
//                 </div>
//                 <p className="text-sm text-gray-600">{Strings.upload_photo}</p>
//                 <p className="text-xs text-gray-500 text-center">{Strings.profile_picture_text}</p>
//               </div>
    
//               {/* Name Fields */}
//               <div className="flex flex-col md:flex-row gap-5 w-full">
//                 <div className="flex flex-col w-full">
                  
//                   <label htmlFor="firstName" className="text-gray-700"><span className="text-primary text-sm m-1">*</span>{Strings.first_name}</label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     className="border rounded p-2 w-full"
//                     {...formik.getFieldProps("firstName")}
//                   />
//                 </div>
//                 <div className="flex flex-col w-full">
//                   <label htmlFor="lastName" className="text-gray-700"><span className="text-primary text-sm m-1">*</span>{Strings.last_name}</label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     className="border rounded p-2 w-full"
//                     {...formik.getFieldProps("lastName")}
//                   />
//                 </div>
//               </div>
    
//               {/* Email and Phone */}
//               <div className="flex flex-col md:flex-row gap-5 w-full">
//                 <div className="flex flex-col w-full">
//                   <label htmlFor="email" className="text-gray-700"><span className="text-primary text-sm m-1">*</span>{Strings.email}</label>
//                   <input
//                     type="text"
//                     id="email"
//                     className="border rounded p-2 w-full bg-gray-200"
//                     disabled
//                     {...formik.getFieldProps("email")}
//                   />
//                 </div>
//                 <div className="flex flex-col w-full">
//                   <label htmlFor="phone" className="text-gray-700">{Strings.phone} {Strings.optional}</label>
//                   <input
//                     type="text"
//                     id="phone"
//                     className="border rounded p-2 w-full"
//                     {...formik.getFieldProps("phone")}
//                   />
//                 </div>
//               </div>
    
//               {/* Date of Birth */}
//               <div className="flex flex-col w-full">
//                 <label htmlFor="dob" className="text-gray-700"><span className="text-primary text-sm m-1">*</span>{Strings.date_of_birth}</label>
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <DatePicker
//                     // label="Select Date"
//                     value={formik.values.dob ? dayjs(formik.values.dob) : null}
//                     onChange={handleDateChange}
//                     renderInput={(params) => <TextField {...params} fullWidth />}
//                   />
//                 </LocalizationProvider>
//               </div>
    
//               {/* Bio */}
//               <div className="flex flex-col w-full">
//                 <label htmlFor="bio" className="text-gray-700">{Strings.bio}</label>
//                 <textarea
//                   className="border rounded p-2 w-full h-24"
//                   {...formik.getFieldProps("bio")}
//                   placeholder="Tell us a little about yourself"
//                 />
//               </div>
    
//               {/* Tags */}
//               <div className="flex flex-col w-full">
//                 <label htmlFor="tags" className="text-gray-700">{Strings.tags} {Strings.optional}</label>
//                 <div className="flex flex-wrap gap-2 border rounded p-2 bg-white">
//                   {formik.values.tags.map((tag, index) => (
//                     <div key={index} className="flex items-center bg-gray-200 px-3 py-1 rounded">
//                       <span>{tag}</span>
//                       <button type="button" className="ml-2  text-secondary" onClick={() => handleRemoveTag(tag)}>X</button>
//                     </div>
//                   ))}
//                   <input
//                     type="text"
//                     value={inputValue}
//                     onChange={handleInputChange}
//                     onKeyDown={handleKeyDown}
//                     className="flex-1 border-none bg-transparent focus:outline-none"
//                     placeholder="Type and press Enter"
//                   />
//                 </div>
//               </div>
    
//               {/* Buttons */}
//               <div className="flex flex-col md:flex-row gap-4 w-full">
//                 <button onClick={()=>{
//                   navigate("/profilesetup")
//                 }} type="button" className="w-full md:w-1/2 bg-black text-white rounded p-3">{Strings.back}</button>
//                 <button type="submit" className="w-full md:w-1/2 bg-primary text-white rounded p-3">{Strings.next}</button>
//               </div>
//             </div>
//           </form>
//           {loading && <LoadingSpinner />}
//         </div>
        
//       );
//     };
    
//     export default BasicInfo;






import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import uploadImage from "../../assets/svgIcons/uploadImage.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, setUserFormData } from "../../slices/authenticatedSlice";
import { uploadFile } from "../../features/users/uploadFile";
import LoadingSpinner from "../../utils/loading/LoadingSpinner";
import handleScrollToTop from "../../utils/SmoothScroll";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
// import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { Strings } from "../../Strings/Strings";


const BasicInfo = () => {
  const getUserData = useSelector((store) => store.authenticated.storeUserData);
  const profieLink= JSON.parse(localStorage.getItem("saveFormData"))

  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [preview, setPreview] = useState(getUserData.profieLink || profieLink );
  const [inputValue, setInputValue] = useState("");
  const maxLength = 1000;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  const checkUserId = JSON.parse(localStorage.getItem("saveFormData"));
  const userIdValue = checkUserId.userId;


  // const checkUserDetails = JSON.parse(localStorage.getItem("checkUserDetails"));
  // console.log(checkUserDetails, "checkUserDetails");
  const currentYear = dayjs().year();
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
      .matches(/.*@.*\.(com|edu)$/, "Only .edu emails are allowed"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .nullable(true)
      .test(
        "is-valid-or-empty",
        "Phone number must be 10 digits or left empty",
        (value) => !value || /^\d{10}$/.test(value)
      ),
    dob: Yup.date()
      .nullable()
      .typeError("Invalid date format")
      .min(new Date(1935, 0, 1), "Date of birth must be from 1935 onwards")
      .max(
        new Date(currentYear, 11, 31),
        `Date of birth cannot be after ${currentYear}`
      )
      .required("Date of birth is required"),
    bio: Yup.string()
      .max(maxLength, `Bio must not exceed ${maxLength} characters`)
      .required("Bio is required"),
    tags: Yup.array()
      .of(Yup.string().max(20, "Tag must not exceed 20 characters"))
      .optional(),
  });


  const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
  const extractFileName = (url) => {
    const path = url.split("/").pop();
    const fileName = path.split("?")[0];
    console.log("filenameextract", fileName);
    return fileName;
  };


  const formik = useFormik({
    initialValues: {
      firstName: getUserData.firstName,
      lastName: getUserData.lastName,
      email: getUserData.emailId,
      phone: getUserData.mobileNumber,
      dob: getUserData.dateOfBirth || {},
      bio: getUserData.bio,
      tags: getUserData.tags,
      ...userProfile,
    },
    validationSchema,


    onSubmit: async (values) => {
      if (!file && !getUserData.profieLink  && profieLink!==null) {
        alert("Please select a file");
        return;
      }
      const updateProfile = {
        emailId: values.email,
        profilePicDir: "profile",
        profilePicName: file
          ? file.name
          : extractFileName(getUserData.profieLink),
        firstName: values.firstName,
        lastName: values.lastName,
        universityName: getUserData.universityName,
        otherUniversityName: getUserData.otherUniversityName,
        mobileNumber: values.phone,
        bio: values.bio,
        tags: values.tags,
        graduationYear: getUserData.graduationYear || null,
        major: getUserData.majorId || null,
        notificationPreference: getUserData.notificationPreference || null,
        privacySettings: getUserData.privacySettings || null,
        dateOfBirth: values.dob,
      };
      console.log(updateProfile, "updatedprofile");
      // localStorage.setItem("checkUserDetails", JSON.stringify(updateProfile));
      console.log(file, "file");
      handleScrollToTop();
      setLoading(true);
      try {
        if (file) {
          console.log(file, "basicinfo");
          const result = await uploadFile(file, "profile", Number(userIdValue));
          // setPreview(result.data.responseObject.fileName);
          localStorage.setItem(
            "userProfile",
            JSON.stringify({
              ...updateProfile,
              profilePicName: result.data.responseObject.fileName,
            })
          );
          dispatch(
            setUserFormData({
              ...updateProfile,
              profilePicName: result.data.responseObject.fileName,
            })
          );
          // setLoading(false)
        } else {
          // setLoading(false)
          localStorage.setItem("userProfile", JSON.stringify(updateProfile));
          dispatch(setUserFormData(updateProfile));
        }


        setLoading(false);
        handleScrollToTop();
        navigate("/academicinfo");
        console.log("Profile updated successfully.");
      } catch (error) {
        console.error("Failed to upload file:", error.message);
      }


      console.log("Form values:", values);
    },
  });


  useEffect(() => {
    const storedImage = localStorage.getItem("checkUserDetails");
    
    setPreview(storedImage); // Set image in state
    
    // if (!file && getUserData.profieLink) {
    //   if (storedImage) {
    //   }
    // }
  }, []);


  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };


  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setFile(file);
    const base64 = await convertToBase64(file);
    localStorage.setItem("checkUserDetails", base64); // Store in local storage


    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };


      reader.readAsDataURL(file);
    }
  };
  const handleDateChange = (newValue) => {
    // Format the selected date as YYYY-MM-DD (without the time)
    const formattedDate = newValue ? newValue.format("YYYY-MM-DD") : "";
    formik.setFieldValue("dob", formattedDate);
  };


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleKeyDown = (e) => {
    if (
      (e.key === "Enter" || e.key === "Tab")  &&
      inputValue.trim() &&
      formik.values.tags.length < 10
    ) {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (!formik.values.tags.includes(newTag)) {
        formik.setFieldValue("tags", [...formik.values.tags, newTag]);
      }
      setInputValue("");
    }
  };
  const handleRemoveTag = (tagToRemove) => {
    formik.setFieldValue(
      "tags",
      formik.values.tags.filter((tag) => tag !== tagToRemove)
    );
  };


  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };


  return (
    <div className="flex items-start justify-center bg-gray-100 px-5 min-h-screen w-full text-basicInfoLabelColor scrollbar-hide overflow-scroll h-[100vh]">
      <form
        onSubmit={formik.handleSubmit}
        className={`relative top-[90px] flex flex-col items-center gap-12 w-full max-w-3xl p-5 ${
          loading && "opacity-10"
        }`}
      >
        {/* Top Heading */}


        <div className="min-w-full max-w-full md:h-[40px] arrow flex flex-col items-center gap-[9px] mb-[30px] ">
          <div className="w-full flex items-center justify-center ">
            <div className="flex items-center justify-center gap-2 mt-[-5px] bg-white w-70 h-12 rounded-full shadow-md">
              <h1 className="text-profileSetUpHeading text-lg p-3  align-middle ">
                {Strings.basic_information}
              </h1>
            </div>
          </div>
        </div>


            {/* Form */}
            <div className="flex flex-col items-center gap-9 w-full max-w-xl">
              {/* Image Upload */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 md:w-36 md:h-36 flex justify-center items-center border border-red-300 rounded-full bg-white relative">
                  <input
                    type="file"
                    accept="image/*"
                    id="uploadImage"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="uploadImage" className="flex justify-center items-center w-full h-full">
                    {preview ? (
                      <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <img src={uploadImage} alt="Upload" className="w-9 h-9" />
                    )}
                  </label>
                </div>
                <p className="text-sm text-gray-600">{Strings.upload_photo}</p>
                <p className="text-xs text-gray-500 text-center">{Strings.profile_picture_text}</p>
              </div>
    
              {/* Name Fields */}
              <div className="flex flex-col md:flex-row gap-5 w-full">
                <div className="flex flex-col w-full">
                  
                  <label htmlFor="firstName" className="text-gray-700"><span className="text-primary text-sm m-1">*</span>{Strings.first_name}</label>
                  <input
                    type="text"
                    id="firstName"
                    className="border rounded p-2 w-full"
                    {...formik.getFieldProps("firstName")}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="lastName" className="text-gray-700"><span className="text-primary text-sm m-1">*</span>{Strings.last_name}</label>
                  <input
                    type="text"
                    id="lastName"
                    className="border rounded p-2 w-full"
                    {...formik.getFieldProps("lastName")}
                  />
                </div>
              </div>
    
              {/* Email and Phone */}
              <div className="flex flex-col md:flex-row gap-5 w-full">
                <div className="flex flex-col w-full">
                  <label htmlFor="email" className="text-gray-700"><span className="text-primary text-sm m-1">*</span>{Strings.email}</label>
                  <input
                    type="text"
                    id="email"
                    className="border rounded p-2 w-full bg-gray-200"
                    disabled
                    {...formik.getFieldProps("email")}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="phone" className="text-gray-700">{Strings.phone} {Strings.optional}</label>
                  <input
                    type="text"
                    id="phone"
                    className="border rounded p-2 w-full"
                    {...formik.getFieldProps("phone")}
                  />
                </div>
              </div>
    
              {/* Date of Birth */}
              <div className="flex flex-col w-full">
                <label htmlFor="dob" className="text-gray-700"><span className="text-primary text-sm m-1">*</span>{Strings.date_of_birth}</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    // label="Select Date"
                    value={formik.values.dob ? dayjs(formik.values.dob) : null}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </div>
    
              {/* Bio */}
              <div className="flex flex-col w-full">
                <label htmlFor="bio" className="text-gray-700">{Strings.bio}</label>
                <textarea
                  className="border rounded p-2 w-full h-24"
                  {...formik.getFieldProps("bio")}
                  placeholder="Tell us a little about yourself"
                />
              </div>
    
              {/* Tags */}
              <div className="flex flex-col w-full">
                <div className=" flex  gap-2 ">

                <label htmlFor="tags" className="text-gray-700">{Strings.tags} {Strings.optional}</label>
                <span className=" text-secondary text-[12px] mt-[3px]">  Type and Press Enter or Tag to add tags</span>
                </div>
                <div className="flex flex-wrap gap-2 border rounded p-2 bg-white">
                  {formik.values.tags.map((tag, index) => (
                    <div key={index} className="flex items-center bg-gray-200 px-3 py-1 rounded">
                      <span>{tag}</span>
                      <button type="button" className="ml-2  text-secondary" onClick={() => handleRemoveTag(tag)}>X</button>
                    </div>
                  ))}
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="flex-1 border-none bg-transparent focus:outline-none"
                    placeholder="Type and press Enter or Tab"
                  />
                </div>
              </div>
    
              {/* Buttons */}
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <button onClick={() => navigate("/profilesetup")} type="button" className="w-full md:w-1/2 bg-[#282828] text-white rounded-lg p-3">{Strings.back}</button>
                <button type="submit" className="w-full md:w-1/2 bg-primary text-white rounded-lg p-3">{Strings.next}</button>
              </div>
            </div>
          </form>
          {loading && <LoadingSpinner />}
        </div>
        
      );
    };
    
    export default BasicInfo;



