import { menu } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MenuPage() {
  return (
    <div className='flex justify-center h-[calc(100vh-6rem)] md:h-[calc(100vh - 9rem)] items-center md:flex-row flex-col p-4 md:p-14 xl:p-30'>
      {
        menu.map((item) =>
          <Link href={`/menu/${item.slug}`} style={{backgroundImage:`url(${item.img})`}} key={item.id}
           className={`w-full md:h-1/2 h-1/3 flex bg-cover flex-row gap-3 md:p-8 p-1 bg-${item.color}`}>
            {/* text container */}
            <div className='md:w-3/4 w-1/2 flex justify-center items-center flex-col gap-3 text-center'>
              <h2 className={`md:font-bold font-medium md:text-xl text-lg text-${item.color}`}>{item.title}</h2>
              <h5 className={`text-sm text-${item.color}`}>{item.desc}</h5>
              <button className={`hidden md:block py-2 px-5 rounded-2xl text-${item.color==="black"?"white":"red-600"} bg-${item.color}`}>Explore</button>
            </div>
          </Link>
        )
      }
    </div>
  )
}
