"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: "DSA", link: "/dsa" },
    { title: "LLD", link: "/lld" },
    { title: "OOPs", link: "/oops" },
    { title: "Blogs", link: "/blogs" },
  ];

  return (
    <header className="bg-gray-50 shadow sticky top-0 z-50 font-mono">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 hover:text-indigo-500 transition-colors">
            Grind It
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {menuItems.map((item, idx) => (
            <div key={idx} className="relative group">
              <Link
                href={item.link}
                className="text-gray-800 font-semibold hover:text-indigo-600 transition-colors"
              >
                {item.title} <ChevronDown className="inline w-4 h-4 ml-1" />
              </Link>

              {/* Dropdown */}
              <div className="absolute left-0 mt-2 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity min-w-[150px] z-50">
                <Link
                  href={item.link}
                  className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 transition"
                >
                  Go to {item.title}
                </Link>
              </div>
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 shadow-inner">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="block px-6 py-3 text-gray-800 font-semibold border-b border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
