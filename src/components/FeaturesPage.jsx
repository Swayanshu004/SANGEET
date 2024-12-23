"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
 
const content = [
  {
    title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
    content: (
      <Image width={100} height={100} src="https://res.cloudinary.com/swayanshu/image/upload/v1734929019/sangeet/pexels-tima-miroshnichenko-6670807_ppeb4m.jpg" alt="na" className="h-full w-full object-cover"/>
    ),
  },
  {
    title: 'Live Feedback & Engagement',
    description:
      'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
  content: (
      <Image width={100} height={100} src="https://res.cloudinary.com/swayanshu/image/upload/v1734929012/sangeet/pexels-cottonbro-5650953_d9ovxr.jpg" alt="na" className="h-full w-full object-cover"/>
    ),
  },
  {
    title: 'Cutting-Edge Curriculum',
    description:
      'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
    content: (
        <Image width={100} height={100} src="https://res.cloudinary.com/swayanshu/image/upload/v1734929018/sangeet/pexels-maorattias-5192315_onmxcs.jpg" alt="na" className="h-full w-full object-cover"/>
      ),
  },
  {
    title: 'Limitless Learning Opportunities',
    description:
      'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
    content: (
        <Image width={100} height={100} src="https://res.cloudinary.com/swayanshu/image/upload/v1734929011/sangeet/pexels-brett-sayles-4054465_gt0lyb.jpg" alt="na" className="h-full w-full object-cover"/>
      ),
  }
];

function FeaturesPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <StickyScroll content={content} />
    </div>
  )
}

export default FeaturesPage