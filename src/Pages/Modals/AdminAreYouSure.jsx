import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { Strings } from "../../Strings/Strings";
import { endPoints } from "../../api/endPoints";
import { api } from "../../utils/api";
import WarningIcon from "../../assets/svgIcons/areyousure.svg";
import {approveOrRejectChapterMemberRequest,
  requestToJoinAsMember,
  unAssignChapterAdminBySuperAdmin,
} from "../../features/users/uploadFile";

import { useEffect, useState } from "react";
import AssignSuccess from "./AssignSucess";

const AdminAreYouSure = ({
  usecase,
  closeModal,
  chapterId,
  userId,
  setSuccess,
  setSuccessMessage,
  areyousure,
  setShowSuccessModal,
  setWarning,
  requestObject,
  bidRequestStatus,
 
}) => {

    console.log(bidRequestStatus)

  const saveFormData= JSON.parse(localStorage.getItem("saveFormData"))


  const handleNo = (usecase) => {
    console.log(usecase);
    switch (usecase) {
      case "Accept":
        setWarning();
        break;
        //setWarning();
    }
  };

  //  const navigate = useNavigate();

  const handlYes = async (chapterId, userId, usecase, requestObject) => {
    console.log(userId, "assign an admin");
    console.log(usecase, "phani");

if (bidRequestStatus[0]===1 || bidRequestStatus[0]===2  ) {
      const acceptRequestBody = {
        chapterId: chapterId,
        loggedInUserId: saveFormData.userId,
        memberUserId: bidRequestStatus[1].userId,
        status: bidRequestStatus[0],
      };


      const response= await approveOrRejectChapterMemberRequest(JSON.stringify(acceptRequestBody))
     setWarning();

    //  setSuccessMessage(`${bidRequestStatus[0]===1? "Accept" :"Denied"} Successfully`);
      setShowSuccessModal(true)

      // if (response.statusCode===200){
      //   setSuccessMessage(response.message)
      //   setSuccess() 
      //   setWarning(false)

      // }
      // console.log(acceptRequestBody,"acceptRequestBody")
      // console.log(bidRequestStatus, "inside Accept");
    }
  
  };
  return (
    // <div className=" h-[100vh] w-full flex justify-center items-center ">
    //   <div className=" relative h-[100vh] w-[100vw]">

    //   <div className=" absolute  h-[100vh] w-full bg-black  opacity-[0.5] "></div>
    // <div className="bg-primeWhite shadow-lg flex flex-col   w-[400px] z-50 rounded-[16px] p-6">
    //   {/* Text Section */}

    //   <div className=" flex gap-3 items-start">
    //     <img className=" w-[24px] mt-2" src={WarningIcon} alt="success-logo" />{" "}
    //     <div className=" flex flex-col justify-center">
    //       <h2 className="text-log text-left font-semibold w-full m-0 ">
    //         {Strings.are_you_sure}
    //       </h2>
    //       <p className=" text-accent">{Strings.warning_message}</p>
    //     </div>
    //   </div>

    //   {/* Button Section */}
    //   <div className=" flex items-center justify-end gap-4 mt-4 w-full">
    //     <button
    //       onClick={handleNo}
    //       className="w-fit px-[10px] py-[3px] h-[30px] rounded-lg border  font-medium"
    //     >
    //       {Strings.cancel}
    //     </button>
    //     <button
    //       onClick={() => handlYes(chapterId, userId, usecase)}
    //       className="w-fit px-[10px] py-[3px]  h-[30px] rounded-lg bg-primary text-primeWhite font-medium"
    //     >
    //       {Strings.yes}
    //     </button>
    //   </div>
    // </div>
    //   </div>

    // </div>
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      {/* Modal Box */}
      <div className="bg-white shadow-lg flex flex-col w-[400px] rounded-2xl p-6 z-50 relative">
        {/* Header (Icon & Text) */}
        <div className="flex gap-3 items-start">
          <img className="w-6 mt-1.5" src={WarningIcon} alt="warning-icon" />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">{Strings.are_you_sure}</h2>
            <p className="text-accent text-sm">{Strings.warning_message}</p>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex items-center justify-end gap-4 mt-6">
          <button
            onClick={() => handleNo(usecase)}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100"
          >
            {Strings.cancel}
          </button>
          <button
            onClick={() => handlYes(chapterId, userId, usecase, requestObject)}
            className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark"
          >
            {Strings.yes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAreYouSure;
