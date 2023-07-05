import React from 'react'
import { projects } from './assets/constants/sections'

function Projects() {
  return (
    <div className='mx-auto w-full grid grid-cols-1 gap-20 ' >
    <div className='  gap-3 mx-auto grid grid-cols-3'>
      <h1 className='sectionHeading lg:col-span-2 col-span-3 '>
      Things I’ve made trying to put my dent in my field .

      </h1>
      <p1 className=" col-start-1 col-span-3 lg:col-span-2 subText">
      Highlighting the key technologies used in my
       projects through  logos at the top of every section below there 

      </p1>
    </div>
    <div className=' grid grid-cols-6  gap-4'>

        {
          projects.map(ele=>{
            return (
            <div className='  dark:hover:bg-zinc-800/75  hover:bg-zinc-100    p-3 grid grid-cols-1 lg:col-span-2 md:col-span-3 gap-3 col-span-6 md:rounded-lg'>
            <div className='w-8  h-8'>{ele.logo}</div>
            <h1 className='text-[17px]'>{ele.name}</h1>
            <p className='leading-7 dark:text-gray-400'>{ele.description}</p>
            <a target='_blank' href={ele.project_link} className='cursor-pointer flex gap-3 items-center'>
              <svg className=' w-4 h-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path  stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
</svg>
            <p className='text-[12px]'>{ele.display_link}</p>
            </a>
            </div>
            )
          })
        }
        

   

      
    </div>

  </div>
  )
}

export default Projects