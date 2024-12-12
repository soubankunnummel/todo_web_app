import Link from "next/link";
import React, { useState } from "react";

export default function Items({ name, icon, onClick, selected, path}) {
  return (
   <Link href={`/${path}`}>
    <div
      className={` ${selected && 'bg-zinc-700'}  relative flex items-center justify-between w-full h-[40px] text-[14px] px-2 cursor-pointer text-white rounded-sm hover:border-zinc-700  hover:bg-zinc-700 `}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        {icon} <p>{name}</p>
      </div>
      <div className="w-5 h-5 rounded-full bg-zinc-600 flex justify-center items-center text-[12px] ">
        3
      </div>

     { selected && <div className="absolute left-0 w-1 rounded-2xl h-3 bg-sky-400"></div>}
    </div></Link>
  );
}
