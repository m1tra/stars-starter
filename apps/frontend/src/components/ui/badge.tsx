import React from 'react'

type Props = {
    children:React.ReactNode
}

export default function badge({children}: Props) {
  return (
    <div className='px-2 py-0.5 rounded-full bg-gray-200 text-black text-sm'>{children}</div>
  )
}