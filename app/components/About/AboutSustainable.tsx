import React from 'react';

const AboutSustainable: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12 text-white flex flex-col md:flex-row items-center justify-between h-auto md:h-screen">
        {/* Left Side - Title */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-[36px] sm:text-[48px] md:text-[57px] lg:w-[70%]">
            Sustainable Solutions
          </h2>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/aboutsus.png" // Replace with your image path
            alt="Sustainable Practices"
            className="w-[300px] h-auto md:w-[400px] md:h-[400px] rounded-lg" // Responsive image
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSustainable;
