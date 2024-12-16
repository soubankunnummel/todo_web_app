import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function Profile() {
  const { data: session } = useSession();
  return (
    <div className=" flex overflow-hidden w-full  gap-3 text-white  items-center my-4">
      <div
        className="flex justify-center items-center 
       w-10 h-10  rounded-full bg-zinc-600 text-white"
      >
       <Image src={session?.user?.image} alt="profile" width={50} height={50} className="rounded-full" />
      </div>
      <h6 className="max-w-[40px] text-[12px] " title={session?.user?.email} >{session?.user?.email} </h6>
    </div>
  );
}
