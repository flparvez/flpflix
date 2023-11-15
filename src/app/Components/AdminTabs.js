import Link from 'next/link'
import React from 'react'

const AdminTabs = () => {
    return (
        <div className='dark:bg-black bg-white'>


            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">


                    <li className="me-2">
                        <h2 className="inline-block p-4 border-b-2 dark:text-white text-black border-transparent rounded-t-lg hover:text-sky-400 hover:border-gray-300 dark:hover:text-gray-300"> <Link href='/admin/add-data'>Add Movie</Link>  </h2>
                    </li>


                    <li className="me-2">
                        <h2 className="inline-block p-4 dark:text-white text-black border-b-2 border-transparent rounded-t-lg hover:text-sky-500 hover:border-gray-300 dark:hover:text-gray-300"> <Link href='/admin/edit-data'>Edit Movie</Link>  </h2>
                    </li>



                </ul>
            </div>

        </div>
    )
}

export default AdminTabs
