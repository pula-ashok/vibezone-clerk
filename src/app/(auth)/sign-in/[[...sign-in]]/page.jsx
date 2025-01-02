import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center mt-5'><SignIn/></div>
  )
}

export default page