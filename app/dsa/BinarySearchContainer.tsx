import binarySearchTheory from "@/constants/dsa/binarySearch/binarySearchTheory";
import binarySearchBeginner from "@/constants/dsa/binarySearch/binarySearchBeginner";
import binarySearchIntermediate from "@/constants/dsa/binarySearch/BinarySearchIntermediate";
import binarySearchAdvance from "@/constants/dsa/binarySearch/binarySearchAdvance";
import binarySearchInterviewTips from "@/constants/dsa/binarySearch/binarySearchInterviewTips";

import DSAAccordion from "@/components/DSAAccordion";

const BinarySearchContainer = () => {
  const sections = [
    binarySearchTheory,
    binarySearchBeginner,
    binarySearchIntermediate,
    binarySearchAdvance,
    binarySearchInterviewTips,
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col w-full  gap-6 p-2 mt-2  rounded-4xl shadow-xl shadow-muted-foreground">
        {sections.map((sec, idx) => (
          <DSAAccordion
            key={idx}
            sectionName={sec.sectionName}
            items={sec.items}
          />
        ))}
      </div>
    </div>
  );
};

export default BinarySearchContainer;
//
