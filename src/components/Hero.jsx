import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function Hero() {
  return (
    <div className='h-screen md-h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#fff"/>
        <div className='w-full p-4 z-9 relative text-center'>
            <h1 className="h-36 mt-10 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-900">Transforming Talent Into Triumph</h1>
            <p className="font-normal mb-20 text-xl md:text-2xl text-orange-600 max-w-lg mx-auto">Art | Guidance | Exposer</p>
            <div className="mt-10">
                <Link href={"/courses"}>
                <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-orange-600 border-neutral-200 dark:border-slate-800 font-bold text-lg" >
                    Courses
                </Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero