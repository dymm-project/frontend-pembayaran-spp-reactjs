import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FormatRupiah } from "@arismun/format-rupiah";

const FormAddSiswa = () => {
  const [valueSpp, setValueSpp] = useState([]);
  const [valueKelas, setValueKelas] = useState([]);
  const [nama, setNama] = useState("");
  const [nisn, setNisn] = useState("");
  const [spp, setSpp] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");
  const [no_telp, setNo_Telp] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dataSpp();
    dataKelas();
  }, []);

  const dataSpp = async () => {
    const res = await axios.get("http://localhost:5000/spp");
    setValueSpp(res.data.result);
    console.log(res.data.result)
  };

  const dataKelas = async () => {
    const res = await axios.get("http://localhost:5000/kelas");
    setValueKelas(res.data.result);
    console.log(res.data.result)
  };

  const saveData = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/siswa", {
          id_kelas: kelas,
          id_spp: spp,
          nama: nama,
          nisn: nisn,
          alamat: alamat,
          no_telp: no_telp
        })
        .then(() => {
          toast.success("Data Siswa Berhasil Di Tambahkan", {
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
        pauseOnHove
        theme="dark"
      />
      <div className="w-7/12 m-10 mx-auto px-4 text-white">
        <div class="w-full p-6 bg-gray-900 rounded-md border-2 border-gray-800 shadow-md">
          <h1 class="text-2xl font-bold font-ubuntu text-center my-5 text-teal-400 capitalize">
            Form Add Siswa
          </h1>
          <form onSubmit={saveData}>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
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
                    <option value={value.id_spp}><FormatRupiah value={value.nominal}/></option>
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
            <div class="flex justify-between mt-6">
              <Link
                to={"/siswa"}
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

export default FormAddSiswa;
