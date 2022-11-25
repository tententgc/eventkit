import React from "react";
// import mission100 from "../assets/images/mission100.png";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed z-[999] h-[7vh] bg-[#424245] top-0 left-0 w-full shadow-lg flex items-center px-[5vw] py-8 border-b-4 border-primary">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          {/* <img
            src={mission100}
            alt=""
            className="w-[3rem] h-[3rem] cursor-pointer"
            onClick={() => (window.location.href = "/")}
          /> */}
          <p
            className="flex flex-col mt-2 hover:underline cursor-pointer decoration-secondary max-sm:hidden"
            onClick={() => (window.location.href = "/")}
          >
            <span className="text-white text-sm">
              Eventkit - Event organizer platform
            </span>
            <span className="text-white text-sm max-md:hidden">
              tententgc and people in team
            </span>
          </p>
        </div>
        <div className="flex gap-5">
          <div>
            <p
              onClick={() => navigate("/tools")}
              className="flex flex-col mt-2 hover:underline decoration-secondary cursor-pointer"
            >
              <span className="text-white text-[12px] max-md:font-[2vw]">
                อุปกรณ์ช่วยเหลือ
              </span>
              <span className="text-white text-[12px] max-md:hidden">
                Organization tools
              </span>
            </p>
          </div>
          <div>
            <p
              onClick={() => navigate("/contact")}
              className="flex flex-col mt-2 hover:underline decoration-secondary cursor-pointer"
            >
              <span className="text-white text-[12px] max-md:font-[2vw]">
                ติดต่อเรา/สนับสนุน
              </span>
              <span className="text-white text-[12px] max-md:hidden">
                Contact/Support
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
