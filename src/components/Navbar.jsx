import React, { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: '/' , title:'Home'},
    { id: 2, link: '#about' , title:'About'},
    { id: 3, link: '/events' , title:'Events'},
    { id: 4, link: '/team' , title:'Team'},
    { id: 5, link: '/contact' , title:'Contact'},
  ];

  return (
    <nav className="flex justify-between items-center w-[100vw] h-20 px-4 text-white bg-black fixed z-50">
      <div className='flex gap-2 justify-center items-center'>
        <img src='/logo.png' className='h-10'></img>
        <h1 className="text-2xl font-bold md:text-4xl"><span className='text-[#c1121d]'>C</span>ampus <span className='text-[#c1121d]'>B</span>locks</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link,title }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium hover:scale-[1.3] hover:underline duration-200">
            <Link to={link} duration={500} className='transition-all duration-300'>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={() => setNav(!nav)} to={link} duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;