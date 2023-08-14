 /* eslint-disable */
import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import VideoCard from '../../components/videoCard'
import apiUrl from '../../handler/apiUrl.js'
import axios from 'axios'


const browseVideo = () => {
    const [videos, setVideos] = useState([])


    useEffect(()=>{
        axios.get(apiUrl.GetVideoThumbnails()).then(res=>{
            // console.log(res.data.data.tumbnails)
            setVideos(res.data.data.tumbnails)
        })
    },[])
    
    return (
        <div className='scrollbar-hide'>
            <Header/>
            {/* <VideoCard /> */}
            <div className="flex flex-row flex-wrap bg-[#26282D] px-3 h-screen overflow-y-auto">
                {videos.map((item, index)=>(
                    <VideoCard key={index} video={item} />
                ))}
            </div>
        </div>
    )
    }

export default browseVideo