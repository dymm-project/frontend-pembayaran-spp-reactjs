import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-teal-400 font-ubuntu'>PEMBAYARAN SPP</h1>
      <ul className='hidden md:flex gap-3'>
        <Link to={"/loginadmin"} className='bg-teal-400 hover:bg-teal-600 duration-300 w-[200px] rounded-md font-medium my-6 text-center mx-auto py-3 text-black'>Login Admin</Link>
        <Link to={"/loginsiswa"} className='bg-teal-400 hover:bg-teal-600 duration-300 w-[200px] rounded-md font-medium my-6 text-center mx-auto py-3 text-black'>Login Siswa</Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-150%]'}>
        <h1 className='w-full text-2xl font-bold text-teal-400 m-4'>PEMBAYARAN <br /> SPP</h1>
        <Link to={"/loginadmin"} className='bg-teal-400 mr-1 m-4 hover:bg-teal-600 duration-300 w-[200px] rounded-md font-medium my-6 text-center mx-auto py-3 text-black'>Login Admin</Link>
        <Link to={"/loginsiswa"} className='bg-teal-400 ml-1 m-4 hover:bg-teal-600 duration-300 w-[200px] rounded-md font-medium my-6 text-center mx-auto py-3 text-black'>Login Siswa</Link>
      </ul>
    </div>
  );
};

export default Navbar;
