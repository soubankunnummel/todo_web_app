import Image from "next/image";
import React from "react";

export default function Empty() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="p-10 rounded-md bg-zinc-600/80 flex flex-col items-center backdrop-blur-sm">
        <Image
          src="/assets/img/emty-msg-bg.png"
          alt="empty"
          width={200}
          height={200}
        />
       <div className=" max-w-[220px] mx-auto ">
       <h4 className="text-2xl text-center"> Focus on your day </h4>
        <p className="text-[12px] mt-3 text-center ">
          Get things done with My day, a list that refresh every day
        </p>
       </div>
      </div>
    </div>
  );
}
