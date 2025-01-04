'use client'
import { sidebarLinks } from '@constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Menu = () => {
  const pathname=usePathname()
  return (
    <div className='flex flex-col gap-2'>
      {
        sidebarLinks.map(link=>{
          const isActive=pathname===link.route
          return(
            <Link href={link.route} key={link.label} className={`flex gap-4 justify-start py-2 px-4 rounded-lg ${isActive && 'bg-purple-1'}`}>{link.icon} <p className='text-light-1'>{link.label}</p></Link>
          )
        })
      }
    </div>
  )
}

export default Menu