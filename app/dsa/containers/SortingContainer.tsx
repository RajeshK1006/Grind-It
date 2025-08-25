import sortingTheory from "@/constants/dsa/sorting/sortingTheory";
import sortingBeginner from "@/constants/dsa/sorting/sortingBeginner";
import sortingIntermediate from "@/constants/dsa/sorting/sortingIntermediate";
import sortingAdvance from "@/constants/dsa/sorting/sortingAdvance";
import sortingInterviewTips from "@/constants/dsa/sorting/sortingInterviewTips";

import DSAAccordion from "@/components/DSAAccordion";

const SortingContainer = () => {
  const sections = [
    sortingTheory,
    sortingBeginner,
    sortingIntermediate,
    sortingAdvance,
    sortingInterviewTips,
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col w-full  gap-6 p-2 mt-2  rounded-4xl  shadow-muted-foreground">
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

export default SortingContainer;
//
