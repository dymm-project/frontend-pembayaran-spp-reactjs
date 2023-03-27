import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const FormEditSpp = () => {
  const [thn_ajaran, setThn_ajaran] = useState("");
  const [nominal, setNominal] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getDataById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/spp/${id}`);
        setThn_ajaran(response.data.data.thn_ajaran);
        setNominal(response.data.data.nominal);
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
    getDataById();
  }, [id]);

  const updateData = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/spp/${id}`, {
        thn_ajaran: thn_ajaran,
        nominal: nominal
      });
      navigate("/spp");
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
            Form Edit Spp
          </h1>
          <form onSubmit={updateData}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-white" for="username">
                  Tahun Ajaran
                </label>
                <select
                  value={thn_ajaran}
                  onChange={(e) => setThn_ajaran(e.target.value)}
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                >
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </div>
              <div>
                <label class="text-white" for="username">
                  Nominal
                </label>
                <input
                  id="username"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                  value={nominal}
                  onChange={(e) => setNominal(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <Link
                to={"/spp"}
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

export default FormEditSpp;
