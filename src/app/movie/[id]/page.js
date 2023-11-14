"use client"


import { useGetSingleProjectQuery } from '@/app/redux/dataslice';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'

import React from 'react'

const Page = () => {

    const { id } = useParams()

    const { data: singleProject, isError, isLoading, error } = useGetSingleProjectQuery(id) || {};


    // console.log(singleProject.movied)



    // const [deleteProject] = useDeleteProjectMutation(id) || {};







    return (
        <div className='dark:bg-black bg-white'>
            {singleProject ? (

                <div className="sm:flex">
                    {/* 1st Column (25%) */}
                    <div className="hidden sm:w-1/4  p-2 ">
                        {/* Content for the 1st column */}
                        <div className='   dark:bg-gray-800  text-black dark:text-white'>


                            <h2 className=' mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>{singleProject.mname}</h2>



                            <h2 className='mb-3 font-normal text-black dark:text-white'>{singleProject.movied}</h2>



                        </div>
                    </div>

                    {/* 2nd Column (50%) */}
                    <div className="sm:w-2/4 p-2 ">
                        {/* Content for the 2nd column */}

                        <h2 className=' mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>{singleProject.mname}</h2>
                        <h2 className='mb-2 text-xl font-extralight  rounded text-black dark:text-white'> Netflix \ <span>Prime Video </span></h2>



                        <h2 className='mb-3 font-normal text-black dark:text-white'>{singleProject.movied}</h2>

                        <div className=' dark:bg-[#546E7A]  text-black dark:text-white'>



                            <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
                                {/* The paddingTop is set to maintain a 16:9 aspect ratio */}



                                <iframe className="absolute top-0 left-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${singleProject.moviet}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



                            </div>
                            <div className='text-center mb-8'>


                                <h2 className='text-xl  text-center'>Full Movie Download Link Here:</h2>
                                <h2 className="mt-2 focus:outline-none text-white text-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-black dark:hover:bg-green-700 dark:focus:ring-red-900">
                                    <Link href={singleProject.dl1}> Download Now</Link>
                                </h2>

                            </div>


                        </div>

                    </div>



                    {/* 3rd Column (25%) */}
                    <div className="sm:w-1/4 p-2 ">
                        {/* Content for the 3rd column */}
                        <div className=' '>

                            <div className='mb-2 '>
                                <Image src={singleProject.moviei} alt={singleProject.mname} width={500} height={250} />

                            </div>

                        </div>

                    </div>
                </div>




            ) : ('no data')}






        </div>
    )
}

export default Page
