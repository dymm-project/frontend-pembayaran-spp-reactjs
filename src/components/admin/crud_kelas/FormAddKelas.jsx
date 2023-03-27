import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const FormAddKelas = () => {
  const [kelas, setKelas] = useState("");
  const [jurusan, setJurusan] = useState("");
  const navigate = useNavigate();

  const saveData = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/kelas", {
          kelas: kelas,
          jurusan: jurusan,
        })
        .then(() => {
          toast.success("Data Kelas Berhasil Di Tambahkan", {
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
      navigate("/kelas");
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
        <div class="w-full p-6 bg-gray-900 rounded-md border-2 border-gray-800 shadow-md">
          <h1 class="text-2xl font-bold font-ubuntu text-center my-5 text-teal-400 capitalize">
            Form Add Kelas
          </h1>
          <form onSubmit={saveData}>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-white" for="username">
                  Kelas
                </label>
                <select
                  value={kelas}
                  onChange={(e) => setKelas(e.target.value)}
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                >
                  <option>X</option>
                  <option>XI</option>
                  <option>XII</option>
                </select>
              </div>
              <div>
                <label class="text-white" for="username">
                  Jurusan
                </label>
                <select
                  value={jurusan}
                  onChange={(e) => setJurusan(e.target.value)}
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                >
                  <option>MM</option>
                  <option>RPL</option>
                  <option>TKJ</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between mt-6">
              <Link
                to={"/kelas"}
                class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform font-medium bg-teal-500 rounded-md hover:bg-teal-700 focus:outline-none focus:bg-gray-600"
              >
                Back
              </Link>
              <button
                type="submit"
                class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform font-medium bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
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

export default FormAddKelas;
