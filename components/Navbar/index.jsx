"use client";

import Link from 'next/link'
import React, { useState } from 'react';
import Cart from '../Cart';

const Navbar = () => {

 const [menuOpen, setMenuOpen] = useState(false);
 const [showCart, setShowCart] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
<nav className="bg-white w-full border-b border-gray-200 px-8 md:px-14">
  <div className="flex flex-wrap items-center justify-between mx-auto py-4">
    <div className='flex items-center justify-between w-full md:w-max'>
     <Link href='/'>
       <span className='text-[#252B42] text-2xl font-bold'>Bandage</span>
     </Link>
       <div className='md:hidden' onClick={handleToggleMenu}>
          <img src="/icons/hamburger-icon.png" alt="hamburger-icon" />
        </div>
    </div>
  <div className={`items-center justify-between w-full md:flex md:w-auto ${menuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
    <ul className="flex flex-col items-center space-y-3 md:space-y-0 justify-center p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
      <li>
        <a href="#" className="block py-2 px-3 text-[#23A6F0] bg-transparent text-sm font-bold md:p-0" aria-current="page">Home</a>
      </li>
      <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-[#737373] text-sm font-bold bg-transparent md:border-0 md:hover:text-[#23A6F0] md:p-0 md:w-auto">Shop <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
        </li>
      <li>
        <a href="#" className="block py-2 px-3 text-[#737373] text-sm font-bold rounded bg-transparent hover:text-[#23A6F0] md:p-0">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-[#737373] text-sm font-bold rounded bg-transparent hover:text-[#23A6F0] md:p-0">Blog</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-[#737373] text-sm font-bold rounded bg-transparent hover:text-[#23A6F0] md:p-0">Contact</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-[#737373] text-sm font-bold rounded bg-transparent hover:text-[#23A6F0] md:p-0">Pages</a>
      </li>
    </ul>
  </div>
  <div className={`items-center justify-between w-full md:flex md:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
      <div className='flex flex-col items-center space-y-6 md:space-y-0 justify-center p-4 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-white'>
        <div className='flex items-center gap-2'>
            <img src="/icons/user-icon.png" alt="user-icon" />
            <span className='text-[#23A6F0] bg-transparent text-sm font-bold'>Login / Register</span>
        </div>
        <button className='flex items-center'>
          <img src="/icons/search-icon.png" alt="search-icon" />
        </button>
        {/* <button className='flex items-center gap-2' onClick={() => setShowCart(!showCart)}>
           <img src="/icons/cart-icon.png" alt="cart-icon" />
            <span className='text-[#23A6F0] bg-transparent text-sm font-bold'>1</span>
        </button> */}
        <div>
            <Cart />
        </div>
        <button className='flex items-center gap-2' onClick={() => setShowCart(!showCart)}>
           <img src="/icons/heart-icon.png" alt="heart-icon" />
            <span className='text-[#23A6F0] bg-transparent text-sm font-bold'>1</span>
        </button>
      </div>
  </div>
  </div>
</nav>
  )
}

export default Navbar