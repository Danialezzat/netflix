import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';

const Row = ({title, fetchURL}) => {
    const [movies, setmovies] = useState([])

    const [like, setLike] = useState(false)

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setmovies(response.data.results)
        })
    },[fetchURL])
    console.log(movies)




  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center'>
            <div id={'Slider'}>
                {movies.map((item, id) => (
                    <Movie item={item}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Row