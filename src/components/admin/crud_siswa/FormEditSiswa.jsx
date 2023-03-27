import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const FormEditSiswa = () => {
  const [valueSpp, setValueSpp] = useState([]);
  const [valueKelas, setValueKelas] = useState([]);
  const [nama, setNama] = useState("");
  const [nisn, setNisn] = useState("");
  const [spp, setSpp] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");
  const [no_telp, setNo_Telp] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getDataById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/siswa/${id}`);
        setSpp(response.data.data.id_spp);
        setKelas(response.data.data.id_kelas);
        setNama(response.data.data.nama)
        setNisn(response.data.data.nisn)
        setAlamat(response.data.data.alamat)
        setNo_Telp(response.data.data.no_telp)
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
    dataSpp();
    dataKelas();
  }, [id]);

  const dataSpp = async () => {
    const res = await axios.get("http://localhost:5000/spp");
    setValueSpp(res.data.result);
  };

  const dataKelas = async () => {
    const res = await axios.get("http://localhost:5000/kelas");
    setValueKelas(res.data.result);
  };

  const updateData = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/siswa/${id}`, {
          id_kelas: kelas,
          id_spp: spp,
          nama: nama,
          nisn: nisn,
          alamat: alamat,
          no_telp: no_telp
      });
      navigate("/siswa");
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
            Form Edit Siswa
          </h1>
          <form onSubmit={updateData}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-white" for="username">
                  Nama
                </label>
                <input
                  id="username"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div>
                <label class="text-white" for="username">
                  Nisn
                </label>
                <input
                  id="username"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                  value={nisn}
                  onChange={(e) => setNisn(e.target.value)}
                />
            </div>
            <div>
                <label class="text-white" for="username">
                  Kelas
                </label>
                <select
                  value={kelas}
                  onChange={(e) => setKelas(e.target.value)}
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                >
                  <option>--Pilih Kelas--</option>
                  {valueKelas.map((value) => (
                    <option value={value.id_kelas}>{value.kelas} {value.jurusan}</option>
                  ))}
                </select>
              </div>
            <div>
                <label class="text-white" for="username">
                  Spp
                </label>
                <select
                  value={spp}
                  onChange={(e) => setSpp(e.target.value)}
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                >
                  <option>--Pilih Nominal--</option>
                  {valueSpp.map((value) => (
                    <option value={value.id_spp}>{value.nominal}</option>
                  ))}
                </select>
              </div>
              <div>
                <label class="text-white" for="username">
                  Alamat
                </label>
                <input
                  id="username"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
              <div>
                <label class="text-white" for="username">
                  No. Telp
                </label>
                <input
                  id="username"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                  value={no_telp}
                  onChange={(e) => setNo_Telp(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <Link
                to={"/siswa"}
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

export default FormEditSiswa;
