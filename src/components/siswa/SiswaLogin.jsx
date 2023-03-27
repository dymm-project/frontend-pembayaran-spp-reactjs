import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginSiswa, reset } from "../../features/authSlice";
import backgroundLogin from "../../assets/laptop.jpg";
import { FiLogIn} from "react-icons/fi";
import { BiLogOut } from "react-icons/bi"

const SiswaLogin = () => {
  const [nama, setNama] = useState("");
  const [nisn, setNisn] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/home");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginSiswa({ nama, nisn }));
  };
  return (
    <body className="min-h-screen text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <Link
            to={"/"}
            className=" bg-black hover:bg-gray-900 text-[#00df9a] tracking-wide font-semibold font-ubuntu w-40 py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
          >
            <span className="flex items-center">
              <BiLogOut className="mr-2" size={20}/> Back Menu
            </span>
          </Link>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold font-ubuntu mb-5">
              Login Siswa
            </h1>
            <form onSubmit={Auth}>
              {isError && (
                <div class="bg-red-200 border border-red-500 text-red-700 px-4 py-2.5 text-center rounded relative">
                  <strong class="font-bold font-ubuntu text-sm">
                    {message}
                  </strong>
                </div>
              )}
              <div className="w-full flex-1 mt-5">
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg placeholder:font-ubuntu font-ubuntu font-medium bg-black text-white focus:bg-gray-900 placeholder-white text-sm focus:outline-none"
                    placeholder="Username"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg placeholder:font-ubuntu font-ubuntu font-medium bg-black focus:bg-gray-900 text-white placeholder-white text-sm focus:outline-none mt-5"
                    type="password"
                    placeholder="Password"
                    value={nisn}
                    onChange={(e) => setNisn(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="mt-5 bg-black hover:bg-gray-900 text-[#00df9a] tracking-wide font-semibold font-ubuntu w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <span className="flex items-center">
                      {isLoading ? `Loading...` : "Login"}{" "}
                      <FiLogIn className="ml-2" size={20} />
                    </span>
                  </button>
                  <p className="mt-6 text-xs text-black text-center font-ubuntu">
                    I agree to abide by Kazutooo <span></span>
                    <a
                      href="!#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service <span></span>
                    </a>
                    and its <span></span>
                    <a
                      href="!#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy <span></span>
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="min-w-full min-h-full bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundLogin})` }}
          ></div>
        </div>
      </div>
    </body>
  );
};

export default SiswaLogin;
