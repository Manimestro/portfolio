import React from 'react'
import { experiences } from './assets/constants/sections'

export default function Work() {
  return (
    <div className='mx-auto w-full grid grid-cols-1 gap-28 ' >
      <div className='  gap-3 mx-auto grid grid-cols-3'>
        <h1 className='sectionHeading lg:col-span-2 col-span-3 '>
        Professional Journey , Industry Experience and Noteworthy Collaborations

        </h1>
        <p1 className=" col-start-1 col-span-3 lg:col-span-2 subText">
        The industry experience that i got till now and the companies i have worked with and tenure are  mentioned below there

        </p1>
      </div>
      <div className='flex flex-col gap-14  lg:gap-0 '>
          {
            experiences.map(ele=>{
              return <div className='grid p-4  lg:p-0 grid-cols-5 hover:bg-zinc-100 dark:hover:bg-zinc-800/75 dark:lg:hover:bg-inherit lg:hover:bg-inherit gap-2'>
                    <p className=' lg:col-span-2 py-0 lg:py-4  px-6 border-l-[3px] lg:border-l-[0.5px] lg:border-zinc-600 col-span-4  '> {ele.date}</p>
                    <div className='lg:col-span-3 p-4 col-span-5   dark:lg:hover:bg-zinc-800/75 dark:hover:bg-inherit hover:bg-zinc-100  rounded-lg '>
                      <h1 className='text-[20px] font-semibold '>{ele.company_name}</h1>
                      <p className='subText text-[16px] '>{ele.points}</p>
                    </div>
              </div>
            })
          }
      </div>
      
    </div>
  )
}
