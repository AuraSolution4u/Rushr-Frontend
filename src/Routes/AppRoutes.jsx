import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import VerifyYourself from "../Pages/VerifyYourself/VerifyYourself";
import NewPassword from "../Pages/NewPassword/NewPassword";
import ForgotPassword from "../Pages/VerifyYourself/ForgotPassword";
import ProfileSetUp from "../Pages/Profile/ProfileSetUp";
import BasicInfo from "../Pages/Profile/BasicInfo";
import Preferences from "../Pages/Profile/Preferences";
import Success from "../Pages/Modals/Success";
import Acadamic from "../Pages/Profile/AcademicInfo";
import { useSelector } from "react-redux";
// import Modal from "../Pages/Profile/Modal";
import SignUpVerify from "../Pages/VerifyYourself/SignUpVerify";
import Chapter from "../Pages/Explore/Chapter";

import Dashboard from "../Pages/Explore/Dashboard";
// import MyChapter from "../Pages/Explore/MyChapter";
import Message from "../Pages/Explore/Message";
import Settings from "../Pages/Explore/Settings";
// import Chapter from "../Pages/Explore/Chapter";
import ChapterDetails from "../Pages/Explore/ChapterDetails";
import MyChapter from "../Pages/MyChapter/MyChapter";
import CreateNewChapter from "../Pages/MyChapter/CreateNewChapter";
import GreekModal from "../Pages/Modals/GreekModal";

import AdminNavbar from "../Pages/Navbar/AdminNavBar";
import ForgotDummy from "../Pages/VerifyYourself/ForgotDummy";
import Student from "../Pages/AdminPanel/Student";

import AdminNewChapter from "../Pages/AdminPanel/AdminNewChapter";
import ChapterList from "../Pages/AdminPanel/ChapterList";

import Termsandconditions1 from "../Pages/SignUp/Termsandconditions1";
import Termsandconditions2 from "../Pages/SignUp/Termsandconditions2";
import AdminChapters from "../Pages/AdminPanel/AdminChapters";
import AdminChapterView from "../Pages/AdminPanel/AdminChapterView";

import Events from "../Pages/Explore/Events";
import Peoples from "../Pages/Explore/Peoples";
import ChapterProfile from "../Pages/MyChapter/userchapters/ChapterProfile";
import ChapterRepo from "../Pages/MyChapter/userchapters/ChapterRepo";
import DocumentRepository from "../Pages/AdminPanel/Docrepository";
import Profileedit from "../Pages/Profile/ProfileEdit";
import ChapterMembers from "../Pages/MyChapter/userchapters/ChapterMembers";
import AdminViewMembers from "../Pages/AdminPanel/AdminViewMembers";



// console.log(checkUserProfile)
// console.log(localStorage.getItem("chekUserProfile"))
const checkUserProfile = localStorage.getItem("chekUserProfile");
export const ProtectedRoute = ({ children, role }) => {
  const is_auth = useSelector((store) => store.authenticated.is_auth);
  const userType = localStorage.getItem("userType");

  if (!is_auth) {
    return <Navigate to="/login" replace />;
  }

  // if (role && userType !== role ) {
  //   return  <Navigate to="/profilesetup" replace />;
  // }

  return children;
};

