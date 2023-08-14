import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiSearch, BiArrowBack } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../handler/apiUrl.js'
import VideoCard from '../../components/videoCard.jsx'

const SearchHeader = ({setSearch, onSearch}) =>{
  const navigate = useNavigate()

  const onBack = () =>{
    navigate(-1)
  }

  return (
    <div className='sticky top-0 z-10 flex flex-row h-auto bg-[#26282D] text-white py-3 px-6'>
        <div className='font-bold pt-2'>
            <button onClick={onBack}><BiArrowBack size={20} /></button>
        </div>
        <div className='flex flex-row mr-6 w-full  ml-3'>
          <div className='w-full'>
            <input type="text" className='w-full p-2 bg-[#525867] rounded-lg focus:outline-none' placeholder='search something and press the search logo' onChange={(e)=>{setSearch(e.target.value)}}/>
          </div>
          <div className='px-3 pt-2'>
            <button onClick = {onSearch}>
                <BiSearch size={25} />
            </button>
          </div>
        </div>
    </div>    
  )
}

const SearchPage = () => {
  const [getSearch, setSearch] = useState('')
  const [getSearchData, setSearchData] = useState([])
  const [showData, setShowData] = useState([])
  // console.log(getSearch)
  const onSearch = async() =>{
    if(getSearch === ''){
      alert("search parameter can't be empty!")
      return
    }
    await axios.get(apiUrl.SearchVideo(getSearch)).then(res=>{
      setSearchData(res.data.data.tumbnails)
    })
  }

  useEffect(()=>{
    setShowData(getSearchData)
    // console.log(getSearchData)
  },[getSearchData])

  return (
    <div className='flex flex-col'>
      <SearchHeader setSearch={setSearch} onSearch={onSearch} />
      <div className="flex flex-row flex-wrap bg-[#26282D] px-3 h-screen overflow-y-auto">
          {showData.map((item, index)=>(
            <VideoCard key={index} video={item} />
          ))}
      </div>
    </div>
  )
}

export default SearchPage