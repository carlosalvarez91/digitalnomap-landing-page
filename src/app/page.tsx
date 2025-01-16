"use client"
import Image from "next/image";
import Header from "./components/header";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-screen">
    <Header />
    <section className="relative">
    <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16 flex flex-col md:flex-row">
      <div className="w-full pb-5 mx-auto text-center md:w-1/2 flex flex-col justify-center">
        <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
          Feeling lonely while travelling?
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
           Never again.
          </span>
        </h1>
        <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
          Nomap helps you connect with other nomads around you.
        </p>
        <div className="mt-6 text-center md:ml-6">
          <a
            className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
            aria-label="learn more"
            rel="noreferrer"
            href="https://github.com/minor/plutonium/"
          >
            <span className="flex justify-center">Apple store</span>
          </a>
          <br className="sm:hidden" />
            <a
              className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
              aria-label="learn more"
            >
              <span className="flex justify-center">Google Play</span>
            </a>
        </div>
      </div>
      <div className="w-full mx-auto md:w-1/2 flex justify-center">
        <Image 
          src={theme === 'dark' ? '/dark.png' : '/light.png'}
         alt="Digitalnomap app"
          width={500}
          height={500}
          className="w-80 h-auto"
          priority
        />      
      </div>
    </div>
  </section>
  </div>
  );
}
