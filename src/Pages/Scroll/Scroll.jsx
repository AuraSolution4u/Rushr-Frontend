// import Img1 from "../../assets/Section1.png";
// import Section2 from "../../assets/Section2.png";
// import Googleplay from "../../assets/GooglePlay.png";
// import Section5 from "../../assets/Section5.png";
// import AppStore from "../../assets/AppStore.png";
// import GroupImg from "../../assets/Group.png";
// import stars from "../../assets/Star.png";
// import contactCalIcon from "../../assets/Call.png";
// import contactImg from "../../assets/Contact.png";

// import { useState } from "react";
// import Studentfeedback1 from "../../assets/Studentfeedback1.png";
// import Studentfeedback2 from "../../assets/Studentfeedback2.png";
// import Studentfeedback3 from "../../assets/Studentfeedback3.png";

// import redline from "../../assets/redline.png";
// import hiw1 from "../../assets/hiw1.png";
// import hiw2 from "../../assets/hiw2.png";
// import hiw3 from "../../assets/hiw3.png";

// import { FaCalendarAlt, FaFileAlt, FaLock } from "react-icons/fa";

// import Security from "../../assets/Security.png";

// import { Strings } from "../../Strings/Strings";
// // import { string } from "yup";

// const Scroll = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const feedbackData = [
//     {
//       quote:
//         "RUSHR has completely transformed how we run our chapter 1 . The calendar and messaging tools save us hours every week",
//       name: "Devon Lane",
//       organization: "Zeta Tau Alpha",
//       image: Studentfeedback1,
//     },
//     {
//       quote:
//         "RUSHR has completely transformed how we run our chapter 2 . The calendar and messaging tools save us hours every week",
//       name: "Marvin McKinney",
//       organization: "Delta Sigma",
//       image: Studentfeedback2,
//     },
//     {
//       quote:
//         "RUSHR has completely transformed how we run our chapter 3. The calendar and messaging tools save us hours every week",
//       name: "Albert Flores",
//       organization: "Alpha Tau",
//       image: Studentfeedback3,
//     },
//     {
//       quote:
//         "RUSHR has completely transformed how we run our chapter 4. The calendar and messaging tools save us hours every week",
//       name: "Emily Rodriguez",
//       organization: "Sigma Kappa",
//       image: Studentfeedback1,
//     },
//     {
//       quote:
//         "RUSHR has completely transformed how we run our chapter 5. The calendar and messaging tools save us hours every week",
//       name: "Jackson Wright",
//       organization: "Phi Beta Kappa",
//       image: Studentfeedback2,
//     },
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex >= feedbackData.length - 3 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? feedbackData.length - 3 : prevIndex - 1
//     );
//   };

//   const getVisibleCards = () => {
//     return [
//       feedbackData[currentIndex],
//       feedbackData[(currentIndex + 1) % feedbackData.length],
//       feedbackData[(currentIndex + 2) % feedbackData.length],
//     ];
//   };
//   return (
//     // Starting page
//     <div className=" h-[100%] w-full relative top-[127px] md:px-[0] ">
//       {/* Banner done */}
//       <div className="h-[603px]  w-full flex md:items-center md:justify-center items-end md:pb-0 pb-[50px]  homeBanner    ">
//         <div className="w-full flex justify-end relative">
//           {/* <div className="flex items-center justify-center  absolute top-[-130px] right-[-150px] vector  h-[142.88px] w-[177px]  "></div> */}
//           <div className="md:text-right text-center h-[100%] px-[30px] text-primeWhite flex flex-col md:items-end items-center md:gap-[45px] gap-[30px] overflow-visible md:mx-0 mx-auto ">
//             <h3 className=" md:text-banner text-h3">
//               {Strings.transform_the_way_your_chapter}
//               <br /> {Strings.communicates_and_grows}
//             </h3>
//             <p className="text-list  ">
//               {Strings.RUSHR_is_the_first}
//               <br /> {Strings.plan_events}
//               <br />
//               {Strings.seamlessly_and_securely}
//             </p>
//             <button className=" rounded-[30px] md:w-[224px]  !h-[42px]  md:!h-[56px] bg-primary text-primeWhite md:px-[24px] md:py-[5px] px-[32px] py-[10px] gap-2   ">
//               {Strings.get_on_our_waitlist}
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Main container for responsive  */}
//       <div className=" flex flex-col overflow-hidden items-center gap-[15px]">
//         {/* section 1 done */}
//         <div
//           id="about"
//           className=" h-[693px] flex justify-center items-center bg-primeWhite"
//         >
//           <div className="w-full md:h-[584px] h-fit flex md:flex-row flex-col justify-center items-center md:gap-[51px] gap-[20px]">
//             <img
//               src={Img1}
//               alt="Mobile Screen"
//               className=" w-[450px] h-fit pl-[60px]"
//             />

//             <div className="flex flex-col justify-center  w-full h-fit md:gap-[69px] gap-[20px]">
//               <div className=" h-[213px] w-full md:gap-[24px] gap-[12px] flex flex-col ">
//                 <div className=" h-[120px] px-[30px]  md:text-left text-center md:gap-[31px] gap-[18px] flex flex-col ">
//                   <h4 className="text-sectionstyle text-sectionHeading">
//                     {Strings.rushr_is_the_first_ever} <br />{" "}
//                     {Strings.fraternity_and_sorority}
//                   </h4>

//                   <h1 className="md:text-smallHeading text-log">
//                     {Strings.Plan_Events}
//                   </h1>
//                 </div>
//                 <p className=" w-[450px] text-sectionText md:text-left text-center text-checkBoxTerms md:w-full md:text-sectionstyle">
//                   {Strings.scroll_text_1}
//                 </p>
//               </div>

//               <div className=" flex flex-col md:items-start items-center gap-[18px] h-[82px] w-full md:w-[312.43px]">
//                 <p className=" text-h5">{Strings.download_our_app}</p>
//                 <div className="flex space-x-4">
//                   <a href="#" className="block">
//                     <img
//                       src={Googleplay}
//                       alt="Google Play"
//                       className="w-auto h-10"
//                     />
//                   </a>
//                   <a href="#" className="block">
//                     <img
//                       src={AppStore}
//                       alt="App Store"
//                       className="w-auto h-10"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* section 2  done*/}

//         <div className="w-full md:h-[693px] flex md:flex-row flex-col md:justify-center items-center md:items-end md:bg-sectionBg md:gap-[51px] gap-[20px] mt-[30px]   ">
//           <div className="md:order-[0] w-full order-1 flex flex-col justify-center items-center md:h-[693px] h-fit md:gap-[69px] gap-[36px] md:none bg-sectionBg py-[20px] my-[-20px] md:my-0 md:py-0 ">
//             <div className=" md:h-[213px]  h-[196px] md:gap-[24px] gap-[18px] flex flex-col items-center md:items-start ">
//               <h4 className="md:text-sectionstyle text-[14px] md:text-left text-center text-sectionHeading">
//                 {Strings.rushr_is_the_first_ever} <br />{" "}
//                 {Strings.fraternity_and_sorority}
//               </h4>

//               <h1 className="md:text-smallHeading  text-log">
//                 {Strings.engage_with_members}
//               </h1>
//               <p className=" text-sectionText md:w-full w-[450px] md:text-left text-center text-checkBoxTerms md:text-sectionstyle ">
//                 {Strings.Scroll_text_2}
//               </p>
//             </div>
//           </div>

//           <div className=" w-full h-[] md:bg-sectionBg">
//             <img
//               src={Section2}
//               alt="Mobile Screen"
//               className=" w-full object-cover md:order-1  order-[0] "
//             />
//           </div>
//         </div>

//         {/* section 3  done*/}
//         <div className="w-full md:h-[693px] h-fit flex justify-center items-center bg-primeWhite">
//           <div className=" md:h-[584px] h-fit flex md:flex-row flex-col justify-center items-center md:gap-[51px] gap-[20px]">
//             <img
//               src={Img1}
//               alt="Mobile Screen"
//               className=" h-fit w-[403px] pl-[60px]"
//             />

//             <div className="flex flex-col justify-center w-full md:h-[364px] h-fit md:gap-[69px] gap-[20px]">
//               <div className=" md:h-[213px] h-fit md:gap-[24px] flex flex-col md:text-left text-center pb-[20px] gap-[24px]">
//                 <h4 className="md:text-sectionstyle text-[14px] text-sectionHeading">
//                   {Strings.rushr_is_the_first_ever} <br />{" "}
//                   {Strings.fraternity_and_sorority}
//                 </h4>

//                 <h1 className="md:text-smallHeading text-log">
//                   {Strings.strengthen_chapter_connections}
//                 </h1>
//                 <p className=" text-sectionText md:w-full w-[450px] md:text-left  text-checkBoxTerms md:text-sectionstyle">
//                   {Strings.scroll_text_3}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* section 4  done*/}

//         <div className=" w-full h-fit md:h-[693px] flex md:flex-row flex-col justify-center md:items-start items-center md:bg-sectionBg  md:gap-[51px] gap-[20px] mt-[30px]">
//           <div className="order-0 w-[50%] flex flex-col justify-center items-center md:h-[693px] h-fit md:gap-[69px] gap-[20px] py-[20px]  my-[-20px] md:my-0 md:py-0   md:none bg-sectionBg">
//             <div className=" md:h-[213px]  h-[196px] md:gap-[24px] gap-[18px] flex flex-col items-center md:items-start">
//               <h4 className="text-sectionstyle text-sectionHeading text-center md:text-left ">
//                 {Strings.rushr_is_the_first_ever} <br />{" "}
//                 {Strings.fraternity_and_sorority}
//               </h4>

//               <h1 className=" md:text-smallHeading text-log">
//                 {Strings.stay_organized}
//               </h1>
//               <p className=" md:w-full w-[450px] text-sectionText md:text-left text-center text-checkBoxTerms md:text-sectionstyle ">
//                 {Strings.scroll_text_12}
//               </p>
//             </div>
//           </div>

//           <div className="md:order-1 md:bg-sectionBg">
//             <img
//               src={Section5}
//               alt="Mobile Screen"
//               className="w-fit md:h-[641px] h-[507px] object-cover "
//             />
//           </div>
//         </div>

//         {/* section 5  done*/}

//         <div className="md:h-[460px] w-full mb-[70px] flex justify-center items-center bg-primeWhite">
//           <div className="relative w-full m-[15px] h-full flex md:flex-row flex-col md:justify-around items-center rounded-[24px] gap-[30px] mt-[60px] bg-primaryOpacity">
//             {/* Security Image */}
//             <img
//               src={Security}
//               alt="Security"
//               className="md:w-[342px] md:h-[336px] w-[206px] h-[201px] object-cover"
//             />

