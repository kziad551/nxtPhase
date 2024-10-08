"use client";

import React, { useState } from 'react';

const solutions = [
    {
      title: 'Marketing content creation',
      description: 'Write and illustrate your marketing content across all your channels in all your different markets with AI-powered content production',
      imageUrl: '/images/solutions.png',
      additionalImages: ['/images/client1.png', '/images/client2.png'],
      category: 'HR',
    },
    {
      title: 'Marketing content creation',
      description: 'Write and illustrate your marketing content across all your channels in all your different markets with AI-powered content production',
      imageUrl: '/images/solutions.png',
      additionalImages: ['/images/client1.png', '/images/client2.png'],
      category: 'HR',
    },
    {
      title: 'Marketing content creation',
      description: 'Write and illustrate your marketing content across all your channels in all your different markets with AI-powered content production',
      imageUrl: '/images/solutions.png',
      additionalImages: ['/images/client1.png', '/images/client2.png'],
      category: 'Marketing',
    },
    {
      title: 'Marketing content creation',
      description: 'Write and illustrate your marketing content across all your channels in all your different markets with AI-powered content production',
      imageUrl: '/images/solutions.png',
      additionalImages: ['/images/client1.png', '/images/client2.png'],
      category: 'Marketing',
    },
    {
      title: 'Marketing content creation',
      description: 'Write and illustrate your marketing content across all your channels in all your different markets with AI-powered content production',
      imageUrl: '/images/solutions.png',
      additionalImages: ['/images/client1.png', '/images/client2.png'],
      category: 'Sales',
    },
    {
      title: 'Marketing content creation',
      description: 'Write and illustrate your marketing content across all your channels in all your different markets with AI-powered content production',
      imageUrl: '/images/solutions.png',
      additionalImages: ['/images/client1.png', '/images/client2.png'],
      category: 'Sales',
    },
    {
      title: 'Marketing content creation',
      description: 'Write and illustrate your marketing content across all your channels in all your different markets with AI-powered content production',
      imageUrl: '/images/solutions.png',
      additionalImages: ['/images/client1.png', '/images/client2.png'],
      category: 'Customer Service',
    },
    {
      title: 'Marketing content creation',
      description: 'Write and illustrate your marketing content across all your channels in all your different markets with AI-powered content production',
      imageUrl: '/images/solutions.png',
      additionalImages: ['/images/client1.png', '/images/client2.png'],
      category: 'Customer Service',
    },
    {
      title: 'Marketing content creation',
      description: 'Write and illustrate your marketing content across all your channels in all your different markets with AI-powered content production',
      imageUrl: '/images/solutions.png',
      additionalImages: ['/images/client1.png', '/images/client2.png'],
      category: 'Content Creation',
    },
    {
      title: 'Marketing content creation',
      description: 'Write and illustrate your marketing content across all your channels in all your different markets with AI-powered content production',
      imageUrl: '/images/solutions.png',
      additionalImages: ['/images/client1.png', '/images/client2.png'],
      category: 'Content Creation',
    },
  ];

const categories = ['All', 'HR', 'Marketing', 'Sales', 'Customer Service', 'Content Creation'];

const SolutionsHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter solutions based on selected category
  let filteredSolutions = selectedCategory === 'All' 
    ? solutions.slice(0, 4) // Limit to 4 solutions when "All" is selected
    : solutions.filter(solution => solution.category === selectedCategory);

  return (
    <div id="solutions" className="max-w-7xl mx-auto px-4 mt-12">
      {/* Section Title */}
      <h2  className="text-[36px] sm:text-[48px] md:text-[57px] mb-8">Solutions</h2>

      {/* Filter Buttons with padding and responsive font size */}
      <div className="mb-8 px-4 sm:px-0 flex overflow-x-auto space-x-4">
  {categories.map((category, index) => (
    <button
      key={index}
      className={` mb-2 px-7 py-2 md:px-6 md:py-2 rounded-full border ${selectedCategory === category ? 'bg-custom-green border border-custom-green text-white' : 'text-custom-green border border-custom-green'} text-sm sm:text-base whitespace-nowrap sm:whitespace-normal`}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </button>
  ))}
</div>


      {/* Solutions Grid (for 'All') */}
      {selectedCategory === 'All' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSolutions.map((solution, index) => (
            <div key={index} className="border rounded-[20px] bg-white p-6">
              <img
                src={solution.imageUrl}
                alt={solution.title}
                className="w-full object-cover mb-6"
              />
              <h3 className="text-28px mb-4">{solution.title}</h3>
              <p className="text-base w-[70%] pb-8">{solution.description}</p>
              <p className="text-28px mb-4">Clients</p>
              {/* Two Images Below Clients */}
              <div className="flex space-x-4">
                {solution.additionalImages.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Client ${idx + 1}`}
                    className="w-auto h-16 object-cover"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Full-width layout for other categories
        <div className="space-y-8">
          {filteredSolutions.map((solution, index) => (
            <div key={index} className="flex flex-col md:flex-row p-6 bg-white">
              {/* Image on the left */}
              <img
                src={solution.imageUrl}
                alt={solution.title}
                className="w-full md:w-1/2 object-cover mb-4 md:mb-0 md:mr-6"
              />
              {/* Text on the right */}
              <div className="flex-1">
                <h3 className="text-28px mb-4">{solution.title}</h3>
                <p className="text-base pb-8">{solution.description}</p>
                <p className="text-28px mb-4">Clients</p>
                <div className="flex space-x-4">
                  {solution.additionalImages.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`Client ${idx + 1}`}
                      className="w-auto h-16 object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SolutionsHome;
