import React from 'react'
import Topbar from './Topbar'

const MainContainer = ({children}) => {
  return (
    <section className='flex flex-col flex-1 max-w-3xl px-4 py-10 md:px-10 lg:px-4 xl:px-20'>
      <Topbar/>
      {children}
    </section>
  )
}

export default MainContainer