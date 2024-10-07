"use client";

import React, { useState } from 'react';

const videoPeople = [
  {
    posterUrl: '/images/aboutpeople.png',
    playicon: '/images/playicon.png',
    VideoLink: '/images/video.mp4',
  },
  {
    posterUrl: '/images/aboutpeople.png',
    playicon: '/images/playicon.png',
    VideoLink: '/images/video.mp4',
  },
  {
    posterUrl: '/images/aboutpeople.png',
    playicon: '/images/playicon.png',
    VideoLink: '/images/video.mp4',
  },
];

const AboutPeople = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handleVideoPlay = (index: number) => {
    setPlayingIndex(index); // Set the currently playing video
  };

  return (
    <div className='max-w-7xl mx-auto px-4 my-32'>
      <h2 className='text-[36px] sm:text-[48px] md:text-[57px] mb-8 mt-32 md:w-[70%] leading-tight'>
        Meet The People who will be working on your project
      </h2>

      {/* Cards in a row */}
      <div className='flex flex-col md:flex-row justify-between gap-4'>
        {videoPeople.map((person, index) => (
          <div key={index} className='relative group w-full md:w-1/3 mb-4'>
            {playingIndex === index ? (
              // Video element (same size as poster)
              <video
                src={person.VideoLink}
                className='w-full h-full object-cover'
                controls
                autoPlay
                onEnded={() => setPlayingIndex(null)}
              />
            ) : (
              // Poster image with play icon in the center
              <div
                className='relative cursor-pointer w-full h-full'
                onClick={() => handleVideoPlay(index)}
              >
                {/* Poster Image */}
                <img
                  src={person.posterUrl}
                  alt='Video Poster'
                  className='w-full h-full object-cover'
                />
                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={person.playicon}
                    alt='Play Icon'
                    className='w-24 h-24 group-hover:scale-110 transition-transform duration-200'
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPeople;
