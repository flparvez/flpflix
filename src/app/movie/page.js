
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

    const shortenText = (text, maxLength) => {
        // You can customize this function based on your requirements
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };
    return (
        <div>
            <div className="mx-auto sm:columns-3 columns-2 mb-2">


                {
                    apiUserData.map((curElem) => {
                        return <MovieCard key={curElem.id} {...curElem} />

                    })
                }
            </div>

            <h2 className="text-center text-xl">From Amazon Video</h2>

            <div className="mx-auto sm:columns-3 columns-2 my-2">


                {
                    apiUserData.map((curElem) => {
                        return <Mcard key={curElem.id} {...curElem} />

                    })
                }


            </div>




        </div>
    )
}

export default Page
