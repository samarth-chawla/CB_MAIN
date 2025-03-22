import React from 'react';
import { Link } from 'react-scroll';
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div name="home" className="h-screen w-full hero mt-10">
      <div className="x mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row bg-[#111111b6] w-full text-center pb-4">
        <div className="flex flex-col items-center justify-center h-full ml-10">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white flex gap-2 items-baseline pb-4 md:gap-4">
            Welcome to <p className="text-xl md:text-3xl lg:text-4xl bg">Campus Blocks</p>
          </h2>
          <div className="home_inner_typewriter">
              <span className="home_inner_typewriter_gap text-sm md:text-lg lg:text-xl">WHERE BYTES CREATE </span>
              <span className='text-sm md:text-lg lg:text-xl'>
                <Typewriter 
                  options={{
                    strings: ["SUCCESS", "PASSION","BONDS"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          <div>
            <Link to="events" duration={500} className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#c1121d] to-[#c73f48] cursor-pointer font-medium gap-2">
              Past Events
              <span className="group-hover:rotate-90 duration-300 font-bold text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;