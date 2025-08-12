import React from 'react'

type Props = {
    children:React.ReactNode
}

export default function badge({children}: Props) {
  return (
    <div className=''>{children}</div>
  )
}