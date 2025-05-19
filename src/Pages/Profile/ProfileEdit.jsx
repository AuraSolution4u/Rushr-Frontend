

// import React from 'react'

// import contactImg from "../../assets/Contact.png";
// import { Strings } from '../../Strings/Strings';
// import { useNavigate } from "react-router-dom";
// import { Edit } from 'lucide-react';
 
// const Profileedit = () => {
//   const navigate = useNavigate();
//   const result = JSON.parse(localStorage.getItem("saveFormData")) || {};
//   const tags = result.tags || [];
 
//   return (
//     <div className='h-full'>
//       {/* Edit Profile Button */}
//       <div className='mt-[70px] ml-[1210px] max-lg:ml-0 max-lg:flex max-lg:justify-center max-md:flex max-md:justify-center max-md:ml- max-sm:mt-[10px] max-sm:ml-[200px] max-md:mt-5 max-md:ml-[100px]'>
//   <div className='mb-[10px] rounded-2xl mt-[100px] bg-white max-lg:w-auto max-md:w-auto align-middle p-2 '>
//     <button onClick={() => navigate("/basicinformation")} type="button" className="flex items-center text-red-600">
//       <Edit color="red" size={16} />
//       <span>{Strings.Edit_Profile}</span>
//     </button>
//   </div>
// </div>
// <div className='h-full flex flex-col lg:flex-row'>
//   {/* Main Profile Section */}
//   <div className='w-full lg:w-auto sm:w-[300px] h-full max-sm:-mt-[10px]'>
//     <div className='h-auto mt-10 rounded-2xl bg-white w-[648px] ml-[250px] pt-[48px] pl-[54px] pb-[48px] pr-[54px]
//       max-lg:w-auto max-lg:mx-4 max-md:mx-auto max-md:p-6 max-sm:p-4 max-sm:mx-5 max-sm:w-[310px]'>
     
//       <div className='text-center'>
//         <img
//           src={result.profieLink}
//           alt="profile"
//           className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full mx-auto'
//         />
//       </div>
 
//       <div className='mt-10 space-y-8'>
//         <div className='flex flex-wrap gap-4 max-md:flex-col'>
//           <div className='w-full sm:w-[313px] max-md:w-full'>
//             <h5 className='text-eyeColor'>{Strings.First_Name}</h5>
//             <h1>{result.firstName}</h1>
//           </div>
//           <div className='w-full sm:w-[313px] max-md:w-full'>
//             <h5 className='text-eyeColor'>{Strings.last_name}</h5>
//             <h1>{result.lastName}</h1>
//           </div>
//         </div>
 
//         <div className='flex flex-wrap gap-4 max-md:flex-col'>
//           <div className='w-full sm:w-[313px] max-md:w-full'>
//             <h5 className='text-eyeColor'>{Strings.email_name}</h5>
//             <h1>{result.emailId}</h1>
//           </div>
//           {result.mobileNumber && (
//             <div className='w-full sm:w-[313px] max-md:w-full'>
//               <h5 className='text-eyeColor'>{Strings.phone_name}</h5>
//               <h1>{result.mobileNumber}</h1>
//             </div>
//           )}
//         </div>
 
//         <div>
//           <h4 className='text-eyeColor'>{Strings.bio_name}</h4>
//           <h6>{result.bio}</h6>
//         </div>
 
//         <div>
//           <h6 className='text-eyeColor'>{Strings.tag_name}</h6>
//           <div className='flex flex-wrap mt-4 gap-2'>
//             {tags.map((each, index) => (
//               <h6 key={index} className='bg-red-200 w-fit h-fit rounded-full p-2 text-red-600'>{each}</h6>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
 
