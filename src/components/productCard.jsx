import React from 'react'
import { Link } from 'react-router-dom'

const productCard = ({ product }) => {
  console.log(product.img)
  return (
    <Link to={product.url} target="_blank" rel="noopener noreferrer" >
        <div className='flex flex-col h-auto bg-[#26282D] m-5 rounded-lg text-white font-bold hover:bg-[#31343d] hover:cursor-pointer transition-all ease-in'>
            <img className='rounded-t-lg' src={product.img} alt="" />
            <div className="p-2">
                <p>Rp.{product.price[0].amount}</p>
            </div>
        </div>
    </Link>
  )
}

export default productCard