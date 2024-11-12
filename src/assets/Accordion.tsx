import React, { useState } from "react";

// Define props interface
interface AccordionProps {
  title: string;
  text: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, text }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 mt-5 bg-gradient-to-r from-gray-200/30 to-gray-500/70 backdrop-blur-3xl rounded-2xl shadow-xl">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between">
        <span className="Accordion-h1">{title}</span>
        <span className="plusminus">{open ? "-" : "+"}</span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden mt-2 text-p1 accordion-text">{text}</div>
      </div>
    </div>
  );
};

export default Accordion;
