import React from "react";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";
import { useDispatch } from "react-redux";
import {removeFromCart,addItemsQuantity, subtractQuantity} from "../feature/services/cartSlice";

const Card = (props) => {
  const { title, price, image, quantity } = props;
  const dispatch = useDispatch();
  const oneItemPrice = price * quantity;

  return (
    <div className=" flex justify-around">
      <div className=" flex items-center gap-3">
        <img className="w-[100px] h-[100px] object-cover" src={image} alt="" />
        <div>
          <h1 className=" text-violet-500">{title.substring(0, 25)}...</h1>
          <p className=" text-violet-600 font-semibold text-xl">
            $ {oneItemPrice.toFixed(2)}
          </p>
          <p
            onClick={() => dispatch(removeFromCart(props))}
            className=" text-red-600 cursor-pointer select-none"
          >
            remove
          </p>
        </div>
      </div>
      <div className=" flex items-center justify-center flex-col gap-2">
        <button
          onClick={() => dispatch(addItemsQuantity(props))}
          className=" bg-indigo-700 rounded-full text-white text-2xl active:opacity-[.5]"
        >
          <IoIosArrowDropupCircle />
        </button>
        <p className=" text-xl text-indigo-600 font-semibold">{quantity}</p>
        <button
          onClick={() => quantity > 1 && dispatch(subtractQuantity(props))}
          className=" bg-indigo-700 rounded-full text-white text-2xl active:opacity-[.5]"
        >
          <IoIosArrowDropdownCircle />
        </button>
      </div>
    </div>
  );
};

export default Card;
