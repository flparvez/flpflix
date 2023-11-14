import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MovieCard = (curElem) => {


    const { id, manme, movied, moviei } = curElem;

    const shortenText = (text, maxLength) => {
        // You can customize this function based on your requirements
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };
    return (
        <div className='max-w-md sm:h-auto h-[336px]  p-2 bg-gray-800  border text-white border-gray-200  shadow  dark:border-red-200 border-t-0'>

            <div className='rounded-t-lg justify-center items-center text-center flex'>

                <Link href={`/movie/${id}`}>   <Image src={moviei} width={250} height={80} alt='image' /> </Link>


            </div>

            <h2 className='mb-2 sm:text-xl text-sm sm:h-auto h-[78px] font-bold tracking-tight text-white dark:text-white'>{shortenText(curElem.mname, 100)}</h2>


            <Link href={`/movie/${id}`}> <h2 className=' items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Watch Movie</h2> </Link>
        </div>
    )
}

export default MovieCard