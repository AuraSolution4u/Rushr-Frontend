

////////////////////////////////////////////////
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import uploadImage from "../../assets/svgIcons/uploadImage.svg";
import { useNavigate } from "react-router-dom";
import GreekModal from "../Modals/GreekModal";
import { useSelector } from "react-redux";
import { uploadFile } from "../../features/users/uploadFile";
import { Strings } from "../../Strings/Strings";
import handleScrollToTop from "../../utils/SmoothScroll";
import LoadingSpinner from "../../utils/loading/LoadingSpinner";
import { GM_API_KEY } from "../../utils/Constants";

const ChapterDetails = ({ handleNext }) => {
  const [greekModal, setGreekModal] = useState(false);
  const [selectedGreek, setSelectedGreek] = useState("");
  const [coverFile, setCoverFile] = useState(null);
  const [fileImage, setFileImage] = useState(null);
  
  const [location,setLocation] = useState("")

  const [coverPreview, setCoverPreview] = useState(null);
  const [uploadPreview, setUploadPreview] = useState(null);

  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  //const location_api=`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${}&key='${GM_API_KEY}'&language=en&components=country:us`
  // const selected = useSelector((store) => store.greek.selectGreekName);
  const maxDescriptionLength = 1000;
  const maxShortFieldLength = 200;

  const userDetails = JSON.parse(localStorage.getItem("saveFormData"));

  const userId = userDetails.userId;
  const previousForm = JSON.parse(localStorage.getItem("chapterForm"));

  console.log(selectedGreek, "greek new");
  useEffect(() => {
    if (previousForm) {
      setUploadPreview(previousForm.profilePicName);
      setCoverPreview(previousForm.coverPicName);
    }
  }, []);

  const validationSchema = Yup.object({
    selectGreekName: Yup.string().required("Greek Name is required"),
    chapterName: Yup.string(),
    description: Yup.string()
      .max(
        maxDescriptionLength,
        `Maximum ${maxDescriptionLength} characters allowed`
      )
      .required("Description is required"),
    chapterHistory: Yup.string()
      .max(
        maxShortFieldLength,
        `Maximum ${maxShortFieldLength} characters allowed`
      )
      .required("Chapter History is required"),
    chapterMission: Yup.string()
      .max(
        maxShortFieldLength,
        `Maximum ${maxShortFieldLength} characters allowed`
      )
      .required("Chapter Mission is required"),
    location: Yup.string().required("Location is required"),
    yearEstablished: Yup.string()
      .matches(/^\d{4}$/, "Enter a valid year (e.g., 2023)")
      .required("Year Established is required"),
    tags: Yup.array()
      .of(Yup.string().max(20, "Tag must not exceed 20 characters"))
      .optional(),
  });

  

  const formik = useFormik({
    initialValues: {
      selectGreekName: previousForm != null ? previousForm.greekChapterNames : selectedGreek,
      chapterName: previousForm != null ? previousForm.chapterName : "",
      description: previousForm != null ? previousForm.chapterDescription : "",
      chapterHistory: previousForm != null ? previousForm.chapterHistory : "",
      chapterMission: previousForm != null ? previousForm.chapterMission : "",
      location: previousForm != null ? previousForm.location : "",
      yearEstablished: previousForm != null ? previousForm.establishedYear : "",
      tags: previousForm != null ? previousForm.tags : [],
    },
    validationSchema,

    onSubmit: async (values) => {
      if (!coverPreview || !uploadPreview) {
        alert("Please select a file");
        return;
      }

      const updateChapterDetails = {
        userId: 1,
        directory: "chapter",
        coverFile: coverPreview,
        fileImage: uploadPreview,
        profilePicName: null,
        coverPicName: null,
        greekChapterNames:
          previousForm != null ? previousForm.greekChapterNames : selectedGreek,
        chapterName: values.chapterName,
        chapterHistory: values.chapterHistory,
        chapterMission: values.chapterMission,
        location: values.location,
        establishedYear: values.yearEstablished,
        chapterDescription: values.description,
        tags: values.tags,
      };

   
      setLoading(true);

      try {
        console.log(fileImage, coverFile, "checkfileimg,coverImg");
        if (fileImage) {
          const profileResult = await uploadFile(fileImage, "chapter", userId);

          updateChapterDetails.profilePicName =
            profileResult.data.responseObject.fileName;
        }
        if (coverFile) {
          const coverResult = await uploadFile(coverFile, "chapter", userId);
          updateChapterDetails.coverPicName =
            coverResult.data.responseObject.fileName;
        }

        localStorage.setItem(
          "chapterForm",
          JSON.stringify(updateChapterDetails)
        );
        handleNext();
      
      } catch (error) {
        console.error("Upload failed: ", error);
      }
    },
  });

  
  useEffect(() => {
    if (selectedGreek) {
      formik.setFieldValue("selectGreekName", selectedGreek);
    }
  }, [selectedGreek]); 


  console.log(formik.errors, "satish");
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setFileImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // setUploadPreview(file)
        console.log(reader.result, "uploadimgHandle");
        setUploadPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCoverFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (
      (e.key === "Enter" || e.key === "Tab")  &&
      inputValue.trim() &&
      formik.values.tags.length < 10
    ) {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (!formik.values.tags.includes(newTag)) {
        formik.setFieldValue("tags", [...formik.values.tags, newTag]);
      }
      setInputValue("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    formik.setFieldValue(
      "tags",
      formik.values.tags.filter((tag) => tag !== tagToRemove)
    );
  };

  const handleGreekText = () => {
    setGreekModal(!greekModal);
  };

  return (
    <div className="flex items-start justify-center  bg-gray-100 w-full px-5 h-full text-basicInfoLabelColor">
      <form
        onSubmit={formik.handleSubmit}
        className={`relative top-[30px] flex flex-col items-center gap-[48px] md:w-[950px] w-full md:h-full ${
          loading && "opacity-10"
        }`}
      >
        <h1 className="md:w-[648px] text-left md:h-[20px] md:text-h5 text-checkBoxTerms text-profileSetUpHeading">
          {Strings.chapter_information}
        </h1>

        <div className="flex flex-col items-center gap-[36px] md:w-[648px] md:h-[868px]">
          <div>
            {/* cover image */}
            <div className="flex flex-col gap-[6px] items-center md:w-[394px] w-[232px] h-fit">
              <div className="md:w-[648px] relative md:h-[132px] w-[80px] h-[80px] flex justify-center items-center border border-dashed border-primary  bg-white  rounded-lg">
                <input
                  type="file"
                  accept="image/*"
                  id="coverImage"
                  className="absolute inset-0 md:w-full md:h-full opacity-0 cursor-pointer"
                  onChange={handleCoverImageChange}
                />
                <label
                  htmlFor="coverImage"
                  className="flex justify-end  w-full h-full"
                >
                  {coverPreview ? (
                    <img
                      src={coverPreview}
                      alt="Preview"
                      className="md:h-full md:w-full object-cover rounded"
                    />
                  ) : (
                    <div className=" w-[145px] h-[24px] flex items-center gap-1 m-3 ">
                      <p className=" text-[12px] text-secondary text-center md:w-full">
                        {Strings.upload_cover_photo}
                      </p>

                      <img
                        src={uploadImage}
                        alt="uploadImage"
                        className="h-[18px] w-[19.5px]"
                      />
                    </div>
                  )}
                </label>
              </div>
            </div>
            {/* Image Upload */}
            <div className="flex flex-col relative top-[-50px] gap-[6px] items-center md:w-[394px] w-[232px] h-fit">
              <div className="md:w-[100px] md:h-[100px] w-[80px] h-[80px] flex justify-center items-center border border-primary rounded-full bg-white relative">
                <input
                  type="file"
                  accept="image/*"
                  id="uploadImage"
                  className="absolute inset-0 md:w-full md:h-full opacity-0 cursor-pointer"
                  onChange={handleImageChange}
                />
                <label
                  htmlFor="uploadImage"
                  className="flex justify-center items-center  h-full"
                >
                  {uploadPreview ? (
                    // <img
                    //   src={uploadPreview}
                    //   alt="Preview"
                    //   className="md:h-full w-full object-contain rounded-full"
                    // />
                    <div className="w-[100px] h-[100px]  rounded-full overflow-hidden">
                      <img
                        src={uploadPreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <img
                      src={uploadImage}
                      alt="uploadImage"
                      className="h-[35px] w-[38px]"
                    />
                  )}
                </label>
              </div>
              <p className="text-checkBoxTerms text-secondary text-center md:w-full">
                Chapter Profile Photo
              </p>
            </div>
          </div>

          {/* Select Greek Name */}
          <div className="flex flex-col items-start md:w-full">
            <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
              <p className="text-primary">*</p>
              <label className="text-forgotsmall text-profileSetUpHeading">
                Select Greek Name
              </label>
            </div>
            <input
              type="text"
              autoComplete="off"
              name="selectGreekName"
              placeholder="Select Greek Name"
              className="w-full px-[12px] py-[8px] border rounded-[6px] border-inputBorder"
              value={formik.values.selectGreekName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onClick={handleGreekText}
            />

            {/* {formik.touched.selectGreekName === "" &&
              formik.errors.selectGreekName && (
                <p className="text-red-500 text-sm">
                  {formik.errors.selectGreekName}
                </p>
              )} */}

            {formik.touched.selectGreekName &&
              formik.errors.selectGreekName && (
                <p className="text-red-500 text-sm">
                  {formik.errors.selectGreekName}
                </p>
              )}
            {greekModal && <GreekModal setSelectedGreek={setSelectedGreek} />}
          </div>

          {/* Chapter Name */}
          <div className="flex flex-col items-start w-full">
            <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
              <label className="text-forgotsmall text-profileSetUpHeading">
                Chapter Name
                <span className="text-secondary"> (optional)</span>
              </label>
            </div>
            <input
              type="text"
              name="chapterName"
              placeholder="Enter Chapter Name"
              className="w-full px-[12px] py-[8px] border rounded-[6px] border-inputBorder"
              value={formik.values.chapterName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Description */}
          <div className="relative flex flex-col md:w-[648px] md:h-[142px] w-[313px]">
            <div className="flex gap-[4px] md:w-[648px] md:h-[30px] pb-[8px]">
              <label className="text-forgotsmall text-profileSetUpHeading ">
                Chapter Description*
              </label>
            </div>
            <textarea
              name="description"
              maxLength={maxDescriptionLength}
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="md:w-[648px] w-full h-[112px] gap-[10px] pt-[12px] pr-[12px] pb-[76px] pl-[12px] border border-inputBorder rounded-[8px] scrollbar-hide overflow-hidden resize-none"
              placeholder="Description"
              rows={10}
            />
            {/* <div className="absolute bottom-2 right-4 text-sm text-gray-500">
             
              {formik.values.description &&
                (formik.values.description.length * 1000) / 1000}
            </div> */}
            <div className="absolute bottom-2 right-4 text-sm text-gray-500">
              {formik.values.description
                ? `${formik.values.description.length}/1000`
                : `0/1000`}
            </div>
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500 text-sm">
                {formik.errors.description}
              </p>
            )}
          </div>

          {/* Other fields */}
          {["chapterHistory", "chapterMission"].map((field, index) => (
            <div
              key={index}
              className="relative flex flex-col md:w-[648px] w-[313px]"
            >
              <div className="flex gap-[4px] md:w-[648px] md:h-[30px] pb-[8px]">
                <label className="text-forgotsmall text-profileSetUpHeading">
                  {field === "chapterHistory"
                    ? "Chapter History"
                    : "Chapter Mission"}
                </label>
              </div>
              <textarea
                name={field}
                maxLength={maxShortFieldLength}
                value={formik.values[field]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="md:w-[648px] w-full h-[112px] gap-[10px] pt-[12px] pr-[12px] pb-[76px] pl-[12px] border border-inputBorder rounded-[8px] scrollbar-hide overflow-hidden resize-none"
                placeholder={
                  field === "chapterHistory"
                    ? "Chapter History"
                    : "Chapter Mission"
                }
                rows={10}
              />
              <div className="absolute bottom-2 right-4 text-sm text-gray-500">
                {formik.values[field].length}/{maxShortFieldLength}
              </div>
              {formik.touched[field] && formik.errors[field] && (
                <p className="text-red-500 text-sm">{formik.errors[field]}</p>
              )}
            </div>
          ))}

          {/* Location */}
          <div className="flex flex-col items-start w-full">
            <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
              <label className="text-forgotsmall text-profileSetUpHeading">
                Location <span className="text-secondary">*</span>
              </label>
            </div>
            <input
              type="text"
              name="location"
              placeholder="Enter location or map link"
              className="w-full px-[12px] py-[8px] border rounded-[6px] border-inputBorder"
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.location && formik.errors.location && (
              <p className="text-red-500 text-sm">{formik.errors.location}</p>
            )}
          </div>

          {/* Year Established */}
          <div className="flex flex-col items-start w-full">
            <div className="flex gap-[4px] md:w-full md:h-[30px] pb-[8px]">
              <label className="text-forgotsmall text-profileSetUpHeading">
                Year Established <span className="text-secondary">*</span>
              </label>
            </div>
            <input
              type="text"
              name="yearEstablished"
              placeholder="Year Established"
              className="w-full px-[12px] py-[8px] border rounded-[6px] border-inputBorder"
              value={formik.values.yearEstablished}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.yearEstablished &&
              formik.errors.yearEstablished && (
                <p className="text-red-500 text-sm">
                  {formik.errors.yearEstablished}
                </p>
              )}
          </div>

          {/* Tags */}

          <div className=" flex flex-col md:w-[648px] md:h-[97pxpx] gap-[7px]">
            <div className="flex gap-[4px] md:w-[648px] md:h-[30px] pb-[8px] ">
              <label
                htmlFor="tags"
                className="text-forgotsmall text-[#262626]  text-profileSetUpHeading"
              >
                Tags{" "}
                <span className=" text-secondary text-signupsmall">
                  {" "}
                  (optional)
                </span>
                <span className=" text-secondary text-[12px]">  Type and Press Enter or Tag to add tags</span>
              </label>
            </div>

            <div className="flex flex-wrap  items-center gap-[3px] w-full md:w-[648px] md:h-auto p-2 border  rounded  bg-white">
              {formik.values.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex  justify-between items-center bg-tagsBg text-white px-3 py-1 rounded-sm  h-[22px] gap-3 "
                >
                  <span className=" text-basicInfoLabelColor h-[20px]  text-forgot">
                    {tag}
                  </span>
                  <button
                    type="button"
                    className=" focus:outline-none text-secondary"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    X
                  </button>
                </div>
              ))}
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder={`${
                  formik.values.tags.length > 0
                    ? ""
                    : "Type and press Enter or Tab to add tags"
                }`}
                className="flex-1 border-none text-sm bg-transparent focus:outline-none text-secondary"
              />
            </div>
          
            <p className=" text-secondary">
              Add keywords that represent you (e.g., leadership, community
              service, mentoring).
            </p>
          </div>
          {/* Submit Button */}
          <div className="w-[500px] flex justify-center pb-4 ">
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-md w-full  "
            >
              Next
            </button>
          </div>
        </div>
      </form>
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default ChapterDetails;
