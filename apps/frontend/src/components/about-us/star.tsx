import React from 'react'
import Image from "next/image";

export default function Star() {
  return (
    <header className='mt-2 z-50'>
        <div className='flex font-mono font-bold text-6xl items-center'>
            <span>ST</span>
            <Image src={'star.svg'} width={70} height={70} alt="star"/>
            <span>RS</span>
        </div>
    </header>
  )
}