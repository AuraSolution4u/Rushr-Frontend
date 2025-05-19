import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Pages/Navbar/Navbar";
import LoginNavBar from "./Pages/Navbar/LoginNavBar";
import Footer from "./components/Footer";
import AppRoutes from "./Routes/AppRoutes";
import "./App.css";
import { useEffect } from "react";
import Studentfeedback from "./components/Footer";
import AdminNavbar from "./Pages/Navbar/AdminNavBar";
import Studentdetails from "./Pages/AdminPanel/StudentDetails";
import LoadingSpinner from "./utils/loading/LoadingSpinner";
import Sidebar from "./Pages/Navbar/SideNavBar";
import Chapter from "./Pages/Explore/Chapter";
import UserLayout from "./Routes/UserLayout";
import AdminLayout from "./Routes/AdminLayout";
import Login from "./Pages/Login/Login";
import Layout from "./Routes/Layout";

const publicRoutes = [
  "/",
  "/login",
  "/signup",
  "/reset",
  "/resetpassword",
  "/success",
];

const App = () => {
  const is_auth = useSelector((store) => store.authenticated.is_auth);
  const userType = localStorage.getItem("userType"); 
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (is_auth) {
  //     if (
  //       userType === "Super Admin" &&
  //       ![
  //         "/student",
  //         "/chapterslist",
  //         "/newChapter",
  //         "/createchapter",
  //         "/adminchapterview",
  //       ].includes(window.location.pathname)
  //     ) {
  //       navigate("/student", { replace: true });
  //     } else if (
  //       userType !== "Super Admin" &&
  //       publicRoutes.includes(window.location.pathname)
  //     ) {
  //       navigate("/profilesetup", { replace: true });
  //     }
  //   }
  // }, [is_auth, userType, navigate]);

  useEffect(() => {
    if (is_auth) {
      if (
        userType === "Super Admin" &&
        ![
          "/student",
          "/chapterslist",
          "/newChapter",
          "/createchapter",
          "/adminchapterview",
          "/documentrepository",
          "/adminchapterview/viewmembers"
        ].includes(window.location.pathname)
      ) {
        navigate("/student", { replace: true });
      } else if (
        userType !== "Super Admin" &&
        publicRoutes.includes(window.location.pathname)
      ) {
        navigate("/profilesetup", { replace: true });
      }
    }
  }, [is_auth, userType, navigate]);

  const getNavbar = () => {
    if (is_auth) {
      if (userType === "Super Admin") return <AdminLayout/>;
      return <UserLayout />;
    }
    return <Layout />;
  };
//scrollbar-hide overflow-scroll h-[100vh]   --> 
//scrollbar-hide overflow-scroll h-[80vh]  ->side bar
  return (
    <>
      {getNavbar()}
     {/* {!is_auth &&<Login/>} */}
      {/* <AppRoutes /> */}
      {!is_auth && <Footer />}
    </>
  );
};

export default App;
