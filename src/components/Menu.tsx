import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

export default function Menu() {
  let user=false;
  let [open,setOpen]=useState(false)

  return (
<>
     {
      open && 
      <ul className='z-40 fixed flex flex-col items-center justify-center text-white bg-gray-400 w-full h-screen top-24 gap-y-3'>
            <li><Link href={"/"}  className='font-extrabold text-1xl' onClick={()=>setOpen(false)}>HomePage</Link></li>
            <li><Link className='font-extrabold text-1xl' href={"/menu"} onClick={()=>setOpen(false)}>Menu</Link></li>
            <li><Link className='font-extrabold text-1xl' href={"/"} onClick={()=>setOpen(false)}>Contact</Link></li>
            <Link href={"/cart"} className='font-extrabold text-1xl px-1' onClick={()=>setOpen(false)}>Cart</Link>
       {
         !user?
         <Link  className='font-extrabold text-1xl' href={"/login"} onClick={()=>setOpen(false)}>Login</Link>:
         <Link  className='font-extrabold text-1xl' href={"/order"} onClick={()=>setOpen(false)}>Order</Link>
        } 
        <Link href={"/"} className='bg-lime-300 p-2' onClick={()=>setOpen(false)}>+91000000000</Link>
        <Link href={"/order"} className='shadow-2xl p-2' onClick={()=>setOpen(false)}>Orders</Link>

        </ul>
      }  
        <Image src={open?"/close.png":"/open.png"} width={25} height={25} alt='' className='md:hidden block cursor-pointer'
             onClick={()=>setOpen(prev=>!prev)}/>
              
</>

  )
}
