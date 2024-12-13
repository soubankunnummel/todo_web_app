'use client'
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function Form({page}) {
  const [todo, setTodo] = useState('')
  console.log(todo)
  const handleAddTodo = () => {
    console.log(todo)
    if (todo.trim() !== "") {
      console.log("Todo added:", todo); // Replace this with your add logic
      setTodo(""); // Reset the input field
    }
    // if (todo.trim()) {
    //   fetch(`/api/todo/add`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ todo }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       setTodo("");
    //     });
    // }
  };

  return (
    <div className="flex items-center ">
      <input
        type="text"
        name=""
        className="w-full relative h-14 bg-primary/80 rounded-sm outline-none  placeholder:text-white backdrop-blur-sm px-10 "
        placeholder="Add a task"
        title={`Add a task in "${page}"`}
        onKeyDownCapture={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAddTodo()

          }
        }}
        />
        <FaPlus className="absolute md:left-20  left-8"/>
    </div>
  );
}
