// components/Navbar.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const scrollToSection = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  const section = document.getElementById('bookaCall');
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

const scrollToSection2 = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const section = document.getElementById('solutions');
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  
  const handleSolutionsClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      scrollToSection2(event);
    } else {
      event.preventDefault();
      window.location.href = '/#solutions'; // Redirect to the home page and scroll to #solutions
    }
  }

  return (
    <nav className="w-full p-4 absolute">
      <div className="max-w-7xl mx-auto block md:flex justify-between items-center">
        {/* Logo */}
        <div className="flex pb-5 md:pb-0 justify-center md:block">
          <Link href="/">
            <img src="/images/logofooter.png" alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Menu */}
        <ul className="flex justify-center space-x-12 text-base md:text-2xl text-black  bg-white py-4 px-4 rounded-[20px]">
          <li>
            <Link href="/" className="">Home</Link>
          </li>
          <li>
            <Link href="/about" className="">About</Link>
          </li>
          <li>
            <a href="/#solutions" onClick={handleSolutionsClick}>Solutions</a>
          </li>
        </ul>

        {/* Button */}
        <button onClick={scrollToSection} className="bg-custom-green text-sm md:text-xl hover:bg-green-700 text-white py-3 px-6 rounded-full hidden md:block">
          Book a Call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
