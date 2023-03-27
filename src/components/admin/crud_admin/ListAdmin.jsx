import React, { useState, useEffect } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ReactPaginate from "react-paginate";

const ListAdmin = () => {
  const [datas, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, ] = useState(5);
  const [, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getData();
  }, [page, keyword]);

  const getData = async () => {
    const response = await axios.get(
      `http://localhost:5000/admin?search_query=${keyword}&page=${page}&limit=${limit}`
    );
    setData(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  };

  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 4) {
      toast.info(
        "Jika Tidak Menemukan Data Yang Anda Cari, Silahkan Cari Data Dengan Kata Kunci Spesifik!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    } else {

    }
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setKeyword(query);
  };

  const deleteData = async (Id) => {
    await axios.delete(`http://localhost:5000/admin/${Id}`).then((res) => {
      toast.success("Data Admin Berhasil Di Hapus", {
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
    getData();
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
      <div className="w-8/12 h-full m-10 mx-auto bg-gray-900 shadow-lg rounded-md border-2 border-gray-800">
        <header className="px-5 py-4 border-b-2 border-gray-800 flex justify-between">
          <div>
            <h2 className="font-bold font-ubuntu text-2xl text-teal-400 my-5 py-1.5 px-2">
              Daftar Admin
            </h2>
          </div>
          <div>
            <Link
              to={"/admin/add"}
              className="bg-green-400 hover:bg-green-600 duration-300 w-32 my-5 py-1.5 px-2 rounded-md flex justify-center items-center text-black font-semibold"
            >
              <span className="mr-2"> Add Admin </span>
              <AiOutlinePlusCircle size={15} />
            </Link>
          </div>
        </header>
        <form onSubmit={searchData} className="flex justify-end mx-5 my-2 mt-4">
          <input
            id="username"
            type="text"
            className="block w-52 px-4 py-2 mr-1 text-white bg-gray-800 border border-gray-300 rounded-md focus:border-white focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nama Admin, Username"
          />
          <button
            type="submit"
            className="px-4 py-1.5 ml-1 font-medium text-black transition-colors duration-200 transform bg-teal-500 rounded-md hover:bg-teal-700 focus:outline-none focus:bg-gray-600"
          >
            Search
          </button>
        </form>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-white bg-gray-800">
                <tr>
                  <th className="p-2 whitespace-nowrap border border-gray-200">
                    <div className="font-semibold text-left">No</div>
                  </th>
                  <th className="p-2 whitespace-nowrap border border-gray-200">
                    <div className="font-semibold text-left">Nama Admin</div>
                  </th>
                  <th className="p-2 whitespace-nowrap border border-gray-200">
                    <div className="font-semibold text-left">Username</div>
                  </th>
                  <th className="p-2 whitespace-nowrap border border-gray-200">
                    <div className="font-semibold text-left">Edit/Delete</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {datas.map((data, index) => (
                  <tr key={data.id_admin}>
                    <td className="p-2 whitespace-nowrap font-medium text-white border border-gray-200">
                      <div className="text-center">{index + 1}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap font-medium text-white border border-gray-200">
                      <div className="text-center">{data.nama_admin}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap font-medium text-white border border-gray-200">
                      <div className="text-center">{data.username}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap font-medium border text-red-500 border-gray-200">
                      <div className="flex justify-center">
                        <Link
                          to={`/admin/edit/${data.id_admin}`}
                          className="bg-blue-600 hover:bg-blue-800 duration-300 w-20 py-1.5 my-2 px-2 rounded-md mr-2 flex justify-center items-center text-white"
                        >
                          <span className="mr-1.5"> Edit </span>{" "}
                          <AiOutlineEdit size={15} />
                        </Link>
                        <button
                          onClick={() => deleteData(data.id_admin)}
                          className="bg-red-600 hover:bg-red-800 duration-300 w-20 py-1.5 my-2 px-2 rounded-md ml-2 flex justify-center items-center text-white"
                        >
                          <span className="mr-1.5"> Delete </span>
                          <AiOutlineDelete size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between my-5">
              <div>
                <p className="text-sm text-white">
                  Page
                  <span className="font-medium"> {rows ? page + 1 : 0} </span>
                  Total Rows
                  <span className="font-medium"> {rows} </span>
                </p>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="flex">
                  <nav key={rows} role="navigation" aria-label="pagination" className="flex">
                    <ReactPaginate
                      previousLabel={"< Prev"}
                      nextLabel={"Next >"}
                      pageCount={Math.min(5)}
                      onPageChange={changePage}
                      containerClassName={"flex"}
                      pageLinkClassName={
                        "mx-0.5 py-1.5 px-3 text-sm text-white transition-all duration-300 bg-gray-700 hover:bg-gray-900"
                      }
                      previousLinkClassName={
                        "py-1.5 px-3 mr-1 text-sm text-white bg-gray-700 transition-all duration-300 hover:bg-gray-900"
                      }
                      nextLinkClassName={
                        "py-1.5 px-3 ml-1 text-sm text-white bg-gray-700 transition-all duration-300 hover:bg-gray-900"
                      }
                      activeLinkClassName={
                        "mx-0.5 py-1.5 px-3 text-sm text-black transition-all duration-300 bg-teal-500 hover:bg-teal-700"
                      }
                      disabledLinkClassName={"py-1.5 px-3 mr-1 text-sm text-white bg-gray-500 transition-all duration-300 hover:bg-gray-500"}
                    />
                  </nav>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListAdmin;
