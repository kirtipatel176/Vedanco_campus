"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const PROGRAMS = [
  {
    id: "01",
    title: "Applied AI Integration: Complete Coding Agents Course",
    instructor: "Vedanco AI Faculty, Industry Experts",
    rating: 4.8,
    reviews: "6,027 ratings",
    price: "Coming Soon",
    bestseller: true,
    image: "/assets/course-ai.png",
  },
  {
    id: "02",
    title: "Performance Marketing & Brand Strategy Exam Prep Course",
    instructor: "Vedanco Growth Team",
    rating: 4.7,
    reviews: "185,066 ratings",
    price: "Coming Soon",
    bestseller: true,
    image: "/assets/course-marketing.png",
  },
  {
    id: "03",
    title: "Venture & Entrepreneurship: The Complete Founder Course",
    instructor: "Vedanco Startup Incubator",
    rating: 4.7,
    reviews: "40,564 ratings",
    price: "Coming Soon",
    bestseller: true,
    image: "/assets/course-venture.png",
  },
  {
    id: "04",
    title: "Software & Systems Engineering Masterclass [2026]",
    instructor: "Vedanco Engineering Dept.",
    rating: 4.6,
    reviews: "2,817 ratings",
    price: "Coming Soon",
    bestseller: true,
    image: "/assets/course-software.png",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="w-full py-16 bg-white relative">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">

        {/* Header (Udemy style is very simple, left aligned) */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Trending Courses
          </h2>
        </div>

        {/* Udemy Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:cursor-pointer group shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Course Image / Banner */}
              <div className="w-full aspect-video relative overflow-hidden bg-gray-100 border-b border-gray-100">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={program.id === "01"}
                />
              </div>

              {/* Course Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 mb-1 group-hover:text-blue-800 transition-colors duration-200">
                  {program.title}
                </h3>

                {/* Instructor */}
                <p className="text-xs text-gray-500 mb-2 truncate">
                  {program.instructor}
                </p>

                {/* Ratings & Badges */}
                <div className="flex items-center flex-wrap gap-2 mb-2 mt-auto">
                  {program.bestseller && (
                    <span className="px-2 py-0.5 bg-[#eceb98] text-[#3d3c0a] text-xs font-bold rounded-sm">
                      Bestseller
                    </span>
                  )}

                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-amber-700">{program.rating}</span>
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                  </div>

                  <span className="text-xs text-gray-500 border border-gray-200 px-1 py-0.5 rounded-sm">
                    {program.reviews}
                  </span>
                </div>

                {/* Price */}
                <div className="text-sm font-bold text-blue-700 bg-blue-50/70 border border-blue-100/50 px-2.5 py-1 rounded-md inline-block w-fit mt-1 tracking-wide">
                  {program.price}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
