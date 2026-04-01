"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ui/theme-toggle";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "The Product", href: "#product" },
    { name: "Our Journey", href: "#journey" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      custom={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="#home" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-indigo-500">
              Rocketdesk
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-rose-500 dark:text-gray-300 dark:hover:text-rose-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="#contact"
            className="hidden md:inline-flex px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
