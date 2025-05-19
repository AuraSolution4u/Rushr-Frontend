import { useNavigate } from "react-router-dom";
import ChapterImage from "../../assets/MyChapter/MyChapter.png";
import { FaInfo } from "react-icons/fa";
import { Strings } from "../../Strings/Strings";
const MyChapter = () => {

const navigate= useNavigate()
  
const handleNewChapterRequest=()=>{
navigate("/createnewchapter")
  }

  const handleGoToExplore=()=>{
    localStorage.setItem("hideSidebar", "false");
    navigate("/explorechapter")

  }
  return (
    <div className="   h-[100vh] w-full pt-[100px] flex justify-center items-center bg-sectionBg">
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
          <button onClick={handleGoToExplore} className=" w-[219px] h-[40px] rounded-md px-[30px] py-[8px] gap-[10px] bg-black text-white text-signup ">
            {Strings.explore_chapters}
          </button>
          {/* <div className=" w-full h-[70px] flex flex-col items-center gap-[8px] ">
            <p className="w-full text-secondary text-[12px] flex  items-center gap-[6px]">
              <span>
                <FaInfo />
              </span>
             {Strings.long_text}
            </p>
            <button onClick={handleNewChapterRequest} className=" bg-primary text-white rounded-md px-[136px] py-[8px] text-signup">Send Chapter Request</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyChapter;
