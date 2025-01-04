import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import React from 'react'

const page = () => {
  return (
    <div className="flex justify-center mt-10">
        <SignUp appearance={{baseTheme:dark}}/>
    </div>
  )
}

export default page