"use client";
import React, { useState } from "react";
import Items from "./Items";
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { usePathname } from 'next/navigation'
const sidbarItems = [
    {
      name: "My Day",
      icon: <IoSunnyOutline className="text-xl" />,
      path:"/",
    },
    {
      name: "Important",
      icon: <FaRegStar className="text-xl" />,
      path:"important",
    },
    {
      name: "Completed",
      icon: <TiTick className="text-xl" />,
      path:"completed",
    },
  ];
export default function SideBar( ) {
  const [selected, setSelected] = useState(sidbarItems[0].name);
  const pathname = usePathname();
  

 
  const handleClick = (name) => {
    setSelected(name);
  };

  return (
    <div className="w-[200px] h-screen bg-zinc-800 flex flex-col gap-2 pt-10 p-2">
      {sidbarItems.map((item) => {
        return (
          <Items
            key={item.name}
            name={item.name}
            icon={item.icon}
            onClick={() => handleClick(item.name)}
            selected={selected === item.name }
            path={item.path}
          />
        );
      })}
    </div>
  );
}
