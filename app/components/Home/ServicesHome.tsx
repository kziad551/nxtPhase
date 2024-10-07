// components/ServicesHome.tsx
import React from 'react';

const services = [
  {
    title: 'Educate your workforce',
    description: 'We offer masterclasses and education programs to truly understand the strengths and weaknesses of GenAI and showcase practical applications.',
    imageUrl: '/images/serv1.png',
    className: 'bg-white', // Default white background
  },
  {
    title: 'Find opportunities',
    description: 'We offer full-day workshops to guide your workforce in spotting, assessing, and prioritizing GenAI opportunities for your operation and your services.',
    imageUrl: '/images/serv2.png',
    // Update the className to use the gradient background
    className: 'bg-gradient-to-l from-[#d6d7d9] to-[#e4e5e7]', // Gradient background for the second card
  },
  {
    title: 'Implement solutions',
    description: 'We have a senior team of AI experts and project managers to support or lead the implementation of your most valuable GenAI use-cases.',
    imageUrl: '/images/serv3.png',
    className: 'bg-white', // Default white background
  },
];

const ServicesHome = () => {
  return (
    <div className="max-w-7xl mx-auto px-4  mt-12">
      <h2 className="text-[36px] sm:text-[48px] md:text-[57px] mb-8">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className={`border rounded-[20px] ${service.className}`}>
            <div className="px-6 pt-6">
              <h3 className="text-28px mb-10">{service.title}</h3>
              <p className="text-base min-h-[100px]">{service.description}</p>
            </div>
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-56 object-cover rounded-[20px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesHome;
