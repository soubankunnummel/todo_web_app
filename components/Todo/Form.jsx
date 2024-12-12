import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function Form({page}) {
  return (
    <div className="flex items-center ">
      <input
        type="text"
        name=""
        className="w-full relative  h-14 bg-primary/80 rounded-sm outline-none  placeholder:text-white backdrop-blur-sm px-10 "
        placeholder="Add a task"
        title={`Add a task in "${page}"`}
        />
        <FaPlus className="absolute left-20"/>
    </div>
  );
}
