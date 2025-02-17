'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { SignedIn, SignOutButton, UserButton, useUser } from '@clerk/nextjs'
import { Logout } from '@mui/icons-material'
import { dark } from '@clerk/themes'
import Loader from './Loader'

const LeftSidebar = () => {
  const {isLoaded,user}=useUser()
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(false)
  const getUser=async()=>{
    const res=await fetch(`/api/user/${user?.id}`)
    const data=await res.json()
    setUserData(data)
    setLoading(false)
  }
  useEffect(()=>{
    getUser();
    return ()=>{};
  },[user])
  return loading?<Loader/> :(
    <div className='flex flex-col gap-6 overflow-auto h-screen  left-0 top-0 sticky px-10 py-6 max-md:hidden custom-scrollbar'>
      <Link href={"/"}><Image src={'/assets/logo.png'} alt='logo' width={200} height={200}/></Link>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-2 items-center text-light-1'>
          <Link href={"/"}><Image src={"/assets/phucmai.png"} alt='profile' width={50} height={50} className='rounded-full'/></Link>
          <p className='text-small-bold'>Ashok Pula</p>
        </div>
        <div className='flex justify-between text-light-1'>
          <div className='flex flex-col items-center'>
            <p className='text-base-bold'>1</p>
            <p className='text-tiny-medium'>Posts</p>
          </div>
          <div  className='flex flex-col items-center'>
            <p className='text-base-bold'>0</p>
            <p className='text-tiny-medium'>Followers</p>
          </div>
          <div  className='flex flex-col items-center'>
            <p className='text-base-bold'>0</p>
            <p className='text-tiny-medium'>Follwoing</p>
          </div>
        </div>
      </div>
      <hr />
      <Menu/>
      <hr/>
      <div className='flex gap-4 items-center'>
        <UserButton afterSignOutUrl="/" appearance={{baseTheme:dark}}/>
        <p className='text-light-1 text-body-bold'>Manage Account</p>
      </div>
      <SignedIn>
        <SignOutButton>
          <div className='flex cursor-pointer gap-4 items-center'>
          <Logout sx={{color:'white',fontSize:'32px'}}/>
          <p className='text-body-bold text-light-1 '>Logout</p>
          </div>
        </SignOutButton>
      </SignedIn>
    </div>
  )
}

export default LeftSidebar