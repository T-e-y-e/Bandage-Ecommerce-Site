"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  category: string;
  thumbnail: string;
};

const BestSellerProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [updatedPrices, setUpdatedPrices] = useState<number[]>([]);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        const initialProducts = data.products.slice(0, isMobile ? 5 : 8);
        const initialPrices = initialProducts.map((product: any) =>
          calculateDiscountedPrice(product.price, product.discountPercentage)
        );

        setProducts(initialProducts);
        setUpdatedPrices(initialPrices);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, [isMobile]);

  const calculateDiscountedPrice = (price: number, discountPercentage: number) => {
    const discountAmount = (price * discountPercentage) / 100;
    return price - discountAmount;
  };


  return (
    <div className='md:px-16'>
        <div className='py-6 border-b-2'>
          <h2 className=" text-[#252B42] text-2xl font-bold mt-3 uppercase">
            BEST SELLER PRODUCTS
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {products.map((product, index) => (
        <Link href={`/products/${product.id}`} key={product.id} className='flex flex-col justify-center bg-white gap-4 pb-4 mt-14 shadow-md rounded-sm hover:scale-105 transition delay-150'>
            <img src={product.thumbnail} alt={product.title} className='h-[234px] object-cover'/>
            <h5 className='text-center font-bold text-[#252B42]'>{product.title}</h5>
            <h5 className='text-center text-sm text-[#737373] font-bold'>{product.category}</h5>
            <p className='text-center font-bold flex gap-3 justify-center'>
                <span className='text-[#BDBDBD]'>${product.price} </span>
                <span className='text-[#23856D]'> ${updatedPrices[index].toFixed(2)}</span>
            </p>
        </Link>
      ))}
    </div>
    </div>
  )
}

export default BestSellerProducts