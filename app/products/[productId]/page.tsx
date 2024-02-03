"use client"

import BestSellerProducts from '@/components/Best-Seller-Products';
import Brands from '@/components/Brands';
import Loader from '@/components/Loader';
import Rating from '@mui/material/Rating';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "@/redux/slices/cartSlice";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  thumbnail: string;
  images?: string[]
}

const SingleProduct = () => {

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

  return (
    <div className='px-24'>
      {product ? (
        <>
          <section className='px-16'>
            <div className='grid grid-cols-2 gap-10'>
              <div>
               <img src={product.thumbnail} alt={product.title} className='h-[450px] w-full object-cover'/>
              </div>
              <div>
                <div>
                 <h5 className='text-xl text-[#252B42] mt-4'>{product.title}</h5>
                 <div className='mt-4'>
                  <Rating name="read-only" value={product.rating} readOnly />
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
                    <button>
                      <img src="/images/like.png" alt="like" />
                    </button>
                    <button>
                      <img src="/images/basket.png" alt="like" />
                    </button>
                    <button>
                      <img src="/images/more.png" alt="like" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className='px-40 bg-[#FAFAFA]'>
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