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

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        setProducts(data.products.slice(0, isMobile ? 5 : 10));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, [isMobile]);


  return (
    <div className='grid grid-cols-5 gap-8 px-16'>
        {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id} className='flex flex-col justify-center bg-white gap-4 pb-4 mt-14 shadow-md rounded-sm hover:scale-105 transition delay-150'>
            <img src={product.thumbnail} alt={product.title} className='h-[234px] object-cover'/>
            <h5 className='text-center font-bold text-[#252B42]'>{product.title}</h5>
            <h5 className='text-center text-sm text-[#737373] font-bold'>{product.category}</h5>
            <p className='text-center font-bold flex gap-3 justify-center'>
                <span className='text-[#BDBDBD]'>${product.price} </span>
                <span className='text-[#23856D]'> ${product.discountPercentage}</span>
            </p>
        </Link>
      ))}
    </div>
  )
}

export default FeaturedProducts