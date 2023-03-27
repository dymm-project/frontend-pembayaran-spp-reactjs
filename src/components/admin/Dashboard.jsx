import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RiAdminFill } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlinePayments, MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

const Welcome = () => {
  const [dataAdmin, setDataAdmin] = useState([]);
  const [dataSiswa, setDataSiswa] = useState([]);
  const [dataKelas, setDataKelas] = useState([]);
  const [dataSpp, setDataSpp] = useState([]);
  const [dataPembayaran, setDataPembayaran] = useState([]);

  useEffect(() => {
    fetchAdmin();
    fetchKelas();
    fetchSpp();
    fetchSiswa();
    fetchPembayaran();
  }, []);

  const fetchAdmin = async () => {
    const res = await axios.get("http://localhost:5000/adminall");
    setDataAdmin(res.data.data);
  };
  const fetchSiswa = async () => {
    const res = await axios.get("http://localhost:5000/siswaall");
    setDataSiswa(res.data.data);
  };
  const fetchKelas = async () => {
    const res = await axios.get("http://localhost:5000/kelasall");
    setDataKelas(res.data.data);
  };
  const fetchSpp = async () => {
    const res = await axios.get("http://localhost:5000/sppall");
    setDataSpp(res.data.data);
  };
  const fetchPembayaran = async () => {
    const res = await axios.get("http://localhost:5000/pembayaranall");
    setDataPembayaran(res.data.data);
  };

  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="m-10">
        <div class="shadow" role="alert">
          <div class="flex mb-10">
            <div class="bg-gray-800 rounded-xl border-x-4 border-teal-400 w-full p-4">
              <div>
                <p class="text-white font-bold">
                  Selamat Datang,{" "}
                  <span className="text-teal-400">
                    {user && user.nama_admin}
                  </span>
                </p>
                <p class="text-white text-sm">
                  Selamat datang di Aplikasi SPP berbasis Website
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="w-full text-2xl font-bold text-teal-400 font-ubuntu">
              Dashboard
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <div className="relative bg-gray-900 py-6 px-6 rounded-3xl w-56 my-4 shadow-xl border-y-4 border-teal-400">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-teal-500 left-4 -top-6">
                <RiAdminFill size={25} />
              </div>
              <div className="mt-8">
                <p className="text-xl text-white font-medium my-2 font-ubuntu">
                  Data Admin
                </p>
                <div className="border-b-2"></div>
                <div className="flex space-x-2 text-white text-sm my-3">
                  <p className="font-medium">
                    Jumlah Data : {dataAdmin.length}
                  </p>
                </div>
                <div className="flex justify-end space-x-2 text-gray-400 text-sm mt-4 mb-3">
                  <Link
                    to={"/admin"}
                    className="font-medium text-[#00df9a] hover:underline"
                  >
                    Cek Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-900 py-6 px-6 rounded-3xl w-56 my-4 shadow-xl border-y-4 border-teal-400">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-teal-500 left-4 -top-6">
                <AiOutlineUser size={25} />
              </div>
              <div className="mt-8">
                <p className="text-xl text-white font-medium my-2 font-ubuntu">
                  Data Siswa
                </p>
                <div className="border-b-2"></div>
                <div className="flex space-x-2 text-white text-sm my-3">
                  <p className="font-medium">
                    Jumlah Data : {dataSiswa.length}{" "}
                  </p>
                </div>
                <div className="flex justify-end space-x-2 text-gray-400 text-sm mt-4 mb-3">
                  <Link
                    to={"/siswa"}
                    className="font-medium text-[#00df9a] hover:underline"
                  >
                    Cek Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-900 py-6 px-6 rounded-3xl w-56 my-4 shadow-xl border-y-4 border-teal-400">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-teal-500 left-4 -top-6">
                <SiGoogleclassroom size={25} />
              </div>
              <div className="mt-8">
                <p className="text-xl text-white font-medium my-2 font-ubuntu">
                  Data Kelas
                </p>
                <div className="border-b-2"></div>
                <div className="flex space-x-2 text-white text-sm my-3">
                  <p className="font-medium">
                    Jumlah Data : {dataKelas.length}
                  </p>
                </div>
                <div className="flex justify-end space-x-2 text-gray-400 text-sm mt-4 mb-3">
                  <Link
                    to={"/kelas"}
                    className="font-medium text-[#00df9a] hover:underline"
                  >
                    Cek Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-900 py-6 px-6 rounded-3xl w-56 my-4 shadow-xl border-y-4 border-teal-400">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-teal-500 left-4 -top-6">
                <MdOutlinePayments size={25} />
              </div>
              <div className="mt-8">
                <p className="text-xl text-white font-medium my-2 font-ubuntu">
                  Data Spp
                </p>
                <div className="border-b-2"></div>
                <div className="flex space-x-2 text-white text-sm my-3">
                  <p className="font-medium">Jumlah Data : {dataSpp.length}</p>
                </div>
                <div className="flex justify-end space-x-2 text-gray-400 text-sm mt-4 mb-3">
                  <Link
                    to={"/spp"}
                    className="font-medium text-[#00df9a] hover:underline"
                  >
                    Cek Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-900 py-6 px-6 rounded-3xl w-56 my-4 shadow-xl border-y-4 border-teal-400">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-teal-500 left-4 -top-6">
                <MdPayment size={25} />
              </div>
              <div className="mt-8">
                <p className="text-xl text-white font-medium my-2 font-ubuntu">
                  Data Pembayaran
                </p>
                <div className="border-b-2"></div>
                <div className="flex space-x-2 text-white text-sm my-3">
                  <p className="font-medium">
                    Jumlah Data : {dataPembayaran.length}
                  </p>
                </div>
                <div className="flex justify-end space-x-2 text-gray-400 text-sm mt-4 mb-3">
                  <Link
                    to={"/pembayaran"}
                    className="font-medium text-[#00df9a] hover:underline"
                  >
                    Cek Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
