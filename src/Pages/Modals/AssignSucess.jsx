import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";

 const AssignSuccess = ({ message, onClose ,setShowSuccessModal}) => {
    const navigate = useNavigate();
    console.log(message,"message")
  
    const handleOk = () => {
      if (message==="Admin Assigned Successfully"){
        onClose();

      }
      else if (message==="Admin Un Assigned Successfully"){

        setShowSuccessModal()
      }

      // 
      
        navigate("/chapterslist");
      
     
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
        <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-lg text-center">
          <img src={Logo} alt="brand" />
          <p className="text-black text-lg font-semibold">{message}</p>
          <button
            onClick={handleOk}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
          >
            OK
          </button>
        </div>
      </div>
    );
  };
  

  export default AssignSuccess