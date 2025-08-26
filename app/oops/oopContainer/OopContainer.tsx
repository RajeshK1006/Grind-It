"use client";

import OopAccordion from "@/components/OopAccordion";
import { oopData } from "@/constants/oops/oopsData";

export default function OopContainer() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 min-h-screen">
      <div className="flex justify-center items-center my-6 sm:my-10 text-center">
        <h3 className="font-mono font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          LLD Questions for Top PBC Interviews
        </h3>
      </div>

      {/* Container adjusts for all screen sizes */}
      <div className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto">
        <OopAccordion items={oopData.items} />
      </div>
    </div>
  );
}
