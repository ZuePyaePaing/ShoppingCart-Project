import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import {Link} from "react-router-dom"
const AddToCart = () => {
  const {cartItems,totalAmount}=useSelector(state=>state.cart)

  if(cartItems.length===0){
    return(
      <div className=' flex justify-center flex-col gap-3 items-center my-auto h-screen'>
        <h1 className="text-violet-700 font-semibold text-3xl">Your Cart is Empty</h1>
        <Link to={'/'}>
        <button className=' px-4 py-1 text-xl bg-violet-800 text-white rounded hover:bg-purple-600'>Fill it!</button>
        </Link>
      </div>
    )
  }
  return (
    <div className=' flex justify-center gap-5 flex-col mt-5'>
      {cartItems?.map(items=>{
        return(
          <Card key={items.id} {...items}/>
        )
      })}
      <hr className=' w-[65%] mx-auto' />
      <div className=' flex justify-around'>
        <h1 className=' text-xl text-violet-600 font-semibold'>Total</h1>
        <p className=' text-xl  text-violet-600 font-semibold'>$ {totalAmount.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default AddToCart