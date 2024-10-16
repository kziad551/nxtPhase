"use client";
import React, { useState } from 'react';

const CalendarHome: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div id="bookaCall" className="max-w-7xl mx-auto px-4 mt-12 text-black">
      <h2 className="text-[28px] sm:text-[28px] md:text-[57px]">Interested in learning more?</h2>
      <h2 className="text-[20px] sm:text-[20px] md:text-4xl mb-8">Schedule time with our CEO below.</h2>

      {isLoading && (
  <div className="flex flex-col justify-center items-center h-[700px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900 mb-4"></div>
    <p className="text-gray-700 text-lg">Loading calendar...</p>
  </div>
)}


      <iframe
        src="https://calendly.com/koen-nxtphase/30min?embed_domain=yourdomain.com&embed_type=Inline?hide_gdpr_banner=1"
        width="100%"
        height="700px"
        style={{ minWidth: '320px', height: '700px', display: isLoading ? 'none' : 'block' }}
        title="Calendly Schedule"
        onLoad={handleLoad}
      />
    </div>
  );
};

export default CalendarHome;
