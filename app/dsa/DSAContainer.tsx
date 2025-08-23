import section1 from "@/constants/dsa/section1";
import arrayAdvance from "@/constants/dsa/arrays/arraysAdvance";
import arrayIntermediate from "@/constants/dsa/arrays/arraysIntermediate";
import arrayBeginner from "@/constants/dsa/arrays/arraysBeginner";
import arrayTheory from "@/constants/dsa/arrays/arraysTheory";
import arrayInterviewTips from "@/constants/dsa/arrays/arraysInterviewTips";

import DSAAccordion from "@/components/DSAAccordion";

const DSAContainer = () => {
  const sections = [
    arrayTheory,
    arrayBeginner,
    arrayIntermediate,
    arrayAdvance,
    arrayInterviewTips,
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
        {/* <div className="mt-5"></div> */}
      </div>
    </div>
  );
};

export default DSAContainer;
//
