"use client";
import React, { useState } from "react";
import TickMark from "./TickMark";
import { FaRegStar, FaStar } from "react-icons/fa6";

export default function Todo({ id, text}) {
  const [checked, setChecked] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="w-full bg-primary hover:bg-zinc-700 cursor-pointer opacity-90 rounded-sm flex justify-between  text-start p-5 max-h-20 overflow-y-auto">
      <div className="flex items-center gap-5">
        <TickMark checked={checked} setChecked={setChecked} />
        <p className={`${checked && "line-through"}`}>
          {text}
        </p>
      </div>
      {clicked ? (
        <FaStar className="text-xl" onClick={handleClick} />

      ) : (
        <FaRegStar className="text-xl" onClick={handleClick} />

      )}
    </div>
  );
}
