import Link from 'next/link'
import React from 'react'

const checkout = () => {
  return (
    <div className='m-h-92 flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center my-40'>
                         <h2
                  className="text-[#252B42] text-3xl font-bold"
                  >
                  Coming Soon...
                </h2>
                <Link href="/products" className='bg-[#23A6F0] rounded-[5px] text-white text-sm font-bold uppercase py-3.5 px-4 mt-8'>
                    Continue Shopping
                </Link>
         </div>
    </div>
  )
}

export default checkout