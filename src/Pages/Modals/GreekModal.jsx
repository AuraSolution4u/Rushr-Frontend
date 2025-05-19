// import { useState } from "react";
// import ChapterDetails from "../MyChapter/ChapterDetails";
// import { useDispatch } from "react-redux";
// import { addGreekText } from "../../slices/chapterDetailsSlice";
// import useMasterList from "../../utils/useMasterList";

// const GreekModal = ({setSelectedGreek}) => {
//   const dispatch = useDispatch();
//   const [selected, setSelected] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   // const masterList = useMasterList();
//   // if (masterList==null) return
//   // const greekAlphabets = masterList !== null && masterList.responseObject.universityMasterList;

//   const greekAlphabets = [
//     { letter: "𝐀", name: "Alpha" },
//     { letter: "𝐁", name: "Beta" },
//     { letter: "𝚪", name: "Gamma" },
//     { letter: "𝚫", name: "Delta" },
//     { letter: "𝚬", name: "Epsilon" },
//     { letter: "𝐙", name: "Zeta" },
//     { letter: "𝐇", name: "Eta" },
//     { letter: "𝚯", name: "Theta" },
//     { letter: "𝚰", name: "Iota" },
//     { letter: "𝐊", name: "Kappa" },
//     { letter: "𝚲", name: "Lambda" },
//     { letter: "𝐌", name: "Mu" },
//     { letter: "𝐍", name: "Nu" },
//     { letter: "𝚵", name: "Xi" },
//     { letter: "𝚶", name: "Omicron" },
//     { letter: "𝚷", name: "Pi" },
//     { letter: "𝚸", name: "Rho" },
//     { letter: "𝚺", name: "Sigma" },
//     { letter: "𝐓", name: "Tau" },
//     { letter: "𝐘", name: "Upsilon" },
//     { letter: "𝚽", name: "Phi" },
//     { letter: "𝚾", name: "Chi" },
//     { letter: "𝚿", name: "Psi" },
//     { letter: "𝛀", name: "Omega" },
//   ];

//   const handleSelect = (alphabet) => {
//     setSelected(selected + alphabet);
//   };

//   const handleClose = () => {
//     setIsModalOpen(false);
//   };

//   const handleSave = () => {
//     setSelectedGreek(selected)
//     dispatch(addGreekText(selected));
//     const chapterName = selected.split("").map((letter) => {
//       const match = greekAlphabets.find((item) => item.letter === letter);
//         return match ? match.name : letter;
//       })
//       .join(" ");

//     // setFieldValue("chapterName", chapterName);

//     setIsModalOpen(false);
//   };

//   if (!isModalOpen) return null;

//   return (
//     // <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//     //   <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl relative">
//     //     <button
//     //       className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
//     //       onClick={handleClose}
//     //     >
//     //       <svg
//     //         xmlns="http://www.w3.org/2000/svg"
//     //         className="h-6 w-6"
//     //         fill="none"
//     //         viewBox="0 0 24 24"
//     //         stroke="currentColor"
//     //         strokeWidth={2}
//     //       >
//     //         <path
//     //           strokeLinecap="round"
//     //           strokeLinejoin="round"
//     //           d="M6 18L18 6M6 6l12 12"
//     //         />
//     //       </svg>
//     //     </button>

//     //     <h3 className="text-xl  font-semibold text-center mb-4">
//     //       Select Greek Letters

//     //     </h3>
//     //     <hr className="w-full" />
//     //     <div className="grid grid-cols-6 gap-4 mb-6">
//     //       {greekAlphabets.map(({ letter, name }) => (
//     //         // <div
//     //         //   key={letter}
//     //         //   className={` p-3 text-center rounded-lg cursor-pointer transition ${
//     //         //     selected.includes(letter)
//     //         //       ? "bg-[#F2F0F5] "
//     //         //       : "hover:bg-gray-100"
//     //         //   }`}
//     //         //   onClick={() => handleSelect(letter)}
//     //         // >
//     //         //   <div className="text-lg w-[42.1px] h-[40.16px] text-[40.16px] text-[#8F9BB3] font-[400]">{letter}</div>
//     //         //   <div className="text-sm text-[#A6A6A6] text-[13.3px]">{name}</div>
//     //         // </div>
//     //         <div
//     //           key={letter}
//     //           className={`p-3 text-center rounded-lg cursor-pointer transition ${
//     //             selected.includes(letter)
//     //               ? "bg-[#F2F0F5] text-black" // Change text color to black when selected
//     //               : "hover:bg-gray-100 text-[#8F9BB3]" // Default text color
//     //           }`}
//     //           onClick={() => handleSelect(letter)}
//     //         >
//     //           <div className="text-lg w-[42.1px] h-[40.16px] text-[40.16px] font-[400]">
//     //           <h1 className=" text-[40.16px]  font-normal">{letter}</h1>
//     //           </div>
//     //           <div className="text-sm text-[#A6A6A6] text-[13.3px]">{name}</div>
//     //         </div>
//     //       ))}
//     //     </div>
//     //     <div className="text-center mb-6">
//     //       <h4 className="text-lg font-medium mb-2">Chapter Name Preview</h4>
//     //       <hr />
//     //       <div className="text-red-500 text-4xl font-semibold">{selected}</div>
//     //     </div>
//     //     <button
//     //       className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded w-full"
//     //       onClick={handleSave}
//     //     >
//     //       Save
//     //     </button>
//     //   </div>
//     // </div>
//     <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white z-50 h-[450px] rounded-lg shadow-lg p-6 w-full max-w-xl relative">
//         {/* Header Section with Title and Close Button */}
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-xl font-semibold">Select Greek Letters</h3>
//           <button
//             className="text-gray-600 hover:text-gray-900"
//             onClick={handleClose}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//         <hr className="w-full mb-4" />

