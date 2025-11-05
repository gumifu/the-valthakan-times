"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full flex flex-col shadow-md bg-[#000000]"
      style={{
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
    >
      <div className="flex items-center justify-between w-full max-w-full bg-[#1C1145] h-[68px] px-4 py-4 border-b-0">
        {/* Left Section: Logo + Menu */}
        <div className="flex items-center gap-5 overflow-x-auto">
          {/* Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/publication/logo/c580f13a-9189-4848-a515-0f86fc9d78ac/144_Dale_C_Sander_Valthakan_Times_800x800.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link
            href="https://thevalthakantimes.beehiiv.com/recommendations"
            className="text-white font-medium text-[19.2px] px-2 py-1 rounded-md hover:text-gray-100 hover:bg-[#5E2A8C] hover:border-[#7A4D94] border border-transparent transition-all"
          >
            Recommendations
          </Link>

          <button className="flex items-center text-white font-medium text-[19.2px] px-2 py-1 rounded-md hover:text-gray-100 hover:bg-[#5E2A8C] hover:border-[#7A4D94] border border-transparent transition-all">
            Resources
            <ChevronDown className="ml-1 w-5 h-5 text-gray-200" />
          </button>

          <Link
            href="https://thevalthakantimes.beehiiv.com/archive"
            target="_blank"
            className="text-white font-medium text-[19.2px] px-2 py-1 rounded-md hover:text-gray-100 hover:bg-[#5E2A8C] hover:border-[#7A4D94] border border-transparent transition-all"
          >
            Newsletter
          </Link>

          <Link
            href="https://patreon.com/ValthakanLiteraryUniverse?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
            target="_blank"
            className="text-white font-medium text-[19.2px] px-2 py-1 rounded-md hover:text-gray-100 hover:bg-[#5E2A8C] hover:border-[#7A4D94] border border-transparent transition-all"
          >
            Patreon
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col bg-[#1C1145] px-6 py-4 text-white space-y-3 border-t border-gray-700">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            href="https://thevalthakantimes.beehiiv.com/recommendations"
            onClick={() => setIsOpen(false)}
          >
            Recommendations
          </Link>
          <Link
            href="https://thevalthakantimes.beehiiv.com/archive"
            onClick={() => setIsOpen(false)}
          >
            Newsletter
          </Link>
          <Link
            href="https://patreon.com/ValthakanLiteraryUniverse"
            onClick={() => setIsOpen(false)}
          >
            Patreon
          </Link>
        </div>
      )}
    </nav>
  );
}
