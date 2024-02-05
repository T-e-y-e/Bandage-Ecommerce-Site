"use client"

import React, { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store"
import {
    removeFromWishlist,
  } from "@/redux/slices/wishlistSlice";

export default function Wishlist() {  
  const wishlist = useSelector((state: RootState) => state.wishlist);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleRemoveFromWishlist = (product: any) => {
    dispatch(removeFromWishlist(product));
  };

  const isWishlistEmpty = wishlist.wishlistItems.length === 0;

  return (
    <div>
      <button className='flex items-center gap-2 hover:scale-105' onClick={handleOpen}>
           <img src="/icons/heart-icon.png" alt="heart-icon" />
            <span className='text-[#23A6F0] bg-transparent text-sm font-bold'>{wishlist.wishlistItems.length}</span>
        </button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div>
            <div className='h-screen flex flex-col justify-between fixed right-0 top-0 w-full md:w-max transform overflow-hidden bg-white p-6 text-left shadow-xl transition-all'>
              <div>
              <div className="flex items-center justify-between">
                    <h2
                  className="text-[#252B42] text-2xl font-bold"
                  >
                  Wishlist <span>({wishlist.wishlistItems.length})</span>
                </h2>
                <div>
                    <button className="font-bold flex justify-center items-center"
                    onClick={handleClose}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#23A6F0" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"></path></svg>
                   </button>
                 </div>
                </div>

                {/* Items */}
                 {!isWishlistEmpty && (
                    <>
                    {wishlist.wishlistItems.map((item) => (
                 <div key={item.id} className='flex justify-between items-center mt-10 border-b border-gray-100 py-3'>
                    <Link href={`/products/${item.id}`} className='flex items-center' onClick={handleClose}>
                     <div>
                      <img
                       src={item.thumbnail}
                       alt="headphones"
                       className='h-[50px] w-[50px]'
                      />
                     </div>
                     <div className='font-bold pl-3'>
                        <p className='text-sm text-[#252B42]'>
                            {item.title}
                        </p>
                        <p className='text-[#23856D]'>
                           ${item.price.toFixed(2)}
                        </p>
                     </div>
                    </Link>
                    <div className='flex items-center'>
                    <button onClick={() => handleRemoveFromWishlist(item)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="red" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"></path></svg>
                    </button>
                    </div>
                 </div>
                ))}
                    </>
                 )}
                 
                 {/* Empty Wislist */}
                 {isWishlistEmpty && (
                    <div className='flex flex-col items-center justify-center mt-40'>
                         <h2
                  className="text-[#252B42] text-2xl font-bold"
                  >
                  ..Ooops! Wishlist is empty
                </h2>
                <Link href="/products" className='bg-[#23A6F0] rounded-[5px] text-white text-sm font-bold uppercase py-3.5 px-4 mt-8' onClick={handleClose}>
                    Continue Shopping
                </Link>
                    </div>
                 )}
              </div>
            </div>
        </div>    
      </Backdrop>
    </div>
  );
}
