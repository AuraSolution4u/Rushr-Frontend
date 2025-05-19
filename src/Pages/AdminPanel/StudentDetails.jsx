import { IoArrowBack } from "react-icons/io5"; // Import back arrow icon
import Logo from "../../assets/Logo.png";
import { Strings } from "../../Strings/Strings";
import { useState } from "react";

const Studentdetails = (props) => {
 

  const { setStudentDetailModal } = props;
  const {
    bio,
    dateOfBirth,
    signUpAs,
    emailId,
    firstName,
    lastName,
    graduationYear,
    mobileNumber,
    notificationPreference,
    privacySettings,
    profieLink,
    tags,
    universityName,
    otherUniversityName,
    majorName,
  } = props.item[0];

  console.log(props.item[0],"studentdetailsview")

  return (
    <div className="absolute scrollbar-hide overflow-scroll h-[100vh] pt-[100px]  w-[calc(100%-265px)] right-3 p-6">
      {/* Back Button with Arrow */}
      <button
        className="flex items-center text-left text-[#282828] text-[16px] font-medium cursor-pointer hover:opacity-80"
        onClick={() => {
          setStudentDetailModal(false);
        }}
      >
        <IoArrowBack className="mr-2 text-xl" /> {/* Back Arrow Icon */}
        Back
      </button>

      {/* Basic Information Section */}
      <div className="mb-8">
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center">
            <div className="bg-white px-4 py-2 flex rounded-full">
              <p className="text-[#282828] text-[16px] font-[500] ">
                {Strings.basic_information}
              </p>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center mt-[30px]">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
            <img
              className="w-24 h-24 rounded-full"
              src={profieLink || Logo}
              alt="profile-pic"
            />
          </div>
        </div>

        {/* First Name & Last Name */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-[14px] font-[400] text-[#262626] mb-1 text-left">
              <span className="text-[#F5222D]">{Strings.astersik}</span> {Strings.first_name}
            </label>
            <div className="p-2 bg-[#FFFFFF] border border-secondary rounded-[6px] text-left">
              {firstName || ""}
            </div>
          </div>
          <div>
            <label className="block text-[14px] font-[400] text-[#262626] mb-1 text-left">
              <span className="text-[#F5222D]">{Strings.astersik}</span> {Strings.last_name}
            </label>
            <div className="p-2 bg-[#FFFFFF] border border-secondary rounded-[6px] text-left">
              {lastName || ""}
            </div>
          </div>
        </div>

        {/* Email & Mobile Number */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-[14px] font-[400] text-[#262626] mb-1 text-left">
              <span className="text-[#F5222D]">{Strings.astersik}</span> {Strings.email}
            </label>
            <div className="p-2 bg-[#FFFFFF] border border-secondary rounded-[6px] text-left">
              {emailId}
            </div>
          </div>
       
        </div>

        {/* Bio Section */}
        {bio != null && (
          <div className="mb-6">
            <label className="block text-[14px] font-[400] text-[#262626] mb-1 text-left">
              {Strings.bio}
            </label>
            <div className="p-2 border border-secondary bg-[#FFFFFF] rounded-[6px] h-32 overflow-y-auto text-left">
              {bio || ""}
            </div>
          </div>
        )}
        
        {tags != null && (
          <div className="mb-8">
            <label className="block text-[14px] font-[400] text-[#262626] mb-1 text-left">
              Tags{" "}
              <span className="text-[#8C8C8C] text-[14px] font-[400]">
                (optional)
              </span>
            </label>
            <div className="p-2 bg-[#FFFFFF] border border-secondary rounded-[6px] flex gap-2 text-left">
              {tags.map((each, index) => (
                <span
                  key={index}
                  className="bg-[#F5F5F5]  text-[#262626] px-2 py-1 text-[12px] flex items-center"
                >
                  {each}
                  <svg
                    className="w-3 h-3 text-[#B0B0B0] cursor-pointer ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              ))}
            </div>
          </div>
        )}
        
      </div>
      
        {/* Academic Information Section */}
        <div className="mb-8">
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <div>
            <div className="bg-white px-4 py-2 rounded-full">
              <p className="text-[#282828] text-[16px] font-[500]">
                Academic Information
              </p>
            </div>
          </div>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <div className="mb-6">
          <label className="block text-[14px] font-[400] text-[#262626] mb-1 text-left">
            <span className="text-[#F5222D]">*</span> University Name
          </label>
          <div className="p-2 border border-secondary bg-[#FFFFFF] rounded-[6px] text-left">
            {universityName===null ? otherUniversityName : universityName }
          </div>
        </div>

        {graduationYear != null && (
          <div className="mb-6">
            <label className="block text-[14px] font-[400] text-[#262626] mb-1 text-left">
              <span className="text-[#F5222D]">*</span> Graduation Year
            </label>
            <div className="p-2 border border-secondary bg-[#FFFFFF] rounded-[6px] text-left">
              {graduationYear}
            </div>
          </div>
        )}

        {majorName != null && (
          <div className="mb-8">
            <label className="block text-[14px] font-[400] text-[#262626] mb-1 text-left">
              Major/Field of Study{" "}
              <span className="text-[#8C8C8C] text-[14px] font-[400]">
                (optional)
              </span>
            </label>
            <div className="p-2  border border-secondary bg-[#FFFFFF] rounded-[6px] text-left">
              {majorName || ""}
            </div>
          </div>
        )}
      </div>

      {/* Preferences Section */}
      {notificationPreference != null && (
        <div>
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <div>
              <div className="bg-white px-4 py-2 rounded-full">
                <p className="text-[#282828] text-[16px] font-[500]">
                  Preferences
                </p>
              </div>
            </div>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <div className="mb-6">
            <label className="block text-[14px] font-[400] text-[#282828] mb-4 text-left">
              Notification Preferences
            </label>
            <div className="flex space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="email"
                  name="notification"
                  value="email"
                  className="h-4 w-4 text-[#E02239] border-gray-300 focus:ring-[#E02239]"
                  checked={notificationPreference === "Email"}
                  readOnly
                />
                <label
                  htmlFor="email"
                  className="ml-2 text-sm font-medium text-gray-700"
                >
                  Email notifications
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-[400] text-[#282828]mb-4 text-left">
              Privacy Settings
            </label>
            <div className="flex space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="public"
                  name="privacy"
                  value="public"
                  className="h-4 w-4 text-[#E02239] border-gray-300 focus:ring-[#E02239]"
                  checked={privacySettings === "Public"}
                  readOnly
                />
                <label
                  htmlFor="public"
                  className="ml-2 text-[14px] font-[400] text-[#262626]"
                >
                  Public{" "}
                  <span className="text-[#8C8C8C] text-[14px] font-[400]">
                    (visible to everyone)
                  </span>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="private"
                  name="privacy"
                  value="private"
                  className="h-4 w-4 text-[#E02239] border-gray-300 focus:ring-[#E02239]"
                  readOnly
                  checked={privacySettings === "Private"}
                />
                <label
                  htmlFor="private"
                  className="ml-2 text-[14px] font-[400] text-[#262626]"
                >
                  Private{" "}
                  <span className="text-[#8C8C8C] text-[14px] font-[400]">
                    (visible only to chapter members)
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Studentdetails;
