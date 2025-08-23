"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [shapes, setShapes] = useState<
    {
      size: number;
      top: number;
      left: number;
      delay: number;
      duration: number;
      color: string;
    }[]
  >([]);

  useEffect(() => {
    const generated = [...Array(6)].map(() => ({
      size: Math.random() * 20 + 10,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 5,
      color: ["#C7D2FE", "#F9A8D4", "#D8B4FE", "#FDE68A", "#6EE7B7", "#FDBA74"][
        Math.floor(Math.random() * 6)
      ],
    }));
    setShapes(generated);
  }, []);

  return (
    <footer className="relative bg-gray-50 text-gray-900 overflow-hidden font-mono">
      {/* Floating funky shapes */}
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20 animate-float pointer-events-none"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            backgroundColor: shape.color,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="mb-4 md:mb-0 text-center md:text-left max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-wide text-indigo-600 animate-pulse">
            Grind It 🎯
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Crushed <span className="font-bold">DSA problems</span>, built{" "}
            <span className="font-bold">projects</span>, and still having fun
            coding! 🚀
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition transform hover:scale-105 shadow-md">
            Let’s Code!
          </Button>

          <div className="flex gap-4 text-gray-900/80 text-lg mt-2 sm:mt-0">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-indigo-600 transition"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              className="hover:text-indigo-600 transition"
            >
              LinkedIn
            </Link>
            <Link
              href="https://leetcode.com/yourusername"
              target="_blank"
              className="hover:text-indigo-600 transition"
            >
              LeetCode
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6 py-2 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Grind It. Keep coding & vibing! 💻✨
      </div>
    </footer>
  );
};

export default Footer;
