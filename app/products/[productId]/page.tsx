"use client"

import BestSellerProducts from '@/components/Best-Seller-Products';
import Brands from '@/components/Brands';
import Loader from '@/components/Loader';
import Rating from '@mui/material/Rating';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store"
import {
  addToCart,
} from "@/redux/slices/cartSlice";
import {
  addToWishlist,
} from "@/redux/slices/wishlistSlice";
import Breadcrumb from '@/components/Breadcrumb';
import { BorderColor } from '@mui/icons-material';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string,
  category: string;
  thumbnail: string;
  images: string[]
}

const SingleProduct = () => {

  const dispatch = useDispatch();
  const params: any = useParams();
  const productId  = params.productId;
  const [product, setProduct] = useState<Product | null>(null);
  const [discountedPrice, setDiscountedPrice] = useState<number | null>(null);
  const [availability, setAvailability] = useState<string>("");

  useEffect(() => {
    console.log(params)
    const fetchProduct = async () => {
      try {
        if (!productId) {
          return;
        }

        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await response.json();

        setProduct(data as Product);
        calculateDiscountedPrice(data.price, data.discountPercentage);
        determineAvailability(data.stock);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const calculateDiscountedPrice = (price: number, discountPercentage: number) => {
    const discountAmount = (price * discountPercentage) / 100;
    const discountedPrice = price - discountAmount;
    setDiscountedPrice(discountedPrice);
  };

  const determineAvailability = (stock: number) => {
    if (stock > 0) {
      setAvailability("In Stock");
    } else {
      setAvailability("Out of Stock");
    }
  };

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product: any) => {
    dispatch(addToWishlist(product))
  }

  return (
    <div className='bg-[#FAFAFA]'>
      <div className='px-8 md:px-40 pt-12'>
        <Breadcrumb />
      </div>
      {product ? (
        <>
          <section className='py-12'>
            <div className='px-8 pb-14 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20'>
              <div>
               <img src={product.thumbnail} alt={product.title} className='h-[450px] w-full object-cover'/>
              </div>
              <div>
                <div>
                 <h5 className='text-xl text-[#252B42] mt-4'>{product.title}</h5>
                 <div className='mt-4 flex items-center gap-4'>
                  <Rating 
                    name="read-only" 
                    value={product.rating} 
                    readOnly 
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: "#F3CD03",
                      },
                    }}
                    />
                  <p className='text-sm font-bold text-[#737373]'>10 Reviews</p>
                 </div>
                 <div className='mt-4'>
                  {discountedPrice !== null && (
                    <h4 className='text-[#252B42] font-bold text-2xl'> ${discountedPrice.toFixed(2)}</h4>
                  )}
                 </div>
                 <p className='font-bold text-sm mt-4'>
                  <span className='text-[#737373]'>Availability: </span>
                  <span className='text-[#23A6F0]'>{availability}</span>
                 </p>
                </div>
                <div className='border-t-2 mt-16 pt-6'>
                  <div className='flex gap-4 items-center'>
                    <button className='h-[30px] w-[30px] rounded-full bg-[#23A6F0]'></button>
                    <button className='h-[30px] w-[30px] rounded-full bg-[#2DC071]'></button>
                    <button className='h-[30px] w-[30px] rounded-full bg-[#E77C40]'></button>
                    <button className='h-[30px] w-[30px] rounded-full bg-[#252B42]'></button>
                  </div>
                  <div className='flex gap-4 items-center mt-8'>
                    <div>
                      <button className='bg-[#23A6F0] rounded-[5px] text-white text-sm font-bold py-3.5 px-4'>
                       Select Options
                     </button>
                    </div>
                    <div className='flex gap-4 items-center'>
                    <button onClick={() => handleAddToWishlist(product)}>
                      <img src="/images/like.png" alt="like" />
                    </button>
                    <button onClick={() => handleAddToCart(product)}>
                      <img src="/images/basket.png" alt="like" />
                    </button>
                    <button>
                      <img src="/images/more.png" alt="like" />
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white py-14 px-8 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-10'>
               <div>
               <div className='py-3 mb-6 border-b-2'>
                <h2 className=" text-[#252B42] text-base font-bold mt-3 uppercase">
                   Product Description
                  </h2>
               </div>
               <div className='font-medium text-base text-[#737373]'>
                <h2 className='text-[#252B42] text-2xl font-bold mb-2'>{product.title}</h2>
                <p className='text-xm font-bold mt-4'>Category: <span className='text-[#23A6F0]'>{product.category}</span></p>
                <p className='text-xm font-bold mt-4'>Brand: <span className='text-[#23A6F0]'>{product.brand}</span></p>
                <p className='mt-6'>
                  {product.description}
                </p>
               </div>
               </div>
               <div className='hidden md:block'>
               <img src={product?.images[1]} alt={product.title} className='h-[450px] w-full object-cover rounded-lg'/>
               </div>
            </div>
          </section>
          
          <section className='px-8 md:px-40 bg-[#FAFAFA]'>
            <BestSellerProducts />
            <Brands />
          </section>
        </>
      ) : (
        <div className='h-full flex items-center justify-center py-20'>
          <Loader />
        </div>
      )}
    </div>
  )
}

export default SingleProduct