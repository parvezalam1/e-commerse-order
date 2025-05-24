import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-around items-center p-3'>
        {/* left  */}
        <div className='font-bold md:font-extrabold text-slate-800 text-[12px] sm:text-sm md:text-2xl'>Parvez Food Corner</div>
        {/* right */}
        <div className='font-bold md:font-extrabold text-slate-800 text-[12px] sm:text-sm md:text-1xl'>&copy; Rights All Reserved Key</div>
    </div>
  )
}
