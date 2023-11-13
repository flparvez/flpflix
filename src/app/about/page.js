
"use client"

import React, { useEffect } from 'react'
import { fetchApiUsers } from '../redux/slice'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {

    const dispatch = useDispatch()
    // const apiUserData = useSelector((data) => data.userData)
    const apiUserData = useSelector((data) => data.userData.userApiData)


    useEffect(() => {
        dispatch(fetchApiUsers())
    }, [])
    return (
        <div className='mt-10'>
            <h2>About Page</h2>
            <h2>About Page</h2>
            {

                apiUserData.map((movie) => (

                    <div key={movie.id}>
                        <h1>{movie.mname}</h1>

                        <Image src={movie.moviei} width={400} height={300} alt={movie.mname} />


                        <p>{movie.movied}</p>

                        <Link href={movie.dl1} ><span className='my-3 p-3 mt-2 font-bold text-xl'>Download Server 1</span></Link>


                        <Link href={movie.dl2} ><span className='my-3 p-3 mt-2 font-sans text-xl'>Download Server 2</span></Link>

                    </div>



                )

                )}

        </div>
    )
}

export default Page
