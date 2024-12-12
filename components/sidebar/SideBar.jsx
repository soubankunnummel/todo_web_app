import React from 'react'
import Items from './Items'
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

export default function SideBar() {
    const sidbarItems = [
        {
            name:"My Day",
            icon: <IoSunnyOutline className='text-xl'/>
        },
        {
            name:"Important",
            icon: <FaRegStar className='text-xl'/>
        },
        {
            name:"Completed",
            icon: <TiTick className='text-xl'/>
        },
    ]
  return (
    <div className='w-[200px] h-screen bg-zinc-800 flex flex-col gap-2 pt-10 p-2'>
       {sidbarItems.map((item)=>{
           return <Items key={item.name} name={item.name} icon={item.icon}/>
       })}
    </div>
  )
}
