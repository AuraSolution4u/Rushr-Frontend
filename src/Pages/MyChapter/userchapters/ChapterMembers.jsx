import { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { Strings } from "../../../Strings/Strings";

import Logo from "../../../assets/svgIcons/brandName.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { baseApi } from "../../../api/baseApi";
import { endPoints } from "../../../api/endPoints";
import AreYouSure from "../../Modals/AreYouSure";


import brandName from "../../../assets/svgIcons/brandName.svg";
import ChapterSuccessModal from "../../Modals/ChapterSuccessModal";

const ChapterMembers = () => {
  // const [showOptions, setShowOptions] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [bidRequestStatus, setBidRequestStatus] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [warning, setWarning] = useState();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const saveFormData = JSON.parse(localStorage.getItem("saveFormData"));
  const is_admin= saveFormData.admin
  const chapterId = saveFormData.chapterDetails.chapterId;
  const userId = saveFormData.userId;
  console.log(bidRequestStatus, "bidrequestStatus");

  const options = ["Accept", "Deny", "Cancel"];

  const [chapterMembers, setChapterMembers] = useState([]);
  const [bidMembers, setBidMembers] = useState([]);
  console.log(chapterMembers, "chapterMembers");
  const toggleOptions = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleOptions = (index, each) => {
    console.log(index, each, "index, each");

    setActiveIndex(null);
    if (index === 0 || index === 1) {
      setBidRequestStatus([index + 1, each]);
      setWarning(true);
    }
    console.log(index);
  };
 
  useEffect(() => {
    const requestBody = {
      userId: userId,
      chapterId: chapterId,
    };
    const fetchChapterMembers = async () => {
      const result = await fetch(
        `${baseApi}${endPoints.getAllUsersByChapterId}`,
        {
          method: "POST", // or "GET" depending on your API
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const out = await result.json();
      setChapterMembers(out.responseObject.members);
      setBidMembers(out.responseObject.pending);
      console.log(out);
    };
    fetchChapterMembers();
  }, []);

  const [activeTab, setActiveTab] = useState("members");
  //const [filterDropDown,setFilterDropDown] = useState()
  //const filtersArray = ["Accept", "Deny", "Sent", "Received"];

  const [handleFilter, setHandleFilter] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const handlesignUpAsSelect = () => {
    setHandleFilter(true);
  };
  const handleFilterState = () => {
    if (handleFilter) {
      setHandleFilter(false);
    }
  };
  const navigate = useNavigate();

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    return date
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
      .replace(",", "");
  };

  return (
    <div
      onClick={handleFilterState}
      className="flex flex-col gap-4 pt-[120px] w-full pr-[20px] mt-[20px] overflow-scroll scrollbar-hide h-screen "
    >
      <div className="flex justify-between items-center w-full">
        <h1 className=" text-[#2E3A59] text-chapter">{Strings.chapter}</h1>

        <div className="flex items-center w-[460px] h-[40px]">
          <input
            type="text"
            className="flex-grow h-[40px] px-2 border border-gray-300 rounded-l-md"
            placeholder="Search by Chapter Name"
          />
          <button className="bg-[#4B4A4B] h-[40px] w-[40px] flex justify-center items-center rounded-r-md">
            <FaSearch className="text-white" />
          </button>
          <div>
            {/* <div className="relative w-full md:w-[343px] text-accent">
              <div
                onClick={handlesignUpAsSelect}
                className="px-4 py-2 border h-[48px] border-inputBorder flex items-center justify-between rounded-[8px] cursor-pointer"
              >
                Filter
               
                {handleFilter ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

              {handleFilter && (
                <div className="absolute w-full mt-1 bg-white border border-inputBorder rounded-[8px] shadow-lg">
                  {filtersArray.map((each, index) => (
                    <div
                      key={index}
                     
                      className="px-4 py-2 cursor-pointer hover:bg-primary m-1 rounded-lg hover:text-white"
                    >
                      {each}
                    </div>
                  ))}
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
      <div className=" flex gap-10">
        <h1
          className={`cursor-pointer ${
            activeTab === "members" ? "text-red-500 font-bold" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("members")}
        >
          {Strings.all_members} ({chapterMembers.length})
        </h1>
       {is_admin && <h1
          className={`cursor-pointer ${
            activeTab === "bids" ? "text-red-500 font-bold" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("bids")}
        >
          {Strings.all_pending} ({bidMembers.length})
        </h1>}
      </div>
      <div className=" h-[65vh] overflow-scroll scrollbar-hide">
        {activeTab === "members" ? (
          [...chapterMembers].reverse().map((each, index) => (
            <div
              style={{ minHeight: "100px" }}
              key={each.id}
              className={`flex items-center w-full rounded-full p-6 ${
                index % 2 === 0 ? "bg-white h-[120px]" : " h-[120px] my-[-10px]"
              }`}
            >
              {/* Logo Section */}
              <div className="mr-6 w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                {console.log(each.profieLink, "hello")}
                <img
                  src={each.profieLink!=null ?each.profieLink : brandName   }
                  alt="Profile Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex-grow grid grid-cols-[2fr_8fr_2fr] gap-6">
                {/* Chapter Info */}
                <div className="col-span-1">
                  <h3 className="text-gray-800 font-semibold">{each.name}</h3>
                  {/* <p className="text-sm text-gray-600">{each.location}</p> */}
                </div>

                {/* School Info */}
                {/* <div className="col-span-1">
              <p className="text-sm text-gray-500">{Strings.school}</p>
              <p className="text-gray-800 font-medium">{chapter.school}</p>
            </div>
 */}
                {/* Members Count */}
                <div className="col-span-1 text-center">
                  {/* <p className="text-sm text-gray-500">{Strings.phone}</p> */}
                  {/* <p className="text-gray-800 font-medium">{chapter.chapterMembers}</p> */}
                  {/* <p className="text-gray-800 font-medium">{each.phone}</p> */}
                </div>

                {/* Description */}
                <div className="col-span-8 text-center">
                  <p className="text-sm text-gray-500">{Strings.school}</p>
                  {/* <p className="text-gray-800 font-medium">{chapter.chapterMembers}</p> */}
                  <p className="text-gray-800 font-medium">
                    {each.universityName}
                  </p>

                  {/* {
                  each.chapterDescription.length >20  ? chapter.chapterDescription.slice(0,20) +"..."  : chapter.chapterDescription

                } */}

                  {/* {truncateText(
                  chapter.chapterDescription,
                  expandedItems[chapter.chapterId]
                )}
                <button
                  onClick={() => toggleDescription(chapter.chapterId)}
                  className="text-orange-500 ml-1 cursor-pointer hover:text-orange-600 focus:outline-none"
                >
                  {expandedItems[chapter.chapterId]
                    ? "See less"
                    : "See more"}
                </button> */}
                </div>
              </div>

              {/* Request for Bid Button */}

              <button className="px-5 py-2 text-red-500 bg-pink-50 rounded-full w-[150px] ml-4 h-[38px] text-[14px] flex-shrink-0">
                {/* {Strings.request_a_bid} */}
                {Strings.member}
              </button>
              {/* <img
            className="h-[32px] w-[32px] ml-2"
            src={ChapterLogo}
            alt="Chapter Logo"
          /> */}
            </div>
          ))
        ) : bidMembers.length === 0 ? (
          <div className=" h-[50vh] w-[70vw] flex justify-center items-center">
            <h1>No Bids Available</h1>
          </div>
        ) : (
          [...bidMembers].reverse().map((each, index) => (
            <div
              key={each.id}
              className={`flex items-center w-full rounded-full h-[120px] p-6 ${
                index % 2 === 0 ? "bg-white" : " "
              }`}
            >
              {/* Logo Section */}
              <div className="mr-6 w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={each.profieLink}
                  alt="Chapter Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex-grow grid grid-cols-5 ">
                {/* Chapter Info */}
                <div className="col-span-1">
                  <h3 className="text-gray-800 font-semibold">{each.name}</h3>
                  <p className="text-sm text-gray-600">{each.location}</p>
                </div>

                {/* School Info */}
                {/* <div className="col-span-1">
              <p className="text-sm text-gray-500">{Strings.school}</p>
              <p className="text-gray-800 font-medium">{chapter.school}</p>
            </div>
 */}
                {/* Description */}
                <div className="col-span-1">
                  <p className="text-sm text-gray-500">{Strings.school}</p>
                  {/* <p className="text-gray-800 font-medium">{chapter.chapterMembers}</p> */}
                  <p className="text-gray-800 font-medium">
                    {each.universityName}
                  </p>

                  {/* {
                  each.chapterDescription.length >20  ? chapter.chapterDescription.slice(0,20) +"..."  : chapter.chapterDescription

                } */}
                </div>
                {/* Members Count */}
                <div className="col-span-1 text-center">
                  <p className="text-sm text-gray-500">Sent/Received</p>
                  {/* <p className="text-gray-800 font-medium">{chapter.chapterMembers}</p> */}
                  <p className="text-gray-800 font-medium my-2">
                    {each.sent == "Sent Out" ? (
                      <span className=" rounded-xl bg-[#E6F7FF]  text-[#1890FF] px-2 border-2 border-[#1890FF]">
                        {/* {each.sent} */}
                      </span>
                    ) : (
                      <div>
                        <span className=" bg-[#FFFBE6] rounded-xl text-[#FAAD14] font-thin px-2 border-2 border-[#FAAD14]">
                          {/* {each.sent} */} Received
                        </span>
                      </div>
                    )}
                  </p>
                </div>

                <div className="col-span-1 text-center">
                  <p className="text-sm text-gray-500">Status</p>
                  {/* <p className="text-gray-800 font-medium">{chapter.chapterMembers}</p> */}
                  <p className="text-gray-800 font-medium">
                    {each.status === "Accepted" ? "Accepted" : "Denied"}
                  </p>
                </div>
                <div className="col-span-1 text-center">
                  <p className="text-sm text-gray-500">Date & Time</p>
                  <p>{formatDate(each.requestedOn)}</p>
                  {/* <p className="text-gray-800 font-medium">{chapter.chapterMembers}</p> */}
                  {/* <p className="text-gray-800 font-medium">{each.phone}</p> */}
                </div>
              </div>

              {/* Request for Bid Button */}
              {/* 
                <button className="px-5 py-2 text-red-500 bg-pink-50 rounded-full w-[150px] ml-4 h-[38px] text-[14px] flex-shrink-0">
                </button> */}
              <div className=" relative ">
                <svg
                  onClick={() => toggleOptions(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9f9999"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-ellipsis-vertical cursor-pointer"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
                {activeIndex === index && (
                  <div className="absolute right-[-20px] z-20 bg-white shadow-md p-2 rounded mt-2">
                    {options.map((option, index) => (
                      <div
                        onClick={() => handleOptions(index, each)}
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
                {/* {showOptions &&
                    options.map((each, index) => <div key={index}>{each}</div>)} */}
              </div>
              {/* <img
            className="h-[32px] w-[32px] ml-2"
            src={}
            alt="Chapter Logo"
          /> */}
            </div>
          ))
        )}
      </div>

      <div className=" w-3/4">
        {warning && (
          <AreYouSure
          
            setShowSuccessModal={() => setShowSuccessModal(true)}
            setSuccessMessage={() => setSuccessMessage()}
            bidRequestStatus={bidRequestStatus}
            usecase="Accept"
            setWarning={() => setWarning(false)}
          />
        )}

        {showSuccessModal && <ChapterSuccessModal message={`${bidRequestStatus[0]===1? "Accepted" :"Denied"} Successfully`}  />}
      </div>
    </div>
  );
};

export default ChapterMembers;
