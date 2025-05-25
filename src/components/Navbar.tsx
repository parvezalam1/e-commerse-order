"use client"
import React, { useState } from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    let user=false;
    return (
        <div className='flex justify-around items-center bg-stone-200 p-2'>
            {/* left */}
           <div className='md:block hidden gap-x-4'>
           <Link href={"/"}  className='font-extrabold text-1xl text-slate-800'>HomePage</Link>
           <Link href={"/menu"}  className='font-extrabold text-1xl text-slate-800 ml-4'>Menu</Link>
           <Link href={"/"}  className='font-extrabold text-1xl text-slate-800 ml-4'>Contact</Link>
           </div>
            {/* center  */}
            <div className='uppercase font-extrabold text-slate-700 text-xl'>Parvez alam</div>
            {/* right */}
            <div className='md:flex hidden gap-x-3 font-semibold'>
                {/* phone number */}
                <Link href={'/contact'} className='bg-yellow-200 px-1'>+91000000000</Link>
                {/* order */}
                {
                    !user?
                    <Link href={'/login'} className='bg-slate-200 px-1'>Login</Link>:
                    <Link href={'/orders'} className='bg-slate-200 px-1'>ORDER</Link>
                }
                {/* cart */}
                <Link href={'/cart'} className='hover:bg-red-300 shadow-lg text-gray-600 px-2'>Cart</Link>
            </div>
            <Menu />
        </div>
    )
}
