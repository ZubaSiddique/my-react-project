import React from 'react'
export default function Card() {
    return (
      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
        <img src="https://img.freepik.com/free-vector/inspirational-quote-watercolour-background_1048-18831.jpg?" alt="Placeholder" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
          <p className="text-gray-600 mt-2">This is a simple card using Tailwind CSS.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
            Read More
          </button>
        </div>
      </div>
    );
  }
  