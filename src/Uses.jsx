import React from 'react'
import {skills } from './assets/constants/sections'

function Uses() {
  return (
    <div className=' mx-auto w-full grid grid-cols-1 gap-28 ' >
      <div className='  gap-3 mx-auto grid grid-cols-3'>
        <h1 className='sectionHeading  col-span-3 max-w-[800px]'>
        Technologies I use, and Tech stacks I have worked on.

        </h1>
        <p1 className=" col-start-1 col-span-3 lg:col-span-2 subText">
        From cutting-edge technologies to diverse tech stacks, I've built a repertoire of skills to power innovation and success

        </p1>
      </div>
      <div className='flex flex-col gap-12'>
          {
            skills.map(ele=>{
              return <div className='grid grid-cols-1 lg:grid-cols-12  gap-4'>
                    <p className='col-span-3 font-semibold text-[15px] '> {ele.name}</p>
                    <div className='col-span-9 grid grid-cols-1 gap-6  '>
                     {
                      ele.items.map(item=>
                        <div className='grid grid-cols-1 gap-3  '>
                        <h1 className='text-[18px] font-semibold '>{item.name}</h1>
                        <p className='subText text-[16px]'>{item.desc}</p>
                      </div>)
                     }
                     </div>

              </div>
            })
          }
      </div>
    </div>
  )
}

export default Uses