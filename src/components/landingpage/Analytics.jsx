import React from "react";
import { Link } from "react-router-dom";
import Laptop from "../../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">
            DASHBOARD ADMIN UNTUK CRUD DATA
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Kelola Data Secara Tepat Dan Akurat
          </h1>
          <p>
            Admin dapat menambah data, mengedit data, dan menghapus data. <br />
            Data yang ada adalah Admin, Siswa, Spp, Kelas, Pembayaran, Riwayat
            Pembayaran, Laporan Pembayaran
          </p>
          <Link
            to={"loginadmin"}
            className="bg-black hover:bg-gray-900 duration-300 text-center text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3"
          >
            Memulai
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