//         {/* Greek Letter Selection Grid */}
//         <div className="px-[50px] grid grid-cols-6 gap-2 mb-3">
//           {greekAlphabets.map(({ letter, name }) => (
//             <div
//               key={letter}
//               className={` text-center rounded-lg cursor-pointer transition ${
//                 selected.includes(letter)
//                   ? "bg-[#F2F0F5] text-black"
//                   : "hover:bg-gray-100 text-[#8F9BB3]"
//               }`}
//               onClick={() => handleSelect(letter)}
//             >
//               <h1 className="text-[30px]">{letter}</h1>
//               <div className=" text-[#A6A6A6] text-[10px]">{name}</div>
//             </div>
//           ))}
//         </div>

//         {/* Chapter Name Preview Aligned to Left */}
//         <div className="text-left mb-3">
//           <h4 className=" text-[14px]  mb-2 text-[#8F9BB3]">
//             Chapter Name Preview
//           </h4>
//           <hr />
//           <div className="text-red-500 text-lg font-semibold text-center">
//             {selected}
//           </div>
//         </div>

//         {/* Save Button */}
//         <button
//           className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded w-full"
//           onClick={handleSave}
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GreekModal;


import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGreekText } from "../../slices/chapterDetailsSlice";

const GreekModal = ({ setSelectedGreek }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const greekAlphabets = [
    { letter: "𝐀", name: "Alpha" },
    { letter: "𝐁", name: "Beta" },
    { letter: "𝚪", name: "Gamma" },
    { letter: "𝚫", name: "Delta" },
    { letter: "𝚬", name: "Epsilon" },
    { letter: "𝐙", name: "Zeta" },
    { letter: "𝐇", name: "Eta" },
    { letter: "𝚯", name: "Theta" },
    { letter: "𝚰", name: "Iota" },
    { letter: "𝐊", name: "Kappa" },
    { letter: "𝚲", name: "Lambda" },
    { letter: "𝐌", name: "Mu" },
    { letter: "𝐍", name: "Nu" },
    { letter: "𝚵", name: "Xi" },
    { letter: "𝚶", name: "Omicron" },
    { letter: "𝚷", name: "Pi" },
    { letter: "𝚸", name: "Rho" },
    { letter: "𝚺", name: "Sigma" },
    { letter: "𝐓", name: "Tau" },
    { letter: "𝐘", name: "Upsilon" },
    { letter: "𝚽", name: "Phi" },
    { letter: "𝚾", name: "Chi" },
    { letter: "𝚿", name: "Psi" },
    { letter: "𝛀", name: "Omega" },
  ];

  const handleSelect = (letter) => {
    setSelected((prev) => {
      if (prev.includes(letter)) {
      
        return prev.filter((l) => l !== letter);
      } else {
        // Add the letter and maintain order
        return [...prev, letter];
      }
    });
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    setSelectedGreek(selected.join(""));
    dispatch(addGreekText(selected.join("")));
    setIsModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white z-50 h-[480px] rounded-lg shadow-lg p-6 w-full max-w-xl relative">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Select Greek Letters</h3>
          <button className="text-gray-600 hover:text-gray-900" onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <hr className="w-full mb-4" />

        {/* Greek Letter Selection Grid */}
        <div className="px-[50px] grid grid-cols-6 gap-2 mb-3">
          {greekAlphabets.map(({ letter, name }) => {
            const index = selected.indexOf(letter);
            const isSelected = index !== -1;
            return (
              <div
                key={letter}
                className={`relative text-center rounded-lg cursor-pointer transition ${
                  isSelected ? "bg-[#F2F0F5] text-black" : "hover:bg-gray-100 text-[#8F9BB3]"
                }`}
                onClick={() => handleSelect(letter)}
              >
                <h1 className="text-[30px]">{letter}</h1>
                <div className="text-[#A6A6A6] text-[10px]">{name}</div>
                {isSelected && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs w-2 h-2 flex items-center justify-center rounded-full">
                    <p className=" text-[6px]"> {index + 1}</p>
                   
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Chapter Name Preview */}
        <div className="text-left mb-3">
          <h4 className="text-[14px] mb-2 text-[#8F9BB3]">Chapter Name Preview</h4>
          <hr />
          <div className="text-red-500 text-lg font-semibold text-center">
            {selected.join(" ")}
          </div>
        </div>

        {/* Save Button */}
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded w-full" onClick={handleSave}>
          Save
        </button>

      </div>
    </div>
  );
};

export default GreekModal;
