"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* logo */}
        <Link href="/" className="text-lg font-bold">
          MyLogo
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 60px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 bg-white z-[100] md:hidden overflow-hidden"
          >
            <div className="h-full flex flex-col relative">

              {/* Menu Items */}
              <ul className="mt-10 flex flex-col gap-6 text-gray-800 text-lg text-center font-medium px-6">
                {NAV_LINKS.filter((link) => link.name !== "Patreon" && link.name !== "Shop").map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  {/* Patreon & Shop */}
                  <div className="flex justify-center gap-12 mt-2">
                    {NAV_LINKS.filter((link) => link.name === "Patreon" || link.name === "Shop").map((link) => (
                      <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </li>
              </ul>

              {/* Bottom Buttons */}
              <div className="absolute bottom-0 left-0 w-full flex flex-col items-center gap-3 px-6 pb-6">
                <button className="w-full max-w-[400px] border border-gray-300 rounded-lg py-3 text-gray-700 font-medium">
                  Login
                </button>
                <button className="w-full max-w-[400px] bg-gray-700 text-white rounded-lg py-3 font-medium">
                  Get in touch →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </>
  );
}
