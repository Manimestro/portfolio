import React from 'react'
import Header, { Footer } from './Header';
import { Outlet } from 'react-router';
function Layout() {
  return (
    <div className=' select-none relative main   sm:w-11/12 w-full   moon min-h-screen' > 
    <div className='grid gap-32  sm:p-3 w-full sm:w-11/12 max-w-[1200px] mx-auto '>
      <div className='peer z-10 top-0 w-full'>
          <Header />
      </div>
      <div className='p-3  md:p-0'>
      <Outlet />
      </div>
      <div className='mt-24'>
      <Footer/>
      </div>
    </div>
</div>
  )
}

export default Layout