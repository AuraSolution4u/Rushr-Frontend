import { useState } from "react";
import ChapterBg from "../../assets/MyChapter/ChapterBg.png";
import { uploadFile } from "../../features/users/uploadFile";
import { MdLocationOn } from "react-icons/md";
import ChapterSuccessModal from "../Modals/ChapterSuccessModal";
import { Strings } from "../../Strings/Strings";
import handleScrollToTop from "../../utils/SmoothScroll";
import LoadingSpinner from "../../utils/loading/LoadingSpinner";
import { endPoints } from "../../api/endPoints";
import { baseApi } from "../../api/baseApi";
const ReviewAndPublish = ({ handleBack }) => {
  const [loading, setLoading] = useState(false);
  const chapterForm = JSON.parse(localStorage.getItem("chapterForm"));
  console.log(chapterForm, "phaniiii");
  const [showModal, setShowModal] = useState(false);


  const handleFinalSubmit = () => {
    if (!chapterForm) {
      return;
    }
    const { coverFile, fileImage, ...updateChapterDetails } = chapterForm;

    const finalSubmitChapterDetails = updateChapterDetails;
    console.log(finalSubmitChapterDetails, "phani work");
    handleScrollToTop();
    setLoading(true);

    const response = async () => {
      try {
        const result = await fetch(
         `${baseApi}${endPoints.chapterCreation}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Specify JSON content
            },
            body: JSON.stringify(finalSubmitChapterDetails), // Convert data to JSON string
          }
        );
        if (result.status === 200) {
          // localStorage.removeItem("chapterForm")
        setLoading(false)
          setShowModal(true);
        }

        if (!result.ok) {
          throw new Error(`HTTP error! Status: ${result.status}`);
        }

        const out = await result.json();

        console.log(out);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    response();
  };
  return (
    <div className={`flex justify-center  h-fit bg-sectionBg mt-[30px] `}>
      <div
        className={`flex flex-col w-[829px] gap-[30px] ${
          showModal ? "bg-black opacity-10 blur" : ""
        }`}
      >
        <div
          style={{ backgroundImage: `url(${chapterForm.coverFile})`,borderRadius:"16px" }}
          className=" flex items-center justify-between px-[50px] w-[829px] h-[264px] bg-cover bg-center"
        >
          <div className=" flex items-center gap-[30px]">
            <img
              src={chapterForm.fileImage}
              className="md:w-[138px] md:h-[138px] rounded-[50%]"
              alt="profile"
            />
            <div>
              <h1 className="text-[54px] font-bold text-white">
                {chapterForm.greekChapterNames}
              </h1>
              <h1 className="text-[32px] font-bold text-white">
                {chapterForm.chapterName}
              </h1>
              <p className="text-[14px] text-white">
                <span className=" flex items-center gap-1 ">
                  <MdLocationOn /> {chapterForm.location}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-end h-full pb-[40px]">
            <ul className="flex  gap-2">
              {chapterForm.tags.map((each) => (
                <li className="text-white text-[13px] border px-3 py-1 rounded-[20px]">
                  {each}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" md:pt-[15px] ">
        <h1 className=" text-checkBoxTerms text-eyeColor">
            <span className=" text-primary text-h5">
              {Strings.description}:{" "}
            </span>
            {chapterForm.chapterDescription}
          </h1>
          <br />
          <h1 className=" text-checkBoxTerms text-eyeColor ">
            <span className=" text-primary text-h5 pr-1">{Strings.history}</span>
            {chapterForm.chapterHistory}
          </h1>
          <br />
          <h1 className=" text-checkBoxTerms text-eyeColor ">
            <span className="pr-1 text-primary text-h5">{Strings.mission} </span>
            {chapterForm.chapterMission}
          </h1>
         
         
        </div>
        <hr className="md:mt-[15px] md:mx-[-15px] text-accent border-1" />
        <div className=" flex flex-col gap-[24px] ">
          {/*  */}
          <div className=" md:w-[] md:flex md:items-start md:gap-[24px] ">
            {/* <div className=" md:w-full md:h-[364px] md:rounded-xl bg-white p-[15px]">
              <h1>Chapter Leadership</h1>
              <hr className="md:mt-[15px] md:mx-[-15px] text-accent" />
              <div className=" md:pt-[15px] md:w-full flex flex-col md:gap-[24px] ">
                <div className="flex flex-col  md:gap-[5px]  w-fit">
                  <p className="text-[#7C7C7C]">President</p>
                  <h1 className=" text-[#262626] text-chapter">
                    Savannah Nguyen
                  </h1>
                </div>
                <div className="flex flex-col  md:gap-[5px]  w-fit">
                  <p className=" text-[#7C7C7C]">President</p>
                  <h1 className=" text-[#262626] text-chapter">
                    Savannah Nguyen
                  </h1>
                </div>
                <div className="flex flex-col  md:gap-[5px]  w-fit">
                  <p className=" text-[#7C7C7C]">President</p>
                  <h1 className=" text-[#262626] text-chapter">
                    Savannah Nguyen
                  </h1>
                </div>
              </div>
            </div> */}
            <div className=" md:w-full  md:rounded-xl bg-white p-[15px] ">
              <div className=" flex flex-col md:gap-[24px] ">
                <div className=" md:w-full flex flex-col md:gap-[27px] ">
                  <div className="flex flex-col  md:gap-[5px]  w-fit">
                    <p className="text-[#7C7C7C]">{Strings.year_established}</p>
                    <h1 className=" text-[#262626] text-chapter">
                      {chapterForm.establishedYear}
                    </h1>
                  </div>
                  {/* <div className="flex flex-col  md:gap-[5px]  w-fit">
                    <p className=" text-[#7C7C7C]">Number of Members</p>
                    <h1 className=" text-[#262626] text-chapter">🧑🏻‍🎓36</h1>
                  </div>
                  <div className="flex flex-col  md:gap-[5px]  w-fit">
                    <p className=" text-[#7C7C7C]">Number of Followers</p>
                    <h1 className=" text-[#262626] text-chapter">🧑🏻‍🎓68</h1>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className=" md:w-full md:h-fit md:rounded-xl bg-white md:p-[15px] ">
            <h1>{Strings.chapter_rules}</h1>
            <hr className="md:mt-[15px] md:mx-[-15px] text-accent border-1" />
            <div className=" md:pt-[15px] ">
              <h1 className=" text-checkBoxTerms text-eyeColor">
                {/* <span className=" text-primary text-h5">HISTORY:</span>  */}
                {chapterForm.chapterRulesAndGuidelines}
              </h1>
              <br />
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <button
            onClick={handleBack}
            className="flex-1 px-6 py-3 bg-black text-white rounded-lg
                   hover:bg-gray-800 transition-colors duration-200"
          >
            Back
          </button>
          <button
            onClick={() => handleFinalSubmit()}
            className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg
                   hover:bg-red-600 transition-colors duration-200"
          >
            Publish
          </button>
        </div>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        showModal && (
          <div className=" absolute left-[50%] top-[32%] ">
            <ChapterSuccessModal />
          </div>
        )
      )}
      {/* Button Container */}
    </div>
  );
};

export default ReviewAndPublish;
