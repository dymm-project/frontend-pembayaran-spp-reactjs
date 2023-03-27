import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import { useDispatch } from "react-redux";
import { LogOutSiswa, reset } from "../../../features/authSlice";
import { AiOutlineHistory } from "react-icons/ai"

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(LogOutSiswa());
        dispatch(reset());
        navigate("/loginsiswa")
    }
  const menus = [
    { name: "Home", link: "/home", icon: MdOutlineDashboard },
    { name: "History Pembayaran", link: "/historypembayaransiswa", icon: AiOutlineHistory },
  ];
  const [open, setOpen] = useState(true);
  return (
      <div
        className={`bg-gray-900 border-r-2 border-gray-800 min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-96 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
            <button onClick={logout} className="group flex items-center mt-5 text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md">
              <div><FiLogOut size={20}/></div>
              <h2
                style={{
                  transitionDelay: `00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "overflow-hidden"
                }`}
              >
                Logout
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-96 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                Logout
              </h2>
            </button>
        </div>
      </div>
  );
};

export default Home;