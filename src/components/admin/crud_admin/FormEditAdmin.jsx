import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const FormEditAdmin = () => {
  const [namaAdmin, setNamaAdmin] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getAdminById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/admin/${id}`);
        setNamaAdmin(response.data.data.nama_admin);
        setUsername(response.data.data.username);
        setPassword(response.data.data.password);
        setConfPassword(response.data.data.password);
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
    getAdminById();
  }, [id]);

  const updateAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/admin/${id}`, {
        nama_admin: namaAdmin,
        username: username,
        password: password,
        confPassword: confPassword,
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
        pauseOnHover
        theme="dark"
      />
      <div className="w-7/12 m-10 mx-auto px-4 text-white">
        <div className="w-full p-6 bg-gray-900 rounded-md border-2 border-gray-800 shadow-md">
          <h1 className="text-2xl font-ubuntu font-bold text-center my-5 text-teal-400 capitalize">
            Form Edit Admin
          </h1>
          <form onSubmit={updateAdmin}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-white" for="username">
                  Nama Admin
                </label>
                <input
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                  value={namaAdmin}
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
                class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform font-medium bg-teal-500 rounded-md hover:bg-teal-700 focus:outline-none focus:bg-gray-600"
              >
                Back
              </Link>
              <button
                type="submit"
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormEditAdmin;
