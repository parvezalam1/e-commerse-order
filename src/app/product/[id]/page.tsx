import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

export default function SinglePage() {
  return (
    <div className='flex md:flex-row flex-col md:h-[85vh]'>
      <div className='md:w-1/2 w-full md:h-full h-1/2 flex justify-center items-center p-3'>

        {
          // image container
          singleProduct.img &&
          <div className='relative w-3/4 md:h-[70vh] sm:h-[45vh] h-[35vh]'>
            <Image src={singleProduct.img} fill alt='' />
          </div>

        }
      </div>
      {/* // text container  */}
      <div className='lg:p-10 p-2 md:w-1/2 w-full md:h-full h-1/2 flex justify-center flex-col gap-2 md:gap-6'>
        <h1 className='font-extrabold text-xl text-slate-700 uppercase'>{singleProduct.title}</h1>
        <h1 className='font-medium text-md text-slate-700 text-justify'>{singleProduct.desc}</h1>
        <Price price={singleProduct.price} options={singleProduct.options} id={singleProduct.id} />
      </div>
    </div>
  )
}
