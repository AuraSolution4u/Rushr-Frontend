import ModalSuccess from "../assets/ProfileSuccess.png";
import { Strings } from "../Strings/Strings";

const Dummy = () => {
  return (
    <div className=" w-full  max-w-[666px] min-w-[340px] mx-auto rounded-[18px] pt-[200px] bg-accent">
      <div className="flex flex-col items-center">
        <img
          className=" w-full  max-w-[666px] min-w-[340px] mx-auto  rounded-t-[18px] "
          src={ModalSuccess}
          alt=""
        />
        <div className=" py-[8px] px-[5px] text-center">
          <div className="  max-w-[555px] min-w-[262px] max-h-[92px] min-h-[72px] flex flex-col md:gap-[6px] gap-[12px] ">
     
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {Strings.profile_setup_successful}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {Strings.home_tag_line}
            </p>
          </div>
        </div>
        <button
    
          className="w-full max-w-[591px] min-w-[262px] max-h-[91px] min-h-[56px]  text-white py-[12px] md:py-[16px] px-[136px] bg-primary rounded-[8px]"
        >
          {Strings.go_to_dashboard}
        </button>
      </div>
    </div>
  );
};

export default Dummy;
