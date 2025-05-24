"use client"
import React from 'react'
import Countdown from 'react-countdown'
const endingDate=new Date("2023-07-25")

export default function CountDown() {
  return (
    <Countdown className='text-white' date={endingDate}/>
  )
}
