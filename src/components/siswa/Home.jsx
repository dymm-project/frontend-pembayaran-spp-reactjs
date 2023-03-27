import React from "react";
import { MdPayments } from "react-icons/md";
import { useSelector } from "react-redux";
import { FormatRupiah } from "@arismun/format-rupiah";

const Home = () => {
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
                    {user && user.nama}
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
          <h1 className="w-full text-2xl font-bold text-[#00df9a] font-ubuntu">
            Home
          </h1>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <div className="relative bg-gray-900 py-6 px-6 rounded-3xl w-56 my-4 shadow-xl border-y-4 border-teal-400">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-teal-500 left-4 -top-6">
                <MdPayments size={25} />
              </div>
              <div className="mt-8">
                <p className="text-xl text-white font-medium my-2 font-ubuntu">
                  SPP yang harus di bayar setiap 1 bulan
                </p>
                <div className="border-b-2"></div>
                <div className="flex space-x-2 text-white text-sm my-3">
                  <p className="font-medium">
                    Sejumlah :{" "}
                    <FormatRupiah value={user && user.spp.nominal} />
                  </p>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-900 py-6 px-6 rounded-3xl w-56 my-4 shadow-xl border-y-4 border-teal-400">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-teal-500 left-4 -top-6">
                <MdPayments size={25} />
              </div>
              <div className="mt-8">
                <p className="text-xl text-white font-medium my-2 font-ubuntu">
                  SPP yang harus dibayar selama 3 tahun
                </p>
                <div className="border-b-2"></div>
                <div className="flex space-x-2 text-white text-sm my-3">
                  <p className="font-medium">
                    Sejumlah :{" "}
                    <FormatRupiah value={user && user.spp.nominal * 36} />
                  </p>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-900 py-6 px-6 rounded-3xl w-56 my-4 shadow-xl border-y-4 border-teal-400">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-teal-500 left-4 -top-6">
                <MdPayments size={25} />
              </div>
              <div className="mt-8">
                <p className="text-xl text-white font-medium my-2 font-ubuntu">
                  SPP yang telah dibayarkan
                </p>
                <div className="border-b-2"></div>
                <div className="flex space-x-2 text-white text-sm my-3">
                  <p className="font-medium">
                    Sejumlah :{" "}
                    <FormatRupiah
                      value={user && user.spp.nominal * user.pembayarans.length}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="relative bg-gray-900 py-6 px-6 rounded-3xl w-56 my-4 shadow-xl border-y-4 border-teal-400">
              <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-teal-500 left-4 -top-6">
                <MdPayments size={25} />
              </div>
              <div className="mt-8">
                <p className="text-xl text-white font-medium my-2 font-ubuntu">
                  Sisa SPP yang harus dibayar
                </p>
                <div className="border-b-2"></div>
                <div className="flex space-x-2 text-white text-sm my-3">
                  <p className="font-medium">
                    Sejumlah :{" "}
                    <FormatRupiah
                      value={
                        user &&
                        user.spp.nominal * 36 -
                          user.spp.nominal * user.pembayarans.length
                      }
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
