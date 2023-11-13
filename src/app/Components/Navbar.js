
// components/Navbar.js
'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src="movie.png" alt="Logo" className="h-8" />
                    <p className="text-white ml-2"><Link href={'/'}> FLpFlix </Link> </p>
                </div>


                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0    dark:border-gray-700">
                        <li>
                            <h2 className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"><Link href={'/'}>Home</Link></h2>
                        </li>
                        <li>
                            <h2 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link href={'/movie'}> Movie</Link></h2>
                        </li>
                        <li>
                            <h2 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link href={'/about'}>About</Link></h2>
                        </li>
                        <li>
                            <h2 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link href={'/contact'}> Contact </Link></h2>
                        </li>
                        <li>
                            <h2 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><Link href={'/'}> FLpFlix </Link></h2>
                        </li>
                    </ul>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-300 focus:outline-none"
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19 10H5v-1h14v1.16l-12 12-1.42-1.42 12-12 .42-.42-.42-.44 1.42-1.42z"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm18 5H3v2h18v-2z"
                            />
                        )}
                    </svg>
                </button>
            </div>
            <div className={isOpen ? 'block' : 'hidden'}>
                <ul className="lg:hidden md:flex items-center justify-end mt-4">
                    <li className="md:ml-4">
                        <h2 className="text-white hover:text-white">
                            <Link href={'/'}>Home</Link>
                        </h2>
                    </li>
                    <li className="md:ml-4">
                        <h2 className="text-gray-300 hover:text-white">
                            <Link href={'/movie'}>Movie</Link>
                        </h2>
                    </li>
                    <li className="md:ml-4">
                        <h2 className="text-gray-300 hover:text-white">
                            <Link href={'/about'}>About</Link>
                        </h2>
                    </li>
                    <li className="md:ml-4">
                        <h2 className="text-gray-300 hover:text-white">
                            <Link href={'/contact'}>Contact</Link>
                        </h2>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;