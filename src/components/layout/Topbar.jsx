'use client'
import { Add, Search } from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Topbar = () => {
  const [search, setSearch] = useState('')
  const router=useRouter()
  return (
    <div className='flex justify-between items-center mt-6'>
      <div className='relative'>
        <input type="text" className='search-bar' placeholder='Search posts,people,...' value={search} onChange={e=>setSearch(e.target.value)}/>
        <Search className='search-icon' onClick={() => console.log(search)}/>
      </div>
      <button className='create-post-btn' onClick={()=>router.push('/create-post')}><Add/><p>Create A Post</p></button>
    </div>
  )
}

export default Topbar