import React from "react";

interface SectionFilterProps {
  sections: Array<{
    id: number;
    name: string;
    image: string;
  }>;
  selectedSectionId: number | null;
  onSelectSection: (sectionId: number) => void;
  primaryColour: string; // Add this prop to receive the primary colour
}

const SectionFilter: React.FC<SectionFilterProps> = ({
  sections,
  selectedSectionId,
  onSelectSection,
  primaryColour,
}) => {
  return (
    <div className="flex my-4">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`text-center cursor-pointer  w-28 h-36 ${
            selectedSectionId === section.id ? "border-b-4" : ""
          }`}
          style={{
            borderColor:
              selectedSectionId === section.id ? primaryColour : "transparent",
          }}
          onClick={() => onSelectSection(section.id)}
        >
          <div className="relative mx-auto">
            <img
              src={section.image}
              alt={section.name}
              className={`w-[82px] h-[82px] rounded-full object-cover mx-auto ${
                selectedSectionId === section.id ? "border-2" : ""
              }`}
              style={{
                borderColor:
                  selectedSectionId === section.id
                    ? primaryColour
                    : "transparent",
                padding: "4px",
              }}
            />
          </div>
          <p
            className={`mt-2 text-primaryText font-semibold text-base ${
              selectedSectionId === section.id ? "font-bold" : ""
            }`}
          >
            {section.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionFilter;