export const RedirectRoute = ({ children }) => {
  const temp = localStorage.getItem("chekUserProfile");
  const is_auth = useSelector((store) => store.authenticated.is_auth);
  const userType = localStorage.getItem("userType");

  console.log(localStorage.getItem("chekUserProfile"));

  if (is_auth) {
    if (userType === "Super Admin" && window.location.pathname === "/") {
      return <Navigate to="/student" replace />;
    }

    if (temp === null && window.location.pathname === "/") {
      return <Navigate to="/profilesetup" replace />;
    }
    if (temp === "Email") {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <RedirectRoute>
            <Home />
          </RedirectRoute>
        }
      />
      <Route
        path="/login"
        element={
          <RedirectRoute>
            <Login />
          </RedirectRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <RedirectRoute>
            <SignUp />
          </RedirectRoute>
        }
      />
      {/* <Route
        path="/verify"
        element={
          <RedirectRoute>
            <VerifyYourself />
          </RedirectRoute>
        }
      /> */}
      <Route
        path="/reset"
        element={
          <RedirectRoute>
            <ForgotPassword />
          </RedirectRoute>
        }
      />
      <Route
        path="/resetpassword"
        element={
          <RedirectRoute>
            <NewPassword />
          </RedirectRoute>
        }
      />
      <Route
        path="/success"
        element={
          <RedirectRoute>
            <Success />
          </RedirectRoute>
        }
      />
      <Route
        path="/signupverify"
        element={
          <RedirectRoute>
            <SignUpVerify />
          </RedirectRoute>
        }
      />
      <Route
        path="/forgotverify"
        element={
          <RedirectRoute>
            <ForgotDummy />
          </RedirectRoute>
        }
      />

      <Route
        path="/termsandconditions"
        element={
          <RedirectRoute>
            <Termsandconditions1 />
          </RedirectRoute>
        }
      />
      <Route
        path="/Termsandconditions2"
        element={
          <RedirectRoute>
            <Termsandconditions2 />
          </RedirectRoute>
        }
      />

      {/* Private Routes */}
      <Route
        path="/profilesetup"
        element={
          <ProtectedRoute>
            <ProfileSetUp />
          </ProtectedRoute>
        }
      />

<Route
        path="/profileEdit"
        element={
          <ProtectedRoute>
            <Profileedit />
          </ProtectedRoute>
        }
      />

      <Route
        path="/basicinformation"
        element={
          <ProtectedRoute>
            <BasicInfo />
          </ProtectedRoute>
        }
      />

      <Route
        path="/preference"
        element={
          <ProtectedRoute>
            <Preferences />
          </ProtectedRoute>
        }
      />
      <Route
        path="/academicinfo"
        element={
          <ProtectedRoute>
            <Acadamic />
          </ProtectedRoute>
        }
      />
      <Route
        path="/chapterDetails"
        element={
          <ProtectedRoute>
            <ChapterDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/explorechapter"
        element={
          <ProtectedRoute>
            <Chapter />
          </ProtectedRoute>
        }
      />
      <Route
        path="/exploreevents"
        element={
          <ProtectedRoute>
            <Events />
          </ProtectedRoute>
        }
      />
      <Route
        path="/explorepeoples"
        element={
          <ProtectedRoute>
            <Peoples />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mychapterprofile"
        element={
          <ProtectedRoute>
            <ChapterProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mychapterdocrepo"
        element={
          <ProtectedRoute>
            <ChapterRepo />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />


      <Route
        path="/my-chapter"
        element={
          <ProtectedRoute>
            <MyChapter />
          </ProtectedRoute>
        }
      />
      <Route
        path="/message-center"
        element={
          <ProtectedRoute>
            <Message />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/createnewchapter"
        element={
          <ProtectedRoute>
            <CreateNewChapter />
          </ProtectedRoute>
        }
      />
          <Route
        path="/mychaptermembers"
        element={
          <ProtectedRoute>
            <ChapterMembers/>
     
          </ProtectedRoute>
        }
      />
      <Route
        path="/adminNavBar"
        element={
          <ProtectedRoute>
            <AdminNavbar />
          </ProtectedRoute>
        }
      />

      {/* <Route path="/uploadrepo" 
      element={
        <ProtectedRoute>
          <DocRepo/>
        </ProtectedRoute>
      } /> */}

      {/* Routes Only for Super Admin */}
      <Route
        path="/student"
        element={
          <ProtectedRoute role="Super Admin">
            <Student />
          </ProtectedRoute>
        }
      />

      <Route
        path="/adminchapterview"
        element={
          <ProtectedRoute role="Super Admin">
            <AdminChapterView />
          </ProtectedRoute>
        }
      />
      <Route
        path="/chapterslist"
        element={
          <ProtectedRoute role="Super Admin">
            <AdminChapters />
          </ProtectedRoute>
        }
      />
      <Route
        path="/newChapter"
        element={
          <ProtectedRoute role="Super Admin">
            <AdminNewChapter />
          </ProtectedRoute>
        }
      />
      <Route
        path="/createchapter"
        element={
          <ProtectedRoute role="Super Admin">
            <ChapterList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/documentrepository"
        element={
          <ProtectedRoute role="Super Admin">
            <DocumentRepository />
          </ProtectedRoute>
        }
      />
       <Route
        path="/adminchapterview/viewmembers"
        element={
          <ProtectedRoute role="Super Admin">
            <AdminViewMembers />
          </ProtectedRoute>
        }
      />
      {/* Catch-all Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
