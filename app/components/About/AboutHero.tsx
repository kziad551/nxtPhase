import React from 'react';

const AboutHero = () => {
  return (
    <div
      className="flex justify-center h-[700px] lg:h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/back1.png)', // Update the path as needed
      }}
    >
      <div className="text-center mt-52">
        {/* Set font size to 102px only on large screens and adjust for smaller screens */}
        <h2 className="text-[102px] text-[48px] md:text-[60px] lg:text-[102px] ">
          WE KEEP AI SIMPLE
        </h2>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg w-[90%] md:w-[60%] lg:w-[40%] mx-auto">
          We help companies effectively leverage AI by translating abstract concepts into actionable, step-by-step plans and implementations that drive real business value.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