//             {/* Content Section */}
//             <div className="flex flex-col text-center md:items-start items-center md:text-left gap-[24px] md:px-0 md:pb-0 px-[20px] pb-[60px] md:w-[596px] w-full">
//               <h1 className="text-[34px] font-[600] text-[#363636] leading-[42.5px]">
//                 {Strings.seamlessly_and_securely}
//               </h1>
//               <p className="text-[18px] text-[#525252] leading-[28px]">
//                 {Strings.scroll_text_5}
//                 <br />
//                 {Strings.scroll_text_6}
//                 <br />
//                 {Strings.scroll_text_7}
//               </p>
//               <button className="md:w-[201px] w-[193px] gap-[8px] md:h-[44px] h-[42px] flex items-center justify-center rounded-[30px] bg-primary text-white text-base font-semibold border">
//                 {Strings.get_on_our_waitlist}
//               </button>
//               <div className="absolute -bottom-10 left-1/2 h-[78px] w-[503px] transform -translate-x-1/2 bg-white px-12 py-3 rounded-full shadow-lg flex flex-col justify-center items-center gap-4">
//                 <div className="w-[282px] h-[11px]">
//                   <p className="md:text-[16px] text-center font-[400] text-[#807A7A]">
//                     {Strings.streamline_your_chapters_success}
//                   </p>
//                 </div>
//                 <div className="w-[403px] h-[14px]">
//                   <p className="md:text-[20px] text-center font-[400] text-black">
//                     {Strings.connect_organize_empower_with_rushr}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* section 6 */}
//         <div className="bg-black md:w-full md:h-[832px] flex justify-center items-center mt-[10px] p-[40px]">
//           <div className="w-full md:h-[582px] flex md:flex-row flex-col justify-center items-center gap-[30px] md:gap-[37px]">
//             <div className=" md:w-[431px] flex flex-col md:gap-[44px] ">
//               <h1 className="text-primeWhite text-h3 mb-[20px]">
//                 {Strings.built_for_student_leaders_by}{" "}
//                 <span className="text-sectionHead font-light">
//                   {" "}
//                   {Strings.student_leaders}
//                 </span>
//               </h1>
//               <div className="flex flex-col md:gap-[15px]  text-sectionBg text-h4">
//                 <p className="">{Strings.scroll_text_8}</p>
//                 <p className="">{Strings.scroll_text_9}</p>
//                 <p className="">{Strings.scroll_text_10}</p>
//               </div>
//             </div>
//             <img src={GroupImg} className="md:w-[30%] w-[300px]" alt="" />
//             <div className="md:w-[344px] md:h-[358px] flex flex-col md:gap-[50px]">
//               <div className="flex items-center md:gap-[37px]">
//                 <img src={stars} className="md:w-[54px] md:h-[46px]" alt="" />
//                 <div className="flex flex-col md:gap-[8px]">
//                   <p className="text-primary">{Strings.efficiency}</p>
//                   <p className="text-primeWhite">{Strings.scroll_text_11}</p>
//                 </div>
//               </div>
//               <div className="flex items-center md:gap-[37px]">
//                 <img src={stars} className="md:w-[54px] md:h-[46px]" alt="" />
//                 <div className="flex flex-col md:gap-[8px]">
//                   <p className="text-primary">{Strings.community}</p>
//                   <p className="text-primeWhite">{Strings.scroll_text_13}</p>
//                 </div>
//               </div>
//               <div className="flex items-center md:gap-[37px] ">
//                 <img src={stars} className="md:w-[54px] md:h-[46px]" alt="" />
//                 <div className="flex flex-col md:gap-[8px]">
//                   <p className="text-primary">{Strings.growth}</p>
//                   <p className="text-primeWhite">{Strings.scroll_text_14}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* How it Works */}

//         <div className="w-full bg-white flex flex-col items-center py-20">
//           <div className="w-full h-[541.45px] flex flex-col items-center justify-top relative">
//             {/* Text Container */}
//             <div className="w-full h-[96px] text-center z-10">
//               <p className="text-[#148FF9] text-[18px] font-[400]">
//                 {Strings.how_it_works}
//               </p>
//               <p className="text-[34px] sm:text-4xl font-[600]">
//                 {Strings.getting_started_is}{" "}
//                 <span className="text-[#363636] font-[300] text-[34px]">
//                   {Strings.simple_3_Step_process}
//                 </span>
//               </p>
//             </div>

//             <div className="w-[930.49px] h-[541.45px] flex flex-col items-center justify-center relative">
//               {/* Background Container (Now at the Top Center) */}
//               <div className="absolute top-0 flex md:flex-row flex-col items-center justify-between left-1/2 transform -translate-x-1/2 w-[930.49px] bg-white">
//                 <img
//                   src={hiw1}
//                   alt="hiw"
//                   className="w-[251.91px] h-[327.57px]"
//                 />
//                 <img
//                   src={hiw2}
//                   alt="hiw2"
//                   className="w-[251.91px] h-[327.57px]"
//                 />
//                 <img
//                   src={hiw3}
//                   alt="hiw3"
//                   className="w-[251.91px] h-[327.57px]"
//                 />

//                 {/* Add background elements if needed */}
//               </div>

//               {/* Bottom Aligned Image Container */}
//               <div className="absolute bottom-0 left-0 w-[930.49px] h-[385.45px] hidden md:block">
//                 <img src={redline} alt="redline" className="w-full h-full" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Section 7 */}
//         <div
//           id="features"
//           className="w-full bg-white flex flex-col items-center py-20"
//         >
//           {/* Title */}
//           <div className="mb-16">
//             <p className="text-[36px] sm:text-[48px] text-rushrtext font-bold">
//               {Strings.why_rushr}
//             </p>
//           </div>

//           {/* Cards Container */}
//           <div className="w-full max-w-[1244px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//             {/* Card 1 */}
//             <div className="w-[361px] sm:w-[400px] h-[202px] sm:h-[248px] bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto ">
//               {/* Icon */}
//               <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
//                 <FaCalendarAlt className="text-[#0E2D62] text-xl" />
//               </div>
//               {/* Title */}
//               <p className="text-rushrtext font-semibold text-lg mb-2">
//                 {Strings.interactive_calendar}
//               </p>
//               {/* Description */}
//               <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_15}</p>
//             </div>

//             {/* Card 2 */}
//             <div className="w-[361px] sm:w-[400px] h-[202px] sm:h-[248px] bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto ">
//               {/* Icon */}
//               <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
//                 <FaLock className="text-[#0E2D62] text-xl" />
//               </div>
//               {/* Title */}
//               <p className="text-[#0E2D62] font-semibold text-lg mb-2">
//                 {Strings.secure_messaging}
//               </p>
//               {/* Description */}
//               <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_16}</p>
//             </div>

//             {/* Card 3 */}
//             <div className="w-[361px] sm:w-[400px] h-[202px] sm:h-[248px] bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto">
//               {/* Icon */}
//               <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
//                 <FaFileAlt className="text-[#0E2D62] text-xl" />
//               </div>
//               {/* Title */}
//               <p className="text-[#0E2D62] font-semibold text-lg mb-2">
//                 {Strings.centralized_document_hub}
//               </p>
//               {/* Description */}
//               <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_17}</p>
//             </div>

//             {/* Card 4 */}
//             <div className="w-[361px] sm:w-[400px] h-[202px] sm:h-[248px] bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto">
//               {/* Icon */}
//               <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
//                 <FaCalendarAlt className="text-[#0E2D62] text-xl" />
//               </div>
//               {/* Title */}
//               <p className="text-[#0E2D62] font-semibold text-lg mb-2">
//                 {Strings.public_event_discovery}
//               </p>
//               {/* Description */}
//               <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_18}</p>
//             </div>

//             {/* Card 5 */}
//             <div className="w-[361px] sm:w-[400px] h-[202px] sm:h-[248px] bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto">
//               {/* Icon */}
//               <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
//                 <FaLock className="text-[#0E2D62] text-xl" />
//               </div>
//               {/* Title */}
//               <p className="text-[#0E2D62] font-semibold text-lg mb-2">
//                 {Strings.alumni_engagement_tools}
//               </p>
//               {/* Description */}
//               <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_19}</p>
//             </div>

//             {/* Card 6 */}
//             <div className="w-[361px] sm:w-[400px] h-[202px] sm:h-[248px] bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto">
//               {/* Icon */}
//               <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
//                 <FaFileAlt className="text-[#0E2D62] text-xl" />
//               </div>
//               {/* Title */}
//               <p className="text-[#0E2D62] font-semibold text-lg mb-2">
//                 {Strings.customizable_profiles}
//               </p>
//               {/* Description */}
//               <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_20}</p>
//             </div>
//           </div>
//         </div>
//         {/* Section 8 */}

//         <div className="md:h-[693px] h-fit flex justify-center items-center bg-primeWhite">
//           <div className="w-full h-[553px] gap-[58px] flex flex-col items-center">
//             {/* Header */}
//             <div className="w-full justify-center flex items-center h-[34px]">
//               <p className="md:text-[48px] text-[30px] text-[#0E2D62] font-bold text-center">
//                 {Strings.students_feedback}
//               </p>
//             </div>

//             {/* Carousel Container */}
//             <div id="testimonials" className="w-full h-[461px] relative">
//               <div className="w-full h-[461px] mx-auto">
//                 {/* Cards Container with Gray Background */}
//                 <div className="relative h-[461px] flex gap-6 justify-center p-8 rounded-[18px] transition-transform duration-500 ease-in-out transform">
//                   {/* Grey Background for the left and right sides */}
//                   <div className="absolute top-0 left-0 w-[50%] h-full bg-[#F6F6F6] z-0 rounded-l-[18px]"></div>
//                   <div className="absolute top-0 right-0 w-[50%] h-full bg-[#F6F6F6] z-0 rounded-r-[18px]"></div>

