import React from 'react'
import ReactPlayer from 'react-player'
import Header from '../../components/header'
import CommentCard from '../../components/commentCard';
import { BiSolidSend } from "react-icons/bi";
import ProductCard from '../../components/productCard';

const dummyMap = [1,2,3,4,5,6,7,8,9, 10]

const ProductSection = () =>{
    const dummyProducts = {
        _id: {
          $oid: "64c0d8bb47cc1863b6fce860"
        },
        name: "Assassin's Creed Valhalla",
        username: "ovisannn",
        description: "In Assassin’s Creed® Valhalla: Dawn of Ragnarök, the most ambitious expansion in franchise history, Eivor must embrace their destiny as Odin, the Norse god of Battle and Wisdom.",
        url: "https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/",
        price: [
          {
            currency: "IDR",
            amount: 619000,
            _id: {
              $oid: "64c0d8bb47cc1863b6fce85e"
            }
          }
        ],
        createdAt: {
          "$date": "2023-07-26T08:26:35.032Z"
        },
        updatedAt: {
          "$date": "2023-07-26T08:26:35.032Z"
        },
        __v: 0,
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg?t=1690324537"
      }
    return(
        <div className='mt-14 h-5/6 overflow-y-auto scrollbar-hide'>
            {
                dummyMap.map((product, index)=>(
                    <ProductCard key={index} product={dummyProducts} />
                ))
            }
        </div>
    )
}

const VideoSection = () =>{
    return(
        <div className='wrapper w-full grid content-center bg-black'>
            <ReactPlayer className='player' url='https://www.youtube.com/watch?v=1wiclO4a60A' controls='true' width={'100%'} height={'100%'}/>
        </div>
    )
}

const CommentSection = () =>{
    const dummyComment = {
        username : 'ovisannn',
        comment : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date : '2023-07-25T02:51:49.983+00:00'
    }
    return(
        <div className="flex flex-col bg-[#1c1d20] h-screen">
            <div className="h-5/6 bg-[#1c1d20] overflow-y-auto scrollbar-hide transition-all ease-in mt-9">{
                dummyMap.map((item, index)=>(
                    <CommentCard key={index} comment={dummyComment} />
                ))
            }
            </div>
            <div className="h-1/6 bg-[#1c1d20]">
                <form className='flex flex-row' action="">
                    <textarea className='w-full h-36 p-3 focus:outline-none' name="comment" placeholder='write your comment here' id="" cols="30" rows="10"></textarea>
                    <button className='bg-[#1b8cc0] hover:bg-[#11b0fa] transition ease-in text-white w-20 grid place-content-center'>
                        <BiSolidSend size={25}/>
                    </button>
                </form>
            </div>
        </div>
    )
}

const videoPage = () =>{
  return (
    <div className='flex flex-col'>
        <Header />
        <div className='flex flex-row'>
            <div className="w-1/6 h-screen bg-[#1c1d20]">
                <ProductSection />
            </div>
            <div className="flex justify-center w-3/6 h-screen bg-blue-50">
                <VideoSection />
            </div>
            <div className="w-2/6 h-screen bg-[#1c1d20]">
                <CommentSection />
            </div>
        </div>
    </div>

  )
}

export default videoPage