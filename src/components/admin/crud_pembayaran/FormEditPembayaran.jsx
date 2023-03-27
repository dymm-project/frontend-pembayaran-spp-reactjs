import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const FormEditPembayaran = () => {
  const [valueSpp, setValueSpp] = useState([]);
  const [valueSiswa, setValueSiswa] = useState([]);
  const [valueBulan, setValueBulan] = useState([]);
  const [siswa, setSiswa] = useState("");
  const [spp, setSpp] = useState("");
  const [bulan, setBulan] = useState("");
  const [total, setTotal] = useState([]);
  const [thn_bayar, setThn_bayar] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getDataById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/pembayaran/${id}`);
        setSiswa(response.data.data.id_siswa);
        setSpp(response.data.data.id_spp);
        setBulan(response.data.data.id_bulan);
        setTotal(response.data.data.total);
        setThn_bayar(response.data.data.thn_bayar);
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
    dataSpp();
    dataBulan();
    dataSiswa();
    getDataById();
  }, [id]);

  const dataSpp = async () => {
    const res = await axios.get("http://localhost:5000/spp");
    setValueSpp(res.data.result);
  };

  const dataBulan = async () => {
    const res = await axios.get("http://localhost:5000/bulan");
    setValueBulan(res.data.data);
  };

  const dataSiswa = async () => {
    const res = await axios.get("http://localhost:5000/siswa");
    setValueSiswa(res.data.result);
  };

  const updateData = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/pembayaran/${id}`, {
        id_siswa: siswa,
        id_spp: spp,
        id_bulan: bulan,
        thn_bayar: thn_bayar,
        total: total,
      });
      navigate("/pembayaran");
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
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-white" for="username">
                  Nama Siswa
                </label>
                <select
                  value={siswa}
                  onChange={(e) => setSiswa(e.target.value)}
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                >
                  <option>--Pilih Siswa--</option>
                  {valueSiswa.map((siswa) => (
                    <option value={siswa.id_siswa}>{siswa.nama} | {siswa.kela.kelas} | {siswa.kela.jurusan}</option>
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
                  {valueSpp.map((spp) => (
                    <option value={spp.id_spp}>{spp.thn_ajaran} | {spp.nominal}</option>
                  ))}
                </select>
              </div>
              <div>
                <label class="text-white" for="username">
                  Bulan
                </label>
                <select
                  value={bulan}
                  onChange={(e) => setBulan(e.target.value)}
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                >
                  <option>--Pilih Bulan--</option>
                  {valueBulan.map((bulan) => (
                    <option value={bulan.id_bulan}>{bulan.bulan}</option>
                  ))}
                </select>
              </div>
              <div>
                <label class="text-white" for="username">
                  Tahun
                </label>
                <select
                  value={thn_bayar}
                  onChange={(e) => setThn_bayar(e.target.value)}
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                >
                  <option>--Pilih Tahun--</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </div>
              <div>
                <label class="text-white" for="username">
                  Jumlah Bayar
                </label>
                <input
                  id="username"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                />
              </div>
            </div>
            <div class="flex justify-between mt-6">
              <Link
                to={"/pembayaran"}
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

export default FormEditPembayaran;
