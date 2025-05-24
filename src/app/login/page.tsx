import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Loginpage() {
    return (
        <div className='flex justify-center items-center h-[87vh]'>
            {/* login box */}
            <div className='shadow-lg lg:w-1/2 md:h-3/4 w-[90%] md:h-[60vh] flex flex-wrap'>
                {/* image container */}
                <div className='relative md:w-1/2 w-full md:h-full h-[30vh]'>
                    <Image src={'/loginBg.png'} fill alt='' />
                </div>
                {/* text container  */}
                <div className='md:w-1/2 w-full md:h-full h-[50vh] flex flex-col gap-4 text-slate-700 items-center justify-center'>
                    {/* title  */}
                    <div className='font-extrabold text-2xl '>Welcome</div>
                    <Link href={""} className='shadow-md w-60 p-3 capitalize font-medium text-md flex gap-4 justify-center items-center'>
                        <Image src={"/google.png"} width={25} height={25} alt='' />
                        <b>sing in with google</b>
                    </Link>
                    <Link href={""} className='shadow-md w-60 p-3 capitalize font-medium text-md flex gap-4 justify-center items-center'>
                        <Image src={"/facebook.png"} width={25} height={25} alt='' />
                        <b>sing in with facebook</b>
                    </Link>
                    <div>
                        Have a problem? <Link href={""} className='underline'>Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
