import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
// import { fetchData } from '../api/data';


export const VideoTile = ({video}) => {

  const navigate = useNavigate();

  // const [channel,setChannel] = useState(null);

  // const getChannelInfo = () => {
  //   setTimeout(() => 
  //   fetchData(`channels?part=snippet,statistics&id=${video?.snippet.channelId}`)
  //           .then((data)=>setChannel(data.items[0]))
  //   ,500)
  // }

  useEffect(() => {
    // getChannelInfo();
  }, [])
  
  

  return (
    <div className='m-5'>
        <img className='rounded-xl cursor-pointer hover:rounded-none hover:transition hover:duration-500 h-56 w-96' src={video?.snippet.thumbnails.medium.url} alt="Thumbnail" onClick={()=>navigate(`/video/${video.id.videoId}`)} />
        <div className="">
          <h1 className='font-semibold cursor-pointer' onClick={()=>navigate(`/video/${video.id.videoId}`)}>
            {
                video?.snippet.title.length > 50
                ?
                <span>{video?.snippet.title.slice(0,50)}...</span>
                :
                video?.snippet.title.slice(0,50)
            }
        </h1>
        </div>
        <div className="cursor-pointer flex gap-2">
          {/* <img src={channel?.snippet.thumbnails.high.url} className='rounded-full w-7 h-7 cursor-pointer' /> */}
          <h1>{video?.snippet.channelTitle}</h1>
        </div>
    </div>
  )
}
