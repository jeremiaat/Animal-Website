import React, { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Animals", href: "/animals" },
    { name: "Wallpapers", href: "/wallpapers" },
    { name: "Facts", href: "/facts" },
    { name: "About Us", href: "/aboutus" },
  ];

  const container={
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  const item = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    }


  return (
    <>
      <style>{`
        :root {
          --primary-color: #38e07b;
          --secondary-color: #1f3a2c;
          --background-color: #121212;
          --text-primary: #e0e0e0;
          --text-secondary: #a0a0a0;
          --accent-color: #28a745;
          --border-color: #333333;
          --card-background: #1e1e1e;
        }
      `}</style>

      <header className="fixed w-full my-4 justify-center z-20 top-0">
        <div 
        
        className="max-w-7xl mx-auto flex items-center glassmorphism2 bg-black justify-between px-4 py-3 md:py-4">
          {/* Logo */}
          <a href="/" className=" flex items-center text-[var(--primary-color)] font-bold text-xl gap-2">
            Animalia
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-[var(--text-primary)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[var(--primary-color)] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <FaUserCircle className="text-gray-400 text-2xl" />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[var(--card-background)] border-t border-[var(--border-color)]">
            <nav className="flex flex-col gap-4 px-6 py-4 text-[var(--text-primary)]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[var(--primary-color)] transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
