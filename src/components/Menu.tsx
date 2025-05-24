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
      <ul className='z-40 flex flex-col items-center justify-center bg-red-400 absolute w-full h-screen top-10    gap-y-3'>
            <li><Link href={"/"}  className='font-extrabold text-1xl text-slate-800' onClick={()=>setOpen(false)}>HomePage</Link></li>
            <li><Link className='font-extrabold text-1xl text-slate-800' href={"/menu"} onClick={()=>setOpen(false)}>Menu</Link></li>
            <li><Link className='font-extrabold text-1xl text-slate-800' href={"/contact"} onClick={()=>setOpen(false)}>Contact</Link></li>
            <Link href={"/"} className='font-extrabold text-1xl text-slate-800 px-1' onClick={()=>setOpen(false)}>Cart</Link>
       {
         !user?
         <Link  className='font-extrabold text-1xl text-slate-800' href={"/login"} onClick={()=>setOpen(false)}>Login</Link>:
         <Link  className='font-extrabold text-1xl text-slate-800' href={"/order"} onClick={()=>setOpen(false)}>Order</Link>
        } 
        <Link href={"/"} className='bg-lime-300 p-2' onClick={()=>setOpen(false)}>+91000000000</Link>

        </ul>
      }  
        <Image src={open?"/close.png":"/open.png"} width={25} height={25} alt='' className='md:hidden block cursor-pointer'
             onClick={()=>setOpen(prev=>!prev)}/>
              
</>

  )
}
