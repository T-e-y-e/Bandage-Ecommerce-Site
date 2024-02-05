"use client";

import Link from 'next/link'
import React, { useState } from 'react';
import Cart from '../Cart';
import Wishlist from '../Wishlist';

const Navbar = () => {

 const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
<nav className="bg-white w-full border-b sticky top-0 border-gray-200 px-8 md:px-14">
  <div className="flex flex-wrap items-center justify-between mx-auto py-4">
    <div className='flex items-center justify-between w-full md:w-max'>
     <Link href='/'>
       <span className='text-[#252B42] text-2xl font-bold'>Bandage</span>
     </Link>
       <div className='flex items-center gap-4 md:hidden'>
        <div className='flex items-center space-x-4 mr-2'>
        <div onClick={() => setMenuOpen(false)}>
            <Cart />
        </div>
        <div onClick={() => setMenuOpen(false)}>
            <Wishlist />
        </div>
        </div>
        <div className='md:hidden' onClick={handleToggleMenu}>
          <img src="/icons/hamburger-icon.png" alt="hamburger-icon" />
        </div>
       </div>
    </div>
  <div className={`items-center justify-between w-full md:flex md:w-auto ${menuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
    <ul className="flex flex-col items-center space-y-3 md:space-y-0 justify-center p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
      <li>
        <Link href="/" className="block py-2 px-3 text-[#23A6F0] bg-transparent text-sm font-bold md:p-0" aria-current="page" onClick={handleToggleMenu}>Home</Link>
      </li>
      <li>
            <Link href="/products" id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-[#737373] text-sm font-bold bg-transparent md:border-0 md:hover:text-[#23A6F0] md:p-0 md:w-auto">Shop <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></Link>
        </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-[#737373] text-sm font-bold rounded bg-transparent hover:text-[#23A6F0] md:p-0" onClick={handleToggleMenu}>About</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-[#737373] text-sm font-bold rounded bg-transparent hover:text-[#23A6F0] md:p-0" onClick={handleToggleMenu}>Blog</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-[#737373] text-sm font-bold rounded bg-transparent hover:text-[#23A6F0] md:p-0" onClick={handleToggleMenu}>Contact</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 px-3 text-[#737373] text-sm font-bold rounded bg-transparent hover:text-[#23A6F0] md:p-0" onClick={handleToggleMenu}>Pages</Link>
      </li>
    </ul>
  </div>
  <div className={`items-center justify-between w-full md:flex md:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
      <div className='flex flex-col items-center space-y-6 md:space-y-0 justify-center p-4 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-white'>
        <div className='flex items-center gap-2'>
            <img src="/icons/user-icon.png" alt="user-icon" />
            <div className='text-[#23A6F0] bg-transparent text-sm font-bold'>
                <span className='hover:underline cursor-pointer' onClick={handleToggleMenu}>Login</span> / 
                <span className='hover:underline cursor-pointer' onClick={handleToggleMenu}> Register</span>
            </div>
        </div>
        <button className='flex items-center hover:scale-105' onClick={handleToggleMenu}>
          <img src="/icons/search-icon.png" alt="search-icon" />
        </button>
        <div className='hidden md:flex items-center space-x-6'>
        <div>
            <Cart />
        </div>
        <div>
            <Wishlist />
        </div>
        </div>
      </div>
  </div>
  </div>
</nav>
  )
}

export default Navbar