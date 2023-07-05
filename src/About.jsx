import React from 'react'
import profile from './assets/pic.jpeg'
import { contacts, socials } from './assets/constants/sections'
import resume from './assets/resume_july.pdf'
function About() {
  return (
    <div  className='grid lg:grid-rows-2 gap-6 grid-cols-1 lg:grid-cols-2'>
        <div className=' lg:row-span-2 order-2 lg:order-none lg:col-start-1 lg:col-span-1
        '>
          <h1 className='sectionHeading'>
          I’m Manikanta Lopinti. I live in Vizianagaram,
           where I code my future.

          </h1>
          <div className='mt-12 flex flex-col subText gap-10'>
           <p1 >

           I have always had a passion for learning and embracing 
           emerging technologies as they enter the market
           The excitement of acquiring new skills and knowledge has been a driving force in my professional journey
            </p1>
            <p1 >
           Completed my undergraduate degree(<a  target="_blank" href='https://rguktn.ac.in/' className=' dark:text-white'> B.Tech </a>)at Rajiv Gandhi University 
            of Knowledge and Technology, Nuzvid. from 2019 to 2023,
             with an  average grade point of 8/10 CGPA
            </p1>
             <p1 >
             I pursued a two-year pre-university (<a   target="_blank"  href='https://rguktn.ac.in/' className=' dark:text-white'>Intermediate</a>) course from 2017 to
              2019 at Rajiv Gandhi University of Knowledge and Technology, Nuzvid with an average grade point of 8.6/10 CGPA
            </p1>
            <p1 >
          
I completed my schooling(<a target="_blank" href='https://vizianagaram.kvs.ac.in/' className=' dark:text-white'>X class</a>) at Kendriya Vidyalaya, Vizianagaram. 
 following the CBSE curriculum 
in the year of 2017 with Grade Points of 10/10 CGPA
            </p1>
            </div>
           </div>

        <div  className='lg:row-span-1 order-1 lg:order-none lg:col-start-2 lg:col-span-1'>
        <img src={profile}  className='object-contain lg:mx-auto rotate-3 rounded-2xl dark:saturate-50 w-6/12 lg:w-10/12' />
        </div>  
        <div className=' text-[13px]  lg:ml-10 h-fit flex flex-col  gap-4 order-3 lg:order-none lg:col-start-2  '>
        {socials.map(ele=>{
        return(
          <a href={ele.link} className='w-fit cursor-pointer group items-center flex gap-3'>
          {ele.icon}
          <p className='textColors' >Follow on {ele.name}</p>
          </a>
        )
        }) }
        <div className='mt-5 w-full  h-[0.1px] dark:bg-slate-700 bg-slate-500 '/>
        <div   className='mt-5 grid gap-4 '>
          {contacts.map(ele=>
            <a target='_blank' href={ele.link} className='group  cursor-pointer flex gap-3 items-center'>
             {ele.icon}
            <p className='textColors'>{ele.name}</p> 
            </a>)}
          
        </div>
       <div className='cursor-pointer bg-slate-100 hover:bg-zinc-200 dark:bg-zinc-800/75  dark:hover:bg-zinc-700/75 gap-1 justify-center  flex items-center rounded-lg p-2 lg:w-[170px] mt-4 w-full'> 

                <a href={resume} download="Mani_Resume"  > Download Resume </a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3   h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />

</svg>
</div>


        </div>
    </div>
  )
}

export default About