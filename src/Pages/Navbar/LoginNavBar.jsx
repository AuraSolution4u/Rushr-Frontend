// import LogoBrand from "../../assets/LogoBrand.png";
// import NavbarLogo from "../../assets/NavbarLogo.svg";
import { LuMenu } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Dashboard from "../../assets/svgIcons/dashboard.svg";
import Book from "../../assets/svgIcons/book.svg";
import Calender from "../../assets/svgIcons/calender.svg";
import Message from "../../assets/svgIcons/message.svg";
import Settings from "../../assets/svgIcons/setting.svg";
import Search from "../../assets/svgIcons/search.svg";
import Notification from "../../assets/svgIcons/notification.svg";
import ProfileImage from "../../assets/Profile.jfif";
import { useDispatch } from "react-redux";
import { setAuthState } from "../../slices/authenticatedSlice";
import { Strings } from "../../Strings/Strings";
import Logo from "../../assets/svgIcons/Logo.svg"
import brandName from "../../assets/svgIcons/brandName.svg"

const LoginNavBar = () => {
  const [menu, setMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const profileImage= JSON.parse(localStorage.getItem("saveFormData"))
 // const new_image= JSON.parse(localStorage.getItem(""))

  const isLoggedIn = localStorage.getItem("is_auth") === "true";

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

  // Set active menu based on the current path
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/dashboard") setActiveMenu("dashboard");
    else if (currentPath === "/my-chapter") setActiveMenu("myChapter");
    else if (currentPath === "/explorechapter") setActiveMenu("explore");
    else if (currentPath === "/message-center") setActiveMenu("messageCenter");
    else if (currentPath === "/settings") setActiveMenu("settings");
    else if (currentPath === "/profile" && isLoggedIn) setActiveMenu("setupProfile");
    else if (currentPath==="/profilesetup") setActiveMenu(false)
  }, [location, isLoggedIn]);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    dispatch(setAuthState());
    localStorage.removeItem("is_auth");
    localStorage.removeItem("saveFormData");
    localStorage.removeItem("userProfile");
    localStorage.removeItem("userType");
    localStorage.removeItem("userIdName");
    localStorage.removeItem("chekUserProfile");
    setShowDropdown(false);
    navigate("/login");
  };

  const handleProfile = () => {
    setShowDropdown(false);
    const userProfile = localStorage.getItem("userProfile"); // Check if profile is set
    // if (userProfile) {
    //   navigate("/dashboard"); // If profile exists, go to dashboard
    // } 
    //else {
    // }
    navigate("/profileEdit"); // If no profile, go to profile setup
  };


  // const handleMenuClick = (menuName, route) => {
  //   const mychapterdetails = {
  //     data: true,
  //   };
  
  //   console.log("Clicked:", menuName, route, mychapterdetails);
  
  //   if (route == "/my-chapter" && mychapterdetails.data) {
  //     console.log("Navigating to /mychapterprofile");
  //     setActiveMenu(menuName);
  //     navigate("/mychapterprofile");
  //   } else if (route == "/my-chapter") {
  //     console.log("Navigating to", route);
  //     setActiveMenu(menuName);
  //     navigate(route);
  //   }
  // };
  const handleMenuClick = (menuName, route) => {
    const saveFormData = JSON.parse(localStorage.getItem("saveFormData"));
    const chapterDetails = saveFormData?.chapterDetails;
  
    if (route === "/my-chapter") {
      if (chapterDetails && (saveFormData.approvedStatus!=0  && saveFormData.approvedStatus!=2)) {
        navigate("/mychapterprofile"); 
      } else {
        navigate("/my-chapter"); 
        localStorage.setItem("hideSidebar", "true"); 
      }
    } else {
      navigate(route);
      localStorage.setItem("hideSidebar", "false"); 
    }
    setActiveMenu(menuName);
  };
  
  
  return (
    <div className="fixed z-20 bg-primeWhite h-[81px] px-[20px] w-full flex justify-center items-center">
      <nav className="md:px-0 h-[25.87px] w-full px-[20px] flex items-center justify-between">
        {/* <img
          alt="logo"
          className="w-[186.19px] h-[48.17px] hidden md:block"
          src={NavbarLogo}
        />
        <img
          alt="logo"
          className="w-[150px] h-[40px] visible md:hidden"
          src={NavbarLogo}
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
        
        <div className="md:block hidden">
          <ul className="flex items-center text-checkBoxTerms text-accent items-list">
            <li>
              <Link
                to="/dashboard"
                onClick={() => handleMenuClick("dashboard", "/dashboard")}
              >
                <div
                  className={`flex items-center gap-2 p-4 rounded-lg w-[139px] h-[56px] ${
                    activeMenu === "dashboard" ? "bg-[#F5E4E9]" : ""
                  }`}
                >
                  <img src={Dashboard} />
                  <p
                    className={`w-[75px] h-[18px] ${
                      activeMenu === "dashboard" ? "text-red-600" : ""
                    }`}
                  >
                    {Strings.dashboard}
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <p
                // to="/my-chapter"
                onClick={() => handleMenuClick("myChapter", "/my-chapter")}
              >
                <div
                  className={`flex items-center gap-2 p-4 rounded-lg w-[143px] cursor-pointer h-[56px] ${
                    activeMenu === "myChapter" ? "bg-[#F5E4E9]" : ""
                  }`}
                >
                  <img src={Book} />
                  <p
                    className={`w-[79px] h-[18px] ${
                      activeMenu === "myChapter" ? "text-red-600" : ""
                    }`}
                  >
                    My Chapter
                  </p>
                </div>
              </p>
            </li>
            <li>
              <Link
                to="/explorechapter"
                onClick={() => handleMenuClick("explore", "/explorechapter")}
              >
                <div
                  className={`flex items-center gap-2 p-4 rounded-lg w-[115px] h-[56px] ${
                    activeMenu === "explore" ? "bg-[#F5E4E9]" : ""
                  }`}
                >
                  <img src={Calender} />
                  <p
                    className={`w-[51px] h-[18px] ${
                      activeMenu === "explore" ? "text-red-600" : ""
                    }`}
                  >
                    {Strings.explore}
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/message-center"
                onClick={() =>
                  handleMenuClick("messageCenter", "/message-center")
                }
              >
                <div
                  className={`flex items-center gap-2 p-4 rounded-lg w-[173px] h-[56px] ${
                    activeMenu === "messageCenter" ? "bg-[#F5E4E9]" : ""
                  }`}
                >
                  <img src={Message} />
                  <p
                    className={`w-[109px] h-[18px] ${
                      activeMenu === "messageCenter" ? "text-red-600" : ""
                    }`}
                  >
                    {Strings.message_center}
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                onClick={() => handleMenuClick("settings", "/settings")}
              >
                <div
                  className={`flex items-center gap-2 p-4 rounded-lg w-[120px] h-[56px] ${
                    activeMenu === "settings" ? "bg-[#F5E4E9]" : ""
                  }`}
                >
                  <img src={Settings} />
                  <p
                    className={`w-[56px] h-[18px] ${
                      activeMenu === "settings" ? "text-red-600" : ""
                    }`}
                  >
                    {Strings.settings}
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-[136px] h-[40px] justify-between items-center">
          <Link>
            <img src={Search} className="w-[18px] h-[18px]" />
          </Link>
          <Link>
            <img src={Notification} className="w-[18px] h-[18px]" />
          </Link>
          <div className="relative" ref={dropdownRef}>
            <img
              src={profileImage.profieLink || brandName}
              className="w-[40px] h-[40px] rounded-3xl cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
              alt="Profile"
            />

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                <button
                  onClick={handleProfile}
                  className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <span>{Strings.Profile}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <span>{Strings.Logout}</span>
                </button>
              </div>
            )}
          </div>
          <LuMenu
            onClick={handleMenu}
            className="md:hidden block text-[20px] w-[20px] h-[20px] font-bold"
          />
        </div>
      </nav>
    </div>
  );
};

export default LoginNavBar;
