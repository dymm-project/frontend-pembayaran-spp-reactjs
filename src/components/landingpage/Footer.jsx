import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>PEMBAYARAN SPP</h1>
        <p className='py-4'>SMK BINA MANDIRI MULTIMEDIA <br /> CREATED BY DIMAS ABIDIN</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex gap-4 mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Admin</h6>
        <ul>
            <li className='py-2 text-sm'>Crud Admin</li>
            <li className='py-2 text-sm'>Crud Siswa</li>
            <li className='py-2 text-sm'>Crud Spp</li>
            <li className='py-2 text-sm'>Crud Class</li>
            <li className='py-2 text-sm'>Crud Payment</li>
            <li className='py-2 text-sm'>Crud Payment History</li>
            <li className='py-2 text-sm'>Crud Payment Report</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Siswa</h6>
        <ul>
            <li className='py-2 text-sm'>Profile</li>
            <li className='py-2 text-sm'>Payment History</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
