import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-teal-400 font-bold p-2'>
          SMK BINA MANDIRI MULTIMEDIA
        </p>
        <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold md:py-6'>
          Aplikasi SPP Berbasis Website
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
          Bahasa Programming
          </p>
          <Typed
          className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
            strings={['REACT JS', 'NODE JS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Aplikasi pemrograman berbasis web ini dibuat oleh Dimas Abidin</p>
        <span className='bg-teal-400 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Selamat Datang</span>
      </div>
    </div>
  );
};

export default Hero;
