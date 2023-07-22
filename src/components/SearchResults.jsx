import React, { useEffect } from 'react'
// import { VideoTile } from './VideoTile'
// import { ChannelTile } from './ChannelTile'
import { fetchData } from '../api/data'
// import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
import { useNavigate } from 'react-router';
// import { ChannelTile } from './ChannelTile';


export const SearchResults = ({videos,setVideos,searchTerm}) => {

    const navigate = useNavigate();
    
    // const getVideos = () => {

    //     setVideos(null);
    
    //     fetchData(`search?part=snippet&q=${searchTerm}`)
    //     .then((data)=>{
    //       setVideos(data.items);
          
    //     })
    //     // console.log(videos);
    // }

    useEffect(() => {
      setVideos(null);
    
      fetchData(`search?part=snippet&q=${searchTerm}`)
      .then((data)=>{
        setVideos(data.items);
        
      })    }, [searchTerm,setVideos])
    
      
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        <div className='flex flex-col md:ml-52 w-[80%] md:w-full'>
        {/* <button className='' onClick={()=>getVideos()}>Fetch Data</button> */}
        {!videos && <h1>Loading...</h1>}
          {
            videos?.map((video)=>(
              <div className='m-5 cursor-pointer'>
                {video.id.channelId
                 && 
                 <div className='flex items-center gap-10'>
                  <img src={video?.snippet.thumbnails.high.url} alt='channel' className='rounded-full h-52 w-52' />
                  <div>
                    <h1 className='text-xl font-semibold'>{video?.snippet.channelTitle}</h1>
                  </div>
                 </div>
                }
                {
                video.id.videoId
                 && 
                <div className='w-[80%] flex gap-5'>
                  <img className='rounded-xl cursor-pointer hover:rounded-none hover:transition hover:duration-500 h-56 w-96' src={video?.snippet.thumbnails.medium.url} alt="Thumbnail" onClick={()=>navigate(`/video/${video.id.videoId}`)} />
                  <div className="">
                    <a className='text-2xl cursor-pointer' href={`/video/${video.id.videoId}`} rel="noopener noreferrer" onClick={()=>navigate(`/video/${video.id.videoId}`)}>
                      {
                          video?.snippet.title.length > 50
                          ?
                          <span>{video?.snippet.title.slice(0,50)}...</span>
                          :
                          video?.snippet.title.slice(0,50)
                      }
                    </a>
                  <div className="cursor-pointer my-1" onClick={()=>navigate(`/channel/${video?.snippet.channelId}`)}>
                    <a href={`/channel/${video?.snippet.channelId}`} rel="noopener noreferrer">{video?.snippet.channelTitle}</a>
                  </div>
                  <div>
                    <p>{video?.snippet.description}</p>
                  </div>
                  </div>

                </div>
                
                }
              </div>
            ))
          }
          </div>
    </div>
  )
}
