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
      title: "DSA Wizardry 🧙‍♂️",
      desc: "Solved 400+ algorithm problems across Arrays, Strings, Trees, Graphs, DP, and more.",
      row: 1,
      col: 2,
      color: "bg-indigo-100",
    },
    {
      title: "LLD & System Mojo ⚡",
      desc: "Designed scalable, clean, and OOP-friendly architectures. Low-level designs with flair!",
      row: 2,
      col: 1,
      color: "bg-pink-100",
    },
    {
      title: "OOPs Playground 🚀",
      desc: "Mastered OOP principles and SOLID designs while building multiple projects.",
      row: 2,
      col: 1,
      color: "bg-purple-100",
    },
    {
      title: "Blogs & Tutorials 📚",
      desc: "Shared structured guides and tutorials to help peers learn efficiently.",
      row: 1,
      col: 1,
      color: "bg-yellow-100",
    },
    {
      title: "Why I Stand Out ✨",
      desc: "Consistency, creativity, and problem-solving—building projects that scale, mastering concepts, and sharing knowledge.",
      row: 1,
      col: 2,
      color: "bg-teal-100",
    },
    {
      title: "Self-Paced Learning 🏃",
      desc: "Learn and practice at your own convenience with structured plans and resources.",
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
          <p className="text-indigo-200 font-mono font-bold text-4xl mb-4 text-center md:text-right animate-pulse">
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
            className={`p-8 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 col-span-${feature.col} row-span-${feature.row} flex flex-col justify-center ${feature.color}`}
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
