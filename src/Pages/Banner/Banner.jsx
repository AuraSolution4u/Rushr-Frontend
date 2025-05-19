import { Strings } from "../../Strings/Strings";

const Banner = () => {
  return (
    <div className="h-[603px] flex items-center justify-center homeBanner  relative top-[127px] ">
      <div className="w-[1240px] flex justify-end relative">
        <div className="flex items-center justify-center  absolute top-[-130px] right-[-150px] vector  h-[142.88px] w-[177px] ">
            {/* <p className="text-center text-h1 text-primeWhite mb-[25px]">LAUNCHING <br/> SOON!</p> */}
        </div>
        <div className="text-right h-[100%] w-[708px] text-primeWhite flex flex-col items-end gap-[45px] overflow-visible">
          <h3 className=" text-banner">
             {Strings.transform_the_way_your_chapter}
            <br /> {Strings.communicates_and_grows}
          </h3>
          <p className="text-h4">
             {Strings.rushr_is_the_first}
            <br />{Strings.plan_events}
            <br />
            {Strings.seamlessly_and_securely}
          </p>
          <button  className=" rounded-[30px] w-[224px] !h-[56px] bg-primary text-primeWhite px-[24px] py-[5px]  ">
          {Strings.get_on_our_waitlist}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;