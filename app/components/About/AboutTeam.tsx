import React from 'react'


const Consultants=[
    {
       imageUrl:'/images/team1.png',
       attribute:'FOUNDER',
       name:'Koen Verschuren',
       email:'koen@nxtphase.ai',
    },
    {
        imageUrl:'/images/team2.png',
        attribute:'FOUNDER',
        name:'Marco Kotrotsos',
        email:'marco@nxtphase.ai',
     },
     {
        imageUrl:'/images/team3.png',
        attribute:'FOUNDER',
        name:'Maaike Groenewege',
        email:'maaike@nxtphase.ai',
     },

]

const Developers=[
    {
       imageUrl:'/images/team4.png',
       attribute:'FOUNDER',
       name:'Paul Snijders',
       email:'paul@nxtphase.ai',
    },
    {
        imageUrl:'/images/team5.png',
        attribute:'FOUNDER',
        name:'Koen Verschuren',
        email:'koen@nxtphase.ai',
     },
     {
        imageUrl:'/images/team6.png',
        attribute:'FOUNDER',
        name:'Wiemer van der Veur',
        email:'wiemer@nxtphase.ai',
     },
     {
        imageUrl:'/images/team7.png',
        attribute:'FOUNDER',
        name:'Flavia de Oliveira',
        email:'flavia@nxtphase.ai',
     },
     {
        imageUrl:'/images/team8.png',
        attribute:'FOUNDER',
        name:'Koen Verschuren',
        email:'koen@nxtphase.ai',
     },
     {
        imageUrl:'/images/team9.png',
        attribute:'FOUNDER',
        name:'Koen Verschuren',
        email:'koen@nxtphase.ai',
     },

]
const AboutTeam = () => {
  return (
    <div className='max-w-7xl mx-auto px-4  my-32 '>
      <h2 className='text-[36px] sm:text-[48px] md:text-[57px] pb-6 text-center'>We Find AI <span className="bg-custom-green px-3 py-2 text-white rounded-[20px]">opportunities</span> and </h2>
      <div className='flex justify-center text-center'>
      <h2 style={{ transform: 'rotate(5deg)' }} className='text-[36px] sm:text-[48px] md:text-[57px] bg-custom-green  px-3 text-center text-white rounded-[20px]'>Implement  </h2>
      <h2 className='text-[36px] sm:text-[48px] md:text-[57px] text-center pl-3'>  them</h2>
      </div>
      <h2 className="text-[36px] sm:text-[48px] md:text-[57px] mb-8 mt-32">Consultants</h2>
       {/* Cards Consultans Section */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Consultants.map((consultant, index) => (
          <div
            key={index}
            className=" rounded-lg "
          >
            {/* Image */}
            <img
              src={consultant.imageUrl}
              alt={consultant.name}
              className="w-full object-cover rounded-t-lg"
            />
            {/* Attribute */}
            <p className="text-gray-500 text-xs mt-4">{consultant.attribute}</p>
            {/* Name and Email */}
            <div className="flex justify-between items-center mt-2">
              <span className="text-[22px]">{consultant.name}</span>
              <span className="text-[16px]">{consultant.email}</span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-[36px] sm:text-[48px] md:text-[57px] mb-8 mt-12">Developers</h2>
       {/* Cards Developers Section */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Developers.map((developer, index) => (
          <div
            key={index}
            className=" rounded-lg "
          >
            {/* Image */}
            <img
              src={developer.imageUrl}
              alt={developer.name}
              className="w-full object-cover rounded-t-lg"
            />
            {/* Attribute */}
            <p className="text-gray-500 text-xs mt-4">{developer.attribute}</p>
            {/* Name and Email */}
            <div className="flex justify-between items-center mt-2">
              <span className="text-[18px] md:text-[22px]">{developer.name}</span>
              <span className="text-[16px]">{developer.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutTeam
