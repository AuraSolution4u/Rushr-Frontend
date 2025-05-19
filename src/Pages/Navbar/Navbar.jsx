import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { LuMenu } from "react-icons/lu";
import handleScrollToTop from "../../utils/SmoothScroll";
import { Strings } from "../../Strings/Strings";
import Logo from "../../assets/svgIcons/Logo.svg"
import brandName from "../../assets/svgIcons/brandName.svg"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginOnly, setShowLoginOnly] = useState(false); // Controls menu visibility for login state
  const [isLoaded, setIsLoaded] = useState(false); // Loading state to prevent blinking
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location.pathname)

  const excludedPaths = ["/login", "/signup", "/success", "/reset","/Termsandconditions","/Termsandconditions2"];
  const normalizedPath = location.pathname.replace(/\/$/, "");

  // useEffect(() => {
  //   const storedMenuState = localStorage.getItem("menuOpen");
  //   const storedLoginState = localStorage.getItem("showLoginOnly");
  //   if (storedMenuState) {
  //     setMenuOpen(JSON.parse(storedMenuState)); // Parse the stored menu state
  //   }
  //   if (storedLoginState) {
  //     setShowLoginOnly(JSON.parse(storedLoginState)); // Parse the stored login state
  //   }
  //   setIsLoaded(true); // Set the component as loaded after checking localStorage
  // }, []);

  // Handle the toggling of menu open state
  
  
  useEffect(() => {
    const storedMenuState = localStorage.getItem("menuOpen");
    if (storedMenuState) {
      setMenuOpen(JSON.parse(storedMenuState));
    }
  
    // Automatically update `showLoginOnly` based on URL path
    const isExcluded = excludedPaths.includes(normalizedPath);
    setShowLoginOnly(isExcluded);
    localStorage.setItem("showLoginOnly", JSON.stringify(isExcluded));
  
    setIsLoaded(true);
  }, [location.pathname]); // Runs when pathname changes
  
  const handleMenuToggle = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    localStorage.setItem("menuOpen", JSON.stringify(newMenuState)); // Store the new state in localStorage
  };

  // Handle login button click to navigate to login page and update visibility
  const handleLoginClick = () => {
    setShowLoginOnly(true);
    localStorage.setItem("showLoginOnly", JSON.stringify(true)); // Store login state
    navigate("/login");
  };

  // Handle logo click to navigate to the homepage and reset visibility
  const handleLogoClick = () => {
    setShowLoginOnly(false);
    localStorage.setItem("showLoginOnly", JSON.stringify(false)); // Reset login state
    navigate("/");
  };

  // Don't render the navbar until the localStorage data is loaded
  if (!isLoaded) return null;

  return (
    <div className="fixed z-20  md:bg-bglargescreen bg-bgsmallscreen h-[127px] w-full flex justify-center items-center">
      <nav className="md:h-[120px] md:w-[1240px] md:px-10px h-[25.87px] w-full px-[20px] flex items-center justify-between">
        {/* Logo */}
        <div className=" flex items-center">
          <img
            alt="logo"
            className=" h-[56px] mr-3 cursor-pointer"
            src={brandName}
            onClick={handleLogoClick}
          />
        <img
          alt="logo"
          className=" h-[36px] cursor-pointer"
          src={Logo}
          onClick={handleLogoClick}
        />
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && !showLoginOnly && (
          <div className="block md:hidden absolute top-[90px] left-0 w-full p-2 rounded-md bg-slate-100">
            <ul className="rounded-md bg-primary py-5 text-primeWhite flex flex-col items-center gap-3 text-list">
              <li className="px-5">
                <Link to="/" onClick={() => setShowLoginOnly(false)}>
                  Home
                </Link>
              </li>
              <li className="px-5">
                <a href="#about" onClick={() => setShowLoginOnly(false)}>
                  About Us
                </a>
              </li>
              <li className="px-5">
                <a href="#features" onClick={() => setShowLoginOnly(false)}>
                  Features
                </a>
              </li>
              <li className="px-5">
                <a href="#testimonials" onClick={() => setShowLoginOnly(false)}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/login" onClick={() => setShowLoginOnly(false)}>
                  Login
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        {!showLoginOnly && (
          <div className={`md:block hidden ${showLoginOnly ? "hidden" : ""}`}>
            <ul className="flex justify-between items-center text-list text-listText">
              <li className="px-5">
                <Link to="/" onClick={() => handleScrollToTop()}>
                  Home
                </Link>
              </li>
              <li className="px-5">
                <a href="#about">{Strings.About_Us}</a>
              </li>
              <li className="px-5">
                <a href="#features">{Strings.Features}</a>
              </li>
              <li className="px-5">
                <a href="#testimonials">{Strings.Testimonials}</a>
              </li>
            </ul>
          </div>
        )}

        {/* Buttons */}
      
        <div className="flex">
          {
          (!excludedPaths.includes(normalizedPath))  && 
            <button
            onClick={handleLoginClick}
            className=" hidden md:block rounded-[30px] w-[224px] h-[56px] bg-primary text-primeWhite px-[24px] py-[5px] hover:bg-primaryDark transition-colors"
          >
            Login
          </button>
          }
         
          <button
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            className="md:hidden block text-[20px] w-[20px] h-[20px] font-bold"
          >
            <LuMenu />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


