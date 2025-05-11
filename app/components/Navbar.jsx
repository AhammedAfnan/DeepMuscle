'use client';
import { useState } from 'react';
import { FiMenu, FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
import Image from 'next/image';
import MainLogo from '../assets/home/kreese.avif'

export default function Navbar() {

  return (
    <nav className="w-full flex justify-around items-center px-4 py-4 shadow-sm border-b bg-white">
      {/* Left - Menu Icon */}
      <div className="flex items-center">
        <FiMenu className="text-2xl cursor-pointer text-black" />
      </div>

      {/* Center - Logo */}
      <div className="">
        <Image src={MainLogo} alt='main-logo' className='w-[170px]' />
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-6">
        <FiSearch className="text-2xl cursor-pointer text-black" />
        <FiHeart className="text-2xl cursor-pointer text-black" />
        <FiShoppingCart className="text-2xl cursor-pointer text-black" />
        <FiUser className="text-2xl cursor-pointer text-black" />
      </div>
    </nav>
  );
}




