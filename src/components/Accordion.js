import React, { useState, useEffect } from "react";

// import icons
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const Accordion = ({ accordion, isOpen, setOpenAccordionId, id }) => {
  //destructure accordion
  const { question, answer } = accordion;
  const idString = "accordion-" + id;

  var height = 0;

  useEffect(() => {
    const thisElem = document.getElementById(idString);
    if (
      isOpen &&
      thisElem.getBoundingClientRect().bottom > window.innerHeight
    ) {
      window.scrollTo({
        top:
          window.scrollY +
          thisElem.getBoundingClientRect().bottom -
          window.innerHeight + 50,
        behavior: "smooth",
      });
    }
  }, [isOpen]);

  return (
    <div
      onClick={() => {
        isOpen ? setOpenAccordionId(null) : setOpenAccordionId(id);
      }}
      className="cursor-pointer"
      id={idString}
    >
      <div className="bg-white border rounded-sm">
        <div className="min-h-[60px] flex items-center justify-between px-[30px]">
          <h6 className="h6">{question}</h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className="text-[20px] text-neutral-500" />
            ) : (
              <FaChevronCircleDown className="text-[20px] text-neutral-500" />
            )}
          </div>
        </div>
        {/* descrição */}
        <div
          className={`${
            isOpen ? "active-acc" : "min-0 max-h-0"
          }  overflow-hidden flex justify-center transition-all px-[30px] text-justify`}
        >
          <div className="mt-6">
            {answer.map((paragraph, index) => (
              <p className="py-2" key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
