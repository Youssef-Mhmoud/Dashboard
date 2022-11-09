import React from "react";
import Button from "../components/Button";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { chatData } from "../data/dummy";

const Chat = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 rounded-lg p-8 bg-slate-50 dark:bg-[#42464D] w-96 shadow-2xl animate-[zoomIn_.5s_forwards]">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button
            type="button"
            className="text-white text-xs px-4 bg-orange-800 rounded"
          >
            4 New
          </button>
        </div>
        <Button
          text={<MdOutlineCancel />}
          borderRadius={"50%"}
          size="2xl"
          color={"rgb(153, 171, 180)"}
          bgHover={"light-gray"}
        />
      </div>
      <div className="mt-5">
        {chatData.map((item, i) => {
          return (
            <div
              className="flex p-3 gap-5 items-center leading8 cursor-pointer border-b-1 border-color"
              key={i}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt=""
                  className="rounded-full w-10 h-10"
                />
                <span className={`w-3 h-3 rounded-full bg-${item.active} absolute right-0 bottom-0`}></span>
              </div>
              <div>
                <p className="font-semibold dark:text-gray-200 mb-1">
                  {item.message}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.time}
                </p>
              </div>
            </div>
          );
        })}
        <div className="mt-5">
          <Button text={"See all messages"} bgColor={currentColor} borderRadius='10px' width={'full'} color='white'/>
        </div>
      </div>
    </div>
  );
};

export default Chat;
