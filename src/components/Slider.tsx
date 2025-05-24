"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

let sliderItems=[
    {
        id:1,
        title:"Always Fresh & Always Cripsy & Always Hot",
        image:"/slide1.png"
    },
    {
        id:2,
        title:"We deliver your order wherever you are in Ny",
        image:"/slide2.png"
    },
    {
        id:3,
        title:"the best pizza to share with your family",
        image:"/slide3.jpg"
    },
]
export default function Slider() {
    let [currentSlider,setCurrentSlider]=useState(0)
    useEffect(()=>{
        let Interval=setInterval(()=>{
            setCurrentSlider((prev)=>(prev===sliderItems.length-1?0:prev+1))
        },5000)

        return ()=>clearInterval(Interval)
    },[])
  return (
    <div className='flex md:flex-row flex-col h-[87vh]'>
       
        {/* left  */}
        <div className='md:w-1/2 w-full md:h-screen order-2  h-1/2 flex justify-center items-center flex-col gap-4'>
            <div className="md:font-extrabold capitalize font-bold md:text-5xl text-2xl text-slate-800 p-5 text-center">
                {sliderItems[currentSlider].title}
                </div>
            <button className='px-4 py-2 bg-red-200 md:text-3xl text-1xl font-semibold md:font-extrabold'>Order Now</button>
            </div>
        {/* right */}
        <div className='md:w-1/2 w-full md:h-full h-1/2  relative md:order-2 order-1'>
        <Image src={sliderItems[currentSlider].image} fill alt=''/>
        </div>
      
    </div>
  )
}
