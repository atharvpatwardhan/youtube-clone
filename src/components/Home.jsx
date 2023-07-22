import React, { useEffect } from 'react'
import { fetchData } from '../api/data';
import { VideoTile } from './VideoTile';
// import { ChannelTile } from './ChannelTile';
import { useNavigate } from 'react-router';

export const Home = ({videos,setVideos,searchTerm,setSearchTerm}) => {

  // const getVideos = () => {

  //   setVideos(null);

  //   fetchData(`search?part=snippet&q=latest`)
  //   .then((data)=>setVideos(data.items))
  //   console.log(videos);
  // }
  
  useEffect(()=>{
    setVideos(null);

    fetchData(`search?part=snippet&q=New`)
    .then((data)=>setVideos(data.items))
  },[setVideos]);

  const navigate = useNavigate();


  const Abovecategories = [{title : 'Latest'},{title : 'Finance'},{title : 'AI'},{title : 'Cars'},{title : 'Animated Films'},{title : 'Gadgets'},{title : 'Technology'},{title : 'Electronics'},{title : 'Cooking'},{title : 'Science'},{title : 'Coding'},{title : 'Space'}]


  return (
    <div className=''>
      <br />
      <br />
      <br />
        <div className='hidden md:flex md:ml-52 my-5 mr-5'>
          {
            Abovecategories.map((c)=>(
              <div className='bg-neutral-100 cursor-pointer hover:bg-neutral-300 transition duration-300 text-md mx-auto py-1 px-3 rounded-xl' onClick={()=>{setSearchTerm(c.title);navigate(`/search/${searchTerm}`)}}>
                <p>{c.title}</p>
              </div>
            ))
          }
        </div>
        {/* <div className='flex justify-center items-center'>
          <button onClick={getVideos}>Get videos</button>
        </div> */}
        {
          videos
          ?
          <div className='flex flex-col md:grid md:grid-cols-3 md:ml-52'>
          {
            videos?.map((video)=>(
              video.id.videoId && 
              <div className=''>
                <VideoTile key={video.id.videoId} video={video} />
                {/* {video.id.channelId && <ChannelTile key={video.id.videoId} video={video} />} */}
              </div>
            ))
          }
          </div>
          :
          <h1 className='text-center'>Loading...</h1>
        }

        <div className='flex justify-center items-center'>
          This youtube clone is a personal project and is not the real youtube.
        </div>

    </div>

  )
}
