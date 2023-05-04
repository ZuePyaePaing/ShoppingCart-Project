import React from 'react'
import { addToCart } from '../feature/services/cartSlice'
import { useDispatch } from 'react-redux'

const SearchChild = (props) => {
  const dispatch = useDispatch()   
  const {title,image,price}=props
  return (
    <div>
      <div className=" flex flex-col w-72 h-[400px] justify-center shadow-lg items-center p-4 rounded-md">
        <img className="w-[250px] h-[250px] object-cover" src={image} alt="" />
        <div className=" flex flex-col gap-2">
          <h1 className=" text-gray-800 text-[18px] font-semibold mt-[5px]">
            {title.substring(0, 25)}...
          </h1>
          <p className=" text-gray-800 text-xl font-bold">${price}</p>
          <button
            onClick={() => dispatch(addToCart(props))}
            className="px-3 py-1 bg-violet-800 text-white text-xl rounded hover:bg-purple-600 "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchChild