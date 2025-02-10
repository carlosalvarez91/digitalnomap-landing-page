"use client"
import Image from "next/image";
import Header from "./components/header";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Footer from "./components/footer";


export default function Home() {
  const { theme } = useTheme();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state for loading


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    
      const data = await res.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage('An error occurred. Please try again.', error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date("2025-02-20").getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);

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

      <form onSubmit={handleSubmit} className="p-4 flex items-center flex-col">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border rounded w-full"
        />
        <button type="submit" disabled={isLoading} className={`${isLoading && 'opacity-50'} mt-2 w-56 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded`}>
          {isLoading && (
          <svg className="animate-spin h-5 w-5 text-gray-600 mr-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          )}
          Join Waitlist
        </button>
      </form>
      {message && <p className="mt-2 text-sm">{message}</p>}

        {/*<a
            className="inline-flex m-2 items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white opacity-50 cursor-not-allowed"
            aria-label="Apple Store"
            rel="noreferrer"
            href="#"
          >
            <span className="flex justify-center">Apple store</span>
          </a>
          <br className="sm:hidden" />
            <a
              className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300 opacity-50 cursor-not-allowed"
              aria-label="Google Play"
              href="#"
            >
              <span className="flex justify-center">Google Play</span>
            </a>*/}
        </div>
        <div className="mt-5 text-center">
              <h1 className="block text-3xl mb-2 dark:text-gray-300">Launching soon 🚀</h1>
              <div className="flex justify-center space-x-6 ">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold dark:text-white">{timeLeft.days}</span>
                  <span className="text-sm dark:text-gray-400">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold dark:text-white">{timeLeft.hours}</span>
                  <span className="text-sm dark:text-gray-400">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold dark:text-white">{timeLeft.minutes}</span>
                  <span className="text-sm dark:text-gray-400">Min</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold dark:text-white">{timeLeft.seconds}</span>
                  <span className="text-sm dark:text-gray-400">Sec</span>
                </div>
              </div> 
          </div>
      </div>
      <div className="w-full mx-auto md:w-1/2 flex justify-center mb-32">
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
  <Footer />
  </div>
  );
}
