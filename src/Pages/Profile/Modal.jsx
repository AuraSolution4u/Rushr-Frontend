import { useNavigate } from "react-router-dom";
import ModalSuccess from "../../assets/ProfileSuccess.png";
import { Strings } from "../../Strings/Strings";

const Modal = ({ isOpen, toggle }) => {
  const navigate = useNavigate();

  const updatedDetails = JSON.parse(localStorage.getItem("saveFormData"))

  console.log(updatedDetails.majorName)

  const handleDashboardClick = () => {
   // const response =  await up
    navigate("/dashboard");
  };
  if (!isOpen) return null;

  return (
    <div className="fixed   inset-0 h-[100vh] z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6">
      <div className="w-[450px]  bg-white rounded-2xl shadow-2xl overflow-hidden">
        <img className="w-full" src={ModalSuccess} alt="Success" />
        <div className="flex flex-col items-center p-6 text-center">
          <h5 className="text-xl sm:text-2xl font-bold text-gray-900">
            {updatedDetails.majorName===null ?Strings.profile_setup_successful :Strings.profile_updated_successfull}
          </h5>
          <p className="mt-2 text-sm sm:text-base text-gray-700">
            {updatedDetails.majorName===null ?Strings.home_tag_line : ""}
          </p>
          <button
            type="button"
            aria-label="Go to Dashboard"
            className="mt-4 w-full max-w-md bg-primary text-white py-3 sm:py-4 px-6 rounded-lg text-base sm:text-lg font-medium"
            onClick={handleDashboardClick}
          >
            {Strings.go_to_dashboard}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
