import React from 'react'
import { Link } from 'react-router-dom'

const videoCard = ( {video} ) => {
  return (
    // 720x480
    <div className={`h-44 w-72 m-3 rounded-lg text-white my-12`}>
      <Link to={`/video/${video._id}`}>
        <img className='object-contain rounded-lg drop-shadow-lg' src={video.thumbnailUrl} alt="" />
      </Link>
        <div className='font-bold'>
          <Link to={`/video/${video._id}}`}>
            {video.title}
          </Link>
        </div>
        <h4>
          {video.username}
        </h4>
    </div>
  )
}

export default videoCard