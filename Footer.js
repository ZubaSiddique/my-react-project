import React from 'react'
import { FaInstagram, FaWhatsapp, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2025 Your Company. All rights reserved.</p>

      <div className="flex justify-center gap-6 mt-2 text-xl">
        <a href="https://www.instagram.com" target="_blank" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" className="hover:text-green-500">
          <FaWhatsapp />
        </a>
        <a href="https://www.google.com" target="_blank" className="hover:text-red-500">
          <FaGoogle />
        </a>
      </div>

      <p className="mt-2">📞 Contact: +1 234 567 890</p>
    </footer>
  );
}

  
  