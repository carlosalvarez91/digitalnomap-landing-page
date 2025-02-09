import React from 'react';
import Header from '../components/header';

export default function Support() {
  return (
    <main className="h-screen">
      <Header />
      <div className="z-10 w-full flex items-center justify-center font-mono text-sm h-[500px]">
        <div className="flex flex-col gap-4">
          <p>Need help? We're here to assist you!</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>Email: carlosalvarez1391@gmail.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}