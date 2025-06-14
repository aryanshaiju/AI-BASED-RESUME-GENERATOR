"use client";

import Header from "@/components/layout/Header";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const page = () => {
  const user = useUser();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center">
        <section>
          <div className="py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 md:px-10">
            <h1 className="mt-4 lg:mt-8 mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
              Build Your Resume <span className="text-primary-700 max-sm:block">With AI</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48">
              Effortlessly Craft a Professional Resume with Our AI-Powered Builder
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <Link
                href={`${!user?.isSignedIn ? "/sign-up" : "/dashboard"}`}
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="backdrop-blur-md w-full">
        <div className="w-full mx-auto text-center max-w-screen-xl p-4 flex max-md:flex-col md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2025. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default page;