//                   {/* Feedback Cards */}
//                   <div className="flex gap-6 z-10 w-full">
//                     {getVisibleCards().map((feedback, index) => (
//                       <div
//                         key={index}
//                         className="w-[388px] h-[221px] bg-white p-8 rounded-[12px] shadow-2xl hover:scale-105 transition-transform duration-300"
//                       >
//                         <p className="text-[#525252] text-sm mb-8">
//                           {feedback.quote}
//                         </p>
//                         <div className="flex items-center gap-4">
//                           <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
//                             <img
//                               src={feedback.image}
//                               alt={feedback.name}
//                               className="w-full h-full object-cover"
//                             />
//                           </div>
//                           <div>
//                             <p className="font-semibold text-[#363636] text-base">
//                               {feedback.name}
//                             </p>
//                             <p className="text-[#525252] text-sm">
//                               {feedback.organization}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Navigation */}
//                   <div className="absolute left-1/2 bottom-[40px] transform -translate-x-1/2 flex items-center gap-4 sm:gap-2 z-20">
//                     <button
//                       onClick={handlePrev}
//                       className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 bg-white hover:bg-[#E02239] transition-colors"
//                     >
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 20 20"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M12.5 16.6667L7.5 10L12.5 3.33334"
//                           stroke="#D1D1D1"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </button>
//                     <button
//                       onClick={handleNext}
//                       className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 bg-white hover:bg-[#E02239] transition-colors"
//                     >
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 20 20"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M7.5 16.6667L12.5 10L7.5 3.33334"
//                           stroke="#D1D1D1"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* contact section */}
//         <div className=" flex justify-center">
//           <div className="w-full md:h-[930px] flex md:flex-row flex-col justify-center  md:gap-[78px] p-[30px]">
//             <div className=" md:order-1 order-2 md:w-[50%] md:h-[930px] flex flex-col md:gap-[10px]">
//               <div className="flex flex-col md:gap-[42px]  md:h-[830px]">
//                 <h1 className=" text-[36px] font-bold text-[#0E2D62] md:h-[110px]">
//                   {Strings.ready_to_join_rushr}{" "}
//                   <span className="text-student font-thin ">
//                     {Strings.student_leaders}
//                   </span>
//                 </h1>
//                 <form className="flex flex-col md:h-[555px] md:gap-[24px]">
//                   <div className=" relative md:w-full md:h-[66px]">
//                     <div className=" absolute left-[20px] top-[20px]">
//                       <label
//                         htmlFor="name"
//                         className="text-sectionText md:text-sectionstyle"
//                       >
//                         {Strings.name}
//                         <span className="text-primary">{Strings.astersik}</span>
//                       </label>
//                     </div>
//                     <input
//                       type="text"
//                       className="w-full border-b-2 rounded-l-lg rounded-r-lg md:h-[66px] bg-primeWhite text-sectionText px-[20px] py-[21px] "
//                     />
//                   </div>
//                   <div className=" relative md:h-[66px]">
//                     <div className=" absolute left-[20px] top-[20px]">
//                       <label
//                         htmlFor="name"
//                         className="text-sectionText md:text-sectionstyle"
//                       >
//                         {Strings.email}{" "}
//                         <span className="text-primary">{Strings.astersik}</span>
//                       </label>
//                     </div>
//                     <input
//                       type="text"
//                       className=" w-full md:h-[66px] border-b-2 rounded-l-lg rounded-r-lg bg-primeWhite text-sectionText px-[20px] py-[21px] "
//                     />
//                   </div>
//                   <div className=" relative md:h-[66px]">
//                     <div className=" absolute left-[20px] top-[20px]">
//                       <label
//                         htmlFor="name"
//                         className="text-sectionText md:text-sectionstyle"
//                       >
//                         {Strings.phone}{" "}
//                         <span className="text-primary">{Strings.astersik}</span>
//                       </label>
//                     </div>
//                     <input
//                       type="text"
//                       className=" w-full md:h-[66px] border-b-2 rounded-l-lg rounded-r-lg bg-primeWhite text-sectionText px-[20px] py-[21px] "
//                     />
//                   </div>
//                   <div className=" relative  md:h-[66px]">
//                     <div className=" absolute left-[20px] top-[20px]">
//                       <label
//                         htmlFor="name"
//                         className="text-sectionText md:text-sectionstyle"
//                       >
//                         {Strings.organization_chapter}
//                       </label>
//                     </div>
//                     <input
//                       type="text"
//                       className="w-full md:h-[66px] border-b-2 rounded-l-lg rounded-r-lg bg-primeWhite text-sectionText px-[20px] py-[21px] "
//                     />
//                   </div>
//                   <div className=" relative  md:h-[66px]">
//                     <div className=" absolute left-[20px] top-[20px]">
//                       <label
//                         htmlFor="name"
//                         className="text-sectionText md:text-sectionstyle"
//                       >
//                         {Strings.message}
//                       </label>
//                     </div>
//                     <input
//                       type="text"
//                       className="w-full md:h-[66px] border-b-2 rounded-l-lg rounded-r-lg bg-primeWhite text-sectionText px-[20px] py-[21px] "
//                     />
//                   </div>
//                   <div className=" md:h-[22px] flex justify-between md:py-0 py-4">
//                     <p className="text-checkBoxTerms">
//                       {Strings.preferred_method_of_contact}{" "}
//                     </p>
//                     <div className="flex items-center gap-[24px] ">
//                       <div className="flex items-center gap-[8px]">
//                         <input type="checkbox" name="contact" id="phone" />
//                         <label htmlFor="phone" className="text-sectionText">
//                           {Strings.phone}
//                         </label>
//                       </div>
//                       <div className="flex items-center gap-[8px]">
//                         <input type="checkbox" name="contact" id="email" />
//                         <label htmlFor="email" className="text-sectionText">
//                           {Strings.email}
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <button
//                     type="submit"
//                     className=" md:h-[66px] md:gap-[10px] bg-primary text-primeWhite rounded-[30px] px-[32px] py-[16px]"
//                   >
//                     {Strings.SUBMIT_YOUR_INQUIRY}
//                   </button>
//                 </form>
//               </div>
//               {/* contact Num */}
//               <div className=" md:h-[40px] flex items-center justify-between md:py-0 py-8">
//                 <div className="md:w-[159px] md:h-[40px] flex items-center md:gap-[15px]">
//                   <img src={contactCalIcon} alt="" />
//                   <p className="text-[#0E2D62]">
//                     {Strings.PHONE} <br /> <span>{Strings.Phone_No}</span>
//                   </p>
//                 </div>
//                 <div className="md:w-[159px] md:h-[40px] flex items-center md:gap-[15px]">
//                   <img src={contactCalIcon} alt="" />
//                   <p className="text-[#0E2D62]">
//                     {Strings.EMAIL} <br /> <span>{Strings.Email_Id}</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <img
//               className="md:w-[50%]  h-fit md:h-[878px] rounded-[18px] md:order-2"
//               src={contactImg}
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Scroll;


// import Img1 from "../../assets/Section1.png";
// import Section2 from "../../assets/Section2.png";
// import Googleplay from "../../assets/GooglePlay.png";
// import Section5 from "../../assets/Section5.png";
// import AppStore from "../../assets/AppStore.png";
// import GroupImg from "../../assets/Group.png";
// import stars from "../../assets/Star.png";
// import contactCalIcon from "../../assets/Call.png";
// import contactImg from "../../assets/Contact.png";
 
// import { useState } from "react";
// import Studentfeedback1 from "../../assets/Studentfeedback1.png";
// import Studentfeedback2 from "../../assets/Studentfeedback2.png";
// import Studentfeedback3 from "../../assets/Studentfeedback3.png";
 
// import redline from "../../assets/redline.png";
// import hiw1 from "../../assets/hiw1.png";
// import hiw2 from "../../assets/hiw2.png";
// import hiw3 from "../../assets/hiw3.png";
 
// import { FaCalendarAlt, FaFileAlt, FaLock } from "react-icons/fa";
 
// import Security from "../../assets/Security.png";
// // import {
// //   Tagline_4,
// //   Tagline_5,
// //   Tagline_11,
// //   Tagline_13,
// //   Para_3,
// // } from "../../utils/String";
 
// import { Strings } from "../../Strings/Strings";
// // import { string } from "yup";
 
// const Scroll = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
 
//   const feedbackData = [
//     {
//       quote:
//         "RUSHR has completely transformed how we run our chapter 1 . The calendar and messaging tools save us hours every week",
//       name: "Devon Lane",
//       organization: "Zeta Tau Alpha",
//       image: Studentfeedback1,
//     },
//     {
//       quote:
//         "RUSHR has completely transformed how we run our chapter 2 . The calendar and messaging tools save us hours every week",
//       name: "Marvin McKinney",
//       organization: "Delta Sigma",
//       image: Studentfeedback2,
//     },
//     {
//       quote:
//         "RUSHR has completely transformed how we run our chapter 3. The calendar and messaging tools save us hours every week",
//       name: "Albert Flores",
//       organization: "Alpha Tau",
//       image: Studentfeedback3,
//     },
//     {
//       quote:
//         "RUSHR has completely transformed how we run our chapter 4. The calendar and messaging tools save us hours every week",
//       name: "Emily Rodriguez",
//       organization: "Sigma Kappa",
//       image: Studentfeedback1,
//     },
//     {
//       quote:
//         "RUSHR has completely transformed how we run our chapter 5. The calendar and messaging tools save us hours every week",
//       name: "Jackson Wright",
//       organization: "Phi Beta Kappa",
//       image: Studentfeedback2,
//     },
//   ];
 
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex >= feedbackData.length - 3 ? 0 : prevIndex + 1
//     );
//   };
 
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? feedbackData.length - 3 : prevIndex - 1
//     );
//   };
 
//   const getVisibleCards = () => {
//     return [
//       feedbackData[currentIndex],
//       feedbackData[(currentIndex + 1) % feedbackData.length],
//       feedbackData[(currentIndex + 2) % feedbackData.length],
//     ];
//   };
//   return (
//     // Starting page
//     <div className=" h-[100%] w-full sm:min-w-fit relative top-[127px] md:px-[0]  ">
//     {/* Banner done */}
//     <div className="h-[603px]  w-full flex md:items-center md:justify-center items-end md:pb-0 pb-[50px]  homeBanner    ">
//       <div className="w-full flex justify-end relative">
//         {/* <div className="flex items-center justify-center  absolute top-[-130px] right-[-150px] vector  h-[142.88px] w-[177px]  "></div> */}
//         <div className="md:text-right text-center h-[100%] px-[30px] text-primeWhite flex flex-col md:items-end items-center md:gap-[45px] gap-[30px] overflow-visible md:mx-0 mx-auto ">
//           <h3 className=" md:text-banner text-h3">
//             {Strings.transform_the_way_your_chapter}
//             <br /> {Strings.communicates_and_grows}
//           </h3>
//           <p className="text-list  ">
//             {Strings.RUSHR_is_the_first}
//             <br /> {Strings.plan_events}
//             <br />
//             {Strings.seamlessly_and_securely}
//           </p>
//           <button className=" rounded-[30px] md:w-[224px]  !h-[42px]  md:!h-[56px] bg-primary text-primeWhite md:px-[24px] md:py-[5px] px-[32px] py-[10px] gap-2   ">
//             {Strings.get_on_our_waitlist}
//           </button>
//         </div>
//       </div>
//     </div>
//     {/* Main container for responsive  */}
//     <div className=" flex flex-col overflow-hidden w-full   items-center gap-[15px]">
//       {/* section 1 done */}
//       <div
//         id="about"
//         className=" h-[693px] px-[130px] flex justify-center items-center bg-primeWhite"
//       >
//         <div className="w-full md:h-[584px] h-fit flex md:flex-row flex-col justify-center items-center md:gap-[51px] gap-[20px]">
//           <img
//             src={Img1}
//             alt="Mobile Screen"
//             className=" w-[450px] h-fit pl-[60px]"
//           />

