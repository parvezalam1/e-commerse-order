"use client"
import React, { useEffect, useState } from 'react'
type Props = {
    price: number,
    id: number,
    options?: { title: string; additionalPrice: number }[];
}
export default function Price({ price, id, options }: Props) {
    let [quantity, setQuantity] = useState(1)
    let [total, setTotal] = useState(price)
    let [selected, setSelected] = useState(0)
    useEffect(()=>{
        setTotal((options?price+options[selected].additionalPrice:price)*quantity)
    },[selected,quantity])
    return (
        <div className='flex gap-3 flex-col'>
            <h1 className='font-extrabold text-xl text-slate-700'>Rs.{total}</h1>
            <div className='flex gap-4'>
                {
                    options?.map((item, index) =>
                        <div key={item.title}
                            style={{
                                background: selected === index ? "rgb(248 113 113)" : "rgb(209 213 219)",
                                color: selected === index ? "white" : "black"
                            }}
                            onClick={()=>setSelected(index)}
                            className='cursor-pointer rounded-md py-2 px-4 font-extrabold text-md'>{item.title}</div>
                    )
                }
            </div>
            {/* quantity  */}
            <div className='flex justify-between items-center ring-1 ring-gray-500 p-2'>
                <div className='font-extrabold md:text-xl text-md text-slate-600'>Quantity</div>
                <div className='flex gap-3'>
                    <button className='font-extrabold text-md md:text-2xl' 
                    onClick={()=>setQuantity(prev=>prev>1?prev-1:1)}>&lt;</button>
                    <div className='font-extrabold text-md md:text-2xl'>{quantity}</div>
                    <button className='font-extrabold text-md md:text-2xl'
                     onClick={()=>setQuantity(prev=>prev<9?prev+1:9)}>&gt;</button>
                </div>
                <button className='font-extrabold lg:text-xl text-md rounded-md shadow-md bg-red-400 py-2 px-2 md:px-5 text-white'>Add to Cart</button>
            </div>
        </div>
    )
}