//     {/* Education and Preferences */}
//     <div className='h-auto mt-10 rounded-2xl bg-white w-[648px] ml-[250px] pt-[48px] pl-[54px] pb-[48px] pr-[54px]
//       max-lg:w-auto max-lg:mx-4  max-md:mx-auto  max-md:p-6 max-sm:p-4 max-sm:mx-5 max-sm:w-[310px]'>
//       <div className='space-y-8'>
//         <div className='flex flex-wrap gap-4 max-md:flex-col'>
//           <div className='w-[313px] max-md:w-full'>
//             <h5 className='text-eyeColor'>{Strings.university_name}</h5>
//             <h1>{result.universityName || result.otherUniversityName}</h1>
//           </div>
//           <div className='max-md:w-full'>
//             <h5 className='text-eyeColor'>{Strings.graduation_year}</h5>
//             <h1>{result.graduationYear}</h1>
//           </div>
//         </div>
 
//         <div className='flex flex-wrap gap-4 max-md:flex-col'>
//           <div className='w-[313px] max-md:w-full'>
//             <h5 className='text-eyeColor'>{Strings.MajorField_of_Study}</h5>
//             <h1>{result.majorName}</h1>
//           </div>
//           <div className='max-md:w-full'>
//             <h5 className='text-eyeColor'>{Strings.user_role}</h5>
//             <h1>{result.signUpAs}</h1>
//           </div>
//         </div>
//       </div>
//     </div>
// <div className='h-auto mt-10 rounded-2xl bg-white w-[648px] ml-[250px] pt-[48px] pl-[54px] pb-[48px] pr-[54px]
//       max-lg:w-auto max-lg:mx-4   max-md:mx-auto max-md:p-6 max-sm:p-4 max-sm:mx-5 max-sm:w-[310px] mb-10'>
//       <div className='space-y-8'>
//         <div className='flex flex-wrap gap-4 max-md:flex-col'>
//           <div className='w-[313px] max-md:w-full'>
//             <h5 className='text-eyeColor'>{Strings.notification_preferences}</h5>
//             <h1>{result.notificationPreference}</h1>
//           </div>
//           <div className='max-md:w-full'>
//             <h5 className='text-eyeColor'>{Strings.privacy_settings}</h5>
//             <h1>{result.privacySettings}</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// {/* Sidebar Section  */}        
// <div className='w-full lg:w-auto h-full lg:mt-0 lg:ml-10 max-md:mx-auto max-md:mt-6 max-sm:mt-[30px]'>
//   <div className='h-auto rounded-2xl bg-white w-[278px]  mx-auto lg:mx-0 p-4
//      max-md:p-5 max-sm:w-[310px]'>
   
//     <div>
//       <h5 className='text-eyeColor'>{Strings.Joined_name}</h5>
//       <h1>{Strings.joined_date}</h1>
//     </div>
 
//     <div className='flex justify-between items-center mt-4'>
//       <div>
//         <h5 className='text-eyeColor'>{Strings.Chapter_Info}</h5>
//         <h1>{Strings.Pi_Kappa_Psy}</h1>
//       </div>
//       <button className='w-8 h-8 bg-red-600 rounded-full text-white'>{`>`}</button>
//     </div>
 
//     <div className='flex justify-between items-center mt-4'>
//       <div>
//         <h5 className='text-eyeColor'>{Strings.Followers}</h5>
//         <h1>{Strings.Followers_number}</h1>
//       </div>
//       <button className='w-8 h-8 bg-red-600 rounded-full text-white'>{`>`}</button>
//     </div>
 
//     <div className='flex justify-between items-center mt-4'>
//       <div>
//         <h5 className='text-eyeColor'>{Strings.Connections}</h5>
//         <h1>{Strings.Connections_number}</h1>
//       </div>
//       <button className='w-8 h-8 bg-red-600 rounded-full text-white'>{`>`}</button>
//     </div>
 
//     <div className='mt-6'>
//       <button className='w-full h-10 bg-red-600 rounded text-white'>{Strings.massage_button}</button>
//       <button className='w-full h-10 bg-gray-400 rounded mt-2 text-white'>{Strings.contact_button}</button>
//     </div>
//   </div>
// </div>
// </div>
// </div>
 
