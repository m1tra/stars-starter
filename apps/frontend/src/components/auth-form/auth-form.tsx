import React from 'react'
import Email from './_ul/email'
import Divider from './_ul/divider'
import Providers from './_ul/providers'
import Policy from './_ul/policy'

export default function AuthForm() {
  return (
    <div className=''>
      <Email/>
      <Divider/>
      <Providers/>
      <Policy/>
    </div>
  )
}