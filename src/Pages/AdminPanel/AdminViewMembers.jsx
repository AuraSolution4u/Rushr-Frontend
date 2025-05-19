import { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { Strings } from "../../Strings/Strings";

import Logo from "../../assets/svgIcons/brandName.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { baseApi } from "../../api/baseApi";
import { endPoints } from "../../api/endPoints";
import AreYouSure from "../Modals/AreYouSure";

import brandName from "../../assets/svgIcons/brandName.svg";
import ChapterSuccessModal from "../Modals/ChapterSuccessModal";
import AdminAreYouSure from "../Modals/AdminAreYouSure";

const AdminViewMembers = () => {
  const [showOptions, setShowOptions] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [bidRequestStatus, setBidRequestStatus] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [warning, setWarning] = useState();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const saveFormData = JSON.parse(localStorage.getItem("saveFormData"));
  const userId = saveFormData.userId;
  console.log(bidRequestStatus, "bidrequestStatus");

  const location = useLocation();
  console.log(location);
  const chapterId = location.state.chapter.chapterId;

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
          <div></div>
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
        <h1
          className={`cursor-pointer ${
            activeTab === "bids" ? "text-red-500 font-bold" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("bids")}
        >
          {Strings.all_pending_requests} ({bidMembers.length})
        </h1>
      </div>
      <div className=" h-[65vh] overflow-scroll scrollbar-hide">
        {activeTab === "members" ? (
          [...chapterMembers].reverse().map((each, index) => (
            //   <div
            //   style={{ minHeight: "100px" }}
            //   key={each.id}
            //   className={`flex items-center justify-between w-full rounded-full p-6 ${
            //     index % 2 === 0 ? "bg-white h-[120px]" : "bg-gray-50 h-[120px]"
            //   }`}
            // >
            //   {/* Profile Image */}
            //   <div className="w-[70px] h-[70px] rounded-full overflow-hidden flex-shrink-0">
            //     <img
            //       src={each.profieLink ? each.profieLink : brandName}
            //       alt="Profile Logo"
            //       className="w-full h-full object-cover"
            //     />
            //   </div>

            //   {/* User Details */}
            //   <div className="flex-grow grid grid-cols-2 gap-6 items-center text-center">
            //     {/* Name */}
            //     <div>
            //       <p className="text-sm text-gray-500">{Strings.name}</p>
            //       <h3 className="text-gray-800 font-semibold">
            //         {each.firstName + " " + each.lastName}
            //       </h3>
            //     </div>

            //     {/* University Info */}
            //     <div>
            //       <p className="text-sm text-gray-500">{Strings.school}</p>
            //       <p className="text-gray-800 font-medium">{each.universityName}</p>
            //     </div>
            //   </div>
            // </div>
            <div
              style={{ minHeight: "100px" }}
              key={each.id}
              className={`flex items-center justify-between w-full rounded-full p-6 ${
                index % 2 === 0 ? "bg-white h-[120px]" : "bg-gray-50 h-[120px]"
              }`}
            >
              {/* Profile Image */}
              <div className="w-[70px] h-[70px] rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={each.profieLink!=null ? each.profieLink : brandName}
                  alt="Profile Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* User Details */}
              <div className="flex-grow flex justify-between items-center">
                {/* Name Section */}
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-500">{Strings.name}</p>
                  <h3 className="text-gray-800 font-semibold">
                    {each.firstName + " " + each.lastName}
                  </h3>
                </div>

                {/* University Section */}
                <div className="text-center flex-1">
                  <p className="text-sm text-gray-500">{Strings.school}</p>
                  <p className="text-gray-800 font-medium">
                    {each.universityName}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : bidMembers.length === 0 ? (
          <div className=" h-[50vh] w-[70vw] flex justify-center items-center">
            <h1>{Strings.no_pending_requests}</h1>
          </div>
        ) : (
          [...bidMembers].reverse().map((each, index) => (
            <div
              key={each.id}
              className={`flex items-center w-full rounded-full h-[120px] p-6 ${
                index % 2 === 0 ? "bg-white" : " "
              }`}
            >
              <div className="mr-6 w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={each.profieLink}
                  alt="Chapter Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-grow grid grid-cols-5 ">
                <div className="col-span-1">
                  <p className="text-sm text-gray-600">{Strings.name}</p>
                  <h3 className="text-gray-800 font-semibold">
                    {each.firstName + " " + each.lastName}
                  </h3>
                </div>

                <div className="col-span-1">
                  <p className="text-sm text-gray-500">{Strings.school}</p>
                  <p className="text-gray-800 font-medium">
                    {each.universityName}
                  </p>
                </div>

                <div className=" flex flex-col col-span-1 items-center text-center">
                  <p className="text-sm text-gray-500">Sent/Received</p>
                  <p className="text-[#FAAD14] bg-[#FFFBE6] border rounded-[50px] w-[100px]  px-[8px] py-[4px] border-[#FFE58F] font-medium">
                    Received
                  </p>
                </div>

                <div className="flex flex-col col-span-1  text-center items-center">
                  <p className="text-sm text-gray-500">{Strings.status}</p>
                  <p className="text-[#F5222D] bg-[#FFF1F0] border rounded-[50px] w-[100px]  px-[8px] py-[4px] border-[#FFA39E] font-medium">
                    Pending
                  </p>
                </div>
                <div className="col-span-1 text-center">
                  <p className="text-sm text-gray-500">{Strings.date_time}</p>
                  <p>{formatDate(each.requestedOn)}</p>
                </div>
              </div>

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
              </div>
            </div>
          ))
        )}
      </div>

      <div className=" w-3/4">
        {warning && (
          <AdminAreYouSure
            chapterId={chapterId}
            setShowSuccessModal={() => setShowSuccessModal(true)}
            setSuccessMessage={() => setSuccessMessage()}
            bidRequestStatus={bidRequestStatus}
            usecase="Accept"
            setWarning={() => setWarning(false)}
          />
        )}

        {showSuccessModal && (
          <ChapterSuccessModal
            message={`${
              bidRequestStatus[0] === 1 ? "Accepted" : "Denied"
            } Successfully`}
            path="/chapterslist"
          />
        )}
      </div>
    </div>
  );
};

export default AdminViewMembers;
