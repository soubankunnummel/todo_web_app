"use client";
import { addTodo } from "@/services/todoServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function Form({ page }) {
  const [todo, setTodo] = useState("");
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      setTodo(""); // Clear the input
    },
    onError: (error) => {
      console.error("Error adding todo:", error.message);
    },
  });

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;

    addTodoMutation.mutate({ text: todo, userid: session?.user?.id });
  };

  return (
    <div className="flex items-center relative">
      <input
        type="text"
        className="w-full h-14 bg-primary/80 rounded-sm outline-none placeholder:text-white backdrop-blur-sm px-10"
        title={`Add a task in "${page}"`}
        placeholder="Add a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo(e)}
        disabled={addTodoMutation.isLoading}
      />
      <FaPlus
        className="absolute md:left-5 left-8 cursor-pointer"
        onClick={handleAddTodo}
      />
    </div>
  );
}
