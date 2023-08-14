import React from 'react'
import { Link } from 'react-router-dom'

const invalidCredential = () => {
  return (
    <div className='w-screen h-screen bg-[#26282D] grid place-content-center'>
        <div className='text-white'>
            <p>
                Register Succsess
            </p>
            <Link to='/login'>
                <div className="text-cyan-400">
                    Click here to back to login page
                </div>
            </Link>
        </div>
    </div>
  )
}

export default invalidCredential