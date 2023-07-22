import React from 'react'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
import ReactPlayer from "react-player";
import { useNavigate } from 'react-router';


export const ChannelTile = ({video}) => {

    const navigate = useNavigate();


  return (
    <div className='p-5 cursor-pointer'>
        <img className='hover:transition hover:duration-500 h-60 mx-auto rounded-full' src={video?.snippet.thumbnails.high.url} alt="Thumbnail" onClick={()=>navigate(`/video/${video.id.videoId}`)} />
        <div className="text-center text-xl p-2">
        <a href={demoChannelUrl} target="_blank" rel="noopener noreferrer">{video?.snippet.channelTitle}</a>
        </div>
    </div>
  )
}
