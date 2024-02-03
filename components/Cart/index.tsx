import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from 'next/link';
import Image from "next/image";

export default function Cart() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <button className='flex items-center gap-2' onClick={handleOpen}>
           <img src="/icons/cart-icon.png" alt="cart-icon" />
            <span className='text-[#23A6F0] bg-transparent text-sm font-bold'>1</span>
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
                  Cart
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
                <div className='flex items-center mt-10 border-b border-gray-100 py-3'>
                    <div>
                      <Image
                       src='/images/media-img1.png'
                        width={50}
                        height={50}
                       alt="headphones"
                      />
                    </div>
                    <div className='font-bold pl-3'>
                        <p className='text-sm text-[#252B42]'>
                            Product name
                        </p>
                        <p className='text-[#23856D]'>
                            $25
                        </p>
                    </div>
                    <div className='font-bold px-8'>
                     <ButtonGroup variant="outlined" aria-label="outlined button group">
                       <Button>
                       <span className='font-bold text-lg'>-</span>
                       </Button>
                       <Button disabled>
                          <span className='font-bold text-lg'>1</span>
                       </Button>
                      <Button>
                        <span className='font-bold text-lg'>+</span>
                      </Button>
                      </ButtonGroup>
                    </div>
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="red" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"></path></svg>
                    </button>
                 </div>
              </div>

                <div className='mb-6'>
                <Button
                  variant="contained"
                  sx={{ width: "100%", marginTop: "1rem" }}
                >
                    <Link href="/checkout">Checkout</Link>
                 </Button>
                </div>
            </div>
        </div>    
      </Backdrop>
    </div>
  );
}
