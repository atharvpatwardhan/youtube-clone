import React, { useState } from 'react'
import {SiYoutube} from 'react-icons/si'
import {LiaBarsSolid} from 'react-icons/lia'
import {IoSearchOutline} from 'react-icons/io5'
import { useNavigate } from 'react-router'
import { fetchData } from '../api/data'

export const Navbar = ({sideBar, setSideBar, searchTerm, setSearchTerm, videos, setVideos}) => {
    
    const toggleSidebar = () => {
        setSideBar(!sideBar);
    }

    const getVideos = () => {
        fetchData(`search?part=snippet&q=${searchTerm}`)
        .then((data)=>setVideos(data.items))
        console.log(videos);
    }

    const navigate = useNavigate();

  return (
    <div className='w-full flex fixed h-16 z-40 bg-white'>
        <div className='flex items-center gap-7 mx-10'>
            <div className='hidden md:flex cursor-pointer' onClick={()=>toggleSidebar()}>
                <LiaBarsSolid size={30} />
            </div>
            <div className='flex items-center gap-1 cursor-pointer' onClick={()=>navigate('/')}>
                <SiYoutube size={30} color='red' />
                <div className='hidden md:flex'>
                <h1 className='text-xl font-semibold'>YouTube</h1>
                </div>

            </div>
        </div>

        <div className=' flex items-center w-[35%] absolute right-[35%] gap-3 top-3'>
            <input className='flex border rounded-full h-10 w-full p-3 text-md' placeholder='Search' type='text' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
            <button className='right-5 md:right-3 bg-gray-100 p-2 rounded-full' onClick={()=>navigate(`/search/${searchTerm}`)}><IoSearchOutline size={25} /></button>
        </div>

        <div className='absolute right-5 top-4'>
            <h1>Made by <span className='text-blue-500'><a href='https://www.linkedin.com/in/atharv-patwardhan/' target='_blank'>Atharv Patwardhan</a></span></h1>
        </div>
    </div>
  )
}
