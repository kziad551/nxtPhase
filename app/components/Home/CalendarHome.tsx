"use client"; 
import React from 'react';


const CalendarHome: React.FC = () => {
  

  return (
    <div id="bookaCall" className="max-w-7xl mx-auto px-4 mt-12 ">
      <h2 className="text-[28px] sm:text-[28px] md:text-[57px]">Interested in learning more?</h2>
      <h2 className="text-[20px] sm:text-[20px] md:text-4xl mb-8">Schedule time with our CEO below.</h2>

       
      <iframe 
        src="https://calendly.com/koen-nxtphase/30min?embed_domain=yourdomain.com&embed_type=Inline?hide_gdpr_banner=1" 
        width="100%" 
        height="700px" 
        style={{ minWidth: '320px', height: '700px', }} 
        title="Calendly Schedule"
      />
      
  
     
    </div>
  );
};

export default CalendarHome;
