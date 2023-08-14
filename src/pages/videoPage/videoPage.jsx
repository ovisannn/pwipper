 /* eslint-disable */
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Header from '../../components/header'
import CommentCard from '../../components/commentCard';
import { BiSolidSend } from "react-icons/bi";
import ProductCard from '../../components/productCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import apiUrl from '../../handler/apiUrl.js';
import Spinner from '../../components/spinner';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const ProductSection = ( ) =>{
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  let { videoId } = useParams()

  useEffect(()=>{
    (async()=>{
      await axios.get(apiUrl.GetVideosProducts(videoId)).then(res=>{
        // console.log(res.data.data.products)
        setProducts(res.data.data.products)
        // console.log(products)
      }).finally(()=>{
        setIsLoading(false)
      })
    })()
  },[])

    return(
        <div className='mt-14 h-5/6 overflow-y-auto'>
            {products?
                products.map((product, index)=>(
                    <ProductCard key={index} product={product} />
                )) : null
            }
        </div>
    )
}

const VideoSection = ( { videoUrl } ) =>{
    return(
        <div className='wrapper w-full grid content-center bg-black'>
            <ReactPlayer className='player' url={videoUrl} controls='true' width={'100%'} height={'100%'}/>
        </div>
    )
}

const CommentSection = ( { comments, videoId } ) =>{
  const navigate = useNavigate()
  const [comment, setComment] = useState("")
  const [isCommentNull, setIsCommentNull] = useState(false)

  const onSubmitComment = async (e) =>{
    e.preventDefault()
    if (comment === null || comment === undefined || comment === ""){
      setIsCommentNull(true)
      return
    }
    if(Cookies.get('username') !== undefined){
      setIsCommentNull(false)
      await axios.post(apiUrl.PostComment(),{
        videoId : videoId,
        username : Cookies.get('username'),
        comment : comment,
        token : `${Cookies.get('token')}`
      }
      ).then().finally(
        navigate(0)
      )
    }else{
      navigate('/invalidCredential')
    }
  }

    return(
        <div className="flex flex-col bg-[#1c1d20] h-screen">
            <div className="h-5/6 bg-[#1c1d20] overflow-y-auto transition-all ease-in mt-9">
              {
                comments.map((item, index)=>(
                    <CommentCard key={index} comment={item} />
                ))
            }
            </div>
            <div className="h-1/6 bg-[#1c1d20] flex flex-col">
            {isCommentNull? (<div className='text-red-600 font-bold'>comment can't be submited if empty</div>) : null}
                <form className='flex flex-row' action="" onSubmit={(e)=>onSubmitComment(e)}>
                    <textarea className='w-full h-36 p-3 focus:outline-none' name="comment" placeholder='write your comment here' id="" cols="30" rows="10" onChange={(e)=>setComment(e.target.value)}></textarea>
                    <button className='bg-[#1b8cc0] hover:bg-[#11b0fa] transition ease-in text-white w-20 grid place-content-center'>
                        <BiSolidSend size={25}/>
                    </button>
                </form>
            </div>
        </div>
    )
}

const FullPage = ({ videoData }) => {
    return(    
            <div className='flex flex-row'>
                <div className="w-1/6 h-screen bg-[#1c1d20]">
                    <ProductSection />
                </div>
                <div className="flex justify-center w-3/6 h-screen bg-blue-50">
                    <VideoSection videoUrl={videoData.videoUrl} />
                </div>
                <div className="w-2/6 h-screen bg-[#1c1d20]">
                    <CommentSection comments={videoData.comments} videoId={videoData._id} />
                </div>
            </div>
        )
}

const VideoPage = () =>{
    const [isLoading, setIsLoading] = useState(true)
    const [video, setVideo] = useState()
    let { videoId } = useParams()


    useEffect(()=>{
        (async()=>{
          await axios.get(apiUrl.GetVideoDetails(videoId)).then(res=>{
            setVideo(res.data.data.video)
          }).finally(()=>{
            setIsLoading(false)
          })
        })()
      },[])

  return (
    <div className='flex flex-col bg-[#1c1d20] h-screen'>
        <Header />
        {isLoading? <Spinner /> : <FullPage videoData={video}/>}
    </div>
  )
}

export default VideoPage