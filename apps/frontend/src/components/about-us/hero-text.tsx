import React from 'react'
import Badge from '../ui/badge'

const stack = ['nestJS','nextJS','expo','prismaORM', 'TailwindCSS','shadcn/ui']

export default function Text() {
  return (
    <div className='max-w-6xl w-full mx-auto font-mono space-y-3 px-2'>
        <div className='space-y-0.5'>
          <div className=' gap-2 flex flex-wrap'>
            {stack.map((item,index)=>(
              <Badge key={index}>{item}</Badge>
            ))}
          </div>
          <h1 className='text-5xl md:text-6xl font-bold'>Stars starter – One Codebase. Infinite Possibilities.</h1>
        </div>
        <p className='text-gray-300'>A modern, production-ready monorepo setup for web, backend, mobile, and shared packages. Streamline development, share code effortlessly, and manage all your projects in one place.</p>
        <div className='flex gap-2'>
            <button className='py-2 px-5 border rounded-xl font-semibold'>Get Started</button>
            <button className='py-2 px-5 border rounded-xl font-semibold '>GitHub</button>
        </div>
    </div>
  )
}