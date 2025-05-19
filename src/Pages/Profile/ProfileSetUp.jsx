import { useNavigate, Link } from "react-router-dom";
import BrandLogo from "../../assets/BrandLogo.svg";
import Illustration from "../../assets/Illustration.png";
import { useSelector } from "react-redux";
import { Strings } from "../../Strings/Strings";

const ProfileSetUp = () => {
  const navigate = useNavigate();
  const getUserData = useSelector((store) => store.authenticated.storeUserData);
  console.log(getUserData, "getUserData");
  const prevProfile = JSON.parse(localStorage.getItem("userProfile")) || {};

  const handleProfileSetup = () => {
    const userProfile = {
      emailId: getUserData.emailId,
      firstName: getUserData.firstName,
      lastName: getUserData.lastName,
      universityName: getUserData.universityName,
      otherUniversityName: getUserData.otherUniversityName,
      mobileNumber: getUserData.mobileNumber || null,
      bio: getUserData.bio || "",
      tags: getUserData.tags || [],
      graduationYear: getUserData.graduationYear || null,
      major: getUserData.major || null,
      notificationPreference: getUserData.notificationPreference || null,
      privacySettings: getUserData.privacySettings || null,
      dateOfBirth: getUserData.dateOfBirth || null,
      ...prevProfile,
    };
    localStorage.setItem("userIdName", getUserData.userId);
    localStorage.setItem("userProfile", JSON.stringify(userProfile));

    navigate("/basicinformation");
  };

  return (
    <div className="flex items-center justify-center h-[100vh] w-full pt-[120px] bg-gray-100 px-5 py-10">
      <div className="w-[500px] h-auto p-6 rounded-2xl border bg-primeWhite flex flex-col items-center text-center">
        {/* Logo Section */}
        <div className="w-full flex flex-col items-center gap-6">
          <img alt="welcome logo" src={BrandLogo} className="h-20 w-16" />
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl text-profileSetUp font-semibold">
              {Strings.welcome_to_rushr}
            </h1>
            <p className="text-sm md:text-base text-profileSetUp">
              {Strings.setup_profile_text}
            </p>
          </div>
        </div>

        {/* Illustration */}
        <img alt="illustration" src={Illustration} className="w-10/12 sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto" />

        {/* Button Section */}
        <div className="w-full pt-6 flex justify-center">
          <Link to="/basicinformation" className="w-full max-w-sm">
            <button
              onClick={handleProfileSetup}
              className="bg-primary w-full h-14 rounded-lg text-primeWhite text-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              {Strings.setup_profile}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetUp;
