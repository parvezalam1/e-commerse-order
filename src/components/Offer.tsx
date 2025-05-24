"use client"
import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

export default function Offer() {
    return (
        <div className='bg-black md:h-[70vh] h-[95vh]  flex flex-col justify-center py-5 md:bg-[url(/offerBg.png)]' >
            <h1 className='text-center font-extrabold md:text-4xl text-xl text-yellow-400'>Offer Product</h1>
            <div className='flex md:flex-row flex-col md:gap-0 gap-y-5  h-full md:p-8 p-5'>
                {/* left  */}
                <div className='relative flex w-full md:w-1/2 h-1/2 md:h-full justify-center items-center'>
                    <Image src={'/offerProduct.png'} fill alt='' />
                </div>
                {/* right */}
                <div className='flex w-full text-white md:w-1/2 h-1/2 md:h-full justify-center items-center gap-3 flex-col'>
                    <h2 className='font-extrabold text-3xl'>Delicious Burger & Fresh Fry</h2>
                    <h3 className='font-medium text-lg capitalize text-center'>
                        progressively simplify effective and process-centric method of empowwerment quickly pontificate parellet.
                    </h3>
                    <CountDown />
                    {/* <h5 className='font-extrabold text-xl'><CountDown/></h5> */}
                    <button className='px-4 py-2 rounded-md bg-red-500 text-white font-extrabold text-xl'>Order Now</button>
                </div>
            </div>
        </div>
    )
}
