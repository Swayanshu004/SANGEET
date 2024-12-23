import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { WavyBackground } from './ui/wavy-background'

const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://res.cloudinary.com/swayanshu/image/upload/v1734929706/sangeet/pexels-okiki-onipede-1803710719-29876569_hhq5hq.jpg",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://res.cloudinary.com/swayanshu/image/upload/v1734929706/sangeet/pexels-ali-drabo-10956272-14122553_jeyxsy.jpg",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://res.cloudinary.com/swayanshu/image/upload/v1734929706/sangeet/pexels-okiki-onipede-1803710719-29876569_hhq5hq.jpg",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://res.cloudinary.com/swayanshu/image/upload/v1734929706/sangeet/pexels-ali-drabo-10956272-14122553_jeyxsy.jpg",
    },
];

function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground 
        speed='fast'
        className="w-screen mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-orange-600 font-bold text-center mb-10">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-oran text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mt-20 w-full">
                <AnimatedTooltip items={people} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructor