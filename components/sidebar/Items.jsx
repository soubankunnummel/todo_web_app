"use client";
import React, { useState } from "react";

export default function Items({ name, icon }) {
  const [selected, setSelected] = useState(false);
  return (
    <div className="border-l-2 border-x-blue-300 flex items-center justify-between w-full h-[40px] text-[14px] px-2 cursor-pointer text-white rounded-sm hover:border-zinc-700  hover:bg-zinc-700  ">
      <div className="flex items-center gap-3">
        {icon} <p>{name}</p>
      </div>
      <div className="w-5 h-5 rounded-full bg-zinc-600 flex justify-center items-center text-[12px] ">
        3
      </div>
    </div>
  );
}
