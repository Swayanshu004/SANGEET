"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

function page() {
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
              "image": <img src="https://images.pexels.com/photos/12544/pexels-photo-12544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/5 object-cover filter grayscale" alt="na"/>
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
              "image": <img src="https://images.pexels.com/photos/5727883/pexels-photo-5727883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/5 object-cover filter grayscale" alt="na"/>
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
                "image": <img src="https://images.pexels.com/photos/159206/mixing-table-mixing-music-musician-159206.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-3/5 object-cover filter grayscale" alt="na"/>
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
                "image": <img src="https://images.pexels.com/photos/8626375/pexels-photo-8626375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/5 object-cover filter grayscale" alt="na"/>
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
                "image": <img src="https://images.pexels.com/photos/7140395/pexels-photo-7140395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/5 object-cover filter grayscale" alt="na"/>
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
              "image": <img src="https://images.pexels.com/photos/237464/pexels-photo-237464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/5 object-cover filter grayscale" alt="na"/> 
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
              "image": <img src="https://images.pexels.com/photos/2774575/pexels-photo-2774575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/4 object-cover filter grayscale" alt="na"/> 
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
              "image": <img src="https://images.pexels.com/photos/9419229/pexels-photo-9419229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/4 object-cover filter grayscale" alt="na"/> 
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
                "image": <img src="https://images.pexels.com/photos/1653090/pexels-photo-1653090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-3/4 object-cover filter grayscale" alt="na"/> 
            }
        ]
    };
  return (
    <div>
        <h1 className="text-center text-5xl font-bold mt-20">All Courses [ {courseData.courses.length} ]</h1>
        <div className="flex flex-wrap justify-center gap-8">
            {
                courseData.courses.map((item, i)=>( 
                <CardContainer className="inter-var">           
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                        {item.title}
                        </CardItem>
                        <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                        {item.description}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                        {item.image}
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://twitter.com/mannupaaji"
                            target="__blank"
                            className="w-full px-4 py-2 rounded-xl text-md font-bold dark:text-orange-600"
                        >
                            Try now →
                        </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
                ))
            }
        </div>
        
    </div>
  )
}

export default page