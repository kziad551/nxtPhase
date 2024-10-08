import React from 'react';

const Footer = () => {
  return (
    <footer className="text-black pb-8 px-4 pt-20 mt-10  bg-cover bg-center shadow-2xl "  style={{
      backgroundImage: 'url(/images/back1.png)', // Update the path as needed
    }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Column: Logo, Email, and Phone */}
        <div className="flex flex-col">
          <div className=" mb-24">
          <img src="/images/logofooter.png" alt="Logo" className="h-12 md:h-18 w-auto" />
          </div>
          <div className="mb-2 text-[24px] md:text-32px">
            Email: <a href="mailto:Koen@nxtphase.ai" className=" text-xl md:text-2xl underline">Koen@nxtphase.ai</a>
          </div>
          <div className="mb-2 text-[24px] md:text-32px">
            Phone: <a href="tel:+31655454226" className="">+31 6 55454226</a>
          </div>
        </div>

        {/* Second Column: Sitemap */}
        <div className="flex flex-col">
          <h3 className="text-[24px] md:text-32px font-semibold mb-2">Sitemap</h3>
          <ul className="space-y-1 text-xl md:text-2xl">
            <li><a href="/" className="leading-loose">Home</a></li>
            <li><a href="/about" className="leading-loose">About</a></li>
            <li><a href="/#solutions" className="leading-loose">Solutions</a></li>
            <li><a href="/#bookaCall" className="leading-loose">Book a Call</a></li>
          </ul>
        </div>
      </div>

      {/* Rights Reserved within the container */}
      <div className="max-w-7xl mx-auto  mt-16 md:mt-32 text-[16px] md:text-2xl">
        &copy; {new Date().getFullYear()} NXT Phase AI. All rights are reserved. 
      </div>
    </footer>
  );
};

export default Footer;