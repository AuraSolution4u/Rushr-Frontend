
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dashboard from "../../assets/svgIcons/dashboard.svg";
import Book from "../../assets/svgIcons/book.svg";
import { ChevronDown, ChevronUp } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChapterOpen, setIsChapterOpen] = useState(
    location.pathname.includes("/chapters")
  );

  const handleMenuClick = (route) => {
    navigate(route);
    if (route.includes("chapters")) {
      setIsChapterOpen(true);
    } else {
      setIsChapterOpen(false);
    }
  };

  return (
    <div className="flex rounded-lg m-4  min-w-[250px] mt-[100px] scrollbar-hide overflow-scroll h-[80vh]  ">
      {/* Sidebar */}
      <div className="  ml-20px h-[calc(100vh-81px)]  w-full bg-black text-white shadow-lg">
        <ul className="mt-4 space-y-2">
          {/* Users */}
          <li
            className={`flex items-center gap-4 px-6 py-3 cursor-pointer text-lg rounded-lg hover:bg-gray-800 transition ${
              location.pathname === "/student" ? "bg-red-600" : ""
            }`}
            onClick={() => handleMenuClick("/student")}
          >
            <img src={dashboard} alt="Users" className="w-[24px] h-[24px]" />
            <span>Users</span>
          </li>

          {/* Chapters */}
          <li
            className={`flex items-center gap-4 px-6 py-3 cursor-pointer text-lg rounded-lg hover:bg-gray-800 transition ${
              location.pathname.includes("/chapters") ? "bg-red-600" : ""
            }`}
            onClick={() => setIsChapterOpen(!isChapterOpen)}
          >
            <img src={Book} alt="Chapters" className="w-[24px] h-[24px]" />
            <span>Chapters</span>
            {isChapterOpen ? (
              <ChevronUp className="ml-auto w-4 h-4" />
            ) : (
              <ChevronDown className="ml-auto w-4 h-4" />
            )}
          </li>

          {/* Dropdown for Chapters */}
          {isChapterOpen && (
            <div className="ml-6 space-y-2">
               <li
                className={`flex items-center gap-4 px-6 py-2 cursor-pointer text-base rounded-lg hover:bg-gray-700 transition ${
                  location.pathname === "/newChapter" ? "bg-red-500" : ""
                }`}
                onClick={() => handleMenuClick("/newChapter")}
              >
                ➕ Create Chapter
              </li>
              <li
                className={`flex items-center gap-4 px-6 py-2 cursor-pointer text-base rounded-lg hover:bg-gray-700 transition ${
                  location.pathname === "/chapterslist" ? "bg-red-500" : ""
                }`}
                onClick={() => handleMenuClick("/chapterslist")}
              >
                📜 Chapters List 
              </li>
             
            </div>
          )}
          

           {/* Doc Repo */}

           {/* <li
            className={`flex items-center gap-4 px-6 py-3 cursor-pointer text-lg rounded-lg hover:bg-gray-800 transition ${
              location.pathname === "/documentrepository" ? "bg-red-600" : ""
            }`}
            onClick={()=>{navigate('/documentrepository')}}
          >
            <img src={dashboard} alt="Users" className="w-[24px] h-[24px]" />
            <span>Doc. Repository</span>
          </li> */}

        </ul>
      </div>


      
    </div>
  );
};

export default Sidebar;