//           <div className="flex flex-col justify-center  w-full h-fit md:gap-[69px] gap-[20px]">
//             <div className=" h-[213px] w-full md:gap-[24px] gap-[12px] flex flex-col ">
//               <div className=" h-[120px] px-[50px]  md:text-left text-center md:gap-[31px] gap-[18px] flex flex-col ">
//                 <h4 className="text-sectionstyle text-sectionHeading">
//                   {Strings.rushr_is_the_first_ever} <br />{" "}
//                   {Strings.fraternity_and_sorority}
//                 </h4>

//                 <h1 className="md:text-smallHeading text-log ">
//                   {Strings.Plan_Events}
//                 </h1>
//               </div>
//               <p className=" w-[450px] text-sectionText md:text-left text-center text-checkBoxTerms md:w-full md:text-sectionstyle px-[50px]">
//                 {Strings.scroll_text_1}
//               </p>
//             </div>

//             <div className=" flex flex-col md:items-start items-center gap-[18px] h-[82px] w-full md:w-[312.43px] px-[50px]">
//               <p className=" text-h5">{Strings.download_our_app}</p>
//               <div className="flex space-x-4">
//                 <a href="#" className="block">
//                   <img
//                     src={Googleplay}
//                     alt="Google Play"
//                     className="w-auto h-10"
//                   />
//                 </a>
//                 <a href="#" className="block">
//                   <img
//                     src={AppStore}
//                     alt="App Store"
//                     className="w-auto h-10"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* section 2  done*/}

//       <div className="w-full md:h-[693px] px-[130px] flex md:flex-row flex-col md:justify-center items-center md:items-end md:bg-sectionBg md:gap-[51px] gap-[20px] mt-[30px]    ">
//         <div className="md:order-[0]  w-full order-1 flex flex-col justify-center items-center md:h-[693px] h-fit md:gap-[69px] gap-[36px] md:none  py-[20px] my-[-20px] md:my-0 md:py-0 ">
//           <div className=" md:h-[213px]  h-[196px] md:gap-[24px] gap-[18px] flex flex-col items-center md:items-start  ">
//             <h4 className="md:text-sectionstyle text-[14px] md:text-left text-center text-sectionHeading px-[50px]">
//               {Strings.rushr_is_the_first_ever} <br />{" "}
//               {Strings.fraternity_and_sorority}
//             </h4>

//             <h1 className="md:text-smallHeading  px-[50px] text-log">
//               {Strings.engage_with_members}
//             </h1>
//             <p className=" text-sectionText md:w-full px-[50px] w-[450px] md:text-left text-center text-checkBoxTerms md:text-sectionstyle ">
//               {Strings.Scroll_text_2}
//             </p>
//           </div>
//         </div>

//         <div className=" md:bg-sectionBg ">
//           <img
//             src={Section2}
//             alt="Mobile Screen"
            
//             className=" object-cover max-w-fit md:h-[641px] h-[507px]  order-[0]"
//           />
//         </div>
//       </div>

//       {/* section 3  done*/}
//       <div className="w-full md:h-[693px] px-[130px] h-fit flex justify-center items-center bg-primeWhite">
//         <div className=" md:h-[584px] h-fit flex md:flex-row flex-col justify-center items-center md:gap-[51px] gap-[20px]">
//           <img
//             src={Img1}
//             alt="Mobile Screen"
//             className=" h-fit w-[403px] pl-[60px]"
//           />

//           <div className="flex flex-col justify-center w-full md:h-[364px] h-fit md:gap-[69px] gap-[20px]">
//             <div className=" md:h-[213px] h-fit md:gap-[24px] flex flex-col md:text-left text-center pb-[20px] gap-[24px]">
//               <h4 className="md:text-sectionstyle text-[14px] text-sectionHeading px-[50px]">
//                 {Strings.rushr_is_the_first_ever} <br />{" "}
//                 {Strings.fraternity_and_sorority}
//               </h4>
//           <div className="flex flex-col justify-center w-full md:h-[364px] h-fit md:gap-[69px] gap-[20px]">
//             <div className=" md:h-[213px] h-fit md:gap-[24px] flex flex-col md:text-left text-center pb-[20px] gap-[24px]">
//               <h4 className="md:text-sectionstyle text-[14px] text-sectionHeading px-[50px]">
//                 {Strings.rushr_is_the_first_ever} <br />{" "}
//                 {Strings.fraternity_and_sorority}
//               </h4>

//               <h1 className="md:text-smallHeading text-log px-[50px]">
//                 {Strings.strengthen_chapter_connections}
//               </h1>
//               <p className=" text-sectionText md:w-full w-[450px] px-[50px] md:text-left  text-checkBoxTerms md:text-sectionstyle">
//                 {Strings.scroll_text_3}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//               <h1 className="md:text-smallHeading text-log px-[50px]">
//                 {Strings.strengthen_chapter_connections}
//               </h1>
//               <p className=" text-sectionText md:w-full w-[450px] px-[50px] md:text-left  text-checkBoxTerms md:text-sectionstyle">
//                 {Strings.scroll_text_3}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

 
//       {/* section 4  done*/}

//       <div className=" w-full h-fit md:h-[693px] px-[130px] flex md:flex-row flex-col justify-center md:items-start items-center md:bg-sectionBg  md:gap-[51px] gap-[20px] mt-[30px]">
//         <div className="order-0 w-[50%] flex flex-col justify-center items-center md:h-[693px] h-fit md:gap-[69px] gap-[20px] py-[20px]  my-[-20px] md:my-0 md:py-0   md:none bg-sectionBg">
//           <div className=" md:h-[213px]  h-[196px] md:gap-[24px] gap-[18px] flex flex-col items-center md:items-start">
//             <h4 className="text-sectionstyle text-sectionHeading text-center md:text-left  px-[50px]">
//               {Strings.rushr_is_the_first_ever} <br />{" "}
//               {Strings.fraternity_and_sorority}
//             </h4>

//             <h1 className=" md:text-smallHeading text-log px-[50px]">
//               {Strings.stay_organized}
//             </h1>
//             <p className=" md:w-full px-[50px] w-[450px] text-sectionText md:text-left text-center text-checkBoxTerms md:text-sectionstyle ">
//               {Strings.scroll_text_12}
//             </p>
//           </div>
//         </div>
//             <h1 className=" md:text-smallHeading text-log px-[50px]">
//               {Strings.stay_organized}
//             </h1>
//             <p className=" md:w-full px-[50px] w-[450px] text-sectionText md:text-left text-center text-checkBoxTerms md:text-sectionstyle ">
//               {Strings.scroll_text_12}
//             </p>
//           </div>
//         </div>

//         <div className="md:order-1 md:bg-sectionBg">
//           <img
//             src={Section5}
//             alt="Mobile Screen"
//             className="w-fit md:h-[641px] h-[507px] object-cover "
//           />
//         </div>
//       </div>
//         <div className="md:order-1 md:bg-sectionBg">
//           <img
//             src={Section5}
//             alt="Mobile Screen"
//             className="w-fit md:h-[641px] h-[507px] object-cover "
//           />
//         </div>
//       </div>

//       {/* section 5  done*/}
//       {/* section 5  done*/}

//       <div className="md:h-[460px] w-full px-[130px] mb-[70px] flex justify-center items-center bg-primeWhite">
//         <div className="relative w-full m-[15px] h-full flex md:flex-row flex-col md:justify-around items-center rounded-[24px] gap-[30px] mt-[60px] bg-primaryOpacity">
//           {/* Security Image */}
//           <img
//             src={Security}
//             alt="Security"
//             className="md:w-[342px] md:h-[336px] w-[206px] h-[201px] object-cover"
//           />

//           {/* Content Section */}
//           <div className="flex flex-col text-center md:items-start items-center md:text-left gap-[24px] md:px-0 md:pb-0 px-[20px] pb-[60px] md:w-[596px] w-full">
//             <h1 className="text-[34px] font-[600] text-[#363636] leading-[42.5px]">
//               {Strings.seamlessly_and_securely}
//             </h1>
//             <p className="text-[18px] text-[#525252] leading-[28px]">
//               {Strings.scroll_text_5}
//               <br />
//               {Strings.scroll_text_6}
//               <br />
//               {Strings.scroll_text_7}
//             </p>
//             <button className="md:w-[201px] w-[193px] gap-[8px] md:h-[44px] h-[42px] flex items-center justify-center rounded-[30px] bg-primary text-white text-base font-semibold border">
//               {Strings.get_on_our_waitlist}
//             </button>
//             <div className="absolute -bottom-10 left-1/2 h-[78px] w-[503px] transform -translate-x-1/2 bg-white px-12 py-3 rounded-full shadow-lg flex flex-col justify-center items-center gap-4">
//               <div className="w-[282px] h-[11px]">
//                 <p className="md:text-[16px] text-center font-[400] text-[#807A7A]">
//                   {Strings.streamline_your_chapters_success}
//                 </p>
//               </div>
//               <div className="w-[403px] h-[14px]">
//                 <p className="md:text-[20px] text-center font-[400] text-black">
//                   {Strings.connect_organize_empower_with_rushr}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* section 6 */}
//       <div className="bg-black md:w-full px-[130px]  md:h-[832px] flex justify-center items-center mt-[10px] p-[40px]">
//         <div className="w-full md:h-[582px] flex md:flex-row flex-col justify-center items-center gap-[30px] md:gap-[37px]">
//           <div className=" md:w-[431px] flex flex-col md:gap-[44px] ">
//             <h1 className="text-primeWhite text-h3 mb-[20px]">
//               {Strings.built_for_student_leaders_by}{" "}
//               <span className="text-sectionHead font-light">
//                 {" "}
//                 {Strings.student_leaders}
//               </span>
//             </h1>
//             <div className="flex flex-col md:gap-[15px]  text-sectionBg text-h4">
//               <p className="">{Strings.scroll_text_8}</p>
//               <p className="">{Strings.scroll_text_9}</p>
//               <p className="">{Strings.scroll_text_10}</p>
//             </div>
//           </div>
//           <img src={GroupImg} className="md:w-[30%] w-[300px]" alt="" />
//           <div className="md:w-[344px] md:h-[358px] flex flex-col md:gap-[50px]">
//             <div className="flex items-center md:gap-[37px]">
//               <img src={stars} className="md:w-[54px] md:h-[46px]" alt="" />
//               <div className="flex flex-col md:gap-[8px] px-6">
//                 <p className="text-primary">{Strings.efficiency}</p>
//                 <p className="text-primeWhite">{Strings.scroll_text_11}</p>
//               </div>
//             </div>
//             <div className="flex items-center md:gap-[37px]">
//               <img src={stars} className="md:w-[54px] md:h-[46px]" alt="" />
//               <div className="flex flex-col md:gap-[8px] px-6">
//                 <p className="text-primary ">{Strings.community}</p>
//                 <p className="text-primeWhite">{Strings.scroll_text_13}</p>
//               </div>
//             </div>
//             <div className="flex items-center md:gap-[37px] ">
//               <img src={stars} className="md:w-[54px] md:h-[46px]" alt="" />
//               <div className="flex flex-col md:gap-[8px] px-6">
//                 <p className="text-primary">{Strings.growth}</p>
//                 <p className="text-primeWhite">{Strings.scroll_text_14}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* How it Works */}
//       {/* How it Works */}

