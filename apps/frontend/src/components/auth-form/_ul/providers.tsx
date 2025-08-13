import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'

export default function Providers() {
  return (
    <div className='w-full space-y-3 pt-5 pb-7'>
        <Button className={cn("w-full")} variant={"ghost"} >Войти через GITHUB</Button>
        <Button className={cn("w-full")} variant={"ghost"}>Войти через GOOGLE</Button>
    </div>
  )
}