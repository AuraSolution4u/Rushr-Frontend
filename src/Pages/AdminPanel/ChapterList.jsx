import React from 'react'
import { useNavigate } from "react-router-dom";
import ChapterImage from "../../assets/MyChapter/MyChapter.png";
import { FaInfo } from "react-icons/fa";
import { Strings } from '../../Strings/Strings';
const ChapterList = () => {
    const navigate = useNavigate();
    const handleNewChapterRequest = () => {
      localStorage.removeItem("chapterForm")
      // navigate("/newChapter");
    };
  return (
     <div className="w-full mt-[80px] scrollbar-hide overflow-scroll h-[80vh] flex justify-center items-center bg-sectionBg">
          <div className=" md:w-[446px] md:h-[381px] flex flex-col items-center gap-[48px]">
            <div className=" md:h-[199px] md:w-[363px] flex flex-col items-center gap-[24px] ">
              <img src={ChapterImage} alt="my-chapter" />
              <div className=" h-fit md:w-[363px] flex flex-col items-center md:gap-[6px]">
                <h1 className=" text-[#111111] text-h4 ">{Strings.no_chapter_found}</h1>
                <p className=" text-signupsmall text-secondary">
                  {Strings.seems_like_you_havent_joined_or_created_any_chapter}
                </p>
              </div>
            </div>
    
            <div className=" w-[555px] h-[134px] flex flex-col items-center gap-[24px]">
              <button onClick={handleNewChapterRequest} className=" w-[219px] h-[40px] rounded-md px-[30px] py-[8px] gap-[10px] bg-black text-white text-signup ">
                {Strings.create_new_chapter}
              </button>
              
            </div>
          </div>
        </div>
  )
}

export default ChapterList