import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Mcard = (curElem) => {


    const { id, manme, movied, moviei } = curElem;

    const shortenText = (text, maxLength) => {
        // You can customize this function based on your requirements
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };
    return (
        <div className='max-w-md  p-2 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700'>

            <div className='rounded-t-lg justify-center items-center text-center flex'>
                <Image src={moviei} width={250} height={80} alt='image' />
            </div>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{manme}</h2>
            <h2 className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{shortenText(curElem.movied, 100)}</h2>

            <Link href={`/movie/${id}`}> <h2 className=' items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Watch Movie</h2> </Link>
        </div>
    )
}

export default Mcard