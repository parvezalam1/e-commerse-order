import React from 'react'

export default function Orderpage() {
    return (
        <div className='flex w-full h-[87vh] justify-center'>
            <table className='h-fit lg:w-3/4 w-full mt-7 border-separate border-spacing-1'>
                <thead className='bg-red-200 text-left '>
                    <tr className=''>
                        <th className='py-4 px-3 hidden md:block'>Order ID</th>
                        <th className='py-4 px-3 '>Date</th>
                        <th className='py-4 px-3 '>Price</th>
                        <th className='py-4 px-3  hidden md:block'>Products</th>
                        <th className='py-4 px-3 '>Status</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className='text-sm md:text-base bg-gray-200'>
                        <td className='py-4 px-3 hidden md:block'>12398392192</td>
                        <td className='py-4 px-3 '>15/05/2025</td>
                        <td className='py-4 px-3 '>140</td>
                        <td className='py-4 px-3 hidden md:block'>Big Pizza Menu(2), Veggie Pizza</td>
                        <td className='py-4 px-3'>On the way approx (10 min)...</td>
                    </tr>
                    <tr className='text-sm md:text-base '>
                        <td className='py-4 px-3 hidden md:block'>12398392192</td>
                        <td className='py-4 px-3 '>15/05/2025</td>
                        <td className='py-4 px-3 '>140</td>
                        <td className='py-4 px-3 hidden md:block'>Big Pizza Menu(2), Veggie Pizza</td>
                        <td className='py-4 px-3'>On the way approx (10 min)...</td>
                    </tr>
                    <tr className='text-sm md:text-base bg-emerald-200'>
                        <td className='py-4 px-3 hidden md:block'>12398392192</td>
                        <td className='py-4 px-3 '>15/05/2025</td>
                        <td className='py-4 px-3 '>140</td>
                        <td className='py-4 px-3 hidden md:block'>Big Pizza Menu(2), Veggie Pizza</td>
                        <td className='py-4 px-3'>On the way approx (10 min)...</td>
                    </tr>
                 
                </tbody>
            </table>
        </div>
    )
}
