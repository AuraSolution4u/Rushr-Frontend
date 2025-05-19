import { useEffect, useState } from "react";
import ChapterLogo from "../../assets/Chapter.png";
import { FaSearch } from "react-icons/fa";
// import ChapterDetails from "./CHapterDetails";
import { useDispatch, useSelector } from "react-redux";
import { addChapter } from "../../slices/chapterSlice";
import { useNavigate } from "react-router-dom";
import { Strings } from "../../Strings/Strings";
import LoadingSpinner from "../../utils/loading/LoadingSpinner";
import { endPoints } from "../../api/endPoints";
import { baseApi } from "../../api/baseApi";
import { api } from "../../utils/api";

const Chapter = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const chapter_details = useSelector((store) => store.chapter.selectedChapter);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();



  // const toggleDescription = (chapterNumber) => {
  //   setExpandedItems((prev) => ({
  //     ...prev,
  //     [chapterNumber]: !prev[chapterNumber],
  //   }));
  // };

  useEffect(() => {
    const fetchChapters  = async () => {
      setLoading(true);
      setError(null);
      try {
        const response= await api.get(endPoints.chapterList)
        setData(response.data.responseObject || []);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, []);

  // const truncateText = (text, isExpanded) => {
  //   if (isExpanded) return text;
  //   return text.length > 100 ? text.substring(0, 100) + "..." : text;
  // };
  const ChapterDetails = (chapter) => {

    navigate("/chapterDetails",{state:{chapter}});
  };

  return (
    <div className="flex flex-col gap-4 pt-[120px] w-full pr-[20px] overflow-scroll scrollbar-hide h-screen ">
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
        </div>
      </div>
      {loading ? <LoadingSpinner/> : <>{[...data].reverse().map((chapter, index) => (
        <div
          
          style={{ minHeight: "100px" }}
          key={chapter.chapterId}
          className={`flex items-center w-full rounded-full p-6 ${
            index % 2 === 0 ? "bg-white h-[120px]" : " my-[-10px]"
          }`}
        >
          {/* Logo Section */}
          <div className="mr-6 w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={chapter.chapterProfilePhotoLink}
              alt="Chapter Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex-grow grid grid-cols-4 gap-6">
            {/* Chapter Info */}
            <div className="col-span-1">
              <h3 className="text-gray-800 font-semibold">
                {chapter.greekChapterNames}
              </h3>
              <p className="text-sm text-gray-600">{chapter.location}</p>
            </div>

            {/* School Info */}
            {/* <div className="col-span-1">
              <p className="text-sm text-gray-500">{Strings.school}</p>
              <p className="text-gray-800 font-medium">{chapter.school}</p>
            </div>
 */}
            {/* Members Count */}
            <div className="col-span-1 text-center">
              <p className="text-sm text-gray-500">{Strings.members}</p>
              <p className="text-gray-800 font-medium">{chapter.members.length}</p> 
             
            </div>

            {/* Description */}
            <div className="col-span-1 text-center">
            <p className="text-sm text-gray-500">{Strings.description}</p>
              <p className="text-sm ">
                {
                  chapter.chapterDescription.length >20  ? chapter.chapterDescription.slice(0,20) +"..."  : chapter.chapterDescription

                }
                
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
              </p>
            </div>
          </div>

          {/* Request for Bid Button */}

          <button onClick={() => ChapterDetails(chapter)} className="px-5 py-2 text-red-500 bg-pink-50 rounded-full w-[150px] ml-4 h-[38px] text-[14px] flex-shrink-0">
            {Strings.view_chapters}
          </button>
          {/* <img
            className="h-[32px] w-[32px] ml-2"
            src={ChapterLogo}
            alt="Chapter Logo"
          /> */}
        </div>
      ))}</>}
    </div>
  );
};

export default Chapter;
