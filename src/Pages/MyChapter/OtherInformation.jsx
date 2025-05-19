import { Strings } from "../../Strings/Strings"
import { useState } from "react";
import handleScrollToTop from "../../utils/SmoothScroll";



const OtherInformation = ({handleNext,handleBack}) => {
  const [rules,setRules] = useState("")
  const chapterForm= JSON.parse(localStorage.getItem("chapterForm"))
 

  const submitForm=()=>{
    if (!rules.trim()) {
      alert("Please enter the Chapter Rules/Guidelines before proceeding.");
      return;
    }
    handleScrollToTop()
    const lastFormData= {
      ...chapterForm,
      chapterRulesAndGuidelines:rules 

    }


    localStorage.setItem("chapterForm",JSON.stringify(lastFormData))

    handleNext()
  

  }
  console.log(chapterForm)
  return (
    <div className=" w-full flex justify-center items-center">
    <div className="  w-[650px] top-[198px] flex flex-col gap-9">
      {/* Main Container */}
      <div className="w-full bg-white rounded-lg shadow-md p-6">
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {Strings.Chapter_Rules}
          </h2>
          <p className="text-sm text-gray-600">
            {Strings.Chapter_description}
          </p>
        </div>

        {/* Textarea Section */}
        <div className="w-full">
          <textarea 
          required
          value={chapterForm!=null ? chapterForm.chapterRulesAndGuidelines : rules}
          onChange={(e)=>{
            setRules(e.target.value)

          }}
            placeholder="Rules/Guidelines"
            className="w-full min-h-[240px] p-4 border border-gray-200 rounded-lg 
                      focus:ring-black focus:border-black 
                     outline-none resize-none"
          />
        </div>
      </div>

      {/* Button Container */}
      <div className="flex gap-4 w-full">
        <button 
        onClick={handleBack}
          className="flex-1 px-6 py-3 bg-black text-white rounded-lg
                   hover:bg-gray-800 transition-colors duration-200"
        >
          Back
        </button>
        <button  
        type="submit"
        onClick={submitForm}

          className="flex-1 px-6 py-3 bg-red-500 text-white rounded-lg
                   hover:bg-red-600 transition-colors duration-200"
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default OtherInformation;