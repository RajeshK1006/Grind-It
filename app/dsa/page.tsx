import React from "react";
import DSAContainer from "./DSAContainer";
import BinarySearchContainer from "./BinarySearchContainer";
import Link from "next/link";

const page = () => {
  return (
    <div className="grid  grid-cols-1 mx-auto p-5 justify-center items-center">
      <div className="flex flex-col  justify-center items-center mx-auto min-w-screen px-10 my-5">
        <h3 className=" mt-5 mx-auto font-mono text-3xl ">
          Lets Learn Array - since its the traditional Way to start
        </h3>
        <DSAContainer></DSAContainer>
      </div>

      <div className="flex flex-col  justify-center items-center mx-auto min-w-screen  px-10 my-5">
        <h3 className=" mt-5 mx-auto font-mono text-3xl ">
          Lets Learn Binaary Search - A Smart way to search your data
        </h3>
        <BinarySearchContainer></BinarySearchContainer>
      </div>

      <div className="flex flex-col  justify-center items-center mx-auto min-w-screen  px-10 my-5">
        <h3 className=" mt-5 mx-auto font-mono text-3xl ">
          Lets Learn Array - since its the traditional Worship of DSA
        </h3>
        <DSAContainer></DSAContainer>
      </div>

      <div className="flex flex-col  justify-center items-center mx-auto min-w-screen  px-10 my-5">
        <h3 className=" mt-5 mx-auto font-mono text-3xl ">
          Lets Learn Array - since its the traditional Worship of DSA
        </h3>
        <DSAContainer></DSAContainer>
      </div>
    </div>
  );
};

export default page;
