import React, { useState } from 'react'
// import { useNavigate, useParams } from 'react-router'
import { fetchData } from '../api/data';

export const ChannelPage = ({videos,setVideos,searchTerm,setSearchTerm}) => {

    // const {cId} = useParams();
    // const navigate = useNavigate();

    const [channel,setChannel] = useState(null);

    const getData = () => {
        fetchData(`channels?part=snippet,statistics&id=UCBVjMGOIkavEAhyqpxJ73Dw`)
        .then((data)=>console.log(data));
        console.log(channel);
    }

  return (
    <div className='md:ml-52'>
        <br />
        <br />
        <br />
        <br />
        <div>
            <img src={channel?.snippet.brandingSettings.image.bannerExternalUrl} />
        </div>
        <button onClick={getData}>Get Data</button>
        ChannelPage

    </div>
  )
}
