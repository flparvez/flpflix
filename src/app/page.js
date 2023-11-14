

'use client'
import { useEffect } from 'react'
import HeroSection from './Components/HeroSection'
import MovieCard from './Components/MovieCard'
import { fetchApiUsers } from './redux/slice'
import { useDispatch, useSelector } from 'react-redux'



const Page = () => {


  const dispatch = useDispatch()
  // const apiUserData = useSelector((data) => data.userData)
  const apiUserData = useSelector((data) => data.userData.userApiData)


  useEffect(() => {
    dispatch(fetchApiUsers())
  }, [])



  return (
    <div>
      <HeroSection imageUrl="https://i.postimg.cc/Pqz0w15t/movie.png" title="Best Free Platform For Wathcing Movie" />

      <h2 className="text-center text-xl">From Amazon Video</h2>

      <div className="mx-auto sm:columns-3 columns-3 my-2">


        {
          apiUserData.map((curElem) => {
            return <MovieCard key={curElem.id} {...curElem} />

          })
        }


      </div>



    </div>
  )
}

export default Page
