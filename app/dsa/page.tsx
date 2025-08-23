import React from "react";
import DSAContainer from "./DSAContainer";
import BinarySearchContainer from "./BinarySearchContainer";

const page = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 py-10">
      <div className="grid grid-cols-1 gap-10">
        {/* Section 1 */}
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="text-2xl md:text-3xl font-mono mb-5 text-center">
            Let&apos;s Learn Array - since it&apos;s the traditional way to
            start
          </h3>
          <DSAContainer />
        </div>

        {/* Section 2 */}
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="text-2xl md:text-3xl font-mono mb-5 text-center">
            Let&apos;s Learn Binary Search - A smart way to search your data
          </h3>
          <BinarySearchContainer />
        </div>

        {/* Section 3 */}
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="text-2xl md:text-3xl font-mono mb-5 text-center">
            Let&apos;s Learn Array - since it&apos;s the traditional worship of
            DSA
          </h3>
          <DSAContainer />
        </div>

        {/* Section 4 */}
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="text-2xl md:text-3xl font-mono mb-5 text-center">
            Let&apos;s Learn Array - since it&apos;s the traditional worship of
            DSA
          </h3>
          <DSAContainer />
        </div>
      </div>
    </div>
  );
};

export default page;
