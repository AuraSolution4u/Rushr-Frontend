import LogoBrand from "../../assets/LogoBrand.png";
// import Logo from "../../assets/Logo.png";
import { LuMenu } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Search from "../../assets/svgIcons/search.svg";
import Notification from "../../assets/svgIcons/notification.svg";
import ProfileImage from "../../assets/Profile.jfif";
import BrandLogo from "../../assets/BrandLogo.svg";
import { useDispatch } from "react-redux";
import { setAuthState } from "../../slices/authenticatedSlice";
import Sidebar from "./AdminSideBar";
import StepperForm from "../MyChapter/StepperForm";
import Logo from "../../assets/svgIcons/Logo.svg";
import brandName from "../../assets/svgIcons/brandName.svg";

const AdminNavbar = () => {
  const [menu, setMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(setAuthState());
    localStorage.removeItem("is_auth");
    localStorage.removeItem("saveFormData");
    localStorage.removeItem("userProfile");
    localStorage.removeItem("userType");
    localStorage.removeItem("userIdName");
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 z-20 bg-primeWhite h-[81px] w-full flex justify-between items-center shadow-md">
      <nav className="w-full px-6 flex items-center justify-between">
        {/* Logo */}
        {/* <img
          alt="logo"
          className="w-[186.19px] h-[48.17px]"
          src={LogoBrand}
        /> */}

        <div className=" flex items-center">
          <img
            alt="logo"
            className=" h-[56px] mr-3 cursor-pointer"
            src={brandName}
            //onClick={handleLogoClick}
          />
          <img
            alt="logo"
            className=" h-[36px] cursor-pointer"
            src={Logo}
            // onClick={handleLogoClick}
          />
        </div>

        {/* Right Section: Icons & Menu */}
        <div className="flex items-center gap-4 mr-0">
          <img src={Search} className="w-[18px] h-[18px] cursor-pointer" />
          <img
            src={Notification}
            className="w-[18px] h-[18px] cursor-pointer"
          />

          {/* Profile Image with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <img
              src={brandName}
              className="w-[40px] h-[40px] rounded-3xl cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <LuMenu
            onClick={() => setMenu(!menu)}
            className="text-[20px] w-[20px] h-[20px] font-bold cursor-pointer md:hidden"
          />
        </div>
      </nav>

      {/* <Sidebar/> */}
    </div>
  );
};

export default AdminNavbar;
