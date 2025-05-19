import { BiArrowBack } from "react-icons/bi";
import { Strings } from "../../Strings/Strings";
import { useLocation, useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";
import StudentListModal from "./StudentListModal";
import AreYouSure from "../Modals/AreYouSure";
import { unAssignChapterAdminBySuperAdmin } from "../../features/users/uploadFile";
import AssignSuccess from "../Modals/AssignSucess";
const AdminChapterView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const chapter = location.state?.chapter;
  const [modalContext, setModalContext] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWarning,setIsWarning] = useState(false)
  const [showSuccessModal,setShowSuccessModal] = useState(false)

  console.log(showSuccessModal,"showSuccessModal")
  
  //const [viewStudentList,setViewStudentList] = useState(false)

  const handleAssign = () => {
    setModalContext("assign")
    setIsModalOpen(true);
  };

  const handleUnAssign=(chapterId,userId)=>{
    console.log("chapterId,userId",chapterId,userId)

    setIsWarning(true)

    // const requestBody={
    //   "superAdminId":1,
    //   "chapterId":chapterId,
    //   "userId":userId
    // }
    // const response= await unAssignChapterAdminBySuperAdmin(JSON.stringify(requestBody))
    // console.log(response,"unassign")
    
    // console.log(chapterId,userId)

  }

  const handleRequestBid = () => {
    setModalContext("request");
    setIsModalOpen(true);
  };
  console.log("adminChapterView", chapter);

  const handleDoc=(chapter)=>{
    console.log(chapter)
   
    navigate("/documentrepository",{state:{chapter}})
  }

  const handleView=(chapter)=>{
    // console.log(chapter)
   
    navigate("/adminchapterview/viewmembers",{state:{chapter}})
  }

  return (
    <div className=" bg-sectionBg  w-full scrollbar-hide overflow-scroll h-[100vh] pr-5">
      <div className={`${isWarning ? "bg-black opacity-10":""}`}>
        <div
          onClick={() => {
            navigate("/chapterslist");
          }}
          className=" md:h-[57px] md:flex  bg-white md:px-[24px] md:py-[16px] md:gap-3 md:rounded-lg my-[20px]  relative top-[107px] md:items-center cursor-pointer"
        >
          <BiArrowBack />
          <h1>{Strings.chapter_details}</h1>
        </div>
        <div className=" md:flex md:items-start gap-[30px] ">
          <div className=" md:w-3/4 md:flex md:flex-col md:gap-[24px]">
          
            <div
              style={{ backgroundImage: `url(${chapter.coverPhotoLink})`,borderRadius:"16px" }}
              className="relative flex items-center justify-between px-[50px]  bg-cover bg-center w-full h-[260px] lg:h-[260px] mt-[100px] bg-[#00000033] opacity-[1] "
            >
              <div className=" h-[260px] w-full absolute left-0 rounded-[16px] opacity-[0.5]"></div>
              <div className="  flex items-center gap-[30px]">
                <img
                  src={chapter.chapterProfilePhotoLink}
                  className="md:w-[138px] md:h-[138px] rounded-[50%]"
                  alt="profile"
                />
                <div>
                  <h1 className="text-[54px] font-bold text-white">
                    {chapter.greekChapterNames}
                  </h1>
                  <h1 className="text-[32px] font-bold text-white">
                    {chapter.chapterName}
                  </h1>
                  <p className="text-[14px] text-white ">
                    <span className=" flex items-center gap-1 ">
                      <MdLocationOn /> {chapter.location}
                    </span>
                  </p>
                </div>
              </div>
              <div className=" z-10 flex items-end h-full pb-[40px]">
                <ul className="flex  gap-2">
                  {chapter.tags.map((each, index) => (
                    <li
                      key={index}
                      className="text-white text-[13px] border px-3 py-1 rounded-[20px]"
                    >
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
                    {Strings.description.toUpperCase()}:
                  </span>
                  <span>{chapter.chapterDescription}</span>
                </h1>
                <br />
                <h1 className=" text-checkBoxTerms text-eyeColor">
                  <span className=" text-primary text-h5 pr-3">
                    {Strings.history}
                  </span>
                  <span>{chapter.chapterHistory}</span>
                </h1>
                <br />
                <h1 className=" text-checkBoxTerms text-eyeColor">
                  <span className=" text-primary text-h5 pr-3">
                    {Strings.mission}
                  </span>
                  <span>{chapter.chapterMission}</span>
                </h1>
                <br />
                <h1 className=" text-checkBoxTerms text-eyeColor"></h1>
              </div>
            </div>
            <div className=" w-[100%] md:flex md:items-start  md:gap-[24px] mb-[20px]">
              <div className=" md:w-full md:h-fit md:rounded-xl bg-white md:p-[15px]">
                <h1>{Strings.chapter_rules}</h1>
                <hr className="md:mt-[15px] md:mx-[-15px] text-accent border-1" />
                <div className=" md:pt-[15px] md:w-full min-w-[120px]  ">
                  <div className=" border-[#d9d9d9] rounded-xl ">
                    <span></span> {chapter.chapterRulesAndGuidelines}
                    {/* {Guidelines.map((each, index) => (
                      <div
                        key={each.id}
                        className=" md:w-full md:h-fit md:px-[24px] md:py-[12px] flex md:items-center md:gap-[10px] border-b-[1px] border-b-[#d9d9d9] "
                      >
                        <span>👉</span>
                        <span>{each.des}</span>
                      </div>
                    ))} */}
                  </div>
                </div>
              </div>
              {/* <div className=" md:w-[500px] md:h-[364px] md:rounded-xl bg-white md:p-[15px]">
                <h1>{Strings.chapter_activities}</h1>
                <hr className="md:mt-[15px] md:mx-[-15px] text-accent" />
                <div className=" md:pt-[15px] md:w-full min-w-[120px]  ">
                  <div className=" ">
                    {Activity.map((each, index) => (
                      <div
                        key={each.id}
                        className=" md:w-full md:h-fit md:px-[24px] md:py-[12px] flex md:items-center md:gap-[10px]  "
                      >
                        <span>⭕</span>
                        <span>{each.des}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className=" md:w-1/4 md:flex md:flex-col md:gap-[24px] ">
            <div className=" md:w-full md:h-[260px] md:rounded-xl bg-white mt-[100px] p-[15px]">
              <div className=" flex flex-col md:gap-[24px] ">
                <div className=" md:w-full flex flex-col md:gap-[27px] ">
                  <div className="flex flex-col  md:gap-[5px]  w-fit">
                    <p className="text-[#7C7C7C]">{Strings.year_established}</p>
                    <h1 className=" text-[#262626] text-chapter">
                      {chapter.establishedYear}
                    </h1>
                  </div>
                  {/* <div className="flex flex-col  md:gap-[5px]  w-fit">
                    <p className=" text-[#7C7C7C]">
                      {Strings.number_of_members}
                    </p>
                    <h1 className=" text-[#262626] text-chapter">🧑🏻‍🎓</h1>
                  </div>
                  <div className="flex flex-col  md:gap-[5px]  w-fit">
                    <p className=" text-[#7C7C7C]">
                      {Strings.number_of_followers}
                    </p>
                    <h1 className=" text-[#262626] text-chapter">
                      🧑🏻‍🎓{Strings.followers}
                    </h1>
                  </div> */}
                </div>
                <div className=" flex flex-col md:gap-[8px] w-full">
                  {chapter.adminDetails === null ? (
                    <button
                      onClick={() => handleAssign(chapter.chapterId)}
                      className=" bg-primary w-full text-white h-[40px] rounded md:py-[8px] md:gap-[10px] text-signup"
                    >
                      {Strings.assign_admin}
                    </button>
                  ):(  <button
                    onClick={() => handleUnAssign(chapter.chapterId,chapter.adminDetails.userId)}
                    className=" bg-primary w-full text-white h-[40px] rounded md:py-[8px] md:gap-[10px] text-signup"
                  >
                    {Strings.un_assign_admin}
                  </button>)}

                  {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                      {/* <div className="bg-white p-6 rounded-lg w-[70%] ml-[200px] mt-[300px] "> */}
                      <StudentListModal
                        chapterId={chapter.chapterId}
                        usecase="assign"
                        // setViewStudentList={()=>setViewStudentList()}
                        closeModal={() => setIsModalOpen(false)}
                        context={modalContext} 
                      />
                      {/* </div> */}
                    </div>
                  )}

                  {/* <button
                    onClick={() => handleRequestBid(chapter.chapterId)}
                    className=" bg-primary w-full text-white h-[40px] rounded md:py-[8px] md:gap-[10px] text-signup"
                  >
                    {Strings.request_for_bid}
                  </button> */}
               <button onClick={()=>handleDoc(chapter)} className=" bg-primary w-full text-white h-[40px] rounded md:py-[8px] md:gap-[10px] text-signup">
                    {Strings.document_repository}
                  </button>
                  <button onClick={()=>handleView(chapter)} className=" bg-primary w-full text-white h-[40px] rounded md:py-[8px] md:gap-[10px] text-signup">
                    {Strings.view_members}
                  </button>
                  {/* <button className=" bg-black w-full text-white h-[40px] rounded  md:py-[8px] md:gap-[10px] text-signup">
                    {Strings.connect}
                  </button>
                  <button className=" bg-[#8f9bb3] w-full text-white h-[40px] rounded md:py-[8px] md:gap-[10px] text-signup">
                    {Strings.message}
                  </button> */}
                </div>
              </div>
            </div>
            {chapter.adminDetails != null && (
              <div className=" md:w-full md:h-[364px] md:rounded-xl bg-white p-[15px]">
                {/* <h1>{Strings.chapter_leadership}</h1> */}
                <h1>Chapter Admin Details</h1>
                <hr className="md:mt-[15px] md:mx-[-15px] text-accent" />
                <div className=" md:pt-[15px] md:w-full flex flex-col md:gap-[24px] ">
                  <div className="flex flex-col  md:gap-[5px]  w-fit">
                    {/* <p className="text-[#7C7C7C]">{Strings.president}</p> */}
                    <p className="text-[#7C7C7C]">Name </p>
                    <h1 className=" text-[red] text-20px font-bold ">
                      {chapter.adminDetails.adminName}
                    </h1>
                    <div className=" my-3">
                      <h1 className="text-[#7C7C7C]">
                        {Strings.university_name}
                      </h1>
                      <p className=" text-[red] py-2 text-20px font-bold ">
                        {chapter.adminDetails.universityName}
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex flex-col  md:gap-[5px]  w-fit">
                  <p className=" text-[#7C7C7C]">{Strings.president}</p>
                  <h1 className=" text-[#262626] text-chapter">
                    {Strings.savannah_nguyen}
                  </h1>
                </div>
                <div className="flex flex-col  md:gap-[5px]  w-fit">
                  <p className=" text-[#7C7C7C]">{Strings.president}</p>
                  <h1 className=" text-[#262626] text-chapter">
                    {Strings.savannah_nguyen}
                  </h1>
                </div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {isWarning && (
        <div className="z-[10] absolute left-[40%] top-[32%]">
          <AreYouSure
            // setIsWarning={()=>setIsWarning}
             usecase="unassign"
             setShowSuccessModal={()=>setShowSuccessModal(true)}
             chapterId={chapter.chapterId}
             userId={chapter.adminDetails.userId}
          
            closeModal={() => setIsWarning(false)}
          />
        </div>
      )}
      {showSuccessModal && <AssignSuccess setShowSuccessModal={()=>setShowSuccessModal(false)} message="Admin Unassigned Successfully" />}
    </div>
  );
};

export default AdminChapterView;
