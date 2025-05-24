"use client"
import React, { useState } from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    let user=false;
    return (
        <div className='flex relative  justify-around items-center bg-stone-200 p-2'>
            {/* left */}
           <div className='md:block hidden gap-x-4'>
           <Link href={"/"}  className='font-extrabold text-1xl text-slate-800'>HomePage</Link>
           <Link href={"/menu"}  className='font-extrabold text-1xl text-slate-800 ml-4'>Menu</Link>
           <Link href={"/contact"}  className='font-extrabold text-1xl text-slate-800 ml-4'>Contact</Link>
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
                <Link href={'/cart'} className='bg-red-300 px-1'>Cart</Link>
            </div>
            <Menu />
        </div>
    )
}
