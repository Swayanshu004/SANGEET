import React from 'react'
import Link from 'next/link';
import { Button } from './ui/moving-border';
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from 'next/image';


// interface courseStructure{
//     id: number,
//     title: string,
//     slug: string,
//     description: string,
//     price: number,
//     instructor: string,
//     isFeatured: boolean,
//     className: string,
//     image: string,
// }

function Highlights() {

    const courseData = {
        courses : [
            {
              "id": 1,
              "title": "Guitar Fundamentals",
              "slug": "guitar-fundamentals",
              "description": "Learn the basics of playing guitar with our comprehensive beginner's course.",
              "price": 99.99,
              "instructor": "John Doe",
              "isFeatured": true,
              "className": "md:col-span-2",
              "image": <Image src="https://images.pexels.com/photos/12544/pexels-photo-12544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/5 object-cover filter grayscale" alt="na"/>
            },
            {
              "id": 2,
              "title": "Piano for Beginners",
              "slug": "piano-for-beginners",
              "description": "Start your musical journey with foundational piano skills taught by expert instructors.",
              "price": 109.99,
              "instructor": "Jane Smith",
              "isFeatured": true,
              "className": "md:col-span-1",
              "image": <Image src="https://images.pexels.com/photos/5727883/pexels-photo-5727883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/5 object-cover filter grayscale" alt="na"/>
            },
            {
                "id": 3,
                "title": "Music Production Fundamentals",
                "slug": "music-production-fundamentals",
                "description": "Dive into music production with this introductory course on the basics of sound engineering and mixing.",
                "price": 149.99,
                "instructor": "Alex Wilson",
                "isFeatured": true,
                "className": "md:col-span-1",
                "image": <Image src="https://images.pexels.com/photos/159206/mixing-table-mixing-music-musician-159206.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-3/5 object-cover filter grayscale" alt="na"/>
            },
            {
                "id": 4,
                "title": "Songwriting Essentials",
                "slug": "songwriting-essentials",
                "description": "Learn the essentials of songwriting to express your musical creativity.",
                "price": 159.99,
                "instructor": "Samantha Miller",
                "isFeatured": true,
                "className": "md:col-span-1",
                "image": <Image src="https://images.pexels.com/photos/8626375/pexels-photo-8626375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/5 object-cover filter grayscale" alt="na"/>
            },
            {
                "id": 5,
                "title": "Electronic Music Production",
                "slug": "electronic-music-production",
                "description": "Create compelling electronic music with our course designed for beginners to advanced users.",
                "price": 169.99,
                "instructor": "Luke Harris",
                "isFeatured": true,
                "className": "md:col-span-1",
                "image": <Image src="https://images.pexels.com/photos/7140395/pexels-photo-7140395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/5 object-cover filter grayscale" alt="na"/>
            },
            {
              "id": 6,
              "title": "Drumming Mastery",
              "slug": "drumming-mastery",
              "description": "Master the drums with our comprehensive course covering all skill levels.",
              "price": 129.99,
              "instructor": "Mike Brown",
              "isFeatured": true,
              "className": "md:col-span-1",
              "image": <Image src="https://images.pexels.com/photos/237464/pexels-photo-237464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/5 object-cover filter grayscale" alt="na"/> 
            },
            {
              "id": 7,
              "title": "Advanced Vocal Techniques",
              "slug": "advanced-vocal-techniques",
              "description": "Enhance your singing with advanced vocal techniques for intermediate to advanced learners.",
              "price": 119.99,
              "instructor": "Emily Johnson",
              "isFeatured": true,
              "className": "md:col-span-2",
              "image": <Image src="https://images.pexels.com/photos/2774575/pexels-photo-2774575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/4 object-cover filter grayscale" alt="na"/> 
            },
            {
              "id": 8,
              "title": "Jazz Improvisation",
              "slug": "jazz-improvisation",
              "description": "Learn the art of jazz improvisation with this course designed for all levels.",
              "price": 139.99,
              "instructor": "Chris Davis",
              "isFeatured": false,
              "className": "md:col-span-1",
              "image": <Image src="https://images.pexels.com/photos/9419229/pexels-photo-9419229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/4 object-cover filter grayscale" alt="na"/> 
            },
            {
                "id": 9,
                "title": "Classical Music History",
                "slug": "classical-music-history",
                "description": "Explore the rich history of classical music from its origins to the present day.",
                "price": 179.99,
                "instructor": "Grace Lee",
                "isFeatured": false,
                "className": "md:col-span-1",
                "image": <Image src="https://images.pexels.com/photos/1653090/pexels-photo-1653090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/4 object-cover filter grayscale" alt="na"/> 
            }
        ]
    };
    const featuredCourses = courseData.courses.filter((course) => course.isFeatured);

  return (
    <div className=''> 
        <div className='text-center'>
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>
        <div className='mt-10'>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
        {featuredCourses.map((item, i) => (
            <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.image}
            className={item.className}
            />
        ))}
        </BentoGrid>
        </div>
        <div className='mt-20 text-center'>
            <Link href={"#"}>
            <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-orange-600 border-neutral-200 dark:border-slate-800 font-bold text-lg" >
                    All Courses
            </Button>
            </Link>
        </div>
    </div>
  )
}

export default Highlights