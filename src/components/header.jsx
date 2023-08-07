import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearch } from "react-icons/bi"

const NotLogin = () =>{
  return(
    <div className='flex flex-row'>
    <Link to='/login'>
      <div className='px-3 h-auto bg-[#254c5e] hover:bg-[#11b0fa] transition-all ease-in rounded-lg p-1'>
        Login
      </div>
    </Link>
    <Link className='pl-3 pt-1' to='/register'>
      Sign Up
    </Link>
  </div>
  )
}

const onLogin = () =>{
  return (
    <div className=""></div>
  )
}

const header = () => {
  return (
    <div className='sticky top-0 z-10 flex flex-row h-auto bg-[#26282D] justify-between text-white py-3 px-6'>
        <div className='font-bold'>
            <Link to='/'>Pwipper-Play</Link>
        </div>
        <div className='flex flex-row mr-6'>
          <div className='px-3 pt-1'>
            <Link to='/search'>
                <BiSearch size={25} />
            </Link>
          </div>
          {/* if login change null into loged in component */}
        <div>
          {!localStorage.getItem('token')? (<NotLogin/>) : null}
        </div>
        </div>
    </div>
  )
}

export default header