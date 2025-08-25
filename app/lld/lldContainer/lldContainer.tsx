"use client";

import LLDAccordion from "@/components/LLDAccordion";
import { lldData } from "@/constants/lld/questions/data";
export default function LLDContainer() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="flex justify-center items-center my-10 ">
        <h3 className="font-mono font-extrabold text-3xl">
          LLD Questions for Top PBC Interviews
        </h3>
      </div>
      <LLDAccordion items={lldData.items} />
    </div>
  );
}
