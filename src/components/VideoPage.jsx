import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player";

import { fetchData } from '../api/data';
import { useParams } from 'react-router';
import { VideoTile } from './VideoTile';
import { wait } from '@testing-library/user-event/dist/utils';

export const VideoPage = () => {

    const [video,setVideo] = useState(null);

    const [recommended,setRecommended] = useState(null);

    const [comments,setComments] = useState(null);

    const [channel,setChannel] = useState(null);

    const {id} = useParams();

    const fetchthedata = () => {
        fetchData(`videos?part=snippet,statistics&id=${id}`)
        .then((data)=>{
            setVideo(data.items[0]);
            wait(1000);
            fetchData(`channels?part=snippet,statistics&id=${data.items[0].snippet.channelId}`)
            .then((data1)=>setChannel(data1.items[0]));
            
        });

        fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data)=>setRecommended(data.items));

        fetchData(`commentThreads?part=snippet&videoId=${id}&maxResults=100`)
        .then((data) => setComments(data.items));


    }

    console.log(comments)

    useEffect(()=>{
        fetchthedata();
        // fetchData(`videos?part=snippet,statistics&id=${id}`)
        // .then((data)=>setVideo(data.items[0]));

        // fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        //        .then((data)=>setRecommended(data.items));
    },[id])

  return (
    <div className=''>
            <br />
            <br />
            <br />
            <br />
            <br />
        <div className='md:ml-72 flex flex-col md:grid md:grid-cols-2'>
            <div>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width={750} height={375} className="px-10 md:px-0" controls />
                {/* <button onClick={fetchthedata}>Fetch the data</button> */}
                <h1 className='text-xl font-semibold mt-5 mb-2'>{video?.snippet.title}</h1>
                <div className='flex items-center gap-5 my-5'>
                    <img src={channel?.snippet.thumbnails.high.url} className='rounded-full w-12 h-12 cursor-pointer' />
                    <div>
                    <p className='text-md font-semibold cursor-pointer'>{video?.snippet.channelTitle}</p>
                    <p className='text-sm text-gray-400'>{channel?.statistics.subscriberCount} subscribers</p>
                    </div>
                </div>
                <p className='w-screen md:w-[120%] bg-neutral-200 p-2 rounded-xl'>{video?.snippet.description}</p>

                <div>
                    <h1 className='text-xl my-5 border-b-2'>Comments</h1>
                    {
                        comments?.map((comment) => (
                            <div className='my-7'>
                                <div className='flex items-center gap-2'>
                                    <img className='rounded-full w-12 h-12' src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} />
                                    <h1 className='font-semibold'>@{comment.snippet.topLevelComment.snippet.authorDisplayName}</h1>
                                </div>
                                <p className='text-md ml-14'>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='ml-40'>
                <div>
                    {
                        recommended?.map((r)=>(
                            <VideoTile video={r} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
