import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { cartData } from "../data/dummy";
import Button from "./Button";

const Cart = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="fixed w-screen bg-half-transparent right-0 top-0 nav-item ">
      <div className="h-screen dark:bg-[#484B52] bg-white md:w-400 float-right duration-1000 ease-in-out dark:text-gray-200 transition-all p-8 animate-[fadeInRight_.5s_forwards]">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <Button
            text={<MdOutlineCancel />}
            borderRadius="50%"
            color={"rgb(153, 171, 180)"}
            size="2xl"
            bgHover={"light-gray"}
          />
        </div>
        <div className="mt-5">
          {cartData.map((item, i) => {
            return (
              <div
                key={i}
                className="flex gap-5 p-4 leading-8 border-b-1 border-color dark:border-gray-600"
              >
                <img src={item.image} alt="" className="w-24 h-80 rounded" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm dark:text-gray-400 text-gray-600 font-semibold">
                    {item.category}
                  </p>
                  <div className="flex mt-2 gap-4 items-center">
                    <div className="font-semibold text-lg">{item.price}</div>
                    <div className="flex items-center gap-3 ">
                      <p className="text-red-600 border-1 rounded-full dark:border-gray-400 p-1 cursor-pointer">
                        <AiOutlineMinus />
                      </p>
                      <p className="border-1 px-2 rounded dark:border-gray-400">
                        0
                      </p>
                      <p className="text-green-600 border-1 rounded-full dark:border-gray-400 p-1 cursor-pointer">
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-5 mb-3 leading-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="mt-5">
            <Button text={"Place Order"} bgColor={currentColor} width='full' borderRadius={'10px'} color="white"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
