import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmergencyCommentHandling = () => {
    const navigate = useNavigate()
    // useEffect(()=>{
    //     navigate(-1)
    // },[])
  return (
    <div className='w-screen h-screen bg-[#26282D] grid place-content-center'>
        <div className='text-white'>
            <p>
                Comment inserted...
            </p>
            <button className='text-cyan-400' onClick={()=>{navigate(-1)}}>click here to get back</button>
        </div>
    </div>
  )
}

export default EmergencyCommentHandling