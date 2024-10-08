"use client";
import React, { useState, useEffect } from 'react';

const AboutSustainable: React.FC = () => {
  const frames = [
    'Frame 1.png',
    'Frame 2.png',
    'Frame 3.png',
    'Frame 4.png',
    'Frame 5.png',
    'Frame 6.png',
  ];

  const titles = [
    'Simple and pragmatic approach',
    'Simple and pragmatic approach',
    'Value driven priorities',
    'Value driven priorities',
    'Sustainable solutions',
    'Sustainable solutions',
  ]; // Titles corresponding to each frame

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0); // State to track the current frame index
  const [fadeIn, setFadeIn] = useState(true); // State to control image fade effect
  const [titleFadeIn, setTitleFadeIn] = useState(true); // State to control title fade effect

  // Scroll event handler to update the frame based on scroll position
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionHeight = window.innerHeight;

    // Calculate which frame should be displayed based on scroll position
    const newIndex = Math.min(
      frames.length - 1,
      Math.floor(scrollPosition / sectionHeight)
    );

    // Fade out, change image and title, then fade in
    if (newIndex !== currentFrameIndex) {
      setFadeIn(false); // Start fade out for image
      if (titles[newIndex] !== titles[currentFrameIndex]) {
        setTitleFadeIn(false); // Start fade out for title if it changes
      }

      setTimeout(() => {
        setCurrentFrameIndex(newIndex); // Change the frame
        setFadeIn(true); // Start fade in for image
        if (titles[newIndex] !== titles[currentFrameIndex]) {
          setTitleFadeIn(true); // Start fade in for title
        }
      }, 300); // Duration of fade out (same as CSS transition)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, [currentFrameIndex]); // Add currentFrameIndex as dependency to ensure latest value

  return (
    <div className="bg-black min-h-[600vh]"> {/* Adjust height for scrolling */}
      {/* Sticky container */}
      <div className="sticky top-0 h-screen z-10 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        {/* Left Side - Dynamic Title */}
        <div className="w-full md:w-1/2 text-white px-8 py-12 h-[50vh] md:h-auto"> {/* Set height for mobile */}
          <h2 className={` pt-[100px] md:pt-0 text-center md:text-left text-[35px] sm:text-[40px] md:text-[48px] lg:text-[57px] transition-opacity duration-300 ${titleFadeIn ? 'opacity-100' : 'opacity-0'}`}>
            {titles[currentFrameIndex]} {/* Dynamically change the title */}
          </h2>
        </div>

        {/* Right Side - Dynamically change images */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-[50vh] md:h-auto"> {/* Set height for mobile */}
          <img
            src={`/images/${frames[currentFrameIndex]}`} // Show only the current frame image
            alt={`Sustainable Frame ${currentFrameIndex + 1}`}
            className={`w-[250px] sm:w-[300px] md:w-[400px] h-auto object-cover rounded-lg transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSustainable;
