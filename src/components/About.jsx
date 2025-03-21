import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20 md:text-left text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Us</p>
        </div>
        <div className='flex gap-3 items-center flex-col md:flex-row'>
          <div className='rounded-md'>
            <img src="/images/carnival.png" alt="" className='w-[100vw]'/>
          </div>
          <div>
            <p className="text-xl">
              <b>Campus Blocks</b> is dedicated to fostering a vibrant technical
              community within our college. Our mission is to provide a
              platform for students to explore, innovate, and excel in the
              field of technology.
            </p>
            <br />
            <p className="text-xl">
              We aim to empower our members with practical skills that
              complement their academic knowledge. Through hands-on
              workshops, coding sessions, and collaborative projects, Campus
              Blocks strives to bridge the gap between theoretical learning
              and real-world application.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 mt-20">
          {[
            { title: "Workshops", count: "50+" },
            { title: "Active Members", count: "200+" },
            { title: "Projects", count: "30+" }
          ].map((item, index) => (
            <div key={index} className="bg-[#622e31] rounded-lg p-6 text-center hover:scale-105 duration-500">
              <p className="text-4xl font-bold text-[#ff525d]">{item.count}</p>
              <p className="text-xl mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;