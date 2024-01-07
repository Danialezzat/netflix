import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Movie from './Movie';

const Row = ({title, fetchURL}) => {
    const [movies, setmovies] = useState([])


    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setmovies(response.data.results)
        })
    },[fetchURL])
    console.log(movies)




  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
            <div id={'Slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id) => (
                    <Movie key={id} item={item}/>
                ))}
            </div>
            <MdChevronRight size={40} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
        </div>
    </>
  )
}

export default Row