import { BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Strings } from "../../Strings/Strings";
import axios from "axios";
import { useEffect, useState } from "react";
import { endPoints } from "../../api/endPoints";
import { useLocation, useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { requestToJoinAsMember } from "../../features/users/uploadFile";
import AreYouSure from "../Modals/AreYouSure";
import ChapterSuccessModal from "../Modals/ChapterSuccessModal";
import PasswordModalSuccess from "../Modals/PasswordModalSuccess";
const ChapterDetails = () => {
  //const chapter_details = useSelector((store) => store.chapter.selectChapter);
  const userData = JSON.parse(localStorage.getItem("saveFormData"));
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  console.log(showSuccessModal,"chapterdetails")
  const [requestSuccess, setRequestSuccess] = useState("");
  console.log(userData.userId, "userId");
  const [chapter, setChapter] = useState(null);
  const [warning, setWarning] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const chapterList = location.state?.chapter;
  console.log("chapters lists", chapterList);

  const requestObject = {
    userId: userData.userId,
    chapterId: chapterList.chapterId,
  };
  const handleJoinRequest = (chapterId) => {
    setWarning(true);

    // try {
    //   const response= await requestToJoinAsMember(JSON.stringify(responseObject))

    //   // if (response.data.statusCode===200){

    //   // }
    //   console.log(response,"response of requestToJoinAsMember")

    // }
    // catch(e){
    //   console.log(e)
    // }

    console.log(chapterId, "requested Chapter");
  };

  return (
    <div className="bg-sectionBg h-[100vh] mb-[20px] scrollbar-hide overflow-scroll w-full pr-[20px]">
      <div>
        <div className="md:h-[57px] md:flex bg-white md:px-[24px] mb-[20px] md:py-[16px] md:gap-3 md:rounded-lg relative top-[107px] md:items-center">
          <BiArrowBack
            className="cursor-pointer"
            onClick={() => navigate("/explorechapter")}
          />
          <h1>{Strings.chapter_details}</h1>
        </div>
        <div className=" md:flex md:items-start gap-[30px] ">
          <div className=" md:w-3/4 md:flex md:flex-col md:gap-[24px]">
            <div
              style={{
                backgroundImage: `url(${chapterList.coverPhotoLink})`,
                borderRadius: "16px",
              }}
              className=" flex items-center justify-between px-[50px] bg-cover bg-center w-full h-[250px] mt-[100px] bg-[#00000033] opacity-[1] "
            >
              <div className=" flex items-center gap-[30px]">
                <img
                  src={chapterList.chapterProfilePhotoLink}
                  className="md:w-[138px] md:h-[138px] rounded-[50%]"
                  alt="profile"
                />
                <div>
                  <h1 className="text-[54px] font-bold text-white">
                    {chapterList.greekChapterNames}
                  </h1>
                  <h1 className="text-[32px] font-bold text-white">
                    {chapterList.chapterName}
                  </h1>
                  <p className="text-[14px] text-white ">
                    <span className=" flex items-center gap-1 ">
                      <MdLocationOn /> {chapterList.location}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-end h-full pb-[40px]">
                <ul className="flex  gap-2">
                  {chapterList.tags.map((each) => (
                    <li className="text-white text-[13px] border px-3 py-1 rounded-[20px]">
                      {each}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className=" md:w-full md:h-fit md:rounded-xl bg-white md:p-[15px] ">
              <h1>Chapter Description</h1>
              <hr className="md:mt-[15px] md:mx-[-15px] text-accent border-1" />
              <div className=" md:pt-[15px] ">
                <h1 className=" text-checkBoxTerms text-eyeColor">
                  <span className=" text-primary text-h5 pr-3">
                    {Strings.history}
                  </span>
                  <span>{chapterList.chapterHistory}</span>
                </h1>
                <br />
                <h1 className=" text-checkBoxTerms text-eyeColor">
                  <span className=" text-primary text-h5 pr-3">
                    {Strings.mission}
                  </span>
                  <span>{chapterList.chapterMission}</span>
                </h1>
                <br />
                <h1 className=" text-checkBoxTerms text-eyeColor"></h1>
              </div>
            </div>
            <div className="md:flex md:items-start md:gap-[24px]">
              <div className="md:w-[90%] md:h-fit md:rounded-xl bg-white md:p-[15px]">
                <h1>{Strings.chapter_rules}</h1>
                <hr className="md:mt-[15px] md:mx-[-15px] text-accent border-1" />
                <h1>{chapterList.chapterRulesAndGuidelines}</h1>
                {/* <div className="md:pt-[15px] md:w-full min-w-[120px]">
                  <div className="border-[1px] border-[#d9d9d9] rounded-xl">
                    {Guidelines.map((each) => (
                      <div key={each.id} className="md:w-full md:h-fit md:px-[24px] md:py-[12px] flex md:items-center md:gap-[10px] border-b-[1px] border-b-[#d9d9d9]">
                        <span>👉</span>
                        <span>{each.des}</span>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
              {/* <div className="md:w-[500px] md:h-[364px] md:rounded-xl bg-white md:p-[15px]">
                <h1>{Strings.chapter_activities}</h1>
                <hr className="md:mt-[15px] md:mx-[-15px] text-accent" />
                <div className="md:pt-[15px] md:w-full min-w-[120px]">
                  <div>
                    {Activity.map((each) => (
                      <div key={each.id} className="md:w-full md:h-fit md:px-[24px] md:py-[12px] flex md:items-center md:gap-[10px]">
                        <span>⭕</span>
                        <span>{each.des}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="md:w-1/4 md:flex md:flex-col justify-center mt-[100px] md:gap-[24px]">
            <div className="md:w-full md:rounded-xl bg-white p-[15px]">
              <div className="flex flex-col md:gap-[24px] justify-start">
                <div className="md:w-full flex flex-col  md:gap-[27px]">
                  <div className="flex flex-col md:gap-[5px] w-fit">
                    <p className="text-[#7C7C7C]">
                      {Strings.number_of_members}
                    </p>
                    <h1 className="text-[#262626] text-chapter">
                      🧑🏻‍🎓 {chapterList.members.length} {Strings.members}
                    </h1>
                  </div>
                  {/* <div className="flex flex-col md:gap-[5px] w-fit">
                    <p className="text-[#7C7C7C]">
                      {Strings.number_of_followers}
                    </p>
                    <h1 className="text-[#262626] text-chapter">
                      🧑🏻‍🎓 0 {Strings.followers}
                    </h1>
                  </div> */}
                </div>
                <div className="flex flex-col md:gap-[8px] w-full">
                  <button
                    onClick={() => handleJoinRequest(chapterList.chapterId)}
                    className="bg-primary w-full text-white h-[40px] rounded"
                  >
                    {Strings.Join_as_member}
                  </button>
                  {/* <button className="bg-black w-full text-white h-[40px] rounded">
                    {Strings.connect}
                  </button>
                  <button className="bg-[#8f9bb3] w-full text-white h-[40px] rounded">
                    {Strings.message}
                  </button> */}
                </div>
              </div>
            </div>
           { chapterList.adminDetails!= null && <div className="md:w-full md:rounded-xl  bg-white p-[15px]">
              <h1>{Strings.chapter_leadership}</h1>
              <hr className="md:mt-[15px] md:mx-[-15px] text-accent" />
              <div className="md:pt-[15px] md:w-full flex flex-col md:gap-[24px]">
                <div className="flex flex-col md:gap-[5px] w-fit">
                  <p className="text-[#7C7C7C]">{Strings.admin}</p>
                  <h1 className="text-[#262626] text-chapter">
                    {
                      chapterList.adminDetails.adminName 
                    }
                  </h1>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
      {warning && (
        <AreYouSure
          setRequestSuccess={() => setRequestSuccess()}
          requestObject={requestObject}
          usecase="joinrequest"
          setWarning={() => setWarning(false)}
          setShowSuccessModal={() => setShowSuccessModal(true)}
        />
      )}

      {showSuccessModal && (
        // <h1 className=" font-bold text-[500px]">hi this is react</h1>


    
        // <PasswordModalSuccess/>
   
        <ChapterSuccessModal message={"Your Request has been Forwarded to Admin"} />
      )}
    </div>
  );
};

export default ChapterDetails;
