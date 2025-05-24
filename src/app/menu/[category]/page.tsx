import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryPage() {
  return (
    <div className='flex flex-wrap text-red-600'>
      {
        pizzas.map((item)=>
        <Link href={`/product/${item.id}`} key={item.id} 
        className='w-full sm:w-1/2 lg:w-1/3 h-[60vh] border-2 border-red-400 group even:bg-fuchsia-100 odd:bg-slate-100'>
          {/* image container  */}
          {

            item.img &&
            <div className='relative h-[80%]'>
            <Image src={item.img} className='scale-90' fill alt=''/>
            </div>
          }
          {/* text container  */}
          <div className='flex justify-between items-center p-3'>
            <div className='uppercase text-md'>{item.title}</div>
            <div className='text-md group-hover:hidden'>{item.price}</div>
            <button className='hidden group-hover:block bg-red-500 text-white rounded-md py-1 px-3'>Add to Cart</button>
          </div>
        </Link>
        )
      }
    </div>
  )
}
