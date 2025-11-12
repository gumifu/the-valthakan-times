"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-gray-900/70 backdrop-blur-md border-b border-[rgba(48,45,154,0.2)]">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* logo */}
        <Link href="/" className="text-lg font-bold text-white">
          MyLogo
        </Link>

        {/* Hamburger Meniu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-[rgba(48,45,154,0.2)] transition text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-indigo-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-blue-gray-900 flex flex-col p-6 md:hidden"
          >
            <div>
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <X size={28} />
                </button>
              </div>

              <ul className="mt-10 flex flex-col gap-6 text-white text-lg text-center font-medium">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-indigo-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute bottom-6 left-0 w-full flex flex-col items-center gap-3 px-6">
              <button className="w-full max-w-[400px] border border-[rgba(48,45,154,0.3)] rounded-lg py-2 text-white font-medium hover:bg-[rgba(48,45,154,0.2)] transition-colors">
                Login
              </button>
              <button className="w-full max-w-[400px] bg-indigo-700 text-white rounded-lg py-2 font-medium hover:bg-indigo-600 transition-colors">
                Get in touch →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
