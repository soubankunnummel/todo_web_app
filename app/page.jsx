'use client';

import Auth from "@/components/auth/Auth";
import Empty from "@/components/Empty/Empty";
import Form from "@/components/Todo/Form";
import Todo from "@/components/Todo/Todo";
import { getTodos } from "@/services/todoServices";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { IoReorderThree } from "react-icons/io5";

export default function Myday() {
  const today = new Date();
  const options = { weekday: "long", day: "numeric", month: "long" };
  const fullDate = today.toLocaleDateString("en-US", options);

  const { data: session } = useSession();

  const { data: todos, isLoading, isError } = useQuery({
    queryKey: ['todos', session?.user?.id], // Unique key for each user
    queryFn: () => getTodos(session?.user?.id), // Function reference, not invocation
    enabled: !!session?.user?.id, // Only fetch if user ID is available
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60 * 5,
    onSuccess: (data) => {
      console.log("Fetched todos:", data);
    },
  });
  console.log(todos)

  if (!session) return <Auth />; // Redirect to login if not authenticated
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load todos</div>;

  return (
    <div className="pt-10 md:ps-16 p-5 md:pe-10 relative w-full h-screen text-white">
      <IoReorderThree className="md:hidden block text-3xl" />
      <h1 className="text-4xl">My Day</h1>
      <p className="mt-3">{fullDate}</p>
      <Image
        src="/assets/img/bg-img.jpg"
        alt="bg-img"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="md:h-3/4 h-[70%] mt-4 overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-1">
          {todos?.length > 0 ? (
            todos.map((todo) => <Todo key={todo._id} {...todo} />)
          ) : (
            <Empty />
          )}
        </div>
      </div>
      <Form />
    </div>
  );
}
