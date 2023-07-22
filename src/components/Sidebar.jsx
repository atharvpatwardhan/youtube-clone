import React from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router';

export const Sidebar = ({sideBar,setSideBar,searchTerm,setSearchTerm}) => {

    const categories = [
        {
            title : 'Trending',
            icon : 'mingcute:fire-fill'
        }
        ,
        {
            title : 'Shopping',
            icon : 'mdi:shopping-outline'
        },
        {
            title : 'Music',
            icon :'mdi:music'
        },
        {
            title : 'Movies',
            icon :'fluent-mdl2:my-movies-t-v'
        },
        {
            title : 'Live',
            icon :'fluent:live-20-regular'

        },
        {
            title : 'Gaming',
            icon :'mdi:youtube-gaming'

        },
        {
            title : 'News',
            icon :'entypo:news'
        },
        {
            title : 'Sports',
            icon :'carbon:trophy'
        },
        {
            title : 'Learning',
            icon :'solar:lightbulb-linear'
        },
        {
            title : 'Fashion & Beauty',
            icon :'fluent-mdl2:shop'
        }
    ]

    const navigate = useNavigate();

  return (
    <div className='h-screen hidden fixed md:inline-flex w-[15%] mt-10'>
        <div className='p-5 text-md'>
            {
                sideBar
                &&
                <h1 className='my-3 text-xl ml-5'>Explore</h1>
            }
            <div className=''>
                {
                    categories.map((c)=>(
                        <div className='flex px-5 py-4 gap-7 cursor-pointer hover:bg-slate-100 rounded-xl items-center' onClick={()=>{setSearchTerm(c.title);navigate(`/search/${c.title}`)}}>
                            <Icon icon={c.icon} height={25} />
                            {
                                sideBar
                                &&
                                <h1>{c.title}</h1>
                            }

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