//   );
// };
 
// export default Profileedit;


import React from 'react'
import contactImg from "../../assets/Contact.png";
import { Strings } from '../../Strings/Strings';
import { useNavigate } from "react-router-dom";
import { Edit } from 'lucide-react';
 
const Profileedit = () => {
  const navigate = useNavigate();
  const result = JSON.parse(localStorage.getItem("saveFormData")) || {};
  const tags = result.tags || [];
 
  return (
    <div className='h-full w-full'>
 
      <div className='h-full flex flex-col lg:flex-row mt-[100px] w-full'>
       
        {/* Main Profile Section */}
        <div className='md:order-0 order-1 sm:order-1 lg:w-auto w-full h-full max-sm:-mt-[10px]'>
 
          {/* Profile Card */}
          <div className='h-auto mt-10 rounded-2xl bg-white w-[648px] ml-[250px] pt-[48px] pl-[54px] pb-[48px] pr-[54px]
            max-lg:w-auto max-lg:mx-4 max-md:mx-auto max-md:w-[500px] max-md:max-w-[90%] max-md:p-6 max-sm:p-4 max-sm:mx-5 max-sm:w-[360px]'>
           
            <div className='text-center'>
              <img
                src={result.profieLink}
                alt="profile"
                className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full mx-auto'
              />
            </div>
 
            <div className='mt-10 space-y-8'>
              <div className='flex gap-4 max-md:flex-col'>
                <div className='w-full sm:w-[313px] max-md:w-full'>
                  <h5 className='text-eyeColor'>{Strings.First_Name}</h5>
                  <h1>{result.firstName}</h1>
                </div>
                <div className='w-full sm:w-[313px] max-md:w-full'>
                  <h5 className='text-eyeColor'>{Strings.last_name}</h5>
                  <h1>{result.lastName}</h1>
                </div>
              </div>
 
              <div className='flex gap-4 max-md:flex-col'>
                <div className='w-full sm:w-[313px] max-md:w-full'>
                  <h5 className='text-eyeColor'>{Strings.email_name}</h5>
                  <h1>{result.emailId}</h1>
                </div>
                {result.mobileNumber && (
                  <div className='w-full sm:w-[313px] max-md:w-full'>
                    <h5 className='text-eyeColor'>{Strings.phone_name}</h5>
                    <h1>{result.mobileNumber}</h1>
                  </div>
                )}
              </div>
 
              <div>
                <h4 className='text-eyeColor'>{Strings.bio_name}</h4>
                <h6>{result.bio}</h6>
              </div>
 
              <div>
                <h6 className='text-eyeColor'>{Strings.tag_name}</h6>
                <div className='flex mt-4 gap-2 flex-wrap'>
                  {tags.map((each, index) => (
                    <h6 key={index} className='bg-red-200 w-fit h-fit rounded-full p-2 text-red-600'>{each}</h6>
                  ))}
                </div>
              </div>
            </div>
          </div>
 
          {/* Education and Preferences */}
          <div className='h-auto mt-10 rounded-2xl bg-white w-[648px] ml-[250px] pt-[48px] pl-[54px] pb-[48px] pr-[54px]
            max-lg:w-auto max-lg:mx-4 max-md:mx-auto max-md:w-[500px] max-md:max-w-[90%] max-md:p-6 max-sm:p-4 max-sm:mx-5 max-sm:w-[360px]'>
           
            <div className='space-y-8'>
              <div className='flex flex-wrap gap-4 max-md:flex-col'>
                <div className='w-[313px] max-md:w-full'>
                  <h5 className='text-eyeColor'>{Strings.university_name}</h5>
                  <h1>{result.universityName || result.otherUniversityName}</h1>
                </div>
                <div className='max-md:w-full'>
                  <h5 className='text-eyeColor'>{Strings.graduation_year}</h5>
                  <h1>{result.graduationYear}</h1>
                </div>
              </div>
 
              <div className='flex flex-wrap gap-4 max-md:flex-col'>
                <div className='w-[313px] max-md:w-full'>
                  <h5 className='text-eyeColor'>{Strings.MajorField_of_Study}</h5>
                  <h1>{result.majorName}</h1>
                </div>
                <div className='max-md:w-full'>
                  <h5 className='text-eyeColor'>{Strings.user_role}</h5>
                  <h1>{result.signUpAs}</h1>
                </div>
              </div>
            </div>
          </div>
          {/* Preferences */}
          <div className='h-auto mt-10 rounded-2xl bg-white w-[648px] ml-[250px] pt-[48px] pl-[54px] pb-[48px] pr-[54px]
            max-lg:w-auto max-lg:mx-4 max-md:mx-auto max-md:w-[500px] max-md:max-w-[90%] max-md:p-6 max-sm:p-4 max-sm:mx-5 max-sm:w-[360px] mb-10'>
 
            <div className='space-y-8'>
              <div className='flex flex-wrap gap-4 max-md:flex-col'>
                <div className='w-[313px] max-md:w-full'>
                  <h5 className='text-eyeColor'>{Strings.notification_preferences}</h5>
                  <h1>{result.notificationPreference}</h1>
                </div>
                <div className='max-md:w-full'>
                  <h5 className='text-eyeColor'>{Strings.privacy_settings}</h5>
                  <h1>{result.privacySettings}</h1>
                </div>
              </div>
            </div>
          </div>
 
        </div>
 
        {/* Sidebar Section */}
        <div className='w-full order-1 md:order-1 sm:order-2 lg:w-auto h-full mt-[40px] lg:ml-10 max-md:mx-auto max-md:mt-6 max-sm:mt-[30px] '>
          <div className='h-auto rounded-2xl bg-white lg:w-[278px] max-md:w-[500px] mx-auto lg:mx-0 p-4 max-md:p-5 max-sm:w-[340px]'>
          <div className='sm:w-[313px]'>
      <h5 className='text-eyeColor'>{Strings.Joined_name}</h5>
      <h1>{Strings.joined_date}</h1>
    </div>
      <div className='flex justify-between items-center mt-4  '>
       <div >
         <h5 className='text-eyeColor'>{Strings.Chapter_Info}</h5>
         <h1>{Strings.Pi_Kappa_Psy}</h1>
       </div>
       <button className='w-8 h-8 bg-red-600 rounded-full text-white'>{`>`}</button>     </div>
 
    <div className='flex justify-between items-center mt-4'>
       <div>        <h5 className='text-eyeColor'>{Strings.Followers}</h5>
         <h1>{Strings.Followers_number}</h1>      </div>
      <button className='w-8 h-8 bg-red-600 rounded-full text-white'>{`>`}</button>
     </div>
 
     <div className='flex justify-between items-center mt-4'>
      <div>
         <h5 className='text-eyeColor'>{Strings.Connections}</h5>
         <h1>{Strings.Connections_number}</h1>
       </div>
       <button className='w-8 h-8 bg-red-600 rounded-full text-white'>{`>`}</button>
     </div>
      <div className='mt-6'>
       <button className='w-full h-10 bg-red-600 rounded text-white'>{Strings.massage_button}</button>
       <button className='w-full h-10 bg-gray-400 rounded mt-2 text-white'>{Strings.contact_button}</button>
     </div>
 
          </div>
        </div>
 
        {/* Edit Button */}
        <div className='md:order-2 sm:order-0 order-0 flex justify-center mt-5'>
          <div className='mb-[10px] rounded-2xl mt-[30px] bg-white h-8 align-middle p-2 lg:ml-[40px] md:ml-[50px]'>
            <button onClick={() => navigate("/basicinformation")} type="button" className="flex items-center text-red-600">
              <Edit color="red" size={16} />
              <span>{Strings.Edit_Profile}</span>
            </button>
          </div>
        </div>
 
      </div>
    </div>
  );
};
 
export default Profileedit;