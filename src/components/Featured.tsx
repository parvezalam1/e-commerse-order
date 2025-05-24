import { featuredProducts } from '@/data';
import Image from 'next/image';
import React from 'react';

export default function Featured() {
  return (
    <div className='w-full featured overflow-x-scroll'>

    <div className='w-max flex '>
    {
        featuredProducts.map((item)=>
        // card 
        <div key={item.id} className='p-3 hover:bg-red-50 w-screen md:w-[50vw] lg:w-[33vw] h-[70vh] transition-all duration-300 flex flex-col gap-4 justify-center items-center'>
            <div className='w-[90%] h-[40vh] hover:rotate-[45deg] scale-75 transition-all duration-500'>
           {item.img && <Image src={item.img} fill alt='' />}
            </div>
            {/* name */}
            <h2 className='px-1 font-bold md:text-xl text-lg text-slate-700'>{item.title}</h2>
            {/* about item */}
            <h3 className='p-1 font-bold md:text-lg texl-md text-slate-500'>{item.desc}</h3>
            {/* prize  */}  
            <h5 className='px-5 font-bold text-xl text-slate-700'>Rs.{item.price}</h5>
            <button className='bg-slate-200 hover:bg-gray-500 font-semibold text-red-600 px-3 py-1 hover:text-white'>Add to Cart</button>
        </div>
        )
    }
    </div>
    </div>
  )
}
