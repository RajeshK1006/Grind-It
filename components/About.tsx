"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const AboutMe = () => {
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
    const generated = [...Array(10)].map(() => ({
      size: Math.random() * 35 + 15,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 12 + 5,
      color: ["#C7D2FE", "#F9A8D4", "#D8B4FE", "#FDE68A", "#6EE7B7", "#FDBA74"][
        Math.floor(Math.random() * 6)
      ],
    }));
    setShapes(generated);
  }, []);

  const bentoFeatures = [
    {
      title: "DSA Wizardry 🧙‍♂️",
      description:
        "Crushed 400+ algorithm problems on LeetCode, HackerRank, and Codeforces. Arrays, Trees, Graphs—name it, I solved it!",
      colSpan: 2,
      rowSpan: 1,
      color: "bg-indigo-100",
    },
    {
      title: "LLD & System Mojo ⚡",
      description:
        "Designed scalable, clean, and OOP-friendly architectures. Low-level designs with flair!",
      colSpan: 1,
      rowSpan: 2,
      color: "bg-pink-100",
    },
    {
      title: "Projects Playground 🚀",
      description:
        "Built full-stack projects using Java, Spring Boot, Next.js, and MySQL. Watch me code in action!",
      colSpan: 1,
      rowSpan: 3,
      color: "bg-purple-100",
    },
    {
      title: "Profiles & Achievements 🌟",
      description:
        "Follow me on LinkedIn, GitHub, LeetCode, HackerRank to see my journey & code magic.",
      colSpan: 2,
      rowSpan: 1,
      color: "bg-yellow-100",
    },
    {
      title: "Why I Stand Out ✨",
      description:
        "Passionate learner, problem-solver, and creator. I thrive on solving complex challenges, building projects that scale, and sharing knowledge through blogs and code. Consistency + creativity = me!",
      colSpan: 3,
      rowSpan: 1,
      color: "bg-teal-100",
    },
  ];

  const getColClass = (col: number) => {
    switch (col) {
      case 1:
        return "col-span-1";
      case 2:
        return "col-span-2";
      case 3:
        return "col-span-3";
      case 4:
        return "col-span-4";
      default:
        return "col-span-1";
    }
  };

  const getRowClass = (row: number) => {
    switch (row) {
      case 1:
        return "row-span-1";
      case 2:
        return "row-span-2";
      case 3:
        return "row-span-3";
      default:
        return "row-span-1";
    }
  };

  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden font-mono">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-indigo-600 text-center md:text-left">
          About the Creator
        </h2>

        {/* Large screens bento */}
        <div className="hidden lg:grid xl:grid grid-cols-4 gap-6">
          {bentoFeatures.map((feature, idx) => (
            <Card
              key={idx}
              className={`${getColClass(feature.colSpan)} ${getRowClass(
                feature.rowSpan
              )} transform transition duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer ${
                feature.color
              }`}
            >
              <CardHeader>
                <CardTitle className="text-lg font-bold text-indigo-700">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-800">
                  {feature.description}
                </CardDescription>
                {feature.title === "Profiles & Achievements 🌟" && (
                  <ul className="mt-2 space-y-1 text-indigo-600">
                    <li>
                      <Link
                        href="https://www.linkedin.com/in/yourprofile"
                        target="_blank"
                        className="hover:underline"
                      >
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://github.com/yourusername"
                        target="_blank"
                        className="hover:underline"
                      >
                        GitHub
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://leetcode.com/yourusername"
                        target="_blank"
                        className="hover:underline"
                      >
                        LeetCode
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.hackerrank.com/yourusername"
                        target="_blank"
                        className="hover:underline"
                      >
                        HackerRank
                      </Link>
                    </li>
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Small/medium screens 1x1 */}
        <div className="grid lg:hidden grid-cols-1 gap-6">
          {bentoFeatures.map((feature, idx) => (
            <Card
              key={idx}
              className={`transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer p-4 ${feature.color} animate-fade-in`}
            >
              <CardHeader>
                <CardTitle className="text-lg font-bold text-indigo-700">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-800">
                  {feature.description}
                </CardDescription>
                {feature.title === "Profiles & Achievements 🌟" && (
                  <ul className="mt-2 space-y-1 text-indigo-600">
                    <li>
                      <Link
                        href="https://www.linkedin.com/in/yourprofile"
                        target="_blank"
                        className="hover:underline"
                      >
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://github.com/yourusername"
                        target="_blank"
                        className="hover:underline"
                      >
                        GitHub
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://leetcode.com/yourusername"
                        target="_blank"
                        className="hover:underline"
                      >
                        LeetCode
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.hackerrank.com/yourusername"
                        target="_blank"
                        className="hover:underline"
                      >
                        HackerRank
                      </Link>
                    </li>
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Floating funky shapes */}
      {shapes.map((shape, i) => (
        <div
          key={i}
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

export default AboutMe;
