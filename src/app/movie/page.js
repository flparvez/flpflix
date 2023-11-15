
"use client"

import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../Components/MovieCard";
import { useEffect } from "react";
import { fetchApiUsers } from "../redux/slice";
import Mcard from "../Components/Mcard";



const Page = () => {





    const dispatch = useDispatch()
    // const apiUserData = useSelector((data) => data.userData)
    const apiUserData = useSelector((data) => data.userData.userApiData)


    useEffect(() => {
        dispatch(fetchApiUsers())
    }, [])


    return (
        <div className="bg-white dark:bg-black">
            <div className="grid sm:grid-cols-4 grid-cols-3 gap-3 sm:gap-4">


                {
                    apiUserData.map((curElem) => {
                        return <MovieCard key={curElem.id} {...curElem} />

                    })
                }
            </div>


            <div className="">

                <h2 className="text-center text-xl">From Amazon Video</h2>

                <div className="grid sm:grid-cols-4 grid-cols-3 gap-3 sm:gap-4">


                    {
                        apiUserData.map((curElem) => {
                            return <Mcard key={curElem.id} {...curElem} />

                        })
                    }


                </div>

            </div>


        </div>
    )
}

export default Page
