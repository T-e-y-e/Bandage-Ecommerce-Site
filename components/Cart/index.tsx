"use client"

import React, { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store"
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "@/redux/slices/cartSlice";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };
  
  const handleDecreaseCart = (product: any) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product: any) => {
    dispatch(removeFromCart(product));
  };

  const isCartEmpty = cart.cartItems.length === 0;

  return (
    <div>
      <button className='flex items-center gap-2 hover:scale-105' onClick={handleOpen}>
           <img src="/icons/cart-icon.png" alt="cart-icon" />
            <span className='text-[#23A6F0]  text-sm bg-transparent font-bold'>{cart.cartItems.length}</span>
        </button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <div>
            <div className='h-screen flex flex-col justify-between fixed right-0 top-0 min-w-80 transform overflow-hidden bg-white p-6 text-left shadow-xl transition-all'>
              <div>
              <div className="flex items-center justify-between">
                    <h2
                  className="text-[#252B42] text-2xl font-bold"
                  >
                  Cart <span>({cart.cartItems.length})</span>
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
                 {!isCartEmpty && (
                    <>
                    {cart.cartItems.map((item) => (
                 <div key={item.id} className='flex justify-between items-center mt-10 border-b border-gray-100 py-3'>
                    <div className='flex items-center'>
                    <div>
                      <img
                       src={item.thumbnail}
                       alt={item.title}
                       className='h-[50px] w-[50px]'
                      />
                    </div>
                    <div className='font-bold pl-3'>
                        <p className='text-sm text-[#252B42]'>
                            {item.title}
                        </p>
                        <p className='text-[#23856D]'>
                           ${item.discountedPrice}
                        </p>
                    </div>
                    </div>
                    <div className='flex items-center'>
                    <div className='font-bold px-8'>
                     <ButtonGroup variant="outlined" aria-label="outlined button group">
                       <Button onClick={() => handleDecreaseCart(item)}>
                         <span className='font-bold text-lg'>-</span>
                       </Button>
                       <Button disabled>
                          <span className='font-bold text-lg'>{item.cartQuantity}</span>
                       </Button>
                      <Button onClick={() => handleAddToCart(item)}>
                        <span className='font-bold text-lg'>+</span>
                      </Button>
                      </ButtonGroup>
                    </div>
                    <button onClick={() => handleRemoveFromCart(item)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="red" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"></path></svg>
                    </button>
                    </div>
                 </div>
                ))}
                    </>
                 )}
                 
                 {/* Empty Cart */}
                 {isCartEmpty && (
                    <div className='flex flex-col items-center justify-center mt-40'>
                         <h2
                  className="text-[#252B42] text-2xl font-bold"
                  >
                  ..Ooops! Cart is empty
                </h2>
                <Link href="/products" className='bg-[#23A6F0] rounded-[5px] text-white text-sm font-bold uppercase py-3.5 px-4 mt-8' onClick={handleClose}>
                    Continue Shopping
                </Link>
                    </div>
                 )}
              </div>

               {/* Cart Footer */}
                <div className='mb-6'>
                    <div className='flex justify-between items-center font-bold'>
                        <span className='text-[#737373]'>SubTotal:</span>
                        <span className='text-[#252B42] text-lg'>${cart.cartTotalAmount.toFixed(2)}</span>
                    </div>
                <Button
                  variant="contained"
                  sx={{ 
                    width: "100%", 
                    marginTop: "1rem",
                    backgroundColor: '#23A6F0',
                    fontWeight: 'bold', 
                }}
                  disabled={isCartEmpty}
                >
                    <Link href="/checkout" onClick={handleClose} className='py-2'>Checkout</Link>
                 </Button>
                </div>
            </div>
        </div>    
      </Backdrop>
    </div>
  );
}
