import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"
import { Strings } from "../../Strings/Strings";
const PasswordModalSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bgsmallscreen md:bg-bglargescreen h-[100vh]  px-4">
      <div className="bg-primeWhite shadow-lg flex flex-col items-center w-[340px] h-[345px] rounded-[16px] p-6">
        {/* Text Section */}
        <img src={Logo} alt="success-logo" />
        <div className="flex-grow flex flex-col justify-center items-center">
          <h2 className="text-log text-center font-semibold">
            {Strings.password_changed_sucessfully}
          </h2>
        </div>

        {/* Button Section */}
        <div className="mt-4 w-full">
          <Link to="/login">
            <button
              type="submit"
              className="w-full h-[48px] rounded-[24px] bg-primary text-primeWhite font-medium"
            >
              {Strings.login}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordModalSuccess;
