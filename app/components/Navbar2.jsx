'use client';
import { useState } from 'react';
import { FiMenu, FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
import Image from 'next/image';
import MainLogo from '../assets/home/deepLogo.svg'

export default function Navbar2() {

  return (
    <nav className="w-full flex justify-around items-center px-4 py-6 shadow-sm bg-black">
      {/* Left - Logo */}
      <div className="flex items-center">
        <Image src={MainLogo} alt='main-logo' className='w-[150px]' />
      </div>

      {/* Center - Nav Items */}
      <div className="">
        <ul className="oswald flex gap-6 text-white font-semibold text-[20px]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-6">
        <FiSearch className="text-2xl cursor-pointer text-white" />
        <FiHeart className="text-2xl cursor-pointer text-white" />
        <FiShoppingCart className="text-2xl cursor-pointer text-white" />
        <FiUser className="text-2xl cursor-pointer text-white" />
      </div>
    </nav>
  );
}




