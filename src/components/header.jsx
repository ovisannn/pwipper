/* eslint-disable */
import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { BiSearch, BiLogOut, BiUser } from "react-icons/bi"
import { Menu, Transition } from '@headlessui/react'
// import { Navigate } from 'react-router-dom'

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

const OnLogin = () =>{
// eslint-disable-next-line
  const onLogout = () =>{
    localStorage.removeItem('token')
    console.log('logut success')
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
      <img class="w-10 h-10 rounded" src="https://fitgirl-repacks.site/wp-content/uploads/2016/08/icon.jpg" alt="Default avatar"/>
      </Menu.Button>
    </div>
    <Transition as={Fragment}enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1 ">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${active ? 'bg-[#1b8cc0] text-white' : 'text-gray-900'} group flex flex-row w-full items-center rounded-md px-2 py-2 text-sm`}>
                <div className="mx-2">
                  <BiUser size={20} />
                </div>
                Profile
              </button>
            )}
          </Menu.Item>
        </div>
        <div className="px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <Link onClickCapture={onLogout} to='/login' className={`${active ? 'bg-[#ac2e2e] text-white' : 'text-[#ac2e2e]'} group flex flex-row w-full items-center rounded-md px-2 py-2 text-sm`}>
                  <div className='mx-2'>
                    <BiLogOut size={20} />
                  </div>
                Logout
              </Link>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  )
}

const header = () => {
  return (
    <div className='sticky top-0 z-10 flex flex-row h-auto bg-[#26282D] justify-between text-white py-3 px-6'>
        <div className='font-bold pt-2'>
            <Link to='/'>Pwipper-Play</Link>
        </div>
        <div className='flex flex-row mr-6'>
          <div className='px-3 pt-2'>
            <Link to='/search'>
                <BiSearch size={25} />
            </Link>
          </div>
          {/* if login change null into loged in component */}
        <div>
          {/* <OnLogin /> */}
          {!localStorage.getItem('token')? (<NotLogin/>) : <OnLogin />}
        </div>
        </div>
    </div>
  )
}

export default header
