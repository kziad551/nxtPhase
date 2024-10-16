import React from 'react';

const AboutHero = () => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center text-black"
      style={{
        backgroundImage: 'url(/images/back1.png)', // Update the path as needed
      }}
    >
      <div className="text-center">
        {/* Set font size to 102px only on large screens and adjust for smaller screens */}
        <h2 className="text-[36px] md:text-[80px] lg:text-[102px] mb-7 md:mb-3 ">
          WE KEEP AI SIMPLE
        </h2>

        <p className="text-xl md:text-3xl  w-[90%] md:w-[60%] lg:w-[50%] mx-auto px-5">
          We help companies effectively leverage AI by translating abstract concepts into actionable, step-by-step plans and implementations that drive real business value.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
