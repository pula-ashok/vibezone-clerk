import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const LeftSidebar = () => {
  return (
    <div className='flex flex-col gap-6 overflow-auto h-screen bg-red-400 left-0 top-0 sticky px-10 py-6 max-md:hidden custom-scrollbar'>
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
    </div>
  )
}

export default LeftSidebar