"use client"
import React from 'react'
import { GlareCard } from './ui/glare-card'

function UpcomingWebinar() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-around'>
        <div className="text-center">
        <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">UPCOMING WEBINARS</h2>
        <p className="mt-2 text-5xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">Enhance Your Musical Journey</p>
        </div>
        <div className='w-5/6 h-3/5 flex justify-between'>
          <div>
            <GlareCard className="flex flex-col items-center justify-center h-full">
              <img
                className="h-full w-full absolute inset-0 object-cover"
                src="https://images.pexels.com/photos/14449828/pexels-photo-14449828.jpeg?auto=compress&cs=tinysrgb&w=600" alt='na'
              />
            </GlareCard>
            <h2 className='text-center mt-4 text-xl font-bold'>KOLKATA</h2>
          </div>
          <div>
            <GlareCard className="flex flex-col items-center justify-center h-full">
              <img
                className="h-full w-full absolute inset-0 object-cover"
                src="https://images.pexels.com/photos/14864072/pexels-photo-14864072.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='na'
              />
            </GlareCard>
            <h2 className='text-center mt-4 text-xl font-bold'>DELHI</h2>
          </div>
          <div>
            <GlareCard className="flex flex-col items-center justify-center h-full">
              <img
                className="h-full w-full absolute inset-0 object-cover"
                src="https://images.pexels.com/photos/17083659/pexels-photo-17083659/free-photo-of-golden-statue-in-vidhana-soudha-in-bangalore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='na'
              />
            </GlareCard>
            <h2 className='text-center mt-4 text-xl font-bold'>BANGALORE</h2>
          </div>
        </div>
    </div>
  )
}

export default UpcomingWebinar