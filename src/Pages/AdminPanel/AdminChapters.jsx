
import { useState } from "react";
import { Strings } from "../../Strings/Strings";
import { useEffect } from "react";
import { endPoints } from "../../api/endPoints";
import { baseApi } from "../../api/baseApi";
import ChapterLogo from "../../assets/Chapter.png";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import handleScrollToTop from "../../utils/SmoothScroll";
import { setUserFormData } from "../../slices/authenticatedSlice";
import LoadingSpinner from "../../utils/loading/LoadingSpinner";

const AdminChapters = () => {
  const [name,setName] = useState("")
  const [isLoading,setIsLoading] = useState(true)


  const [chaptersList, setChaptersList] = useState([]);
  const [filteredChapters, setFilteredChapters] = useState(chaptersList);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setName(searchValue);
  
    const filteredData = chaptersList.filter(each =>
      each.chapterName.toUpperCase().includes(searchValue.toUpperCase())
    );
    console.log(filteredData)
  
    setFilteredChapters(filteredData);
  };
  const handleChapterClick = (chapter) => {
    console.log(chapter)
    handleScrollToTop();
    navigate("/adminchapterview", { state: { chapter } });
  };

  useEffect(() => {
    const fetchChaptersList = async () => {
      const res = await fetch(`${baseApi}${endPoints.chapterList}`);
      const json = await res.json();
      console.log(json, "chapterList");
      setChaptersList([...json.responseObject].reverse());
      setFilteredChapters([...json.responseObject].reverse());
      setIsLoading(false)
    };
    fetchChaptersList();
  }, []);
  return isLoading ? (<LoadingSpinner/>) : (
    <div className=" scrollbar-hide overflow-scroll h-[100vh] w-full">
      <div className="flex flex-col gap-4 pt-[100px]  ">
        <div className="flex justify-between items-center w-full">
          <h1 className=" text-[#2E3A59] text-chapter">{Strings.chapter}</h1>
          <div className="flex items-center w-[460px] h-[40px]">
            <input
             onChange={handleSearch}
              type="text"
              className="flex-grow h-[40px] px-2 border border-gray-300 rounded-l-md"
              placeholder="Search by Chapter "
            />
            <button className="bg-[#4B4A4B] h-[40px] w-[40px] flex justify-center items-center rounded-r-md">
              <FaSearch className="text-white" />
            </button>
          </div>
        </div>
        {filteredChapters.map((chapter, index) => (
          <div
            // onClick={() => ChapterDetails(chapter)}
            style={{ minHeight: "100px" }}
            key={chapter.ChapterNumber}
            className={`flex items-center w-full rounded-full p-6 ${
              index % 2 === 0 ? "bg-white h-[120px]" : " my-[-10px]"
            }`}
          >
            {/* Logo Section */}
            <div className="mr-6 w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
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
                <p className="text-sm text-gray-600">{chapter.chapterName}</p>
              </div>

              {/* School Info */}
              <div className="col-span-1 text-center">
                <p className="text-sm text-gray-500">{Strings.location}</p>
                <p className="text-gray-800 font-medium">{chapter.location}</p>
              </div>

              {/* Members Count */}
              <div className="col-span-1 text-center">
                <p className="text-sm  text-gray-500">{Strings.members}</p>
                 <p className="text-gray-800 font-medium">{chapter.members.length}</p> 
                
              </div>

              {/* Description */}
              <div className="col-span-1 text-center">
              <p className="text-sm  text-gray-500">{Strings.description}</p>
                <p className="text-sm text-gray-600">

                  {chapter.chapterDescription.slice(0,20)}...

                  <button
                    // onClick={() => toggleDescription(chapter.ChapterNumber)}
                    className="text-orange-500 ml-1 cursor-pointer hover:text-orange-600 focus:outline-none"
                  >
                    {/* {expandedItems[chapter.ChapterNumber]
                        ? "See less"
                        : "See more"} */}
                  </button>
                </p>
              </div>
            </div>

            {/* Request for Bid Button */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleChapterClick(chapter);
              }}
               className="px-5 py-2 text-red-500 bg-pink-50 rounded-full w-[150px] h-[38px] text-[14px] flex items-center justify-center cursor-pointer"
              // className="px-5 py-2 text-red-500 bg-pink-50 rounded-full w-[150px] ml-4 h-[38px] text-[14px] cursor-pointer"
            >
              {Strings.view_chapters}
            </button>
            {/* <img
                className="h-[32px] w-[32px] ml-2"
                src={ChapterLogo}
                alt="Chapter Logo"
              /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminChapters;
