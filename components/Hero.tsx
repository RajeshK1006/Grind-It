"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
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
    const generated = [...Array(12)].map(() => ({
      size: Math.random() * 35 + 15,
      top: Math.random() * 90,
      left: Math.random() * 90,
      delay: Math.random() * 5,
      duration: Math.random() * 12 + 5,
      color: ["#C7D2FE", "#F9A8D4", "#D8B4FE", "#FDE68A", "#6EE7B7", "#FDBA74"][
        Math.floor(Math.random() * 6)
      ],
    }));
    setShapes(generated);
  }, []);

  const features = [
    {
      title: "Structured DSA Roadmap 🧩",
      desc: "Step-by-step coverage of Arrays, Strings, Trees, Graphs, DP, and more with curated problems.",
      row: 1,
      col: 2,
      color: "bg-indigo-100",
    },
    {
      title: "LLD & System Design ⚡",
      desc: "Hands-on practice with low-level and system design problems to crack real-world interviews.",
      row: 2,
      col: 1,
      color: "bg-pink-100",
    },
    {
      title: "OOPs & Core Java 🚀",
      desc: "Solid understanding of OOP principles, design patterns, and Java fundamentals for interviews.",
      row: 2,
      col: 1,
      color: "bg-purple-100",
    },
    {
      title: "Guided Tutorials 📚",
      desc: "Easy-to-follow guides, explanations, and notes to make tough concepts simple.",
      row: 1,
      col: 1,
      color: "bg-yellow-100",
    },
    {
      title: "Interview Prep Hub ✨",
      desc: "From coding rounds to system design—everything you need in one place.",
      row: 1,
      col: 2,
      color: "bg-teal-100",
    },
    {
      title: "Self-Paced Learning 🏃",
      desc: "Flexible practice plans and structured paths so you learn at your own speed.",
      row: 1,
      col: 3,
      color: "bg-orange-100",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-20 font-mono relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left relative">
          {shapes.map((shape, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-60 animate-float"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                top: `${shape.top}%`,
                left: `${shape.left / 2}%`,
                animationDelay: `${shape.delay}s`,
                animationDuration: `${shape.duration}s`,
                backgroundColor: shape.color,
              }}
            />
          ))}

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight relative z-30">
            One-Stop Interview Prep for PBCs & Top Startups
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl text-gray-700 relative z-10">
            Structured plans, self-paced learning, and curated resources to help
            you crack DSA, LLD, OOPs, and Blogs. Learn at your own pace and
            master interviews efficiently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 relative z-10">
            <Link href="/signup">
              <button className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition">
                Get Started
              </button>
            </Link>
            <Link href="/features">
              <button className="border border-indigo-600 text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition">
                Explore Features
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-end relative z-0 mb-10 md:mb-0">
          <p className="text-indigo-200 font-mono font-bold text-7xl mb-4 text-center md:text-right animate-pulse">
            🎉 Where code meets chaos… literally floating! 🚀
          </p>
          <div className="relative w-3/4 h-96">
            {shapes.map((shape, i) => (
              <div
                key={i + 100}
                className="absolute rounded-full opacity-60 animate-float"
                style={{
                  width: `${shape.size}px`,
                  height: `${shape.size}px`,
                  top: `${shape.top}%`,
                  left: `${50 + shape.left / 2}%`,
                  animationDelay: `${shape.delay}s`,
                  animationDuration: `${shape.duration}s`,
                  backgroundColor: shape.color,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bento Box for large screens */}
      <div className="hidden lg:grid xl:grid container mx-auto px-6 mt-16 relative z-10 grid-cols-3 grid-rows-3 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-lg shadow-sm transform transition duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer col-span-${feature.col} row-span-${feature.row} flex flex-col justify-center ${feature.color}`}
          >
            <h3 className="text-xl font-bold mb-2 text-indigo-700">
              {feature.title}
            </h3>
            <p className="text-gray-800">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom Bento Box for medium and small screens */}
      <div className="grid lg:hidden container mx-auto px-6 mt-16 relative z-10 grid-cols-1 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-center ${feature.color} animate-fade-in`}
          >
            <h3 className="text-lg font-bold mb-2 text-indigo-700">
              {feature.title}
            </h3>
            <p className="text-gray-800">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Floating funky shapes */}
      {shapes.map((shape, i) => (
        <div
          key={i + 200}
          className="absolute rounded-full opacity-30 animate-float pointer-events-none"
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
    </section>
  );
};

export default Hero;
