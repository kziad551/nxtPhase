"use client"; 
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default calendar styles
import './CalendarHome.css';

const CalendarHome: React.FC = () => {
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const hours: string[] = ["10:00am", "10:30am", "11:00am", "11:30am", "12:00pm", "12:30pm","1:00pm","1:30pm"];

  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

  const handleHourClick = (hour: string) => {
    setSelectedHour(hour);
  };

  const handleConfirmClick = () => {
    alert(`Confirmed time: ${selectedHour}`);
    setSelectedHour(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-12">
      <h2 className="text-[36px] sm:text-[48px] md:text-[57px]">Interested in learning more?</h2>
      <h2 className="text-[30px] sm:text-[42px] md:text-4xl mb-8">Schedule time with our CEO below.</h2>

      {/* Calendar and Time Selection Layout */}
      <div className="flex flex-col md:flex-row justify-between mt-8 bg-white sm:w-[100%] md:w-[80%] rounded-lg ">
        {/* Left Section - Name and Title */}
        <div className="w-full md:w-1/4 p-8 flex flex-col items-center lg:block">
          <img src="/images/calendarimage.png" alt="Calendar" className=" mb-4" />
          <p className="text-lg mt-2 md:mt-8">Koen</p>
          <h3 className='text-custom-blue font-bold text-2xl pb-2 md:pb-8'>Discovery Call</h3>
          <p className='font-bold text-custom-grey-2'>30 min</p>
          <p className='font-bold text-custom-grey-2'>Zoom</p>
        </div>

        {/* Center Section - Calendar */}
        <div className="w-full md:w-1/2 p-6 flex flex-col items-center md:block">
          <h3 className="text-xl pb-4 font-semibold text-custom-grey-2">Select a Date & Time</h3>
          <Calendar className="w-full" />
        </div>

        {/* Right Section - Hours */}
        <div className="w-full md:w-1/4 px-4">
          <div className='pb-4 pt-2 md:pb-8 font-bold opacity-[0.6]'>{formattedDate}</div>
          {/* Container for hours with scrollbar */}
          <div className=" space-y-2  max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {hours.map((hour: string) => (
              <div key={hour} className="flex">
                <button
                  onClick={() => handleHourClick(hour)}
                  className={`h-14 w-full px-4 border rounded-md transition-colors mx-2 
                    ${selectedHour === hour ? 'bg-gray-500 border-gray-500 text-white' : 'bg-transparent border-custom-blue-2 text-black'}`}
                >
                  {hour}
                </button>
                {selectedHour === hour && (
                  <button
                    onClick={handleConfirmClick}
                    className="h-12 w-full px-4 bg-custom-blue-2 text-white rounded-md transition-colors ml-2"
                  >
                    Confirm
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarHome;
