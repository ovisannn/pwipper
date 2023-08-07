import React from 'react'
import Header from '../components/header'
import VideoCard from '../components/videoCard'
import { videosDummyData } from '../helpers/dummyData'

const fetchVideos = () =>{
    return videosDummyData
}

const browseVideo = () => {
    const videosData = fetchVideos()

    return (
        <div className='scrollbar-hide'>
            <Header/>
            {/* <VideoCard /> */}
            <div className="flex flex-row flex-wrap bg-[#26282D] px-3 h-screen overflow-y-auto scrollbar-hide">
                {videosData.map((item, index)=>(
                    <VideoCard key={index} video={item} />
                ))}
            </div>
        </div>
    )
    }

export default browseVideo