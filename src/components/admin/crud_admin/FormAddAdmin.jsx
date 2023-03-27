import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const FormAddAdmin = () => {
  const [nama_admin, setNamaAdmin] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();

  const saveAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/admin", {
          nama_admin: nama_admin,
          username: username,
          password: password,
          confPassword: confPassword,
        })
        .then(() => {
          toast.success("Data Admin Berhasil Di Tambahkan", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
      navigate("/admin");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHove
        theme="dark"
      />
      <div className="w-7/12 m-10 mx-auto px-4 text-white">
        <div className="w-full p-6 bg-gray-900 rounded-md border-2 border-gray-800 shadow-md">
          <h1 className="text-2xl font-bold font-ubuntu text-center my-5 text-teal-400 capitalize">
            Form Add Admin
          </h1>
          <form onSubmit={saveAdmin}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-white" for="username">
                  Nama Admin
                </label>
                <input
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                  value={nama_admin}
                  onChange={(e) => setNamaAdmin(e.target.value)}
                />
              </div>
              <div>
                <label className="text-white" for="username">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="text-white" for="username">
                  Password
                </label>
                <input
                  id="username"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label className="text-white" for="username">
                  Confirm Password
                </label>
                <input
                  id="username"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                  value={confPassword}
                  onChange={(e) => setConfPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <Link
                to={"/admin"}
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform font-medium bg-teal-500 rounded-md hover:bg-teal-700 focus:outline-none focus:bg-gray-600"
              >
                Back
              </Link>
              <button
                type="submit"
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform font-medium bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormAddAdmin;
