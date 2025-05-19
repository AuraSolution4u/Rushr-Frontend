
// import { FaArrowRight, FaXTwitter } from "react-icons/fa6";
// import FooterImage from "../assets/FooterLogo.png"
// import { FaLinkedinIn } from "react-icons/fa6";
// import { FaWhatsapp } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa6";
// import { Strings } from "../Strings/Strings";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8 px-6 ">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
//         {/* Logo and Description */}
//         <div className="lg:w-1/3 mb-6 lg:mb-0">
//           <div className="flex items-center mb-4">
//             <img
//               src={FooterImage} 
//               alt="RushR Logo"
//               className="w-[282.19px] h-[73px] mr-2"
//             />
//           </div>
//           <p className="text-gray-400 text-[18px] leading-relaxed font-lexend">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
//           </p>
//         </div>
 
//         {/* Quick Links */}
//         <div className="lg:w-1/3 mb-6 lg:mb-0">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <h3 className="text-white font-semibold mb-2">{Strings.quick_links}</h3>
//               <ul className="text-gray-400 space-y-1">
//                 <li>
//                   <a href="#" className="hover:text-white">
//                     {Strings.home}
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white">
//                     {Strings.aboutus}
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white">
//                     {Strings.features}
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white">
//                     {Strings.testimonials}
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-white font-semibold mb-2">{Strings.others}</h3>
//               <ul className="text-gray-400 space-y-1">
//                 <li>
//                   <a href="#" className="hover:text-white">
//                     {Strings.contactus}
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white">
//                     {Strings.privacypolicy}
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-white">
//                     {Strings.tnc}
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
 
//         {/* Newsletter */}
//         <div className="lg:w-1/3">
//           <h3 className="text-white font-semibold mb-2">{Strings.subscribe_to_our_newsletter}</h3>
//           <div className="flex items-center bg-gray-800 rounded-full overflow-hidden">
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="flex-1 bg-transparent text-gray-400 py-3 px-4 outline-none rounded-full"
//             />
//             <button className="bg-red-600 hover:bg-red-700 text-white px-6 rounded-[33.46px] m-[5px] h-[60px] w-[62px]  ">
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>
     

 
//       {/* Footer Bottom */}
//       <div className="mt-8 border-t border-gray-800 pt-4">
//         <div className="flex justify-between items-center max-w-7xl mx-auto">
//           <p className="text-gray-400 text-[14px] font-lexend font-normal">
//            {Strings.all_rights_reserved}
//           </p>
//           <div className="flex space-x-4 text-gray-400">
//             {/* Social Media Icons */}
//              <a  >
//                  {/* <img src={Whatsapp} alt="WhatsApp" className="w-6 h-6" /> */}
//                  <FaWhatsapp className=" w-[32px] h-[32px] text-white"/>
//             </a>
//              <a  >
//               <FaInstagram  className=" w-[32px] h-[32px] text-white"/>
//             {/*  <img src={Instagram} alt="WhatsApp" className="w-6 h-6" /> */}
//             </a> 
//             <a >
//             <FaLinkedinIn className=" w-[32px] h-[32px] text-white"/>
//             </a>
//             <a  >
//            <FaXTwitter className=" w-[32px] h-[32px] text-white"/>
//             </a>  
//           </div>
//         </div>
//       </div>
      
//     </footer>
//   );
// };
 
// export default Footer;


import { FaArrowRight, FaXTwitter, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import FooterImage from "../assets/FooterLogo.png";
import { Strings } from "../Strings/Strings";
 
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center lg:items-start space-y-6">
        {/* Main content wrapper with ordering */}
        <div className="w-full flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0">
          {/* Logo, Description */}
          <div className="w-full lg:w-1/3 text-center lg:text-left order-1 lg:order-1">
            <div className="flex justify-center lg:justify-start mb-4">
              <img src={FooterImage} alt="RushR Logo" className="w-[200px] h-auto" />
            </div>
            <p className="text-gray-400 text-[16px] leading-relaxed font-lexend">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
 
          {/* Footer Bottom - Copyright and Social Icons - Moved up for mobile */}
          <div className="w-full border-t border-gray-800 pt-4 lg:hidden order-2">
            <div className="flex flex-col items-center space-y-4">
              {/* Copyright Text */}
              <p className="text-gray-400 text-[14px] font-lexend font-normal">
                {Strings.all_rights_reserved}
              </p>
 
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#"><FaWhatsapp className="w-[28px] h-[28px] text-white hover:text-gray-400" /></a>
                <a href="#"><FaInstagram className="w-[28px] h-[28px] text-white hover:text-gray-400" /></a>
                <a href="#"><FaLinkedinIn className="w-[28px] h-[28px] text-white hover:text-gray-400" /></a>
                <a href="#"><FaXTwitter className="w-[28px] h-[28px] text-white hover:text-gray-400" /></a>
              </div>
            </div>
          </div>
 
          {/* Quick Links & Others */}
          <div className="w-full lg:w-1/3 text-center lg:text-left grid grid-cols-1 md:grid-cols-2 gap-6 order-3 lg:order-2">
            <div>
              <h3 className="text-white font-semibold mb-2">{Strings.quick_links}</h3>
              <ul className="text-gray-400 space-y-1">
                <li><a href="#" className="hover:text-white">{Strings.home}</a></li>
                <li><a href="#" className="hover:text-white">{Strings.aboutus}</a></li>
                <li><a href="#" className="hover:text-white">{Strings.features}</a></li>
                <li><a href="#" className="hover:text-white">{Strings.testimonials}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">{Strings.others}</h3>
              <ul className="text-gray-400 space-y-1">
                <li><a href="#" className="hover:text-white">{Strings.contactus}</a></li>
                <li><a href="#" className="hover:text-white">{Strings.privacypolicy}</a></li>
                <li><a href="#" className="hover:text-white">{Strings.tnc}</a></li>
              </ul>
            </div>
          </div>
 
          {/* Newsletter */}
          <div className="w-full lg:w-1/3 text-center lg:text-left order-4 lg:order-3">
            <h3 className="text-white font-semibold mb-2">{Strings.subscribe_to_our_newsletter}</h3>
            <div className="flex items-center bg-gray-800 rounded-full overflow-hidden max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent text-gray-400 py-3 px-4 outline-none"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-full m-1 h-[50px] w-[50px] flex items-center justify-center">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
 
        {/* Footer Bottom - Only visible on desktop */}
        <div className="hidden lg:block w-full border-t border-gray-800 pt-4">
          <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
            {/* Copyright Text */}
            <p className="text-gray-400 text-[14px] font-lexend font-normal">
              {Strings.all_rights_reserved}
            </p>
 
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#"><FaWhatsapp className="w-[28px] h-[28px] text-white hover:text-gray-400" /></a>
              <a href="#"><FaInstagram className="w-[28px] h-[28px] text-white hover:text-gray-400" /></a>
              <a href="#"><FaLinkedinIn className="w-[28px] h-[28px] text-white hover:text-gray-400" /></a>
              <a href="#"><FaXTwitter className="w-[28px] h-[28px] text-white hover:text-gray-400" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;