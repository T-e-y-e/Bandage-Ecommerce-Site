import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white w-screen">
        <div className="px-8 md:px-20 py-8 bg-[#FAFAFA] md:flex md:items-center md:justify-between">
         <span className='text-[#252B42] text-2xl font-bold'>Bandage</span>
<div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
    <Link href="#" className="texbasegray-4over:text-[#252B42]r:text-white">
          <img src="/icons/facebook.png" alt="facebook" />
          <span className="sr-only">Facebook page</span>
      </Link>
      <Link href="#" className="texbasegray-4over:text-[#252B42]r:text-white">
          <img src="/icons/instagram.png" alt="Instagram" />
          <span className="sr-only">Instagram</span>
      </Link>
      <Link href="#" className="texbasegray-4over:text-[#252B42]r:text-white">
          <img src="/icons/twitter.png" alt="Twitter" />
          <span className="sr-only">Twitter page</span>
      </Link>
</div>
</div>

    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8 md:px-20 pt-6 pb-8 lg:py-8">
        <div>
            <h2 className="mb-6 text-base font-bold text-[#252B42]">Company Info</h2>
            <ul className="text-[#737373] text-sm font-bold">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">About</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">We are hiring</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-base font-bold text-[#252B42]">Legal</h2>
            <ul className="text-[#737373] text-sm font-bold">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-base font-bold text-[#252B42]">Features</h2>
            <ul className="text-[#737373] text-sm font-bold">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Business Marketing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">User Analytic</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Live Chat</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Unlimited Support</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-base font-bold text-[#252B42]">Resources</h2>
            <ul className="text-[#737373] text-sm font-bold">
                <li className="mb-4">
                    <a href="#" className="hover:underline">iOS &amp; Android</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Watch a demo</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Customers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">API</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-base font-bold text-[#252B42]">Get in Touch</h2>
            <div className="flex">        
        <div className="relative w-full text-sm">
            <input type="search" className="block p-2.5 w-full z-10 text-sm text-gray-900 bg-[#F9F9F9] rounded-lg border border-[#E6E6E6]" placeholder="Your Email" required />
            <button type="submit" className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-[#23A6F0] rounded-e-lg border border-[#23A6F0]">
                <span>Subscribe</span>
            </button>
        </div>
    </div>
        </div>
    </div>
    
    <div className="px-24 py-6 bg-[#FAFAFA] md:flex md:items-center md:justify-between">
       <span className='text-[#737373] text-sm font-bold text-center md:text-left'>Made With Love By Finland All Right Reserved</span>
      </div>
  </div>
</footer>

  )
}

export default Footer