//       <div className="w-full bg-white  px-[130px] flex flex-col items-center py-20">
//         <div className="w-full h-[541.45px] flex flex-col items-center justify-top relative">
//           {/* Text Container */}
//           <div className="w-full h-[96px] text-center z-10">
//             <p className="text-[#148FF9] text-[18px] font-[400] mb-4">
//               {Strings.how_it_works}
//             </p>
//             <p className="text-[34px] sm:text-4xl font-[600]">
//               {Strings.getting_started_is}{" "}
//               <span className="text-[#363636] font-[300] text-[34px]">
//                 {Strings.simple_3_Step_process}
//               </span>
//             </p>
//           </div>

//           <div className="w-[930.49px] h-[541.45px] flex flex-col items-center justify-center relative">
//             {/* Background Container (Now at the Top Center) */}
//             <div className="absolute top-0 flex md:flex-row flex-col items-center justify-between left-1/2 transform -translate-x-1/2 w-[930.49px] bg-white">
//             <div className="flex flex-col items-center ">
//     <img src={hiw1} alt="hiw1" className="w-[201.91px] h-[227.57px] " />
//     <h4 className="text-xl font-bold  ">1 <span>{Strings.Sign_Up_head}</span></h4>
//     <p className="text-gray-400 text-sm ml-10 ">{Strings.signup_step1_text}</p>
//   </div>


//   <div className="flex flex-col items-center ">
//   <h4 className="text-xl font-bold  mt-[100px] pl-[120px] align-middle">2 <span>{Strings.Set_Up_Your_Chapter}</span></h4>
//   <p className="text-gray-400 text-sm pl-[120px]">{Strings.signup_step2_text}</p>
//     <img src={hiw2} alt="hiw3" className="w-[201.91px] h-[227.57px] ml-[80px] " />
    
//   </div>


//         <div className="flex flex-col items-center  md:text-left">
//           <img src={hiw3} alt="hiw3" className="w-[201.91px] h-[227.57px]pl-[120px] " />
//           <h4 className="text-xl font-extrabold ml-[100px]">3 <span>{Strings.Connect_and_Collaborate}</span></h4>
//           <p className="text-gray-400 text-sm align-middle ml-[100px] px-10 ">{Strings.signup_step3_text}</p>
//         </div>
//               {/* Add background elements if needed */}
//             </div>

//             {/* Bottom Aligned Image Container */}
//             <div className="absolute bottom-0 left-0 w-[930.49px] h-[385.45px] hidden md:block">
//               <img src={redline} alt="redline" className="w-full h-full" />
//             </div>
//           </div>
//         </div>
//       </div>
//             {/* Bottom Aligned Image Container */}
//             <div className="absolute bottom-0 left-0 w-[930.49px] h-[385.45px] hidden md:block">
//               <img src={redline} alt="redline" className="w-full h-full" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 7 */}
//       <div
//         id="features"
//         className="w-full bg-white flex flex-col items-center py-20 "
//       >
//         {/* Title */}
//         <div className="mb-16">
//           <p className="text-[36px] sm:text-[48px] text-rushrtext font-bold sm:mt-[50px]">
//             {Strings.why_rushr}
//           </p>
//         </div>
//       {/* Section 7 */}
//       <div
//         id="features"
//         className="w-full bg-white flex flex-col items-center py-20 "
//       >
//         {/* Title */}
//         <div className="mb-16">
//           <p className="text-[36px] sm:text-[48px] text-rushrtext font-bold sm:mt-[50px]">
//             {Strings.why_rushr}
//           </p>
//         </div>

//         {/* Cards Container */}
//         <div className="w-full max-w-[1244px] px-[130px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
//           {/* Card 1 */}
//           <div className="w-[310px]  h-[200px]  bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto ">
//             {/* Icon */}
//             <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
//               <FaCalendarAlt className="text-[#0E2D62] text-xl" />
//             </div>
//             {/* Title */}
//             <p className="text-rushrtext font-semibold text-lg mb-2">
//               {Strings.interactive_calendar}
//             </p>
//             {/* Description */}
//             <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_15}</p>
//           </div>

//           {/* Card 2 */}
//           <div className="w-[310px]  h-[200px]  bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto ">
//             {/* Icon */}
//             <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
//               <FaLock className="text-[#0E2D62] text-xl" />
//             </div>
//             {/* Title */}
//             <p className="text-[#0E2D62] font-semibold text-lg mb-2">
//               {Strings.secure_messaging}
//             </p>
//             {/* Description */}
//             <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_16}</p>
//           </div>

//           {/* Card 3 */}
//           <div className="w-[310px] h-[200px]  bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto">
//             {/* Icon */}
//             <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
//               <FaFileAlt className="text-[#0E2D62] text-xl" />
//             </div>
//             {/* Title */}
//             <p className="text-[#0E2D62] font-semibold text-lg mb-2">
//               {Strings.centralized_document_hub}
//             </p>
//             {/* Description */}
//             <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_17}</p>
//           </div>

//           {/* Card 4 */}
//           <div className="w-[310px]  h-[200px]  bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto">
//             {/* Icon */}
//             <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
//               <FaCalendarAlt className="text-[#0E2D62] text-xl" />
//             </div>
//             {/* Title */}
//             <p className="text-[#0E2D62] font-semibold text-lg mb-2">
//               {Strings.public_event_discovery}
//             </p>
//             {/* Description */}
//             <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_18}</p>
//           </div>

//           {/* Card 5 */}
//           <div className="w-[310px]  h-[200px] bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto">
//             {/* Icon */}
//             <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
//               <FaLock className="text-[#0E2D62] text-xl" />
//             </div>
//             {/* Title */}
//             <p className="text-[#0E2D62] font-semibold text-lg mb-2">
//               {Strings.alumni_engagement_tools}
//             </p>
//             {/* Description */}
//             <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_19}</p>
//           </div>
//           {/* Card 5 */}
//           <div className="w-[361px] sm:w-[400px] h-[202px] sm:h-[248px] bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto">
//             {/* Icon */}
//             <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
//               <FaLock className="text-[#0E2D62] text-xl" />
//             </div>
//             {/* Title */}
//             <p className="text-[#0E2D62] font-semibold text-lg mb-2">
//               {Strings.alumni_engagement_tools}
//             </p>
//             {/* Description */}
//             <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_19}</p>
//           </div>

//           {/* Card 6 */}
//           <div className="w-[361px] sm:w-[400px] h-[202px] sm:h-[248px] bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto">
//             {/* Icon */}
//             <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
//               <FaFileAlt className="text-[#0E2D62] text-xl" />
//             </div>
//             {/* Title */}
//             <p className="text-[#0E2D62] font-semibold text-lg mb-2">
//               {Strings.customizable_profiles}
//             </p>
//             {/* Description */}
//             <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_20}</p>
//           </div>
//         </div>
//       </div>
//       {/* Section 8 */}

//       <div className="md:h-[693px] h-fit flex justify-center items-center bg-primeWhite">
//         <div className="w-full h-[553px] gap-[58px] flex flex-col items-center">
//           {/* Header */}
//           <div className="w-full justify-center flex items-center h-[34px]">
//             <p className="md:text-[48px] text-[30px] text-[#0E2D62] font-bold text-center">
//               {Strings.students_feedback}
//             </p>
//           </div>

//           {/* Carousel Container */}
//           <div id="testimonials" className="w-full h-[461px] relative">
//             <div className="w-full h-[461px] mx-auto">
//               {/* Cards Container with Gray Background */}
//               <div className="relative h-[461px] flex gap-6 justify-center p-8 rounded-[18px] transition-transform duration-500 ease-in-out transform">
//                 {/* Grey Background for the left and right sides */}
//                 <div className="absolute top-0 left-0 w-[50%] h-full bg-[#F6F6F6] z-0 rounded-l-[18px]"></div>
//                 <div className="absolute top-0 right-0 w-[50%] h-full bg-[#F6F6F6] z-0 rounded-r-[18px]"></div>

