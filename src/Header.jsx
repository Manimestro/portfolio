import React, { useState,useEffect ,Fragment } from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { userTheme,systemTheme } from './App'
import { Dialog, Transition } from '@headlessui/react'
import { navElements } from './assets/constants/sections'
function Header() {
    const [dark,setDark] =useState((userTheme === "dark" ||!userTheme && systemTheme))
    useEffect(()=>{
    
     function themeCheck(){
      if (userTheme === "dark" ||(!userTheme && systemTheme)){
            document.documentElement.classList.add("dark")
            return ;
      }
  
      
  }
  themeCheck()
  
    },[])
  
    
    function switchTheme(){
      setDark(dark=>!dark)
      if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme","light")
        return ;
      }
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme","dark")
      
    
    }
  return (
    <nav>
        
    {/* // Desktop navigation */}
    <div className='w-full flex justify-between'>
            <div></div>
            <div className='dark:ring-zinc-300/20  hidden sm:flex dark:bg-zinc-800 w-[420px]  ring-1 ring-slate-100 shadow-md rounded-full'>
            <div className='  cursor-pointer mx-auto w-fit  gap-10 flex  ' >
                {
                    navElements.map((item)=>{
                      return  <NavLink to={item.link} className={({isActive})=>isActive ?"activeNav":"nav"} key={item.title}>{item.title}</NavLink>
                    })
                }
           
           </div>
            </div>
      <div className="flex w-3/12 min-w-[140px] mr-6 sm:w-fit sm:min-w-[10px] gap-6 flex-row justify-start"> 
        <MyModal/>   
    <div className=' dark:bg-zinc-800 rounded-3xl ring-1 ring-gray-200 dark:ring-neutral-600 shadow-md dark:shadow-gray-800 w-14  flex justify-end'>
   
    <button className='  mx-auto  ' onClick={switchTheme}>{dark?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-[#38bdf8] h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>

}</button>
</div>
</div>  



    </div>
    {/* Mobile navigation */}

    </nav>
  )
}




 function Footer() {
  return (
    <div className='absolute left-0 bottom-0 w-full'>
                <div className='relative  bottom-0 h-[0.1px] bg-slate-400 dark:bg-slate-700'/>
    <section className='p-14  gap-6 text-sm grid  grid-cols-1 lg:grid-cols-2  justify-between '>

      <div className='lg:justify-start flex justify-center gap-4' >
      {
                    navElements.map((item)=>{
                      return  <NavLink to={item.link} className={({isActive})=>isActive ?"activeNav":"nav"} key={item.title}>{item.title}</NavLink>
                    })
                }
      </div>
      <div className='lg:justify-end flex justify-center'>
      © 2023 Manikanta Prasad. All rights reserved.
      </div>
    </section>
    </div>
  )
}



 function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  useEffect(()=>{
    function handleReze(){
      setIsOpen(false)
    }
    window.addEventListener("resize",handleReze)
    return ()=>window.removeEventListener("resize",handleReze)
  },[])

  return (
    <>
      <div className="sm:hidden ">
        <button
          type="button"
          onClick={openModal}
          className="dark:bg-zinc-800  px-3 flex justify-between rounded-3xl ring-1  ring-gray-200 dark:ring-neutral-600  items-center shadow-md dark:shadow-gray-800    py-2 text-sm  "
        >
          Menu
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3  stroke-2 ml-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0  " />
          </Transition.Child>

          <div className="fixed  top-0 w-full overflow-y-auto">
            <div className="flex min-h-full w-full  p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" transform overflow-hidden w-full rounded-2xl  moon p-6 text-left  shadow-xl transition-all">
                  <Dialog.Title
                    as="p"
                    className="text-sm  text-gray-600"
                  >
                    <div className='flex  items-center justify-between'>
                   <p > Navigation</p>
                    <button
                      type="button"
                      className="inline-flex justify-center dark:text-white  px-4 py-2 text-sm font-medium    "
                      onClick={closeModal}
                    >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

                    </button>
                    </div>
                  </Dialog.Title>
                  <div className="mt-2  w-full ">
                    <ul className=' grid gap-2 divide-y-[1px] dark:divide-zinc-500  ' >
                   {
                        navElements.map(ele=>{
                          return <Link to={ele.link} onClick={closeModal} className=''>{ele.title}</Link>
                        })
                   }
                   </ul>
                  </div>

                  <div className="mt-4">
                    
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export {Footer}
export default Header