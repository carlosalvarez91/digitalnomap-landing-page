"use client"
import { useState } from "react";
import { useTheme } from "next-themes";
import Logo from "./logo";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme } = useTheme();

  /*return (
    <header className="w-full sticky-nav blurry-bg">
            <div className="flex flex-row items-center justify-between p-5 max-w-7xl mx-auto">
            <span className="mb-4 text-2xl font-medium text-black transition duration-300 hover:text-gray-300 dark:text-gray-300 dark:hover:text-white md:mb-0">
              <Logo dark={theme === "dark"} />
            </span>
            <DarkModeButton className="ml-auto text-black outline-none dark:text-gray-300"/>
        </div>
    </header>
  )*/


  return (
    <header className="w-full sticky-nav blurry-bg">
      <div className="flex flex-col flex-wrap max-w-5xl p-1 lg:p-0 mx-auto md:flex-row">
        <div className="flex flex-row items-center justify-between p-2 md:p-1">
            <span className="text-2xl font-medium text-black transition duration-300 hover:text-gray-300 dark:text-gray-300 dark:hover:text-white md:mb-0">
            <a 
                href="https://digitalnomap.com" 
                rel="noopener noreferrer"
                className="cursor-pointer text-black dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
              >
              <Logo dark={theme === "dark"} />
            </a>
            </span>
          <button
            className=" ml-auto text-black outline-none dark:text-gray-300 md:hidden"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="3" y1="6" y2="6" x2="21"></line>
              <line x1="3" y1="12" y2="12" x2="21"></line>
              <line x1="3" y1="18" y2="18" x2="21"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="flex flex-wrap items-center justify-center pt-1 pl-2 ml-1 space-x-8 md:space-x-16 md:mx-auto md:pl-14">
           {/* <Link
              href="/#features"
              className="text-black transition duration-300 dark:text-gray-300 hover:text-gray-300"
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className="text-black transition duration-300 dark:text-gray-300 hover:text-gray-300"
            >
              Pricing
            </Link>
              <span className="text-black transition duration-300 dark:text-gray-300 hover:text-gray-300">
                Demo
              </span>*/}
          </div>
          <DarkModeButton />
            <a 
                href="https://www.instagram.com/digitalnomap" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer text-black dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
        </div>
      </div>
    </header>
  );
}