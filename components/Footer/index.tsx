import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-white w-screen">
        <div className="px-8 md:px-20 py-8 bg-[#FAFAFA] md:flex md:items-center md:justify-between">
         <span className='text-[#252B42] text-2xl font-bold'>Bandage</span>
<div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
    <a href="#" className="texbasegray-4over:text-[#252B42]r:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#23A6F0" viewBox="0 0 8 19">
                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
            </svg>
          <span className="sr-only">Facebook page</span>
      </a>
      <a href="#" className="texbasegray-4over:text-[#252B42]r:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#23A6F0" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
            </svg>
          <span className="sr-only">Discord community</span>
      </a>
      <a href="#" className="texbasegray-4over:text-[#252B42]r:text-white">
          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#23A6F0" viewBox="0 0 20 17">
            <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
        </svg>
          <span className="sr-only">Twitter page</span>
      </a>
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