//                 {/* Feedback Cards */}
//                 <div className="flex gap-6 z-10 w-full">
//                   {getVisibleCards().map((feedback, index) => (
//                     <div
//                       key={index}
//                       className="w-[388px] h-[221px] bg-white p-8 rounded-[12px] shadow-2xl hover:scale-105 transition-transform duration-300"
//                     >
//                       <p className="text-[#525252] text-sm mb-8">
//                         {feedback.quote}
//                       </p>
//                       <div className="flex items-center gap-4">
//                         <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
//                           <img
//                             src={feedback.image}
//                             alt={feedback.name}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div>
//                           <p className="font-semibold text-[#363636] text-base">
//                             {feedback.name}
//                           </p>
//                           <p className="text-[#525252] text-sm">
//                             {feedback.organization}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Navigation */}
//                 <div className="absolute left-1/2 bottom-[40px] transform -translate-x-1/2 flex items-center gap-4 sm:gap-2 z-20">
//                   <button
//                     onClick={handlePrev}
//                     className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 bg-white hover:bg-[#E02239] transition-colors"
//                   >
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M12.5 16.6667L7.5 10L12.5 3.33334"
//                         stroke="#D1D1D1"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={handleNext}
//                     className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 bg-white hover:bg-[#E02239] transition-colors"
//                   >
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M7.5 16.6667L12.5 10L7.5 3.33334"
//                         stroke="#D1D1D1"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* contact section */}
//       <div className=" flex justify-center">
//         <div className="w-full md:h-[930px] flex md:flex-row flex-col justify-center  md:gap-[78px] p-[30px]">
//           <div className=" md:order-1 order-2 md:w-[50%] md:h-[930px] flex flex-col md:gap-[10px]">
//             <div className="flex flex-col md:gap-[42px]  md:h-[830px]">
//               <h1 className=" text-[36px] font-bold text-[#0E2D62] md:h-[110px]">
//                 {Strings.ready_to_join_rushr}{" "}
//                 <span className="text-student font-thin ">
//                   {Strings.student_leaders}
//                 </span>
//               </h1>
//               <form className="flex flex-col md:h-[555px] md:gap-[24px]">
//                 <div className=" relative md:w-full md:h-[66px]">
//                   <div className=" absolute left-[20px] top-[20px]">
//                     <label
//                       htmlFor="name"
//                       className="text-sectionText md:text-sectionstyle"
//                     >
//                       {Strings.name}
//                       <span className="text-primary">{Strings.astersik}</span>
//                     </label>
//                   </div>
//                   <input
//                     type="text"
//                     className="w-full border-b-2 rounded-l-lg rounded-r-lg md:h-[66px] bg-primeWhite text-sectionText px-[20px] py-[21px] "
//                   />
//                 </div>
//                 <div className=" relative md:h-[66px]">
//                   <div className=" absolute left-[20px] top-[20px]">
//                     <label
//                       htmlFor="name"
//                       className="text-sectionText md:text-sectionstyle"
//                     >
//                       {Strings.email}{" "}
//                       <span className="text-primary">{Strings.astersik}</span>
//                     </label>
//                   </div>
//                   <input
//                     type="text"
//                     className=" w-full md:h-[66px] border-b-2 rounded-l-lg rounded-r-lg bg-primeWhite text-sectionText px-[20px] py-[21px] "
//                   />
//                 </div>
//                 <div className=" relative md:h-[66px]">
//                   <div className=" absolute left-[20px] top-[20px]">
//                     <label
//                       htmlFor="name"
//                       className="text-sectionText md:text-sectionstyle"
//                     >
//                       {Strings.phone}{" "}
//                       <span className="text-primary">{Strings.astersik}</span>
//                     </label>
//                   </div>
//                   <input
//                     type="text"
//                     className=" w-full md:h-[66px] border-b-2 rounded-l-lg rounded-r-lg bg-primeWhite text-sectionText px-[20px] py-[21px] "
//                   />
//                 </div>
//                 <div className=" relative  md:h-[66px]">
//                   <div className=" absolute left-[20px] top-[20px]">
//                     <label
//                       htmlFor="name"
//                       className="text-sectionText md:text-sectionstyle"
//                     >
//                       {Strings.organization_chapter}
//                     </label>
//                   </div>
//                   <input
//                     type="text"
//                     className="w-full md:h-[66px] border-b-2 rounded-l-lg rounded-r-lg bg-primeWhite text-sectionText px-[20px] py-[21px] "
//                   />
//                 </div>
//                 <div className=" relative  md:h-[66px]">
//                   <div className=" absolute left-[20px] top-[20px]">
//                     <label
//                       htmlFor="name"
//                       className="text-sectionText md:text-sectionstyle"
//                     >
//                       {Strings.message}
//                     </label>
//                   </div>
//                   <input
//                     type="text"
//                     className="w-full md:h-[66px] border-b-2 rounded-l-lg rounded-r-lg bg-primeWhite text-sectionText px-[20px] py-[21px] "
//                   />
//                 </div>
//                 <div className=" md:h-[22px] flex justify-between md:py-0 py-4">
//                   <p className="text-checkBoxTerms">
//                     {Strings.preferred_method_of_contact}{" "}
//                   </p>
//                   <div className="flex items-center gap-[24px] ">
//                     <div className="flex items-center gap-[8px]">
//                       <input type="checkbox" name="contact" id="phone" />
//                       <label htmlFor="phone" className="text-sectionText">
//                         {Strings.phone}
//                       </label>
//                     </div>
//                     <div className="flex items-center gap-[8px]">
//                       <input type="checkbox" name="contact" id="email" />
//                       <label htmlFor="email" className="text-sectionText">
//                         {Strings.email}
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className=" md:h-[66px] md:gap-[10px] bg-primary text-primeWhite rounded-[30px] px-[32px] py-[16px]"
//                 >
//                   {Strings.SUBMIT_YOUR_INQUIRY}
//                 </button>
//               </form>
//             </div>
//             {/* contact Num */}
//             <div className=" md:h-[40px] flex items-center justify-between md:py-0 py-8">
//               <div className="md:w-[159px] md:h-[40px] flex items-center md:gap-[15px]">
//                 <img src={contactCalIcon} alt="" />
//                 <p className="text-[#0E2D62]">
//                   {Strings.PHONE} <br /> <span>{Strings.Phone_No}</span>
//                 </p>
//               </div>
//               <div className="md:w-[159px] md:h-[40px] flex items-center md:gap-[15px]">
//                 <img src={contactCalIcon} alt="" />
//                 <p className="text-[#0E2D62]">
//                   {Strings.EMAIL} <br /> <span>{Strings.Email_Id}</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <img
//             className="md:w-[50%]  h-fit md:h-[878px] rounded-[18px] md:order-2"
//             src={contactImg}
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// );
// };
 
// export default Scroll;


import Img1 from "../../assets/Section1.png";
import Section2 from "../../assets/Section2.png";
import Googleplay from "../../assets/GooglePlay.png";
import Section5 from "../../assets/Section5.png";
import AppStore from "../../assets/AppStore.png";
import GroupImg from "../../assets/Group.png";
import stars from "../../assets/Star.png";
import contactCalIcon from "../../assets/Call.png";
import contactImg from "../../assets/Contact.png";
 
import { useState } from "react";
import Studentfeedback1 from "../../assets/Studentfeedback1.png";
import Studentfeedback2 from "../../assets/Studentfeedback2.png";
import Studentfeedback3 from "../../assets/Studentfeedback3.png";
 
import redline from "../../assets/redline.png";
import hiw1 from "../../assets/hiw1.png";
import hiw2 from "../../assets/hiw2.png";
import hiw3 from "../../assets/hiw3.png";
 
import { FaCalendarAlt, FaFileAlt, FaLock } from "react-icons/fa";
 
import Security from "../../assets/Security.png";
// import {
//   Tagline_4,
//   Tagline_5,
//   Tagline_11,
//   Tagline_13,
//   Para_3,
// } from "../../utils/String";
 
import { Strings } from "../../Strings/Strings";
// import { string } from "yup";
 
const Scroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const feedbackData = [
    {
      quote:
        "RUSHR has completely transformed how we run our chapter 1 . The calendar and messaging tools save us hours every week",
      name: "Devon Lane",
      organization: "Zeta Tau Alpha",
      image: Studentfeedback1,
    },
    {
      quote:
        "RUSHR has completely transformed how we run our chapter 2 . The calendar and messaging tools save us hours every week",
      name: "Marvin McKinney",
      organization: "Delta Sigma",
      image: Studentfeedback2,
    },
    {
      quote:
        "RUSHR has completely transformed how we run our chapter 3. The calendar and messaging tools save us hours every week",
      name: "Albert Flores",
      organization: "Alpha Tau",
      image: Studentfeedback3,
    },
    {
      quote:
        "RUSHR has completely transformed how we run our chapter 4. The calendar and messaging tools save us hours every week",
      name: "Emily Rodriguez",
      organization: "Sigma Kappa",
      image: Studentfeedback1,
    },
    {
      quote:
        "RUSHR has completely transformed how we run our chapter 5. The calendar and messaging tools save us hours every week",
      name: "Jackson Wright",
      organization: "Phi Beta Kappa",
      image: Studentfeedback2,
    },
  ];
 
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= feedbackData.length - 3 ? 0 : prevIndex + 1
    );
  };
 
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbackData.length - 3 : prevIndex - 1
    );
  };
 
  const getVisibleCards = () => {
    return [
      feedbackData[currentIndex],
      feedbackData[(currentIndex + 1) % feedbackData.length],
      feedbackData[(currentIndex + 2) % feedbackData.length],
    ];
  };
  return (
    // Starting page
    <div className=" h-[100%] w-full sm:min-w-fit relative top-[127px] md:px-[0] ">
    {/* Banner done */}
    <div className="h-[603px]  w-full flex md:items-center md:justify-center items-end md:pb-0 pb-[50px]  homeBanner    ">
      <div className="w-full flex justify-end relative">
        {/* <div className="flex items-center justify-center  absolute top-[-130px] right-[-150px] vector  h-[142.88px] w-[177px]  "></div> */}
        <div className="md:text-right text-center h-[100%] px-[30px] text-primeWhite flex flex-col md:items-end items-center md:gap-[45px] gap-[30px] overflow-visible md:mx-0 mx-auto ">
          <h3 className=" md:text-banner text-h3">
            {Strings.transform_the_way_your_chapter}
            <br /> {Strings.communicates_and_grows}
          </h3>
          <p className="text-list  ">
            {Strings.RUSHR_is_the_first}
            <br /> {Strings.plan_events}
            <br />
            {Strings.seamlessly_and_securely}
          </p>
          <button className=" rounded-[30px] md:w-[224px]  !h-[42px]  md:!h-[56px] bg-primary text-primeWhite md:px-[24px] md:py-[5px] px-[32px] py-[10px] gap-2   ">
            {Strings.get_on_our_waitlist}
          </button>
        </div>
      </div>
    </div>
    {/* Main container for responsive  */}
    <div className=" flex flex-col overflow-hidden w-full   items-center gap-[15px]">
      {/* section 1 done */}
      <div
        id="about"
        className=" h-[693px] px-[130px] flex justify-center items-center bg-bglargescreen"
      >
        <div className="w-full md:h-[584px] h-fit flex md:flex-row flex-col justify-center items-center md:gap-[51px] gap-[20px]">
          <img
            src={Img1}
            alt="Mobile Screen"
            className=" w-[450px] h-fit pl-[60px]"
          />
 
          <div className="flex flex-col justify-center  w-full h-fit md:gap-[69px] gap-[20px]">
            <div className=" h-[213px] w-full md:gap-[24px] gap-[12px] flex flex-col ">
              <div className=" h-[120px] px-[50px]  md:text-left text-center md:gap-[31px] gap-[18px] flex flex-col ">
                <h4 className="text-sectionstyle text-sectionHeading">
                  {Strings.rushr_is_the_first_ever} <br />{" "}
                  {Strings.fraternity_and_sorority}
                </h4>
 
                <h1 className="md:text-smallHeading text-log ">
                  {Strings.Plan_Events}
                </h1>
              </div>
              <p className=" w-[450px] text-sectionText md:text-left text-center text-checkBoxTerms md:w-full md:text-sectionstyle px-[50px]">
                {Strings.scroll_text_1}
              </p>
            </div>
 
            <div className=" flex flex-col md:items-start items-center gap-[18px] h-[82px] w-full md:w-[312.43px] px-[50px]">
              <p className=" text-h5">{Strings.download_our_app}</p>
              <div className="flex space-x-4">
                <a href="#" className="block">
                  <img
                    src={Googleplay}
                    alt="Google Play"
                    className="w-auto h-10"
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src={AppStore}
                    alt="App Store"
                    className="w-auto h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* section 2  done*/}
 
      <div className="w-full md:h-[693px] px-[130px] flex md:flex-row flex-col md:justify-center items-center md:items-end md:bg-sectionBg md:gap-[51px] gap-[20px] mt-[30px]    ">
        <div className="md:order-[0]  w-full order-1 flex flex-col justify-center items-center md:h-[693px] h-fit md:gap-[69px] gap-[36px] md:none bg-sectionBg py-[20px] my-[-20px] md:my-0 md:py-0 ">
          <div className=" md:h-[213px]  h-[196px] md:gap-[24px] gap-[18px] flex flex-col items-center md:items-start ">
            <h4 className="md:text-sectionstyle text-[14px] md:text-left text-center text-sectionHeading px-[50px]">
              {Strings.rushr_is_the_first_ever} <br />{" "}
              {Strings.fraternity_and_sorority}
            </h4>
 
            <h1 className="md:text-smallHeading  px-[50px] text-log">
              {Strings.engage_with_members}
            </h1>
            <p className=" text-sectionText md:w-full px-[50px] w-[450px] md:text-left text-center text-checkBoxTerms md:text-sectionstyle ">
              {Strings.Scroll_text_2}
            </p>
          </div>
        </div>
 
        <div className=" md:bg-sectionBg ">
          <img
            src={Section2}
            alt="Mobile Screen"
           
            className=" object-cover max-w-fit md:h-[641px] h-[507px]  order-[0] "
          />
        </div>
      </div>
 
      {/* section 3  done*/}
      <div className="w-full md:h-[693px] px-[130px] h-fit flex justify-center items-center bg-bglargescreen">
        <div className=" md:h-[584px] h-fit flex md:flex-row flex-col justify-center items-center md:gap-[51px] gap-[20px]">
          <img
            src={Img1}
            alt="Mobile Screen"
            className=" h-fit w-[403px] pl-[60px]"
          />
 
          <div className="flex flex-col justify-center w-full md:h-[364px] h-fit md:gap-[69px] gap-[20px]">
            <div className=" md:h-[213px] h-fit md:gap-[24px] flex flex-col md:text-left text-center pb-[20px] gap-[24px]">
              <h4 className="md:text-sectionstyle text-[14px] text-sectionHeading px-[50px]">
                {Strings.rushr_is_the_first_ever} <br />{" "}
                {Strings.fraternity_and_sorority}
              </h4>
 
              <h1 className="md:text-smallHeading text-log px-[50px]">
                {Strings.strengthen_chapter_connections}
              </h1>
              <p className=" text-sectionText md:w-full w-[450px] px-[50px] md:text-left  text-checkBoxTerms md:text-sectionstyle">
                {Strings.scroll_text_3}
              </p>
            </div>
          </div>
        </div>
      </div>
 
      {/* section 4  done*/}
 
      <div className=" w-full h-fit md:h-[693px] px-[130px] flex md:flex-row flex-col justify-center md:items-start items-center md:bg-sectionBg  md:gap-[51px] gap-[20px] mt-[30px]">
        <div className="order-0 w-[50%] flex flex-col justify-center items-center md:h-[693px] h-fit md:gap-[69px] gap-[20px] py-[20px]  my-[-20px] md:my-0 md:py-0   md:none bg-sectionBg">
          <div className=" md:h-[213px]  h-[196px] md:gap-[24px] gap-[18px] flex flex-col items-center md:items-start">
            <h4 className="text-sectionstyle text-sectionHeading text-center md:text-left  px-[50px]">
              {Strings.rushr_is_the_first_ever} <br />{" "}
              {Strings.fraternity_and_sorority}
            </h4>
 
            <h1 className=" md:text-smallHeading text-log px-[50px]">
              {Strings.stay_organized}
            </h1>
            <p className=" md:w-full px-[50px] w-[450px] text-sectionText md:text-left text-center text-checkBoxTerms md:text-sectionstyle ">
              {Strings.scroll_text_12}
            </p>
          </div>
        </div>
 
        <div className="md:order-1 md:bg-sectionBg">
          <img
            src={Section5}
            alt="Mobile Screen"
            className="w-fit md:h-[641px] h-[507px] object-cover "
          />
        </div>
      </div>
 
      {/* section 5  done*/}
 
      <div className="md:h-[460px] w-full px-[130px] mb-[70px] flex justify-center items-center bg-bglargescreen">
        <div className="relative w-full m-[15px] h-full flex md:flex-row flex-col md:justify-around items-center rounded-[24px] gap-[30px] mt-[60px] bg-primaryOpacity">
          {/* Security Image */}
          <img
            src={Security}
            alt="Security"
            className="md:w-[342px] md:h-[336px] w-[206px] h-[201px] object-cover"
          />
 
          {/* Content Section */}
          <div className="flex flex-col text-center md:items-start items-center md:text-left gap-[24px] md:px-0 md:pb-0 px-[20px] pb-[60px] md:w-[596px] w-full">
            <h1 className="text-[34px] font-[600] text-[#363636] leading-[42.5px]">
              {Strings.seamlessly_and_securely}
            </h1>
            <p className="text-[18px] text-[#525252] leading-[28px]">
              {Strings.scroll_text_5}
              <br />
              {Strings.scroll_text_6}
              <br />
              {Strings.scroll_text_7}
            </p>
            <button className="md:w-[201px] w-[193px] gap-[8px] md:h-[44px] h-[42px] flex items-center justify-center rounded-[30px] bg-primary text-white text-base font-semibold border">
              {Strings.get_on_our_waitlist}
            </button>
            <div className="absolute -bottom-10 left-1/2 h-[78px] w-[503px] transform -translate-x-1/2 bg-white px-12 py-3 rounded-full shadow-lg flex flex-col justify-center items-center gap-4">
              <div className="w-[282px] h-[11px]">
                <p className="md:text-[16px] text-center font-[400] text-[#807A7A]">
                  {Strings.streamline_your_chapters_success}
                </p>
              </div>
              <div className="w-[403px] h-[14px]">
                <p className="md:text-[20px] text-center font-[400] text-black">
                  {Strings.connect_organize_empower_with_rushr}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 6 */}
      <div className="bg-black md:w-full px-[130px]  md:h-[832px] flex justify-center items-center mt-[10px] p-[40px]">
        <div className="w-full md:h-[582px] flex md:flex-row flex-col justify-center items-center gap-[30px] md:gap-[37px]">
          <div className=" md:w-[431px] flex flex-col md:gap-[44px] ">
            <h1 className="text-primeWhite text-h3 mb-[20px]">
              {Strings.built_for_student_leaders_by}{" "}
              <span className="text-sectionHead font-light">
                {" "}
                {Strings.student_leaders}
              </span>
            </h1>
            <div className="flex flex-col md:gap-[15px]  text-sectionBg text-h4">
              <p className="">{Strings.scroll_text_8}</p>
              <p className="">{Strings.scroll_text_9}</p>
              <p className="">{Strings.scroll_text_10}</p>
            </div>
          </div>
          <img src={GroupImg} className="md:w-[30%] w-[300px]" alt="" />
          <div className="md:w-[344px] md:h-[358px] flex flex-col md:gap-[50px]">
            <div className="flex items-center md:gap-[37px]">
              <img src={stars} className="md:w-[54px] md:h-[46px]" alt="" />
              <div className="flex flex-col md:gap-[8px] px-6">
                <p className="text-primary">{Strings.efficiency}</p>
                <p className="text-primeWhite">{Strings.scroll_text_11}</p>
              </div>
            </div>
            <div className="flex items-center md:gap-[37px]">
              <img src={stars} className="md:w-[54px] md:h-[46px]" alt="" />
              <div className="flex flex-col md:gap-[8px] px-6">
                <p className="text-primary ">{Strings.community}</p>
                <p className="text-primeWhite">{Strings.scroll_text_13}</p>
              </div>
            </div>
            <div className="flex items-center md:gap-[37px] ">
              <img src={stars} className="md:w-[54px] md:h-[46px]" alt="" />
              <div className="flex flex-col md:gap-[8px] px-6">
                <p className="text-primary">{Strings.growth}</p>
                <p className="text-primeWhite">{Strings.scroll_text_14}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* How it Works */}
 
      <div className="w-full bg-white  px-[130px] flex flex-col items-center py-20">
        <div className="w-full h-[541.45px] flex flex-col items-center justify-top relative">
          {/* Text Container */}
          <div className="w-full h-[96px] text-center z-10">
            <p className="text-[#148FF9] text-[18px] font-[400]">
              {Strings.how_it_works}
            </p>
            <p className="text-[34px] sm:text-4xl font-[600]">
              {Strings.getting_started_is}{" "}
              <span className="text-[#363636] font-[300] text-[34px]">
                {Strings.simple_3_Step_process}
              </span>
            </p>
          </div>
 
          <div className="w-[930.49px] h-[541.45px] flex flex-col items-center justify-center relative">
            {/* Background Container (Now at the Top Center) */}
            <div className="absolute top-0 flex md:flex-row flex-col items-center justify-between left-1/2 transform -translate-x-1/2 w-[930.49px] bg-white">
            <div className="flex flex-col items-center ">
    <img src={hiw1} alt="hiw1" className="w-[251.91px] h-[327.57px]" />
    <h4 className="text-xl font-bold  ">1 <span>{Strings.Sign_Up_head}</span></h4>
    <p className="text-gray-600 ">{Strings.signup_step1_text}</p>
  </div>
 
 
  <div className="flex flex-col items-center ">
  <h4 className="text-xl font-bold  ">2 <span>{Strings.Set_Up_Your_Chapter}</span></h4>
  <p className="text-gray-600  ">{Strings.signup_step2_text}</p>
    <img src={hiw2} alt="hiw3" className="w-[251.91px] h-[327.57px]" />
   
  </div>
 
 
        <div className="flex flex-col items-center  md:text-left">
          <img src={hiw3} alt="hiw3" className="w-[251.91px] h-[327.57px]" />
          <h4 className="text-xl font-extrabold ">3 <span>{Strings.Connect_and_Collaborate}</span></h4>
          <p className="text-gray-600 align-middle ">{Strings.signup_step3_text}</p>
        </div>
              {/* Add background elements if needed */}
            </div>
 
            {/* Bottom Aligned Image Container */}
            <div className="absolute bottom-0 left-0 w-[930.49px] h-[385.45px] hidden md:block">
              <img src={redline} alt="redline" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
 
      {/* Section 7 */}
      <div
        id="features"
        className="w-full bg-bglargescreen flex flex-col items-center py-20 "
      >
        {/* Title */}
        <div className="mb-16">
          <p className="text-[36px] sm:text-[48px] text-rushrtext font-bold sm:mt-[50px]">
            {Strings.why_rushr}
          </p>
        </div>
 
        {/* Cards Container */}
        <div className="w-full max-w-[1244px] px-[130px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
          {/* Card 1 */}
          <div className="w-[310px]  h-[200px]  bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto ">
            {/* Icon */}
            <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <FaCalendarAlt className="text-[#0E2D62] text-xl" />
            </div>
            {/* Title */}
            <p className="text-rushrtext font-semibold text-lg mb-2">
              {Strings.interactive_calendar}
            </p>
            {/* Description */}
            <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_15}</p>
          </div>
 
          {/* Card 2 */}
          <div className="w-[310px]  h-[200px]  bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto ">
            {/* Icon */}
            <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <FaLock className="text-[#0E2D62] text-xl" />
            </div>
            {/* Title */}
            <p className="text-[#0E2D62] font-semibold text-lg mb-2">
              {Strings.secure_messaging}
            </p>
            {/* Description */}
            <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_16}</p>
          </div>
 
          {/* Card 3 */}
          <div className="w-[310px] h-[200px]  bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto">
            {/* Icon */}
            <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <FaFileAlt className="text-[#0E2D62] text-xl" />
            </div>
            {/* Title */}
            <p className="text-[#0E2D62] font-semibold text-lg mb-2">
              {Strings.centralized_document_hub}
            </p>
            {/* Description */}
            <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_17}</p>
          </div>
 
          {/* Card 4 */}
          <div className="w-[310px]  h-[200px]  bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto">
            {/* Icon */}
            <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <FaCalendarAlt className="text-[#0E2D62] text-xl" />
            </div>
            {/* Title */}
            <p className="text-[#0E2D62] font-semibold text-lg mb-2">
              {Strings.public_event_discovery}
            </p>
            {/* Description */}
            <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_18}</p>
          </div>
 
          {/* Card 5 */}
          <div className="w-[310px]  h-[200px] bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto">
            {/* Icon */}
            <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <FaLock className="text-[#0E2D62] text-xl" />
            </div>
            {/* Title */}
            <p className="text-[#0E2D62] font-semibold text-lg mb-2">
              {Strings.alumni_engagement_tools}
            </p>
            {/* Description */}
            <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_19}</p>
          </div>
 
          {/* Card 6 */}
          <div className="w-[310px]  h-[200px]  bg-[#F6F6F6] rounded-[20px] p-6 flex flex-col items-start shadow-md mx-auto">
            {/* Icon */}
            <div className="w-[48px] h-[48px] bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
              <FaFileAlt className="text-[#0E2D62] text-xl" />
            </div>
            {/* Title */}
            <p className="text-[#0E2D62] font-semibold text-lg mb-2">
              {Strings.customizable_profiles}
            </p>
            {/* Description */}
            <p className="text-[#4B4B4B] text-sm">{Strings.scroll_text_20}</p>
          </div>
        </div>
      </div>
      {/* Section 8 */}
 
      <div className="md:h-[693px] h-fit flex justify-center items-center bg-bglargescreen ">
        <div className="w-full h-[553px] gap-[58px] flex flex-col items-center ">
          {/* Header */}
          <div className="w-full justify-center flex items-center h-[34px] ">
            <p className="md:text-[48px] text-[30px] text-[#0E2D62] font-bold text-center">
              {Strings.students_feedback}
            </p>
          </div>
 
          {/* Carousel Container */}
          <div id="testimonials" className="w-full h-[461px] relative  ">
            <div className="w-full h-[461px] mx-auto">
              {/* Cards Container with Gray Background */}
              <div className="relative h-[461px] flex gap-6 justify-center p-8 rounded-[18px] transition-transform duration-500 ease-in-out transform">
                {/* Grey Background for the left and right sides */}
                <div className="absolute top-0 left-0 w-[50%] h-full bg-[#F6F6F6] z-0 rounded-l-[18px]"></div>
                <div className="absolute top-0 right-0 w-[50%] h-full bg-[#F6F6F6] z-0 rounded-r-[18px]"></div>
 
                {/* Feedback Cards */}
                <div className="flex gap-6 z-10 w-full ">
                  {getVisibleCards().map((feedback, index) => (
                    <div
                      key={index}
                      className="w-[320px] h-[209px] bg-white p-8 rounded-[12px] shadow-2xl hover:scale-105 transition-transform duration-300"
                    >
                      <p className="text-[#525252] text-sm mb-8">
                        {feedback.quote}
                      </p>
                      <div className="flex items-center gap-4 pb-7">
                        <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
                          <img
                            src={feedback.image}
                            alt={feedback.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-[#363636] text-base">
                            {feedback.name}
                          </p>
                          <p className="text-[#525252] text-sm">
                            {feedback.organization}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
 
                {/* Navigation */}
                <div className="absolute left-1/2 bottom-[40px] transform -translate-x-1/2 flex items-center gap-4 sm:gap-2 z-20">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 bg-white hover:bg-[#E02239] transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5 16.6667L7.5 10L12.5 3.33334"
                        stroke="#D1D1D1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 bg-white hover:bg-[#E02239] transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 16.6667L12.5 10L7.5 3.33334"
                        stroke="#D1D1D1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* contact section */}
      <div className=" flex justify-center px-[130px]">
        <div className="w-full md:h-[930px] flex md:flex-row flex-col justify-center  md:gap-[78px] p-[30px]">
          <div className=" md:order-1 order-2 md:w-[50%] md:h-[930px] flex flex-col md:gap-[10px]">
            <div className="flex flex-col md:gap-[42px]  md:h-[830px]">
              <h1 className=" text-[36px] font-bold text-[#0E2D62] md:h-[110px]">
                {Strings.ready_to_join_rushr}{" "}
                <span className="text-student font-thin ">
                  {Strings.student_leaders}
                </span>
              </h1>
              <form className="flex flex-col md:h-[555px] md:gap-[24px]">
                <div className=" relative md:w-full md:h-[66px]">
                  <div className=" absolute left-[20px] top-[20px]">
                    <label
                      htmlFor="name"
                      className="text-sectionText md:text-sectionstyle"
                    >
                      {Strings.name}
                      <span className="text-primary">{Strings.astersik}</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    className="w-full border-b-2 rounded-l-lg rounded-r-lg md:h-[66px] bg-primeWhite text-sectionText px-[20px] py-[21px] "
                  />
                </div>
                <div className=" relative md:h-[66px]">
                  <div className=" absolute left-[20px] top-[20px]">
                    <label
                      htmlFor="name"
                      className="text-sectionText md:text-sectionstyle"
                    >
                      {Strings.email}{" "}
                      <span className="text-primary">{Strings.astersik}</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    className=" w-full md:h-[66px] border-b-2 rounded-l-lg rounded-r-lg bg-primeWhite text-sectionText px-[20px] py-[21px] "
                  />
                </div>
                <div className=" relative md:h-[66px]">
                  <div className=" absolute left-[20px] top-[20px]">
                    <label
                      htmlFor="name"
                      className="text-sectionText md:text-sectionstyle"
                    >
                      {Strings.phone}{" "}
                      <span className="text-primary">{Strings.astersik}</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    className=" w-full md:h-[66px] border-b-2 rounded-l-lg rounded-r-lg bg-primeWhite text-sectionText px-[20px] py-[21px] "
                  />
                </div>
                <div className=" relative  md:h-[66px]">
                  <div className=" absolute left-[20px] top-[20px]">
                    <label
                      htmlFor="name"
                      className="text-sectionText md:text-sectionstyle"
                    >
                      {Strings.organization_chapter}
                    </label>
                  </div>
                  <input
                    type="text"
                    className="w-full md:h-[66px] border-b-2 rounded-l-lg rounded-r-lg bg-primeWhite text-sectionText px-[20px] py-[21px] "
                  />
                </div>
                <div className=" relative  md:h-[66px]">
                  <div className=" absolute left-[20px] top-[20px]">
                    <label
                      htmlFor="name"
                      className="text-sectionText md:text-sectionstyle"
                    >
                      {Strings.message}
                    </label>
                  </div>
                  <input
                    type="text"
                    className="w-full md:h-[66px] border-b-2 rounded-l-lg rounded-r-lg bg-primeWhite text-sectionText px-[20px] py-[21px] "
                  />
                </div>
                <div className=" md:h-[22px] flex justify-between md:py-0 py-4">
                  <p className="text-checkBoxTerms">
                    {Strings.preferred_method_of_contact}{" "}
                  </p>
                  <div className="flex items-center gap-[24px] ">
                    <div className="flex items-center gap-[8px]">
                      <input type="checkbox" name="contact" id="phone" />
                      <label htmlFor="phone" className="text-sectionText">
                        {Strings.phone}
                      </label>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <input type="checkbox" name="contact" id="email" />
                      <label htmlFor="email" className="text-sectionText">
                        {Strings.email}
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className=" md:h-[66px] md:gap-[10px] bg-primary text-primeWhite rounded-[30px] px-[32px] py-[16px] mb-10"
                >
                  {Strings.SUBMIT_YOUR_INQUIRY}
                </button>
                <br></br>
              </form>
             
            </div>
            {/* contact Num */}
            <div className=" md:h-[40px] flex items-center justify-between md:py-0 py-8 -mt-[120px] ">
              <div className="md:w-[159px] md:h-[40px] flex items-center md:gap-[15px] mb-12 mt-6">
                <img src={contactCalIcon} alt="" />
                <p className="text-[#0E2D62]">
                  {Strings.PHONE} <br /> <span>{Strings.Phone_No}</span>
                </p>
              </div>
              <div className="md:w-[159px] md:h-[40px] flex items-center md:gap-[15px] mb-12 mt-6">
                <img src={contactCalIcon} alt="" />
                <p className="text-[#0E2D62]">
                  {Strings.EMAIL} <br /> <span>{Strings.Email_Id}</span>
                </p>
              </div>
              <br></br>
            </div>
          </div>
       
          <img
            className="md:w-[50%]  h-fit md:h-[708px] rounded-[18px] md:order-2"
            src={contactImg}
            alt=""
          />
         
        </div>
      </div>
    </div>
  </div>
);
};
 
export default Scroll;