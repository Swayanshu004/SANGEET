"use client"
import React from 'react'
import { GlareCard } from './ui/glare-card'
import Image from 'next/image'

function UpcomingWebinar() {
  return (
    <div className='w-screen h-fit flex flex-col items-center justify-around px-5'>
        <div className="text-center">
        <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">UPCOMING WEBINARS</h2>
        <p className="my-4 text-5xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">Enhance Your Musical Journey</p>
        </div>
        <div className='w-5/6 h-3/5 flex flex-col md:flex-row justify-between'>
          <div className='my-5'>
            <GlareCard className="flex flex-col items-center justify-center h-full">
              <Image
                width={100} height={100}
                className="h-full w-full absolute inset-0 object-cover"
                src="https://res.cloudinary.com/swayanshu/image/upload/v1734929984/sangeet/pexels-samir-ali-3916317-14449828_urld2z.jpg" alt='na'
              />
            </GlareCard>
            <h2 className='text-center mt-4 text-xl font-bold'>KOLKATA</h2>
          </div>
          <div className='my-5'>
            <GlareCard className="flex flex-col items-center justify-center h-full">
              <Image
                width={100} height={100}
                className="h-full w-full absolute inset-0 object-cover"
                src="https://res.cloudinary.com/swayanshu/image/upload/v1734929984/sangeet/pexels-anildonoji-17319808_-_Copy_pfoeeg.jpg" alt='na'
              />
            </GlareCard>
            <h2 className='text-center mt-4 text-xl font-bold'>BANGALORE</h2>
          </div>
          <div className='my-5'>
            <GlareCard className="flex flex-col items-center justify-center h-full">
              <Image
                width={100} height={100}
                className="h-full w-full absolute inset-0 object-cover"
                src="https://res.cloudinary.com/swayanshu/image/upload/v1734929984/sangeet/pexels-sanjay-kareer-223567388-13385089_soe45m.jpg" alt='na'
              />
            </GlareCard>
            <h2 className='text-center mt-4 text-xl font-bold'>DELHI</h2>
          </div>
        </div>
    </div>
  )
}

export default UpcomingWebinar