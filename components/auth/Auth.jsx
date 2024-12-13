"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";

export default function Auth() {
  const { data: session } = useSession(); // Fixed typo
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await getProviders();
        setProviders(res);
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    };

    fetchProviders();
  }, []);

  // Show authentication screen only if the user is not authenticated
  if (session?.user) return null;

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-white/10 backdrop-blur-md absolute z-50"
    >
      <div className="text-white">
        <h1 className="text-3xl">Welcome to My Day</h1>
        {providers &&
          Object.values(providers).map((provider) => (
            <p className="pt-3" key={provider.id}>
              Sign in to get started{" "}
              <span
                className="hover:underline text-blue-400 cursor-pointer"
                onClick={() => signIn(provider.id)} // Corrected to a callback
              >
                Sign Up with {provider.name}
              </span>
            </p>
          ))}
      </div>
    </div>
  );
}
