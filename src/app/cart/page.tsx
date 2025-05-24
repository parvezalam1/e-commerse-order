import Image from 'next/image'
import React from 'react'

export default function Cartpage() {
    return (
        <div className='flex flex-wrap'>
            {/* left container */}
            <div className='md:w-1/2 md:h-[87vh] w-full h-[43.9vh] flex justify-center flex-col gap-4 bg-gray-200'>
                {/* items */}
                <div className='flex justify-evenly items-center md:p-3 text-slate-600'>
                    <Image src={'/temporary/p1.png'} width={70} height={60} alt='' />
                    {/* text */}
                    <div className='flex flex-col'>
                        <h1 className='md:font-extrabold font-medium uppercase '>Sicilian pizza</h1>
                        <span className='font-medium'>Large</span>
                    </div>
                    {/* price */}
                    <div className='md:font-extrabold font-medium'>Rs.270</div>
                    {/* close */}
                    <div className='md:font-extrabold font-medium md:text-3xl text-md cursor-pointer'>X</div>
                </div>
                <div className='flex justify-evenly items-center md:p-3 text-slate-600'>
                    <Image src={'/temporary/p2.png'} width={70} height={60} alt='' />
                    {/* text */}
                    <div className='flex flex-col'>
                        <h1 className='md:font-extrabold font-medium uppercase '>Bacon Deluxe</h1>
                        <span className='font-medium'>Extra BBQ Sauce</span>
                    </div>
                    {/* price */}
                    <div className='md:font-extrabold font-medium'>Rs.120</div>
                    {/* close */}
                    <div className='md:font-extrabold font-medium md:text-3xl text-md cursor-pointer'>X</div>
                </div>
            </div>
            {/* right container  */}
            <div className='md:w-1/2 md:h-[87vh] w-full h-[43.9vh] flex justify-center flex-col gap-4 text-gray-800 bg-fuchsia-200'>
                <div className='lg:px-36 md:px-10 px-4 font-semibold flex gap-4 flex-col'>

                    {/* stubtotal */}
                    <div className='flex justify-between items-center'>
                        <h3 className=''>Sub Total (2 items)</h3>
                        <h5 className=''>Rs.390</h5>
                    </div>
                    {/* service cost  */}
                    <div className='flex justify-between items-center'>
                        <h3>Service Cost</h3>
                        <h5>Rs.0</h5>
                    </div>
                    {/* deliver cost  */}
                    <div className='flex justify-between items-center'>
                        <h3>Delivery Cost</h3>
                        <h5 className='text-green-500'>FREE!</h5>
                    </div>
                    {/* total  */}
                    <div className='flex justify-between items-center'>
                        <h3>TOTAL</h3>
                        <h5>Rs.390</h5>
                    </div>
                    <button className='bg-red-400 hover:bg-red-500 text-white font-extrabold text-xl uppercase'>Checkout</button>
                </div>
            </div>
        </div>
    )
}
