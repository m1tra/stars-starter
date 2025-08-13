import Link from 'next/link'
import React from 'react'

export default function Policy() {
  return (
    <p className="text-center text-white/60 text-xs">Нажимая продолжить вы соглашаетесь с&nbsp;
        <Link href='/agreements' className="underline">Пользовательским соглашением</Link>
        &nbsp;и&nbsp; 
        <Link href='/policy' className="underline">Политикой конфиденциальности</Link>.
    </p>
  )
}