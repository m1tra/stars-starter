import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Background({children}: Props) {
  return (
    <div className=' mx-auto  md:px-5 lg:px-20 w-full z-10 '>
        <div 
          className='bg-gradient-to-br pt-5 md:pt-10 rounded-2xl'
          style={{
              backgroundImage: `url('/noise.svg'), linear-gradient(to bottom right, #7c3aed, #f97316, #ec4899)`,
              backgroundBlendMode: 'overlay',
          }}
         >
          {children}
        </div>
    </div>
  )
}