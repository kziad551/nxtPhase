"use client"
import React from 'react';

const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const section = document.getElementById('bookaCall');
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

const HomeHero = () => {
  return (
    <div  className="flex justify-center items-center h-screen bg-cover bg-center "
    style={{
      backgroundImage: 'url(/images/back1.png)', // Update the path as needed
    }}
  >  <div className='absolute top-40 lg:top-32 left-80'>
    <img src="/images/burst.png" alt="Logo" className="h-20 w-auto " />
  
     
     </div>
      <div className="text-center ">
        <h2 className="text-[36px] sm:text-[48px] md:text-[57px]  ">
          Pragmatic AI Solutions,
        </h2>
        <h2 className="text-[36px] sm:text-[48px] md:text-[57px] pb-8">
          Built for Real Value
        </h2>
        <button className="bg-custom-green text-[28px] sm:text-[36px] md:text-[40px] hover:bg-green-700 text-white py-2 px-6 rounded-full">
          <a onClick={scrollToSection}>Book a Call</a>
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
