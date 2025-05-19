import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { Strings } from "../../Strings/Strings";
import { useState } from "react";
const ChapterSuccessModal = ({ message, path }) => {
  console.log(message);
  const navigate = useNavigate();
  return (
    // <div className="flex items-center justify-center  bg-bgsmallscreen md:bg-bglargescreen rounded-[20px] ">
    //   <div className="bg-primeWhite shadow-lg flex flex-col items-center w-[340px] h-[345px] rounded-[20px] p-6">
    //     {/* Text Section */}
    //     <img className="py-[25px]" src={Logo} alt="success-logo" />
    //     <div className="flex-grow flex flex-col justify-center items-center">

    //       <h2 className="text-log text-center font-semibold">
    //      {message} ||  {Strings.Chapter_Created_Successfully}
    //       </h2>
    //     </div>

    //     {/* Button Section */}
    //     <div className="mt-4 w-full">
    //       <Link to="/chapterslist">
    //         <button
    //           onClick={()=>{
    //             localStorage.removeItem("chapterForm")
    //           }}
    //           type="submit"
    //           className="w-full h-[48px] rounded-[24px] bg-primary text-primeWhite font-medium"
    //         >
    //           {Strings.go_to_chapter}
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      {/* Modal Box */}
      <div className="bg-white shadow-lg flex flex-col items-center h-fit w-[300px] rounded-2xl p-6 z-50 relative">
        {/* Header (Icon & Text) */}
        <div className="flex gap-3 items-center flex-col">
          <img className="py-[10px] " src={Logo} alt="success-logo" />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-center">
              {message || Strings.Chapter_Created_Successfully}
            </h2>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex items-center justify-end gap-4 mt-6">
          {/* <Link to="/chapterslist"> */}
          <button
            onClick={() => {
              localStorage.removeItem("chapterForm");
              if (path === "/chapterslist") {
                navigate("/chapterslist");
              } else {
                navigate("/explorechapter");
              }
            }}
            className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark"
          >
            {Strings.go_to_chapter}
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ChapterSuccessModal;
