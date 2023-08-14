import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-screen h-screen bg-[#26282D] grid place-content-center'>
        <div className='text-white'>
            <p>
                404 whatever u want to find it seems likely we can't afford right now, hehe peace...
            </p>
            <Link to='/'>
                <div className="text-cyan-400">
                    Click here to back to home page
                </div>
            </Link>
        </div>
    </div>
  )
}

export default NotFound